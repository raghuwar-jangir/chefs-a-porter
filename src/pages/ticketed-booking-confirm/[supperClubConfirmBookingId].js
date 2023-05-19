import React, {useEffect, useState, useContext} from "react";
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
    Checkbox,
    TextareaAutosize,
    IconButton,
    Button
} from "@mui/material";
import Navbar from "../../components/NavbarComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import sGallery from "../../assets/images/sc-gallery.png";
import people from "../../assets/images/people.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dateGold from "../../assets/images/date.png";
import location from "../../assets/images/location.png";
import CreateIcon from "@mui/icons-material/Create";
import "../../assets/styles/fontStyle.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import giftCard from "../../assets/images/giftcard.png";
import CloseIcon from "@mui/icons-material/Close";
import {Form, Formik, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {navigate} from "gatsby";
import {DatePickerInput} from "rc-datepicker";
import InputAdornment from "@mui/material/InputAdornment";
import output from "../../assets/images/output.png";
import download from "../../assets/images/download.png";
import chefImg from "../../assets/images/chef-img.png";
import done from "../../assets/images/done.png";
import "../../assets/styles/fontStyle.css";
import support from "../../assets/images/support.png";
import * as _ from "lodash";
import Cookies from "js-cookie";
import moment from "moment/moment";
import useRazorpay from "react-razorpay";
import {useCallback} from "react";
import UsersContext from "../../context/UsersContext";
import axios from "axios";


const ScBookingConfirm = (props) => {
    const {
        supperClubConfirmPaymentData,
        setIsSupperClubCoupon,
        supperClubRazorpay,
        setBookingSuccessOpen,
        bookingSuccessOpen,
        voucher,
        setVoucher,
        setIsSupperBookingStatus
    } = useContext(UsersContext)
    const {supperClubConfirmBookingId} = props;
    const [inputValue, setInputValue] = useState("Chefsaporter/privatediner/AefDFC..");
    const [supperClubBookingData, setSupperClubBookingData] = useState()
    const [superClubBookingDetails, setSuperClubBookingDetails] = useState()
    const cookieValue2 = Cookies.get('supperClubBookingPersonalDetail');
    const [superClubPaymentData, setsuperClubPaymentData] = useState();
    const [scBookingOrderNo, setScBookingOrderNo] = useState();
    const [scPaymentId, setScPaymentId] = useState();
    const [showDiv, setShowDiv] = useState(false);

    const handleDivShow = () => {
        setShowDiv(!showDiv);
    };

    useEffect(() => {
        if (cookieValue2) {
            setSuperClubBookingDetails(JSON.parse(cookieValue2));
        }
        setsuperClubPaymentData(JSON.parse(localStorage.getItem('sprClubPaymentInfo')));
        setScBookingOrderNo(JSON.parse(localStorage.getItem('scBookingOrderNumber')));
        setScPaymentId(JSON.parse(localStorage.getItem('scPaymentNumber')));
    }, [cookieValue2])

    const handlePayment = () => {
        setIsSupperBookingStatus(true)
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(inputValue);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const validationSchema = Yup.object().shape({
        number: Yup.string().required("Number is required"),
        name: Yup.string().required("Name is required"),
        flatNumber: Yup.string().required("Flat number is required"),
        address: Yup.string().required("Address is required"),
        pincode: Yup.string().required("Pincode is required"),
    });

    const bookingSummaryValidationSchema = Yup.object().shape({
        contactNumber: Yup.string()
            .required('contactNumber is required'),
        email: Yup.string().email('Incorrect Email Id').required('please enter email'),
    });


    const initialValues = {
        number: "9876543210",
        name: "Teqzo International",
        flatNumber: "111",
        address: "Manchester",
        pincode: "400022",
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleBookingSuccessOpen = () => setBookingSuccessOpen(true);
    const handleBookingSuccessClose = () => setBookingSuccessOpen(false);

    const printDiv = () => {
        window.print();
    }

    console.log('supperClubConfirmPaymentData',supperClubConfirmPaymentData)
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
            paddingLeft: "10px",
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
            color: "#FBFBFB",
            fontFamily: "Proxima Nova Alt",
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
            fontFamily: "ProximaNovaA-Regular",
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#101418",
        },
        ".rating-people": {
            width: "24px",
            height: "24px",
            marginRight: "8px",
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
            fontFamily: "Proxima Nova Alt",
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
        ".date-stack": {
            color: "#101418",
            background: "rgba(189, 189, 189, 0.2)",
            padding: "16px 0px",
            placeContent: "center",
            display: "flex",
            placeItems: "center",
            margin: "0px -20px 20px",
            flexDirection: "row",
        },
        ".date-description": {
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "ProximaNovaA-Regular",
            lineHeight: "17px",
            letterSpacing: "0.06em",
            textAlign: "center",
            padding: "0px 6px",
        },
        ".line": {
            margin: "0px",
            fontSize: "15px",
        },
        ".confirm-details": {
            background: "rgba(189, 189, 189, 0.4)",
            padding: "16px 0px",
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "17px",
            textAlign: "center",
            color: "#080B0E",
            marginTop: "-16px",
            marginLeft: "-16px",
            marginRight: "-16px",
            marginBottom: "20px",
        },
        ".booking-box": {
            marginBottom: "20px",
        },
        ".chef-edit": {
            display: "flex",
            placeItems: "center",
            justifyContent: "space-between",
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
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
        },
        ".chef-edit-sub": {
            color: "#080B0E",
            fontWeight: 600,
        },
        ".chef-edit-sub:hover": {
            color: "#C6A87D",
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
            filter: "brightness(0)",
        },
        ".chef-profile-date": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
        },
        ".chef-box": {
            display: "flex",
            placeItems: "center",
            position: "relative",
            marginBottom: "20px",
        },
        ".booking-summary-title": {
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "25px",
            letterSpacing: "0.06em",
            color: "#080B0E",
            marginLeft: "0px",
            marginBottom: "0.5em",
        },
        ".chef-seats": {
            fontFamily: "ProximaNovaA-Regular",
            display: "flex",
            fontWeight: 400,
            alignItems: "center",
            fontSize: "14px",
            lineHeight: "17px",
            color: "#080B0E",
        },
        ".chef-people": {
            width: "18px",
            height: "18px",
            marginRight: "6px",
        },
        ".chef-people-no": {
            fontFamily: "ProximaNovaA-Regular",
            display: "flex",
            fontWeight: 400,
            alignItems: "center",
            fontSize: "14px",
            lineHeight: "17px",
            color: "#080B0E",
        },
        ".hr": {
            margin: "1rem 0 !important",
            opacity: "0.25",
            borderTop: "1px solid",
            border: '0'
        },
        ".email": {
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
            marginBottom: "33px",
            paddingTop: "16px",
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
            paddingTop: "16px",
        },
        ".form-group1": {
            display: "flex",
            flexWrap: "wrap",
            padding: "10px 0px",
        },
        ".voucher": {
            background: "#080B0E",
            color: "#FBFBFB",
            fontFamily: "ProximaNovaA-Regular",
            fontSize: "15px",
            lineHeight: "20px",
            fontWeight: 600,
            border: "0px",
            width: "30%",
            cursor: "pointer",
            padding: "10px",
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
            outline: "none",
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
            paddingBottom: "7px",
        },
        ".form-check": {
            marginBottom: "30px",
            minHeight: "1.5rem",
            paddingTop: "20px",
            background: "rgba(189, 189, 189, 0.2)",
            display: "flex",
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
            fontSize: "30px",
            bottom: "auto",
            color: "#080B0E",
            webkitTextStroke: "1px",
            top: "auto",
            // paddingTop:'20px'
        },
        ".gst-block": {
            marginTop: "35px",
            marginBottom: "30px",
            position: "relative",
        },
        ".input-check": {
            color: "#C6A87D !important",
            bottom: "8px !important",
        },
        ".gift-div": {
            marginTop: "5px",
        },
        ".gift-child": {
            marginBottom: "16px",
            display: "flex",
        },
        ".gift-img": {
            height: "22.5px",
            width: "32.01px",
            marginRight: "10px",
        },
        ".gift-text": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: 250,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#080B0E",
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
    });
    const styleOtp = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800,
        // height: 841,
        boxShadow: 24,
        margin: 'auto',
        maxHeight: 'calc(100% - 2.25em)',
        ".modal-content": {
            backgroundColor: "#DCD7CB !important",
            boxShadow: "0px 8px 12px rgb(0 0 0 / 16%)",
            padding: "40px 30px 20px",
            display: "flex",
            flexDirection: "column",
            pointerEvents: "auto",
            backgroundClip: "paddingBox",
            outline: "0",
        },
        ".close": {
            border: "none !important",
            background: "transparent",
            borderRadius: "0px",
            color: "#080B0E",
            cursor: "pointer",
        },
        '.pointer':{
            cursor:'pointer'
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
            color: "#080B0E",
            opacity: "1",
            borderTop: "1px solid",
        },
        ".booking-details h3": {
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "25px",
            color: "#080B0E",
            marginBottom: "16px",
            marginTop: "0px",
        },
        ".booking-details span": {
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "24px",
            color: "#080B0E",
            marginBottom: "16px",
            display: "block",
        },
        ".booking-details p": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#080B0E",
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
            color: "#080B0E",
            textAlign: "center",
            display: "block",
            marginBottom: "16px",
        },
        ".booking-details a img": {
            width: "18px",
            height: "18px",
            objectFit: "contain",
            filter: "brightness(0)",
            marginRight: "8px",
            verticalAlign: "text-top",
        },
        ".booking-details button": {
            border: "none",
            padding: "16px",
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "17px",
            color: "#080B0E",
            background: "#FBFBFB",
            cursor: "pointer",
        },
        ".booking-details button img": {
            width: "16px",
            height: "16px",
            marginRight: "8px",
            filter: "brightness(0)",
            verticalAlign: "text-top",
        },
        '.cursor-pointer': {
            cursor: 'pointer',
        },
        ".output": {
            width: "56px",
            height: "56px",
            objectFit: "contain",
            marginBottom: "16px",
            filter: "brightness(0)",
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
            color: "#080B0E",
            marginBottom: "16px",
            marginTop: "0px",
        },
        ".chef-edit": {
            display: "flex",
            placeItems: "center",
            position: "relative",
            marginBottom: "20px",
        },
        ".border-tb": {
            borderTop: "1px solid #080B0E",
            borderBottom: "1px solid #080B0E",
        },
        '.pt-16': {
            paddingTop: '16px'
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
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
            marginLeft: "10px",
        },
        ".chef-profile div": {
            marginBottom: "16px",
            display: "flex",
        },
        ".grid-box": {
            borderLeft: "10px solid #DCD7CB",
            background: "#FBFBFB",
            padding: "16px",
        },
        ".grid-box-1": {
            borderRight: "10px solid #DCD7CB",
            background: "#FBFBFB",
            padding: "16px",
        },
        ".chef-profile img": {
            height: "16px",
            width: "16px",
            objectFit: "contain",
            marginRight: "10px",
            filter: "brightness(0)",
        },
        ".chef-profile span": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "14px",
            lineHeight: "17px",
            color: "#080B0E",
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
            fontSize: "16px",
            lineHeight: "20px",
            color: "#080B0E",
            marginBottom: "10px",
            marginTop: "0px",
        },
        ".i": {
            position: "absolute",
            right: "0px",
            top: "0px",
            color: "#080B0E",
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "19px",
        },
        ".table-box span": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
            padding: "0px 0px 16px",
        },
        ".price": {
            fontFamily: "ProximaNovaA-Regular !important",
            fontStyle: "normal !important",
            fontWeight: "600 !important",
            fontSize: "14px !important",
            lineHeight: "17px !important",
            color: "#080B0E",
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
            borderTop: "1px solid #080B0E",
        },
        ".grand-total": {
            textDecoration: "underline",
        },
        ".grand-total:hover": {
            color: "#C6A87D",
        },
        ".tax": {
            textAlign: "left !important",
            fontFamily: "Proxima Nova Alt !important",
            fontStyle: "normal !important ",
            fontWeight: "300 !important",
            fontSize: "14px !important",
            lineHeight: "17px !important",
            color: "#080B0E",
        },
        ".share-link-copy": {
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "200%",
            color: "#080B0E",
            marginBottom: "4px",
        },
        ".form-check": {
            padding: "16px",
            display: "flex",
            background: "rgba(189, 189, 189, 0.2)",
            position: "relative",
            marginBottom: "0px",
        },
        ".form-check-label": {
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "28px",
            color: "#080B0E",
            marginBottom: "0px",
        },
        ".right-icon": {
            top: "auto",
            bottom: "auto",
            color: "#080B0E",
            position: "absolute",
            right: "10px",
        },
        ".flow": {
            marginTop: "36px",
        },
        ".table-box-span": {
            fontSize: "14px !important",
            lineHeight: "17px !important",
        },
        ".flow-heading": {
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "25px",
            color: "#080B0E",
            letterSpacing: "0.06em",
        },
        ".flow-ul": {
            paddingLeft: "1rem",
            marginBottom: "1rem",
            marginTop: "20px",
        },
        ".flow-li": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
            marginBottom: "16px",
        },
        ".on-time": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "12px",
            lineHeight: "15px",
            marginBottom: "0px",
            color: "#080B0E",
        },
        ".flow-policy": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "12px",
            lineHeight: "15px",
            marginBottom: "0px",
            color: "#080B0E",
            textDecoration: "underline",
        },
        ".input-group": {
            borderRadius: "0px",
            background: "#FBFBFB",
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "25px",
            color: "#BDBDBD",
            border: "1px solid #080B0E",
        },
        ".form-control": {
            paddingLeft: "16px",
            flex: "1",
            outline: 'none',
            backgroundColor: "transparent",
            border: "0.2px solid #080B0E",
            borderRadius: "0px",
            paddingRight: "0px",
            display: "block",
            width: "95%",
            marginTop: '4px',
            marginBottom: '16px',
            transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        },
        '.form-input': {
            fontFamily: 'DM Sans',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "25px",
            color: "#BDBDBD",
            height: '0px',
            padding: '18px 0px'
        },
        '.copy-btn': {
            borderRadius: '0px',
            background: '#222222',
            color: '#FBFBFB',
            borderColor: '#222222',
            textTransform: 'math-auto',
            fontFamily: 'Proxima Nova Alt'
        },
        '.input-icon': {
            padding: '0px !important'
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
    return (
        <React.Fragment>
            <MainBox>
                <Navbar heading="Ticketed" isColor={true}/>
                <div className="row supper-chef-details">
                    <div className="book-trad">
                        <ArrowBackIcon
                            // onClick={handleBookingSuccessOpen}
                            onClick={() => {
                                navigate(`/ticketed-booking-summary/${supperClubConfirmBookingId}`);
                                setIsSupperClubCoupon(false);
                            }}
                            className="arrow-left"
                        />
                        <div className="addons-title">Booking Confirm</div>
                    </div>
                </div>
                {supperClubConfirmPaymentData ? (
                    <Formik
                        initialValues={{
                            contactNumber: superClubBookingDetails?.contactNumber,
                            email: superClubBookingDetails?.email,
                            // voucher:''
                        }}
                        validationSchema={bookingSummaryValidationSchema}
                        onSubmit={(values) => {
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
                                                    {supperClubConfirmPaymentData?.event?.title}
                                                </Typography>
                                                <CreateIcon className="pencil-icon"/>
                                            </Box>
                                            <Box class="chef-edit">
                                                <Typography className="chef-edit-title">
                                                    Curated by <span
                                                    className="chef-edit-sub">{supperClubConfirmPaymentData?.event?.chef?.name}</span>
                                                </Typography>
                                                <Typography className="chef-seats">
                                                    <img className="chef-people" src={people}/>
                                                    <Typography
                                                        className="chef-people-no">{supperClubConfirmPaymentData?.event?.seats}</Typography>
                                                </Typography>
                                            </Box>
                                            <hr className="hr"/>
                                            <Box class="chef-profile">
                                                <Box className="chef-profile-detail">
                                                    <img className="chef-profile-icon" src={dateGold}/>
                                                    <Typography className="chef-profile-date">
                                                        {moment(supperClubConfirmPaymentData?.event?.dates?.[0]).format("MMMM D")} | {moment(supperClubConfirmPaymentData?.event?.timefrom, 'HH:mm').format('h:mm A')} - {moment(supperClubConfirmPaymentData?.event?.timetill, 'HH:mm').format('h:mm A')}
                                                    </Typography>
                                                </Box>
                                                <Box className="chef-profile-detail">
                                                    <img className="chef-profile-icon" src={location}/>
                                                    <Typography className="chef-profile-date">
                                                        {supperClubConfirmPaymentData?.event?.venue}
                                                    </Typography>
                                                </Box>
                                                <Box className="chef-profile-detail">
                                                    <img className="chef-profile-icon" src={people}/>
                                                    <Typography className="chef-profile-date">
                                                        {supperClubConfirmPaymentData?.diner_count} Diners
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
                                                        className="form-control"
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
                    +91 <KeyboardArrowDownIcon className="drop-down-2"/>
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
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Enter GSTIN for tax benefits (Optional)
                                                </label>
                                                <KeyboardArrowRightIcon
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={handleOpen}
                                                    className="forward-arrow"
                                                />
                                            </Box>
                                        </Box>
                                        <div className="gift-div">
                                            <div className="gift-child">
                                                <img className="gift-img" src={giftCard}/>
                                                <div className="gift-text">
                                                    If you have a coupon/ gift card, please enter details in the
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
                                        // xs={12}
                                        className="cust-details dinner-box"
                                    >
                                        <Box className="per-dinner adsss">
                                            <Box className="event-div">
                                                <img src={supperClubConfirmPaymentData?.event?.chef?.picture}  alt=""
                                                     className="per-dinner-img"/>
                                                <Box sx={{marginLeft: "12px"}}>
                                                    <Typography className="event-title">
                                                        {supperClubConfirmPaymentData?.event?.title}
                                                    </Typography>
                                                    <Typography className="event-subtitle">
                                                        Curated by{" "}
                                                        <a href="#" className="event-link">
                                                            {supperClubConfirmPaymentData?.event?.chef?.name}
                                                        </a>
                                                    </Typography>
                                                    <Typography className="rating-star">
                                                        <img className="rating-people" src={people}/>
                                                        <Typography
                                                            className="rating-star">{supperClubConfirmPaymentData?.event?.seats}</Typography>
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box className="experience-breakup">
                                                <div className="confirm-details">
                                                    Confirm Details before proceeding to pay
                                                </div>
                                                <Box className="ex-details">
                                                    <Typography className="ex-heading">
                                                        Price Breakdown
                                                    </Typography>
                                                    <ExpandMoreIcon className="ex-icon"/>
                                                </Box>
                                                {
                                                    !_.isEmpty(supperClubConfirmPaymentData) &&
                                                    <Box className="table table-borderless">
                                                        <Box className="table-box">
                                                            <Typography className="table-details">Ticket
                                                                Price</Typography>
                                                            <Typography
                                                                className="table-details">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(supperClubConfirmPaymentData?.payment?.ticket_price)}</Typography>
                                                        </Box>
                                                        <Box className="border-tb ">
                                                            <Box className="table-box ">
                                                                {console.log("###supperClubConfirmPaymentData?.payment",supperClubConfirmPaymentData?.payment)}
                                                                <Typography className="table-details table-details-pt">Sub
                                                                    Total</Typography>
                                                                <Typography
                                                                    className="table-details table-details-pt">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(supperClubConfirmPaymentData?.payment?.sub_total)}</Typography>
                                                            </Box>
                                                            {
                                                                supperClubConfirmPaymentData?.payment?.discount &&  (
                                                                        <Box className="table-box">
                                                                            <Typography
                                                                                className="table-details">Discount</Typography>
                                                                            <Typography
                                                                                className="table-details">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(supperClubConfirmPaymentData?.payment?.discount)}</Typography>
                                                                        </Box>
                                                                )
                                                            }
                                                            {
                                                                supperClubConfirmPaymentData?.payment?.voucher && (
                                                                        <Box className="table-box">
                                                                            <Typography
                                                                                className="table-details">Voucher</Typography>
                                                                            <Typography
                                                                                className="table-details">{supperClubConfirmPaymentData?.payment?.voucher}</Typography>
                                                                        </Box>
                                                                )
                                                            }
                                                        </Box>
                                                        <Box className="table-box">
                                                            <Typography className="table-details table-details-pt">GST
                                                                @5%</Typography>
                                                            <Typography
                                                                className="table-details table-details-pt">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(supperClubConfirmPaymentData?.payment?.GST)}</Typography>
                                                        </Box>
                                                        <Box className="table-box">
                                                            <Typography className="table-details">Service Charge
                                                                @10%</Typography>
                                                            <Typography
                                                                className="table-details">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(supperClubConfirmPaymentData?.payment?.service_charges)}</Typography>
                                                        </Box>
                                                        <Box className="table-box border">
                                                            <Typography className="grand-total">Grand Total</Typography>
                                                            <Typography
                                                                className="grand-total">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(supperClubConfirmPaymentData?.payment?.total)}</Typography>
                                                        </Box>
                                                        <Box className="form-group1">
                                                            <input
                                                                type="text"
                                                                name="voucher"
                                                                value={voucher}
                                                                onChange={(event) => {
                                                                    const capitalizedValue = event.target.value.toUpperCase();
                                                                    setVoucher(capitalizedValue)
                                                                }}
                                                                placeholder="Enter Your Voucher Coupon"
                                                                className="form-control"
                                                                autoComplete="off"
                                                                autoFocus
                                                            />
                                                            <button className="voucher" type="submit" onClick={() => {
                                                                setIsSupperClubCoupon(true)
                                                            }}>Apply Voucher
                                                            </button>
                                                        </Box>
                                                    </Box>
                                                }
                                            </Box>
                                            <Box className="row viewbreak">
                                                <Box>
                                                    <button
                                                        type="submit"
                                                        onClick={handlePayment}
                                                        className="submit-req"
                                                    >
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
                ) : (
                    <Formik
                        initialValues={{
                            contactNumber: superClubBookingDetails?.contactNumber,
                            email: superClubBookingDetails?.email,
                            // voucher:''
                        }}
                        validationSchema={bookingSummaryValidationSchema}
                        onSubmit={(values) => {
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
                                                    {superClubPaymentData?.event?.title}
                                                </Typography>
                                                <CreateIcon className="pencil-icon"/>
                                            </Box>
                                            <Box class="chef-edit">
                                                <Typography className="chef-edit-title">
                                                    Curated by <span
                                                    className="chef-edit-sub">{superClubPaymentData?.event?.chef?.name}</span>
                                                </Typography>
                                                <Typography className="chef-seats">
                                                    <img className="chef-people" src={people}/>
                                                    <Typography
                                                        className="chef-people-no">{superClubPaymentData?.event?.seats}</Typography>
                                                </Typography>
                                            </Box>
                                            <hr className="hr"/>
                                            <Box class="chef-profile">
                                                <Box className="chef-profile-detail">
                                                    <img className="chef-profile-icon" src={dateGold}/>
                                                    <Typography className="chef-profile-date">
                                                        {moment(superClubPaymentData?.event?.dates?.[0]).format("MMMM D")} | {moment(supperClubConfirmPaymentData?.event?.timefrom, 'HH:mm').format('h:mm A')} - {moment(supperClubConfirmPaymentData?.event?.timetill, 'HH:mm').format('h:mm A')}
                                                    </Typography>
                                                </Box>
                                                <Box className="chef-profile-detail">
                                                    <img className="chef-profile-icon" src={location}/>
                                                    <Typography className="chef-profile-date">
                                                        {superClubPaymentData?.event?.venue}
                                                    </Typography>
                                                </Box>
                                                <Box className="chef-profile-detail">
                                                    <img className="chef-profile-icon" src={people}/>
                                                    <Typography className="chef-profile-date">
                                                        {superClubPaymentData?.diner_count} Diners
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
                                                        className="form-control"
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
                    +91 <KeyboardArrowDownIcon className="drop-down-2"/>
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
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Enter GSTIN for tax benefits (Optional)
                                                </label>
                                                <KeyboardArrowRightIcon
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={handleOpen}
                                                    className="forward-arrow"
                                                />
                                            </Box>
                                        </Box>
                                        <div className="gift-div">
                                            <div className="gift-child">
                                                <img className="gift-img" src={giftCard}/>
                                                <div className="gift-text">
                                                    If you have a coupon/ gift card, please enter details in the
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
                                        // xs={12}
                                        className="cust-details dinner-box"
                                    >
                                        <Box className="per-dinner adsss">
                                            <Box className="event-div">
                                                <img src={superClubPaymentData?.event?.chef?.picture} alt=""
                                                     className="per-dinner-img"/>
                                                <Box sx={{marginLeft: "12px"}}>
                                                    <Typography className="event-title">
                                                        {superClubPaymentData?.event?.title}
                                                    </Typography>
                                                    <Typography className="event-subtitle">
                                                        Curated by{" "}
                                                        <a href="#" className="event-link">
                                                            {superClubPaymentData?.event?.chef?.name}
                                                        </a>
                                                    </Typography>
                                                    <Typography className="rating-star">
                                                        <img className="rating-people" src={people}/>
                                                        <Typography
                                                            className="rating-star">{superClubPaymentData?.event?.seats}</Typography>
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box className="experience-breakup">
                                                <div className="confirm-details">
                                                    Confirm Details before proceeding to pay
                                                </div>
                                                <Box className="ex-details">
                                                    <Typography className="ex-heading">
                                                        Price Breakdown
                                                    </Typography>
                                                    <ExpandMoreIcon className="ex-icon"/>
                                                </Box>
                                                {
                                                    !_.isEmpty(superClubPaymentData) &&
                                                    <Box className="table table-borderless">
                                                        <Box className="table-box">
                                                            <Typography className="table-details">Ticket
                                                                Price</Typography>
                                                            <Typography
                                                                className="table-details">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(superClubPaymentData?.payment?.ticket_price)}</Typography>
                                                        </Box>
                                                        <Box className="table-box border-tb ">
                                                            <Typography className="table-details table-details-pt">Sub
                                                                Total</Typography>
                                                            <Typography
                                                                className="table-details table-details-pt">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(superClubPaymentData?.payment?.sub_total)}</Typography>
                                                        </Box>
                                                        <Box className="table-box">
                                                            <Typography className="table-details table-details-pt">GST
                                                                @5%</Typography>
                                                            <Typography
                                                                className="table-details table-details-pt">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(superClubPaymentData?.payment?.GST)}</Typography>
                                                        </Box>
                                                        <Box className="table-box">
                                                            <Typography className="table-details">Service Charge
                                                                @10%</Typography>
                                                            <Typography
                                                                className="table-details">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(superClubPaymentData?.payment?.service_charges)}</Typography>
                                                        </Box>
                                                        {
                                                            superClubPaymentData?.payment?.discount && superClubPaymentData?.payment?.voucher ? (
                                                                <>
                                                                    <Box className="table-box">
                                                                        <Typography
                                                                            className="table-details">Discount</Typography>
                                                                        <Typography
                                                                            className="table-details">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(superClubPaymentData?.payment?.discount)}</Typography>
                                                                    </Box>
                                                                    <Box className="table-box">
                                                                        <Typography
                                                                            className="table-details">Voucher</Typography>
                                                                        <Typography
                                                                            className="table-details">{superClubPaymentData?.payment?.voucher}</Typography>
                                                                    </Box>
                                                                </>
                                                            ) : ('')
                                                        }
                                                        <Box className="table-box border">
                                                            <Typography className="grand-total">Grand Total</Typography>
                                                            <Typography
                                                                className="grand-total">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(superClubPaymentData?.payment?.total)}</Typography>
                                                        </Box>
                                                        <Box className="form-group1">
                                                            <input
                                                                type="text"
                                                                name="voucher"
                                                                value={voucher}
                                                                onChange={(event) => {
                                                                    const capitalizedValue = event.target.value.toUpperCase();
                                                                    setVoucher(capitalizedValue)
                                                                }}
                                                                placeholder="Enter Your Voucher Coupon"
                                                                className="form-control"
                                                                autoComplete="off"
                                                                autoFocus
                                                            />
                                                            <button className="voucher" type="submit" onClick={() => {
                                                                setIsSupperClubCoupon(true)
                                                            }}>Apply Voucher
                                                            </button>
                                                        </Box>
                                                    </Box>
                                                }
                                            </Box>
                                            <Box className="row viewbreak">
                                                <Box>
                                                    <button
                                                        type="submit"
                                                        onClick={handlePayment}
                                                        className="submit-req"
                                                    >
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
                )}
                <Modal
                    keepMounted
                    open={bookingSuccessOpen}
                    onClose={handleBookingSuccessClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                    sx={{overflowY: 'auto !important'}}
                >
                    <Box sx={styleOtp}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    className="close"
                                    onClick={handleBookingSuccessClose}
                                >
                                    <CloseIcon sx={{fontSize: "25px"}}/>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="booking-details">
                                        <img src={output} alt="" className="output"/>
                                        <h3>Booking Successful</h3>
                                        <span>Booking ID - {scBookingOrderNo}</span>
                                        <p>
                                            We look forward to serving you a conscious <br/>
                                            dining experience!
                                        </p>
                                        <a onClick={printDiv} className="pointer">
                                            <img src={download} alt=""/>
                                            Download Invoice
                                        </a>
                                        <button className="add-cal">
                                            <img src={dateGold} alt=""/>
                                            Add to calender
                                        </button>
                                    </div>
                                    <div className="bookingBox">
                                        <Grid container className="row booking-sum">
                                            <Grid
                                                item
                                                xl={6}
                                                lg={6}
                                                xs={6}
                                                md={6}
                                                sm={12}
                                                xs={12}
                                                className="grid-box-1"
                                            >
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <h4 className="booking-summary">Booking Summary</h4>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="chef-edit">
                                                            <img src={supperClubConfirmPaymentData?.event?.pictures?.[0]}
                                                                 alt=""/>
                                                            <h5>{supperClubConfirmPaymentData?.event?.chef?.name}</h5>
                                                        </div>
                                                        <div className="chef-profile">
                                                            <div>
                                                                <img src={dateGold} alt=""/>
                                                                <span>{moment(supperClubConfirmPaymentData?.event?.dates?.[0]).format("MMMM D")} | {moment(supperClubConfirmPaymentData?.event?.timefrom, 'HH:mm').format('h:mm A')} - {moment(supperClubConfirmPaymentData?.event?.timetill, 'HH:mm').format('h:mm A')}</span>
                                                            </div>
                                                            <div>
                                                                <img src={location} alt=""/>
                                                                <span>{supperClubConfirmPaymentData?.event?.venue}</span>
                                                            </div>
                                                            <div>
                                                                <img src={people} alt=""/>
                                                                <span>{supperClubConfirmPaymentData?.diner_count} Diners</span>
                                                            </div>
                                                        </div>
                                                        <hr className="hr"/>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="chef-profile done-div">
                                                            <div>
                                                                <img src={done} alt=""/>
                                                                <span>
                                  An email confirmation has been sent to
                                                                    {superClubBookingDetails?.email} <br/>
                                  and SMS sent to {superClubBookingDetails?.contactNumber}
                                </span>
                                                            </div>
                                                            <hr className="hr"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="share-link-copy">
                              <span>
                                Share link for the Experience with your guests
                              </span>
                                                            <form>
                                                                <TextField
                                                                    className="form-control"
                                                                    // value={inputValue}
                                                                    defaultValue='Chefsaporter/privatediner/AefDFC..'
                                                                    onChange={handleInputChange}
                                                                    fullWidth
                                                                    margin="normal"
                                                                    variant="standard"
                                                                    InputProps={{
                                                                        className: 'form-input',
                                                                        disableUnderline: true,
                                                                        endAdornment: (
                                                                            <IconButton className="input-icon"
                                                                                        onClick={handleCopyClick}>
                                                                                <Button
                                                                                    className="copy-btn">Copy</Button>
                                                                            </IconButton>
                                                                        ),
                                                                    }}
                                                                />
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <hr className="hr"/>
                                                    <div className="col-lg-12">
                                                        <div className="form-check">
                                                            <label
                                                                className="form-check-label"
                                                                for="flexCheckDefault"
                                                            >
                                                                GST Details
                                                            </label>
                                                            <KeyboardArrowRightIcon className="right-icon"/>
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
                                                xs={12}
                                                className="grid-box"
                                            >
                                                <div className="per-dinner">
                                                    <div className="experience-breakup">
                                                        <div className="ex-details">
                                                            <h5>Paid Amount</h5>
                                                            <span
                                                                className="i">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(superClubPaymentData?.payment?.total)}</span>
                                                        </div>
                                                        <div className="table table-borderless">
                                                            <div className="table-box">
                                                                <span>Razorpay Payment</span>
                                                            </div>
                                                            <div className="table-box">
                                                    <span className="table-box-span">
                                                    {moment(supperClubConfirmPaymentData?.event?.dates?.[0]).format("MMMM D")} | {moment(supperClubConfirmPaymentData?.event?.timefrom, 'HH:mm').format('h:mm A')} - {moment(supperClubConfirmPaymentData?.event?.timetill, 'HH:mm').format('h:mm A')}
                                                    </span>
                                                            </div>
                                                            <div className="table-box">
                                                    <span className="table-box-span">
                                                      Transaction ID {scPaymentId}
                                                    </span>
                                                            </div>
                                                            <div className="table-box">
                                                                <span className="grand-total cursor-pointer"
                                                                      onClick={handleDivShow}>
                                                                  View Payment Summary
                                                                </span>
                                                            </div>
                                                            {showDiv && <div>
                                                                <div className="table-box">
                                                                    <span>Ticket Price</span>
                                                                    <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(superClubPaymentData?.payment?.ticket_price)}</span>
                                                                </div>
                                                                <div className="table-box border-tb pt-16">
                                                                    <span>Sub Total</span>
                                                                    <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(superClubPaymentData?.payment?.sub_total)}</span>
                                                                </div>
                                                                <div className="table-box pt-16">
                                                                    <span>GST @5%</span>
                                                                    <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(superClubPaymentData?.payment?.GST)}</span>
                                                                </div>
                                                                <div className="table-box">
                                                                    <span>Service Charges @10%</span>
                                                                    <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(superClubPaymentData?.payment?.service_charges)}</span>
                                                                </div>
                                                                <div className="table-box border pt-16">
                                                                    <span className="price">Grand Total</span>
                                                                    <span
                                                                        className="price">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(superClubPaymentData?.payment?.total)}</span>
                                                                </div>
                                                            </div>}
                                                        </div>
                                                    </div>
                                                    <div className="flow">
                            <span className="flow-heading">
                              Important Experience Flow
                            </span>
                                                        <ul className="flow-ul">
                                                            {supperClubConfirmPaymentData?.event?.what_to_expect.map((item, index)=>{
                                                                return(
                                                                    <li className="flow-li" key={index}>{item}</li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                    <span className="on-time">
                            *We requests guests to be on time as we start
                            service on time
                          </span>
                                                </div>
                                                <span className="flow-policy">
                          **Cancellation Policy
                        </span>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </MainBox>
        </React.Fragment>
    );
};
export default ScBookingConfirm;
