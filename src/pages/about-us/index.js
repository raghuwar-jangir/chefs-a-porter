import React from "react";
import { Avatar, Box, Button, Grid, ImageList, ImageListItem, Stack, styled, Typography } from "@mui/material";
import HotelImg1 from "../../assets/images/HotelImg1.png";
import HotelImg2 from "../../assets/images/HotelImg2.png";
import HotelImg3 from "../../assets/images/HotelImg3.png";
import HotelImg4 from "../../assets/images/HotelImg4.png";
import HotelImg5 from "../../assets/images/HotelImg5.png";
import HotelImg6 from "../../assets/images/HotelImg6.png";
import HotelImg7 from "../../assets/images/HotelImg7.png";
import HotelImg8 from "../../assets/images/HotelImg8.png";
import hotelImgView from "../../assets/images/hotelImgView.png"
import hotelImgView2 from "../../assets/images/hotelImgView2.png"
import logo1 from "../../assets/images/logo1.png"
import logo2 from "../../assets/images/logo2.png"
import logo3 from "../../assets/images/logo3.png"
import logo4 from "../../assets/images/logo4.png"
import IntroChefImg1 from "../../assets/images/IntroChefImg1.png"
import IntroChefImg2 from "../../assets/images/introChefImg2.png"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CommanTextCard from "../../components/CommanTextCard";
import IntroCardComponent from "../../components/IntroCardComponent";
import CommanCarousel from "../../components/CommanCarousel"
import sustainable from "../../assets/images/sustainable-energy.png"
import weather from "../../assets/images/weather-app.png"
import recycling from "../../assets/images/recycling-bin.png"
import Footer from "../../components/Footer";
import { Link } from "gatsby";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LogoSwiper from "../../components/LogoSwiper";
import { isMobile } from "react-device-detect";
import InfiniteCarousel from 'react-leaf-carousel';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramAbout from '../../assets/images/Instagramabout.png';
// import LinkedInAbout from '../../assets/images/LinkedInAbout.png';
// import { fontWeight } from "@mui/system";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import linkedInImg from "../../assets/images/instaImg.png"
// import instaImg from "../../assets/images/linkedInImg.png"
// import { border } from "@mui/system";
// import MultiCarousel from 'react-multi-carousel';
// import "react-multi-carousel/lib/styles.css";
// import $ from 'jquery';
// import 'owl.carousel/dist/owl.carousel.min.css';
// import 'owl.carousel/dist/owl.carousel.min.js';
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";



const itemData = [
    HotelImg1,
    HotelImg2,
    HotelImg3,
    HotelImg4,
    HotelImg5,
    HotelImg6,
    HotelImg7,
    HotelImg8,
]
const logoImg = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo1,
    logo2,
]
// const IntroCardDetails = [
//     {
//         title: "Chef Anou Boccasam",
//         position: "Founder",
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus a mauris lacinia, blandit quam nec, iaculis mi.Cras a est cursus, hendrerit ipsum a, sodales urna.Etiam posuere consectetur tortor ultrices feugiat.Suspendisse vel dui eget turpis rhoncus aliquet. Proin tempor tortor quis pellentesque finibus.Quisque felis urna, pulvinar ut.",
//         img: IntroChefImg1
//     },
//     {
//         title: "Chef Mako Ravindran",
//         position: "Chief Chef Curating Officer",
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus a mauris lacinia, blandit quam nec, iaculis mi.Cras a est cursus, hendrerit ipsum a, sodales urna.Etiam posuere consectetur tortor ultrices feugiat.Suspendisse vel dui eget turpis rhoncus aliquet. Proin tempor tortor quis pellentesque finibus.Quisque felis urna, pulvinar ut.",
//         img: HotelImg1
//     },
//     {
//         title: "Chef Anou Boccasam",
//         position: "Founder",
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus a mauris lacinia, blandit quam nec, iaculis mi.Cras a est cursus, hendrerit ipsum a, sodales urna.Etiam posuere consectetur tortor ultrices feugiat.Suspendisse vel dui eget turpis rhoncus aliquet. Proin tempor tortor quis pellentesque finibus.Quisque felis urna, pulvinar ut.",
//         img: IntroChefImg1
//     },
//     {
//         title: "Chef Mako Ravindran",
//         position: "Chief Chef Curating Officer",
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus a mauris lacinia, blandit quam nec, iaculis mi.Cras a est cursus, hendrerit ipsum a, sodales urna.Etiam posuere consectetur tortor ultrices feugiat.Suspendisse vel dui eget turpis rhoncus aliquet. Proin tempor tortor quis pellentesque finibus.Quisque felis urna, pulvinar ut.",
//         img: HotelImg1
//     },

// ]
const AboutCardComponet = (props) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    const BoxWrapper = styled(Box)(() => ({
        ".main-box": {
            padding: "40px 120px",
        },
        ".title":{
            fontFamily: 'Bon Vivant',
    fontStyle: "normal",
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '25px',
    textAlign: 'center',
    color: '#FBFBFB',
    marginBottom: '8px'
        },
        '.InfiniteCarouselArrowIcon':{
            padding: "7px",
            borderWidth: '0px 3px 3px 0'
        },
        ".header-club": {
            padding: '20px',
            backgroundColor: '#DCD7CB',
        },
        '.social-icon': {
            display: 'flex',
            alignItems: 'center',
            placeContent: 'center',
            marginTop: "30px"
        },
        '.icon': {
            display: 'flex',
            placeContent: 'flex-end',
            color: 'black',
            background: '#fff',
            padding: '4px',
            borderRadius: '100%',
            marginRight: ' 6px',
        },
        ".slider-background":{
            background: '#101418',
             padding:'40px'
        },
        ".slider-img":{
            width:'132px',
            display:'block',
            margin:'auto',
            marginBottom: '30px'
        },
        ".main-heading": {
            fontWeight: 700,
            fontSize: "30px",
            lineHeight: "25px",
            textAlign: 'center', 
            color: '#080B0E',
            fontFamily: 'Bon Vivant'
        },
        ".position-title":{
            fontFamily: 'Proxima Nova Alt',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '19px',
    textAlign: 'center',
    color: '#FBFBFB',
    marginBottom: '30px',
    display: 'block'
        },
        ".position-details":{
            fontFamily: 'Proxima Nova Alt',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'center',
    color: '#FBFBFB',
    marginBottom: '30px',
    width: '100%'
        },
        ".InfiniteCarouselArrowNext": {
            left: "98% !important"
        },
        '.InfiniteCarouselArrowPrev': {
            left: '-1%'
        },
        '.InfiniteCarouselDots': {
            top:'99%'
        },
        '.InfiniteCarouselDotActiveIcon': {
            backgroundColor: "#C6A87D !important",
            border: '1px solid white',
            width: '14px',
            height: '14px'
        },
        '.InfiniteCarouselDotIcon':{
            border: '1px solid white',
            backgroundColor:'black'
        },
        ".details": {
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "24px",
            textAlign: 'center',
        },
        ".grid-box": {
            border: '1px solid'
        },
        ".sub-box": {
            padding: "40px 16px 16px 16px"
        },
        ".sub-box-2": {
            padding: "20px 20px 40px",
            background: '#101418'
        },
        ".sub-box-3": {
            padding: "20px 20px 40px",
            background: '#DCD7CB'
        },
        ".sub-box-4": {
            padding: "40px 16px",
            background: '#FBFBFB'
        },
        ".custom-log": {
            height: "120px",
            width: "120px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "60px",
            background: '#fff'
        },
        ".hotelview-img": {
            width: "100%",
            height: '500px',
            paddingBottom: "16px"
        },
        ".btn": {
            background: "#C6A87D",
            fontSize: "16px", fontSize: '24px', lineHeight: "29px",
            width: '25%',
            borderRadius: "0px",
            color: "#080B0E",
            textTransform: "capitalize",
            height: "57px",
            marginTop: "40px", paddingTop: "16px 10px"
        }, ".btn:hover": { color: '#fff' },
        ".main-div-open-positions": {
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "30px",
            textAlign: 'center',
            padding: '40px 16px'
        },
        ".sub-div-open-positions": {
            background: "#FBFBFB",
            boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.06)",
            padding: '16px 10px 16px 10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '8px'
        },
        ".positions": {
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px",
            paddingBottom: '16px'
        },
        ".main-heading-open-positions": {
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#242F35",
        },
        ".details-open-positions": {
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#242F35",
            paddingTop: "8px",
        },
        ".sub-heading-open-positions": {
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#101418",
            paddingTop: '20px'
        },
        ".some-text": {
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px",
            paddingBottom: '8px'
        },
        ".some-details": {
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#242F35"
        },
        ".lastBox": {
            padding: "40px 120px",
            background: "#DCD7CB",
            display: 'flex',
            justifyContent: 'space-between'
        },
        ".open-positions-div": {
            padding: "0px"
        },
        ".btn-get-in-touch": {
            background: "#080B0E", color: "#FBFBFB",
            fontSize: "16px", width: '25%',
            fontWeight: 600,
            borderRadius: "0px",
            textTransform: "capitalize",
            height: "57px",
        },
        '.conscious-stack': {
            justifyContent: 'center', padding: '25px'
        },
        '.conscious-option': {
            border: '1px solid #080B0E', padding: '37px', borderRadius: '50%'
        },
        '.parent-stack': {
            padding: '40px 0px'
        }, '.sub-title': { paddingTop: '10px' },
        '.options-icon': { width: '50px', height: '50px' },
        '.parent-options': {
            textAlign: 'center',
        },
        '.footer-text': {
            display: 'flex',
            justifyContent: 'space-evenly',
            backgroundColor: "#222222",
            padding: '18px',
        }, '.footer-item': {
            color: '#DCD7CB',
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            ".main-box": {
                padding: "0px",
            },
            ".hotelview-img": {
                height: '30%',
                paddingBottom: "16px"
            },
            ".open-positions-div": {
                padding: "0px 16px 40px 16px"
            },
            ".btn": {
                width: '100%'
            },
            ".lastBox": {
                padding: '40px 16px'
            },
            ".some-text": {
                fontSize: "16px",
            },
            ".btn-get-in-touch": {
                width: '40%',
                alignItems: 'center'
            }, '.conscious-option': {
                padding: '31px',
            },
            ".element.style":{
                background: '#101418'
            },
            '.img-link':{
                background:'color'
            },
            '.social-icon': {
                display: 'flex',
                alignItems: 'center',
                placeContent: 'flex-end'
            },
            '.icon': {
                display: 'flex',
                placeContent: 'flex-end',
                color: 'black',
                background: '#fff !important',
                padding: '4px',
                borderRadius: '100%',
                marginRight: ' 6px',
            },
            // '.background':{
            //     background: '#101418'
            // }
        }
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className="main-box">
                    <Box>
                        {isMobile ? (
                            <Box className='header-club'>
                                <Typography className="main-heading">About Us</Typography>
                            </Box>
                        ) : (
                            <Typography className="main-heading">About Us</Typography>
                        )}


                        <Box className="sub-box">
                            <CommanTextCard
                                mainTitle="Who are we"
                                title-post='Founder'
                                details="We are home to the hottest food tribe in the world!
                    We offer our diners a unique chance to experience curated,
                    conscious-dining in different formats."
                                colors='#080B0E'
                            />
                        </Box>
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {itemData.map((item, index) => (
                                <ImageListItem key={item}>
                                    <img
                                        src={item}
                                        alt="img"
                                        loading="lazy"
                                        width={"394px"}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                    <Box className="sub-box">
                        <CommanTextCard
                            mainTitle="Conscious Dining"
                            colors='#080B0E'
                            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec efficitur justo eget mollis tincidunt. Maecenas ullamcorper
                        volutpat diam, vel vulputate orci dictum nec.  In odio metus,
                        rhoncus quis sapien eget, vehicula ornare erat. Mauris aliquam
                        vitae sem in rhoncus. Vivamus nec convallis ligula."
                        />
                    </Box>
                    <Box className="parent-stack">
                        <Stack
                            className="conscious-stack"
                            direction={{ xs: 'row' }}
                            spacing={{ xs: 2, md: 15 }}
                        >
                            <Box className="parent-options">
                                <Box className="conscious-option">
                                    <Avatar
                                        className="options-icon"
                                        variant="square"
                                        alt="sustainable"
                                        src={sustainable}
                                    />
                                </Box>
                                <Typography className="sub-title">Sustainable</Typography>
                            </Box>
                            <Box className="parent-options">
                                <Box className="conscious-option">
                                    <Avatar
                                        className="options-icon"
                                        variant="square"
                                        alt="sustainable"
                                        src={weather}
                                    />
                                </Box>
                                <Typography className="sub-title">Seasonal & Local</Typography>
                            </Box>
                            <Box className="parent-options">
                                <Box className="conscious-option">
                                    <Avatar
                                        className="options-icon"
                                        variant="square"
                                        alt="sustainable"
                                        src={recycling}
                                    />
                                </Box>
                                <Typography className="sub-title">Zero Waste</Typography>
                            </Box>

                        </Stack>
                    </Box>

                    <Box>
                        <Box className="sub-box-2">
                            <img
                                src={hotelImgView}
                                alt="view"
                                className="hotelview-img"
                                style={{
                                    // height: '500px'
                                }}
                            />
                            <CommanTextCard
                                mainTitle="Our Mission"
                                colors='#FBFBFB'
                                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur justo eget mollis tincidunt.
                         Maecenas ullamcorper volutpat diam, vel vulputate orci dictum nec.  In odio metus, rhoncus quis sapien eget,
                          vehicula ornare erat. Mauris aliquam vitae sem in rhoncus. Vivamus nec convallis ligula."
                            />
                        </Box>
                    </Box>
                    <Box className="sub-box-3">
                        <img
                            src={hotelImgView2}
                            alt="view"
                            style={{
                                width: "100%",
                                paddingBottom: "16px"
                            }}
                        />
                        <CommanTextCard
                            mainTitle="Our Values"
                            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia,
                         blandit quam nec, iaculis mi. Cras a est cursus."
                        />
                    </Box>
                    <Box className="sub-box-4">
                        <LogoSwiper />
                        {/* <Box sx={{ display: 'flex', justifyContent: "space-around" }}>
                            {logoImg.map((imgItem, index) => (
                                <Box key={index} className="custom-log">
                                    <img src={imgItem} alt="logo1" />
                                </Box>
                            ))}
                        </Box> */}
                    </Box>

                    <Box sx={{ background: '#101418', padding: "40px 20px" }}>
                        <CommanTextCard
                            mainTitle="Meet Our Team"
                            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit
                         quam nec, iaculis mi. Cras a est cursus."
                            colors="#fff"
                        />
                        <Box sx={{ paddingTop: "40px" }}>
                            <CommanCarousel />
                        </Box>
                    </Box>

                    <Box sx={{ background: "#080B0E", padding: "40px 16px" }}>
  <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    infinte={true}
    swipe={true}
    animationDuration={500}
    showSides={false}
    sidesOpacity={0.5}
    sideSize={0.1}
    // slidesSpacing={10}
    slidesToScroll={1}
    slidesToShow={3}
    scrollOnDevice={true}
  >
    <Box className="slider-background" >
      <img className="slider-img"
        alt=""
        src={IntroChefImg1}
      />
            <Typography className="title">Chef Anou Boccasam</Typography>
            <Typography className="position-title">Founder</Typography>
            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
            {/* <CommanTextCard 
            mainTitle= "Chef Anou Boccasam" 
            details= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat."
            colors="white"/> */}
              <Box className='social-icon'>
             <InstagramIcon className='icon'/>
             <LinkedInIcon className='icon'/>
             </Box>
    </Box>
    <Box className="slider-background">
      <img className="slider-img"
        alt=""
        src={IntroChefImg2}
      />
            <Typography className="title">Chef Mako Ravindran</Typography>
            <Typography className="position-title">Chief Chef Curating Officer</Typography>
            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
      {/* <CommanTextCard
            mainTitle= "Chef Mako Ravindran" 
            subTitle= "Chief Chef Curating Officer"
            details= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat."
            colors="white"/> */}
           <Box className='social-icon'>
             <InstagramIcon className='icon'/>
             <LinkedInIcon className='icon'/>
             </Box>
             </Box>
    <Box className="slider-background">
      <img className="slider-img"
        alt=""
        src={IntroChefImg1}
      />
            <Typography className="title">Chef Anou Boccasam</Typography>
            <Typography className="position-title">Founder</Typography>
            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
      {/* <CommanTextCard
            mainTitle= "Chef Anou Boccasam" 
            subTitle= "Founder"
            details= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat."
            colors="white"/> */}
            <Box className='social-icon'>
             <InstagramIcon className='icon'/>
             <LinkedInIcon className='icon'/>
             </Box>
            </Box>
    <Box className="slider-background">
      <img className="slider-img"
        alt=""
        src={IntroChefImg2}
      />
            <Typography className="title">Chef Mako Ravindran</Typography>
            <Typography className="position-title">Chief Chef Curating Officer</Typography>
            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
     {/* <CommanTextCard
            mainTitle= "Chef Mako Ravindran" 
            subTitle= "Chief Chef Curating Officer"
            details= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat."
            colors="white"
            /> */}
            <Box className='social-icon'>
             <InstagramIcon className='icon'/>
             <LinkedInIcon className='icon'/>
             </Box>
      </Box>
      <Box className="slider-background">
      <img className="slider-img"
        alt=""
        src={IntroChefImg1}
      />
            <Typography className="title">Chef Anou Boccasam</Typography>
            <Typography className="position-title">Founder</Typography>
            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
            <Box className='social-icon'>
             <InstagramIcon className='icon'/>
             <LinkedInIcon className='icon'/>
             </Box>
            </Box>
  <Box className="slider-background">
      <img className="slider-img"
        alt=""
        src={IntroChefImg2}
      />
            <Typography className="title">Chef Mako Ravindran</Typography>
            <Typography className="position-title">Chief Chef Curating Officer</Typography>
            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
            <Box className='social-icon'>
             <InstagramIcon className='icon'/>
             <LinkedInIcon className='icon'/>
             </Box>
            </Box>
            <Box className="slider-background">
      <img className="slider-img"
        alt=""
        src={IntroChefImg1}
      />
            <Typography className="title">Chef Anou Boccasam</Typography>
            <Typography className="position-title">Founder</Typography>
            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
            <Box className='social-icon'>
             <InstagramIcon className='icon'/>
             <LinkedInIcon className='icon'/>
             </Box>
            </Box>
            <Box className="slider-background">
      <img className="slider-img"
        alt=""
        src={IntroChefImg2}
      />
            <Typography className="title">Chef Mako Ravindran</Typography>
            <Typography className="position-title">Chief Chef Curating Officer</Typography>
            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
            <Box className='social-icon'>
             <InstagramIcon className='icon'/>
             <LinkedInIcon className='icon'/>
             </Box>
            </Box>
            <Box className="slider-background">
      <img className="slider-img"
        alt=""
        src={IntroChefImg1}
      />
            <Typography className="title">Chef Anou Boccasam</Typography>
            <Typography className="position-title">Founder</Typography>
            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
            <Box className='social-icon'>
             <InstagramIcon className='icon'/>
             <LinkedInIcon className='icon'/>
             </Box>
            </Box>
            <Box className="slider-background">
      <img className="slider-img"
        alt=""
        src={IntroChefImg1}
      />
            <Typography className="title">Chef Anou Boccasam</Typography>
            <Typography className="position-title">Founder</Typography>
            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
            <Box className='social-icon'>
             <InstagramIcon className='icon'/>
             <LinkedInIcon className='icon'/>
             </Box>
            </Box>
            <Box className="slider-background">
      <img className="slider-img"
        alt=""
        src={IntroChefImg2}
      />
            <Typography className="title">Chef Mako Ravindran</Typography>
            <Typography className="position-title">Chief Chef Curating Officer</Typography>
            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
            <Box className='social-icon'>
             <InstagramIcon className='icon'/>
             <LinkedInIcon className='icon'/>
             </Box>
            </Box>
            <Box className="slider-background">
      <img className="slider-img"
        alt=""
        src={IntroChefImg1}
      />
            <Typography className="title">Chef Anou Boccasam</Typography>
            <Typography className="position-title">Founder</Typography>
            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
            <Box className='social-icon'>
             <InstagramIcon className='icon'/>
             <LinkedInIcon className='icon'/>
             </Box>
            </Box>
            </InfiniteCarousel>
                    {/* <MultiCarousel
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
    draggable={true}
    swipeable={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div>
        <img src={IntroChefImg1} />
      </div>
      <div>
        <img src={IntroChefImg1} />
      </div>
      <div>
        <img src={IntroChefImg1} />
      </div>
      <div>
        <img src={IntroChefImg1} />
      </div>
      <div>
        <img src={IntroChefImg1} />
      </div>
    </MultiCarousel> */}
                        {/* <Grid container spacing={2}>
                            {IntroCardDetails.map((cardItem, index) => {
                                return (
                                    <Grid key={index} item xl={3} md={12} sm={6} xs={12}>
                                        <IntroCardComponent title={cardItem.title} position={cardItem.position} details={cardItem.details} image={cardItem.img} />
                                    </Grid>
                                )
                            })}
                        </Grid> */}
                        {/* <Box sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}> */}
                            {/* <Button
                                type="submit"
                                className="btn"
                            >
                                View All Members
                            </Button>
                        </Box> */}
                    </Box>
                    <Box className="open-positions-div">
                        <Typography className="main-div-open-positions">Open Positions</Typography>
                        <Typography className="positions" >Engineers</Typography>
                        <Box className="sub-div-open-positions">
                            <Box>
                                <Typography className="main-heading-open-positions">Software Engineers (Back End)</Typography>
                                <Typography className="details-open-positions">Mumbai, IN</Typography>
                            </Box>
                            <ChevronRightIcon />
                        </Box>
                        <Box className="sub-div-open-positions">
                            <Box>
                                <Typography className="main-heading-open-positions">QA Engineer</Typography>
                                <Typography className="details-open-positions">Mumbai, IN</Typography>
                            </Box>
                            <ChevronRightIcon />
                        </Box>
                        <Typography className="sub-heading-open-positions">Developers</Typography>
                        <Box className="sub-div-open-positions">
                            <Box>
                                <Typography className="main-heading-open-positions">Full Stack Developer</Typography>
                                <Typography className="details-open-positions">Mumbai, IN</Typography>
                            </Box>
                            <ChevronRightIcon />
                        </Box>
                    </Box>
                </Box>
                <Box className="lastBox">
                    <Box>
                        <Typography className="some-text">Don't see an open role for you</Typography>
                        <Typography className="some-details">We're always on the look out for top talent to join us.</Typography>
                    </Box>
                    <Button className="btn-get-in-touch">
                        Get in touch
                    </Button>
                </Box>
                <Footer />
                <Box className="footer-end">
                    <Stack className='footer-text'
                           divider={<FiberManualRecordIcon sx={{ fontSize: '6px', color: '#C6A87D' }} />}
                           direction="row" spacing={2}>
                        <Link className='footer-item' to='/'> FAQs </Link>
                        <Link className='footer-item' to='/'> Privacy Policy </Link>
                        <Link className='footer-item' to='/'> T&C </Link>
                    </Stack>
                </Box>
                {/* <FutterComponent /> */}
            </BoxWrapper>

        </React.Fragment >
    )
}
export default AboutCardComponet
