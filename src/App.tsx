import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import your layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import all your page components
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import ParksPage from './pages/ParksPage';
import NutritionPage from './pages/NutritionPage';
import TrainingPage from './pages/TrainingPage';
import GroomingPage from './pages/GroomingPage';
import PlacesPage from './pages/PlacesPage';
import CommunityPage from './pages/CommunityPage';
import ForumPage from './pages/ForumPage';
import MarketplacePage from './pages/MarketplacePage';
import AdoptionPage from './pages/AdoptionPage';
import AdminDashboard from './pages/AdminDashboard';
import Blog from './pages/Blog'; // Ensure src/pages/Blog.tsx exists and is correctly named.
import EventsCalendarPage from './pages/EventsCalendarPage';
import DetailPage from './pages/DetailPage';
import AboutOurMascotPage from './pages/AboutOurMascotPage';

// Import the ChatbotWidget from its correct location
import ChatbotWidget from './components/common/ChatbotWidget'; // Corrected path based on your last confirmation

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
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
              <Route path="/blog" element={<Blog />} />
              <Route path="/events-calendar" element={<EventsCalendarPage />} />
              <Route path="/our-mascot" element={<AboutOurMascotPage />} />
              <Route path="/vets/:id" element={<DetailPage />} />
              <Route path="/parks/:id" element={<DetailPage />} />
              <Route path="/nutrition/:id" element={<DetailPage />} />
              <Route path="/training/:id" element={<DetailPage />} />
              <Route path="/grooming/:id" element={<DetailPage />} />
              <Route path="/places/:id" element={<DetailPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <ChatbotWidget />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;