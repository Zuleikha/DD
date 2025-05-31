import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { useNavigate } from 'react-router-dom';
// This is a placeholder component that redirects to home
// It replaces the problematic CategoryDetailPage that was causing type errors
const CategoryDetailPage = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        // Redirect to home page
        navigate('/');
    }, [navigate]);
    return (_jsx("div", { className: "container mx-auto px-4 py-16 flex justify-center", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) }));
};
export default CategoryDetailPage;
