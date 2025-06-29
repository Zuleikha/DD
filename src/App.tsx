import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import DogChatbot from './components/common/DogChatbot';
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
import SignUpPage from './pages/SignUpPage';
import AdminDashboard from './pages/AdminDashboard';
import PetShopsPage from './pages/PetShopsPage';
import PetShopDetailPage from './pages/PetShopDetailPage';
import ScrollToTop from './components/ScrollToTop';
import MascotPage from './pages/MascotPage';
import { Toaster } from './components/ui/toaster';
//import AdvertiseForm from "./components/home/AdvertiseForm";
//import firebaseApp from './config/firebase';



// Generic redirect for typo paths like vetss, parkss, etc.
function ExtraSRedirect({ prefix }: { prefix: string }) {
  const { id } = useParams();
  return <Navigate to={`/${prefix}/${id}`} replace />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
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
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/advice" element={<AdvicePage />} />
              <Route path="/mascot" element={<MascotPage />} />
              {/* <Route path="/advertise" element={<AdvertiseForm onClose={function (): void {
                throw new Error('Function not implemented.');
              } } />} /> */}

              {/* Redirect old about-mascot route to new mascot route */}
              <Route path="/about-mascot" element={<Navigate to="/mascot" replace />} />

              {/* Catch-all fallback */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <DogChatbot />
        </div>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;

