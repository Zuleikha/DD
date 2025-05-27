import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Pawsome Services – Pet Ireland",
  subtitle = "Your complete resource for everything dog-related in Ireland"
}) => {
  const navigate = useNavigate();
  const [selectedCounty, setSelectedCounty] = useState<string>("all-counties");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Counties in Ireland for the dropdown
  const counties = [
    "All Counties", "Carlow", "Cavan", "Clare", "Cork", "Donegal",
    "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois",
    "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath",
    "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary",
    "Waterford", "Westmeath", "Wexford", "Wicklow"
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    
    // Use geolocation for "Find Near Me"
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Success - got location
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          
          // Navigate to listings with coordinates
          navigate(`/vets?lat=${userLat}&lng=${userLng}&county=${selectedCounty}&query=${encodeURIComponent(searchQuery)}`);
        },
        (error) => {
          // Error getting location
          console.error("Error getting location:", error);
          alert("Unable to get your location. Please ensure location services are enabled.");
          
          // Fall back to regular search without coordinates
          navigate(`/vets?county=${selectedCounty}&query=${encodeURIComponent(searchQuery)}`);
        }
      );
    } else {
      // Geolocation not supported
      alert("Geolocation is not supported by your browser.");
      navigate(`/vets?county=${selectedCounty}&query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative h-[600px] md:h-[500px] overflow-hidden">
      {/* Hero Background - Changed to a friendlier blue */}
      <div className="absolute inset-0 bg-yellow-400"></div> 
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">{subtitle}</p>
        
        {/* Location Search Form */}
        <form 
          className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* County Selector */}
            <div className="flex-grow">
              <label htmlFor="hero-county-select" className="sr-only">Select county</label>
              <select
                id="hero-county-select"
                name="selectedCounty"
                className="w-full px-4 py-3 rounded-md bg-white text-gray-800 border-0 focus:ring-2 focus:ring-[#4A90E2]"
                aria-label="Select county"
                value={selectedCounty}
                onChange={(e) => setSelectedCounty(e.target.value)}
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
