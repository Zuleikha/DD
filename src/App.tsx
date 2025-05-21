import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import DetailPage from './pages/DetailPage';
import CommunityPage from './pages/CommunityPage';
import AdminDashboard from './pages/AdminDashboard';
import NutritionPage from './pages/NutritionPage';
import GroomingPage from './pages/GroomingPage';
import ParksPage from './pages/ParksPage';
import PlacesPage from './pages/PlacesPage';
import TrainingPage from './pages/TrainingPage';
import ForumPage from './pages/ForumPage';
import MarketplacePage from './pages/MarketplacePage';
import AdoptionPage from './pages/AdoptionPage';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Main section routes */}
        <Route path="/vets" element={<ListingsPage />} />
        <Route path="/parks" element={<ParksPage />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/grooming" element={<GroomingPage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/adoption" element={<AdoptionPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* Detail page routes - explicitly define each one */}
        <Route path="/vets/:id" element={<DetailPage />} />
        <Route path="/parks/:id" element={<DetailPage />} />
        <Route path="/nutrition/:id" element={<DetailPage />} />
        <Route path="/training/:id" element={<DetailPage />} />
        <Route path="/grooming/:id" element={<DetailPage />} />
        <Route path="/places/:id" element={<DetailPage />} />
        
        {/* Catch-all route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
