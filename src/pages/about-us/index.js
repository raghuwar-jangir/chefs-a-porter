import React from "react";
import { Avatar, Box, Button, Grid, ImageList, ImageListItem, Stack, styled, Typography } from "@mui/material";
import HotelImg1 from "../../assets/images/HotelImg1.png";
import HotelImg2 from "../../assets/images/HotelImg3.png";
import HotelImg3 from "../../assets/images/HotelImg4.png";
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
import OpenPosition from "../../components/OpenPositionComponent";
import '../../assets/styles/fontStyle.css'
import teamImage from '../../assets/images/team.png'
import TeamCarousel from "../../components/TeamCarousel.jsx";

const ClientSideOnlyLazy = React.lazy(() =>
    import("../../components/TeamCarousel")
)

const itemData = [
    {
        img: HotelImg1,
        title: 'HotelImg1',
        rows: 1.3,
    },
    {
        img: HotelImg2,
        title: 'HotelImg2',
        rows: 0.7,
    },
    {
        img: HotelImg3,
        title: 'HotelImg3',
        rows: 1,
    },
    {
        img: HotelImg5,
        title: 'HotelImg5',
        rows: 1,
    },
    {
        img: HotelImg6,
        title: 'HotelImg6',
        rows: 0.7,
    },
    {
        img: HotelImg7,
        title: 'HotelImg7',
        rows: 0.6,
    },
    {
        img: HotelImg8,
        title: 'HotelImg8',
        rows: 0.7,
    },
]
const logoImg = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo1,
    logo2,
]
const AboutCardComponent = (props) => {

    const isSSR = typeof window === "undefined"

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
        // ".details": {
        //     fontWeight: '400',
        //     fontStyle: 'normal',
        //     fontSize: "20px !important",
        //     lineHeight: "24px",
        //     textAlign: 'center',
        //     fontFamily: 'ProximaNovaA-Regular',
        // },
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
            justifyContent: 'center', padding: '20px'
        },
        '.conscious-option': {
            border: '1px solid #080B0E', padding: '37px', borderRadius: '50%'
        },
        // '.parent-stack': {
        //     padding: '40px 0px'
        // },
        '.sub-title': {
            paddingTop: '10px',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '16px',
            marginTop: '10px',
            color: '#000000',
        },
        '.options-icon': {width: '41px', height: '41px'},
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
        '.team-img': {
            width: "100%",
            height: '500px',
            objectFit: 'cover',
            marginBottom: "40px"
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            ".main-box": {
                padding: "0px",
            },
            ".hotelview-img": {
                height: '30%',
                paddingBottom: "16px"
            },
            '.team-img': {
                height: '200px'
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
            '.conscious-option': {
                padding: '28px',
            },
            ".about-heading": {
                display: 'none'
            },
            ".main-heading": {
                marginTop: '40px'
            },
        },
        "@media (min-width: 1px) and (max-width:325px)": {
            '.conscious-option': {
                padding: '20px',
            },
        },
        "@media (min-width: 350px) and (max-width:375px)": {
            '.conscious-option': {
                padding: '27px',
            },
        },
        "@media (min-width: 426px) and (max-width:769px)": {
            ".main-box": {
                padding: "0px",
            },
            ".about-heading": {
                paddingTop: '80px',
                marginTop: '40px'
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
                <Navbar heading="About Us"/>
                <Box>
                    <Box className="main-box">
                        <Box>
                            <Typography className="about-heading">About Us</Typography>
                            <Box className="sub-box">
                                <CommanTextCard
                                    mainTitle="Who are we"
                                    details="We are home to the hottest food tribe in the world! We offer our diners a unique chance to experience curated, conscious-dining in different formats.."
                                    colors='#080B0E'
                                    fontSize='20px'
                                />
                            </Box>
                            <ImageList variant="masonry" cols={3} rows={3} gap={10}
                                       rowHeight={isMobile ? '150' : '300'}>
                                {itemData.map((item, index) => (
                                    <ImageListItem key={item} cols={item.cols || 1} rows={item.rows || 1}>
                                        <img
                                            src={item.img}
                                            alt="img"
                                            loading="lazy"
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
                                fontSize="20px"
                            />
                        </Box>
                        <Box className="parent-stack">
                            <Stack
                                className="conscious-stack"
                                direction={{xs: 'row'}}
                                spacing={{xs: 2, md: 25}}
                            >
                                <Box className="parent-options">
                                    <Box className="conscious-option">
                                        <Avatar
                                            className="options-icon"
                                            variant="rounded"
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
                                            variant="rounded"
                                            alt="sustainable"
                                            src={weather}
                                            sx={{margin: '0px', height: '35px', width: '35px'}}
                                        />
                                    </Box>
                                    <Typography className="sub-title">Seasonal & Local</Typography>
                                </Box>
                                <Box className="parent-options">
                                    <Box className="conscious-option">
                                        <Avatar
                                            className="options-icon"
                                            variant="rounded"
                                            alt="sustainable"
                                            src={recycling}
                                            sx={{height: '35px', width: '35px'}}
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
                                // className="hotelview-img"
                                className="team-img"
                            />
                            <CommanTextCard
                                mainTitle="Our Mission"
                                colors='#FBFBFB'
                                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia,
                         blandit quam nec, iaculis mi. Cras a est cursus."
                                fontSize='16px'
                            />
                        </Box>
                    </Box>
                    <Box className="sub-box-3">
                        <img
                            src={hotelImgView2}
                            alt="view"
                            className="team-img"
                        />
                        <CommanTextCard
                            mainTitle="Our Values"
                            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia,
                         blandit quam nec, iaculis mi. Cras a est cursus."
                            fontSize='16px'
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
                            fontSize='16px'
                        />
                        <img
                            src={teamImage}
                            alt="view"
                            className="team-img"
                            style={{marginTop: '40px'}}
                        />
                    </Box>
                    {!isSSR && (
                        <React.Suspense fallback={<div/>}>
                            <ClientSideOnlyLazy/>
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

        </React.Fragment >
    )
}
export default AboutCardComponent
