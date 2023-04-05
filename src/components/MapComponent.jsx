import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../assets/styles/map.css";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const validationSchema = Yup.object({
  houseNo: Yup.number("Number only").required("House No is required"),
  location: Yup.string().required("Location is required"),
  landmark: Yup.string().required("Landmark is required"),
  society: Yup.string().required("Society/Locality is required"),
});

const MapComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ lat: 40.756795, lng: -73.954298 });
  const [address, setAddress] = useState("");
  const [showCarousel, setShowCarousel] = useState(false);
  const [showCarousel2, setShowCarousel2] = useState(false);
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState();
  console.log("======>",formState);

  const handleImageClick = () => {
    if (address) {
      setShowCarousel(true);
    }
  };

  const handleImageClick1 = () => {
    setShowCarousel2(true);
  };

  const handleViewClick = () => {
    setValue(setShowCarousel);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    
  }

  const handleChange = (newAddress) => {
    setAddress(newAddress);
  };;

  const handleSelect = (selectedAddress) => {
    geocodeByAddress(selectedAddress)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => setCoords(latLng))
      .catch((error) => console.error("Error", error));
  };

  const handleToggleOpen = () => {
    setIsOpen(true);
  };

  const handleToggleClose = () => {
    setIsOpen(false);
  };

  const GoogleMapExample = withGoogleMap(() => (
    <GoogleMap defaultCenter={coords} defaultZoom={13}>
      <Marker position={coords} onClick={() => handleToggleOpen()}>
        {isOpen && (
          <InfoWindow
            onCloseClick={handleToggleClose}
            options={{ maxWidth: 100 }}
          >
            <span>This is InfoWindow message!</span>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  ));

  return (
    <React.Fragment>
      <div>
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div className="main-map-box">
              {!showCarousel && (
                <Box className="second">
                  <Typography className="label">Experience Location</Typography>
                  <input
                    {...getInputProps({
                      placeholder: "Enter location",
                      className: "location-search-input",
                    })}
                  />
                  {/* {console.log("value====>", address)} */}
                  <button className="add-location" onClick={handleImageClick}>
                    Add Location
                  </button>
                </Box>
              )}
              {showCarousel && !showCarousel2 && (
                <Box>
                  <Box className="second-map-box">
                    <Box className="modal-body">
                      <Box className="container-fluid">
                        <Box className="row">
                          <Box className="col-lg-12">
                            <Box sx={{ position: "relative" }}>
                              <Typography className="address-title">
                                {address}
                              </Typography>
                              {/* <Typography className="address-detail">
                                          Deonar Village Road, Deonar, Govandi
                                          East, MumbaI, Karnataka, India.
                                        </Typography> */}
                              <a
                                href="javascript:void(0);"
                                className="change-detail"
                                onClick={handleViewClick}
                              >
                                Change
                              </a>
                            </Box>
                            <button
                              type="button"
                              className="add-flat"
                              onClick={handleImageClick1}
                            >
                              Add Flat No/ House No/ Buidling
                            </button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )}
              {showCarousel2 && (
                <Box className="third-map-box">
                  <Formik
                    initialValues={{
                      houseNo: "",
                      location: "",
                      landmark: "",
                      society: "",
                    }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    setFormState(values);
                    console.log("value===>", values);
                  }}
                  
                  // onSubmit={(values, { setSubmitting }) => {
                  //   setSubmitting(false);
                  //   console.log("values=======>>>>>", values);
                  //   const eventDetails = {
                  //     ...values,
                  //   };
                  //   console.log("value===>", values);
                  //   console.log("eventDetails===>", eventDetails);
                  //   console.log(values);
                  //   setSubmitting(false);
                  // }}
                  >
                  {({values, handleChange}) => (
                      <Form>
                        {console.log('houseNo',values)}
                        <Box sx={{ marginBottom: "30px", color:'white', fontSize:'14px' }}>
                          <Typography className="label">
                            House/Flat Floor No
                          </Typography>
                          <Field
                            type="tel"
                            name="houseNo"
                            id="houseNo"
                            className="form-control"
                            placeholder="Enter Location"
                            value={values.houseNo}
                            onChange={handleChange}
                            autoComplete="off"
                            variant="standard"
                          />
                          <ErrorMessage name="houseNo" />
                        </Box>
                        <Box sx={{ marginBottom: "30px", color:'white', fontSize:'14px' }}>
                          <Typography className="label">
                            Experience Location
                          </Typography>
                          <Field
                            type="text"
                            name="location"
                            id="location"
                            className="form-control"
                            placeholder="Enter Location"
                            value={values.location}
                            onChange={handleChange}
                            autoComplete="off"
                            variant="standard"
                          />
                          <ErrorMessage name="location" />
                        </Box>
                        <Box sx={{ marginBottom: "30px", color:'white', fontSize:'14px' }}>
                          <Typography className="label">Landmark</Typography>
                          <Field
                            type="text"
                            name="landmark"
                            id="landmark"
                            className="form-control"
                            placeholder="Enter Location"
                            value={values.landmark}
                            onChange={handleChange}
                            autoComplete="off"
                            variant="standard"
                          />
                          <ErrorMessage name="landmark" />
                        </Box>
                        <Box sx={{ marginBottom: "30px", color:'white', fontSize:'14px' }}>
                          <Typography className="label">
                            Society Locality
                          </Typography>
                          <Field
                            type="text"
                            name="society"
                            id="society"
                            className="form-control"
                            placeholder="Enter Location"
                            value={values.society}
                            onChange={handleChange}
                            autoComplete="off"
                            variant="standard"
                          />
                          <ErrorMessage name="society" />
                        </Box>
                        <button
                          type="submit"
                          className="save-btn"
                          onClick={handleClose}
                        >
                          Save Address
                        </button>
                      </Form>
                    )}
                  </Formik>
                </Box>
              )}
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                      key={suggestion.placeId}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <GoogleMapExample
          containerElement={<div style={{ height: `380px`, width: "100%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </React.Fragment>
  );
};

export default MapComponent;
