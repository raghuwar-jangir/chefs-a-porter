import React, { useEffect, useState, useContext } from "react";
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
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
import GstFormData from "../../components/GstFormData";
import Navbar from "../../components/NavbarComponent";
import add1 from "../../assets/images/add1.png";
import add2 from "../../assets/images/add2.png";
import add3 from "../../assets/images/add3.png";
import add4 from "../../assets/images/add4.png";
import add5 from "../../assets/images/add5.png";
import add6 from "../../assets/images/add6.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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
import CloseIcon from "@mui/icons-material/Close";
import "../../assets/styles/fontStyle.css";
import output from "../../assets/images/output.png";
import download from "../../assets/images/download.png";
import useRazorpay from "react-razorpay";
import Cookies from "js-cookie";
import * as _ from "lodash";
import { Link, navigate } from "gatsby";
import UsersContext from "../../context/UsersContext";
import moment from "moment/moment";
import axios from "axios";

const BookingSummary = (props) => {
  const { summaryBookingId } = props;
  const supperClubBookingIdCookieValue = Cookies?.get("supperClubBookingId");
  const supperClubBookingId = supperClubBookingIdCookieValue?.replaceAll(
    '"',
    ""
  );

  const printDiv = () => {
    window.print();
  };

  const {
    bsPaymentData,
    voucher,
    setVoucher,
    setIsCoupon,
    setIsConfirm,
    adPaymentData,
    bookingSuccessOpen,
    setBookingSuccessOpen,
    setCustomerMobileNumber,
    customerMobileNumber,
    isGstSubmitData,
    setIsGstSubmitData,
    gstData,
    setGstData
  } = useContext(UsersContext);
  const validationSchema = Yup.object().shape({
    number: Yup.string().required("Number is required"),
    name: Yup.string().required("Name is required"),
    flatNumber: Yup.string().required("Flat number is required"),
    address: Yup.string().required("Address is required"),
    pincode: Yup.string().required("Pincode is required"),
    number1: Yup.string().required("Number is required"),
  });
  const cookieGstData = Cookies.get("gstInfo");
  const cookieValue = Cookies.get("bSPaymentInfo");
  const bookingCookieValue = Cookies.get("bookingConfirm");
  const [paymentCalulationData, setPaymentCalculationData] = useState("");
  const oderIDCookieValue = Cookies?.get("razorpayOrderId");
  const razorpayOrderId = oderIDCookieValue?.replaceAll('"', "");
  const [razorpayData, setRazorpayData] = useState();
  const [privateBookingOrderNo, setPrivateBookingOrderNo] = useState();

  useEffect(() => {
    if (cookieValue) {
      setPaymentCalculationData(JSON.parse(cookieValue));
    }
    if (bookingCookieValue) {
      setRazorpayData(JSON.parse(bookingCookieValue));
    }
    if(cookieGstData){
      setGstData(JSON.parse(cookieGstData));
    }
    setPrivateBookingOrderNo(
      JSON.parse(localStorage.getItem("privateBookingOrderNumber"))
    );
  }, [cookieValue, bookingCookieValue, cookieGstData, gstData]);




  const initialValues = {
    gstnumber: "",
    business_name: "",
    building: "",
    street: "",
    pincode: "",
  };
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('values', values)
    //setSubmitting(false);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Razorpay = useRazorpay();

  // const [bookingSuccessOpen, setBookingSuccessOpen] = useState(false);
  const handleBookingSuccessOpen = () => setBookingSuccessOpen(true);
  const handleBookingSuccessClose = () => {
    setBookingSuccessOpen(false)
    navigate('/')
  };
  const handlePayment = () => {
    setIsConfirm(true);
  };
  const handleGstSubmit = () => {
    setIsGstSubmitData(true);
  };

  const [customerInfo, setCustomerInfo] = useState("");
  const customerInfoCookieValue = Cookies?.get("customerData");
  const eventDataCookieValue = Cookies.get("eventData");
  const [eventData, setEventData] = useState();
  const PriveePaymentCoockie = Cookies.get("priveePaymentInfo");
  const [priveePaymentData, setPriveePaymentData] = useState();
  const [priveePaymentNo, setpriveePaymentNo] = useState();
  {
    !_.isEmpty(customerInfoCookieValue) &&
      useEffect(() => {
        if (customerInfoCookieValue) {
          setCustomerInfo(JSON.parse(customerInfoCookieValue));
        }
        if (eventDataCookieValue) {
          setEventData(JSON.parse(eventDataCookieValue));
        }
        setPriveePaymentData(
          JSON.parse(localStorage.getItem("priveePaymentInfo"))
        );
        setpriveePaymentNo(
          JSON.parse(localStorage.getItem("privatePaymentNumber"))
        );
      }, [customerInfoCookieValue, eventDataCookieValue]);
  }

  console.log('customerInfo',customerInfo)
  if (typeof setCustomerMobileNumber === "function") { 
    setCustomerMobileNumber(customerInfo?.contactNumber)
  }
  


  const BoxWrapper = styled(Box)(() => ({
    background: "#080B0E",
    ".popup-form": {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#101418",
      padding: "40px 20px",
      zIndex: "100",
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      // width: '100%',
      pointerEvents: "auto",
      backgroundClip: "padding-box",
      outline: "0",
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
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: "39px",
      color: "#FBFBFB",
      marginBottom: "0px",
      marginLeft: "16px",
    },
    ".arrow-left": {
      color: "#FBFBFB",
      cursor: "pointer",
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
    ".dinner-box": {
      padding: "0px 10px 0px 20px",
      position: "relative",
    },
    ".per-dinner": {
      background: "#101418",
      padding: "40px 20px",
      boxShadow: "0px 20px 24px rgb(0 0 0 / 6%)",
      position: "sticky",
      top: "50px",
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
      fontFamily: "Proxima Nova Alt !important",
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
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#FBFBFB",
      marginBottom: "0px",
    },
    ".ex-icon": {
      position: "absolute",
      right: "0px",
      top: "0px",
      fontSize: "30px",
      color: "#FBFBFB",
      " -webkit-text-stroke": "1px",
    },
    ".submit-req": {
      background: "#C6A87D",
      color: "#080B0E",
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
    ".voucher": {
      background: "#C6A87D",
      color: "#080B0E",
      fontFamily: "ProximaNovaA-Regular",
      fontSize: "15px",
      lineHeight: "20px",
      fontWeight: 600,
      border: "0px",
      width: "30%",
      cursor: "pointer",
      padding: "10px",
    },
    ".contact-text": {
      fontFamily: "Proxima Nova",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "14px",
      lineHeight: "17px",
      textAlign: "center",
      color: "rgba(251, 251, 251, 0.6)",
      marginTop: "20px",
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
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      // fontWeight: '300',
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      padding: "0px 0px 16px",
    },
    ".table-details-pt": {
      paddingTop: "16px",
    },
    ".grand-total": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "24px",
      color: "#FBFBFB",
      padding: "16px 0px",
    },
    ".border": {
      borderTop: "1px solid rgba(255, 255, 255, 0.6)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.6)",
      // paddingTop: '16px'
    },
    // ".tax1": {
    //     paddingTop: "20px",
    // },
    ".header-club": {
      display: "none",
      padding: "15px",
      backgroundColor: "#080B0E",
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
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "24px",
      color: "#FBFBFB",
      marginLeft: "10px",
      marginBottom: "0.5rem",
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
      height: "20px",
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
    },
    ".drop-down": {
      position: "absolute",
      right: "0px",
      top: "0px",
      fontSize: "30px",
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
      marginBottom: "30px",
      minHeight: "1.5rem",
      paddingTop: "20px",
    },
    ".form-check-input": {
      accentColor: "#C6A87D",
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
    ".form-gstcheck-label": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "14px",
      lineHeight: "16px",
      color: "#FBFBFB",
      marginBottom: "2px",
      marginTop: "2px",
      paddingTop: "2px",
      paddingBottom: "2px",
    },
    ".forward-arrow": {
      position: "absolute",
      right: "0px",
      fontSize: "30px",
      bottom: "30px",
      color: "#fbfbfb",
      webkitTextStroke: "1px",
      top: "0px",
      paddingTop: "20px",
    },
    ".email-text": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      marginBottom: "0px",
      paddingTop: "20px",
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
      paddingTop: "16px",
    },
    ".form-group1": {
      display: "flex",
      flexWrap: "wrap",
      padding: "16px 0px",
    },
    ".country-code": {
      borderBottom: "0.25px solid #FBFBFB",
      display: "inline-flex",
      placeItems: "center",
      color: "#FBFBFB",
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "18px",
      lineHeight: "19px",
    },
    ".drop-down-2": {
      fontSize: "19px",
      marginLeft: "0.5px",
      marginRight: "2.5px",
      paddingBottom: "7px",
    },
    ".chef-profile": {
      marginTop: "5px",
      marginBottom: "32px",
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
    ".form-head-box": {
      display: "flex",
      padding: "0px",
      marginBottom: "30px",
      borderBottom: "none",
      position: "relative",
      justifyContent: "flex-start",
    },
    ".form-close-btn": {
      fontSize: "20px",
      backgroundColor: "transparent",
      color: "#FBFBFB",
      border: "none",
      marginLeft: "78px",
    },
    ".form-details": {
      padding: "0",
      position: "relative",
      flex: "1 1 auto",
    },
    ".form-control": {
      paddingLeft: "10px",
      flex: "1",
      outline: "none",
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
      width: "100%",
      padding: "0.375rem 0.75rem 0.375rem 0px",
      transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    },
    ".hr": {
      boxSizing: "content-box",
      height: "0",
      overflow: "visible",
      margin: "1rem 0",
      border: "0",
      borderTop: "1px solid",
      color: "rgba(255, 255, 255, 0.6)",
      opacity: "1",
    },
    ".input-check": {
      paddingRight: "5px !important",
      padding: "0px",
      marginBottom: "0.125rem",
      color: "#C6A87D !important",
    },

    "@media (min-width: 1px) and (max-width:425px)": {
      ".supper-gallery .container-fluid": {
        padding: "0px",
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
        fontWeight: 700,
        fontFamily: "ProximaNovaA-Regular",
      },
      ".rating-star": {
        fontSize: "14px",
        lineHeight: "18px",
      },
      ".submit-req": {
        fontSize: "16px",
        lineHeight: "18px",
      },
      ".book-trad": {
        display: "none",
      },
      ".dinner-box": {
        // display: "none",
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
  
  const styleOtp = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    boxShadow: 24,
    margin: 'auto',
        maxHeight: 'calc(100% - 2.25em)',
    ".modal-content": {
      backgroundColor: "#101418!important",
      boxShadow: "0px 8px 12px rgb(0 0 0 / 16%)",
      padding: "40px 20px",
      display: "flex",
      flexDirection: "column",
      pointerEvents: "auto",
      backgroundClip: "paddingBox",
      outline: "0",
    },
    ".pointer": {
      cursor: "pointer",
    },
    ".close": {
      border: "none !important",
      background: "transparent",
      borderRadius: "0px",
      color: "#FBFBFB",
      cursor: "pointer",
    },
    ".modal-header": {
      padding: "0px",
      // marginBottom: '30px',
      borderBottom: "none",
      display: "flex",
      position: "relative",
      justifyContent: "flex-end",
    },
    ".booking-details": {
      textAlign: "center",
    },
    ".hr": {
      color: "rgba(255, 255, 255, 0.6)",
      opacity: "1",
      borderTop: "1px solid",
    },
    ".booking-details h3": {
      fontFamily: "Bon Vivant",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "20px",
      lineHeight: "25px",
      color: "#FBFBFB",
      marginBottom: "16px",
      marginTop: "0px",
    },
    ".booking-details span": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "24px",
      color: "#FBFBFB",
      marginBottom: "16px",
      display: "block",
    },
    ".booking-details p": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "20px",
      color: "#FBFBFB",
      textAlign: "center",
      marginBottom: "16px",
      marginTop: "0px",
    },
    ".booking-details a": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#C6A87D",
      textAlign: "center",
      display: "block",
      marginBottom: "16px",
    },
    ".booking-details a img": {
      width: "18px",
      height: "18px",
      objectFit: "contain",
      marginRight: "8px",
      verticalAlign: "text-top",
    },
    ".booking-details button": {
      border: "0.5px solid #C6A87D",
      padding: "16px",
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "17px",
      color: "#FBFBFB",
      background: "transparent",
      cursor: "pointer",
    },
    ".booking-details button img": {
      width: "16px",
      height: "16px",
      marginRight: "8px",
      filter: "brightness(100)",
      verticalAlign: "text-top",
    },
    ".output": {
      width: "56px",
      height: "56px",
      objectFit: "contain",
      marginBottom: "16px",
    },
    ".bookingBox": {
      marginTop: "40px",
    },
    ".booking-summary": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "24px",
      color: "#FBFBFB",
      marginBottom: "16px",
      marginTop: "0px",
    },
    ".chef-edit": {
      display: "flex",
      placeItems: "center",
      position: "relative",
      marginBottom: "20px",
    },
    ".chef-edit img": {
      width: "48px",
      height: "48px",
      objectFit: "cover",
      borderRadius: "43px",
    },
    ".chef-edit h5": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "24px",
      color: "#FBFBFB",
      marginLeft: "10px",
    },
    ".chef-profile div": {
      marginBottom: "16px",
      display: "flex",
    },
    ".grid-box": {
      borderLeft: "10px solid #101418",
      background: "#080B0E",
      padding: "16px",
    },
    ".chef-profile img": {
      height: "16px",
      width: "16px",
      objectFit: "contain",
      marginRight: "10px",
    },
    ".chef-profile span": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
    },
    ".experience-breakup": {
      border: "0.5px solid #DCD7CB",
      padding: "16px 16px 0px",
    },
    ".experience-breakup:last-child": {
      marginTop: "16px",
    },
    ".ex-details": {
      position: "relative",
    },
    ".ex-details h5": {
      fontFamily: "Bon Vivant",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "20px",
      lineHeight: "25px",
      color: "#FBFBFB",
      marginBottom: "10px",
      marginTop: "0px",
    },
    ".i": {
      position: "absolute",
      right: "0px",
      top: "0px",
      color: "#FBFBFB",
      "-webkit-text-stroke": "1px",
    },
    ".table-box span": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      padding: "0px 0px 16px",
    },
    ".price": {
      fontFamily: "ProximaNovaA-Regular !important",
      fontStyle: "normal !important",
      fontWeight: "600 !important",
      fontSize: "14px !important",
      lineHeight: "17px !important",
      color: "#FBFBFB",
      textAlign: "right !important",
      padding: "0px 0px 16px",
    },
    ".table": {
      marginTop: "20px",
      marginBottom: "0px",
    },
    ".table:last-child": {
      marginTop: "0px",
      marginBottom: "0px",
    },
    ".table-box": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    ".border": {
      borderTop: "1px solid rgba(255, 255, 255, 0.6)",
    },
    ".border-tb": {
      borderTop: "1px solid rgba(255, 255, 255, 0.6)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.6)",
    },
    ".pt-16": {
      paddingTop: "16px",
    },
    ".grand-total": {
      padding: "10px 0px !important",
    },
    ".tax": {
      textAlign: "left !important",
      fontFamily: "Proxima Nova Alt !important",
      fontStyle: "normal !important ",
      fontWeight: "300 !important",
      fontSize: "14px !important",
      lineHeight: "17px !important",
      color: "#FBFBFB",
    },

    "@media (min-width: 426px) and (max-width:768px)": {
      width: "500px",
    },
    "@media (min-width: 1px) and (max-width:400px)": {
      width: "320px !important",
    },
    "@media (min-width: 400px) and (max-width:425px)": {
      width: "400px !important",
    },
  };
  console.log('bsPaymentData',bsPaymentData)
  return (
    // here
    <React.Fragment>
      <BoxWrapper>
        <Navbar
          to={"/booking-summary"}
          isIcon={true}
          isColor={true}
          heading="Private"
        />
        <Box className="supper-gallery cust-details">
          <Box className="container-fluid">
            <Box className="row supper-chef-details">
              <Box className="book-trad">
                <ArrowBackIcon
                  className="arrow-left"
                  onClick={() => navigate(`/addons/${summaryBookingId}`)}
                />
                <Typography className="addons-title">
                  Booking Summary
                </Typography>
              </Box>

              {bsPaymentData ? (
                <Formik
                  initialValues={{
                    number: customerInfo?.contactNumber,
                    email: eventData?.email,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ values, handleChange, handleSubmit, setFieldValue }) => (
                    <Form>
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
                                <img
                                  className="chef-edit-img"
                                  src={
                                    bsPaymentData?.common_menu?.user?.picture
                                  }
                                />
                                <Typography className="chef-edit-title">
                                  {bsPaymentData?.common_menu?.user?.name}
                                </Typography>
                                {/* <CreateIcon className="pencil-icon" /> */}
                              </Box>
                              <Box class="chef-profile">
                                <Box className="chef-profile-detail">
                                  <img
                                    className="chef-profile-icon"
                                    src={dateGold}
                                  />
                                  <Typography className="chef-profile-date">
                                    {/*April 9 | 7:30 PM - 10 PM*/}
                                    {moment(eventData?.experienceDate).format(
                                      "MMMM D"
                                    )}{" "}
                                    |{" "}
                                    {moment(
                                      eventData?.startTime,
                                      "HH:mm"
                                    ).format("h:mm A")}
                                  </Typography>
                                </Box>
                                <Box className="chef-profile-detail">
                                  <img
                                    className="chef-profile-icon"
                                    src={location}
                                  />
                                  <Typography className="chef-profile-date">
                                    {/*Silver bar, Downtown*/}
                                    {bsPaymentData?.city}
                                  </Typography>
                                </Box>
                                <Box className="chef-profile-detail">
                                  <img
                                    className="chef-profile-icon"
                                    src={people}
                                  />
                                  <Typography className="chef-profile-date">
                                    {/*6 Diners*/}
                                    {eventData?.numberOfDinner} Diners
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
                                  {eventData?.important_info?.map((info,idx) => (
                                    <li key={idx} className="exp-li">{info}</li>
                                  ))}
                                </ul>
                                <hr className="hr" />
                              </Box>
                            </Box>
                            <Box className="contact">
                              <Box className="form-check">
                                {/* <Checkbox
                                  className="input-check"
                                  defaultChecked
                                /> */}
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Enter your <strong style={{fontWeight: 700, cursor: "pointer"}} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleOpen}>GST information</strong> (Optional)
                                </label>
                                <KeyboardArrowRightIcon
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  onClick={handleOpen}
                                  className="forward-arrow"
                                />  
                              </Box>
                              {gstData && (
                                <>
                                {gstData.number && <p className="form-gstcheck-label">{gstData.number}</p>}
                                {gstData.business_name && <p className="form-gstcheck-label">{gstData.business_name}</p>}
                                {gstData.building && <p className="form-gstcheck-label">{gstData.building}</p>}
                                {gstData.street && <p className="form-gstcheck-label">{gstData.street}</p>}
                                {gstData.pincode && <p className="form-gstcheck-label">{gstData.pincode}</p>}
                                </>
                              )                                                          
                              }
                              <hr className="hr" />
                               
                               </Box>
                            <Box className="booking-box">
                              <Typography className="email-text">
                                An Email Confirmation will be sent to
                              </Typography>
                            </Box>
                            <Box class="booking-box">
                              <Box class="contact">
                                <label
                                  className="contact-number"
                                  for="contact-number"
                                >
                                  Mobile
                                </label>
                                <Box className="form-group">
                                  <span className="country-code">
                                    +91{" "}
                                    <KeyboardArrowDownIcon className="drop-down-2" />
                                  </span>
                                  <Field
                                    placeholder="10 digit number"
                                    className="form-control"
                                    type="text"
                                    id="number"
                                    name="number1"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    value={values.number}
                                    InputProps={{
                                      disableUnderline: true,
                                    }}
                                  />
                                  <ErrorMessage
                                    className="error"
                                    name="number1"
                                  />
                                </Box>
                                {/* <Box class="invalid-feedback">Incorrect Mobile Number</Box> */}
                              </Box>
                            </Box>
                            <Box className="booking-box">
                              <Box className="contact">
                                <label className="contact-number" for="">
                                  Email{" "}
                                </label>
                                <Box className="form-group">
                                  <Field
                                    type="email"
                                    name="email"
                                    id=""
                                    placeholder="Kachwallasana@gmail.com"
                                    class="form-control"
                                    autoComplete="off"
                                  />
                                  <ErrorMessage
                                    className="error"
                                    name="email1"
                                  />
                                </Box>
                              </Box>
                            </Box>
                            <Box className="booking-box">
                              <Box className="chef-profile">
                                <Box className="chef-profile-box">
                                  <img
                                    className="chef-profile-logo"
                                    src={done}
                                  />
                                  <Typography className="chef-profile-dis">
                                    An email confirmation has been sent to{" "}
                                    <br />
                                    {eventData?.email} <br />
                                    and SMS sent to +91{" "}
                                    {customerInfo?.contactNumber}
                                  </Typography>
                                </Box>
                                <Box className="chef-profile-box">
                                  <img
                                    className="chef-profile-logo"
                                    src={support}
                                  />
                                  <Typography className="chef-profile-dis">
                                  Our Team will get in touch with you to finalise the Menu,<br /> and set-up of your Chef's Table once we receive your booking.
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
                                    <Checkbox
                                      className="input-check"
                                      defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      for="flexCheckDefault"
                                    >
                                      I agree to cancellation and refund policy
                                    </label>
                                  </Box>
                                </Box>
                                <Link to='/cancellation-policy' target="_blank">
                                  <Typography className="policy-link">
                                    View Cancellation Policy
                                  </Typography>
                                </Link>
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
                                <img
                                  src={sGallery}
                                  alt=""
                                  className="per-dinner-img"
                                />
                                <Box sx={{ marginLeft: "12px" }}>
                                  <Typography className="event-title">
                                    {/*The Big Fat Parsi Blowout*/}
                                    {bsPaymentData?.common_menu?.title}
                                  </Typography>
                                  <Typography className="event-subtitle">
                                    Curated by{" "}
                                    <a href="#" className="event-link">
                                      {bsPaymentData?.common_menu?.user?.name}
                                    </a>
                                  </Typography>
                                  <Typography className="rating-star">
                                    <StarIcon
                                      sx={{
                                        color: "#C6A87D",
                                        height: "24px",
                                        width: "24px",
                                      }}
                                    />{" "}
                                    <Typography className="rating-star">
                                      4.7
                                    </Typography>
                                  </Typography>
                                </Box>
                              </Box>
                              <Box className="experience-breakup">
                                <Box className="ex-details">
                                  <Typography className="ex-heading">
                                    Breakup
                                  </Typography>
                                  {/*<Typography className="ex-detail">*/}
                                  {/*    This is an estimate, final price will be{" "}*/}
                                  {/*    <br/>*/}
                                  {/*    communicated on call*/}
                                  {/*</Typography>*/}
                                  <ExpandMoreIcon className="ex-icon" />
                                </Box>
                                {!_.isEmpty(bsPaymentData) && (
                                  <Box className="table table-borderless">
                                    <Box className="table-box">
                                      <Typography className="table-details">
                                        Experience*
                                      </Typography>
                                      <Typography className="table-details">
                                        {new Intl.NumberFormat("en-IN", {
                                          style: "currency",
                                          currency: "INR",
                                        }).format(
                                          bsPaymentData?.payment?.experience
                                        )}
                                      </Typography>
                                    </Box>
                                    <Box className="table-box">
                                      <Typography className="table-details">
                                        Service Staff**
                                      </Typography>
                                      <Typography className="table-details">
                                        {new Intl.NumberFormat("en-IN", {
                                          style: "currency",
                                          currency: "INR",
                                        }).format(
                                          bsPaymentData?.payment?.service_staff
                                        )}
                                      </Typography>
                                    </Box>
                                    {bsPaymentData?.payment?.discount && bsPaymentData?.payment?.discount!=0 && (
                                      <Box className="table-box">
                                        <Typography className="table-details">
                                          Discount
                                        </Typography>
                                        <Typography className="table-details">
                                          {new Intl.NumberFormat("en-IN", {
                                            style: "currency",
                                            currency: "INR",
                                          }).format(
                                            bsPaymentData?.payment?.discount
                                          )}
                                        </Typography>
                                      </Box>
                                    )}
                                    
                                    <Box className="table-box border table-details-pt">
                                      <Typography className="table-details">
                                        Sub total
                                      </Typography>
                                      <Typography className="table-details">
                                        {new Intl.NumberFormat("en-IN", {
                                          style: "currency",
                                          currency: "INR",
                                        }).format(
                                          bsPaymentData?.payment?.sub_total
                                        )}
                                      </Typography>
                                    </Box>
                                    <Box className="table-box table-details-pt">
                                      <Typography className="table-details">
                                        GST @5%
                                      </Typography>
                                      <Typography className="table-details">
                                        {new Intl.NumberFormat("en-IN", {
                                          style: "currency",
                                          currency: "INR",
                                        }).format(bsPaymentData?.payment?.GST)}
                                      </Typography>
                                    </Box>
                                    <Box className="table-box">
                                      <Typography className="table-details">
                                        Service Charges @10%
                                      </Typography>
                                      <Typography className="table-details">
                                        {new Intl.NumberFormat("en-IN", {
                                          style: "currency",
                                          currency: "INR",
                                        }).format(
                                          bsPaymentData?.payment
                                            ?.service_charges
                                        )}
                                      </Typography>
                                    </Box>
                                    {bsPaymentData?.payment?.discount && bsPaymentData?.payment?.discount !==0 &&
                                    bsPaymentData?.payment?.voucher ? (
                                      <>
                                        <Box className="table-box">
                                          <Typography className="table-details">
                                            Discount
                                          </Typography>
                                          <Typography className="table-details">
                                            {new Intl.NumberFormat("en-IN", {
                                              style: "currency",
                                              currency: "INR",
                                            }).format(
                                              bsPaymentData?.payment?.discount
                                            )}
                                          </Typography>
                                        </Box>
                                        <Box className="table-box">
                                          <Typography className="table-details">
                                            Voucher
                                          </Typography>
                                          <Typography className="table-details">
                                            {new Intl.NumberFormat("en-IN", {
                                              style: "currency",
                                              currency: "INR",
                                            }).format(
                                              bsPaymentData?.payment?.voucher
                                            )}
                                          </Typography>
                                        </Box>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                    <Box className="table-box border">
                                      <Typography className="grand-total">
                                        Grand Total
                                      </Typography>
                                      <Typography className="grand-total">
                                        {new Intl.NumberFormat("en-IN", {
                                          style: "currency",
                                          currency: "INR",
                                        }).format(
                                          bsPaymentData?.payment?.total
                                        )}
                                      </Typography>
                                    </Box>
                                    <Box className="form-group1">
                                      <input
                                        type="text"
                                        name="voucher"
                                        value={voucher}
                                        onChange={(event) => {
                                          const capitalizedValue =
                                            event.target.value.toUpperCase();
                                          setVoucher(capitalizedValue);
                                        }}
                                        placeholder="Enter Your Voucher Coupon"
                                        className="form-control"
                                        autoComplete="off"
                                        autoFocus
                                      />
                                      <button
                                        className="voucher"
                                        type={"submit"}
                                        onClick={() => {
                                          setIsCoupon(true);
                                        }}
                                      >
                                        Apply Voucher
                                      </button>
                                    </Box>
                                    <Box className="tax tax1">
                                      <Typography className="table-details">
                                        *Includes the menu, tableware, table
                                        set-up and white-glove service.
                                      </Typography>
                                      <Typography className="table-details">
                                        **Service staff is calculated based on
                                        number of diners.
                                      </Typography>
                                    </Box>
                                  </Box>
                                )}
                              </Box>
                              <Box className="row viewbreak">
                                {!_.isEmpty(bsPaymentData) && (
                                  <Box className="col-lg-12">
                                    <button
                                      type="submit"
                                      className="submit-req"
                                      onClick={handlePayment}
                                    >
                                      Proceed to pay{" "}
                                      {new Intl.NumberFormat("en-IN", {
                                        style: "currency",
                                        currency: "INR",
                                      }).format(bsPaymentData?.payment?.total)}
                                      {/*Proceed to pay{" "} ₹25,000*/}
                                    </button>
                                  </Box>
                                )}
                                {/* <Typography className="contact-text">
                                  Estimate figure, further changes may amend the
                                  total
                                </Typography> */}
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Form>
                  )}
                </Formik>
              ) : (
                <Formik
                  initialValues={{
                    number: customerInfo?.contactNumber,
                    email: eventData?.email,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ values, handleChange, handleSubmit, setFieldValue }) => (
                    <Form>
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
                                <img
                                  className="chef-edit-img"
                                  src={
                                    priveePaymentData?.common_menu?.cover_picture
                                  }
                                />
                                <Typography className="chef-edit-title">
                                  {priveePaymentData?.common_menu?.user?.name}
                                </Typography>
                                {/* <CreateIcon className="pencil-icon" /> */}
                              </Box>
                              <Box class="chef-profile">
                                <Box className="chef-profile-detail">
                                  <img
                                    className="chef-profile-icon"
                                    src={dateGold}
                                  />
                                  <Typography className="chef-profile-date">
                                    {/*April 9 | 7:30 PM - 10 PM*/}
                                    {moment(eventData?.experienceDate).format(
                                      "MMMM D"
                                    )}{" "}
                                    |{" "}
                                    {moment(
                                      eventData?.startTime,
                                      "HH:mm"
                                    ).format("h:mm A")}
                                  </Typography>
                                </Box>
                                <Box className="chef-profile-detail">
                                  <img
                                    className="chef-profile-icon"
                                    src={location}
                                  />
                                  <Typography className="chef-profile-date">
                                    {/*Silver bar, Downtown*/}
                                    {priveePaymentData?.city}
                                  </Typography>
                                </Box>
                                <Box className="chef-profile-detail">
                                  <img
                                    className="chef-profile-icon"
                                    src={people}
                                  />
                                  <Typography className="chef-profile-date">
                                    {/*6 Diners*/}
                                    {eventData?.numberOfDinner} Diners
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
                                  {eventData?.important_info?.map((info,idx) => (
                                    <li key={idx} className="exp-li">{info}</li>
                                  ))}
                                </ul>
                                <hr className="hr" />
                              </Box>
                            </Box>
                            <Box className="contact">
                              <Box className="form-check">
                                {/* <Checkbox
                                  className="input-check"
                                  defaultChecked
                                /> */}
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Enter your <strong style={{fontWeight: 700, cursor: "pointer"}} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleOpen}>GST information</strong> (Optional)
                                </label>
                                <KeyboardArrowRightIcon
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  onClick={handleOpen}
                                  className="forward-arrow"
                                />
                              </Box>
                              
                              {gstData && (
                                <>
                                {gstData.number && <p className="form-gstcheck-label">{gstData.number}</p>}
                                {gstData.business_name && <p className="form-gstcheck-label">{gstData.business_name}</p>}
                                {gstData.building && <p className="form-gstcheck-label">{gstData.building}</p>}
                                {gstData.street && <p className="form-gstcheck-label">{gstData.street}</p>}
                                {gstData.pincode && <p className="form-gstcheck-label">{gstData.pincode}</p>}
                                </>
                              )                                                          
                              }
                              <hr className="hr" />
                              
                            </Box>
                            <Box className="booking-box">
                              <Typography className="email-text">
                                An Email Confirmation will be sent to
                              </Typography>
                            </Box>
                            <Box class="booking-box">
                              <Box class="contact">
                                <label
                                  className="contact-number"
                                  for="contact-number"
                                >
                                  Mobile
                                </label>
                                <Box className="form-group">
                                  <span className="country-code">
                                    +91{" "}
                                    <KeyboardArrowDownIcon className="drop-down-2" />
                                  </span>
                                  <Field
                                    placeholder="10 digit number"
                                    className="form-control"
                                    type="text"
                                    id="number"
                                    name="number1"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    value={values.number}
                                    InputProps={{
                                      disableUnderline: true,
                                    }}
                                  />
                                  <ErrorMessage
                                    className="error"
                                    name="number1"
                                  />
                                </Box>
                                {/* <Box class="invalid-feedback">Incorrect Mobile Number</Box> */}
                              </Box>
                            </Box>
                            <Box className="booking-box">
                              <Box className="contact">
                                <label className="contact-number" for="">
                                  Email{" "}
                                </label>
                                <Box className="form-group">
                                  <Field
                                    type="email"
                                    name="email"
                                    id=""
                                    placeholder="Kachwallasana@gmail.com"
                                    class="form-control"
                                    autoComplete="off"
                                  />
                                  <ErrorMessage
                                    className="error"
                                    name="email1"
                                  />
                                </Box>
                              </Box>
                            </Box>
                            <Box className="booking-box">
                              <Box className="chef-profile">
                                <Box className="chef-profile-box">
                                  <img
                                    className="chef-profile-logo"
                                    src={done}
                                  />
                                  <Typography className="chef-profile-dis">
                                    An email confirmation has been sent to{" "}
                                    {eventData?.email} <br />
                                    and SMS sent to +91{" "}
                                    {customerInfo?.contactNumber}
                                  </Typography>
                                </Box>
                                <Box className="chef-profile-box">
                                  <img
                                    className="chef-profile-logo"
                                    src={support}
                                  />
                                  <Typography className="chef-profile-dis">
                                  Our Team will get in touch with you to finalise the Menu,<br /> and set-up of your Chef's Table once we receive your booking.
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
                                    <Checkbox
                                      className="input-check"
                                      defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      for="flexCheckDefault"
                                    >
                                      I agree to cancellation and refund policy
                                    </label>
                                  </Box>
                                </Box>
                                <Link to='/cancellation-policy' target="_blank">
                                  <Typography className="policy-link">
                                    View Cancellation Policy
                                  </Typography>
                                </Link>
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
                                <img
                                  src={priveePaymentData?.common_menu?.cover_picture}
                                  alt=""
                                  className="per-dinner-img"
                                />
                                <Box sx={{ marginLeft: "12px" }}>
                                  <Typography className="event-title">
                                    {/*The Big Fat Parsi Blowout*/}
                                    {priveePaymentData?.common_menu?.title}
                                  </Typography>
                                  <Typography className="event-subtitle">
                                    Curated by{" "}
                                    <a href="#" className="event-link">
                                      {
                                        priveePaymentData?.common_menu?.user
                                          ?.name
                                      }
                                    </a>
                                  </Typography>
                                  <Typography className="rating-star">
                                    <StarIcon
                                      sx={{
                                        color: "#C6A87D",
                                        height: "24px",
                                        width: "24px",
                                      }}
                                    />{" "}
                                    <Typography className="rating-star">
                                      4.7
                                    </Typography>
                                  </Typography>
                                </Box>
                              </Box>
                              <Box className="experience-breakup">
                                <Box className="ex-details">
                                  <Typography className="ex-heading">
                                    Breakup
                                  </Typography>
                                  {/*<Typography className="ex-detail">*/}
                                  {/*    This is an estimate, final price will be{" "}*/}
                                  {/*    <br/>*/}
                                  {/*    communicated on call*/}
                                  {/*</Typography>*/}
                                  <ExpandMoreIcon className="ex-icon" />
                                </Box>
                                {!_.isEmpty(priveePaymentData) && (
                                  <Box className="table table-borderless">
                                    <Box className="table-box">
                                      <Typography className="table-details">
                                        Experience*
                                      </Typography>
                                      <Typography className="table-details">
                                        {new Intl.NumberFormat("en-IN", {
                                          style: "currency",
                                          currency: "INR",
                                        }).format(
                                          priveePaymentData?.payment?.experience
                                        )}
                                      </Typography>
                                    </Box>
                                    <Box className="table-box">
                                      <Typography className="table-details">
                                        Service Staff**
                                      </Typography>
                                      <Typography className="table-details">
                                        {new Intl.NumberFormat("en-IN", {
                                          style: "currency",
                                          currency: "INR",
                                        }).format(
                                          priveePaymentData?.payment
                                            ?.service_staff
                                        )}
                                      </Typography>
                                    </Box>
                                    {priveePaymentData?.payment?.discount && priveePaymentData?.payment?.discount!==0 && (
                                      <Box className="table-box">
                                      <Typography className="table-details">
                                        Discount
                                      </Typography>
                                      <Typography className="table-details">
                                        {new Intl.NumberFormat("en-IN", {
                                          style: "currency",
                                          currency: "INR",
                                        }).format(
                                          priveePaymentData?.payment
                                            ?.discount
                                        )}
                                      </Typography>
                                    </Box>
                                    )}
                                    
                                    {/* <Box className="table-box">
                                      <Typography className="table-details">
                                        Addon Cost
                                      </Typography>
                                      <Typography className="table-details">
                                        {new Intl.NumberFormat("en-IN", {
                                          style: "currency",
                                          currency: "INR",
                                        }).format(
                                          priveePaymentData?.payment?.addon_cost
                                        )}
                                      </Typography>
                                    </Box> */}
                                    <Box className="table-box border table-details-pt">
                                      <Typography className="table-details">
                                        Sub total
                                      </Typography>
                                      <Typography className="table-details">
                                        {new Intl.NumberFormat("en-IN", {
                                          style: "currency",
                                          currency: "INR",
                                        }).format(
                                          priveePaymentData?.payment?.sub_total
                                        )}
                                      </Typography>
                                    </Box>
                                    <Box className="table-box table-details-pt">
                                      <Typography className="table-details">
                                        GST @5%
                                      </Typography>
                                      <Typography className="table-details">
                                        {new Intl.NumberFormat("en-IN", {
                                          style: "currency",
                                          currency: "INR",
                                        }).format(
                                          priveePaymentData?.payment?.GST
                                        )}
                                      </Typography>
                                    </Box>
                                    <Box className="table-box">
                                      <Typography className="table-details">
                                        Service Charges @10%
                                      </Typography>
                                      <Typography className="table-details">
                                        {new Intl.NumberFormat("en-IN", {
                                          style: "currency",
                                          currency: "INR",
                                        }).format(
                                          priveePaymentData?.payment
                                            ?.service_charges
                                        )}
                                      </Typography>
                                    </Box>
                                    {priveePaymentData?.payment?.discount && priveePaymentData?.payment?.discount !==0 && 
                                    priveePaymentData?.payment?.voucher ? (
                                      <>
                                        <Box className="table-box">
                                          <Typography className="table-details">
                                            Discount
                                          </Typography>
                                          <Typography className="table-details">
                                            {new Intl.NumberFormat("en-IN", {
                                              style: "currency",
                                              currency: "INR",
                                            }).format(
                                              priveePaymentData?.payment
                                                ?.discount
                                            )}
                                          </Typography>
                                        </Box>
                                        <Box className="table-box">
                                          <Typography className="table-details">
                                            Voucher
                                          </Typography>
                                          <Typography className="table-details">
                                            {
                                              priveePaymentData?.payment
                                                ?.voucher
                                            }
                                          </Typography>
                                        </Box>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                    <Box className="table-box border">
                                      <Typography className="grand-total">
                                        Grand Total
                                      </Typography>
                                      <Typography className="grand-total">
                                        {new Intl.NumberFormat("en-IN", {
                                          style: "currency",
                                          currency: "INR",
                                        }).format(
                                          priveePaymentData?.payment?.total
                                        )}
                                      </Typography>
                                    </Box>
                                    <Box className="form-group1">
                                      <input
                                        type="text"
                                        name="voucher"
                                        value={voucher}
                                        onChange={(event) => {
                                          const capitalizedValue =
                                            event.target.value.toUpperCase();
                                          setVoucher(capitalizedValue);
                                        }}
                                        placeholder="Enter Your Voucher Coupon"
                                        className="form-control"
                                        autoComplete="off"
                                        autoFocus
                                      />
                                      <button
                                        className="voucher"
                                        type={"submit"}
                                        onClick={() => {
                                          setIsCoupon(true);
                                        }}
                                      >
                                        Apply Voucher
                                      </button>
                                    </Box>
                                    <Box className="tax tax1">
                                      <Typography className="table-details">
                                        *Includes the menu, tableware, table
                                        set-up and white-glove service.
                                      </Typography>
                                      <Typography className="table-details">
                                        **Service staff is calculated based on
                                        number of diners.
                                      </Typography>
                                    </Box>
                                  </Box>
                                )}
                              </Box>
                              <Box className="row viewbreak">
                                {!_.isEmpty(priveePaymentData) && (
                                  <Box className="col-lg-12">
                                    <button
                                      type="submit"
                                      className="submit-req"
                                      onClick={handlePayment}
                                    >
                                      Proceed to pay{" "}
                                      {new Intl.NumberFormat("en-IN", {
                                        style: "currency",
                                        currency: "INR",
                                      }).format(
                                        priveePaymentData?.payment?.total
                                      )}
                                      {/*Proceed to pay{" "} ₹25,000*/}
                                    </button>
                                  </Box>
                                )}
                                {/* <Typography className="contact-text">
                                  Estimate figure, further changes may amend the
                                  total
                                </Typography> */}
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Form>
                  )}
                </Formik>
              )}
            </Box>
          </Box>
        </Box>

        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
            <GstFormData
              handleClose={handleClose}
              gstDataData={gstData}
            /> 
        </Modal>
        <Modal
          keepMounted
          open={bookingSuccessOpen}
          onClose={(event, reason) => {
            if(reason === 'escapeKeyDown' || reason === 'backdropClick'){
              return false; 
            }
            handleBookingSuccessClose()
          }}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
          sx={{overflowY: 'auto !important'}}
          disableEscapeKeyDown={true}
        >
          <Box sx={styleOtp} id="printable-div">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className="close"
                  onClick={handleBookingSuccessClose}
                >
                  <CloseIcon sx={{ fontSize: "25px" }} />
                </button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="booking-details">
                    <img src={output} alt="" className="output" />
                    <h3>Booking Successful</h3>
                    <span>Booking ID {privateBookingOrderNo}</span>
                    <p>
                      We look forward to serving you a conscious <br />
                      dining experience!
                    </p>
                    <a onClick={printDiv} className="pointer">
                      <img src={download} alt="" />
                      Download Invoice
                    </a>
                    <button className="add-cal">
                      <img src={dateGold} alt="" />
                      Add to calender
                    </button>
                  </div>
                  <div className="bookingBox" id="section-to-print">
                    <Grid container className="row booking-sum">
                      <Grid
                        item
                        xl={6}
                        lg={6}
                        xs={6}
                        md={6}
                        sm={12}
                        className="grid-box"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <h4 className="booking-summary">Booking Summary</h4>
                          </div>
                          <div className="col-lg-12">
                            <div className="chef-edit">
                              {bsPaymentData ? (
                                <>
                                <img
                                  src={bsPaymentData?.common_menu?.user?.picture}
                                  alt=""
                                />
                                <h5>{bsPaymentData?.common_menu?.user?.name}</h5>
                                </>
                              ) : (
                                <>
                                <img
                                  src={priveePaymentData?.common_menu?.cover_picture}
                                  alt=""
                                />
                                <h5>{priveePaymentData?.common_menu?.user?.name}</h5>
                                </>
                              )}
                              
                            </div>
                            <div className="chef-profile">
                              <div>
                                <img src={dateGold} alt="" />
                                <span>
                                  {moment(eventData?.experienceDate).format(
                                    "MMMM D"
                                  )}{" "}
                                  |{" "}
                                  {moment(eventData?.startTime, "HH:mm").format(
                                    "h:mm A"
                                  )}
                                </span>
                              </div>
                              <div>
                                <img src={location} alt="" />
                                <span>{bsPaymentData?.city}</span>
                              </div>
                              <div>
                                <img src={people} alt="" />
                                <span>{eventData?.numberOfDinner} Diners</span>
                              </div>
                            </div>
                            <hr className="hr" />
                          </div>
                          <div className="col-lg-12">
                            <div className="chef-profile done-div">
                              <div>
                                <img src={done} alt="" />
                                <span>
                                  An email confirmation has been sent to{" "}
                                  {eventData?.email} <br />
                                  and SMS sent to {customerInfo?.contactNumber}
                                </span>
                              </div>
                              <div>
                                <img src={support} alt="" />
                                <span>
                                  Our team will get in touch to discuss further
                                  about your experience.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xl={6}
                        lg={6}
                        xs={6}
                        md={6}
                        sm={12}
                        className="grid-box"
                      >
                        <div className="per-dinner">
                          <div className="experience-breakup">
                            <div className="ex-details">
                              <h5>Payment Summary</h5>
                            </div>
                            <div className="table table-borderless">
                              <div className="table-box">
                                <span>Experience*</span>
                                <span className="price">
                                  {new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                  }).format(bsPaymentData?.payment?.experience)}
                                </span>
                              </div>
                              <div className="table-box">
                                <span>Service Staff**</span>
                                <span className="price">
                                  {new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                  }).format(
                                    bsPaymentData?.payment?.service_staff
                                  )}
                                </span>
                              </div>
                              
                              <Box className="table-box">
                                <Typography className="price">
                                  Addon Cost
                                </Typography>
                                <Typography className="price">
                                  {new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                  }).format(bsPaymentData?.payment?.addon_cost)}
                                </Typography>
                              </Box>
                              <div className="table-box border-tb pt-16">
                                <span>Sub total</span>
                                <span className="price">
                                  {new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                  }).format(bsPaymentData?.payment?.sub_total)}
                                </span>
                              </div>
                              <div className="table-box pt-16">
                                <span className="price">GST @5%</span>
                                <span className="price">
                                  {new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                  }).format(bsPaymentData?.payment?.GST)}
                                </span>
                              </div>
                              <div className="table-box">
                                <span className="price">
                                  Service Charges @10%
                                </span>
                                <span className="price">
                                  {new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                  }).format(
                                    bsPaymentData?.payment?.service_charges
                                  )}
                                </span>
                              </div>
                              <div className="table-box border">
                                <span className="grand-total">Grand Total</span>
                                <span className="grand-total">
                                  {new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                  }).format(bsPaymentData?.payment?.total)}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="experience-breakup">
                            <div className="table table-borderless">
                              <div className="table-box">
                                <span>Razorpay Payment</span>
                                <span className="price">
                                  {new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                  }).format(bsPaymentData?.payment?.total)}
                                </span>
                              </div>
                              <div className="table-box">
                                <span className="tax">
                                  {moment(eventData?.experienceDate).format(
                                    "MMMM D"
                                  )}{" "}
                                  |{" "}
                                  {moment(eventData?.startTime, "HH:mm").format(
                                    "h:mm A"
                                  )}
                                </span>
                              </div>
                              <div className="table-box">
                                <span className="tax">
                                  Transaction ID {priveePaymentNo}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </BoxWrapper>
    </React.Fragment>
  );
};
export default BookingSummary;
