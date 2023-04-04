import React, {useState} from "react";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";
import { Box, styled, TextField } from "@mui/material";
import '../assets/styles/map.css';

const containerStyle = {
  width: "100%",
  height: "380px"
};

const center = {
  lat: -3.745,
  lng: -38.523
};



const MapComponent = () => {
    // console.log('======isVisible===',isVisible);
    // const [isVisible, setVisible] = useState(false);
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAlUV7Gli9S0rwtq72UMXLf9HlrRWkvqc8"
      libraries={["places"]}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        (<Autocomplete className="map-container">
          <TextField
             type="text"
             name="address"
             placeholder="Enter Location"
             variant="standard"
             InputProps={{
               disableUnderline: true,
             }}
            style={{
              boxSizing: `border-box`,
              borderBottom: "1px solid white",
              border: "0px",
              backgroundColor: "transparent",
              color: "#FBFBFB !important",
              width: `92%`,
              height: `32px`,
              borderRadius: "0px",
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "0%",
              top: "435px",
              fontFamily: "Proxima Nova",
            }}
          />
        </Autocomplete>
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(MapComponent);
