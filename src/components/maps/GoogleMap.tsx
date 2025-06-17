import React, { useEffect, useRef, useState } from 'react';

// Extend global window interface
declare global {
  interface Window {
    google: typeof google;
  }
}

// CalculateRouteFunction type for external usage
export type CalculateRouteFunction = (
  origin: string | google.maps.LatLngLiteral,
  destination: google.maps.LatLngLiteral
) => void;

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
  onDirectionsServiceReady?: React.Dispatch<React.SetStateAction<CalculateRouteFunction | null>>;
  directionsPanelId?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  apiKey,
  locations = [],
  center = { lat: 53.3498, lng: -6.2603 },
  zoom = 12,
  mapType = 'roadmap',
  onDirectionsServiceReady,
  directionsPanelId
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<Array<google.maps.Marker | any>>([]); // Accepting AdvancedMarkerElement or Marker
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!apiKey) {
      setIsLoading(false);
      setMapError("Google Maps API key is missing. Please provide a valid key.");
      return;
    }

    const loadGoogleMapsApi = () => {
      const existingScript = document.querySelector(`script[src*="maps.googleapis.com/maps/api/js?key=${apiKey}"]`);
      if (existingScript) {
        setIsLoading(false);
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=marker,places`;
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

      const timeoutId = setTimeout(() => {
        if (isLoading) {
          setIsLoading(false);
          setMapError("Google Maps took too long to load. Please refresh the page or check your API key.");
        }
      }, 10000);

      return () => clearTimeout(timeoutId);
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google || !window.google.maps) {
        setMapError("Google Maps API object not found. Initialization failed.");
        return;
      }

      const mapOptions: google.maps.MapOptions = {
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

      // Clear existing markers
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];

      // Add markers
      locations.forEach(location => {
        let marker: any;

        if (google.maps.marker?.AdvancedMarkerElement) {
          marker = new google.maps.marker.AdvancedMarkerElement({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title,
          });
        } else {
          marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title,
            animation: google.maps.Animation.DROP,
          });
        }

        const infoWindow = new google.maps.InfoWindow({
          content: `<div><h3>${location.title}</h3></div>`
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        markersRef.current.push(marker);
      });

      // Directions
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      directionsRendererRef.current = directionsRenderer;

      if (directionsPanelId) {
        const panel = document.getElementById(directionsPanelId);
        if (panel) directionsRenderer.setPanel(panel);
      }

      const calculateRoute: CalculateRouteFunction = (origin, destination) => {
        directionsService.route(
          {
            origin,
            destination,
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (response, status) => {
            if (status === 'OK' && response) {
              directionsRenderer.setDirections(response);
            } else {
              console.error(`Directions request failed due to ${status}`);
            }
          }
        );
      };

      if (onDirectionsServiceReady) {
        onDirectionsServiceReady(calculateRoute);
      }
    };

    if (window.google?.maps) {
      setIsLoading(false);
      initializeMap();
    } else {
      loadGoogleMapsApi();
    }

    return () => {
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];

      if (directionsRendererRef.current) {
        directionsRendererRef.current.setMap(null);
        directionsRendererRef.current.setPanel(null);
        directionsRendererRef.current = null;
      }

      if (onDirectionsServiceReady) {
        onDirectionsServiceReady(null);
      }
    };
  }, [apiKey, center, zoom, mapType, locations, directionsPanelId, onDirectionsServiceReady]);

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
          display: mapError ? 'none' : 'block',
        }}
      ></div>

      <div id={directionsPanelId} className="mt-4"></div>
    </div>
  );
};

export default GoogleMap;
