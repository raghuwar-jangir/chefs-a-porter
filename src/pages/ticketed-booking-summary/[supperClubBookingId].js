import React, {useEffect, useState, useContext} from "react";
import {styled, Box, Grid, Typography, Select, MenuItem, Stack, Modal, TextField, Link, Checkbox} from "@mui/material";
import Navbar from "../../components/NavbarComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import sGallery from "../../assets/images/sc-gallery.png";
import people from "../../assets/images/people.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dateGold from "../../assets/images/date.png";
import location from "../../assets/images/location.png";
import CreateIcon from "@mui/icons-material/Create";
import '../../assets/styles/fontStyle.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import giftCard from '../../assets/images/giftcard.png';
import CloseIcon from '@mui/icons-material/Close';
import {Form, Formik, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {navigate} from "gatsby";
import Cookies from "js-cookie";
import * as _ from "lodash";
import UsersContext from "../../context/UsersContext";
import moment from "moment";


const ScBookingSummary = () => {
    const {
        setIsSupperBookingStatus,
        bookingSuccessOpen,
        supperClubPaymentData,
        setSupperClubPayment
    } = useContext(UsersContext)
    const [supperClubBookingData, setSupperClubBookingData] = useState()
    const cookieValue = Cookies?.get('supperClubBookingData');
    const supperClubBookingIdCookieValue = Cookies?.get('supperClubBookingId');
    const supperClubBookingId = supperClubBookingIdCookieValue?.replaceAll('"', '')
    const [superClubBookingDetails, setSuperClubBookingDetails] = useState()
    const cookieValue2 = Cookies.get('supperClubBookingPersonalDetail');

    console.log("supperClubPaymentData===========", supperClubPaymentData)
    console.log("supperClubBookingId===========", supperClubBookingId)
    useEffect(() => {
        if (cookieValue) {
            setSupperClubBookingData(JSON.parse(cookieValue));
        }
        if (cookieValue2) {
            setSuperClubBookingDetails(JSON.parse(cookieValue2));
        }
    }, [cookieValue, cookieValue2])

    const handleClick = () => {
        navigate(`/ticketed-booking-confirm/${supperClubBookingId}`);
        setIsSupperBookingStatus(true)
        setSupperClubPayment(true);
    }

    const bookingSummaryValidationSchema = Yup.object().shape({
        contactNumber: Yup.string()
            .required('contactNumber is required'),
        email: Yup.string().email('Incorrect Email Id').required('please enter email'),
    });

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
        number: '9876543210',
        name: 'Teqzo International',
        flatNumber: '111',
        address: 'Manchester',
        pincode: '400022'
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = (values, {setSubmitting}) => {
        console.log(values);
        setSubmitting(false);
    }
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
            cursor: 'pointer'
            // fontSize: '20px',
        },
        ".dinner-box": {
            paddingLeft: '10px',
            position: "relative",
            // flex: "0 0 auto",
            // width: "41.66666667%",
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
            placeItems: 'center'
        },
        ".per-dinner-img": {
            width: "116px",
            height: "116px",
            objectFit: "cover",
        },
        ".event-title": {
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            fontWeight: '700',
            fontSize: "20px",
            lineHeight: "25px",
            letterSpacing: "0.06em",
            color: "#101418",
            marginBottom: "8px",
        },
        ".event-subtitle": {
            fontFamily: "Proxima Nova",
            fontStyle: "normal",
            // fontWeight: '400',
            fontSize: "12px",
            lineHeight: "15px",
            letterSpacing: "0.06em",
            color: "#101418",
            marginBottom: "11px",
        },
        ".event-link": {
            fontFamily: "Proxima Nova",
            fontStyle: "normal",
            fontWeight: '700',
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
            color: "#FBFBFB",
            fontFamily: 'Proxima Nova Alt',
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: 600,
            border: "0px",
            marginBottom: "30px",
            marginTop: "30px",
            width: "100%",
            cursor: "pointer",
            padding: "18px 10px",
        },
        ".rating-star": {
            fontFamily: 'ProximaNovaA-Regular',
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#101418",
        },
        '.rating-people': {
            width: '24px',
            height: '24px',
            marginRight: '8px'
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
            fontFamily: 'Proxima Nova Alt',
            fontStyle: "normal",
            // fontWeight: '300',
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
        '.table-details-pt': {
            paddingTop: '16px'
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
            fontFamily: 'Proxima Nova Alt',
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
            overflow: "hidden"
        },

        ".partner": {
            float: "left",
            width: "58.333%",
            background: "#FBFBFB",
            borderRight: "10px solid #dcd7cb",
            padding: "40px 20px",
        },
        ".date-stack": {
            color: "#101418",
            background: "rgba(189, 189, 189, 0.2)",
            padding: "16px 0px",
            placeContent: "center",
            display: 'flex',
            placeItems: 'center',
            margin: '0px -20px 20px',
            flexDirection: 'row'
        },
        ".date-description": {
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: 'ProximaNovaA-Regular',
            lineHeight: "17px",
            letterSpacing: '0.06em',
            textAlign: 'center',
            padding: '0px 6px'
        },
        ".line": {
            margin: "0px",
            fontSize: "15px",
        },
        '.confirm-details': {
            background: 'rgba(189, 189, 189, 0.4)',
            padding: '16px 0px',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '17px',
            textAlign: 'center',
            color: '#080B0E',
            marginTop: '-16px',
            marginLeft: '-16px',
            marginRight: '-16px',
            marginBottom: '20px',
        },
        ".booking-box": {
            marginBottom: "20px",
        },
        ".chef-edit": {
            display: "flex",
            placeItems: "center",
            justifyContent: 'space-between',
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
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E"
        },
        '.chef-edit-sub': {
            color: '#080B0E',
            fontWeight: 600,
        },
        '.chef-edit-sub:hover': {
            color: '#C6A87D'
        },
        ".pencil-icon": {
            marginLeft: "2.5px",
            marginRight: "2.5px",
            display: "block",
            textAlign: "right",
            position: "absolute",
            right: "0px",
            top: "auto",
            bottom: "auto",
            lineHeight: "1",
            height: '20px'
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
            filter: 'brightness(0)'
        },
        ".chef-profile-date": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
        },
        '.chef-box': {
            display: 'flex',
            placeItems: 'center',
            position: 'relative',
            marginBottom: '20px'
        },
        '.booking-summary-title': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '25px',
            letterSpacing: '0.06em',
            color: '#080B0E',
            marginLeft: '0px',
            marginBottom: '0.5em'
        },
        '.chef-seats': {
            fontFamily: 'ProximaNovaA-Regular',
            display: "flex",
            fontWeight: 400,
            alignItems: "center",
            fontSize: "14px",
            lineHeight: "17px",
            color: "#080B0E",
        },
        '.chef-people': {
            width: '18px',
            height: '18px',
            marginRight: '6px'
        },
        '.chef-people-no': {
            fontFamily: 'ProximaNovaA-Regular',
            display: "flex",
            fontWeight: 400,
            alignItems: "center",
            fontSize: "14px",
            lineHeight: "17px",
            color: "#080B0E",
        },
        '.hr': {
            margin: '1rem 0',
            opacity: '0.25',
            borderTop: '1px solid'
        },
        '.email': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
            marginBottom: '33px',
            paddingTop: '16px'
        },
        ".contact": {
            position: "relative",
            marginBottom: "20px",
        },
        ".contact-number": {
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
            marginBottom: "16px",
        },
        ".form-group": {
            display: "flex",
            flexWrap: "wrap",
            paddingTop: '16px'
        },
        ".country-code": {
            borderBottom: "0.25px solid #080B0E",
            display: "inline-flex",
            placeItems: "center",
            color: "#080B0E",
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "18px",
            lineHeight: "19px",
        },
        ".form-control": {
            paddingLeft: "10px",
            flex: "1",
            outline: 'none',
            backgroundColor: "transparent",
            border: "0px",
            borderBottom: "0.25px solid #080B0E",
            borderRadius: "0px",
            // paddingLeft: "0px",
            paddingRight: "0px",
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
            display: "block",
            width: "100%",
            padding: "0.375rem 0.75rem 0.375rem 0px",
            transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        },
        ".drop-down-2": {
            fontSize: "19px",
            marginLeft: "0.5px",
            marginRight: "2.5px",
            paddingBottom: '7px'
        },
        ".form-check": {
            marginBottom: "30px",
            minHeight: "1.5rem",
            paddingTop: '20px',
            background: 'rgba(189, 189, 189, 0.2)',
            display: 'flex',
        },
        ".form-check-input": {
            accentColor: "#C6A87D !important",
            borderColor: "#C6A87D !important",
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
            color: "#080B0E",
            marginBottom: "0px",
            paddingTop: "4px",
        },
        ".forward-arrow": {
            position: "absolute",
            right: "10px",
            fontSize: '30px',
            bottom: "auto",
            color: "#080B0E",
            webkitTextStroke: "1px",
            top: "auto",
            // paddingTop:'20px'
        },
        '.gst-block': {
            marginTop: '35px',
            marginBottom: '30px',
            position: 'relative',
        },
        '.input-check': {
            color: '#C6A87D !important',
            bottom: '8px !important'
        },
        '.gift-div': {
            marginTop: '5px'
        },
        '.gift-child': {
            marginBottom: '16px',
            display: 'flex'
        },
        '.gift-img': {
            height: '22.5px',
            width: '32.01px',
            marginRight: '10px'
        },
        '.gift-text': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: 250,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#080B0E'
        },
        '.date-stack1': {
            display: 'none'
        },
        "@media (min-width: 1px) and (max-width:768px)": {
            '.partner': {
                borderRight: '0px'
            },
            '.dinner-box': {
                paddingLeft: '0px'
            },
            ".date-stack1": {
                placeContent: "center",
                display: 'flex',
                placeItems: 'center',
                margin: '0px',
                width: '100%',
                flexDirection: 'row',
            },
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            padding: '0px',
            '.dinner-box': {
                display: 'none'
            },
            '.partner': {
                maxWidth: '100%',
                width: '100%'
            },
            '.book-trad': {
                display: 'none'
            }
        }
    })
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
    return (
        <React.Fragment>
            <MainBox>
                <Navbar heading="Ticketed" isColor={true}/>
                <div className="row supper-chef-details">
                    <div className="book-trad">
                        <ArrowBackIcon className="arrow-left" onClick={() => {
                            navigate(`/personal-details`)
                        }
                        }/>
                        <div className="addons-title">Booking Summary</div>
                    </div>
                </div>
                {
                    !_.isEmpty(supperClubPaymentData) &&
                    <Formik
                        initialValues={{
                            contactNumber: superClubBookingDetails?.contactNumber,
                            email: superClubBookingDetails?.email,
                        }}
                        validationSchema={bookingSummaryValidationSchema}
                        onSubmit={(values) => {
                            // console.log("sc booking confrim value==========", values)
                        }}
                    >
                        {({values, handleChange, handleSubmit, setFieldValue}) => (
                            <Form onSubmit={handleSubmit}>
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
                                            <Box className="chef-box">
                                                <Typography className="booking-summary-title">
                                                    {supperClubPaymentData?.event?.title}
                                                </Typography>
                                                <CreateIcon className="pencil-icon"/>
                                            </Box>
                                            <Box class="chef-edit">
                                                <Typography className="chef-edit-title">
                                                    Curated by <span
                                                    className="chef-edit-sub">{supperClubPaymentData?.event?.chef?.name}</span>
                                                </Typography>
                                                <Typography className="chef-seats">
                                                    <img className="chef-people" src={people}/>
                                                    <Typography
                                                        className="chef-people-no">{supperClubPaymentData?.event?.seats}</Typography>
                                                </Typography>
                                            </Box>
                                            <hr className="hr"/>
                                            <Box class="chef-profile">
                                                <Box className="chef-profile-detail">
                                                    <img className="chef-profile-icon" src={dateGold}/>
                                                    <Typography className="chef-profile-date">
                                                        {moment(supperClubPaymentData?.event?.dates[0]).format("MMMM D")} | {moment(supperClubPaymentData?.event?.timefrom, 'HH:mm').format('h:mm A')} - {moment(supperClubPaymentData?.event?.timetill, 'HH:mm').format('h:mm A')}
                                                    </Typography>
                                                </Box>
                                                <Box className="chef-profile-detail">
                                                    <img className="chef-profile-icon" src={location}/>
                                                    <Typography className="chef-profile-date">
                                                        {supperClubPaymentData?.event?.venue}
                                                    </Typography>
                                                </Box>
                                                <Box className="chef-profile-detail">
                                                    <img className="chef-profile-icon" src={people}/>
                                                    <Typography className="chef-profile-date">
                                                        {supperClubPaymentData?.diner_count} Diners
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className="booking-box">
                                            <div className="email">An Email Confirmation will be sent to</div>
                                        </Box>
                                        <Box className="booking-box">
                                            <Box className="contact">
                                                <label className="contact-number" for="">
                                                    Email{" "}
                                                </label>
                                                <Box className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        placeholder="Kachwallasana@gmail.com"
                                                        class="form-control"
                                                        autoComplete="off"
                                                    />
                                                </Box>
                                                <ErrorMessage name="email"/>
                                            </Box>
                                        </Box>
                                        <Box class="booking-box">
                                            <Box class="contact">
                                                <label className="contact-number" for="contact-number">
                                                    Mobile
                                                </label>
                                                <Box className="form-group">
                                              <span className="country-code">
                                                +91{" "}
                                                  <KeyboardArrowDownIcon className="drop-down-2"/>
                                              </span>
                                                    <input
                                                        placeholder="10 digit number"
                                                        className="form-control"
                                                        type="text"
                                                        id="number"
                                                        name="contactNumber"
                                                        value={values.contactNumber}
                                                        onChange={handleChange}
                                                        autoComplete="off"
                                                    />
                                                </Box>
                                                <ErrorMessage name="contactNumber"/>
                                                {/* <Box class="invalid-feedback">Incorrect Mobile Number</Box> */}
                                            </Box>
                                        </Box>
                                        <Box className="gst-block">
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
                                        </Box>
                                        <div className="gift-div">
                                            <div className="gift-child">
                                                <img className="gift-img" src={giftCard}/>
                                                <div className="gift-text">If you have a coupon/ gift card, please enter
                                                    details in the
                                                    next step
                                                </div>
                                            </div>
                                        </div>
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
                                            {/*<Box>*/}
                                            {/*    <Stack*/}
                                            {/*        className="date-stack"*/}
                                            {/*    >*/}
                                            {/*        {!_.isEmpty(supperClubPaymentData) &&*/}
                                            {/*            <Typography className="date-description">*/}
                                            {/*                {moment(supperClubPaymentData?.event?.dates[0]).format("MMMM D")}*/}
                                            {/*            </Typography>*/}
                                            {/*        }*/}
                                            {/*        <span className="line">|</span>*/}
                                            {/*        <Typography className="date-description">*/}
                                            {/*            {" "}*/}
                                            {/*            /!*7:30 PM - 10 PM*!/*/}
                                            {/*            {moment(supperClubPaymentData?.event?.timefrom, 'HH:mm').format('h:mm A')} - {moment(supperClubPaymentData?.event?.timetill, 'HH:mm').format('h:mm A')}*/}
                                            {/*        </Typography>*/}
                                            {/*        <span className="line">|</span>*/}
                                            {/*        <Typography className="date-description">*/}
                                            {/*            {supperClubPaymentData?.event?.venue}*/}
                                            {/*        </Typography>*/}
                                            {/*    </Stack>*/}
                                            {/*</Box>*/}
                                            <Box className="event-div">
                                                <img src={supperClubPaymentData?.event?.pictures[0]} alt=""
                                                     className="per-dinner-img"/>
                                                <Box sx={{marginLeft: "12px"}}>
                                                    <Typography className="event-title">
                                                        {supperClubPaymentData?.event?.title}
                                                    </Typography>
                                                    <Typography className="event-subtitle">
                                                        Curated by{" "}
                                                        <a href="#" className="event-link">
                                                            {supperClubPaymentData?.event?.chef?.name}
                                                        </a>
                                                    </Typography>
                                                    <Typography className="rating-star">
                                                        <img className="rating-people" src={people}/>
                                                        <Typography
                                                            className="rating-star">{supperClubPaymentData?.event?.seats}</Typography>
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box className="experience-breakup">
                                                <div className="confirm-details">Confirm Details before proceeding to
                                                    pay
                                                </div>
                                                <Box className="ex-details">
                                                    <Typography className="ex-heading">
                                                        Price Breakdown
                                                    </Typography>
                                                    <ExpandMoreIcon className="ex-icon"/>
                                                </Box>

                                                {
                                                    !_.isEmpty(supperClubPaymentData) &&
                                                    <Box className="table table-borderless">
                                                        <Box className="table-box">
                                                            <Typography className="table-details">Ticket
                                                                Price</Typography>
                                                            <Typography
                                                                className="table-details">{supperClubPaymentData?.payment?.ticket_price}</Typography>
                                                        </Box>
                                                        <Box className="table-box border-tb ">
                                                            <Typography className="table-details table-details-pt">Sub
                                                                Total</Typography>
                                                            <Typography
                                                                className="table-details table-details-pt">{supperClubPaymentData?.payment?.sub_total}</Typography>
                                                        </Box>
                                                        <Box className="table-box">
                                                            <Typography className="table-details table-details-pt">GST
                                                                @5%</Typography>
                                                            <Typography
                                                                className="table-details table-details-pt">{supperClubPaymentData?.payment?.GST}</Typography>
                                                        </Box>
                                                        <Box className="table-box">
                                                            <Typography className="table-details">Service Charge
                                                                @10%</Typography>
                                                            <Typography
                                                                className="table-details">{supperClubPaymentData?.payment?.service_charges}</Typography>
                                                        </Box>
                                                        <Box className="table-box border">
                                                            <Typography className="grand-total">Grand Total</Typography>
                                                            <Typography
                                                                className="grand-total">{supperClubPaymentData?.payment?.total}</Typography>
                                                        </Box>
                                                    </Box>
                                                }
                                            </Box>
                                            <Box className="row viewbreak">
                                                <Box>
                                                    <button type="submit" onClick={handleClick} className="submit-req">
                                                        Reserve a seat
                                                    </button>
                                                </Box>
                                                <Typography className="contact-text">
                                                    Our team will contact you regarding your protein and allergen
                                                    Information after booking is confirmed
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                }
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
                                        {({isSubmitting}) => (
                                            <Form>
                                                <Box className="row">
                                                    <Box className='form-field'>
                                                        <label className="form-label" htmlFor="number">GST
                                                            Number</label>
                                                        <Field className="form-control" type="text" id="number"
                                                               name="number" placeholder='Enter Location'/>
                                                        {/* <ErrorMessage name="number" /> */}
                                                    </Box>

                                                    <Box className='form-field'>
                                                        <label className="form-label" htmlFor="name">Registered Company
                                                            Name</label>
                                                        <Field className="form-control" type="text" id="name"
                                                               name="name" placeholder="Enter Location"/>
                                                        {/* <ErrorMessage name="name" /> */}
                                                    </Box>

                                                    <Box className='form-field'>
                                                        <label className="form-label" htmlFor="flatNumber">Building/
                                                            FlatNumber</label>
                                                        <Field className="form-control" type="text" id="flatNumber"
                                                               name="flatNumber" placeholder='Enter Location'/>
                                                        {/* <ErrorMessage name="flatNumber" /> */}
                                                    </Box>

                                                    <Box className='form-field'>
                                                        <label className="form-label" htmlFor="address">Street/area/
                                                            Road name</label>
                                                        <Field className="form-control" type="text" id="address"
                                                               name="address" placeholder="Enter Locationr"/>
                                                        {/* <ErrorMessage name="address" /> */}
                                                    </Box>

                                                    <Box className='form-field'>
                                                        <label className="form-label" htmlFor="pincode">Pincode</label>
                                                        <Field className="form-control" type="text" id="pincode"
                                                               name="pincode" placeholder='Enter Location'/>
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
            </MainBox>
        </React.Fragment>
    )
}
export default ScBookingSummary;
