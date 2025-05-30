import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import pages
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import ParksPage from './ParksPage';
import NutritionPage from './NutritionPage';
import TrainingPage from './TrainingPage';
import GroomingPage from './GroomingPage';
import PlacesPage from './PlacesPage';
import CommunityPage from './pages/CommunityPage';
import ForumPage from './pages/ForumPage';
import MarketplacePage from './pages/MarketplacePage';
import AdoptionPage from './pages/AdoptionPage';
import AdminDashboard from './pages/AdminDashboard';
import Blog from './pages/Blog';
import EventsCalendarPage from './pages/EventsCalendarPage';
import AboutOurMascotPage from './pages/AboutOurMascotPage';
import DetailPage from './fixed_DetailPage_GoogleMap';
import MindersPage from './updated_MindersPage';
import AdvicePage from './AdvicePage';
import MinderDetailPage from './MinderDetailPage';
import VetsPage from './VetsPage';
import CategoryDetailPage from './CategoryDetailPage';

// Import components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/vets" element={<VetsPage />} />
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
              
              {/* Detail pages for original categories */}
              <Route path="/vets/:id" element={<DetailPage />} />
              <Route path="/parks/:id" element={<DetailPage />} />
              <Route path="/nutrition/:id" element={<DetailPage />} />
              <Route path="/training/:id" element={<DetailPage />} />
              <Route path="/grooming/:id" element={<DetailPage />} />
              <Route path="/places/:id" element={<DetailPage />} />
              
              {/* New pages */}
              <Route path="/minders" element={<MindersPage />} />
              <Route path="/advice" element={<AdvicePage />} />
              
              {/* New dedicated detail pages */}
              <Route path="/minder-detail/:id" element={<MinderDetailPage />} />
              <Route path="/vet-detail/:id" element={<CategoryDetailPage />} />
              <Route path="/park-detail/:id" element={<CategoryDetailPage />} />
              <Route path="/nutrition-detail/:id" element={<CategoryDetailPage />} />
              <Route path="/training-detail/:id" element={<CategoryDetailPage />} />
              <Route path="/grooming-detail/:id" element={<CategoryDetailPage />} />
              <Route path="/place-detail/:id" element={<CategoryDetailPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
