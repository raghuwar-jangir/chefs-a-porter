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
import CommanTextCard from "../../components/CommanTextCard";
import CommanCarousel from "../../components/CommanCarousel"
import sustainable from "../../assets/images/sustainable-energy.png"
import weather from "../../assets/images/weather-app.png"
import recycling from "../../assets/images/recycling-bin.png"
import Footer from "../../components/Footer";
import LogoSwiper from "../../components/LogoSwiper";
import {isMobile} from "react-device-detect";
import NeedHelp from "../../components/NeedHelp";
import FooterEnd from "../../components/FooterEndSection";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import OpenPosition from "../../components/OpenPositionComponent";
import TeamCarousel from "../../components/TeamCarousel.jsx";


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
        ".header-club": {
            padding: '10px',
            backgroundColor: '#DCD7CB',
        },
        ".main-heading": {
            fontWeight: 700,
            fontSize: "30px",
            lineHeight: "25px",
            textAlign: 'center',
            color: '#080B0E',
            fontFamily: 'Bon Vivant'
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
            fontSize: "20px",
            lineHeight: "24px",
            paddingBottom: '8px',
            color: "#242F35"
        },
        ".some-details": {
            fontSize: "16px",
            lineHeight: "19px",
            color: "#242F35"
        },
        ".lastBox": {
            padding: "40px 120px",
            background: "#DCD7CB",
            display: 'none',
            justifyContent: 'space-between'
        },
        ".open-positions-div": {
            padding: "0px"
        },
        ".btn-get-in-touch": {
            background: "#080B0E", color: "#FBFBFB",
            fontSize: "16px", width: '25%',
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
                display:'flex',
                padding: '40px 16px'
            },
            ".some-text": {
                fontSize: "14px",
            },
            ".some-details": {
                fontSize: "14px",
            },
            ".btn-get-in-touch": {
                fontSize:'12px',
                width: '50%',
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
            ".sub-box-2": {
                padding: '40px 30px',
                background: '#101418'
            },
            ".sub-box-3": {
                padding: '40px 30px',
                background: '#DCD7CB'
            },
            ".sub-box-4": {
                padding: '80px 30px 40px ',
                background: '#101418'
            },
        },
        "@media (min-width: 1px) and (max-width:325px)": {
        '.conscious-option': {
                padding: '20px',
            },
        },
        "@media (min-width: 350px) and (max-width:375px)": {
            '.conscious-option': {
                padding: '25px',
            },
        },
        "@media (min-width: 426px) and (max-width:769px)": {
            ".main-box": {
                padding: "0px",
            },
            ".about-heading": {
                textAlign: 'left', color: '#080B0E',
            },
            ".sub-box-2": {
                padding: '40px 70px',
                background: '#101418'
            },
            ".sub-box-3": {
                padding: '40px 70px',
                background: '#DCD7CB'
            },
            ".sub-box-4": {
                padding: '80px 70px 40px ',
                background: '#101418'
            },
        },
        "@media (min-width: 768px) and (max-width:2560px)": {
            '.btn':{
                display:'none'
            }
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
<TeamCarousel/>
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
                <NeedHelp/>
                <OpenPosition/>
                <Box className="lastBox">
                    <Box>
                        <Typography className="some-text">Don’t see an open role for you</Typography>
                        <Typography className="some-details">We’re always on the look out for top talent to join us.</Typography>
                    </Box>
                    <Button className="btn-get-in-touch">
                        Get in touch
                    </Button>
                </Box>
                <Footer/>
              <FooterEnd/>
            </BoxWrapper>

        </React.Fragment >
    )
}
export default AboutCardComponet
