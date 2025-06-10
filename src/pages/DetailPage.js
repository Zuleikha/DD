import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Mail, Clock, ArrowLeft, Star } from 'lucide-react';
import SEO from '../components/common/SEO';
// Import the enriched dog minders data
import dogMinders from '../data/dog_minders_data';
// Add Google Maps API key variable - leave empty until you have a valid key
// In a real application, you might load this from environment variables (e.g., process.env.REACT_APP_Maps_API_KEY)
const Maps_API_KEY = ""; // Replace with your actual API key when ready
// Mock database of all listings (typed)
const allListings = [
    // VET LISTINGS
    {
        id: 1,
        title: 'Village Vets Cabra',
        address: '2 Quarry Rd, Cabra East, Dublin 7, D07 FX97',
        rating: 4.8,
        reviewCount: 124,
        distance: '1.2 km',
        type: 'vet',
        image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
        featured: true,
        lat: 53.3643,
        lng: -6.2977,
        phone: '01 869 2309',
        website: 'https://villagevets.ie',
        email: 'cabra@villagevets.ie',
        hours: 'Mon-Fri: 8am-7pm, Sat: 9am-1pm, Sun: Closed',
        description: 'Village Vets Cabra is a modern, fully-equipped veterinary clinic providing comprehensive healthcare services for dogs, cats, and small pets. Our team of experienced veterinarians offers preventative care, surgical procedures, dental treatments, and emergency services.',
        services: ['Vaccinations', 'Microchipping', 'Surgery', 'Dental Care', 'X-Ray & Ultrasound', 'Laboratory Testing', 'Nutritional Counseling'],
        team: [
            { name: 'Dr. Sarah Murphy', role: 'Lead Veterinarian', bio: 'Dr. Murphy has over 15 years of experience in small animal medicine and surgery.' },
            { name: 'Dr. James O\'Connor', role: 'Veterinary Surgeon', bio: 'Dr. O\'Connor specializes in orthopedic procedures and emergency medicine.' }
        ]
    },
    // ... other listings (truncated for brevity)
];
const DetailPage = () => {
    const { id, type } = useParams();
    const [listing, setListing] = useState(null);
    const [minder, setMinder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        // Check if we're looking for a dog minder or a regular listing
        if (type === 'minders' && id) {
            const minderId = parseInt(id, 10);
            const foundMinder = dogMinders.find((m) => m.id === minderId);
            if (foundMinder) {
                setMinder(foundMinder);
                setListing(null);
                setLoading(false);
            }
            else {
                setError('Dog minder not found');
                setLoading(false);
            }
        }
        else if (id) {
            // Original listing lookup logic
            const listingId = parseInt(id, 10);
            const foundListing = allListings.find(l => l.id === listingId);
            if (foundListing) {
                setListing(foundListing);
                setMinder(null);
                setLoading(false);
            }
            else {
                setError('Listing not found');
                setLoading(false);
            }
        }
    }, [id, type]);
    if (loading) {
        return (_jsx("div", { className: "container mx-auto px-4 py-16 flex justify-center", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" }) }));
    }
    if (error || (!listing && !minder)) {
        return (_jsx("div", { className: "container mx-auto px-4 py-16", children: _jsxs("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded", children: [_jsx("h2", { className: "text-xl font-bold mb-2", children: "Error" }), _jsx("p", { children: error || 'Something went wrong' }), _jsx(Link, { to: "/", className: "mt-4 inline-block text-blue-500 hover:underline", children: "Back to Home" })] }) }));
    }
    // Render dog minder details
    if (minder) {
        return (_jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsx(SEO, { title: `${minder.name} | Dog Minder Details`, description: `Learn more about ${minder.name}, a professional dog minder in ${minder.county}, Ireland.`, canonicalUrl: `https://www.dogdays.ie/minders/${minder.id}` }), _jsxs("main", { className: "flex-grow", children: [_jsx("section", { className: "relative py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl md:text-4xl font-bold mb-2", children: minder.name }), _jsxs("div", { className: "flex items-center mb-4", children: [_jsx(MapPin, { className: "h-5 w-5 mr-1" }), _jsx("span", { children: minder.address })] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Star, { className: "h-5 w-5 text-yellow-300 mr-1" }), _jsx("span", { className: "font-semibold", children: minder.rating.toFixed(1) }), _jsx("span", { className: "mx-1", children: "\u2022" }), _jsxs("span", { children: [minder.reviewCount, " reviews"] })] })] }), _jsxs(Link, { to: "/minders", className: "mt-4 md:mt-0 flex items-center text-white hover:text-blue-100 transition-colors", children: [_jsx(ArrowLeft, { className: "h-5 w-5 mr-1" }), "Back to Dog Minders"] })] }) }) }), _jsx("section", { className: "py-12", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [_jsxs("div", { className: "md:col-span-2", children: [_jsx("div", { className: "mb-8", children: _jsx("img", { src: minder.image, alt: minder.name, className: "w-full h-64 object-cover rounded-lg shadow-md" }) }), _jsxs("div", { className: "mb-8", children: [_jsxs("h2", { className: "text-2xl font-bold mb-4 text-gray-800", children: ["About ", minder.name] }), _jsx("p", { className: "text-gray-700 leading-relaxed", children: minder.description })] }), _jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-2xl font-bold mb-4 text-gray-800", children: "Services Offered" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: minder.services.map((service, index) => (_jsxs("div", { className: "flex items-center bg-blue-50 p-3 rounded-lg", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-blue-500 mr-2", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }), _jsx("span", { children: service })] }, index))) })] })] }), _jsxs("div", { className: "bg-gray-50 p-6 rounded-lg shadow-md h-fit", children: [_jsx("h2", { className: "text-2xl font-bold mb-4 text-gray-800", children: "Contact Information" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-start", children: [_jsx(MapPin, { className: "h-6 w-6 text-blue-500 mr-3 mt-1" }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Address" }), _jsx("p", { className: "text-gray-700", children: minder.address }), _jsxs("p", { className: "text-gray-700", children: ["County ", minder.county] })] })] }), _jsxs("div", { className: "flex items-start", children: [_jsx(Phone, { className: "h-6 w-6 text-blue-500 mr-3 mt-1" }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Phone" }), _jsx("p", { className: "text-gray-700", children: minder.phone }), minder.mobile !== minder.phone && (_jsxs("p", { className: "text-gray-700", children: ["Mobile: ", minder.mobile] }))] })] }), _jsxs("div", { className: "flex items-start", children: [_jsx(Mail, { className: "h-6 w-6 text-blue-500 mr-3 mt-1" }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Email" }), _jsx("a", { href: `mailto:${minder.email}`, className: "text-blue-600 hover:underline", children: minder.email })] })] }), _jsxs("div", { className: "flex items-start", children: [_jsx(Globe, { className: "h-6 w-6 text-blue-500 mr-3 mt-1" }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Website" }), _jsx("a", { href: minder.website, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline", children: minder.website.replace(/^https?:\/\//, '') })] })] }), _jsxs("div", { className: "flex items-start", children: [_jsx(Clock, { className: "h-6 w-6 text-blue-500 mr-3 mt-1" }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Business Hours" }), _jsx("p", { className: "text-gray-700", children: minder.hours })] })] })] }), _jsx("div", { className: "mt-6", children: _jsx("a", { href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(minder.name + ' ' + minder.address)}`, target: "_blank", rel: "noopener noreferrer", className: "block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors", children: "View on Map" }) })] })] }) }) })] })] }));
    }
    // Original listing detail rendering (for vets, parks, etc.)
    return (_jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsx(SEO, { title: `${listing?.title} | Details`, description: `Learn more about ${listing?.title}, a ${listing?.type} in Dublin, Ireland.`, canonicalUrl: `https://www.dogdays.ie/${listing?.type}/${listing?.id}` }), _jsxs("main", { className: "flex-grow", children: [_jsx("section", { className: "relative py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl md:text-4xl font-bold mb-2", children: listing?.title }), _jsxs("div", { className: "flex items-center mb-4", children: [_jsx(MapPin, { className: "h-5 w-5 mr-1" }), _jsx("span", { children: listing?.address })] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Star, { className: "h-5 w-5 text-yellow-300 mr-1" }), _jsx("span", { className: "font-semibold", children: listing?.rating.toFixed(1) }), _jsx("span", { className: "mx-1", children: "\u2022" }), _jsxs("span", { children: [listing?.reviewCount, " reviews"] })] })] }), _jsxs(Link, { to: `/${listing?.type}s`, className: "mt-4 md:mt-0 flex items-center text-white hover:text-blue-100 transition-colors", children: [_jsx(ArrowLeft, { className: "h-5 w-5 mr-1" }), "Back to ", listing?.type === 'vet' ? 'Vets' :
                                                listing?.type === 'park' ? 'Parks' :
                                                    listing?.type === 'grooming' ? 'Grooming' :
                                                        'Listings'] })] }) }) }), _jsx("section", { className: "py-12", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [_jsxs("div", { className: "md:col-span-2", children: [_jsx("div", { className: "mb-8", children: _jsx("img", { src: listing?.image, alt: listing?.title, className: "w-full h-64 object-cover rounded-lg shadow-md" }) }), _jsxs("div", { className: "mb-8", children: [_jsxs("h2", { className: "text-2xl font-bold mb-4 text-gray-800", children: ["About ", listing?.title] }), _jsx("p", { className: "text-gray-700 leading-relaxed", children: listing?.description })] }), listing?.type === 'vet' || listing?.type === 'grooming' ? (_jsxs(_Fragment, { children: [listing.services && listing.services.length > 0 && (_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-2xl font-bold mb-4 text-gray-800", children: "Services" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: listing.services.map((service, index) => (_jsxs("div", { className: "flex items-center bg-blue-50 p-3 rounded-lg", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-blue-500 mr-2", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }), _jsx("span", { children: service })] }, index))) })] })), listing.team && listing.team.length > 0 && (_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-2xl font-bold mb-4 text-gray-800", children: "Our Team" }), _jsx("div", { className: "space-y-4", children: listing.team.map((member, index) => (_jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [_jsx("h3", { className: "font-bold text-lg", children: member.name }), _jsx("p", { className: "text-blue-600 mb-2", children: member.role }), _jsx("p", { className: "text-gray-700", children: member.bio })] }, index))) })] }))] })) : listing?.type === 'park' ? (_jsxs(_Fragment, { children: [listing.facilities && listing.facilities.length > 0 && (_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-2xl font-bold mb-4 text-gray-800", children: "Facilities" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: listing.facilities.map((facility, index) => (_jsxs("div", { className: "flex items-center bg-green-50 p-3 rounded-lg", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-green-500 mr-2", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }), _jsx("span", { children: facility })] }, index))) })] })), listing.rules && listing.rules.length > 0 && (_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-2xl font-bold mb-4 text-gray-800", children: "Park Rules" }), _jsx("div", { className: "bg-yellow-50 p-4 rounded-lg", children: _jsx("ul", { className: "list-disc pl-5 space-y-2", children: listing.rules.map((rule, index) => (_jsx("li", { className: "text-gray-700", children: rule }, index))) }) })] })), listing.bestTimes && (_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-2xl font-bold mb-4 text-gray-800", children: "Best Times to Visit" }), _jsx("div", { className: "bg-blue-50 p-4 rounded-lg", children: _jsx("p", { className: "text-gray-700", children: listing.bestTimes }) })] }))] })) : null] }), _jsxs("div", { children: [_jsxs("div", { className: "bg-gray-50 p-6 rounded-lg shadow-md mb-8", children: [_jsx("h2", { className: "text-2xl font-bold mb-4 text-gray-800", children: "Contact Information" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-start", children: [_jsx(MapPin, { className: "h-6 w-6 text-blue-500 mr-3 mt-1" }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Address" }), _jsx("p", { className: "text-gray-700", children: listing?.address })] })] }), listing?.phone && (_jsxs("div", { className: "flex items-start", children: [_jsx(Phone, { className: "h-6 w-6 text-blue-500 mr-3 mt-1" }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Phone" }), _jsx("p", { className: "text-gray-700", children: listing.phone })] })] })), listing?.email && (_jsxs("div", { className: "flex items-start", children: [_jsx(Mail, { className: "h-6 w-6 text-blue-500 mr-3 mt-1" }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Email" }), _jsx("a", { href: `mailto:${listing.email}`, className: "text-blue-600 hover:underline", children: listing.email })] })] })), listing?.website && (_jsxs("div", { className: "flex items-start", children: [_jsx(Globe, { className: "h-6 w-6 text-blue-500 mr-3 mt-1" }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Website" }), _jsx("a", { href: listing.website, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline", children: listing.website.replace(/^https?:\/\//, '') })] })] })), listing?.hours && (_jsxs("div", { className: "flex items-start", children: [_jsx(Clock, { className: "h-6 w-6 text-blue-500 mr-3 mt-1" }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: "Hours" }), _jsx("p", { className: "text-gray-700", children: listing.hours })] })] }))] }), _jsx("div", { className: "mt-6", children: _jsx("a", { href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(listing?.title + ' ' + listing?.address)}`, target: "_blank", rel: "noopener noreferrer", className: "block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors", children: "View on Map" }) })] }), listing?.lat && listing?.lng && (_jsx("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: _jsx("div", { className: "h-64", children: Maps_API_KEY ? (_jsx("div", { className: "h-full flex items-center justify-center bg-gray-100", children: _jsx("p", { className: "text-gray-500", children: "Map will be displayed here when API key is provided" }) })) : (_jsx("div", { className: "h-full flex items-center justify-center bg-gray-100", children: _jsx("p", { className: "text-gray-500", children: "Map preview unavailable" }) })) }) }))] })] }) }) })] })] }));
};
export default DetailPage;
