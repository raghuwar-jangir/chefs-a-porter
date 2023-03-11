import React, {useState} from "react";
import {
    Box,
    Button,
    Grid,
    styled,
    Typography,
    Link,
} from "@mui/material";
import Navbar from "../../components/NavbarComponent";
import Footer from "../../components/Footer";
import FooterEnd from "../../components/FooterEndSection";
import FoodCard from "../../components/FoodCard";
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
import DiningPage from "../../components/DiningPage";
import diningImg from '../../assets/images/cook1.png';
import RatingCarousel from "../../components/RatingCarousel";
import ChefDetailsForm from "../../components/ChefDetailsForm";
import SupperClubDetailsCarousel from "../../components/SupperClubDetailsCarousel";

const EventDetails = () => {

    const [showCarousel, setShowCarousel] = useState(false);
    const handleImageClick = () => {
        setShowCarousel(true);
    };

    const handleClose = () => {
        setShowCarousel(false);
    };
    // const breadcrumbsStyle ={
    //     '.privee-title':{
    //         fontFamily: 'Proxima Nova Alt',
    // fontStyle: 'normal',
    // fontWeight: '300',
    // fontSize: '16px',
    // lineHeight: '19px',
    // color: '#FFFFFF',
    //     },
    //     '.privee-event':{
    //         fontFamily: 'ProximaNovaA-Regular',
    //         fontStyle: 'normal',
    //         fontWeight: '300',
    //         fontSize: '16px',
    //         lineHeight: '19px',
    //         color: '#C6A87D',
    //     }
    // }
    const breadcrumbs = [
        <Typography className="privee-title" key="1" color="#FBFBFB">
            Privée
        </Typography>,
        <Link
            underline="none"
            className="privee-event"
            key="2"
            color="#C6A87D"
            href=""
        >
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
        background: "#080B0E",
        ".main-box": {
            padding: "80px 120px",
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
            height: "165px",
            boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
            objectFit: "cover",
        },
        ".main-img-2": {
            width: "100%",
            height: "205px",
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
            zIndex: "5",
        },
        ".close-button": {
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "24px",
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
            zIndex: "10",
        },
        ".next-grid": {
            display: "inline",
            paddingLeft: '0px'
        },
        ".child-container": {
            position: "relative",
            marginLeft: "2px",
            paddingLeft: '0px'
        },
        ".show-btn": {
            position: "absolute",
            bottom: "16px",
            right: "19px",
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: "100",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
            textTransform: "math-auto",
            background: "#FBFBFB",
            boxShadow: "0px 20px 24px rgb(0 0 0 / 6%)",
            borderRadius: "1px",
            padding: "8px 12px",
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
            fontSize: "23px",
            lineHeight: "30px",
            color: "#FBFBFB",
            marginTop: "8px",
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            letterSpacing: "0.06em",
            marginBottom: "8px",
        },
        ".chef-details": {
            fontFamily: "Proxima Nova",
            fontStyle: "normal",
            fontWeight: "300",
            color: "#FBFBFB",
            marginBottom: "20px",
            display: 'flex',
            fontSize: '20px',
            lineHeight: '24px',
            letterSpacing: '0.06em',
            placeItems: 'center',
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
        },
        ".star-box": {
            display: "flex",
        },
        '.detail-1': {
            textDecoration: 'none',
            color: '#C6A87D',
            fontWeight: '600',
            paddingLeft: '5px',
            position: 'relative',
        },
        '.line': {
            display: 'inline-block',
            color: '#FBFBFB',
            margin: '0 16px',
            fontWeight: '300',
        },
        '.detail-2': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
        },
        '.grid-item': {
            paddingRight: '5px'
        },
        ".mobile-view-price-text": {
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px"
        },
        ".mobile-view-diner": {
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "19px"
        },
        ".invite-btn": {
            border: '1px solid #C6A87D',
            background: '#000',
            borderRadius: "0px",
            color: '#FBFBFB',
            width: '210px',
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: 600,
            fontFamily: 'Proxima Nova Alt',
            padding: '13.8894px',
            textTransform: 'math-auto'
        },
        ".last-cantain": {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '40px 20px',
            backgroundColor: '#101418'
        },
        ".invite-friends-text": {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "25px",
            color: '#FBFBFB',
            marginBottom: '0px'
        },
        ".experience-text": {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: '#FBFBFB',
            marginBottom: '0px'
        },
        '.img': {
            height: '352px'
        }

    }));
    return (
        <React.Fragment>
            <MainBox>
                <Navbar isColor={true}/>
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
                                    separator="›"
                                    aria-label="breadcrumb"
                                    color="white"
                                >
                                    {breadcrumbs}
                                </Breadcrumbs>
                                <Box className="star-box">
                                    <Typography className="chef-name">
                                        A Traditional Oma Kase
                                    </Typography>
                                    <Typography className="chef-name">
                                        <img className="star-logo" src={star}/>
                                        4.7
                                    </Typography>
                                </Box>
                                <Box className="chef-details">
                                    <Typography>by</Typography><Typography className="detail-1">Chef Mako
                                    Ravindran</Typography><span className="line">|</span><Typography
                                    className="detail-2">Starting from ₹5000 per diner</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="mobileView-chef">
                            <Typography className="chef-name mbl-chef-name">
                                A Traditional Oma Kase
                            </Typography>
                        </Box>
                        <ImageCarousel/>
                        <Box className="mobileView-chef">
                            <Typography className="chef-details mbl-chef-name">
                                by Chef Mako Ravindran<b> Starting from ₹5000 per diner</b>
                            </Typography>
                        </Box>
                        <Grid container spacing={{md: 2}}>
                            <Grid item xl={7} md={7} sm={6} xs={12}>
                                <Box className="container">
                                    <img
                                        src={chef1}
                                        alt="RestorentImg"
                                        className="main-img"
                                        onClick={handleImageClick}
                                    />
                                    {showCarousel && (
                                        <Box className="carousel-popup">
                                            <button className="close-button" onClick={handleClose}>
                                                <CloseIcon/>
                                            </button>
                                            <Box className="carousel">
                                                {/* <SuperClubPopUpCarousel/> */}
                                            </Box>
                                        </Box>
                                    )}
                                </Box>
                            </Grid>
                            <Grid item md={5} sm={6} xs={12} xl={5} className="next-grid">
                                <Grid className="child-container" container spacing={2}>
                                    <Grid item md={6} sm={6} xs={6} xl={6}>
                                        <img
                                            src={sGallery}
                                            alt="RestorentImg"
                                            className="main-img-1"
                                            onClick={handleImageClick}
                                        />
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={6} xl={6}>
                                        <img
                                            src={sGallery}
                                            alt="RestorentImg"
                                            className="main-img-1"
                                            onClick={handleImageClick}
                                        />
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={6} xl={6}>
                                        <img
                                            src={chef2}
                                            alt="RestorentImg"
                                            className="main-img-2"
                                            onClick={handleImageClick}
                                        />
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={6} xl={6}>
                                        <img
                                            src={chef2}
                                            alt="RestorentImg"
                                            className="main-img-2"
                                            onClick={handleImageClick}
                                        />
                                        <Button className="show-btn">Show All Photos</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className="grid-box-2" container spacing={{md: 2}}>
                            <Grid className="grid-item" item xl={7} md={7} sm={6} xs={12}>
                                <EventCard/>
                                <DiningPage title="Chef Mako's Creations" image={diningImg}/>
                                <RatingCarousel backgroundColor={"#DCD7CB"}/>
                                {isMobile ? (<Box sx={{
                                    display: "flex",
                                    justifyContent: 'space-between',
                                    padding: "16px",
                                    background: '#DCD7CB'
                                }}>
                                    <Box>
                                        <Typography className="mobile-view-price-text">₹ 2,500</Typography>
                                        <Typography className="mobile-view-diner">Per diner</Typography>
                                    </Box>
                                    <Button className="invite-btn">
                                        Reserve a Seat
                                    </Button>
                                </Box>) : (<Box className="last-cantain">
                                    <Box>
                                        <Typography className="invite-friends-text">Invite friends & family</Typography>
                                        <Typography className="experience-text">enjoy a shared experience</Typography>
                                    </Box>
                                    <Button className="invite-btn">
                                        Invite
                                    </Button>
                                </Box>)}
                            </Grid>
                            <Grid className="grid-child-box" item md={5} sm={6} xs={12} xl={5}>
                                <ChefDetailsForm/>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <NeedHelp/>
                <MobileView>
                    <FoodCard/>
                </MobileView>
                <Footer/>
                <FooterEnd/>
            </MainBox>
        </React.Fragment>
    );
};
export default EventDetails;
