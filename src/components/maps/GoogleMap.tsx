// Google Maps integration component with error handling and timeout
import React, { useEffect, useRef, useState } from 'react';

// Define types for Google Maps API and a global type for 'google'
declare global {
  interface Window {
    google: {
      maps: typeof google.maps;
      // Add other Google Maps services you might use, e.g.,
      // places: typeof google.maps.places;
    };
  }
}

// Define the type for the calculateRoute function that GoogleMap will provide
// This type should ideally be in a shared types file if used in multiple places,
// but for this example, it's defined here for completeness within GoogleMap.tsx.
export type CalculateRouteFunction = (origin: string | google.maps.LatLngLiteral, destination: google.maps.LatLngLiteral) => void;

interface GoogleMapProps {
  apiKey: string;
  locations?: Array<{
    lat: number;
    lng: number;
    title: string;
  }>;
  center?: { lat: number; lng: number };
  zoom?: number;
  mapType?: string;
  // This prop will receive the setter function from useState in the parent component (ListingsPage)
  onDirectionsServiceReady?: React.Dispatch<React.SetStateAction<CalculateRouteFunction | null>>;
  // The ID of the HTML element where directions will be rendered (e.g., 'directions-panel')
  directionsPanelId?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  apiKey, // Destructure apiKey here
  locations = [],
  center = { lat: 53.3498, lng: -6.2603 }, // Default to Dublin, Ireland
  zoom = 12,
  mapType = 'roadmap',
  onDirectionsServiceReady, // Destructure the callback prop
  directionsPanelId // Destructure the directions panel ID
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null); // Better type for map instance
  const markersRef = useRef<google.maps.Marker[]>([]); // Better type for markers
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null); // To clean up renderer
  const [mapError, setMapError] = useState<string | null>(null);
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
      if (!mapRef.current) return; // Ensure the DOM element exists

      try {
        // Verify that the Google Maps API has loaded
        if (!window.google || !window.google.maps) {
          setMapError("Google Maps API object not found. Initialization failed.");
          return;
        }

        const mapOptions: google.maps.MapOptions = { // Using specific Google Maps types
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

        const directionsPanel = document.getElementById(directionsPanelId);
        if (directionsPanel) {
          directionsRenderer.setPanel(directionsPanel);
        }

        // Define the `calculateRoute` function that will be exposed to the parent
        const calculateRoute: CalculateRouteFunction = (origin, destination) => {
          directionsService.route(
            {
              origin: origin,
              destination: destination,
              travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (response: google.maps.DirectionsResult | null, status: google.maps.DirectionsStatus) => {
              if (status === 'OK' && response) {
                directionsRenderer.setDirections(response);
              } else {
                console.error(`Directions request failed due to ${status}`);
                // You might want to update mapError state here as well for user feedback
              }
            }
          );
        };

        // Call the parent's callback with the calculateRoute function
        if (onDirectionsServiceReady) {
          onDirectionsServiceReady(calculateRoute);
        }

      } catch (error) {
        console.error("Error initializing map:", error);
        setMapError("Error initializing map. Please check browser console for details.");
      }
    };

    // Determine if API needs to be loaded or map can be initialized immediately
    if (window.google?.maps) { // Use optional chaining for safety
      setIsLoading(false);
      initializeMap();
    } else {
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
  return (
    <div className="google-map-container">
      {isLoading && (
        <div className="map-loading p-4 text-center bg-gray-100 rounded">
          <p>Loading map...</p>
        </div>
      )}

      {mapError && (
        <div className="map-error p-4 text-center bg-red-100 text-red-700 rounded">
          <p>{mapError}</p>
          <p className="text-sm mt-2">
            Note: You need a valid Google Maps API key for maps to work properly.
          </p>
        </div>
      )}

      <div
        ref={mapRef}
        // Conditional display based on mapError
        style={{
          width: '100%',
          height: '500px',
          display: mapError ? 'none' : 'block' // Hide map div if there's an error
        }}
      ></div>

      {/* The directions panel will be populated by Google Maps API */}
      <div id={directionsPanelId} className="mt-4"></div>
    </div>
  );
};

export default GoogleMap;