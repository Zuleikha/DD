import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackToHomeButtonProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const BackToHomeButton: React.FC<BackToHomeButtonProps> = ({ 
  className = "", 
  variant = "light" 
}) => {
  const baseClasses = "inline-flex items-center transition-colors mb-8 group";
  const variantClasses = variant === 'light' 
    ? "text-white hover:text-purple-200" 
    : "text-gray-600 hover:text-purple-600";

  return (
    <Link
      to="/"
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <ArrowLeft className="h-5 w-5 mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform" />
      Back to Home
    </Link>
  );
};

export default BackToHomeButton;

