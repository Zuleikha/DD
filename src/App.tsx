import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
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

// Detail page wrapper to handle params
const DetailPageWrapper = () => {
  const { id } = useParams();
  return <DetailPage />;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/vets" element={<ListingsPage />} />
      <Route path="/vets/:id" element={<DetailPageWrapper />} />
      <Route path="/parks" element={<ParksPage />} />
      <Route path="/parks/:id" element={<DetailPageWrapper />} />
      <Route path="/nutrition" element={<NutritionPage />} />
      <Route path="/training" element={<TrainingPage />} />
      <Route path="/grooming" element={<GroomingPage />} />
      <Route path="/places" element={<PlacesPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/forum" element={<ForumPage />} />
      <Route path="/marketplace" element={<MarketplacePage />} />
      <Route path="/adoption" element={<AdoptionPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
