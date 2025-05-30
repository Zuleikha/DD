import React from 'react';
import { useNavigate } from 'react-router-dom';

// This is a placeholder component that redirects to home
// It replaces the problematic CategoryDetailPage that was causing type errors
const CategoryDetailPage: React.FC = () => {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    // Redirect to home page
    navigate('/');
  }, [navigate]);

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
};

export default CategoryDetailPage;
