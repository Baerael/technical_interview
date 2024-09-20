"use client";
import { useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import routeData from "./data.json";
import Navigation from "./navigation";

interface MarkerData {
  latitude: number;
  longitude: number;
  name: string;
}

const API_KEY = "";

export default function GoogleMaps() {
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 40.001424, lng: -105.296429 }}
        defaultZoom={15}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <Navigation />

        {routeData.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.latitude, lng: marker.longitude }}
            onClick={() => setSelectedMarker(marker)}
          />
        ))}
        {selectedMarker && (
          <InfoWindow
            position={{
              lat: selectedMarker.latitude,
              lng: selectedMarker.longitude,
            }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <h2> Route: {selectedMarker.name} </h2>
            <p>
              Coordinates: lat: {selectedMarker.latitude} lon: {selectedMarker.longitude}
            </p>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
}
