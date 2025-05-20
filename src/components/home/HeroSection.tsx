import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '../ui/button';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Find Dog-Friendly Places & Services Across Ireland",
  subtitle = "Your complete resource for everything dog-related in Ireland"
}) => {
  // Counties in Ireland for the dropdown
  const counties = [
    "All Counties", "Carlow", "Cavan", "Clare", "Cork", "Donegal", 
    "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", 
    "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", 
    "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", 
    "Waterford", "Westmeath", "Wexford", "Wicklow"
  ];

  return (
    <section className="relative h-[600px] md:h-[500px] overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')`,
          filter: 'brightness(0.7)'
        }}
      ></div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">{subtitle}</p>
        
        {/* Location Search */}
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* County Selector */}
            <div className="flex-grow">
              <select 
                className="w-full px-4 py-3 rounded-md bg-white text-gray-800 border-0 focus:ring-2 focus:ring-[#4A90E2]"
                aria-label="Select county"
              >
                {counties.map((county) => (
                  <option key={county} value={county.toLowerCase().replace(' ', '-')}>
                    {county}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Search Input */}
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Search for services, parks, vets..."
                className="w-full px-4 py-3 pl-10 rounded-md bg-white text-gray-800 border-0 focus:ring-2 focus:ring-[#4A90E2]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            </div>
            
            {/* Search Button */}
            <Button 
              className="py-3 px-6 bg-[#F5A623] hover:bg-[#E09612] text-white font-semibold rounded-md"
            >
              Find Near Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
