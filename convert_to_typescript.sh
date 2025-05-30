#!/bin/bash

# Function to rename data files from .js to .ts
rename_data_files() {
  echo "Converting data files from .js to .ts..."
  
  # Create backups of original files
  mkdir -p src/data/backups
  
  for file in src/data/*_data.js; do
    if [[ -f "$file" ]]; then
      filename=$(basename "$file")
      cp "$file" "src/data/backups/$filename"
      
      # Get new filename with .ts extension
      new_filename="${filename%.js}.ts"
      
      # Rename file
      mv "$file" "src/data/$new_filename"
      echo "✅ Renamed $filename to $new_filename"
    fi
  done
}

# Function to update import statements in page components
update_imports() {
  echo "Updating import statements in page components..."
  
  for file in src/pages/*Page.tsx; do
    if [[ -f "$file" ]]; then
      # Create backup
      cp "$file" "${file}.backup"
      
      # Update import statements to remove .js extension
      sed -i 's/from \(["'\'']\)\.\.\/data\/\([a-zA-Z_]*\)\.js\1/from \1\.\.\/data\/\2\1/g' "$file"
      
      echo "✅ Updated imports in $(basename "$file")"
    fi
  done
  
  # Special case for CategoryDetailPage.tsx which imports multiple data files
  if [[ -f "src/pages/CategoryDetailPage.tsx" ]]; then
    sed -i 's/from \(["'\'']\)\.\.\/data\/\([a-zA-Z_]*\)\.js\1/from \1\.\.\/data\/\2\1/g' "src/pages/CategoryDetailPage.tsx"
    echo "✅ Updated imports in CategoryDetailPage.tsx"
  fi
}

# Main execution
echo "Starting conversion of data files from .js to .ts..."

# Step 1: Rename data files
rename_data_files

# Step 2: Update import statements
update_imports

echo "Conversion complete! All data files have been converted to TypeScript (.ts) files."
echo "Backups of the original files have been created in src/data/backups/ and with .backup extension for page components."
echo "Please try deploying your project again."
