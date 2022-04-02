import React, { useState } from "react";
import MapPicker from "react-google-map-picker";

const DefaultLocation = { lat: -7.26321, lng: 112.74904 };
const DefaultZoom = 15;

const Map = () => {
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }

  return (
    <>
      <input type="hidden" value={location.lat} disabled />
      <input type="hidden" value={location.lng} disabled />
      <MapPicker
        defaultLocation={defaultLocation}
        zoom={zoom}
        mapTypeId="roadmap"
        style={{ height: "15rem" }}
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey="AIzaSyDUsZ8aJNodyfYqAAs0xLTptAkl9dF8dnQ"
      />
    </>
  );
};

export default Map;
