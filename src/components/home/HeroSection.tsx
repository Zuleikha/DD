import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '../ui/button';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  // Updated the default title text as requested
  title = "Pawsome Places & Services for Your Pup – All Across Ireland",
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
      {/* Hero Background - Now a solid color */}
      <div className="absolute inset-0 bg-gray-900"></div> 
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">{subtitle}</p>
        
        {/* Location Search Form - Added a wrapping form element for semantic correctness */}
        <form className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* County Selector */}
            <div className="flex-grow">
              <label htmlFor="hero-county-select" className="sr-only">Select county</label>
              <select
                id="hero-county-select"
                name="selectedCounty"
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
              <label htmlFor="hero-search-input" className="sr-only">Search for services, parks, vets...</label>
              <input
                type="text"
                id="hero-search-input"
                name="searchQuery"
                placeholder="Search for services, parks, vets..."
                className="w-full px-4 py-3 pl-10 rounded-md bg-white text-gray-800 border-0 focus:ring-2 focus:ring-[#4A90E2]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            </div>
            
            {/* Search Button */}
            <Button
              type="submit"
              className="py-3 px-6 bg-[#F5A623] hover:bg-[#E09612] text-white font-semibold rounded-md"
            >
              Find Near Me
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;