import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import MindersPage from './pages/MindersPage';
import MinderDetailPage from './pages/MinderDetailPage';
import VetsPage from './pages/VetsPage';
import VetDetailPage from './pages/VetDetailPage';
import ParksPage from './pages/ParksPage';
import ParkDetailPage from './pages/ParkDetailPage';
import NutritionPage from './pages/NutritionPage';
import NutritionDetailPage from './pages/NutritionDetailPage';
import TrainingPage from './pages/TrainingPage';
import TrainingDetailPage from './pages/TrainingDetailPage';
import GroomingPage from './pages/GroomingPage';
import GroomingDetailPage from './pages/GroomingDetailPage';
import PlacesPage from './pages/PlacesPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import AdvicePage from './pages/AdvicePage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Dog Minders Routes */}
            <Route path="/minders" element={<MindersPage />} />
            <Route path="/minders/:id" element={<MinderDetailPage />} />
            
            {/* Vets Routes */}
            <Route path="/vets" element={<VetsPage />} />
            <Route path="/vets/:id" element={<VetDetailPage />} />
            
            {/* Parks Routes */}
            <Route path="/parks" element={<ParksPage />} />
            <Route path="/parks/:id" element={<ParkDetailPage />} />
            
            {/* Nutrition Routes */}
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/nutrition/:id" element={<NutritionDetailPage />} />
            
            {/* Training Routes */}
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/training/:id" element={<TrainingDetailPage />} />
            
            {/* Grooming Routes */}
            <Route path="/grooming" element={<GroomingPage />} />
            <Route path="/grooming/:id" element={<GroomingDetailPage />} />
            
            {/* Places Routes */}
            <Route path="/places" element={<PlacesPage />} />
            <Route path="/places/:id" element={<PlaceDetailPage />} />
            
            {/* Other Routes */}
            <Route path="/advice" element={<AdvicePage />} />
            
            {/* 404 Route - Use HomePage as fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
