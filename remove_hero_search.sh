#!/bin/bash

# Check if the HeroSection.tsx file exists
if [ ! -f "src/components/home/HeroSection.tsx" ]; then
  echo "Error: HeroSection.tsx file not found in src/components/home/"
  echo "Please make sure you're running this script from your project root directory."
  exit 1
fi

# Create a backup of the original file
cp src/components/home/HeroSection.tsx src/components/home/HeroSection.tsx.bak
echo "Created backup at src/components/home/HeroSection.tsx.bak"

# Update the HeroSection.tsx file to remove the search form
cat > src/components/home/HeroSection.tsx << 'EOL'
import React from 'react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  pageType?: string;
  gradientClass?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Pawsome Services – Pet Ireland",
  subtitle = "Your complete resource for everything dog-related in Ireland",
  pageType = "listings", // Default to listings instead of vets
  gradientClass = "bg-mesh-gradient-home" // Default to home gradient
}) => {
  return (
    <section className="relative h-[600px] md:h-[500px] overflow-hidden">
      {/* Hero Background - Use dynamic gradient class */}
      <div className={`absolute inset-0 ${gradientClass}`}></div>
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">{subtitle}</p>
        
        {/* Search form has been removed */}
      </div>
    </section>
  );
};

export default HeroSection;
EOL

echo "Successfully removed the search form from HeroSection.tsx"
echo "To restore the original file if needed, use: mv src/components/home/HeroSection.tsx.bak src/components/home/HeroSection.tsx"
