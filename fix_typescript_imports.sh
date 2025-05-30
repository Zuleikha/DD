#!/bin/bash

# Function to update data files to use named exports
update_data_file() {
  local file=$1
  
  # Check if file exists
  if [[ ! -f "$file" ]]; then
    echo "File $file does not exist, skipping."
    return
  fi
  
  # Get the base name without extension
  local basename=$(basename "$file" .js)
  local dataname="${basename%_data}"
  
  # Create a temporary file
  local tempfile="${file}.tmp"
  
  # Check if the file already has a named export
  if grep -q "export const ${dataname}Data" "$file"; then
    echo "File $file already has named exports, skipping."
    return
  fi
  
  # Replace default export with named export
  sed "s/const ${dataname}Data = \[/export const ${dataname}Data = \[/" "$file" > "$tempfile"
  
  # Remove any existing export default statement
  sed -i "/export default ${dataname}Data;/d" "$tempfile"
  
  # Move the temporary file back to the original
  mv "$tempfile" "$file"
  
  echo "Updated $file to use named exports"
}

# Function to update page components to use named imports
update_page_component() {
  local file=$1
  
  # Check if file exists
  if [[ ! -f "$file" ]]; then
    echo "File $file does not exist, skipping."
    return
  fi
  
  # Create a temporary file
  local tempfile="${file}.tmp"
  
  # Update import statements for data files
  sed "s/import \([a-zA-Z]*Data\) from '\(\.\.\/data\/[a-zA-Z]*_data\.js\)';/import { \1 } from '\2';/" "$file" > "$tempfile"
  
  # Move the temporary file back to the original
  mv "$tempfile" "$file"
  
  echo "Updated $file to use named imports"
}

# Update all data files
echo "Updating data files to use named exports..."
for file in src/data/*_data.js; do
  update_data_file "$file"
done

# Update all page components
echo "Updating page components to use named imports..."
for file in src/pages/*Page.tsx; do
  update_page_component "$file"
done

# Special case for CategoryDetailPage.tsx which imports multiple data files
if [[ -f "src/pages/CategoryDetailPage.tsx" ]]; then
  echo "Updating CategoryDetailPage.tsx..."
  sed -i "s/import \([a-zA-Z]*Data\) from '\(\.\.\/data\/[a-zA-Z]*_data\.js\)';/import { \1 } from '\2';/g" "src/pages/CategoryDetailPage.tsx"
fi

echo "All files have been updated to use proper TypeScript named exports and imports!"
