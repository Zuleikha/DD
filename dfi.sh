#!/bin/bash

# Function to update data files to use default exports
update_data_file() {
  local file=$1
  
  # Check if file exists
  if [[ ! -f "$file" ]]; then
    echo "File $file does not exist, skipping."
    return
  fi
  
  echo "Processing $file..."
  
  # Create a backup of the original file
  cp "$file" "${file}.backup"
  
  # Get the base name without extension and directory
  local filename=$(basename "$file")
  local dataname="${filename%_data.js}"
  
  # Replace named export with default export
  sed -i "s/export const ${dataname}Data = \[/const ${dataname}Data = \[/g" "$file"
  
  # Add default export at the end if it doesn't exist
  if ! grep -q "export default ${dataname}Data;" "$file"; then
    echo -e "\nexport default ${dataname}Data;" >> "$file"
  fi
  
  echo "✅ Updated $file to use default exports"
}

# Update all data files
echo "Updating data files to use default exports..."
for file in src/data/*_data.js; do
  update_data_file "$file"
done

echo "All data files have been updated to use default exports!"
echo "Backups of the original files have been created with .backup extension."
