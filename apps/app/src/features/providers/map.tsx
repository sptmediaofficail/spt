'use client';
import { useEffect, useState } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { Card } from "@heroui/card";
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

function EagerGoogleMap({
  position,
  onDragEnd,
  onInit,
}: {
  position?: { lat: number; lng: number };
  onDragEnd?: (e: google.maps.MapMouseEvent) => void;
  onInit?: ({ lat, lng }: { lat: number; lng: number }) => void;
}) {
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    // If no position is provided, try to get the current position of the user
    try {
      if (!position && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (geoPosition) => {
            setCurrentPosition({
              lat: geoPosition.coords.latitude,
              lng: geoPosition.coords.longitude,
            });
            onInit &&
              onInit({
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
    } catch (e) {
      console.error('Error getting current position', e);
      setCurrentPosition(null);
    }
  }, [onInit, position]);

  const t = useTranslations();
  if (currentPosition === null) {
    return <div>{t('detecting_location')}</div>;
  }

  return (
    <Card className="min-h-[10rem] w-full lg:min-h-[10rem] h-full">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <Map
          defaultCenter={currentPosition}
          defaultZoom={10}
          mapId="abc9c64525471500"
          controlSize={24}
        >
          <Marker
            draggable={!!onDragEnd}
            position={currentPosition}
            animation={onDragEnd ? 1 : undefined}
            onDragEnd={onDragEnd}
          />
        </Map>
      </APIProvider>
    </Card>
  );
}

export const GoogleMap = dynamic(() => Promise.resolve(EagerGoogleMap), {
  ssr: false,
});
