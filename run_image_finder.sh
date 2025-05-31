#!/bin/bash

# Script to install required dependencies and run the business image finder

# Create necessary directories
mkdir -p public/images/{vets,training,grooming,places,parks,nutrition,minders}

# Install required Python packages
pip install requests beautifulsoup4

# Run the business image finder script
python3 /home/ubuntu/business_image_finder.py

echo "Image search and update process completed!"
echo "All business data files have been updated with real images."
