import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFyY2VsYTk0MDkiLCJhIjoiY2xleW91OHgyMDNsazNzcDF0M3A0ZWRpbSJ9.7zPRIRhH605mh8b-V2KrCg";

const initialPoint = {
  lng: 5,
  lat: 34,
  zoom: 10,
};

export const MapPage = () => {
  const mapDiv = useRef();
  const [myMap, setMyMap] = useState();

  useEffect(() => {
    var map = new mapboxgl.Map({
      container: mapDiv.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [initialPoint.lng, initialPoint.lat],
      zoom: initialPoint.zoom,
    });
    setMyMap(map);
  }, []);

  return (
    <>
      <div ref={mapDiv} className="mapContainer"></div>
    </>
  );
};
