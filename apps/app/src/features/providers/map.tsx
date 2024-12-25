'use client';
import { useEffect, useState } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { Card } from '@nextui-org/card';
import dynamic from 'next/dynamic';

function EagerGoogleMap({
  position,
  onDrag,
}: {
  position?: { lat: number; lng: number };
  onDrag?: (e: google.maps.MapMouseEvent) => void;
}) {
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [Animation, setAnimation] = useState<any>(null);

  useEffect(() => {
    if (typeof google !== 'undefined') {
      setAnimation(google.maps.Animation);
    }
  }, []);

  useEffect(() => {
    // If no position is provided, try to get the current position of the user
    if (!position && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (geoPosition) => {
          setCurrentPosition({
            lat: geoPosition.coords.latitude,
            lng: geoPosition.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting current position', error);
          // Handle geolocation error (e.g., fallback position or user notification)
        }
      );
    } else {
      setCurrentPosition(position || null);
    }
  }, [position]);

  // If currentPosition is still null, render a loading state or a fallback
  if (currentPosition === null) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="min-h-[10rem] w-full lg:min-h-[10rem] h-full">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <Map
          defaultCenter={currentPosition}
          defaultZoom={10}
          mapId="abc9c64525471500"
        >
          <Marker
            draggable={!!onDrag}
            position={currentPosition}
            animation={onDrag && Animation ? Animation.BOUNCE : undefined}
            onDrag={onDrag}
          />
        </Map>
      </APIProvider>
    </Card>
  );
}

export const GoogleMap = dynamic(() => Promise.resolve(EagerGoogleMap), {
  ssr: false,
});
