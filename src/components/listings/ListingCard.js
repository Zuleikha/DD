import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const ListingCard = ({ id, name, image, rating, reviewCount, description, county, category, specialties, }) => {
    // Determine the correct route based on the category
    const getDetailRoute = () => {
        const categoryLower = category.toLowerCase();
        console.log('Debug - Category:', categoryLower, 'ID:', id); // Add this line
        switch (categoryLower) {
            case 'vet':
            case 'find a vet': // Handle "find a vet"
                return `/vets/${id}`;
            case 'park':
            case 'parks': // Handle "parks"
            case 'parks and walks': // Handle "parks and walks"
                return `/parks/${id}`;
            case 'place':
            case 'dog friendly places': // Handle "dog friendly places"
                return `/places/${id}`;
            case 'nutrition':
                return `/nutrition/${id}`;
            case 'training':
                return `/training/${id}`;
            case 'grooming':
                return `/grooming/${id}`;
            case 'petshop':
                return `/petshops/${id}`;
            case 'minder':
                return `/minders/${id}`;
            default:
                const cleanCategory = categoryLower.replace(/\s+/g, '');
                return `/${cleanCategory}s/${id}`;
        }
    };
    return (_jsxs("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [image && image.trim() !== '' && (_jsx("img", { src: image, alt: name, className: "w-full h-48 object-cover" })), _jsxs("div", { className: "p-4", children: [_jsx("h2", { className: "text-xl font-semibold", children: name }), _jsx("p", { className: "text-sm text-gray-600", children: county }), _jsx("p", { className: "text-sm text-gray-700 mt-2", children: description }), _jsxs("p", { className: "text-sm text-yellow-600 mt-2", children: ["\u2B50 ", rating, " (", reviewCount, " reviews)"] }), specialties && specialties.length > 0 && (_jsxs("div", { className: "mt-3", children: [_jsx("h4", { className: "font-medium text-sm text-gray-800", children: "Specialties:" }), _jsx("ul", { className: "list-disc list-inside text-sm text-gray-700", children: specialties.map((s, idx) => (_jsx("li", { children: s }, idx))) })] })), _jsx("div", { className: "mt-4", children: _jsx(Link, { to: getDetailRoute(), className: "block w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-center font-medium rounded-md transition-colors duration-300", children: "View Details" }) })] })] }));
};
export default ListingCard;
