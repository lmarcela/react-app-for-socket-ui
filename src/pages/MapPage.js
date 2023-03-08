import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFyY2VsYTk0MDkiLCJhIjoiY2xleW91OHgyMDNsazNzcDF0M3A0ZWRpbSJ9.7zPRIRhH605mh8b-V2KrCg";

const initialPoint = {
  lng: -73.6041,
  lat: 2.4402,
  zoom: 8.09,
};

export const MapPage = () => {
  const mapDiv = useRef();
  const [myMap, setMyMap] = useState();
  const [coords, setCoords] = useState(initialPoint);

  useEffect(() => {
    var map = new mapboxgl.Map({
      container: mapDiv.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [initialPoint.lng, initialPoint.lat],
      zoom: initialPoint.zoom,
    });
    setMyMap(map);
  }, []);

  useEffect(() => {
    myMap?.on("move", () => {
      const { lng, lat } = myMap.getCenter();
      setCoords({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: myMap.getZoom().toFixed(2),
      });
    });
  }, [myMap]);

  return (
    <>
      <div className="info">
        Lng: {coords.lng} | Lat: {coords.lat} | zoom: {coords.zoom}
      </div>
      <div ref={mapDiv} className="mapContainer"></div>
    </>
  );
};
