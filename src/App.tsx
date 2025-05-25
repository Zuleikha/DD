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
import Blog from './components/home/BlogPreview'; // Blog component imported

// --- IMPORTANT: You need to create this component if you haven't already ---
// For the Events Calendar, you'll need a component, e.g., EventsCalendarPage.tsx
// Make sure this file exists in src/pages/EventsCalendarPage.tsx
import EventsCalendarPage from './pages/EventsCalendarPage'; // Import for Events Calendar page

// --- ADD THIS IMPORT ---
import ChatbotWidget from './components/common/ChatbotWidget'; // Adjust path if ChatbotWidget.tsx is in another directory

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

        {/* --- NEW ROUTES FOR BLOG AND EVENTS CALENDAR --- */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/events-calendar" element={<EventsCalendarPage />} />

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
      {/* --- ADD THIS COMPONENT RENDERING --- */}
      <ChatbotWidget />
    </HelmetProvider>
  );
}

export default App;