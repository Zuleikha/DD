import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListingCard from '../components/listings/ListingCard';
import SEO from '../components/common/SEO';
import nutritionData from '../data/nutrition_data.js';

interface Nutrition {
  id: number;
  name: string;
  address: string;
  county: string;
  phone: string;
  email: string;
  website: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  products?: string[];
  services: string[];
  brands?: string[];
  hours: string;
}

const NutritionPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  
  // Extract unique counties and products
  const counties = Array.from(new Set(nutritionData.map((item: Nutrition) => item.county)));
  
  // Safely handle products which might be undefined
  const allProducts: string[] = [];
  nutritionData.forEach((item: Nutrition) => {
    if (item.products && Array.isArray(item.products)) {
      item.products.forEach((product: string) => {
        if (!allProducts.includes(product)) {
          allProducts.push(product);
        }
      });
    }
  });
  
  // Filter nutrition stores based on search and filters
  const filteredStores = nutritionData.filter((item: Nutrition) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCounty = selectedCounty ? item.county === selectedCounty : true;
    const matchesProduct = selectedProduct ? (item.products && item.products.includes(selectedProduct)) : true;
    
    return matchesSearch && matchesCounty && matchesProduct;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Dog Nutrition Stores in Ireland | DogDays.ie"
        description="Find the best dog nutrition stores and pet food suppliers across Ireland. Browse by county or product type to find quality food for your furry friend."
        keywords="dog nutrition, pet food, dog food stores, Ireland, healthy dog food"
        canonicalUrl="https://www.dogdays.ie/nutrition"
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Dog Nutrition Stores in Ireland</h1>
        
        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input
                type="text"
                id="search"
                placeholder="Search by name or description..."
                className="w-full p-2 border border-gray-300 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="county" className="block text-sm font-medium text-gray-700 mb-1">Filter by County</label>
              <select
                id="county"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={selectedCounty}
                onChange={(e) => setSelectedCounty(e.target.value)}
              >
                <option value="">All Counties</option>
                {counties.map((county, index) => (
                  <option key={index} value={county}>{county}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Filter by Product</label>
              <select
                id="product"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
              >
                <option value="">All Products</option>
                {allProducts.map((product, index) => (
                  <option key={index} value={product}>{product}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store: Nutrition) => (
            <ListingCard
              key={store.id}
              id={store.id}
              name={store.name}
              image={store.image}
              rating={store.rating}
              reviewCount={store.reviewCount}
              description={store.description}
              county={store.county}
              detailPath={`/nutrition/${store.id}`}
            />
          ))}
        </div>
        
        {filteredStores.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No nutrition stores found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NutritionPage;
