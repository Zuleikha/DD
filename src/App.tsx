import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import MindersPage from './pages/MindersPage';
import MinderDetailPage from './pages/MinderDetailPage';
import VetsPage from './pages/VetsPage';
import VetDetailPage from './pages/VetDetailPage';
import ParksPage from './pages/ParksPage';
//import ParksPage from './WRONG_PATH';
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
import CommunityPage from './pages/CommunityPage';
import ForumPage from './pages/ForumPage';
import MarketplacePage from './pages/MarketplacePage';
import AdoptionPage from './pages/AdoptionPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PetShopsPage from './pages/PetShopsPage';
import PetShopDetailPage from './pages/PetShopDetailPage';
import ScrollToTop from './components/ScrollToTop'; // ADD THIS IMPORT
import AboutMascotPage from './pages/AboutMascotPage';


// Generic redirect for typo paths like vetss, parkss, etc.
function ExtraSRedirect({ prefix }: { prefix: string }) {
  const { id } = useParams();
  return <Navigate to={`/${prefix}/${id}`} replace />;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ADD THIS LINE - Must be inside Router but before everything else */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Redirect typo routes */}
            <Route path="/vetss/:id" element={<ExtraSRedirect prefix="vets" />} />
            <Route path="/minderss/:id" element={<ExtraSRedirect prefix="minders" />} />
            <Route path="/parkss/:id" element={<ExtraSRedirect prefix="parks" />} />
            <Route path="/placess/:id" element={<ExtraSRedirect prefix="places" />} />

            {/* Also handle base typo routes without IDs */}
            <Route path="/vetss" element={<Navigate to="/vets" replace />} />
            <Route path="/minderss" element={<Navigate to="/minders" replace />} />
            <Route path="/parkss" element={<Navigate to="/parks" replace />} />
            <Route path="/placess" element={<Navigate to="/places" replace />} />

            {/* All your actual routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/petshops" element={<PetShopsPage />} />
            <Route path="/petshops/:id" element={<PetShopDetailPage />} />
            <Route path="/minders" element={<MindersPage />} />
            <Route path="/minders/:id" element={<MinderDetailPage />} />
            <Route path="/vets" element={<VetsPage />} />
            <Route path="/vets/:id" element={<VetDetailPage />} />
            <Route path="/parks" element={<ParksPage />} />
            <Route path="/parks/:id" element={<ParkDetailPage />} />
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/nutrition/:id" element={<NutritionDetailPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/training/:id" element={<TrainingDetailPage />} />
            <Route path="/grooming" element={<GroomingPage />} />
            <Route path="/grooming/:id" element={<GroomingDetailPage />} />
            <Route path="/places" element={<PlacesPage />} />
            <Route path="/places/:id" element={<PlaceDetailPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/adoption" element={<AdoptionPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/advice" element={<AdvicePage />} />
            <Route path="/about-mascot" element={<AboutMascotPage />} />


            {/* Catch-all fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
