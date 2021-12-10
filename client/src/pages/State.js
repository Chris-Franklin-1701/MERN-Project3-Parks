import React from "react";
import GoogleMapReact from "google-map-react";

// const location = {
//   address: "1600 Amphitheatre Parkway, Mountain View, california.",
//   lat: 37.42216,
//   lng: -122.08427,
// };

const State = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">This is a State</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBr1ZLjeqx0GNBqMDnxBUA7ZM3xI9dgDrE" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        {/* <LocationPin 
        /> */}
      </GoogleMapReact>
    </div>
  </div>
);

export default State;
