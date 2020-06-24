import React from "react";
import GoogleMapReact from "google-map-react";

const Marker = () => <i className="fas fa-map-marker-alt"></i>;

const SimpleMap = (center) => {
  const renderMap = () => {
    if (center.coord) {
      return (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "",
          }}
          defaultCenter={center.coord}
          defaultZoom={18}
        >
          <Marker lat={center.coord.lat} lng={center.coord.lng} />
        </GoogleMapReact>
      );
    } else {
      return <div></div>;
    }
  };

  return (
   
    <div className="map-holder" >{renderMap()}</div>
  );
};

export default SimpleMap;
