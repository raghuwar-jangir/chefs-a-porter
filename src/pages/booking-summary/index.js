import React, {useState} from "react";
import * as Yup from 'yup';
import {Form, Formik,Field,ErrorMessage } from "formik";
import { Box, Grid, Modal, styled, Typography,TextField,TextareaAutosize,Checkbox } from "@mui/material";
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
import CloseIcon from '@mui/icons-material/Close';
import '../../assets/styles/fontStyle.css';
import output from "../../assets/images/output.png";
import download from "../../assets/images/download.png";

const BookingSummary = () => {
  const validationSchema = Yup.object().shape({
    number: Yup.string()
      .required('Number is required'),
    name: Yup.string()
      .required('Name is required'),
    flatNumber: Yup.string()
      .required('Flat number is required'),
    address: Yup.string()
      .required('Address is required'),
    pincode: Yup.string()
      .required('Pincode is required')
  });

  const initialValues = {
    number:'9876543210',
    name:'Teqzo International',
    flatNumber:'111',
    address:'Manchester',
    pincode:'400022'
  };
    const handleSubmit = (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [bookingSuccessOpen, setBookingSuccessOpen] = React.useState(false);
    const handleBookingSuccessOpen = () => setBookingSuccessOpen(true);
    const handleBookingSuccessClose = () => setBookingSuccessOpen(false);

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
    background: "#080B0E",
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
      fontWeight: 600,
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
    ".dinner-box": {
      padding: "0px 10px 0px 20px",
      position:'relative'
    },
    ".per-dinner": {
      background: "#101418",
      padding: "40px 20px",
      boxShadow: "0px 20px 24px rgb(0 0 0 / 6%)",
      position:'sticky',
      top:'50px'
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
      fontSize:'30px',
      color: "#FBFBFB",
      " -webkit-text-stroke": "1px",
    },
    ".submit-req": {
      background: "#C6A87D",
      color: "#080B0E",
      fontFamily: "ProximaNovaA-Regular",
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight:600,
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
      marginTop:'20px'
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
      fontFamily: 'ProximaNovaA-Regular',
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
      fontFamily: 'ProximaNovaA-Regular',
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "24px",
      color: "#FBFBFB",
      marginLeft: "10px",
      marginBottom:'0.5rem'
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
      height:'20px'
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
      color: "#FBFBFB"
    },
    ".drop-down": {
      position: "absolute",
      right: "0px",
      top: "0px",
      fontSize:'30px',
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
      paddingTop:'20px'
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
    ".forward-arrow": {
      position: "absolute",
      right: "0px",
      fontSize:'30px',
      bottom: "30px",
      color: "#fbfbfb",
      webkitTextStroke: "1px",
      top: "0px",
      paddingTop:'20px'
    },
    ".email-text": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      marginBottom: "0px",
      paddingTop:'20px'
    },
    // ".contact": {
    //   position: "relative",
    // },
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
      paddingTop:'16px'
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
      paddingBottom:'7px'
    },
    ".chef-profile": {
      marginTop: "5px",
      marginBottom:'32px'
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
    '.form-head-box':{
        display:'flex',
        padding: '0px',
    marginBottom: '30px',
    borderBottom: 'none',
    position:'relative',
    justifyContent: 'flex-start',
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
    ".form-control": {
      paddingLeft: "10px",
      flex: "1",
      outline:'none',
      backgroundColor: "transparent",
      border: "0px",
      borderBottom: "0.25px solid #FBFBFB",
      borderRadius: "0px",
      // paddingLeft: "0px",
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
    '.hr':{
      boxSizing: 'content-box',
    height: '0',
    overflow: 'visible',
    margin: '1rem 0',
    border: '0',
    borderTop: '1px solid',
    color: 'rgba(255, 255, 255, 0.6)',
    opacity: '1',
    },
    '.input-check':{
      paddingRight:'5px !important',
      padding:'0px',
      marginBottom:'0.125rem',
      color:'#C6A87D !important'
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
                fontWeight: 700,
                fontFamily: 'ProximaNovaA-Regular'
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
    const style = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: '12000',
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
        outline: '0',
        '.modal-content': {
            padding: '40px 20px',
            backgroundColor: '#101418!important',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '255px',
            pointerEvents: 'auto',
            top: '8%',
            left: '42.5%',
            backgroundClip: 'padding-box',
            outline: '0',
            boxShadow: '0px 8px 12px rgb(0 0 0 / 16%)'
        },
        '.modal-header': {
            display: 'flex',
            padding: '0px',
            marginBottom: '30px',
            borderBottom: 'none',
            position: 'relative',
            justifyContent: 'flex-start',
            flexShrink: '0',
            alignItems: 'center'
        },
        '.form-arrow': {
            color: '#FBFBFB !important',
            fontSize: '20px',
            marginRight: '16px',
        },
        '.modal-title': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "24px",
            color: "#FBFBFB",
        },
        '.close': {
            position: 'absolute',
            padding: ' 0px',
            border: ' 0px',
            background: 'transparent',
            right: '0px'
        },
        '.close-icon': {
            fontSize: '28px',
            marginRight: '0px',
            color: '#FBFBFB'
        },
        '.modal-body': {
            padding: '0px',
            position: 'relative',
            flex: '1 1 auto'
        },
        '.container-fluid': {
            width: '100%',
            marginRight: 'auto',
            marginLeft: 'auto'
        },
        '.form-field': {
            padding: '0px 0px 56px'
        },
        '.form-label': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#FBFBFB",
            marginBottom: '8px'
        },
        ".form-control": {
            outline: 'none',
            paddingLeft: "10px",
            flex: "1",
            backgroundColor: "transparent",
            border: "0px",
            borderBottom: "0.25px solid #FBFBFB",
            borderRadius: "0px",
            // paddingLeft: "0px",
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
        ".btn-primary": {
            border: 'none !important',
            background: "#C6A87D",
            width: '100% !important',
            padding: "14.5px 10px",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "24px",
            borderRadius: "0px",
            color: "#080B0E",
            textTransform: "capitalize",
            fontFamily: 'ProximaNovaA-Regular',
            marginTop: "0px",
        },
    }
    const styleOtp = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 841,
        boxShadow: 24,
        '.modal-content': {
            backgroundColor: '#101418!important',
            boxShadow: '0px 8px 12px rgb(0 0 0 / 16%)',
            padding: '40px 20px',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'auto',
            backgroundClip: 'paddingBox',
            outline: '0'
        },
        ".close": {
            border: 'none !important',
            background: "transparent",
            borderRadius: "0px",
            color: "#FBFBFB",
            cursor: 'pointer'
        },
        '.modal-header': {
            padding: '0px',
            // marginBottom: '30px',
            borderBottom: 'none',
            display: 'flex',
            position: 'relative',
            justifyContent: 'flex-end',
        },
        '.booking-details': {
            textAlign: 'center'
        },
        '.hr': {
            color: 'rgba(255, 255, 255, 0.6)',
            opacity: '1',
            borderTop: '1px solid'
        },
        '.booking-details h3': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '25px',
            color: '#FBFBFB',
            marginBottom: '16px',
            marginTop: '0px',
        },
        '.booking-details span': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            marginBottom: '16px',
            display: 'block'
        },
        '.booking-details p': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#FBFBFB',
            textAlign: 'center',
            marginBottom: '16px',
            marginTop: '0px',
        },
        '.booking-details a': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#C6A87D',
            textAlign: 'center',
            display: 'block',
            marginBottom: '16px',
        },
        '.booking-details a img': {
            width: '18px',
            height: '18px',
            objectFit: 'contain',
            marginRight: '8px',
            verticalAlign: 'text-top',
        },
        '.booking-details button': {
            border: '0.5px solid #C6A87D',
            padding: '16px',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '17px',
            color: '#FBFBFB',
            background: 'transparent',
            cursor: 'pointer'
        },
        '.booking-details button img': {
            width: '16px',
            height: '16px',
            marginRight: '8px',
            filter: 'brightness(100)',
            verticalAlign: 'text-top',
        },
        '.output': {
            width: '56px',
            height: '56px',
            objectFit: 'contain',
            marginBottom: '16px',
        },
        '.bookingBox': {
            marginTop: '40px',
        },
        '.booking-summary': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            marginBottom: '16px',
            marginTop: '0px'
        },
        '.chef-edit': {
            display: 'flex',
            placeItems: 'center',
            position: 'relative',
            marginBottom: '20px',
        },
        '.chef-edit img': {
            width: '48px',
            height: '48px',
            objectFit: 'cover',
            borderRadius: '43px',
        },
        '.chef-edit h5': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            marginLeft: '10px',
        },
        '.chef-profile div': {
            marginBottom: '16px',
            display: 'flex',
        },
        '.grid-box': {
            borderLeft: '10px solid #101418',
            background: '#080B0E',
            padding: '16px',
        },
        '.chef-profile img': {
            height: '16px',
            width: '16px',
            objectFit: 'contain',
            marginRight: '10px',
        },
        '.chef-profile span': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
        },
        '.experience-breakup': {
            border: '0.5px solid #DCD7CB',
            padding: '16px 16px 0px',
        },
        '.experience-breakup:last-child': {
            marginTop: '16px',
        },
        '.ex-details': {
            position: 'relative'
        },
        '.ex-details h5': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '25px',
            color: '#FBFBFB',
            marginBottom: '10px',
            marginTop: '0px'
        },
        '.i': {
            position: 'absolute',
            right: '0px',
            top: '0px',
            color: '#FBFBFB',
            '-webkit-text-stroke': '1px',
        },
        '.table-box span': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
            padding: '0px 0px 16px'
        },
        '.price': {
            fontFamily: 'ProximaNovaA-Regular !important',
            fontStyle: 'normal !important',
            fontWeight: '600 !important',
            fontSize: '14px !important',
            lineHeight: '17px !important',
            color: '#FBFBFB',
            textAlign: 'right !important',
            padding: '0px 0px 16px'
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
        '.grand-total': {
            padding: '16px 0px !important'
        },
        '.tax': {
            textAlign: 'left !important',
            fontFamily: 'Proxima Nova Alt !important',
            fontStyle: 'normal !important ',
            fontWeight: '300 !important',
            fontSize: '14px !important',
            lineHeight: '17px !important',
            color: '#FBFBFB',
        },


        "@media (min-width: 426px) and (max-width:768px)": {
            width: '500px'
        },
        "@media (min-width: 1px) and (max-width:400px)": {
            width: '320px !important',
        },
        "@media (min-width: 400px) and (max-width:425px)": {
            width: '400px !important',
        },
    };

    return (
        <React.Fragment>
            <BoxWrapper>
                <Navbar to={'/booking-summary'} isColor={true} heading="Privee"/>
                {/*{isMobile ? (*/}
                {/*    <Box className="header-club">*/}
                {/*        <Typography className="addones-mobile-heading">Privee</Typography>*/}
                {/*    </Box>*/}
                {/*) : (*/}
                {/*    ""*/}
                {/*)}*/}
                <Box className="supper-gallery cust-details">
                    <Box className="container-fluid">
                        <Box className="row supper-chef-details">
                            <Box className="book-trad">
                                <ArrowBackIcon className="arrow-left"/>
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
                                                <img className="chef-edit-img" src={chefImg}/>
                                                <Typography className="chef-edit-title">
                                                    Chef Mako Ravindran
                                                </Typography>
                                                <CreateIcon className="pencil-icon"/>
                                            </Box>
                                            <Box class="chef-profile">
                                                <Box className="chef-profile-detail">
                                                    <img className="chef-profile-icon" src={dateGold}/>
                                                    <Typography className="chef-profile-date">
                                                        April 9 | 7:30 PM - 10 PM
                                                    </Typography>
                                                </Box>
                                                <Box className="chef-profile-detail">
                                                    <img className="chef-profile-icon" src={location}/>
                                                    <Typography className="chef-profile-date">
                                                        Silver bar, Downtown
                                                    </Typography>
                                                </Box>
                                                <Box className="chef-profile-detail">
                                                    <img className="chef-profile-icon" src={people}/>
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
                                                <KeyboardArrowDownIcon className="drop-down"/>
                                                <ul className="exp-ul">
                                                    <li className="exp-li">Service Includes</li>
                                                    <li className="exp-li">Service Excludes</li>
                                                    <li className="exp-li">Table set upincludes</li>
                                                    <li className="exp-li">
                                                        Confirm Details before proceeding to pay
                                                    </li>
                                                    <li className="exp-li">Decor not included</li>
                                                </ul>
                                                <hr className="hr"/>
                                            </Box>
                                        </Box>
                                        <Box className="contact">
                                            <Box className="form-check">
                                            <Checkbox className="input-check" defaultChecked/>
                                                <label
                                                    className="form-check-label"
                                                    for="flexCheckDefault"
                                                >
                                                    Enter GSTIN for tax benefits (Optional)
                                                </label>
                                                <KeyboardArrowRightIcon data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModal"
                                                                        onClick={handleOpen} className="forward-arrow"/>
                                            </Box>
                                            <hr className="hr"/>
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
                                                        placeholder="10 digit number"
                                                        className="form-control"
                                                        type="text"
                                                        id="number"
                                                        name="number"
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
                                                    <input
                                                        type="email"
                                                        name=""
                                                        id=""
                                                        placeholder="Kachwallasana@gmail.com"
                                                        class="form-control"
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className="booking-box">
                                            <Box className="chef-profile">
                                                <Box className="chef-profile-box">
                                                    <img className="chef-profile-logo" src={done}/>
                                                    <Typography className="chef-profile-dis">
                                                        An email confirmation has been sent to
                                                        kachwallsana@gmail.com <br/>
                                                        and SMS sent to 23456745
                                                    </Typography>
                                                </Box>
                                                <Box className="chef-profile-box">
                                                    <img className="chef-profile-logo" src={support}/>
                                                    <Typography className="chef-profile-dis">
                                                        Our team and Chef will get in touch with you to
                                                        discuss menu <br/>
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
                                                <KeyboardArrowDownIcon className="drop-down"/>
                                                <Box className="contact">
                                                    <Box className="form-check">
                                                        <Checkbox className="input-check" defaultChecked/>
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
                                                <img src={sGallery} alt="" className="per-dinner-img"/>
                                                <Box sx={{marginLeft: "12px"}}>
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
                                                                height: "24px",
                                                                width: "24px",
                                                            }}
                                                        />{" "}
                                                        <Typography className="rating-star">4.7</Typography>
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box className="experience-breakup">
                                                <Box className="ex-details">
                                                    <Typography className="ex-heading">
                                                        Experience Breakup
                                                    </Typography>
                                                    <Typography className="ex-detail">
                                                        This is an estimate, final price will be <br/>
                                                        communicated on call
                                                    </Typography>
                                                    <ExpandMoreIcon className="ex-icon"/>
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
                                                    <button type="submit" className="submit-req" onClick={handleBookingSuccessOpen}>
                                                        Proceed to pay ₹25,000
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
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                  <Box sx={style}>
           <Box className="modal-content">
              <Box className="modal-header">
              <ArrowBackIcon className="form-arrow"/>
                 <Typography className="modal-title" id="exampleModalLabel">GST Details</Typography>
                 <button type="button" data-bs-dismiss="modal" aria-label="Close" className="close"
                                        onClick={handleClose}>
                                           <CloseIcon className="close-icon"/>
                                </button>
              </Box>
                  <Box class="modal-body">
                 <Box class="container-fluid">
                 <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box  className="row">
          <Box className='form-field'>
            <label className="form-label" htmlFor="number">GST Number</label>
            <Field className="form-control" type="text" id="number" name="number" placeholder='Enter Location'/>
            {/* <ErrorMessage name="number" /> */}
          </Box>

          <Box className='form-field'>
            <label className="form-label" htmlFor="name">Registered Company Name</label>
            <Field className="form-control" type="text" id="name" name="name" placeholder="Enter Location" />
            {/* <ErrorMessage name="name" /> */}
          </Box>

          <Box className='form-field'>
            <label className="form-label" htmlFor="flatNumber">Building/ FlatNumber</label>
            <Field className="form-control" type="text" id="flatNumber" name="flatNumber" placeholder='Enter Location'/>
            {/* <ErrorMessage name="flatNumber" /> */}
          </Box>

          <Box className='form-field'>
            <label className="form-label" htmlFor="address">Street/area/ Road name</label>
            <Field className="form-control" type="text" id="address" name="address" placeholder="Enter Locationr" />
            {/* <ErrorMessage name="address" /> */}
          </Box>

          <Box className='form-field'>
            <label className="form-label" htmlFor="pincode">Pincode</label>
            <Field className="form-control" type="text" id="pincode" name="pincode" placeholder='Enter Location' />
            {/* <ErrorMessage name="pincode" /> */}
          </Box>

                                                    <button type="submit" className="btn btn-primary"
                                                            disabled={isSubmitting}>
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
                </Modal>
                <Modal
                    keepMounted
                    open={bookingSuccessOpen}
                    onClose={handleBookingSuccessClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={styleOtp}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="close"
                                        onClick={handleBookingSuccessClose}>
                                    <CloseIcon sx={{fontSize: "25px"}}/></button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="booking-details">
                                        <img src={output} alt="" className="output"/>
                                        <h3>Booking Successful</h3>
                                        <span>Booking ID - 123456</span>
                                        <p>We look forward to serving you a conscious <br/>dining experience!</p>
                                        <a href="javascript:void(0);"><img src={download} alt=""/>Download
                                            Invoice</a>
                                        <button className="add-cal"><img src={dateGold} alt=""/>Add to
                                            calender
                                        </button>
                                    </div>
                                    <div className="bookingBox">
                                        <Grid container className="row booking-sum">
                                            <Grid item xl={6} lg={6} xs={6} md={6} sm={12} xs={12} className="grid-box">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <h4 className="booking-summary">Booking Summary</h4>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="chef-edit">
                                                            <img src={chefImg} alt=""/>
                                                            <h5>Chef Mako Ravindran</h5>
                                                        </div>
                                                        <div className="chef-profile">
                                                            <div>
                                                                <img src={dateGold} alt=""/>
                                                                <span>April 9 | 7:30 PM - 10 PM</span>
                                                            </div>
                                                            <div>
                                                                <img src={location} alt=""/>
                                                                <span>Silver bar, Downtown</span>
                                                            </div>
                                                            <div>
                                                                <img src={people} alt=""/>
                                                                <span>6 Diners</span>
                                                            </div>
                                                        </div>
                                                        <hr className="hr"/>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="chef-profile done-div">
                                                            <div>
                                                                <img src={done} alt=""/>
                                                                <span>An email confirmation has been sent to kachwallsana@gmail.com <br/>and SMS sent to 23456745</span>
                                                            </div>
                                                            <div>
                                                                <img src={support} alt=""/>
                                                                <span>Our team and Chef will get in touch with you to discuss menu <br/>(allergen+protein info), venue, set up and pricing</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xl={6} lg={6} xs={6} md={6} sm={12} xs={12} className="grid-box">
                                                <div className="per-dinner">
                                                    <div className="experience-breakup">
                                                        <div className="ex-details">
                                                            <h5>Payment Summary</h5>
                                                            <KeyboardArrowDownIcon className="i"/>
                                                        </div>
                                                        <div className="table table-borderless">
                                                            <div className="table-box">
                                                                <span>
                                                                    Food
                                                                </span>
                                                                <span className="price">
                                                                    ₹ 2,500
                                                                </span>
                                                            </div>
                                                            <div className="table-box">
                                                                <span>
                                                                    Service Charge
                                                                </span>
                                                                <span className="price">
                                                                    ₹ 2,500
                                                                </span>
                                                            </div>
                                                            <div className="table-box">
                                                                <span>
                                                                   Tax
                                                                </span>
                                                                <span className="price">
                                                                    ₹ 2,500
                                                                </span>
                                                            </div>
                                                            <div className="table-box border">
                                                                <span className="grand-total">
                                                                    Grand Total
                                                                </span>
                                                                <span className="grand-total">
                                                                    ₹ 2,5000
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="experience-breakup">
                                                        <div className="table table-borderless">
                                                            <div className="table-box">
                                                                <span>
                                                                    State Bank of India
                                                                </span>
                                                                <span className="price">
                                                                    ₹ 2,500
                                                                </span>
                                                            </div>
                                                            <div className="table-box">
                                                                <span className="tax">
                                                                    04 Nov 11:14 AM
                                                                </span>
                                                            </div>
                                                            <div className="table-box">
                                                                <span className="tax">
                                                                   Transaction ID 12434454689
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
