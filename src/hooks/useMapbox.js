import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFyY2VsYTk0MDkiLCJhIjoiY2xleW91OHgyMDNsazNzcDF0M3A0ZWRpbSJ9.7zPRIRhH605mh8b-V2KrCg";

export const useMapbox = (initialPoint) => {
  const mapRef = useRef();
  const myMap = useRef();
  const [coords, setCoords] = useState(initialPoint);

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

  return {
    mapRef,
    coords,
  };
};
