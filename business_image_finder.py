#!/usr/bin/env python3
"""
Business Image Finder Script

This script automates the process of finding and adding real business images to data files.
It searches for each business by name and location, downloads images, and updates the data files.
"""

import os
import re
import json
import time
import requests
import argparse
from bs4 import BeautifulSoup
from urllib.parse import quote_plus

# Directory to save images
IMAGE_DIR = "public/images"

# User agent to mimic a browser
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

def ensure_directory_exists(directory):
    """Create directory if it doesn't exist"""
    if not os.path.exists(directory):
        os.makedirs(directory)
        print(f"Created directory: {directory}")

def clean_filename(name):
    """Convert a string to a valid filename"""
    # Replace spaces and special characters
    name = re.sub(r'[^\w\s-]', '', name.lower())
    name = re.sub(r'[\s-]+', '-', name)
    return name

def search_for_business_image(business_name, location, category):
    """Search for a business image using Google search"""
    query = f"{business_name} {location} ireland"
    encoded_query = quote_plus(query)
    search_url = f"https://www.google.com/search?q={encoded_query}&tbm=isch"
    
    headers = {
        "User-Agent": USER_AGENT
    }
    
    try:
        response = requests.get(search_url, headers=headers)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find image elements
        img_tags = soup.find_all('img')
        
        # Skip the first image (usually Google logo)
        if len(img_tags) > 1:
            for img in img_tags[1:10]:  # Check first 10 images
                if img.has_attr('src') and img['src'].startswith('http'):
                    image_url = img['src']
                    
                    # Download the image
                    img_response = requests.get(image_url, headers=headers)
                    if img_response.status_code == 200:
                        # Create category directory if it doesn't exist
                        category_dir = os.path.join(IMAGE_DIR, category)
                        ensure_directory_exists(category_dir)
                        
                        # Create a filename based on business name
                        filename = clean_filename(business_name)
                        filepath = os.path.join(category_dir, f"{filename}.jpg")
                        
                        # Save the image
                        with open(filepath, 'wb') as f:
                            f.write(img_response.content)
                        
                        # Return the relative path for the data file
                        return f"/images/{category}/{filename}.jpg"
        
        print(f"No suitable image found for {business_name}")
        return None
    
    except Exception as e:
        print(f"Error searching for {business_name}: {e}")
        return None

def process_data_file(file_path, category):
    """Process a data file to add images to businesses"""
    try:
        # Read the file content
        with open(file_path, 'r') as f:
            content = f.read()
        
        # Extract the data array using regex
        data_match = re.search(r'const\s+\w+\s*=\s*(\[[\s\S]*?\]);', content)
        if not data_match:
            print(f"Could not find data array in {file_path}")
            return
        
        data_str = data_match.group(1)
        
        # Convert to valid JSON (replace single quotes, fix trailing commas)
        data_str = data_str.replace("'", '"')
        data_str = re.sub(r',(\s*[\]}])', r'\1', data_str)
        
        # Parse the JSON
        try:
            data = json.loads(data_str)
        except json.JSONDecodeError as e:
            print(f"Error parsing JSON from {file_path}: {e}")
            return
        
        # Process each business
        updated = False
        for item in data:
            # Skip if already has a non-placeholder image
            if 'image' in item and not ('placehold' in item['image'] or item['image'] == ''):
                continue
                
            # Get business name and location
            name = item.get('name', '')
            county = item.get('county', '')
            address = item.get('address', '')
            
            if name and (county or address):
                location = address if address else county
                print(f"Searching for image: {name} in {location}")
                
                # Add a delay to avoid rate limiting
                time.sleep(2)
                
                # Search and download image
                image_path = search_for_business_image(name, location, category)
                if image_path:
                    item['image'] = image_path
                    updated = True
                    print(f"Added image for {name}: {image_path}")
        
        if updated:
            # Convert back to JavaScript format
            js_data = json.dumps(data, indent=2)
            
            # Get the variable name from the original file
            var_name_match = re.search(r'const\s+(\w+)\s*=', content)
            var_name = var_name_match.group(1) if var_name_match else f"{category}Data"
            
            # Create the new file content
            new_content = f"const {var_name} = {js_data};\n\nexport default {var_name};"
            
            # Write back to the file
            with open(file_path, 'w') as f:
                f.write(new_content)
            
            print(f"Updated {file_path} with new images")
        else:
            print(f"No updates needed for {file_path}")
    
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

def main():
    parser = argparse.ArgumentParser(description='Find and add business images to data files')
    parser.add_argument('--data-dir', default='src/data', help='Directory containing data files')
    args = parser.parse_args()
    
    # Ensure image directory exists
    ensure_directory_exists(IMAGE_DIR)
    
    # Map of file patterns to categories
    category_map = {
        'vets_data.js': 'vets',
        'training_data.js': 'training',
        'grooming_data.js': 'grooming',
        'places_data.js': 'places',
        'parks_data.js': 'parks',
        'nutrition_data.js': 'nutrition',
        'minders_data.js': 'minders',
        'dog_minders_data.js': 'minders'
    }
    
    # Process each data file
    for filename, category in category_map.items():
        file_path = os.path.join(args.data_dir, filename)
        if os.path.exists(file_path):
            print(f"\nProcessing {filename} for category: {category}")
            process_data_file(file_path, category)
        else:
            print(f"File not found: {file_path}")

if __name__ == "__main__":
    main()
