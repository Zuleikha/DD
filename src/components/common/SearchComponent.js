import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { Search, X, MapPin, Tag } from 'lucide-react';
import { searchContent, getSearchSuggestions } from '../../data/searchData';
import { useNavigate } from 'react-router-dom';
const SearchComponent = ({ isMobile = false, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [suggestions] = useState(getSearchSuggestions());
    const searchRef = useRef(null);
    const inputRef = useRef(null);
    const navigate = useNavigate();
    // Handle search
    useEffect(() => {
        if (query.trim()) {
            const searchResults = searchContent(query);
            setResults(searchResults);
            setIsOpen(true);
        }
        else {
            setResults([]);
            setIsOpen(false);
        }
    }, [query]);
    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const handleResultClick = (result) => {
        navigate(result.url);
        setQuery('');
        setIsOpen(false);
        if (onClose)
            onClose();
    };
    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        inputRef.current?.focus();
    };
    const clearSearch = () => {
        setQuery('');
        setResults([]);
        setIsOpen(false);
        inputRef.current?.focus();
    };
    const handleInputFocus = () => {
        if (query.trim()) {
            setIsOpen(true);
        }
    };
    return (_jsxs("div", { ref: searchRef, className: `relative ${isMobile ? 'w-full' : 'w-80'}`, children: [_jsxs("div", { className: "relative", children: [_jsx("input", { ref: inputRef, type: "text", value: query, onChange: (e) => setQuery(e.target.value), onFocus: handleInputFocus, placeholder: "Search vets, parks, services...", className: `
            w-full pl-10 pr-10 py-2 rounded-full border border-gray-300 
            focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent
            ${isMobile ? 'text-base' : 'text-sm'}
          ` }), _jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" }), query && (_jsx("button", { onClick: clearSearch, className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600", children: _jsx(X, { className: "h-4 w-4" }) }))] }), isOpen && (_jsx("div", { className: `
          absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50
          max-h-96 overflow-y-auto
          ${isMobile ? 'w-full' : 'min-w-96'}
        `, children: results.length > 0 ? (_jsxs("div", { className: "py-2", children: [_jsxs("div", { className: "px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100", children: ["Search Results (", results.length, ")"] }), results.map((result) => (_jsx("button", { onClick: () => handleResultClick(result), className: "w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-50 last:border-b-0 transition-colors", children: _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "flex-shrink-0 mt-1", children: _jsx("div", { className: "w-8 h-8 bg-[#4A90E2] rounded-full flex items-center justify-center", children: _jsx(Search, { className: "h-4 w-4 text-white" }) }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("div", { className: "font-medium text-gray-900 truncate", children: result.title }), _jsx("div", { className: "text-sm text-gray-500 line-clamp-2", children: result.description }), _jsxs("div", { className: "flex items-center space-x-4 mt-1", children: [_jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: [_jsx(Tag, { className: "h-3 w-3 mr-1" }), result.category] }), result.location && (_jsxs("span", { className: "inline-flex items-center text-xs text-gray-500", children: [_jsx(MapPin, { className: "h-3 w-3 mr-1" }), result.location] }))] })] })] }) }, result.id)))] })) : query.trim() ? (_jsxs("div", { className: "py-8 text-center text-gray-500", children: [_jsx(Search, { className: "h-8 w-8 mx-auto mb-2 text-gray-300" }), _jsxs("p", { className: "text-sm", children: ["No results found for \"", query, "\""] }), _jsx("p", { className: "text-xs text-gray-400 mt-1", children: "Try searching for vets, parks, or services" })] })) : (
                /* Search Suggestions */
                _jsxs("div", { className: "py-2", children: [_jsx("div", { className: "px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100", children: "Popular Searches" }), suggestions.map((suggestion, index) => (_jsx("button", { onClick: () => handleSuggestionClick(suggestion), className: "w-full px-4 py-2 text-left hover:bg-gray-50 text-sm text-gray-700 border-b border-gray-50 last:border-b-0 transition-colors", children: _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(Search, { className: "h-4 w-4 text-gray-400" }), _jsx("span", { children: suggestion })] }) }, index)))] })) }))] }));
};
export default SearchComponent;
