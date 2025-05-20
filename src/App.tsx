import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import DetailPage from './pages/DetailPage';
import CommunityPage from './pages/CommunityPage';
import AdminDashboard from './pages/AdminDashboard';

// Detail page wrapper to handle params
const DetailPageWrapper = () => {
  const { id } = useParams();
  return <DetailPage />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/vets" element={<ListingsPage />} />
      <Route path="/vets/:id" element={<DetailPageWrapper />} />
      <Route path="/parks" element={<ListingsPage />} />
      <Route path="/parks/:id" element={<DetailPageWrapper />} />
      <Route path="/nutrition" element={<ListingsPage />} />
      <Route path="/training" element={<ListingsPage />} />
      <Route path="/grooming" element={<ListingsPage />} />
      <Route path="/places" element={<ListingsPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
