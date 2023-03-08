import React from "react";
import { useMapbox } from "../hooks/useMapbox";

const initialPoint = {
  lng: -73.6041,
  lat: 2.4402,
  zoom: 8.09,
};

export const MapPage = () => {
  const { mapRef, coords } = useMapbox(initialPoint);

  return (
    <>
      <div className="info">
        Lng: {coords.lng} | Lat: {coords.lat} | zoom: {coords.zoom}
      </div>
      <div ref={mapRef} className="mapContainer"></div>
    </>
  );
};
