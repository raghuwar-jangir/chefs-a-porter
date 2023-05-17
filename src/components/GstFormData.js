import React, { useEffect, useState, useContext } from "react";
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
    Box,
    Grid,
    Modal,
    styled,
    Typography,
    TextField,
    TextareaAutosize,
    Checkbox,
  } from "@mui/material";


import UsersContext from "../context/UsersContext";

const style = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: "12000",
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    outline: "0",
    ".error": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "15px",
      color: "#FBFBFB",
      marginTop: "6px",
    },
    ".modal-content": {
      padding: "40px 20px",
      backgroundColor: "#101418!important",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "255px",
      pointerEvents: "auto",
      top: "8%",
      left: "42.5%",
      backgroundClip: "padding-box",
      outline: "0",
      boxShadow: "0px 8px 12px rgb(0 0 0 / 16%)",
    },
    ".modal-header": {
      display: "flex",
      padding: "0px",
      marginBottom: "30px",
      borderBottom: "none",
      position: "relative",
      justifyContent: "flex-start",
      flexShrink: "0",
      alignItems: "center",
    },
    ".form-arrow": {
      color: "#FBFBFB !important",
      fontSize: "20px",
      marginRight: "16px",
    },
    ".modal-title": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "24px",
      color: "#FBFBFB",
    },
    ".close": {
      position: "absolute",
      padding: " 0px",
      border: " 0px",
      background: "transparent",
      right: "0px",
    },
    ".close-icon": {
      fontSize: "28px",
      marginRight: "0px",
      color: "#FBFBFB",
    },
    ".modal-body": {
      padding: "0px",
      position: "relative",
      flex: "1 1 auto",
    },
    ".container-fluid": {
      width: "100%",
      marginRight: "auto",
      marginLeft: "auto",
    },
    ".form-field": {
      padding: "0px 0px 56px",
    },
    ".form-label": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      marginBottom: "8px",
    },
    ".form-control": {
      outline: "none",
      paddingLeft: "10px",
      flex: "1",
      backgroundColor: "transparent",
      border: "0px",
      borderBottom: "0.25px solid #FBFBFB",
      borderRadius: "0px",
      paddingRight: "0px",
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      display: "block",
      width: "95%",
      padding: "0.780rem 0.75rem 0.375rem 0px",
      transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    },
    ".form-field .error":{
        color:"red",
        paddingTop: "4px",
        fontWeight: "500",
    },
    ".btn-primary": {
      border: "none !important",
      background: "#C6A87D",
      width: "100% !important",
      padding: "14.5px 10px",
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "24px",
      borderRadius: "0px",
      color: "#080B0E",
      textTransform: "capitalize",
      fontFamily: "ProximaNovaA-Regular",
      marginTop: "0px",
    },
  };

const GstFormData = ({handleClose, gstDataData})=>{
    const {
        setIsGstSubmitData,
        gstData,
        setGstData
      } = useContext(UsersContext);
    
      const validationSchema = Yup.object().shape({
        number: Yup.string().required("Gst Number is required"),
        business_name: Yup.string().required("Business Name is required"),
        building: Yup.string().required("Flat number is required"),
        street: Yup.string().required("Address is required"),
        pincode: Yup.string().required("Pincode is required")
      });

      useEffect(() => {
            //console.log('gstData useEffect',gstData)
      }, [gstData]);
    
    return(
        <Box sx={style}>
            <Box className="modal-content">
              <Box className="modal-header">
                <ArrowBackIcon className="form-arrow" />
                <Typography className="modal-title" id="exampleModalLabel">
                  GST Details
                </Typography>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className="close"
                  onClick={handleClose}
                >
                  <CloseIcon className="close-icon" />
                </button>
              </Box>
              <Box class="modal-body">
                <Box class="container-fluid">
                  <Formik
                    initialValues={{
                      number: gstDataData ? gstDataData.number : '',
                      business_name: gstDataData ? gstDataData.business_name : '',
                      building: gstDataData ? gstDataData.building : '',
                      street: gstDataData ? gstDataData.street : '',
                      pincode: gstDataData ? gstDataData.pincode : '',
                  }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      setGstData(values);
                      localStorage.setItem('gstInfo', JSON.stringify(values));
                      setIsGstSubmitData(true);
                      handleClose();
                  }}
                  >
                     {({touched, errors, values, handleChange, handleSubmit}) => (
                        <Form onSubmit={handleSubmit}>
                        <Box className="row">
                          <Box className="form-field">
                            <label className="form-label" htmlFor="number">
                              GST Number
                            </label>
                            <Field
                              className="form-control"
                              type="text"
                              id="number"
                              name="number"
                              placeholder=""
                              onChange={handleChange}
                              autoComplete="off"
                            />
                            {errors.number && touched.number ? (
                                <div className="error">{errors.number}</div>
                              ) : null}
                          </Box>

                          <Box className="form-field">
                            <label className="form-label" htmlFor="name">
                              Registered Company Name
                            </label>
                            <Field
                              className="form-control"
                              type="text"
                              id="business_name"
                              name="business_name"
                              placeholder=""
                              onChange={handleChange}
                              autoComplete="off"
                            />
                           {errors.number && touched.number ? (
                                <div className="error">{errors.business_name}</div>
                              ) : null}
                          </Box>

                          <Box className="form-field">
                            <label className="form-label" htmlFor="flatNumber">
                              Building/ FlatNumber
                            </label>
                            <Field
                              className="form-control"
                              type="text"
                              id="building"
                              name="building"
                              onChange={handleChange}
                              placeholder=""
                              autoComplete="off"
                            />
                            {errors.building && touched.building ? (
                                <div className="error">{errors.building}</div>
                              ) : null}
                          </Box>

                          <Box className="form-field">
                            <label className="form-label" htmlFor="address">
                              Street/area/ Road name
                            </label>
                            <Field
                              className="form-control"
                              type="text"
                              id="street"
                              name="street"
                              onChange={handleChange}
                              placeholder=""
                              autoComplete="off"
                            />
                            {errors.street && touched.street ? (
                                <div className="error">{errors.street}</div>
                              ) : null}
                          </Box>

                          <Box className="form-field">
                            <label className="form-label" htmlFor="pincode">
                              Pincode
                            </label>
                            <Field
                              className="form-control"
                              type="text"
                              id="pincode"
                              name="pincode"
                              onChange={handleChange}
                              placeholder=""
                              autoComplete="off"
                            />
                            {errors.pincode && touched.pincode ? (
                                <div className="error">{errors.pincode}</div>
                              ) : null}
                          </Box>

                          <button
                            type="submit"
                            className="btn btn-primary"
                            // disabled={isSubmitting}
                            onClick={() => {
                              handleSubmit(values);                              
                            }}
                            >
                              Save
                          </button>
                        </Box>
                      </Form>
                    )}
                  </Formik>
                </Box>
              </Box>
            </Box>
          </Box>
    )
}

export default GstFormData