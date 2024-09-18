"use client";
import { useState } from 'react';
import { Flex, Box } from '@radix-ui/themes';
import { APIProvider, Map, Marker, InfoWindow } from '@vis.gl/react-google-maps';
import routeData from './data.json'

interface MarkerData {
    latitude: number;
    longitude: number;
    name: string;
  }

const API_KEY = "AIzaSyACszpFGn8QLyvXcIlmDU3rVhrrHfdzj0Y"

export default function GoogleMaps() {
    const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

  return (
    <div>
        <Flex justify="center" gap="2">
            <APIProvider apiKey={API_KEY}>
                <Map
                style={{width: '50vw', height: '50vh'}}
                defaultCenter={{lat: 40.001424, lng: -105.296429}}
                defaultZoom={15}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                >
                    { routeData.map((marker, index) => (
                        <Marker  key={index} position={{lat: marker.latitude, lng: marker.longitude}} 
                            onClick={() => setSelectedMarker(marker)}
                        />
                    ))}
                    {selectedMarker && (
                    <InfoWindow
                        position={{lat: selectedMarker.latitude, lng: selectedMarker.longitude}}
                        onCloseClick={() => setSelectedMarker(null)}
                    >
                        <h2> Route: {selectedMarker.name} </h2>
                    </InfoWindow>
                    )}
                </Map>
            </APIProvider>
        </Flex>
    </div>
  );
}