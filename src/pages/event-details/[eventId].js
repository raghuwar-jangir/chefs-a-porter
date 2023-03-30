import React, {useContext, useEffect, useState} from "react";
import {
    Box,
    Button,
    Grid,
    styled,
    Typography,
    Link,
    Modal,
    TextField,
    TextareaAutosize,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Formik, Form} from "formik";
import {DatePickerInput} from "rc-datepicker";
import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "../../components/NavbarComponent";
import Footer from "../../components/Footer";
import FooterEnd from "../../components/FooterEndSection";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NeedHelp from "../../components/NeedHelp";
import {isMobile, MobileView} from "react-device-detect";
import ImageCarousel from "../../components/ImageCarousel";
import chef1 from "../../assets/images/chef5.png";
import chef2 from "../../assets/images/chef6.png";
import sGallery from "../../assets/images/sc-gallery.png";
import star from "../../assets/images/star.png";
import "../../assets/styles/fontStyle.css";
import EventCard from "../../components/EventCard";
import ChefDetailsForm from "../../components/ChefDetailsForm";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SupperClubDetailsCarousel from "../../components/SupperClubDetailsCarousel";
import "../../assets/styles/fontStyle.css";
import EventPopUpCarosuel from "../../components/EventPopUpCarosuel"
import TemptedYet from '../../components/TemptedYet';
import NeedHelpEvent from "../../components/NeedHelpEvent";
import EventChefCarousel from "../../components/EventChefCarousel";
import UsersContext from "../../context/UsersContext";
import * as _ from "lodash";

const EventDetails = (props) => {

    // const getEventId = props?.params?.eventId;
    const getEventId = '640b22b691e7236a1d0a264e';
    const {setEventId, userData} = useContext(UsersContext);

    useEffect(() => {
        setEventId(getEventId)
    }, [getEventId])

    console.log("userData====>", userData)

    const [showCarousel, setShowCarousel] = useState(false);
    const handleImageClick = () => {
        setShowCarousel(true);
    };
    const handleCloseCarousel = () => {
        setShowCarousel(false);
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const bread = {
        fontFamily: "Proxima Nova Alt",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "16px",
        lineHeight: "19px",
    };
    const breadcrumbs = [
        <Typography sx={bread} key="1" color="#FBFBFB">
            Privée
        </Typography>,
        <Link underline="none" key="2" color="#C6A87D" href="">
            Event
        </Link>,
    ];
    const itemData = [
        {
            img: chef1,
            title: "chef1",
            rows: 2,
            cols: 3,
        },
        {
            img: sGallery,
            title: "sGallery",
            cols: 4,
        },
        {
            img: chef2,
            title: "chef2",
            cols: 4,
        },
    ];

    const MainBox = styled(Box)(() => ({
        ".main-box": {
            padding: "80px 120px",
            background: "#080B0E",
        },
        ".container": {
            position: "relative",
        },
        ".main-img": {
            width: "100%",
            height: "390px",
            display: "block",
            objectFit: "cover",
            boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
            cursor: "pointer",
        },
        ".main-img-1": {
            width: "100%",
            height: "180px",
            boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
            objectFit: "cover",
        },
        ".main-img-2": {
            width: "100%",
            height: "190px",
            boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
            objectFit: "cover",
        },
        ".carousel-popup": {
            position: "fixed",
            top: "0px",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1200",
        },
        ".close-button": {
            position: "absolute",
            top: "20px",
            right: "0px",
            fontSize: "24px",
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
            zIndex: "1200",
        },
        ".next-grid": {
            display: "inline",
            paddingLeft: "0px !important",
        },
        ".child-container": {
            position: "relative",
            marginLeft: "2px",
            paddingLeft: "0px",
        },
        ".show-btn": {
            position: "absolute",
            bottom: "20px",
            right: "27px",
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
            textTransform: "math-auto",
            background: "#FBFBFB",
            boxShadow: "0px 20px 24px rgb(0 0 0 / 6%)",
            borderRadius: "1px",
            padding: "8px 12px",
        },
        ".show-btn:hover": {
            color: "#C6A87D",
            backgroundColor: "#FBFBFB",
        },
        ".show-btn:focus": {
            backgroundColor: "#FBFBFB",
            color: "#C6A87D",
        },
        ".container-fluid": {
            marginTop: "40px",
        },
        ".header-club": {
            display: "none",
            padding: "15px",
            backgroundColor: "#080B0E",
        },
        ".header-icon": {
            color: "#FBFBFB",
        },
        ".chef-name": {
            fontSize: "24px",
            lineHeight: "30px",
            color: "#FBFBFB",
            fontWeight: 700,
            marginTop: "8px",
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            letterSpacing: "0.06em",
            marginBottom: "8px",
        },
        ".chef-name-rate": {
            display: 'flex',
            justifyContent: 'center',
            placeItems: 'center',
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: 400,
            color: "#FBFBFB",
            marginTop: "8px",
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            marginBottom: "8px",
        },
        ".chef-details": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: 300,
            color: "#FBFBFB",
            marginBottom: "20px",
            display: "flex",
            fontSize: "20px",
            lineHeight: "24px",
            letterSpacing: "0.06em",
            placeItems: "center",
        },
        ".chef-details-by": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: 300,
            color: "#FBFBFB",
            display: "flex",
            fontSize: "20px",
            lineHeight: "24px",
            letterSpacing: "0.06em",
            placeItems: "center",
        },
        ".mobileView-chef": {
            display: "none",
            margin: "5px 0px",
        },
        ".star-logo": {
            height: "18px",
            width: "18px",
            objectFit: "contain",
            marginRight: "8px",
            marginLeft: "20px",
        },
        ".star-box": {
            display: "flex",
        },
        ".detail-1": {
            textDecoration: "none",
            color: "#C6A87D",
            fontWeight: 600,
            position: "relative",
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "20px",
            lineHeight: "24px",
            letterSpacing: "0.06em",
            marginLeft: "5px",
        },
        ".line": {
            display: "inline-block",
            color: "#FBFBFB",
            margin: "0 16px",
            fontWeight: "300",
        },
        ".detail-2": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#FBFBFB",
            letterSpacing: "0.06em",
        },
        ".grid-item": {
            paddingRight: "5px",
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
        ".invite-btn": {
            border: "1px solid #C6A87D",
            background: "#000",
            borderRadius: "0px",
            color: "#FBFBFB",
            width: "210px",
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: 600,
            fontFamily: "Proxima Nova Alt",
            padding: "13.8894px",
            textTransform: "math-auto",
        },
        ".last-contain": {
            display: "flex",
            justifyContent: "space-between",
            padding: "40px 20px",
            backgroundColor: "#101418",
        },
        ".invite-friends-text": {
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "25px",
            color: "#FBFBFB",
            marginBottom: "0px",
        },
        ".experience-text": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#FBFBFB",
            marginBottom: "0px",
        },
        ".img": {
            height: "352px",
        },
        ".breadcrumbs-heading": {
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "19px",
        },
        ".pop-close-icon": {
            width: "100px",
            height: "40px",
            color: "rgb(160, 160, 160)",
        },
        ".MuiBreadcrumbs-separator": {
            marginLeft: "0.5rem",
            marginRight: "0.5rem",
        },
        '.item-img-1': {
            paddingLeft: '10px !important',
            paddingRight: '10px !important'
        },
        '.item-img-2': {
            paddingLeft: '10px !important',
            paddingRight: '10px !important'
        },
        '.container-parent': {
            paddingRight: '5px !important'
        },
        '@media(min-width: 425px) and (max-width: 768px)': {
            '.container-parent': {
                flex: '0 0 auto',
                maxWidth: '58.333333%'
            },
            '.next-grid': {
                flex: '0 0 auto',
                width: '41.66666667%'
            }
        },
        '@media(min-width: 1px) and (max-width: 768px)': {
            '.grid-box-2': {
                display: 'flex',
                flexDirection: 'column'
            },
            '.grid-item': {
                maxWidth: '100%',
                paddingRight: '0px'
            },
            '.grid-child-box': {
                maxWidth: '100%'
            },
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            '.main-grid': {
                display: 'none'
            },
            '.main-box': {
                padding: '40px 0px 0px'
            },
            '.breadcrumbs-heading': {
                display: 'none'
            },
            '.star-box': {
                padding: '0px 16px',
                justifyContent: 'space-between'
            },
            '.chef-name': {
                fontSize: '20px',
                lineHeight: '25px',
            },
            '.chef-name-rate': {
                fontSize: '18px',
                lineHeight: '22px'
            },
            '.chef-details': {
                flexFlow: 'wrap',
                padding: '0px 16px',
                marginBottom: '8px'
            },
            '.chef-details-by': {
                fontSize: '14px',
                lineHeight: '17px'
            },
            '.detail-1': {
                fontSize: '14px',
                lineHeight: '17px',
                fontWeight: 300,
                textDecoration: 'underline',
                paddingLeft: '5px'
            },
            '.line': {
                display: 'none'
            },
            '.grid-child-box': {
                display: 'none'
            },
            '.invite-btn': {
                width: '114px'
            },
            '.template': {
                background: '#080B0E'
            },
            '.template-title': {
                color: '#FBFBFB !important'
            }
        },
        "@media (min-width: 1px) and (max-width:320px)": {
            '.invite-btn': {
                width: '80px'
            }
        },
        '@media(min-width:600px) and (max-width: 768px)': {
            '.template': {
                backgroundColor: '#FBFBFB !important'
            },
            '.template-title': {
                color: '#080B0E !important'
            }
        }
    }));
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 398,
        boxShadow: 24,
        ".modal-content": {
            backgroundColor: "#DCD7CB !important",
            boxShadow: "0px 8px 12px rgb(0 0 0 / 16%)",
            padding: "40px 30px 20px",
            // position: 'relative',
            display: "flex",
            flexDirection: "column",
            // width: '100%',
            pointerEvents: "auto",
            backgroundClip: "paddingBox",
            outline: "0",
        },
        ".form-control": {
            backgroundColor: "transparent",
            border: "0px",
            borderBottom: "0.25px solid #080B0E",
            borderRadius: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            fontFamily: "Proxima Nova",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#222222",
            width: "100%",
        },
        ".form-control:focus-visible": {
            outline: "0px",
        },
        ".modal-header": {
            padding: "0px",
            marginBottom: "30px",
            borderBottom: "none",
            position: "relative",
            justifyContent: "flex-start",
        },
        ".modal-header button": {
            padding: "0px",
            border: "0px",
            position: "absolute",
            right: "0px",
            bottom: "8px",
            background: "transparent",
            cursor: "pointer",
        },
        ".schedule-label": {
            fontFamily: "Proxima Nova",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
            marginBottom: "8px",
            display: "block",
        },
        ".schedule-heading": {
            fontFamily: "Proxima Nova",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "30px",
            color: "#080B0E",
            marginBottom: "8px",
            marginTop: "0px",
            display: "block",
            textAlign: "center",
        },
        ".mb-3": {
            marginBottom: "1rem",
        },
        ".btn-primary": {
            border: "none !important",
            background: "#080B0E",
            width: "100% !important",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "19px",
            borderRadius: "0px",
            color: "#FBFBFB",
            textTransform: "capitalize",
            fontFamily: "Proxima Nova",
            height: "40px !important",
            marginTop: "0px",
        },
        ".react-datepicker-component .react-datepicker-input input": {
            paddingLeft: "5px",
            color: "#080B0E",
        },
        ".icon-rc-datepicker": {
            color: "#080B0E !important",
        },
        ".react-datepicker-component .react-datepicker-input.is-open": {
            background: "transparent",
            border: "0px",
            borderRadius: "0px",
        },
        ".react-datepicker-component .react-datepicker-input": {
            background: "transparent",
            border: "0px",
            borderRadius: "0px",
        },
        ".react-datepicker-component .react-datepicker-input:hover": {
            background: "transparent",
            border: "0px",
            borderRadius: "0px",
        },
        ".react-datepicker-component .react-datepicker-input.has-value input": {
            color: "#080B0E !important",
        },
    };
    return (
        <React.Fragment>
            <MainBox>
                {
                    !_.isEmpty(userData) &&
                    <>
                        <Navbar to={'/event-details'} isColor={true}/>
                        <Box className="main-box">
                            {isMobile ? (
                                <Box className="header-club">
                                    <ArrowBackIcon className="header-icon"/>
                                    <Typography className="chef-mobile-heading">Privée</Typography>
                                </Box>
                            ) : (
                                ""
                            )}
                            <Box className="container-fluid">
                                <Box className="row supper-chef-details">
                                    <Box className="details">
                                        <Breadcrumbs
                                            separator={<ChevronRightIcon className="chevron-right"/>}
                                            aria-label="breadcrumb"
                                            color="white"
                                            className="breadcrumbs-heading"
                                        >
                                            {breadcrumbs}
                                        </Breadcrumbs>
                                        <Box className="star-box">
                                            <Typography className="chef-name">
                                                {userData.title}
                                            </Typography>
                                            <Typography className="chef-name-rate">
                                                <img className="star-logo" src={star}/>
                                                4.7
                                            </Typography>
                                        </Box>
                                        <Box className="chef-details">
                                            <Typography className="chef-details-by">by</Typography>
                                            {
                                                !_.isEmpty(userData?.user) &&
                                                <>
                                                    <Link href="/chef-details" className="detail-1">
                                                        {userData.user.name}
                                                    </Link>
                                                    <span className="line">|</span>
                                                    <Typography className="detail-2">
                                                        Starting from ₹{userData.price_per_course} per diner
                                                    </Typography>
                                                </>
                                            }
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="mobileView-chef">
                                    <Typography className="chef-name mbl-chef-name">
                                        {userData.title}
                                    </Typography>
                                </Box>
                                <ImageCarousel/>
                                {
                                    !_.isEmpty(userData?.user) &&
                                    <Box className="mobileView-chef">
                                        <Typography className="chef-details mbl-chef-name">
                                            by {userData.user.name}<b> Starting from ₹{userData.price_per_course} per
                                            diner</b>
                                        </Typography>
                                    </Box>
                                }

                                <Grid className="main-grid" container spacing={{md: 2}}>
                                    <Grid className="container-parent" item xl={7} md={7} sm={6} xs={12}>
                                        <Box className="container">
                                            <img
                                                src={userData.cover_picture}
                                                alt="RestorentImg"
                                                className="main-img"
                                                onClick={handleImageClick}
                                            />
                                            {showCarousel && (
                                                <Box className="carousel-popup">
                                                    <button
                                                        className="close-button"
                                                        onClick={handleCloseCarousel}
                                                    >
                                                        <CloseIcon className="pop-close-icon"/>
                                                    </button>
                                                    <Box className="carousel">
                                                        <EventPopUpCarosuel/>
                                                    </Box>
                                                </Box>
                                            )}
                                        </Box>
                                    </Grid>
                                    <Grid item md={5} sm={6} xs={12} xl={5} className="next-grid">
                                        {
                                            !_.isEmpty(userData?.user?.details?.gallery_pictures) &&
                                            <Grid className="child-container" container spacing={2}>
                                                {
                                                    userData.user.details.gallery_pictures.map((item) => {
                                                        return (
                                                            <Grid className="item-img-1" item md={6} sm={6} xs={6}
                                                                  xl={6}>
                                                                <img
                                                                    src={item}
                                                                    alt="RestorentImg"
                                                                    className="main-img-1"
                                                                    onClick={handleImageClick}
                                                                />
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                                {
                                                    userData.user.details.gallery_pictures.map((item) => {
                                                        return (
                                                            <Grid className="item-img-1" item md={6} sm={6} xs={6}
                                                                  xl={6}>
                                                                <img
                                                                    src={item}
                                                                    alt="RestorentImg"
                                                                    className="main-img-1"
                                                                    onClick={handleImageClick}
                                                                />
                                                                {userData.user.details.gallery_pictures.map((item, index) => {
                                                                    return <span>{index !== userData.user.details.gallery_pictures.length - 1 && (
                                                                        <Button
                                                                            className="show-btn"
                                                                            onClick={handleOpen}
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal">
                                                                            Show All Photos
                                                                        </Button>
                                                                    )}</span>
                                                                })}
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                        }

                                    </Grid>
                                </Grid>
                                <Grid className="grid-box-2" container spacing={{md: 2}}>
                                    <Grid className="grid-item" item xl={7} md={7} sm={6} xs={12}>
                                        <EventCard/>
                                        <EventChefCarousel/>
                                        <SupperClubDetailsCarousel
                                            mainBox={{padding: "40px 0px"}}
                                            changeDetails={{fontSize: "16px"}}
                                            changeFont={{fontSize: "20px"}}
                                            backgroundColor="#DCD7CB"
                                        />
                                        <Box className="last-contain">
                                            <Box>
                                                <Typography className="invite-friends-text">
                                                    Invite friends & family
                                                </Typography>
                                                <Typography className="experience-text">
                                                    enjoy a shared experience
                                                </Typography>
                                            </Box>
                                            <Button className="invite-btn">Invite</Button>
                                        </Box>
                                    </Grid>
                                    <Grid
                                        className="grid-child-box"
                                        item
                                        md={5}
                                        sm={6}
                                        xs={12}
                                        xl={5}
                                    >
                                        <ChefDetailsForm/>
                                    </Grid>
                                </Grid>
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
                                        <Typography
                                            id="exampleModalLabel"
                                            className="schedule-heading modal-title"
                                        >
                                            Schedule a call
                                        </Typography>
                                        <button
                                            type="button"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            className="close"
                                            onClick={handleClose}
                                        >
                                            <CloseIcon/>
                                        </button>
                                    </Box>
                                    <Box className="container-fluid">
                                        <Formik
                                            initialValues={{
                                                day: new Date(),
                                                time: new Date().getHours() + ":" + new Date().getMinutes(),
                                                contactNumber: "",
                                                queryMessage: "",
                                            }}
                                            onSubmit={(values) => {
                                                const experienceData = {
                                                    ...values,
                                                    day: moment(_.get(values, "day")).format("ddd,DD MMM "),
                                                };
                                                console.log("value===>", values);
                                                console.log("===>", experienceData);
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
                                                                onChange={(dateString) =>
                                                                    setFieldValue("day", dateString)
                                                                }
                                                                defaultValue={values.day}
                                                            />
                                                        </Box>
                                                        <Box className="mb-3  ">
                                                            <label className="schedule-label">Time</label>
                                                            <Box className="input-group">
                                                                <TextField
                                                                    type="time"
                                                                    name="time"
                                                                    value={values.time}
                                                                    onChange={handleChange}
                                                                    defaultValue={values.time}
                                                                    className="form-control"
                                                                    autoComplete="off"
                                                                    variant="standard"
                                                                    InputProps={{
                                                                        disableUnderline: true,
                                                                        autoCapitalize: true,
                                                                    }}
                                                                />
                                                            </Box>
                                                        </Box>
                                                        <Box className="mb-3">
                                                            <label className="schedule-label">
                                                                Contact Number
                                                            </label>
                                                            <Box className="form-group">
                                                                <TextField
                                                                    type="tel"
                                                                    name="contactNumber"
                                                                    className="form-control"
                                                                    placeholder="10 digit number"
                                                                    value={values.contactNumber}
                                                                    onChange={handleChange}
                                                                    autoComplete="off"
                                                                    variant="standard"
                                                                    InputProps={{
                                                                        disableUnderline: true,
                                                                        startAdornment: (
                                                                            <InputAdornment position="start">
                                                                                91+
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                />
                                                            </Box>
                                                        </Box>
                                                        <Box className="mb-3">
                                                            <label className="schedule-label">
                                                                Write your query below
                                                            </label>
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
                                                        <button
                                                            className="btn btn-primary"
                                                            type="submit"
                                                            style={{width: "100% !important"}}
                                                        >
                                                            Apply
                                                        </button>
                                                    </Box>
                                                </Form>
                                            )}
                                        </Formik>
                                    </Box>
                                </Box>
                            </Box>
                        </Modal>
                        <NeedHelpEvent isColor={true}/>
                        <TemptedYet title={'Tempted yet?'} buttonText='Book this Experience' isTempted={false}/>
                        <NeedHelp/>
                        <Footer/>
                        <FooterEnd/>
                    </>
                }
            </MainBox>
        </React.Fragment>
    );
};
export default EventDetails;
