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
    <section className="relative h-[500px] md:h-[400px] overflow-hidden">
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
