import React from "react";
import {Avatar, Box, Button, Grid, ImageList, ImageListItem, Stack, styled, Typography} from "@mui/material";
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
import teamImage from "../../assets/images/team.png"
import logo1 from "../../assets/images/logo1.png"
import logo2 from "../../assets/images/logo2.png"
import logo3 from "../../assets/images/logo3.png"
import logo4 from "../../assets/images/logo4.png"
import IntroChefImg1 from "../../assets/images/IntroChefImg1.png"
import CommanTextCard from "../../components/CommanTextCard";
import sustainable from "../../assets/images/sustainable-energy.png"
import weather from "../../assets/images/weather-app.png"
import recycling from "../../assets/images/recycling-bin.png"
import Footer from "../../components/Footer";
import {isMobile} from "react-device-detect";
import Navbar from "../../components/NavbarComponent";
import NeedHelp from "../../components/NeedHelp";
import FooterEnd from "../../components/FooterEndSection";
import OpenPosition from "../../components/OpenPositionComponent";
const ClientSideOnlyLazy = React.lazy(() =>
    import("../../components/TeamCarousel")
)

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
const IntroCardDetails = [
    {
        title: "Chef Anou Boccasam",
        position: "Founder",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus a mauris lacinia, blandit quam nec, iaculis mi.Cras a est cursus, hendrerit ipsum a, sodales urna.Etiam posuere consectetur tortor ultrices feugiat.Suspendisse vel dui eget turpis rhoncus aliquet. Proin tempor tortor quis pellentesque finibus.Quisque felis urna, pulvinar ut.",
        img: IntroChefImg1
    },
    {
        title: "Chef Mako Ravindran",
        position: "Chief Chef Curating Officer",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus a mauris lacinia, blandit quam nec, iaculis mi.Cras a est cursus, hendrerit ipsum a, sodales urna.Etiam posuere consectetur tortor ultrices feugiat.Suspendisse vel dui eget turpis rhoncus aliquet. Proin tempor tortor quis pellentesque finibus.Quisque felis urna, pulvinar ut.",
        img: HotelImg1
    },
    {
        title: "Chef Anou Boccasam",
        position: "Founder",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus a mauris lacinia, blandit quam nec, iaculis mi.Cras a est cursus, hendrerit ipsum a, sodales urna.Etiam posuere consectetur tortor ultrices feugiat.Suspendisse vel dui eget turpis rhoncus aliquet. Proin tempor tortor quis pellentesque finibus.Quisque felis urna, pulvinar ut.",
        img: IntroChefImg1
    },
    {
        title: "Chef Mako Ravindran",
        position: "Chief Chef Curating Officer",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus a mauris lacinia, blandit quam nec, iaculis mi.Cras a est cursus, hendrerit ipsum a, sodales urna.Etiam posuere consectetur tortor ultrices feugiat.Suspendisse vel dui eget turpis rhoncus aliquet. Proin tempor tortor quis pellentesque finibus.Quisque felis urna, pulvinar ut.",
        img: HotelImg1
    },

]
const AboutCardComponent = (props) => {

    const isSSR = typeof window === "undefined"

    const BoxWrapper = styled(Box)(() => ({
        ".main-box": {
            padding: '130px 160px 40px'
        },
        ".header-club": {
            padding: '10px',
            backgroundColor: '#DCD7CB',
        },
        ".main-heading": {
            fontWeight: 'normal !important',
            fontSize: "24px !important",
            lineHeight: "30px",
            textAlign: 'center', color: '#080B0E',
            fontFamily: 'Bon Vivant !important',
        },
        ".about-heading": {
            fontWeight: 'normal !important',
            fontSize: "32px !important",
            lineHeight: "30px",
            textAlign: 'center', color: '#080B0E',
            fontFamily: 'Bon Vivant !important',
        },
        ".details": {
            fontWeight: 400,
            fontSize: "24px !important",
            lineHeight: "24px",
            textAlign: 'center',
            fontFamily: 'Proxima Nova',
        },
        ".grid-box": {
            border: '1px solid'
        },
        ".sub-box": {
            padding: "40px 16px 16px 16px",
        },
        ".sub-box-2": {
            padding: '40px 160px',
            background: '#101418'
        },
        ".sub-box-3": {
            padding: '40px 160px',
            background: '#DCD7CB'
        },
        ".sub-box-4": {
            padding: '80px 160px 40px ',
            background: '#101418'
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
        ".btn": {
            background: "#C6A87D",
            fontSize: '24px', lineHeight: "29px",
            width: '25%',
            borderRadius: "0px",
            color: "#080B0E",
            textTransform: "capitalize",
            height: "57px",
            marginTop: "40px", paddingTop: "16px 10px"
        }, ".btn:hover": {color: '#fff'},

        ".some-text": {
            // fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px",
            paddingBottom: '8px',
            color: "#242F35"
        },
        ".some-details": {
            // fontWeight: 300,
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
        ".btn-get-in-touch": {
            background: "#080B0E", color: "#FBFBFB",
            fontSize: "16px", width: '25%',
            // fontWeight: 600,
            borderRadius: "0px",
            textTransform: "capitalize",
            height: "57px",
        },
        '.conscious-stack': {
            justifyContent: 'center', padding: '25px'
        },
        '.conscious-option': {
            border: '1px solid #080B0E', padding: '37px', borderRadius: '100%'
        },
        '.parent-stack': {
            padding: '40px 0px'
        }, '.sub-title': {paddingTop: '10px'},
        '.options-icon': {width: '50px', height: '50px'},
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
            ".btn": {
                width: '100%'
            },
            ".lastBox": {
                display: 'flex',
                padding: '40px 16px'
            },
            ".some-text": {
                fontSize: "14px",
            },
            ".some-details": {
                fontSize: "14px",
            },
            ".btn-get-in-touch": {
                fontSize: '12px',
                width: '50%',
                alignItems: 'center'
            }, '.conscious-option': {
                padding: '31px',
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
        }

    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                <Navbar/>
                <Box>
                    <Box className="main-box">
                        <Box>
                            {isMobile ? (
                                <Box className='header-club'>
                                    <Typography className="about-heading">About Us</Typography>
                                </Box>
                            ) : (
                                <Typography className="about-heading">About Us</Typography>
                            )}


                            <Box className="sub-box">
                                <CommanTextCard
                                    mainTitle="Who are we"
                                    details="We are home to the hottest food tribe in the world! We offer our diners a unique chance to experience curated, conscious-dining in different formats.."
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
                        Donec efficitur justo eget mollis tincidunt. Maecenas ullamcorper"
                            />
                        </Box>
                        <Box className="parent-stack">
                            <Stack
                                className="conscious-stack"
                                direction={{xs: 'row'}}
                                spacing={{xs: 2, md: 15}}
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
                    </Box>

                    <Box>
                        <Box className="sub-box-2">
                            <img
                                src={hotelImgView}
                                alt="view"
                                className="hotelview-img"
                                style={{
                                    width: "100%",
                                    margin: "40px 0px"
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
                                margin: "0px 0px 30px"
                            }}
                        />
                        <CommanTextCard
                            mainTitle="Our Values"
                            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia,
                         blandit quam nec, iaculis mi. Cras a est cursus."
                        />
                    </Box>

                    <Box className='sub-box-4'>
                        <CommanTextCard
                            mainTitle="Meet Our Team"
                            colors='#FBFBFB'
                            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit
                         quam nec, iaculis mi. Cras a est cursus."
                        />
                        <img
                            src={teamImage}
                            alt="view"
                            style={{
                                width: "100%",
                                margin: "40px 0px"
                            }}
                        />
                    </Box>
                    {!isSSR && (
                        <React.Suspense fallback={<div/>}>
                            <ClientSideOnlyLazy />
                        </React.Suspense>
                    )}

                </Box>
                <NeedHelp/>
                <OpenPosition/>
                <Box className="lastBox">
                    <Box>
                        <Typography className="some-text">Don’t see an open role for you</Typography>
                        <Typography className="some-details">We’re always on the look out for top talent to join
                            us.</Typography>
                    </Box>
                    <Button className="btn-get-in-touch">
                        Get in touch
                    </Button>
                </Box>
                <Footer/>
                <FooterEnd/>
            </BoxWrapper>

        </React.Fragment>
    )
}
export default AboutCardComponent