"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import { Marker } from "react-leaflet/Marker";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

// Fix for Leaflet marker icon in Next.js

type Location = {
  name: string;
  address: string;
  phone: string;
  position: [number, number]; // [latitude, longitude]
};

interface DynamicMapProps {
  locations: Location[];
  selectedLocation: Location;
  height?: string;
}

export default function DynamicMap({
  locations,
  selectedLocation,
  height = "400px",
}: DynamicMapProps) {
  const [isMounted, setIsMounted] = useState(false);
  //   const position = [10.4806, -66.9036]; // Coordenadas de Caracas, Venezuela

  useEffect(() => {
    setIsMounted(true);

    // Cleanup function to prevent memory leaks
    return () => {
      setIsMounted(false);
    };
  }, []);

  // Fix for default marker icons in Leaflet with Next.js
  const DefaultIcon = L.icon({
    iconUrl: "/placeholder.png",
    iconSize: [41, 41],
    iconAnchor: [12, 41],
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  // Don't render the map on the server
  if (!isMounted) {
    return (
      <div
        style={{ height }}
        className="w-full bg-white/5 rounded-lg flex items-center justify-center"
      >
        <p className="text-white/60">Cargando mapa...</p>
      </div>
    );
  }

  return (
    <motion.div
      className="w-full rounded-lg overflow-hidden"
      style={{ height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <MapContainer
        center={selectedLocation.position}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        className="z-10"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((location) => (
          <Marker key={location.name} position={location.position}>
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-base">{location.name}</h3>
                <p className="text-sm">{location.address}</p>
                <p className="text-sm">{location.phone}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </motion.div>
  );
}
