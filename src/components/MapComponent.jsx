import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
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
  houseNo: Yup.string().required("House No is required"),
  location: Yup.string().required("Location is required"),
  landmark: Yup.string().required("Landmark is required"),
  society: Yup.string().required("Society/Locality is required"),
});

const BoxWrapper = styled(Box)({
  ".location-search-input": {
    borderColor: "transparent transparent white transparent",
    borderStyle: "none none solid none",
    borderWidth: "0px 0px 0.25px 0px",
    width: "-webkit-fill-available",
    background: "transparent",
    color: "white",
  },

  ".location-search-input:focus-visible": {
    outline: "none",
  },

  ".autocomplete-dropdown-container": {
    color: "#080B0E !important",
    position: "absolute",
    top: "50px",
    width: "-webkit-fill-available",
    padding: "0px 30px",
  },

  ".main-map-box": {
    position: "absolute",
    top: "510px",
    width: "100%",
    left: "0",
    backgroundColor: "#101418",
    boxShadow: "0px 8px 12px rgb(0 0 0 / 16%)",
  },

  ".second": {
    padding: "0px 30px 30px",
  },

  ".second-map-box": {
    padding: "0px 30px 30px",
  },

  ".third-map-box": {
    padding: "0px 30px 30px",
  },
});

const MapComponent = ({ setNewAddress, setOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ lat: 40.756795, lng: -73.954298 });
  const [address, setAddress] = useState("");
  const [showCarousel, setShowCarousel] = useState(false);
  const [showCarousel2, setShowCarousel2] = useState(false);
  const [value, setValue] = useState();

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

  const handleChange = (newAddress) => {
    setAddress(newAddress);
  };

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
      <BoxWrapper>
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
                    <Typography className="label">
                      Experience Location
                    </Typography>
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
                        setNewAddress(values);
                        console.log("value====>", values);
                      }}
                    >
                      {({ values, handleChange, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                          <Box
                            sx={{
                              marginBottom: "30px",
                              color: "white",
                              fontSize: "14px",
                            }}
                          >
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

                          <Box
                            sx={{
                              marginBottom: "30px",
                              color: "white",
                              fontSize: "14px",
                            }}
                          >
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

                          <Box
                            sx={{
                              marginBottom: "30px",
                              color: "white",
                              fontSize: "14px",
                            }}
                          >
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

                          <Box
                            sx={{
                              marginBottom: "30px",
                              color: "white",
                              fontSize: "14px",
                            }}
                          >
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
                            onClick={() => {
                              handleSubmit(values);
                              setOpen(false);
                            }}
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
            containerElement={
              <div style={{ height: `380px`, width: "100%" }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </BoxWrapper>
    </React.Fragment>
  );
};

export default MapComponent;
