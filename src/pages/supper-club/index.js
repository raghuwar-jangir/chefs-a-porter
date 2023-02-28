import {
    Box,
    Button,
    Divider,
    Grid,
    MobileStepper,
    Stack,
    styled, TextareaAutosize, TextField,
    Typography,
} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Navigation} from "swiper";
import React, {useState, useRef} from "react";
import {useTheme} from "@mui/material/styles";
import RestorentImg from "../../assets/images/RestorentImg.png";
import RestorentImgMobile from "../../assets/images/RestorentImgMobile.png";
import {isMobile, MobileView} from "react-device-detect";
import CardChefComponent from "../../components/CardChefComponent";
import DiningPage from "../../components/DiningPage";
import ChefCarousel from "../../components/ChefCarousel";
import SwipeableViews from "react-swipeable-views";
import {autoPlay} from "react-swipeable-views-utils";
import Footer from "../../components/Footer";
import DetailsCarousel from "../../components/DetailsCarousel (1)";
import Treaty from "../../components/Treaty";
import NeedHelp from "../../components/NeedHelp";
import sampleText from "../../assets/images/SupperClub.png";
import arrow from "../../assets/images/arrow.png";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import GoogleMapReact from "google-map-react";
import {Link} from "gatsby";
import pLogo from '../../assets/images/valet.png';
import ChefMakoCarousel from "../../components/ChefMakoCarousel";
import Navbar from "../../components/NavbarComponent";
import SuperClubPopUpCarousel from "../../components/SuperClubPopUpCarousel";
import SupperClubDetailsCarousel from "../../components/SupperClubDetailsCarousel";
import SupperClubTreatyComponent from "../../components/SupperClubTreatyComponent";
import NeedHelpSmallComponent from "../../components/NeedHelpSmallComponent";
import backgroungLogo from '../../assets/images/menuBackground.png'
import CloseIcon from "@mui/icons-material/Close";
import {Form, Formik} from "formik";
import moment from "moment";
import * as _ from "lodash";
import {DatePickerInput} from "rc-datepicker";
import InputAdornment from "@mui/material/InputAdornment";
import Modal from "@mui/material/Modal";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    RestorentImgMobile,
    RestorentImgMobile,
    RestorentImgMobile,
    RestorentImgMobile,
    RestorentImgMobile,
];

const SupperClubChaefPage = () => {
    const [showCarousel, setShowCarousel] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpenPopup = () => setOpen(true);
    const handleClosePopup = () => setOpen(false);

    const handleImageClick = () => {
        setShowCarousel(true);
    };

    const handleClose = () => {
        setShowCarousel(false);
    };
    const AnyReactComponent = ({text}) => <div>{text}</div>;
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    const BoxWrapper = styled(Box)(() => ({
        ".header-club": {
            padding: "20px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#DCD7CB",
        },
        ".main-box": {
            padding: "120px 120px",
            background: "#DCD7CB",
        },
        ".main-img": {
            width: "100%",
            height: "390px",
            display: "block",
            objectFit: 'cover',
            boxShadow: '0px 8px 16px rgb(0 0 0 / 16%)',
            cursor: 'pointer'

        },
        ".main-img-1": {
            width: "100%",
            height: "165px",
            boxShadow: '0px 8px 16px rgb(0 0 0 / 16%)',
            objectFit: 'cover',
        },
        ".main-img-2": {
            width: "100%",
            height: "205px",
            boxShadow: '0px 8px 16px rgb(0 0 0 / 16%)',
            objectFit: 'cover',
        },
        ".sub-box": {
            padding: "40px 0px",
        },
        ".sub-box-heading": {
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "45px",
            letterSpacing: "0.06em",
            color: "#080B0E",
        },
        ".sub-box-text": {
            paddingTop: "8px",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "19px",
        },
        ".sub-box-2": {
            background: "#FBFBFB",
            padding: "40px 30px",
            marginTop: "40px",
        },
        ".sub-text-price": {
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "44px",
            color: "#080B0E",
        },
        ".sub-text": {
            fontWeight: 300,
            fontSize: "20px",
            lineHeight: "24px",
            color: "#080B0E",
        },
        ".experience-date-box": {
            padding: "20px 0px",
        },
        ".experience-date-text": {
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "25px",
            color: "#080B0E",
        },
        ".experience-date-sub-test": {
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#080B0E",
        },
        ".main-date": {
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: "39px",
            color: "#080B0E",
            paddingRight: "10px",
        },
        ".date-month": {
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "17px",
        },
        ".date-day": {
            fontWeight: 250,
            fontSize: "14px",
            lineHeight: "17px",
        },
        ".time-btn": {
            border: "0.5px solid #222222",
            borderRadius: "0px",
            color: "#000",
            marginRight: "8px",
            height: "50px",
            display: 'inline-grid',
            textTransform: 'lowercase',
            width: '48%',
            padding: '8px 4px'
        },
        ".time-btn:focus": {
            backgroundColor: '#FBFBFB',
            color: "#000",
            border: '0.5px solid #F8A039'
        },
        ".time-btn:hover": {
            backgroundColor: '#FBFBFB'
        },
        ".end-time-btn:hover": {
            backgroundColor: '#FBFBFB'
        },
        ".end-time-btn": {
            border: "0.5px solid #222222",
            borderRadius: "0px",
            color: "#000",
            height: "50px",
            display: 'inline-grid',
            textTransform: 'lowercase',
            width: '48%',
            padding: '8px 4px'


        },
        ".end-time-btn:focus": {
            backgroundColor: '#FBFBFB',
            color: "#000",
            border: '0.5px solid #F8A039'
        },
        ".next-grid": {
            display: "inline",
        },
        ".date-time-box": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0px",
        },
        ".invite-btn": {
            border: "1px solid #000",
            background: "#000",
            borderRadius: "0px",
            color: "#fff",
            height: "auto",
            width: "200px",
        },
        ".invite-friends-text": {
            fontWeight: 700,
            fontSize: "30px",
            lineHeight: "37px",
        },
        ".experience-text": {
            fontWeight: 300,
            fontSize: "20px",
            lineHeight: "24px",
        },
        ".last-cantain": {
            display: "flex",
            justifyContent: "space-between",
            padding: "41.5px 120px",
        },
        ".footer-box": {
            display: "inline",
        },
        ".mobile-view-price-text": {
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px",
        },
        ".mobile-view-diner": {
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "19px",
        },
        ".date-stack": {
            color: "#FBFBFB",
            background: "#101418",
            padding: "16px 13px",
            placeContent: "center",
        },
        ".date-description": {
            fontSize: "20px",
            fontWeight: 400,
            fontFamily: "ProximaNovaA-Regular",
            lineHeight: "24px",
            letterSpacing: " 0.06em",
        },
        ".blowOut-description": {
            padding: "20px 16px",
        },
        ".blowOut-title": {
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: 700,
        },
        ".slots": {
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "4px",
        },
        ".slot-title": {
            fontSize: "16px",
        },
        ".slot-title2": {
            fontSize: "14px",
        },
        ".line": {
            margin: "0px",
            marginLeft: "7px",
            fontSize: "22px",
        },
        ".css-e53awj-MuiStack-root>:not(style)+:not(style)": {
            marginLeft: "6px",
        },
        ".tab-box": {
            border: "1px solid black",
            borderRadius: "1px",
        },
        ".box-contain": {
            display: "grid",
            gridTemplate: "repeat(1, 1fr) / repeat(2, 1fr)",
            background: "#DCD7CB",
            gap: "12px",
            marginTop: "20px",
        },
        ".box1": {
            padding: "40px 16px",
            background: "#FBFBFB",
            width: "92%",
            marginTop: "20px",
            boxShadow: "0px 16.3378px 20.4223px rgb(0 0 0 / 6%)",
            position: "relative",
            backgroundImage: `url(${backgroungLogo})`,
            backgroundSize: '212.4px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        },
        ".box2": {
            padding: "40px 16px",
            background: "#FBFBFB",
            width: "93%",
            marginTop: "20px",
            boxShadow: "0px 16.3378px 20.4223px rgb(0 0 0 / 6%)",
            position: "relative",
        },
        ".detail-box": {
            marginBottom: "36.69px",
        },
        ".menu-title": {
            margin: "0px",
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "25px",
            letterSpacing: "0.06em",
            color: "#080B0E",
            marginBottom: "8px",
        },
        ".menu-sub": {
            margin: "0px",
            fontWeight: "400",
            fontSize: "1rem",
            lineHeight: "1.5",
            letterSpacing: "0.00938em",
        },
        ".css-130r91k-JoyTabList-root": {
            width: "96% !important",
            left: "2% !important",
        },
        ".map-heading": {
            fontFamily: "Bon Vivant",
            fontSize: "20px",
            lineHeight: "0px",
            marginBottom: "14px",
            color: "#080B0E",
            marginTop: "5%",
            marginLeft: "2%",
        },
        ".map-link": {
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "24px",
            textDecoration: "underline",
            color: "#080B0E",
            marginBottom: "16px",
            display: "block",
            marginLeft: "2%",
        },
        ".map-link:hover": {
            color: "#C6A87D"
        },
        '.map-container': {
            backgroundColor: '#DCD7CB',
            paddingTop: '2%',
            marginTop: '2%'
        },
        '.logo': {
            width: '24px',
            height: '24px',
            objectFit: 'contain',
        },
        '.valet': {
            display: 'flex',
            alignItems: "center",
            paddingBottom: "8px",
            marginLeft: '16px'
        },
        '.down-heading': {
            fontFamily: 'Bon Vivant',
            fontWeight: '100',
            fontSize: "20px",
            lineHeight: "24px",
            marginLeft: '10px',
            color: '#080B0E',
            textDecoration: "underline",
        },
        '.child-container': {
            position: 'relative',
        },
        '.show-btn': {
            position: 'absolute',
            bottom: '45px',
            right: '3%',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '100',
            fontSize: '14px',
            lineHeight: '19px',
            color: '#080B0E',
            background: '#FBFBFB',
            boxShadow: '0px 20px 24px rgb(0 0 0 / 6%)',
            borderRadius: '1px'
        },
        '.show-btn:hover': {
            color: '#C6A87D',
            backgroundColor: '#FBFBFB',
        },
        '.show-btn:focus': {
            backgroundColor: '#FBFBFB',
            color: '#C6A87D'
        },
        '.btn-detail': {
            lineHeight: '0.5',
            fontSize: '13px',
            textTransform: 'lowercase',
            fontFamily: 'ProximaNovaA-Regular',
        },
        ".submit-request": {
            color: '#FBFBFB',
            backgroundColor: '#000',
            width: '100%',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '100',
            fontSize: '16px',
            lineHeight: '19px',
            padding: '18.5px 10px',
            marginTop: '20px',
            borderRadius: '0px',
            textTransform: 'math-auto'
        },
        ".submit-request:hover": {
            backgroundColor: '#000'
        },
        '.time-btn-box': {
            width: '57%'
        },
        '.chef-carousel': {
            borderLeft: '1px solid black',
            borderRight: '1px solid black'
        },
        '.container': {
            position: 'relative'
        },
        '.carousel-popup': {
            position: 'fixed',
            top: '0px',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '5'
        },
        '.close-button': {
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontSize: '24px',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            zIndex: '10'
        },
        '.swiper': {
            width: '75%',
            height: '100%'
        },
        '.sub-div': {
            background: 'black'
        },
        "@media (min-width: 768px) and (max-width:1024px)": {
            '.box1': {
                width: '87%'
            },
            '.box2': {
                width: '87%'
            },
            '.time-btn': {
                marginRight: '5px',
                fontSize: '13px',
                padding: '0px 0px',
                lineHeight: '15px',
            },
            '.end-time-btn': {
                fontSize: '13px',
                padding: '0px 0px',
                lineHeight: '15px'
            },
            '.time-btn-box': {
                width: '52%'
            },
        },
        "@media (min-width: 1px) and (max-width:768px)": {
            ".css-1fh2pai-MuiGrid-root ": {
                width: "100% !important",
                maxWidth: 'none'
            },
            ".grid-box-2": {
                flexDirection: 'column'
            },
            '.grid-child-box': {
                maxWidth: '100%'
            },
            '.sub-box-2': {
                marginTop: '0px'
            }
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            ".main-box": {
                padding: "0px",
            },
            ".next-grid": {
                display: "none",
            },

            ".footer-box": {
                display: "none",
            },
            '.box1': {
                width: '85%'
            },
            '.box2': {
                width: '84%'
            }
        },
    }));

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 398,
        boxShadow: 24,
        '.modal-content': {
            backgroundColor: '#DCD7CB !important',
            boxShadow: '0px 8px 12px rgb(0 0 0 / 16%)',
            padding: '40px 30px 20px',
            // position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            // width: '100%',
            pointerEvents: 'auto',
            backgroundClip: 'paddingBox',
            outline: '0'
        },
        '.form-control': {
            backgroundColor: 'transparent',
            border: '0px',
            borderBottom: '0.25px solid #080B0E',
            borderRadius: '0px',
            paddingLeft: '0px',
            paddingRight: '0px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#222222',
            width: '100%'
        },
        '.form-control:focus-visible': {
            outline: '0px'
        },
        '.modal-header': {
            padding: '0px',
            marginBottom: '30px',
            borderBottom: 'none',
            position: 'relative',
            justifyContent: 'flex-start',
        },
        '.modal-header button': {
            padding: '0px',
            border: '0px',
            position: 'absolute',
            right: '0px',
            bottom: '8px',
            background: 'transparent',
            cursor: 'pointer'
        },
        '.schedule-label': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
            marginBottom: '8px',
            display: 'block',
        },
        '.schedule-heading': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '30px',
            color: '#080B0E',
            marginBottom: '8px',
            marginTop: '0px',
            display: 'block',
            textAlign: 'center'
        },
        '.mb-3': {
            marginBottom: '1rem'
        },
        ".btn-primary": {
            border: 'none !important',
            background: "#080B0E",
            width: '100% !important',
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "19px",
            borderRadius: "0px",
            color: "#FBFBFB",
            textTransform: "capitalize",
            fontFamily: 'Proxima Nova',
            height: "40px !important",
            marginTop: "0px",
        },
        '.react-datepicker-component .react-datepicker-input input': {
            paddingLeft: '5px',
            color: '#080B0E',
        },
        '.icon-rc-datepicker': {
            color: '#080B0E !important',
        },
        '.react-datepicker-component .react-datepicker-input.is-open': {
            background: 'transparent',
            border: '0px',
            borderRadius: '0px',
        },
        '.react-datepicker-component .react-datepicker-input': {
            background: 'transparent',
            border: '0px',
            borderRadius: '0px',
        },
        '.react-datepicker-component .react-datepicker-input:hover': {
            background: 'transparent',
            border: '0px',
            borderRadius: '0px'
        },
        '.react-datepicker-component .react-datepicker-input.has-value input': {
            color: '#080B0E !important',
        },
    };

    return (
        <React.Fragment>
            <BoxWrapper>
                <Navbar/>
                <Box className="main-box">
                    <Grid container spacing={{md: 2}}>
                        <Grid item xl={7} md={7} sm={6} xs={12}>
                            <Box className="container">
                                <img
                                    src={RestorentImg}
                                    alt="RestorentImg"
                                    className="main-img"
                                    onClick={handleImageClick}
                                />
                                {showCarousel && (
                                    <Box className="carousel-popup">
                                        <button className="close-button" onClick={handleClose}>
                                            X
                                        </button>
                                        <Box className="carousel">
                                            <SuperClubPopUpCarousel/>
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        </Grid>
                        <Grid item md={5} sm={6} xs={12} xl={5} className="next-grid">
                            <Grid className="child-container" container spacing={2}>
                                <Grid item md={6} sm={6} xs={6} xl={6}>
                                    <img
                                        src={RestorentImg}
                                        alt="RestorentImg"
                                        className="main-img-1"
                                        onClick={handleImageClick}
                                    />
                                </Grid>
                                <Grid item md={6} sm={6} xs={6} xl={6}>
                                    <img
                                        src={RestorentImg}
                                        alt="RestorentImg"
                                        className="main-img-1"
                                        onClick={handleImageClick}
                                    />
                                </Grid>
                                <Grid item md={6} sm={6} xs={6} xl={6}>
                                    <img
                                        src={RestorentImg}
                                        alt="RestorentImg"
                                        className="main-img-2"
                                        onClick={handleImageClick}
                                    />
                                </Grid>
                                <Grid item md={6} sm={6} xs={6} xl={6}>
                                    <img
                                        src={RestorentImg}
                                        alt="RestorentImg"
                                        className="main-img-2"
                                        onClick={handleImageClick}
                                    />
                                    <Button className="show-btn" onClick={handleOpenPopup}>Show All Photos</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className="grid-box-2" container spacing={{md: 2}}>
                        <Grid item xl={7} md={7} sm={6} xs={12}>
                            <Box className="sub-box">
                                <Typography className="sub-box-heading">
                                    The Big Fat Parsi Blowout
                                </Typography>
                                <Typography className="sub-box-text">
                                    Curated by{" "}
                                    <span>
                    <b>Chef Mako</b>
                  </span>
                                </Typography>
                                <Typography className="sub-box-text">2 Slots Left!</Typography>
                            </Box>
                            <Box>
                                <Stack
                                    className="date-stack"
                                    direction="row"
                                    divider={<Divider orientation="vertical" flexItem/>}
                                    spacing={2}
                                >
                                    <Typography className="date-description">April 9</Typography>
                                    <span className="line">|</span>
                                    <Typography className="date-description">
                                        {" "}
                                        7:30 PM - 10 PM
                                    </Typography>
                                    <span className="line">|</span>
                                    <Typography className="date-description">
                                        Blue Cafe, Kamanahalli
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box
                                sx={{
                                    paddingTop: "16px",
                                    paddingBottom: "0px",
                                    background: "#FBFBFB",
                                }}
                            >
                                <Tabs defaultValue={0} sx={{"--Tabs-gap": "0px", backgroundColor: '#FBFBFB'}}>
                                    <TabList>
                                        <Tab sx={{
                                            '&:focus': {
                                                color: '#FBFBFB',
                                                backgroundColor: '#101418',
                                            },
                                        }} className="tab-box" value={0}>
                                            Chef
                                        </Tab>
                                        <Tab sx={{
                                            '&:focus': {
                                                color: '#FBFBFB',
                                                backgroundColor: '#101418',
                                            },
                                        }} className="tab-box" value={1}>
                                            Menu
                                        </Tab>
                                        <Tab sx={{
                                            '&:focus': {
                                                color: '#FBFBFB',
                                                backgroundColor: '#101418',
                                            },
                                        }} className="tab-box" value={2}>
                                            Venue
                                        </Tab>
                                    </TabList>
                                    <TabPanel value={0} sx={{p: 0}}>
                                        <CardChefComponent bgColor="#FBFBFB"/>
                                        <Box className='chef-carousel'>
                                            <ChefMakoCarousel/>
                                            <ChefCarousel/>
                                            <SupperClubDetailsCarousel/>
                                            <SupperClubTreatyComponent/>
                                        </Box>
                                        <NeedHelpSmallComponent/>
                                    </TabPanel>
                                    <TabPanel value={1} sx={{p: 0}}>
                                        <Box className="box-contain">
                                            <Box className="box1" style={{backgroundImage: `url(${backgroungLogo})`}}>
                                                <Box className="detail-box">
                                                    <Typography className="menu-title">
                                                        Course 1
                                                    </Typography>
                                                    <Typography className="menu-sub">
                                                        Seafood Soup | Roasted Garlic Foam | Snail butter
                                                    </Typography>
                                                </Box>
                                                <Box className="detail-box">
                                                    <Typography className="menu-title">
                                                        Course 2
                                                    </Typography>
                                                    <Typography className="menu-sub">
                                                        Beetrott Sweet and Sour | Granny Smiith | Chicken
                                                        Liver Spread | Tamarind served with croutons, curry
                                                        leaves powder and oil, onion pickles
                                                    </Typography>
                                                </Box>
                                                <Box className="detail-box">
                                                    <Typography className="menu-title">
                                                        Course 3
                                                    </Typography>
                                                    <Typography className="menu-sub">
                                                        Bread Skinned Fish | Grenoblaise | Smoked Pumpkin
                                                        Served with white wine and mushroom sauce
                                                    </Typography>
                                                </Box>
                                                <Box className="detail-box">
                                                    <Typography className="menu-title">
                                                        Course 4
                                                    </Typography>
                                                    <Typography className="menu-sub">
                                                        Braised Lamb & Vadouvan | Gremolata | Carrot Served
                                                        withh cashew crumble and potato cappuccino
                                                    </Typography>
                                                </Box>
                                                <Box className="detail-box">
                                                    <Typography className="menu-title">
                                                        Course 5
                                                    </Typography>
                                                    <Typography className="menu-sub">
                                                        Citrus Variation| Walnut | Yogurt Paired with Five
                                                        reserves Chemin Blanc & Five Reserves Pintoge
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box className="box2">
                                                <Box className="detail-box">
                                                    <Typography className="menu-title">
                                                        Course 1
                                                    </Typography>
                                                    <Typography className="menu-sub">
                                                        Seafood Soup | Roasted Garlic Foam | Snail butter
                                                    </Typography>
                                                </Box>
                                                <Box className="detail-box">
                                                    <Typography className="menu-title">
                                                        Course 2
                                                    </Typography>
                                                    <Typography className="menu-sub">
                                                        Beetrott Sweet and Sour | Granny Smiith | Chicken
                                                        Liver Spread | Tamarind served with croutons, curry
                                                        leaves powder and oil, onion pickles
                                                    </Typography>
                                                </Box>
                                                <Box className="detail-box">
                                                    <Typography className="menu-title">
                                                        Course 3
                                                    </Typography>
                                                    <Typography className="menu-sub">
                                                        Bread Skinned Fish | Grenoblaise | Smoked Pumpkin
                                                        Served with white wine and mushroom sauce
                                                    </Typography>
                                                </Box>
                                                <Box className="detail-box">
                                                    <Typography className="menu-title">
                                                        Course 4
                                                    </Typography>
                                                    <Typography className="menu-sub">
                                                        Braised Lamb & Vadouvan | Gremolata | Carrot Served
                                                        withh cashew crumble and potato cappuccino
                                                    </Typography>
                                                </Box>
                                                <Box className="detail-box">
                                                    <Typography className="menu-title">
                                                        Course 5
                                                    </Typography>
                                                    <Typography className="menu-sub">
                                                        Citrus Variation| Walnut | Yogurt Paired with Five
                                                        reserves Chemin Blanc & Five Reserves Pintoge
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel value={2} sx={{p: 0}}>
                                        <Box className='map-container'>
                                            <Box style={{backgroundColor: '#FBFBFB', paddingTop: '2%'}}>
                                                <Box className="map-heading">Blue Cafe, Kamanahalli</Box>
                                                <Link className="map-link">Get Directions</Link>
                                                <Box
                                                    style={{
                                                        height: "70vh",
                                                        width: "97%",
                                                        padding: "16px 16px 16px 16px",
                                                    }}
                                                >
                                                    <GoogleMapReact
                                                        bootstrapURLKeys={{key: ""}}
                                                        defaultCenter={defaultProps.center}
                                                        defaultZoom={defaultProps.zoom}
                                                    >
                                                        <AnyReactComponent
                                                            lat={59.955413}
                                                            lng={30.337844}
                                                            text="My Marker"
                                                        />
                                                    </GoogleMapReact>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box class="valet">
                                            <img className="logo" src={pLogo}/>
                                            <Typography className="down-heading">Valet Available</Typography>
                                        </Box>
                                    </TabPanel>
                                </Tabs>
                            </Box>
                        </Grid>
                        <Grid className="grid-child-box" item md={5} sm={6} xs={12} xl={5}>
                            <Box className="sub-box-2">
                                <Box
                                    sx={{
                                        display: "flex",
                                        paddingBottom: "20px",
                                        borderBottom: "0.5px solid #080B0E",
                                    }}
                                >
                                    <Typography className="sub-text-price">
                                        ₹ 2,500 <sub className="sub-text">Per Diner</sub>
                                    </Typography>
                                </Box>
                                <Box className="experience-date-box">
                                    <Typography className="experience-date-text">
                                        Experience Date
                                    </Typography>
                                    <Typography className="experience-date-sub-text">
                                        Pick your preferred experience date
                                    </Typography>
                                </Box>
                                <Box className="date-time-box">
                                    <Box sx={{display: "flex", alignItems: "center"}}>
                                        <Typography className="main-date">12</Typography>
                                        <Box>
                                            <Typography className="date-month">November</Typography>
                                            <Typography className="date-day">Wednesday</Typography>
                                        </Box>
                                    </Box>
                                    <Box className='time-btn-box'>
                                        <Button size="large" className="time-btn">12:00 - 1:00pm<Typography
                                            className="btn-detail">filling fast</Typography></Button>
                                        <Button size="large" className="end-time-btn">7:30 - 9:00pm</Button>
                                    </Box>
                                </Box>
                                <Box className="date-time-box">
                                    <Box sx={{display: "flex", alignItems: "center"}}>
                                        <Typography className="main-date">13</Typography>
                                        <Box>
                                            <Typography className="date-month">November</Typography>
                                            <Typography className="date-day">Thursday</Typography>
                                        </Box>
                                    </Box>
                                    <Box className='time-btn-box'>
                                        <Button size="large" style={{backgroundColor: '#BDBDBD', border: '#BDBDBD'}}
                                                disabled className="time-btn">12:00 - 1:00pm<Typography
                                            className="btn-detail">Sold Out</Typography></Button>
                                        <Button size="large" className="end-time-btn">7:30 - 9:00pm</Button>
                                    </Box>
                                </Box>
                                <Box className="date-time-box">
                                    <Box sx={{display: "flex", alignItems: "center"}}>
                                        <Typography className="main-date">14</Typography>
                                        <Box>
                                            <Typography className="date-month">November</Typography>
                                            <Typography className="date-day">Friday</Typography>
                                        </Box>
                                    </Box>
                                    <Box className='time-btn-box'>
                                        <Button size="large" className="time-btn">12:00 - 1:00pm</Button>
                                        <Button size="large" className="end-time-btn">7:30 - 9:00pm</Button>
                                    </Box>
                                </Box>
                                <Box className="date-time-box">
                                    <Box sx={{display: "flex", alignItems: "center"}}>
                                        <Typography className="main-date">15</Typography>
                                        <Box>
                                            <Typography className="date-month">November</Typography>
                                            <Typography className="date-day">Saturday</Typography>
                                        </Box>
                                    </Box>
                                    <Box className='time-btn-box'>
                                        <Button size="large" className="time-btn">12:00 - 1:00pm</Button>
                                        <Button size="large" className="end-time-btn">7:30 - 9:00pm<Typography
                                            className="btn-detail">filling fast</Typography></Button>
                                    </Box>
                                </Box>
                                <Button type='submit' className="submit-request">Submit Request</Button>
                                <Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <NeedHelp/>
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClosePopup}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <Box className="modal-content">
                            <Box className="modal-header">
                                <Typography id="exampleModalLabel" className='schedule-heading modal-title'>Schedule a
                                    call</Typography>
                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="close"
                                        onClick={handleClosePopup}>
                                    <CloseIcon/>
                                </button>
                            </Box>
                            <Box className="container-fluid">
                                <Formik
                                    initialValues={{
                                        day: new Date(),
                                        time: new Date().getHours() + ':' + new Date().getMinutes(),
                                        contactNumber: '',
                                        queryMessage: '',
                                    }}
                                    onSubmit={(values) => {
                                        const experienceData = {
                                            ...values,
                                            day: moment(_.get(values, 'day')).format("ddd,DD MMM "),
                                        }
                                        console.log("value===>", values)
                                        console.log("experienceData===>", experienceData)
                                    }}
                                >
                                    {({values, handleChange, handleSubmit, setFieldValue}) => (
                                        <Form onSubmit={handleSubmit}>
                                            <Box className="row">
                                                <Box className="mb-3">
                                                    <label className="schedule-label">Day</label>
                                                    <DatePickerInput
                                                        name="day"
                                                        value={values.day}
                                                        displayFormat="ddd,DD MMM"
                                                        returnFormat="ddd,DD MMM"
                                                        className="form-control"
                                                        onChange={(dateString) => setFieldValue('day', dateString)}
                                                        defaultValue={values.day}
                                                    />
                                                </Box>
                                                <Box className="mb-3  ">
                                                    <label className="schedule-label">Time</label>
                                                    <Box
                                                        className="input-group">
                                                        <TextField type="time" name="time"
                                                                   value={values.time}
                                                                   onChange={handleChange}
                                                                   defaultValue={values.time}
                                                                   className="form-control"
                                                                   autoComplete="off"
                                                                   variant="standard"
                                                                   InputProps={{
                                                                       disableUnderline: true,
                                                                       autoCapitalize: true,
                                                                   }}/>
                                                    </Box>

                                                </Box>
                                                <Box className="mb-3">
                                                    <label className="schedule-label">Contact
                                                        Number</label>
                                                    <Box className="form-group">
                                                        <TextField type="tel" name="contactNumber"
                                                                   className="form-control"
                                                                   placeholder="10 digit number"
                                                                   value={values.contactNumber}
                                                                   onChange={handleChange}
                                                                   autoComplete="off"
                                                                   variant="standard"
                                                                   InputProps={{
                                                                       disableUnderline: true,
                                                                       startAdornment: <InputAdornment
                                                                           position="start">91+</InputAdornment>
                                                                   }}/>
                                                    </Box>
                                                </Box>
                                                <Box className="mb-3">
                                                    <label className="schedule-label">Write your query below</label>
                                                    <TextareaAutosize
                                                        name="queryMessage"
                                                        value={values.queryMessage}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                        maxRows={2}
                                                        maxLength={500}
                                                        placeholder="Eg. Menu, Decor, Cancellation  "
                                                    />
                                                </Box>
                                            </Box>
                                            <Box>
                                                <button className="btn btn-primary" type="submit"
                                                        style={{width: '100% !important'}}>Apply
                                                </button>
                                            </Box>
                                        </Form>
                                    )}
                                </Formik>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
                <Box className="footer-box">
                    <Footer/>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
};
export default SupperClubChaefPage;
