import React, { useContext, useEffect } from "react";
import { SocketContext } from "../context/SocketContext";
import { useMapbox } from "../hooks/useMapbox";

const initialPoint = {
  lng: -73.6041,
  lat: 2.4402,
  zoom: 8.09,
};

export const MapPage = () => {
  const { addMarker, coords, mapRef, newMarker$, movementMarker$ } =
    useMapbox(initialPoint);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.on("active-markers", (markers) => {
      for (const key of Object.keys(markers)) {
        addMarker(markers[key], key);
      }
    });
  }, [socket,addMarker]);

  useEffect(() => {
    newMarker$.subscribe((marker) => {
      // TODO: nuevo marcador emitir
      socket.emit("new-marker", marker);
    });
  }, [newMarker$, socket]);

  useEffect(() => {
    movementMarker$.subscribe((marker) => {
      // TODO: movimiento marcador emitir
    });
  }, [movementMarker$]);

  useEffect(() => {
    socket.on("new-marker", (marker) => {
      console.log(marker);
    });
  }, [socket]);

  return (
    <>
      <div className="info">
        Lng: {coords.lng} | Lat: {coords.lat} | zoom: {coords.zoom}
      </div>
      <div ref={mapRef} className="mapContainer"></div>
    </>
  );
};
