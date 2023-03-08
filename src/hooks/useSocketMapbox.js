import { useEffect } from "react";

export const useSocketMapbox = (
  socket,
  addMarker,
  movementMarker$,
  newMarker$,
  updateMarker
) => {
  useEffect(() => {
    socket.on("active-markers", (markers) => {
      for (const key of Object.keys(markers)) {
        addMarker(markers[key], key);
      }
    });
  }, [socket, addMarker]);

  useEffect(() => {
    newMarker$.subscribe((marker) => {
      socket.emit("new-marker", marker);
    });
  }, [newMarker$, socket]);

  useEffect(() => {
    socket.on("new-marker", (marker) => {
      addMarker(marker, marker.id);
    });
  }, [socket, addMarker]);

  useEffect(() => {
    movementMarker$.subscribe((marker) => {
      socket.emit("update-marker", marker);
    });
  }, [movementMarker$, socket]);

  useEffect(() => {
    socket.on("update-marker", (marker) => {
      updateMarker(marker, marker.id);
    });
  }, [socket, updateMarker]);
};
