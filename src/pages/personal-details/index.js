import {
  styled,
  Box,
  Grid,
  Typography,
  Select,
  MenuItem,
  Stack,
  Modal,
  TextField,
  Link,
} from "@mui/material";
import React, { useContext, useEffect, useState, memo } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Navbar from "../../components/NavbarComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../../assets/styles/fontStyle.css";
import sGallery from "../../assets/images/sc-gallery.png";
import people from "../../assets/images/people.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import gUser from "../../assets/images/user.png";
import CloseIcon from "@mui/icons-material/Close";
import SupperClubTreatyComponent from "../../components/SupperClubTreatyComponent";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import contact from "../../assets/images/contact-form.png";
import { navigate } from "gatsby";
import InputAdornment from "@mui/material/InputAdornment";
import OtpComponent from "../../components/OtpComponent";
import * as _ from "lodash";
import Cookies from "js-cookie";
import SupperClubOtpVerificationModal from "../../components/SupperClubOtpVerificationModal";
import OtpContext from "../../context/OtpContext";
import UsersContext from "../../context/UsersContext";
import TodoForm from "../../components/TodoForm";

const PersonalDetails1 = ({ refModal }) => {
  const { setOtpNumber, setIsSendOtpApiCall } = useContext(OtpContext);
  const { mealTypeData, setChefFormData, setIsChefData } =
    useContext(UsersContext);
  const [contactPopUp, setContactPopUp] = useState(false);
  const ContactOpen = () => setContactPopUp(true);
  const ContactClose = () => setContactPopUp(false);
  const [open, setOpen] = useState(false);
  const [openOtp, setOpenOtp] = useState(false);
  const [superClubBookingDetails, setSuperClubBookingDetails] = useState();
  const [todos, setTodos] = useState([]);
  const [contactNumber, setContactNumber] = useState("");
  const [showData, setShowData] = useState();
  const CHARACTER_LIMIT = 40;
  const cookieValue2 = Cookies.get("supperClubBookingPersonalDetail");
  const superClubDetailIdCookieValue = Cookies.get("superClubDetailId");
  const superClubDetailId = superClubDetailIdCookieValue?.replaceAll('"', "");
  const cookieValue3 = Cookies.get("PersonalDetailsPaymentCalculation");
  const supperClubExperienceSeats = Cookies?.get("supperClubExperienceSeats");
  const experienceNumberOfSeats = parseInt(
    supperClubExperienceSeats?.replaceAll('"', "")
  );
  const supperClubExperienceTables = Cookies?.get("supperClubExperienceTables");
  const experienceNumberOfTables = parseInt(
    supperClubExperienceTables?.replaceAll('"', "")
  );
  const totalSeats = experienceNumberOfSeats + experienceNumberOfTables;
  const [
    personalDetailsPaymentCalculation,
    setPersonalDetailsPaymentCalculation,
  ] = useState();

  useEffect(() => {
    if (cookieValue2) {
      setSuperClubBookingDetails(JSON.parse(cookieValue2));
    }
    if (cookieValue3) {
      setPersonalDetailsPaymentCalculation(JSON.parse(cookieValue3));
    }
  }, [cookieValue2, cookieValue3]);

  const handleOpenOtp = (contactNumber, values) => {
    if (!_.isEmpty(contactNumber)) {
      setOpenOtp(true);
      setOtpNumber(`+91${contactNumber}`);
      setContactNumber(contactNumber);
      setIsSendOtpApiCall(true);
    }
    Cookies.set("supperClubBookingPersonalDetail", JSON.stringify(values));
  };
  const handleCloseOtp = () => setOpenOtp(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Incorrect Email Id")
      .required("please enter email"),
    contactNumber: Yup.number().required("contactNumber is required"),
    contact: Yup.number().required("contactNumber is required"),
  });
  const MainBox = styled(Box)({
    padding: "80px 120px",
    marginTop: "40px",
    background: "#dcd7cb",
    ".book-trad": {
      display: "flex",
      placeItems: "center",
      marginBottom: "40px",
      paddingLeft: "0px !important",
    },
    ".addons-title": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: "39px",
      color: "#080B0E",
      marginBottom: "0px",
      marginLeft: "16px",
    },
    ".arrow-left": {
      color: "#080B0E",
      cursor: "pointer",
    },
    ".MuiFormHelperText-root": {
      textAlign: "right",
      fontFamily: "Proxima Nova ALT",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "17px",
      color: "#7D7D7D",
      margin: "0px",
    },
    ".css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root": {
      borderRadius: "0px",
      padding: "0px",
    },
    ".dinner-box": {
      paddingLeft: "10px",
      position: "relative",
    },
    ".per-dinner": {
      background: "#FBFBFB",
      padding: "20px 20px 40px",
      boxShadow: "0px 20px 24px rgb(0 0 0 / 6%)",
      position: "sticky",
      top: "100px",
    },
    ".event-div": {
      display: "flex",
      placeItems: "center",
    },
    ".per-dinner-img": {
      width: "116px",
      height: "116px",
      objectFit: "cover",
    },
    ".event-title": {
      fontFamily: "Bon Vivant",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "20px",
      lineHeight: "25px",
      letterSpacing: "0.06em",
      color: "#101418",
      marginBottom: "8px",
    },
    ".event-subtitle": {
      fontFamily: "Proxima Nova",
      fontStyle: "normal",
      fontSize: "12px",
      lineHeight: "15px",
      letterSpacing: "0.06em",
      color: "#101418",
      marginBottom: "11px",
    },
    ".event-link": {
      fontFamily: "Proxima Nova",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "19px",
      textDecoration: "underline",
      color: "#101418 !important",
    },
    ".experience-breakup": {
      border: "0.5px solid #101418",
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
      color: "#101418",
      marginBottom: "10px",
    },
    ".ex-detail": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#101418",
      marginBottom: "0px",
    },
    ".ex-icon": {
      position: "absolute",
      right: "0px",
      top: "0px",
      fontSize: "30px",
      color: "#101418",
      " -webkit-text-stroke": "1px",
    },
    ".submit-req": {
      background: "#080B0E",
      color: "#C6A87D",
      fontFamily: "ProximaNovaA-Regular",
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: 600,
      border: "0px",
      marginBottom: "30px",
      marginTop: "30px",
      width: "100%",
      cursor: "pointer",
      padding: "18px 10px",
    },
    ".rating-star": {
      fontFamily: "ProximaNovaA-Regular",
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#101418",
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
      fontSize: "16px",
      lineHeight: "19px",
      color: "#101418",
      padding: "0px 0px 16px",
    },
    ".grand-total": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "24px",
      color: "#101418",
      padding: "16px 0px",
    },
    ".table-details-pt": {
      paddingTop: "16px",
    },
    ".border": {
      borderTop: "1px solid #080B0E",
    },
    ".border-tb": {
      borderBottom: "1px solid #080B0E",
      borderTop: "1px solid #080B0E",
    },
    ".tax1": {
      paddingTop: "20px",
    },
    ".contact-text": {
      fontFamily: "Proxima Nova",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "14px",
      lineHeight: "17px",
      textAlign: "center",
      color: "#080B0E",
    },
    ".main-person-box": {
      display: "flex",
      flexWrap: "wrap",
    },
    ".container": {
      width: "100%",
      overflow: "hidden",
    },

    ".partner": {
      float: "left",
      width: "58.333%",
      background: "#FBFBFB",
      borderRight: "10px solid #dcd7cb",
      padding: "40px 20px",
    },
    ".form-field": {
      marginBottom: "40px",
      position: "relative",
    },
    ".form-label": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "19px",
      color: "#080B0E",
      marginBottom: "16px",
    },
    ".form-control": {
      paddingLeft: "10px",
      flex: "1",
      outline: "none",
      backgroundColor: "transparent",
      border: "0px",
      borderBottom: "0.25px solid #080B0E",
      borderRadius: "0px",
      paddingRight: "0px",
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#080B0E",
      display: "block",
      width: "99%",
      padding: "20px 0.75rem 0.375rem 0px",
      transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    },
    ".form-control-drop": {
      paddingLeft: "10px",
      flex: "1",
      outline: "none",
      backgroundColor: "transparent",
      border: "0px",
      borderBottom: "0.25px solid #080B0E",
      borderRadius: "0px",
      paddingRight: "0px",
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#080B0E",
      display: "block",
      width: "100%",
      padding: "0px 0.75rem 0.375rem 0px",
      transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    },
    ".your-box": {
      display: "flex",
      justifyContent: "space-between",
    },
    ".your-food": {
      marginBottom: "40px",
    },
    ".view-text": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "19px",
      textDecoration: "underline",
      color: "#080B0E",
    },
    ".view-text:hover": {
      color: "#C6A87D",
    },
    ".who-join": {
      backgroundColor: "#101418",
      padding: "20px 30px",
    },
    ".who-heading": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      color: "#FBFBFB",
      marginBottom: "8px",
    },
    ".who-heading-option": {
      fontFamily: "Proxima Nova Alt",
      fontWeight: 300,
    },
    ".who-sub-heading": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "24px",
      color: "#FBFBFB",
      marginBottom: "1rem",
    },
    ".guest-details": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "8px",
      gap: "8px",
      background: "#080B0E",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.08)",
      position: "relative",
    },
    ".user-logo": {
      width: "18px",
      height: "18px",
      objectFit: "contain",
    },
    ".user-name": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#FBFBFB",
      marginBottom: "0px",
    },
    ".line": {
      color: "#FBFBFB",
      fontSize: "25px",
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: 300,
    },
    ".guest-mail": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#FBFBFB",
      marginBottom: "0px",
      position: "relative",
    },
    ".guest-close": {
      color: "#FBFBFB",
      fontSize: "18px",
      position: "absolute",
      right: "8px",
    },
    ".guest-number": {
      display: "flex",
      alignItems: "center",
    },
    ".guest-remain": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "12px",
      lineHeight: "15px",
      color: "#FBFBFB",
      marginBottom: "0px",
      marginTop: "20px",
    },
    ".add-guest": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#FBFBFB",
      textDecoration: "none",
      border: "1px solid #C6A87D",
      padding: "12px 20px",
      marginRight: "0",
      display: "block",
      width: "max-content",
      marginLeft: "auto",
      marginTop: "20px",
      background: "transparent",
      cursor: "pointer",
    },
    ".add-guest:hover": {
      color: "#C6A87D",
    },
    ".main-title": {
      fontSize: "14px !important",
      lineHeight: "17px !important",
    },
    ".treaty-box": {
      flexDirection: "row !important",
    },
    ".sub-div": {
      padding: "20px 30px !important",
    },
    ".date-stack": {
      color: "#FBFBFB",
      background: "#101418",
      padding: "16px 0px",
      placeContent: "center",
      display: "flex",
      placeItems: "center",
      margin: "0px -20px 20px",
      flexDirection: "row",
    },
    ".date-description": {
      fontSize: "12px",
      fontWeight: 300,
      fontFamily: "Proxima Nova Alt",
      lineHeight: "15px",
      letterSpacing: "0.06em",
      textAlign: "center",
      padding: "0px 6px",
    },
    ".line": {
      margin: "0px",
      fontSize: "15px",
    },
    ".text-box-1": {
      background: "rgba(189, 189, 189, 0.2)",
      padding: "16px",
      border: "0px",
      width: "-webkit-fill-available",
      maxWidth: "-webkit-fill-available",
      minWidth: "-webkit-fill-available",
      maxHeight: "110px",
      minHeight: "110px",
    },
    ".text-box": {
      height: "110px",
      background: "rgba(189, 189, 189, 0.2)",
      padding: "16px",
      border: "0px",
      width: "-webkit-fill-available",
      maxWidth: "-webkit-fill-available",
      minWidth: "-webkit-fill-available",
    },
    ".rating-people": {
      width: "24px",
      height: "24px",
      marginRight: "8px",
    },
    ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
      padding: "0px !important",
    },
    ".contact-down": {
      fontSize: "15px",
      paddingBottom: "9px",
    },
    ".event-div-mobile": {
      display: "none",
      paddingTop: "5px",
    },
    ".event-flex-div": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    "@media (min-width: 1px) and (max-width:768px)": {
      ".partner": {
        borderRight: "0px",
      },
      ".dinner-box": {
        display: "none",
      },
      ".event-div-mobile": {
        display: "block",
      },
      ".book-trad": {
        display: "none",
      },
      ".date-stack1": {
        placeContent: "center",
        display: "flex",
        placeItems: "center",
        margin: "0px",
        width: "100%",
        flexDirection: "row",
      },
      ".who-join": {
        backgroundColor: "#101418",
        padding: "15px",
      },
      ".guest-details": {
        padding: "8px 0px",
      },
      padding: "5px 0px",
    },
  });
  const style3 = {
    ".allow-access": {
      padding: "20px",
      background: "#DCD7CB",
    },
    ".access-box": {
      background: "#DCD7CB",
      display: "block",
    },
    ".allow-details": {
      fontFamily: "Barlow, sans-serif",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "22px",
      textAlign: "center",
      color: "#000000",
    },
    ".allow-permission-button": {
      background: "#080B0E",
      padding: "15px 10px",
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: "600",
      fontFamily: "Proxima Nova",
      textDecoration: "none",
      display: "block",
      color: " #FBFBFB !important",
      textAlign: "center",
      border: "0.5px solid #080B0E",
      flex: "1",
    },
    ".deny-permission-button": {
      padding: "15px 10px",
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: "600",
      fontFamily: "Proxima Nova",
      textDecoration: "none",
      display: "block",
      color: " #080B0E!important",
      textAlign: "center",
      border: "0.5px solid #080B0E",
      flex: "1",
    },
    ".deny-permission-button:hover": {
      color: "#C6A87D!important",
    },
    ".allow-permission-button:hover": {
      color: "#C6A87D!important",
    },
    ".access-btn": {
      display: "flex",
      flexDirection: "row",
      gap: "8px",
      marginTop: "16px",
      justifyContent: "center",
    },
    ".modal-header": {
      display: "flex",
      justifyContent: "end",
    },
    ".main-modal": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 406,
      boxShadow: 24,
      background: "#FBFBFB",
    },
    ".close": {
      padding: "0px",
      border: "0px",
      background: "transparent",
      cursor: "pointer",
    },
  };
  return (
    <React.Fragment>
      <MainBox>
        <Navbar heading="Ticketed" isIcon={true} />
        <div className="row supper-chef-details">
          <div className="book-trad">
            <ArrowBackIcon
              className="arrow-left"
              onClick={() => {
                navigate(`/ticketed-detail/${superClubDetailId}`);
              }}
            />
            <div className="addons-title">Personal Details</div>
          </div>
        </div>
        <Box className="event-div-mobile">
          <Box style={{ padding: "10px" }}>
            <Typography className="event-title">
              The Big Fat Parsi Blowout
            </Typography>
            <div className="event-flex-div">
              <Typography className="event-subtitle">
                Curated by{" "}
                <a href="#" className="event-link">
                  Chef Mako
                </a>
              </Typography>
              <Typography className="rating-star">
                <img className="rating-people" src={people} />
                <Typography className="rating-star">4 Seats</Typography>
              </Typography>
            </div>
          </Box>
        </Box>
        <div>
          <Formik
            initialValues={{
              name: superClubBookingDetails?.name,
              email: superClubBookingDetails?.email,
              contactNumber: superClubBookingDetails?.contactNumber,
              foodPreference: "Vegan",
              allergyMessage: superClubBookingDetails?.allergyMessage,
              AdditionalMessage: superClubBookingDetails?.AdditionalMessage
                ? superClubBookingDetails?.AdditionalMessage
                : "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {}}
          >
            {({ values, handleChange, handleSubmit, setFieldValue }) => (
              <Form onSubmit={handleSubmit}>
                <Grid container>
                  <Grid xl={7} lg={7} xs={7} md={7} sm={12} className="partner">
                    <Box className="row">
                      <Box className="form-field">
                        <label className="form-label" htmlFor="number">
                          Your Name
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          id="number"
                          name="name"
                          onChange={handleChange}
                          value={values.name}
                          autoComplete="off"
                          placeholder="Enter your full name"
                        />
                        <ErrorMessage name="name" />
                      </Box>
                      <Box className="form-field">
                        <label className="form-label" htmlFor="name">
                          Email Address
                        </label>
                        <Field
                          className="form-control"
                          type="email"
                          id="name"
                          name="email"
                          placeholder="kachwallasana@gmail.con"
                          autoComplete="off"
                          onChange={handleChange}
                          value={values.email}
                        />
                        <ErrorMessage name="email" />
                      </Box>
                      <Box className="form-field">
                        <label
                          className="form-label"
                          htmlFor="flatNumber"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Contact Number
                        </label>
                        <TextField
                          variant="standard"
                          className="form-control"
                          type="text"
                          id="flatNumber"
                          name="contactNumber"
                          placeholder="10 digit number"
                          onChange={handleChange}
                          value={values.contactNumber}
                          autoComplete="off"
                          InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                              <InputAdornment position="start">
                                +91
                                <KeyboardArrowDownIcon className="contact-down" />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <ErrorMessage name="contactNumber" />
                      </Box>
                      <Box className="your-food">
                        {!_.isEmpty(mealTypeData) && (
                          <>
                            <div className="your-box">
                              <label className="form-label" htmlFor="pincode">
                                Your Food Preference
                              </label>
                              <div className="view-text">View Menu</div>
                            </div>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="foodPreference"
                              value={values.foodPreference}
                              onChange={handleChange}
                              defaultValue={values.foodPreference}
                              className="form-control-drop"
                              sx={{
                                fontSize: "20px",
                                ".MuiOutlinedInput-notchedOutline": {
                                  border: 0,
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "none",
                                  },
                                ".MuiSelect-select": {
                                  padding: "0px 5px",
                                  fontFamily: "Proxima Nova Alt",
                                  fontStyle: "normal",
                                  fontWeight: 300,
                                  fontSize: "16px",
                                  lineHeight: "19px",
                                  color: "#222222",
                                  height: "20px !important",
                                  minHeight: "0px !important",
                                },
                              }}
                              MenuProps={{
                                PaperProps: {
                                  sx: {
                                    backgroundColor: "#DCD7CB !important",
                                    li: {
                                      fontFamily: "ProximaNovaA-Regular",
                                      borderBottom: "1px solid black",
                                      fontSize: "20px",
                                      fontWeight: "100",
                                      padding: "6px 0px",
                                      justifyContent: "start",
                                    },
                                    ul: {
                                      display: "flex",
                                      flexDirection: "column",
                                      padding: "16px",
                                    },
                                    "li:hover": {
                                      color: "#C6A87D!important",
                                      backgroundColor: "unset !important",
                                    },
                                    "li:last-child": {
                                      borderBottom: "none",
                                    },
                                    "&& .Mui-selected": {
                                      backgroundColor: "unset !important",
                                    },
                                    ".MuiSelect-select": {
                                      padding: "5px !important",
                                      fontSize: "17px",
                                    },
                                  },
                                },
                              }}
                            >
                              {mealTypeData?.map((item) => {
                                return (
                                  <MenuItem value={item.name}>
                                    {item.name}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </>
                        )}
                      </Box>
                      <Box className="form-field">
                        <div style={{ display: "flex" }}>
                          <label className="form-label" htmlFor="comment">
                            Are you allergic to something
                          </label>
                          <InfoIcon
                            sx={{ fontSize: "20px", paddingLeft: "5px" }}
                          />
                        </div>
                        <textarea
                          className="form-control text-box"
                          type="text-area"
                          id="comment"
                          name="allergyMessage"
                          onChange={handleChange}
                          value={values.allergyMessage}
                          placeholder="Specific ingredients eg nuts, milk, soy...  "
                        />
                      </Box>
                      <Box className="form-field">
                        <Box className="who-join">
                          <div className="who-heading">
                            Who will be joining you?{" "}
                            <span className="who-heading-option">
                              (optional)
                            </span>
                          </div>
                          <div className="who-sub-heading">
                            Chefs à Porter will contact your guests to collect
                            allergen details directly.
                          </div>
                          {showData && (
                            <div>
                              {todos.map((todo, index) => (
                                <div key={index} className="guest-details">
                                  <img className="user-logo" src={gUser} />
                                  <div className="user-name">{todo.name}</div>
                                  <span className="line">|</span>
                                  <div className="guest-mail">{todo.email}</div>
                                  <CloseIcon
                                    className="guest-close"
                                    onClick={() =>
                                      setTodos(
                                        todos.filter(
                                          (todo, todoIndex) =>
                                            todoIndex !== index
                                        )
                                      )
                                    }
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                          <div className="guest-number">
                            <div className="guest-remain">
                              {totalSeats - todos.length} Guests Remaining
                            </div>
                            <button
                              type="button"
                              name="button"
                              onClick={() => setOpen(true)}
                              className="add-guest"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              Add Guest Details
                            </button>
                          </div>
                        </Box>
                      </Box>
                      <Box className="form-field">
                        <div style={{ display: "flex" }}>
                          <label className="form-label" htmlFor="comment-box">
                            Additional Requests
                          </label>
                        </div>
                        <TextField
                          inputProps={{
                            maxlength: CHARACTER_LIMIT,
                          }}
                          sx={{
                            ".MuiOutlinedInput-notchedOutline": {
                              border: "none",
                              outline: "none",
                            },
                            "& .MuiInputBase-input": {
                              height: "149px",
                              background: "rgba(189, 189, 189, 0.2)",
                              border: "0px",
                              minHeight: "149px",
                              resize: "none",
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "17px",
                              fontWeight: "400",
                              color: " #7D7D7D",
                              padding: "16px 15px",
                            },
                            "& .css-15kq27i": {
                              padding: "0px",
                            },
                          }}
                          id="validationCustom04"
                          name="AdditionalMessage"
                          autoComplete="off"
                          // className="form-control"
                          value={values.AdditionalMessage}
                          placeholder="Specific ingredients eg nuts, milk, soy...  "
                          helperText={`${values.AdditionalMessage.length}/${CHARACTER_LIMIT} Characters`}
                          onChange={handleChange("AdditionalMessage")}
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          multiline
                          rows={1}
                        />
                      </Box>
                    </Box>
                    <SupperClubTreatyComponent
                      background={true}
                      subTitle="Save 15% on all experiences by becoming a patron"
                    />
                  </Grid>
                  <Grid
                    xl={5}
                    lg={5}
                    xs={5}
                    md={5}
                    sm={12}
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
                            <img className="rating-people" src={people} />
                            <Typography className="rating-star">
                              4 Seats
                            </Typography>
                          </Typography>
                        </Box>
                      </Box>
                      <Box className="experience-breakup">
                        <Box className="ex-details">
                          <Typography className="ex-heading">
                            Payment Summary
                          </Typography>
                          <ExpandMoreIcon className="ex-icon" />
                        </Box>
                        {!_.isEmpty(personalDetailsPaymentCalculation) && (
                          <Box className="table table-borderless">
                            <Box className="table-box">
                              <Typography className="table-details">
                                Ticket Price
                              </Typography>
                              <Typography className="table-details">
                                {new Intl.NumberFormat("en-IN", {
                                  style: "currency",
                                  currency: "INR",
                                }).format(
                                  personalDetailsPaymentCalculation?.ticket_price
                                )}
                              </Typography>
                            </Box>
                            <Box className="table-box border-tb ">
                              <Typography className="table-details table-details-pt">
                                Sub Total
                              </Typography>
                              <Typography className="table-details table-details-pt">
                                {new Intl.NumberFormat("en-IN", {
                                  style: "currency",
                                  currency: "INR",
                                }).format(
                                  personalDetailsPaymentCalculation?.sub_total
                                )}
                              </Typography>
                            </Box>
                            <Box className="table-box">
                              <Typography className="table-details table-details-pt">
                                GST @5%
                              </Typography>
                              <Typography className="table-details table-details-pt">
                                {new Intl.NumberFormat("en-IN", {
                                  style: "currency",
                                  currency: "INR",
                                }).format(
                                  personalDetailsPaymentCalculation?.GST
                                )}
                              </Typography>
                            </Box>
                            <Box className="table-box">
                              <Typography className="table-details">
                                Service Charge @10%
                              </Typography>
                              <Typography className="table-details">
                                {new Intl.NumberFormat("en-IN", {
                                  style: "currency",
                                  currency: "INR",
                                }).format(
                                  personalDetailsPaymentCalculation?.service_charges
                                )}
                              </Typography>
                            </Box>
                            <Box className="table-box border">
                              <Typography className="grand-total">
                                Grand Total
                              </Typography>
                              <Typography className="grand-total">
                                {new Intl.NumberFormat("en-IN", {
                                  style: "currency",
                                  currency: "INR",
                                }).format(
                                  personalDetailsPaymentCalculation?.total
                                )}
                              </Typography>
                            </Box>
                          </Box>
                        )}
                      </Box>
                      <Box className="row viewbreak">
                        <Box>
                          <button
                            type="submit"
                            className="submit-req"
                            onClick={() => {
                              handleOpenOtp(values?.contactNumber, values);
                            }}
                          >
                            Next
                          </button>
                        </Box>
                        <Typography className="contact-text">
                          Our team will contact you regarding your protein and
                          allergen Information after booking is confirmed
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </div>
        {open && (
          <TodoForm
          refModal={refModal}
            setTodos={setTodos}
            todos={todos}
            setOpen={setOpen}
            open={open}
            setShowData={setShowData}
            setContactPopUp={setContactPopUp}
            totalSeats={totalSeats}
          />
        )}

        <Modal
          keepMounted
          open={contactPopUp}
          onClose={ContactClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style3}>
            <Box className="main-modal">
              <Box className="allow-access">
                <Box className="modal-header">
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className="close"
                    onClick={ContactClose}
                  >
                    <CloseIcon />
                  </button>
                </Box>
                <Box className="access-box">
                  <Typography className="allow-details">
                    Allow <strong>Chefs-à-Porter</strong> to access your
                    contacts?
                  </Typography>
                  <Box className="access-btn">
                    <Link href="/gift-cards" className="deny-permission-button">
                      Deny
                    </Link>
                    <Link
                      href="/mobile-contact"
                      className="allow-permission-button"
                    >
                      Allow
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>

        {openOtp && (
          <SupperClubOtpVerificationModal
            openOtp={openOtp}
            handleCloseOtp={handleCloseOtp}
            contactNumber={contactNumber}
          />
        )}
      </MainBox>
    </React.Fragment>
  );
};
export default memo(PersonalDetails1);
