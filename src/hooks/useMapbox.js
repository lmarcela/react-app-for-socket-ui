import { useCallback, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { v4 } from "uuid";
import { Subject } from "rxjs";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFyY2VsYTk0MDkiLCJhIjoiY2xleW91OHgyMDNsazNzcDF0M3A0ZWRpbSJ9.7zPRIRhH605mh8b-V2KrCg";

export const useMapbox = (initialPoint) => {
  const mapRef = useRef();
  const myMap = useRef();

  const markers = useRef({});

  const movementMarker = useRef(new Subject());
  const newMarker = useRef(new Subject());

  const [coords, setCoords] = useState(initialPoint);

  const addMarker = useCallback((ev, id) => {
    const { lng, lat } = ev.lngLat || ev;

    const marker = new mapboxgl.Marker();
    marker.id = id ?? v4();

    marker.setLngLat([lng, lat]).addTo(myMap.current).setDraggable(true);

    markers.current[marker.id] = marker;

    if (!id) {
      newMarker.current.next({
        id: marker.id,
        lng,
        lat,
      });
    }

    marker.on("drag", ({ target }) => {
      const { id } = target;
      const { lng, lat } = target.getLngLat();
      movementMarker.current.next({ id, lng, lat });
    });
  }, []);

  useEffect(() => {
    var map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [initialPoint.lng, initialPoint.lat],
      zoom: initialPoint.zoom,
    });
    myMap.current = map;
  }, [initialPoint]);

  useEffect(() => {
    myMap.current.on("move", () => {
      const { lng, lat } = myMap.current.getCenter();
      setCoords({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: myMap.current.getZoom().toFixed(2),
      });
    });
  }, []);

  useEffect(() => {
    myMap.current?.on("click", addMarker);
  }, [addMarker]);

  return {
    addMarker,
    coords,
    mapRef,
    newMarker$: newMarker.current,
    movementMarker$: movementMarker.current,
  };
};
