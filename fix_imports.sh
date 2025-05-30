#!/bin/bash

# Create directories if they don't exist
mkdir -p src/data
mkdir -p src/pages

# Function to update import paths in a file
update_imports() {
  local file=$1
  
  # Update imports from './xxx_data.js' to '../data/xxx_data.js'
  sed -i "s|import \(.*\) from '\./\(.*\)_data.js'|import \1 from '../data/\2_data.js'|g" "$file"
  
  # Update other local imports if needed
  sed -i "s|import \(.*\) from '\./\(.*\)'|import \1 from './\2'|g" "$file"
  
  echo "Updated imports in $file"
}

# Move page components to pages directory if they're not already there
for file in src/*.tsx; do
  if [[ -f "$file" && "$file" != "src/App.tsx" && "$file" != "src/main.tsx" ]]; then
    filename=$(basename "$file")
    if [[ ! -f "src/pages/$filename" ]]; then
      echo "Moving $file to src/pages/$filename"
      mv "$file" "src/pages/$filename"
    fi
  fi
done

# Move data files to data directory if they're not already there
for file in src/*_data.js src/*_data.d.ts; do
  if [[ -f "$file" ]]; then
    filename=$(basename "$file")
    if [[ ! -f "src/data/$filename" ]]; then
      echo "Moving $file to src/data/$filename"
      mv "$file" "src/data/$filename"
    fi
  fi
done

# Update import paths in all page components
for file in src/pages/*.tsx; do
  if [[ -f "$file" ]]; then
    update_imports "$file"
  fi
done

echo "All import paths have been updated!"
