import React from "react";
import { useParams } from "react-router-dom";
import GoogleMapReact from "google-map-react";
// require('dotenv').config();


const State = ({ zoomLevel }) => {

  const renderMarkers = (map, maps) => {
    console.log(maps)
    let marker = new maps.Marker({
      position: { lat: 41.8781, lng: -87.6298 },
      map,
      title: 'Hello World!'
    },
    {
      position: { lat: 40.6936, lng: -89.5890 },
      map,
      title: 'Hello World! 2'
    });
    return marker;
  };
  
  const { state } = useParams();

  const latAndLong = {
    WI: [44.5, -89.5],
    WV: [39.0, -80.5],
    VT: [44.0, -72.699997],
    TX: [31.0, -100.0],
    SD: [44.5, -100.0],
    RI: [41.700001, -71.5],
    OR: [44.0, -120.5],
    NY: [43.0, -75.0],
    NH: [44.0, -71.5],
    NE: [41.5, -100.0],
    KS: [38.5, -98.0],
    MS: [33.0, -90.0],
    IL: [40.0, -89.0],
    DE: [39.0, -75.5],
    CT: [41.599998, -72.699997],
    AR: [34.799999, -92.199997],
    IN: [40.273502, -86.126976],
    MO: [38.573936, -92.60376],
    FL: [27.994402, -81.760254],
    NV: [39.876019, -117.224121],
    ME: [45.367584, -68.972168],
    MI: [44.182205, -84.506836],
    GA: [33.247875, -83.441162],
    HI: [19.741755, -155.844437],
    AK: [66.160507, -153.369141],
    TN: [35.860119, -86.660156],
    VA: [37.926868, -78.024902],
    NJ: [39.833851, -74.871826],
    KY: [37.839333, -84.27002],
    ND: [47.650589, -100.437012],
    MN: [46.39241, -94.63623],
    OK: [36.084621, -96.921387],
    MT: [46.96526, -109.533691],
    WA: [47.751076, -120.740135],
    UT: [39.41922, -111.950684],
    CO: [39.113014, -105.358887],
    OH: [40.367474, -82.996216],
    AL: [32.31823, -86.902298],
    IA: [42.032974, -93.581543],
    NM: [34.307144, -106.018066],
    SC: [33.836082, -81.163727],
    PA: [41.203323, -77.194527],
    AZ: [34.048927, -111.093735],
    MD: [39.045753, -76.641273],
    MA: [42.407211, -71.382439],
    CA: [36.778259, -119.417931],
    ID: [44.068203, -114.742043],
    WY: [43.07597, -107.290283],
    NC: [35.782169, -80.793457],
    LA: [30.39183, -92.329102],
  };

  return (
    <div className="map">
      <h2 className="map-h2">This is a State</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBr1ZLjeqx0GNBqMDnxBUA7ZM3xI9dgDrE" }}
          defaultCenter={latAndLong[state]}
          defaultZoom={zoomLevel}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        >

        </GoogleMapReact>
      </div>
    </div>
  );
};

export default State;
