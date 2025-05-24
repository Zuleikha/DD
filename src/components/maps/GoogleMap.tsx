// Google Maps integration component with error handling and timeout
import React, { useEffect, useRef, useState } from 'react';

// Define types for Google Maps API
declare global {
  interface Window {
    google: any;
    calculateRoute?: (origin: string, destination: any) => void;
  }
}

interface GoogleMapProps {
  locations?: Array<{
    lat: number;
    lng: number;
    title: string;
  }>;
  center?: { lat: number; lng: number };
  zoom?: number;
  mapType?: string;
  showMap?: boolean;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  locations = [],
  center = { lat: 53.3498, lng: -6.2603 }, // Default to Dublin
  zoom = 12,
  mapType = 'roadmap',
  showMap = false // Default to not showing the map
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [mapError, setMapError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only load the map if showMap is true
    if (!showMap) {
      setIsLoading(false);
      return;
    }

    // Load Google Maps API script with timeout
    const loadGoogleMapsApi = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA9nmAemVv4-rkPRHhs52i0-7sVCb5GEC4&libraries=places`;
      script.async = true;
      script.defer = true;
      
      // Set up success handler
      script.onload = () => {
        setIsLoading(false);
        initializeMap();
      };
      
      // Set up error handler
      script.onerror = () => {
        setIsLoading(false);
        setMapError("Failed to load Google Maps. Please check your internet connection or API key.");
      };
      
      document.head.appendChild(script);
      
      // Set a timeout to prevent infinite loading
      const timeoutId = setTimeout(() => {
        if (isLoading) {
          setIsLoading(false);
          setMapError("Google Maps took too long to load. Please refresh the page or check your API key.");
        }
      }, 10000); // 10 second timeout
      
      return () => clearTimeout(timeoutId);
    };

    // Initialize map once API is loaded
    const initializeMap = () => {
      if (!mapRef.current) return;
      
      try {
        // Check if Google Maps API is available
        if (!window.google || !window.google.maps) {
          setMapError("Google Maps API not available. Please check your API key.");
          return;
        }

        // Create map instance
        const mapOptions: any = {
          center,
          zoom,
          mapTypeId: mapType,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
          zoomControl: true,
        };

        const map = new window.google.maps.Map(mapRef.current, mapOptions);
        mapInstanceRef.current = map;

        // Add markers for each location
        locations.forEach(location => {
          const marker = new window.google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map,
            title: location.title,
            animation: window.google.maps.Animation.DROP,
          });

          // Create info window for each marker
          const infoWindow = new window.google.maps.InfoWindow({
            content: `<div><h3>${location.title}</h3></div>`
          });

          // Add click listener to show info window
          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });

          markersRef.current.push(marker);
        });

        // Add directions service
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);

        // Add directions panel
        const directionsPanel = document.getElementById('directions-panel');
        if (directionsPanel) {
          directionsRenderer.setPanel(directionsPanel);
        }

        // Function to calculate route (can be called from parent component)
        window.calculateRoute = (origin: string, destination: any) => {
          directionsService.route(
            {
              origin,
              destination,
              travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (response: any, status: any) => {
              if (status === 'OK') {
                directionsRenderer.setDirections(response);
              } else {
                console.error(`Directions request failed due to ${status}`);
              }
            }
          );
        };
      } catch (error) {
        console.error("Error initializing map:", error);
        setMapError("Error initializing map. Please refresh the page.");
      }
    };

    // Check if Google Maps API is already loaded
    if (window.google && window.google.maps) {
      setIsLoading(false);
      initializeMap();
    } else {
      loadGoogleMapsApi();
    }

    // Cleanup function
    return () => {
      if (markersRef.current) {
        markersRef.current.forEach(marker => marker.setMap(null));
        markersRef.current = [];
      }
    };
  }, [center, zoom, mapType, locations, isLoading, showMap]);

  // If showMap is false, don't render the map component at all
  if (!showMap) {
    return null;
  }

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
        style={{ 
          width: '100%', 
          height: '500px',
          display: mapError ? 'none' : 'block'
        }}
      ></div>
      
      <div id="directions-panel" className="mt-4"></div>
    </div>
  );
};

export default GoogleMap;
