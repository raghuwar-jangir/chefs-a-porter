import React from "react";
import {
    Avatar,
    Box,
    Button,
    Grid,
    ImageList,
    ImageListItem,
    Stack,
    styled,
    Typography,
} from "@mui/material";
import IntroChefImg1 from "../assets/images/IntroChefImg1.png";
import IntroChefImg2 from "../assets/images/introChefImg2.png";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination} from "swiper";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import '../assets/styles/fontStyle.css';

const TeamCarousel = (props) => {
    const BoxWrapper = styled(Box)(() => ({
        ".title": {
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: "25px",
            textAlign: "center",
            color: "#FBFBFB",
            marginBottom: "8px",
            fontWeight: 700
        },
        ".social-icon": {
            display: "flex",
            alignItems: "center",
            placeContent: "center",
            marginTop: "30px",
        },
        ".icon": {
            display: "flex",
            placeContent: "flex-end",
            color: "black",
            background: "#fff",
            padding: "4px",
            borderRadius: "100%",
            marginRight: " 6px",
        },
        ".slider-background": {
            background: "#101418",
        },
        ".slider-img": {
            width: "132px",
            display: "block",
            margin: "auto",
            marginBottom: "30px",
        },
        ".position-title": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            textAlign: "center",
            color: "#FBFBFB",
            marginBottom: "30px",
            display: "block",
        },
        ".position-details": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "24px",
            textAlign: "center",
            color: "#FBFBFB",
            marginBottom: "30px",
            width: "100%",
            whiteSpace: "normal",
        },
        ".details": {
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "24px",
            textAlign: "center",
        },
        ".btn": {
            background: "#C6A87D",
            fontSize: "16px",
            lineHeight: "19px",
            borderRadius: "0px",
            color: "#080B0E",
            textTransform: "capitalize",
            marginTop: "40px",
            padding: "10px",
            fontFamily: "ProximaNovaA-Regular",
        },
        ".btn:active": {
            backgroundColor: "#C6A87D",
            color: "white",
        },
        ".btn:focus": {
            color: "white",
        },
        ".positions": {
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px",
            paddingBottom: "16px",
        },
        ".slider-box": {
            padding: "40px",
        },
        '.swiper-pagination': {
            position: 'relative',
            paddingTop: '10px',
            bottom: '0px',
            marginBottom: '20px',
            background: 'transparent',
            display: 'flex',
            placeContent: 'center',
            alignItems: 'center'
        },
        '.swiper-pagination-bullet': {
            width: '9px',
            height: '9px',
            margin: '5px 7px',
            background: 'transparent',
            border: '1px solid white',
            opacity: '1',
            width: '12px',
            height: '12px',
            borderRadius: '30px'
        },
        '.swiper-pagination-bullet-active': {
            background: '#C6A87D !important',
            width: '16px',
            height: '16px',
            border: '0.5px solid #C6A87D'
        },
        '.swiper-pagination-horizontal': {
            bottom: '-10px !important'
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            ".btn": {
                width: "100%",
                fontWeight: 600,
                height: 'auto'
            },
            ".social-icon": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            },
            ".icon": {
                display: "flex",
                placeContent: "flex-end",
                color: "black",
                background: "#fff !important",
                padding: "4px",
                borderRadius: "100%",
                marginRight: " 6px",
            },
            ".swiper-button-prev": {
                display: "none",
            },
            ".swiper-button-next": {
                display: "none",
            },
        },
        "@media (min-width: 768px) and (max-width:2560px)": {
            ".btn": {
                display: "none",
            },
        },
    }));
    return (
        <React.Fragment>
            <BoxWrapper>
                <Box sx={{background: "#080B0E", padding: "40px 16px"}}>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "white",
                            "--swiper-navigation-size": "30px",
                        }}
                        rewind={true}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                navigation: "false",
                                pagination: "false",
                            },
                            375: {
                                slidesPerView: 1,
                                navigation: "false",
                                pagination: "false",
                            },
                            425: {
                                slidesPerView: 1,
                                navigation: "false",
                                pagination: "false",
                            },
                            725: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide className="slider-background">
                            <Box className="slider-box">
                                <img className="slider-img" alt="" src={IntroChefImg2}/>
                                <Typography className="title">Chef Mako Ravindran</Typography>
                                <Typography className="position-title">
                                    Chief Chef Curating Officer
                                </Typography>
                                <Typography className="position-details">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras
                                    a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere
                                    consectetur tortor ultrices feugiat.
                                </Typography>
                                <Box className="social-icon">
                                    <InstagramIcon className="icon"/>
                                    <LinkedInIcon className="icon"/>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide className="slider-background">
                            <Box className="slider-box">
                                <img className="slider-img" alt="" src={IntroChefImg1}/>
                                <Typography className="title">Chef Anou Boccasam</Typography>
                                <Typography className="position-title">Founder</Typography>
                                <Typography className="position-details">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras
                                    a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere
                                    consectetur tortor ultrices feugiat.
                                </Typography>
                                <Box className="social-icon">
                                    <InstagramIcon className="icon"/>
                                    <LinkedInIcon className="icon"/>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide className="slider-background">
                            <Box className="slider-box">
                                <img className="slider-img" alt="" src={IntroChefImg2}/>
                                <Typography className="title">Chef Mako Ravindran</Typography>
                                <Typography className="position-title">
                                    Chief Chef Curating Officer
                                </Typography>
                                <Typography className="position-details">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras
                                    a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere
                                    consectetur tortor ultrices feugiat.
                                </Typography>
                                <Box className="social-icon">
                                    <InstagramIcon className="icon"/>
                                    <LinkedInIcon className="icon"/>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide className="slider-background">
                            <Box className="slider-box">
                                <img className="slider-img" alt="" src={IntroChefImg1}/>
                                <Typography className="title">Chef Anou Boccasam</Typography>
                                <Typography className="position-title">Founder</Typography>
                                <Typography className="position-details">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras
                                    a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere
                                    consectetur tortor ultrices feugiat.
                                </Typography>
                                <Box className="social-icon">
                                    <InstagramIcon className="icon"/>
                                    <LinkedInIcon className="icon"/>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide className="slider-background">
                            <Box className="slider-box">
                                <img className="slider-img" alt="" src={IntroChefImg2}/>
                                <Typography className="title">Chef Mako Ravindran</Typography>
                                <Typography className="position-title">
                                    Chief Chef Curating Officer
                                </Typography>
                                <Typography className="position-details">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras
                                    a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere
                                    consectetur tortor ultrices feugiat.
                                </Typography>
                                <Box className="social-icon">
                                    <InstagramIcon className="icon"/>
                                    <LinkedInIcon className="icon"/>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide className="slider-background">
                            <Box className="slider-box">
                                <img className="slider-img" alt="" src={IntroChefImg1}/>
                                <Typography className="title">Chef Anou Boccasam</Typography>
                                <Typography className="position-title">Founder</Typography>
                                <Typography className="position-details">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras
                                    a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere
                                    consectetur tortor ultrices feugiat.
                                </Typography>
                                <Box className="social-icon">
                                    <InstagramIcon className="icon"/>
                                    <LinkedInIcon className="icon"/>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Button type="submit" className="btn">
                            View All Members
                        </Button>
                    </Box>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    );
};
export default TeamCarousel;
