
import { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.5rem',
};

// Default center (New Delhi)
const defaultCenter = {
  lat: 28.6139,
  lng: 77.2090,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

interface MapProps {
  cases?: Array<{
    id: number;
    type: string;
    subType: string;
    location: string;
    lat: number;
    lng: number;
  }>;
}

export const Map = ({ cases = [] }: MapProps) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAEMZX4tuajA-XGo6nny6dyM175SpTK3-k',
  });
  
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(location);
          
          // If map is loaded, center it on user location
          if (map) {
            map.panTo(location);
            map.setZoom(13);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, [map]);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  if (loadError) return <div className="text-red-500">Error loading maps</div>;
  if (!isLoaded) return <div className="text-muted-foreground">Loading maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={13}
      center={userLocation || defaultCenter}
      options={options}
      onLoad={onLoad}
    >
      {userLocation && (
        <MarkerF
          position={userLocation}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 7,
            fillColor: "#4F46E5",
            fillOpacity: 1,
            strokeWeight: 2,
            strokeColor: "#ffffff",
          }}
          title="You are here"
        />
      )}
      {cases.map((caseItem) => (
        <MarkerF
          key={caseItem.id}
          position={{ lat: caseItem.lat, lng: caseItem.lng }}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 7,
            fillColor: caseItem.type === "Medical" ? "#EF4444" : "#F97316",
            fillOpacity: 1,
            strokeWeight: 2,
            strokeColor: "#ffffff",
          }}
          title={caseItem.subType}
        />
      ))}
    </GoogleMap>
  );
};
