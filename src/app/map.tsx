"use client";
import { Flex } from '@radix-ui/themes';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const API_KEY = ""

export default function GoogleMaps() {
  return (
    <div>
        <Flex justify="center" gap="2">
            <APIProvider apiKey={API_KEY}>
                <Map
                style={{width: '50vw', height: '50vh'}}
                defaultCenter={{lat: 40.000614, lng: -105.306558}}
                defaultZoom={15}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                >
                <Marker  position={{lat: 40.000614, lng: -105.306558}} />
                </Map>
            </APIProvider>
        </Flex>
    </div>
  );
}