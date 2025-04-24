
import { useState, useCallback } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.5rem',
};

const center = {
  lat: 1.3521, // Singapore's latitude
  lng: 103.8198, // Singapore's longitude
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAEMZX4tuajA-XGo6nny6dyM175SpTK3-k',
  });
  
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  if (loadError) return <div className="text-red-500">Error loading maps</div>;
  if (!isLoaded) return <div className="text-muted-foreground">Loading maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={11}
      center={center}
      options={options}
      onLoad={onLoad}
    >
    </GoogleMap>
  );
};
