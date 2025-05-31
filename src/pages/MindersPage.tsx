import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Search, MapPin, Phone, Mail, Filter } from 'lucide-react';
import dogMinders from '../data/dog_minders_data.js';
import ListingCard from '../components/listings/ListingCard';

interface DogMinder {
  id: number;
  name: string;
  address: string;
  county: string;
  phone: string;
  mobile: string;
  email: string;
  website: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  services: string[];
  hours: string;
}

const MindersPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [filteredMinders, setFilteredMinders] = useState<DogMinder[]>(dogMinders);
  
  // Get unique counties for the filter dropdown
  const counties = Array.from(new Set(dogMinders.map(minder => minder.county))).sort();
  
  // Check for county parameter in URL
  useEffect(() => {
    const countyParam = searchParams.get('county');
    if (countyParam) {
      setSelectedCounty(countyParam);
    }
  }, [searchParams]);
  
  // Filter minders based on search term and selected county
  useEffect(() => {
    let filtered = dogMinders;
    
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(minder => 
        minder.name.toLowerCase().includes(lowerSearchTerm) || 
        minder.description.toLowerCase().includes(lowerSearchTerm) ||
        minder.address.toLowerCase().includes(lowerSearchTerm) ||
        minder.county.toLowerCase().includes(lowerSearchTerm)
      );
    }
    
    if (selectedCounty && selectedCounty !== 'All Counties') {
      filtered = filtered.filter(minder => minder.county === selectedCounty);
    }
    
    setFilteredMinders(filtered);
  }, [searchTerm, selectedCounty]);
  
  // Handle county change
  const handleCountyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const county = e.target.value;
    setSelectedCounty(county);
    
    // Update URL with county parameter
    if (county && county !== 'All Counties') {
      navigate(`/minders?county=${county}`);
    } else {
      navigate('/minders');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dog Minders in Ireland</h1>
      
      {/* Search and Filter Section */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Find the Perfect Dog Minder</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, description, or location..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* County Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              value={selectedCounty}
              onChange={handleCountyChange}
            >
              <option value="">All Counties</option>
              {counties.map((county) => (
                <option key={county} value={county}>{county}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mb-4">
        <p className="text-gray-600">
          Found {filteredMinders.length} dog minders
          {selectedCounty ? ` in ${selectedCounty}` : ' across Ireland'}
        </p>
      </div>
      
      {/* Dog Minders List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredMinders.length > 0 ? (
          filteredMinders.map((minder) => (
            <ListingCard
              key={minder.id}
              id={minder.id}
              name={minder.name}
              image={minder.image}
              rating={minder.rating}
              reviewCount={minder.reviewCount}
              description={minder.description}
              county={minder.county}
              address={minder.address}
              category="minders"
            />
          ))
        ) : (
          <div className="col-span-3 text-center py-8">
            <p className="text-gray-500 text-lg">No dog minders found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCounty('');
                navigate('/minders');
              }}
              className="mt-4 text-blue-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MindersPage;
