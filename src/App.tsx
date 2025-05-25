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
import Blog from './pages/Blog'; // Assuming 'Blog' is in pages folder
import EventsCalendarPage from './pages/EventsCalendarPage';
import DetailPage from './pages/DetailPage'; // For detail pages
import AboutOurMascotPage from './pages/AboutOurMascotPage';
import Blog from './pages/Blog'; /

// Import the ChatbotWidget
import ChatbotWidget from './components/common/ChatbotWidget'; // Adjust path if ChatbotWidget.tsx is in a different folder

function App() {
  return (
    <HelmetProvider>
      {/* Router should wrap your entire application content */}
      <Router>
        <div className="App flex flex-col min-h-screen">
          {/* Header will appear on all pages */}
          <Header />

          {/* Main content area where routes are rendered */}
          <main className="flex-grow">
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

              {/* Blog and Events Calendar routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/events-calendar" element={<EventsCalendarPage />} />
              <Route path="/our-mascot" element={<AboutOurMascotPage />} /> {/* <--- NEW ROUTE ADDED */}

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
          </main>

          {/* Footer will appear on all pages */}
          <Footer />

          {/* Chatbot Widget, typically outside the main content flow but within the App div */}
          <ChatbotWidget /> {/* <--- ADDED THIS COMPONENT RENDERING */}
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;