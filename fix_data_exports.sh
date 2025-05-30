#!/bin/bash

# Function to update data files to use named exports
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
  
  # Create a new file with the correct export syntax
  cat > "$file" << EOF
// ${dataname} data
export const ${dataname}Data = [
EOF

  # Extract the data array content (everything between the square brackets)
  sed -n '/\[/,/\];/p' "${file}.backup" | 
    # Remove the first line with [ and the last line with ];
    sed '1d;$d' >> "$file"
  
  # Close the array
  echo "];
" >> "$file"
  
  echo "✅ Updated $file to use named exports"
}

# Make sure the data directory exists
if [[ ! -d "src/data" ]]; then
  echo "Error: src/data directory does not exist. Please create it first."
  exit 1
fi

# Update all data files
echo "Updating data files to use named exports..."
for file in src/data/*_data.js; do
  update_data_file "$file"
done

echo "All data files have been updated to use named exports!"
echo "Backups of the original files have been created with .backup extension."
