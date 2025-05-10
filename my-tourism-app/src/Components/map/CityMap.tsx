// src/Components/map/CityMap.tsx
import { useEffect, useRef } from "react";
import useHereMaps from "../../hooks/useHereMaps";

interface MapOptions {
  center: { lat: number; lng: number };
  zoom: number;
  tilt?: number;
  heading?: number;
  pixelRatio?: number;
}

interface LookAtData {
  tilt: number;
  heading: number;
}

const CityMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapsLoaded = useHereMaps();

  useEffect(() => {
    if (!mapsLoaded || !mapRef.current || !window.H) return;

    try {
      const platform = new window.H.service.Platform({
        apikey: "8_LlILjU_OjAKhYeam-4ezaErUDxDH908uxEQZFADmE",
      });

      const defaultLayers = platform.createDefaultLayers();

      const mapOptions: MapOptions = {
        center: { lat: 54.9784, lng: -1.6174 },
        zoom: 16,
        tilt: 60,
        heading: 100,
        pixelRatio: window.devicePixelRatio || 1,
      };

      const map = new window.H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        mapOptions
      );

      const mapEvents = new window.H.mapevents.MapEvents(map);
      new window.H.mapevents.Behavior(mapEvents);

      window.H.ui.UI.createDefault(map, defaultLayers);

      const lookAtData: LookAtData = {
        tilt: 60,
        heading: 100,
      };
      map.getViewModel().setLookAtData(lookAtData, true);

      return () => {
        map.dispose();
      };
    } catch (error) {
      console.error("Error initializing HERE Map:", error);
    }
  }, [mapsLoaded]);

  if (!mapsLoaded) {
    return <div className="text-white">Loading map...</div>;
  }

  return (
    <div
      ref={mapRef}
      style={{ width: "100%" }}
      className="rounded-lg shadow-lg h-[400px]"
    />
  );
};

export default CityMap;
