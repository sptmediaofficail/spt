'use client';
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';
import { Card } from '@nextui-org/card';

export default function GoogleMap({
  position,
}: {
  position: { lat: number; lng: number };
}) {
  return (
    <Card className="h-[10rem] w-full">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <Map defaultCenter={position} defaultZoom={10} mapId="abc9c64525471500">
          <AdvancedMarker position={position} />
        </Map>
      </APIProvider>
    </Card>
  );
}
