// Google Maps integration component
import React, { useEffect, useRef } from 'react';

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
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  locations = [],
  center = { lat: 53.3498, lng: -6.2603 }, // Default to Dublin
  zoom = 12,
  mapType = 'roadmap'
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    // Load Google Maps API script
    const loadGoogleMapsApi = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script );
    };

    // Initialize map once API is loaded
    const initializeMap = () => {
      if (!mapRef.current) return;

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
    };

    // Check if Google Maps API is already loaded
    if (window.google && window.google.maps) {
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
  }, [center, zoom, mapType, locations]);

  return (
    <div className="google-map-container">
      <div ref={mapRef} style={{ width: '100%', height: '500px' }}></div>
      <div id="directions-panel" className="mt-4"></div>
    </div>
  );
};

export default GoogleMap;
