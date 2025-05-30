import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import nutritionData from '../data/nutrition_data';
import ListingCard from '../components/ListingCard';
import '../styles/ListingsPage.css';

const NutritionPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('All Counties');
  const [selectedProduct, setSelectedProduct] = useState('All Products');
  const [filteredStores, setFilteredStores] = useState(nutritionData);
  const [uniqueCounties, setUniqueCounties] = useState<string[]>([]);
  const [uniqueProducts, setUniqueProducts] = useState<string[]>([]);

  useEffect(() => {
    // Extract unique counties
    const counties = ['All Counties', ...new Set(nutritionData.map(store => store.county))];
    setUniqueCounties(counties);

    // Extract unique products
    const allProducts: string[] = [];
    nutritionData.forEach(store => {
      if (store.products) {
        store.products.forEach(product => {
          if (!allProducts.includes(product)) {
            allProducts.push(product);
          }
        });
      }
    });
    setUniqueProducts(['All Products', ...allProducts]);
  }, []);

  useEffect(() => {
    let filtered = nutritionData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(store =>
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by county
    if (selectedCounty !== 'All Counties') {
      filtered = filtered.filter(store => store.county === selectedCounty);
    }

    // Filter by product
    if (selectedProduct !== 'All Products') {
      filtered = filtered.filter(store => 
        store.products?.includes(selectedProduct) || false
      );
    }

    setFilteredStores(filtered);
  }, [searchTerm, selectedCounty, selectedProduct]);

  return (
    <div className="listings-page">
      <div className="hero-section">
        <h1>Dog Nutrition Stores in Ireland</h1>
        <p>Find the best food options and dietary advice for your dog</p>
      </div>

      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for nutrition stores..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-dropdowns">
          <select
            value={selectedCounty}
            onChange={(e) => setSelectedCounty(e.target.value)}
          >
            {uniqueCounties.map((county, index) => (
              <option key={index} value={county}>{county}</option>
            ))}
          </select>

          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            {uniqueProducts.map((product, index) => (
              <option key={index} value={product}>{product}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="listings-grid">
        {filteredStores.length > 0 ? (
          filteredStores.map((store) => (
            <ListingCard
              key={store.id}
              id={store.id}
              name={store.name}
              image={store.image}
              rating={store.rating}
              reviewCount={store.reviewCount}
              description={store.description}
              county={store.county}
              detailPath={`/nutrition-detail/${store.id}`}
            />
          ))
        ) : (
          <p className="no-results">No nutrition stores found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default NutritionPage;
