import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import config from "../config.dev";
import { Marker } from "@react-google-maps/api";
import MapStyles from "../jsonData/MapSyles.json";

const containerStyle = {};

const mapOptions = {
  styles: MapStyles.styles,
};

const center = {
  lat: 41.720287,
  lng: 44.740616,
};

const markerPosition = {
  lat: 41.723963400145045,
  lng: 44.737758127331425,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: config.MAP_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap();
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      mapContainerClassName="w-full h-96 my-10 lg:h-largerSection lg:my-0"
      center={markerPosition}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={mapOptions}
    >
      <Marker position={markerPosition} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
