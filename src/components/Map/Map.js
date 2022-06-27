import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "auto",
  height: "370px",
};

const center = {
  lat: -23.8207,
  lng: -90.4256,
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCmB5YuY-mnhs8KMoGaEj7QP-CXL8FJd-8">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
