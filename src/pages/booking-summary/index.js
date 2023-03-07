import React, {useState} from "react";
import {Form, Formik,Field } from "formik";
import {DatePickerInput} from "rc-datepicker";
import InputAdornment from "@mui/material/InputAdornment";
import { Box, Grid, Modal, styled, Typography, CloseIcon,TextField,TextareaAutosize } from "@mui/material";
import Navbar from "../../components/NavbarComponent";
import add1 from "../../assets/images/add1.png";
import add2 from "../../assets/images/add2.png";
import add3 from "../../assets/images/add3.png";
import add4 from "../../assets/images/add4.png";
import add5 from "../../assets/images/add5.png";
import add6 from "../../assets/images/add6.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddonsCard from "../../components/AddonsCard";
import sGallery from "../../assets/images/sc-gallery.png";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { isMobile } from "react-device-detect";
import chefImg from "../../assets/images/chef-img.png";
import dateGold from "../../assets/images/date-gold.png";
import location from "../../assets/images/location.png";
import people from "../../assets/images/people.png";
import CreateIcon from "@mui/icons-material/Create";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import done from "../../assets/images/done.png";
import support from "../../assets/images/support.png";
import "../../assets/styles/fontStyle.css";
import { Button } from "react-bootstrap";

const BookingSummary = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openForm = () => setIsOpen(true);
    const closeForm = () => setIsOpen(false);
  const addonsCardDetail = [
    {
      image: add1,
      title: "Table",
    },
    {
      image: add2,
      title: "Flowers",
    },
    {
      image: add3,
      title: "Cake",
    },
    {
      image: add4,
      title: "Artisanal Cheese",
    },
    {
      image: add5,
      title: "Gluten free bread",
    },
    {
      image: add6,
      title: "Sauces",
    },
  ];

  const BoxWrapper = styled(Box)(() => ({
    background: "#101418",
    '.popup-form' :{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#101418',
        padding: '40px 20px',
        zIndex: '100',
        position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    // width: '100%',
    pointerEvents: 'auto',
    backgroundClip: 'padding-box',
    outline: '0',
      },
    ".supper-gallery": {
      marginTop: "40px",
    },
    ".supper-gallery .container-fluid": {
      padding: "80px 120px",
    },
    ".book-trad": {
      display: "flex",
      placeItems: "center",
      marginBottom: "40px",
      paddingLeft: "0px !important",
    },
    ".addons-title": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      // fontWeight: '600',
      fontSize: "32px",
      lineHeight: "39px",
      color: "#FBFBFB",
      marginBottom: "0px",
      marginLeft: "16px",
    },
    ".arrow-left": {
      color: "#FBFBFB",
      // fontSize: '20px',
    },
    ".partner": {
      border: "0px",
      background: "#101418",
      padding: "40px 20px",
    },
    ".addons-heading": {
      fontFamily: "Proxima Nova",
      fontStyle: "normal",
      fontSize: "18px",
      lineHeight: "20px",
      marginBottom: "16px",
    },
    // '.cust-details': {
    //     padding: '0px 15px'
    // },
    ".dinner-box": {
      padding: "0px 15px",
    },
    ".per-dinner": {
      background: "#101418",
      padding: "40px 20px",
      boxShadow: "0px 20px 24px rgb(0 0 0 / 6%)",
    },
    ".event-div": {
      display: "flex",
    },
    ".per-dinner-img": {
      width: "116px",
      height: "116px",
      objectFit: "cover",
    },
    ".rating-star": {
      fontStyle: "Proxima Nova",
      display: "flex",
      alignItems: "center",
      fontSize: "20px",
      lineHeight: "24px",
      color: "#FBFBFB",
    },
    ".event-title": {
      fontFamily: "Bon Vivant",
      fontStyle: "normal",
      // fontWeight: '700',
      fontSize: "20px",
      lineHeight: "25px",
      letterSpacing: "0.06em",
      color: "#FBFBFB",
      marginBottom: "8px",
    },
    ".event-subtitle": {
      fontFamily: "Proxima Nova",
      fontStyle: "normal",
      // fontWeight: '400',
      fontSize: "12px",
      lineHeight: "15px",
      letterSpacing: "0.06em",
      color: "#FBFBFB",
      marginBottom: "11px",
    },
    ".event-link": {
      fontFamily: "Proxima Nova",
      fontStyle: "normal",
      // fontWeight: '700',
      fontSize: "16px",
      lineHeight: "19px",
      textDecoration: "none",
      color: "#FBFBFB !important",
    },
    ".experience-breakup": {
      border: "0.5px solid #DCD7CB",
      padding: "16px 16px 0px",
      marginTop: "30px",
    },
    ".ex-details": {
      position: "relative",
    },
    ".ex-heading": {
      fontFamily: "Bon Vivant",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "20px",
      lineHeight: "25px",
      letterSpacing: "0.06em",
      color: "#FBFBFB",
      marginBottom: "10px",
    },
    ".ex-detail": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      // fontWeight: '400',
      fontSize: "14px",
      lineHeight: "17px",
      letterSpacing: "0.06em",
      color: "#FBFBFB",
      marginBottom: "0px",
    },
    ".ex-icon": {
      position: "absolute",
      right: "0px",
      top: "0px",
      height: "24px",
      width: "24px",
      color: "#FBFBFB",
      " -webkit-text-stroke": "1px",
    },
    ".submit-req": {
      background: "#C6A87D",
      color: "#080B0E",
      fontFamily: "Proxima Nova",
      fontSize: "20px",
      lineHeight: "24px",
      border: "0px",
      marginBottom: "30px",
      marginTop: "30px",
      width: "100%",
      cursor: "pointer",
      padding: "18px 10px",
    },
    ".contact-text": {
      fontFamily: "Proxima Nova",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "14px",
      lineHeight: "17px",
      textAlign: "center",
      color: "rgba(251, 251, 251, 0.6)",
    },
    ".table": {
      marginTop: "20px",
      marginBottom: "0px",
    },
    ".table-box": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    ".table-details": {
      fontFamily: "Proxima Nova",
      fontStyle: "normal",
      // fontWeight: '300',
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      padding: "0px 0px 16px",
    },
    ".grand-total": {
      fontFamily: "Proxima Nova",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "24px",
      color: "#FBFBFB",
      padding: "22px 0px",
    },
    ".border": {
      borderTop: "1px solid rgba(255, 255, 255, 0.6)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.6)",
    },
    ".tax1": {
      paddingTop: "20px",
    },
    ".header-club": {
      display: "none",
      padding: "15px",
      backgroundColor: "#080B0E",
    },
    ".addons-div": {
      padding: "0px 12px",
    },
    ".booking-box": {
      marginBottom: "20px",
    },
    ".booking-summary-title": {
      fontFamily: "Bon Vivant",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "30px",
      color: "#FBFBFB",
      marginBottom: "8px",
    },
    ".booking-summary-sub-title": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      marginBottom: "8px",
    },
    ".chef-edit": {
      display: "flex",
      placeItems: "center",
      position: "relative",
      marginBottom: "20px",
    },
    ".chef-edit-img": {
      width: "48px",
      height: "48px",
      objectFit: "cover",
      borderRadius: "43px",
    },
    ".chef-edit-title": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "24px",
      color: "#FBFBFB",
      marginLeft: "10px",
    },
    ".pencil-icon": {
      marginLeft: "2.5px",
      marginRight: "2.5px",
      color: "#C6A87D",
      display: "block",
      textAlign: "right",
      position: "absolute",
      right: "0px",
      top: "auto",
      bottom: "auto",
      lineHeight: "1",
    },
    ".chef-profile-detail": {
      marginBottom: "16px",
      display: "flex",
    },
    ".chef-profile-icon": {
      height: "18px",
      width: "18px",
      objectFit: "contain",
      marginRight: "10px",
    },
    ".chef-profile-date": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
    },
    ".exp-info-imp": {
      position: "relative",
    },
    ".exp-info-heading": {
      fontFamily: "Bon Vivant",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "20px",
      lineHeight: "25px",
      color: "#FBFBFB",
      marginBottom: "20px",
    },
    ".drop-down": {
      position: "absolute",
      right: "0px",
      top: "0px",
      color: "#FBFBFB",
      webkitTextStroke: "1px",
    },
    ".exp-ul": {
      paddingLeft: "1em",
      marginBottom: "20px",
    },
    ".exp-li": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      marginBottom: "16px",
    },
    ".contact": {
      position: "relative",
      marginBottom: "20px",
    },
    ".form-check": {
      marginBottom: "20px",
      minHeight: "1.5rem",
    },
    ".form-check-input": {
      backgroundColor: "#C6A87D",
      borderColor: "#C6A87D",
      borderRadius: "0px",
      width: "18px",
      height: "18px",
      marginRight: "11px",
    },
    ".form-check-label": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      marginBottom: "0px",
      paddingTop: "4px",
    },
    ".forward-arrow": {
      position: "absolute",
      right: "10px",
      bottom: "30px",
      color: "#fbfbfb",
      webkitTextStroke: "1px",
      top: "0px",
    },
    ".email-text": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      marginBottom: "0px",
    },
    ".contact": {
      position: "relative",
    },
    ".contact-number": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      marginBottom: "16px",
    },
    ".form-group": {
      display: "flex",
      flexWrap: "wrap",
    },
    ".country-code": {
      borderBottom: "0.25px solid #FBFBFB",
      display: "inline-flex",
      placeItems: "center",
      paddingBottom: "0.375rem",
      color: "#FBFBFB",
    },
    ".drop-down-2": {
      fontSize: "12px",
      marginLeft: "2.5px",
      marginRight: "2.5px",
    },
    ".form-control": {
      paddingLeft: "10px",
      flex: "1",
      backgroundColor: "transparent",
      border: "0px",
      borderBottom: "0.25px solid #FBFBFB",
      borderRadius: "0px",
      paddingLeft: "0px",
      paddingRight: "0px",
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      display: "block",
      width: "100%",
      padding: "0.375rem 0.75rem",
      transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    },
    ".chef-profile": {
      marginTop: "5px",
    },
    ".chef-profile-box": {
      marginBottom: "16px",
      display: "flex",
    },
    ".chef-profile-logo": {
      width: "20px",
      height: "20px",
      objectFit: "contain",
      marginRight: "10px",
    },
    ".chef-profile-dis": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "250",
      fontSize: "14px",
      lineHeight: "20px",
      color: "#FBFBFB",
    },
    ".policy-link": {
      fontFamily: "ProximaNovaA-Regular",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "17px",
      color: "#C6A87D",
      textDecoration: "underLine",
    },
    '.form-heading':{
        fontFamily: 'ProximaNovaA-Regular',
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "24px",
      color: "#FBFBFB",
    },
    '.form-head-box':{
        display:'flex',
        padding: '0px',
    marginBottom: '30px',
    borderBottom: 'none',
    position:'relative',
    justifyContent: 'flex-start',
    },
    '.form-arrow':{
        color: '#FBFBFB',
    fontSize: '20px',
    marginRight: '16px',
    },
    '.form-close-btn':{
        fontSize: '20px',
    backgroundColor:'transparent',
    color:'#FBFBFB',
    border:'none',
    marginLeft:'78px'
    },
    '.form-details':{
        padding:'0',
        position:'relative',
        flex:'1 1 auto'
    },
    '.form-field':{
       padding:'0px 0px 56px'
    },
    '.form-label':{
        fontFamily: 'ProximaNovaA-Regular',
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      marginBottom:'8px'
    },
    "@media (min-width: 1px) and (max-width:425px)": {
      ".supper-gallery .container-fluid": {
        padding: "20px 10px",
      },
      ".header-club": {
        padding: "0px 110px",
        display: "flex",
      },
      ".addones-mobile-heading": {
        padding: "8px 0px !important",
        fontSize: "24px",
        textAlign: "center",
        color: "#FBFBFB !important",
        fontFamily: "Bon Vivant",
      },
      ".addons-title": {
        fontSize: "28px",
        lineHeight: "30px",
      },
      ".per-dinner": {
        padding: "20px 0px",
      },
      ".table-details": {
        fontSize: "12px",
        lineHeight: "15px",
      },
      ".grand-total": {
        fontSize: "16px",
        lineHeight: "20px",
      },
      ".ex-heading": {
        fontSize: "16px",
        lineHeight: "20px",
        letterSpacing: "0.04em",
      },
      ".event-title": {
        fontSize: "14px",
        lineHeight: "18px",
        letterSpacing: "0.04em",
      },
      ".event-link": {
        fontSize: "14px",
        lineHeight: "18px",
      },
      ".rating-star": {
        fontSize: "14px",
        lineHeight: "18px",
      },
      ".submit-req": {
        fontSize: "16px",
        lineHeight: "18px",
      },
    },
    "@media (min-width: 371px) and (max-width:400px)": {
      ".header-club": {
        padding: "0px 150px",
      },
    },
    "@media (min-width: 425px) and (max-width:450px)": {
      ".header-club": {
        padding: "0px 170px",
      },
    },
    "@media (min-width: 426px) and (max-width:768px)": {
      ".supper-gallery .container-fluid": {
        padding: "40px 80px",
      },
      ".header-club": {
        display: "flex",
      },
    },
    "@media (min-width: 320px) and (max-width:767px)": {
      ".addones-mobile-heading": {
        padding: "8px 0px !important",
        fontSize: "24px",
        textAlign: "center",
        color: "#FBFBFB",
        fontFamily: "Bon Vivant",
      },
    },
    "@media(min-width:600px) and (max-width: 768px)": {
      ".header-club": {
        display: "flex",
        background: "#DCD7CB",
      },
      ".bm-burger-bars": {
        background: "#080B0E !important",
      },
    },
    ".addones-mobile-heading": {
      fontSize: "24px",
      paddingLeft: "280px",
      textAlign: "center",
      color: "#080B0E",
      fontFamily: "Bon Vivant",
    },
  }));
  

  return (
    <React.Fragment>
      <BoxWrapper>
        <Navbar isColor={true} />
        {isMobile ? (
          <Box className="header-club">
            <Typography className="addones-mobile-heading">Privee</Typography>
          </Box>
        ) : (
          ""
        )}
        <Box className="supper-gallery cust-details">
          <Box className="container-fluid">
            <Box className="row supper-chef-details">
              <Box className="book-trad">
                <ArrowBackIcon className="arrow-left" />
                <Typography className="addons-title">
                  Booking Summary
                </Typography>
              </Box>
              <Box className="row customer-details addons-div">
                <Grid container>
                  <Grid
                    xl={7}
                    lg={7}
                    xs={7}
                    md={7}
                    sm={12}
                    xs={12}
                    className="partner"
                  >
                    <Box className="booking-box">
                      <Typography className="booking-summary-title">
                        Booking Summary
                      </Typography>
                      <Typography className="booking-summary-sub-title">
                        Confirm Details before proceeding to pay
                      </Typography>
                    </Box>
                    <Box className="booking-box">
                      <Box class="chef-edit">
                        <img className="chef-edit-img" src={chefImg} />
                        <Typography className="chef-edit-title">
                          Chef Mako Ravindran
                        </Typography>
                        <CreateIcon className="pencil-icon" />
                      </Box>
                      <Box class="chef-profile">
                        <Box className="chef-profile-detail">
                          <img className="chef-profile-icon" src={dateGold} />
                          <Typography className="chef-profile-date">
                            April 9 | 7:30 PM - 10 PM
                          </Typography>
                        </Box>
                        <Box className="chef-profile-detail">
                          <img className="chef-profile-icon" src={location} />
                          <Typography className="chef-profile-date">
                            Silver bar, Downtown
                          </Typography>
                        </Box>
                        <Box className="chef-profile-detail">
                          <img className="chef-profile-icon" src={people} />
                          <Typography className="chef-profile-date">
                            6 Diners
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="booking-box">
                      <Box class="exp-info-imp">
                        <Typography className="exp-info-heading">
                          Important Experience Info
                        </Typography>
                        <KeyboardArrowDownIcon className="drop-down" />
                        <ul className="exp-ul">
                          <li className="exp-li">Service Includes</li>
                          <li className="exp-li">Service Excludes</li>
                          <li className="exp-li">Table set upincludes</li>
                          <li className="exp-li">
                            Confirm Details before proceeding to pay
                          </li>
                          <li className="exp-li">Decor not included</li>
                        </ul>
                        <hr />
                      </Box>
                    </Box>
                    <Box className="contact">
                      <Box className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          checked
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Enter GSTIN for tax benefits (Optional)
                        </label>
                        <KeyboardArrowRightIcon data-bs-toggle="modal"
                                   data-bs-target="#exampleModal" onClick={openForm} className="forward-arrow" />
                                   {isOpen && (
        <Box className="popup-form">
            <Box className='form-head-box'>
                <ArrowBackIcon className="form-arrow"/>
            <Typography className="form-heading">GST Details</Typography>
          <button className="form-close-btn" onClick={closeForm}>X</button>
          </Box>
          <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className="form-details">
        <Box className='form-field'>
      <label className="form-label" for="">GST Number</label>
      <Field type="text" name="" id="" placeholder="Enter Location" class="form-control" value="9876543210"/>
      </Box>
      <Box className='form-field'>
      <label className="form-label" for="">Registered Company Name</label>
      <Field type="text" name="" id="" placeholder="Enter Location" class="form-control" value="Teqzo International"/>
      </Box>
      <Box className='form-field'>
      <label className="form-label" for="">Building/ FlatNumber</label>
      <Field type="text" name="" id="" placeholder="Enter Location" class="form-control" value="111"/>
      </Box>
      <Box className='form-field'>
      <label className="form-label" for="">Street/area/ Road name</label>
      <Field type="text" name="" id="" placeholder="Enter Location" class="form-control" value="Manchester"/>
      </Box>
      <Box className='form-field'>
      <label className="form-label" for="">Pincode</label>
      <Field type="number" name="" id="" placeholder="Enter Location" class="form-control" value="400022"/>
      </Box>
        {/* <button type="submit">Submit</button> */}
      </Form>
    </Formik>
        </Box>
      )}
                      </Box>
                      <hr />
                    </Box>
                    <Box className="booking-box">
                      <Typography className="email-text">
                        An Email Confirmation will be sent to
                      </Typography>
                    </Box>
                    <Box class="booking-box">
                      <Box class="contact">
                        <label className="contact-number" for="contact-number">
                          Mobile
                        </label>
                        <Box className="form-group">
                          <span className="country-code">
                            +91{" "}
                            <KeyboardArrowDownIcon className="drop-down-2" />
                          </span>
                          <input
                            type="tel"
                            className="form-control"
                            id="contact-number"
                            placeholder="10 digit number"
                            value=""
                            required=""
                          />
                        </Box>
                        {/* <Box class="invalid-feedback">Incorrect Mobile Number</Box> */}
                      </Box>
                    </Box>
                    <Box className="booking-box">
                      <label className="contact-number" for="">
                        Email{" "}
                      </label>
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Kachwallasana@gmail.com"
                        class="form-control"
                      />
                    </Box>
                    <Box className="booking-box">
                      <Box class="chef-profile">
                        <Box className="chef-profile-box">
                          <img className="chef-profile-logo" src={done} />
                          <Typography className="chef-profile-dis">
                            An email confirmation has been sent to
                            kachwallsana@gmail.com <br />
                            and SMS sent to 23456745
                          </Typography>
                        </Box>
                        <Box className="chef-profile-box">
                          <img className="chef-profile-logo" src={support} />
                          <Typography className="chef-profile-dis">
                            Our team and Chef will get in touch with you to
                            discuss menu <br />
                            (allergen+protein info), venue, set up and pricing
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="booking-box">
                      <Box className="exp-info-imp">
                        <Typography className="exp-info-heading">
                          Cancellation Policy
                        </Typography>
                        <KeyboardArrowDownIcon className="drop-down" />
                        <Box className="contact">
                          <Box className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              checked
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckDefault"
                            >
                              I agree to cancellation and refund policy
                            </label>
                          </Box>
                        </Box>
                        <Typography className="policy-link">
                          View Cancellation Policy
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    xl={5}
                    lg={5}
                    xs={5}
                    md={5}
                    sm={12}
                    xs={12}
                    className="cust-details dinner-box"
                  >
                    <Box className="per-dinner adsss">
                      <Box className="event-div">
                        <img src={sGallery} alt="" className="per-dinner-img" />
                        <Box sx={{ marginLeft: "12px" }}>
                          <Typography className="event-title">
                            The Big Fat Parsi Blowout
                          </Typography>
                          <Typography className="event-subtitle">
                            Curated by{" "}
                            <a href="#" className="event-link">
                              Chef Mako
                            </a>
                          </Typography>
                          <Typography className="rating-star">
                            <StarIcon
                              sx={{
                                color: "#C6A87D",
                                height: "20px",
                                width: "20px",
                              }}
                            />{" "}
                            4.7
                          </Typography>
                        </Box>
                      </Box>
                      <Box className="experience-breakup">
                        <Box className="ex-details">
                          <Typography className="ex-heading">
                            Experience Breakup
                          </Typography>
                          <Typography className="ex-detail">
                            This is an estimate, final price will be <br />
                            communicated on call
                          </Typography>
                          <ExpandMoreIcon className="ex-icon" />
                        </Box>
                        <Box className="table table-borderless">
                          <Box className="table-box">
                            <Typography className="table-details">
                              Food
                            </Typography>
                            <Typography className="table-details">
                              ₹ 2,500
                            </Typography>
                          </Box>
                          <Box className="table-box">
                            <Typography className="table-details">
                              Service Charge
                            </Typography>
                            <Typography className="table-details">
                              ₹ 2,500
                            </Typography>
                          </Box>
                          <Box className="table-box">
                            <Typography className="table-details">
                              Tax
                            </Typography>
                            <Typography className="table-details">
                              ₹ 2,500
                            </Typography>
                          </Box>
                          <Box className="table-box">
                            <Typography className="table-details">
                              Venue
                            </Typography>
                            <Typography className="table-details">
                              ₹ 2,500
                            </Typography>
                          </Box>
                          <Box className="table-box">
                            <Box className="table-details">
                              Additional Courses +2
                            </Box>
                            <Box className="table-details">₹ 2,500</Box>
                          </Box>
                          <Box className="table-box border">
                            <Typography className=" grand-total table-details">
                              Grand Total
                            </Typography>
                            <Typography className="table-details grand-total">
                              ₹ 2,5000
                            </Typography>
                          </Box>
                          <Box className="tax tax1 table-box">
                            <Typography className="table-details">
                              +Incl Of GST
                            </Typography>
                          </Box>
                          <Box className="tax">
                            <Typography className="table-details">
                              ++1.95% + GST
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="row viewbreak">
                        <Box className="col-lg-12">
                          <button type="submit" className="submit-req">
                            Next
                          </button>
                        </Box>
                        <Typography className="contact-text">
                          Estimate figure, further changes may amend the total
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </BoxWrapper>
    </React.Fragment>
  );
};
export default BookingSummary;
