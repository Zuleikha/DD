import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Google Maps integration component with error handling and timeout
import { useEffect, useRef, useState } from 'react';
const GoogleMap = ({ apiKey, // Destructure apiKey here
locations = [], center = { lat: 53.3498, lng: -6.2603 }, // Default to Dublin, Ireland
zoom = 12, mapType = 'roadmap', onDirectionsServiceReady, // Destructure the callback prop
directionsPanelId // Destructure the directions panel ID
 }) => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null); // Better type for map instance
    const markersRef = useRef([]); // Better type for markers
    const directionsRendererRef = useRef(null); // To clean up renderer
    const [mapError, setMapError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Early exit if API key is missing
        if (!apiKey) {
            setIsLoading(false);
            setMapError("Google Maps API key is missing. Please provide a valid key.");
            return;
        }
        const loadGoogleMapsApi = () => {
            // Prevent re-loading the script if it's already in the DOM
            const existingScript = document.querySelector(`script[src*="maps.googleapis.com/maps/api/js?key=${apiKey}"]`);
            if (existingScript) {
                setIsLoading(false);
                initializeMap();
                return;
            }
            const script = document.createElement('script');
            // Use the actual API key passed as a prop
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`; // 'places' library is useful
            script.async = true;
            script.defer = true;
            script.onload = () => {
                setIsLoading(false);
                initializeMap();
            };
            script.onerror = () => {
                setIsLoading(false);
                setMapError("Failed to load Google Maps. Please check your internet connection or API key.");
            };
            document.head.appendChild(script);
            // Set a timeout to handle cases where the script never loads or errors
            const timeoutId = setTimeout(() => {
                if (isLoading) { // Only set error if still loading
                    setIsLoading(false);
                    setMapError("Google Maps took too long to load. Please refresh the page or check your API key.");
                }
            }, 10000); // 10 second timeout
            // Cleanup function for the timeout
            return () => clearTimeout(timeoutId);
        };
        const initializeMap = () => {
            if (!mapRef.current)
                return; // Ensure the DOM element exists
            try {
                // Verify that the Google Maps API has loaded
                if (!window.google || !window.google.maps) {
                    setMapError("Google Maps API object not found. Initialization failed.");
                    return;
                }
                const mapOptions = {
                    center,
                    zoom,
                    mapTypeId: mapType,
                    mapTypeControl: true,
                    streetViewControl: true,
                    fullscreenControl: true,
                    zoomControl: true,
                };
                const map = new window.google.maps.Map(mapRef.current, mapOptions);
                mapInstanceRef.current = map; // Store the map instance in a ref
                // Clear existing markers before re-rendering new ones
                if (markersRef.current.length > 0) {
                    markersRef.current.forEach(marker => marker.setMap(null));
                    markersRef.current = [];
                }
                // Add markers for each location
                locations.forEach(location => {
                    const marker = new window.google.maps.Marker({
                        position: { lat: location.lat, lng: location.lng },
                        map,
                        title: location.title,
                        animation: window.google.maps.Animation.DROP,
                    });
                    const infoWindow = new window.google.maps.InfoWindow({
                        content: `<div><h3>${location.title}</h3></div>`
                    });
                    marker.addListener('click', () => {
                        infoWindow.open(map, marker);
                    });
                    markersRef.current.push(marker); // Store marker in ref
                });
                const directionsService = new window.google.maps.DirectionsService();
                const directionsRenderer = new window.google.maps.DirectionsRenderer();
                directionsRenderer.setMap(map);
                directionsRendererRef.current = directionsRenderer; // Store renderer in ref
                // Ensure directionsPanelId is a string before calling getElementById
                const directionsPanel = directionsPanelId
                    ? document.getElementById(directionsPanelId)
                    : null; // If directionsPanelId is undefined, directionsPanel will be null
                if (directionsPanel) {
                    directionsRenderer.setPanel(directionsPanel);
                }
                // Define the `calculateRoute` function that will be exposed to the parent
                const calculateRoute = (origin, destination) => {
                    directionsService.route({
                        origin: origin,
                        destination: destination,
                        travelMode: window.google.maps.TravelMode.DRIVING,
                    }, (response, status) => {
                        if (status === 'OK' && response) {
                            directionsRenderer.setDirections(response);
                        }
                        else {
                            console.error(`Directions request failed due to ${status}`);
                            // You might want to update mapError state here as well for user feedback
                        }
                    });
                };
                // Call the parent's callback with the calculateRoute function
                if (onDirectionsServiceReady) {
                    onDirectionsServiceReady(calculateRoute);
                }
            }
            catch (error) {
                console.error("Error initializing map:", error);
                setMapError("Error initializing map. Please check browser console for details.");
            }
        };
        // Determine if API needs to be loaded or map can be initialized immediately
        if (window.google?.maps) { // Use optional chaining for safety
            setIsLoading(false);
            initializeMap();
        }
        else {
            loadGoogleMapsApi();
        }
        // Cleanup function when component unmounts or dependencies change
        return () => {
            // Clear all markers from the map
            if (markersRef.current) {
                markersRef.current.forEach(marker => marker.setMap(null));
                markersRef.current = [];
            }
            // Clear directions from the map if renderer exists
            if (directionsRendererRef.current) {
                directionsRendererRef.current.setMap(null);
                directionsRendererRef.current.setPanel(null); // Also clear the panel
                directionsRendererRef.current = null;
            }
            // Inform the parent component that the service is no longer available
            if (onDirectionsServiceReady) {
                onDirectionsServiceReady(null);
            }
        };
        // Dependencies for useEffect: Re-run effect if any of these change
        // Adding onDirectionsServiceReady to dependencies is important if it changes.
    }, [apiKey, center, zoom, mapType, locations, directionsPanelId, onDirectionsServiceReady]);
    // Render map or error/loading state
    return (_jsxs("div", { className: "google-map-container", children: [isLoading && (_jsx("div", { className: "map-loading p-4 text-center bg-gray-100 rounded", children: _jsx("p", { children: "Loading map..." }) })), mapError && (_jsxs("div", { className: "map-error p-4 text-center bg-red-100 text-red-700 rounded", children: [_jsx("p", { children: mapError }), _jsx("p", { className: "text-sm mt-2", children: "Note: You need a valid Google Maps API key for maps to work properly." })] })), _jsx("div", { ref: mapRef, 
                // Conditional display based on mapError
                style: {
                    width: '100%',
                    height: '500px',
                    display: mapError ? 'none' : 'block' // Hide map div if there's an error
                } }), _jsx("div", { id: directionsPanelId, className: "mt-4" })] }));
};
export default GoogleMap;
