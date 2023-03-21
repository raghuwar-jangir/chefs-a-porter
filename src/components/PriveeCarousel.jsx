import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation, Pagination} from "swiper";
import {Box, Button, Grid, Hidden, styled, Typography} from "@mui/material";
import chef from "../../src/assets/images/chef1.png";
import chef2 from "../../src/assets/images/chef2.png";
import chef3 from '../assets/images/chef3.png'
import chef4 from "../../src/assets/images/chef4.png";
import reebok from "../assets/images/rebook.png";
import {isMobile} from "react-device-detect";
import {Link} from "gatsby";
import '../assets/styles/fontStyle.css'

const MainParent = styled(Box)({
    ".continue-browsing-box": {
        background: "#080B0E",
        padding: "80px 120px",
        color: "#fff",
    },
    ".main-heading": {
        fontSize: "24px",
        lineHeight: "24px",
        fontFamily: "Bon Vivant",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "24px",
        letterSpacing: "0.06em",
        color: "#FBFBFB",
        marginBottom: "18px",
    },
    ".parent-view-button": {
        width: "16.66666667%",
        textAlign: "end",
        marginTop: "20px",
        marginTop: "none",
        display: "contents",
    },
    ".view-more": {
        fontFamily: "ProximaNovaA-Regular",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "19px",
        textAlign: "right",
        color: "#C6A87D",
        width: "100%",
        padding: "0px",
        border: "0px",
        marginTop: "10px",
        background: "none",
        textTransform: 'math-auto',

    },
    ".btn-view": {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "30px",
        position: "relative",
    },
    ".css-1fu7jd5-MuiButtonBase-root-MuiButton-root:hover": {
        background: "none",
    },
    ".name-box": {
        padding: "16px 20px",
        background: "#101418",
        position: "relative",
        bottom: "12%",
    },
    ".lguFiu": {
        height: "466.641px !important",
    },
    ".chef-title": {
        display: "flex",
        placeContent: "center",
        fontSize: "20px",
        lineHeight: "25px",
        marginBottom: "6px",
        fontFamily: "Bon Vivant ",
        fontWeight: 700
    },
    ".chef-details": {
        textAlign: "center",
        fontSize: "16px",
        lineHeight: "19px",
        fontFamily: "Proxima Nova Alt",
        fontStyle: "normal",
        fontWeight: 250,
        letterSpacing: "0.02em",
        color: "rgba(198, 168, 125, 0.8)",
        position: "relative",
        paddingTop: "6px",
    },
    ".line": {
        position: "relative",
        width: "1px",
        height: "100%",
        margin: "0 5px",
    },
    ".rebook-title": {
        fontFamily: "Proxima Nova Alt",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "16px",
        lineHeight: "19px",
        textAlign: "right",
        letterSpacing: "0.02em",
        color: "#C6A87D",
        padding: "5px 20px 5px 0px",
    },
    ".rebook-img": {
        objectFit: "contain",
        marginRight: "4px",
        width: "12px",
        height: "16px",
        paddingTop: "5px",
    },
    ".rebook": {
        position: "absolute",
        background: "#101418",
        display: "flex",
        placeContent: "flex-end",
        top: "0px",
        width: "100%",
    },
    ".link": {
        textDecoration: "none",
        color: "#C6A87D",
    },
    ".img": {
        height: "426px",
        objectPosition: "top",
        objectFit: "cover",
        width: "100%",
    },
    '@media(min-width: 426px) and (max-width: 768px)': {
        '.continue-browsing-box': {
            padding: '40px 10px'
        },
        ".img": {
            height: "553px",
        },
        ".main-heading": {
            fontSize: '20px',
            lineHeight: '25px'
        },
        '.heading-details': {
            fontSize: '14px',
            lineHeight: '17px',
            padding: '9px 0px 20px 0px'
        },
        '.chef-title': {
            placeContent: 'flex-start',
            fontSize: '14px',
            marginBottom: '0px',
            lineHeight: '17px'
        },
        '.chef-details ': {
            textAlign: 'start',
            fontSize: '14px',
            lineHeight: '17px'
        },
        '.name-box': {
            padding: '16px 8px'
        },
        '.rebook-title': {
            fontSize: '12px',
            lineHeight: '15px'
        },
    },
    '@media(min-width: 1px) and (max-width: 425px)': {
        ".img": {
            height: "553px",
        },
        '.continue-browsing-box': {
            padding: '40px 10px 100px 10px'
        },
        ".main-heading": {
            fontSize: '24px',
            lineHeight: '30px',
            letterSpacing: '0.06em'
        },
        '.heading-details': {
            fontSize: '14px',
            lineHeight: '17px',
            padding: '9px 0px 15px 0px'
        },
        '.chef-title': {
            placeContent: 'flex-center',
            fontSize: '20px',
            lineHeight: '17px',
            marginBottom: '10px'
        },
        '.chef-details ': {
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: '15px',
        },
        '.name-box': {
            padding: '16px 8px'
        },
        '.rebook-title': {
            fontSize: '12px',
            lineHeight: '15px'
        },
        '.swiper-button-next': {
            display: 'none'
        },
        '.swiper-button-prev': {
            display: 'none'
        },
        '.swiper': {
            height: '1180px'
        },
        '.view-more': {
            position: 'absolute',
            top: '1290px',
            left: '0%',
            border: '0.5px solid #C6A87D',
            width: '100%',
            fontSize: '16px',
            lineHeight: '19px',
            fontWeight: 600,
            color: 'white',
            fontFamily: 'ProximaNovaA-Regular',
            padding: '10px',
            textTransform: 'math-auto',
            borderRadius: '1px',
            marginTop: '15px'
        },
    }
});

const PriveeCarousel = (props, {title, subTitle, isButtonShow = true}) => {
    return (
        <React.Fragment>
            <MainParent>
                <Box className="continue-browsing-box">
                    <Box className="btn-view">
                        <Box>
                            <Typography className="main-heading">
                                {props.title}
                            </Typography>
                        </Box>
                        <Box>
                            {isMobile ? (
                                <Box className="more-button">
                                    <Button fullWidth className="view-more" variant="contained">
                                        View More Chefs
                                    </Button>
                                </Box>
                            ) : (
                                <Box className="more-button">
                                    <Button fullWidth className="view-more" variant="contained">
                                        <Link className="link" to="/our-chefs">
                                            View All
                                        </Link>
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Box>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "white",
                            "--swiper-navigation-size": "17px",
                        }}
                        slidesPerView={4}
                        spaceBetween={20}
                        navigation={true}
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 8,
                                direction: "vertical",
                            },
                            375: {
                                slidesPerView: 2,
                                spaceBetween: 8,
                                direction: "vertical",
                            },
                            425: {
                                slidesPerView: 2,
                                spaceBetween: 8,
                                direction: "vertical",
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 8,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            2560: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },

                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className="img" src={chef} />
                            <Box className="name-box">
                                <Typography className="chef-title">Madhav Dayal</Typography>
                                <Box className="chef-details">
                  <span>
                    Thai <span className="line">|</span>
                  </span>
                                    <span>
                    Japanese <span className="line">|</span>
                  </span>
                                    <span>Parsi</span>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img" src={chef2} />
                            <Box className="rebook">
                                <img className="rebook-img" src={reebok} />
                                <Typography className="rebook-title">Rebook</Typography>
                            </Box>
                            <Box className="name-box">
                                <Typography className="chef-title">Anup Kakati</Typography>
                                <Box className="chef-details">
                                    {" "}
                                    <span>
                    Thai <span className="line">|</span>
                  </span>
                                    <span>
                    Asian<span className="line">|</span>
                  </span>
                                    <span>Indain</span>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img" src={chef3} />
                            <Box className="name-box">
                                <Typography className="chef-title">Kyoumars Freeman</Typography>
                                <Box className="chef-details">
                                    <span>Parsian</span>{" "}
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img" src={chef4} />
                            <Box className="rebook">
                                <img className="rebook-img" src={reebok} />
                                <Typography className="rebook-title">Rebook</Typography>
                            </Box>
                            <Box className="name-box">
                                <Typography className="chef-title">Mako Ravindran</Typography>
                                <Box className="chef-details">
                  <span>
                    French <span className="line">|</span>
                  </span>
                                    <span>
                    Italian <span className="line">|</span>
                  </span>
                                    <span>Indian </span>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img" src={chef2} />
                            <Box className="rebook">
                                <img className="rebook-img" src={reebok} />
                                <Typography className="rebook-title">Rebook</Typography>
                            </Box>
                            <Box className="name-box">
                                <Typography className="chef-title">Anup Kakati</Typography>
                                <Box className="chef-details">
                                    {" "}
                                    <span>
                    Thai <span className="line">|</span>
                  </span>
                                    <span>
                    Japanese <span className="line">|</span>
                  </span>
                                    <span>Parsi</span>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </MainParent>
        </React.Fragment>
    );
};
export default PriveeCarousel;
