import React, { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { useMapbox } from "../hooks/useMapbox";
import { useSocketMapbox } from "../hooks/useSocketMapbox";

const initialPoint = {
  lng: -73.6041,
  lat: 2.4402,
  zoom: 8.09,
};

export const MapPage = () => {
  const {
    addMarker,
    coords,
    mapRef,
    movementMarker$,
    newMarker$,
    updateMarker,
  } = useMapbox(initialPoint);
  const { socket } = useContext(SocketContext);
  useSocketMapbox(socket, addMarker, movementMarker$, newMarker$, updateMarker);

  return (
    <>
      <div className="info">
        Lng: {coords.lng} | Lat: {coords.lat} | zoom: {coords.zoom}
      </div>
      <div ref={mapRef} className="mapContainer"></div>
    </>
  );
};
