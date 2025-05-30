#!/bin/bash

# Function to update page components to use default imports
update_page_component() {
  local file=$1
  
  # Check if file exists
  if [[ ! -f "$file" ]]; then
    echo "File $file does not exist, skipping."
    return
  fi
  
  echo "Processing $file..."
  
  # Create a backup of the original file
  cp "$file" "${file}.backup"
  
  # Update import statements for data files
  sed -i "s/import { \([a-zA-Z]*Data\) } from '\(\.\.\/data\/[a-zA-Z]*_data\.js\)';/import \1 from '\2';/g" "$file"
  
  echo "✅ Updated $file to use default imports"
}

# Update all page components
echo "Updating page components to use default imports..."
for file in src/pages/*Page.tsx; do
  update_page_component "$file"
done

# Special case for CategoryDetailPage.tsx which imports multiple data files
if [[ -f "src/pages/CategoryDetailPage.tsx" ]]; then
  echo "Updating CategoryDetailPage.tsx..."
  sed -i "s/import { \([a-zA-Z]*Data\) } from '\(\.\.\/data\/[a-zA-Z]*_data\.js\)';/import \1 from '\2';/g" "src/pages/CategoryDetailPage.tsx"
fi

echo "All page components have been updated to use default imports!"
echo "Backups of the original files have been created with .backup extension."
