import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  pageType?: string;
  gradientClass?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Welcome to Dog Days Ireland",
  subtitle = "Your ultimate guide to dog-friendly places, services, and adventures across the Country",
  pageType = "listings",
  gradientClass = "bg-mesh-gradient-home"
}) => {
  return (
    <section className="relative h-[600px] md:h-[500px] overflow-hidden">
      {/* Bright Hero Background with Dogs */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/bright_hero_background.png')`
        }}
      ></div>
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl drop-shadow-md font-medium">
          {subtitle}
        </p>
        
        {/* Call to Action Buttons - Now with working Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/parks"
            className="bg-irish-purple hover:bg-irish-purple/90 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            🐕 Explore Parks
          </Link>
          <Link 
            to="/vets"
            className="bg-white/90 hover:bg-white text-irish-navy font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            🏥 Find Services
          </Link>
        </div>
        
        {/* Fun Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm">Dog-Friendly Places</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">200+</div>
            <div className="text-sm">Trusted Vets</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">1000+</div>
            <div className="text-sm">Happy Dog Owners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

