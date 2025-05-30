import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import vetsData from '../data/vets_data';
import ListingCard from '../components/ListingCard';
import '../styles/ListingsPage.css';

const VetsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('All Counties');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [filteredVets, setFilteredVets] = useState(vetsData);
  const [uniqueCounties, setUniqueCounties] = useState<string[]>([]);
  const [uniqueSpecialties, setUniqueSpecialties] = useState<string[]>([]);

  useEffect(() => {
    // Extract unique counties
    const counties = ['All Counties', ...new Set(vetsData.map(vet => vet.county))];
    setUniqueCounties(counties);

    // Extract unique specialties
    const allSpecialties: string[] = [];
    vetsData.forEach(vet => {
      if (vet.specialties) {
        vet.specialties.forEach(specialty => {
          if (!allSpecialties.includes(specialty)) {
            allSpecialties.push(specialty);
          }
        });
      }
    });
    setUniqueSpecialties(['All Specialties', ...allSpecialties]);
  }, []);

  useEffect(() => {
    let filtered = vetsData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(vet =>
        vet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vet.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by county
    if (selectedCounty !== 'All Counties') {
      filtered = filtered.filter(vet => vet.county === selectedCounty);
    }

    // Filter by specialty
    if (selectedSpecialty !== 'All Specialties') {
      filtered = filtered.filter(vet => 
        vet.specialties?.includes(selectedSpecialty) || false
      );
    }

    setFilteredVets(filtered);
  }, [searchTerm, selectedCounty, selectedSpecialty]);

  return (
    <div className="listings-page">
      <div className="hero-section">
        <h1>Veterinarians in Ireland</h1>
        <p>Find trusted veterinary services across Ireland for your dog</p>
      </div>

      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for vets..."
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
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            {uniqueSpecialties.map((specialty, index) => (
              <option key={index} value={specialty}>{specialty}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="listings-grid">
        {filteredVets.length > 0 ? (
          filteredVets.map((vet) => (
            <ListingCard
              key={vet.id}
              id={vet.id}
              name={vet.name}
              image={vet.image}
              rating={vet.rating}
              reviewCount={vet.reviewCount}
              description={vet.description}
              county={vet.county}
              detailPath={`/vet-detail/${vet.id}`}
            />
          ))
        ) : (
          <p className="no-results">No vets found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default VetsPage;
