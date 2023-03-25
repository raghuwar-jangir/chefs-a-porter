import React, {useContext, useEffect, useState} from "react";
import {Avatar, Box, Button, Grid, ImageList, ImageListItem, Stack, styled, Typography} from "@mui/material";
import HotelImg1 from "../../assets/images/HotelImg1.png";
import HotelImg2 from "../../assets/images/HotelImg3.png";
import HotelImg3 from "../../assets/images/HotelImg4.png";
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
import '../../assets/styles/fontStyle.css'
import CmsContext from "../../context/CmsContext";
import * as _ from "lodash";

const ClientSideOnlyLazy = React.lazy(() =>
    import("../../components/TeamCarousel")
)

const logoImg = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo1,
    logo2,
]
const AboutCardComponent = (props) => {

    const {data} = useContext(CmsContext);

    const isSSR = typeof window === "undefined"

    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        {
            !_.isEmpty(data) &&
            setImageData(data.about_us.who_we_are.gallery)
        }
    }, [data])

    const imgData = imageData.map(item => {
        return {image: item};
    });
    const rows = [1.3, 0.7, 1, 1, 0.7, 0.6, 0.7];
    const rowOfObjects = rows.map(item => {
        return {rows: item};
    });

    const finalImageData = imgData.map((item, i) => Object.assign({}, item, rowOfObjects[i]));


    const BoxWrapper = styled(Box)(() => ({
        ".main-box": {
            padding: '120px 160px 40px'
        },
        ".header-club": {
            padding: '10px',
            backgroundColor: '#DCD7CB',
        },
        ".main-heading": {
            fontStyle: 'normal !important',
            fontSize: "24px !important",
            fontWeight: '700',
            lineHeight: "30px",
            textAlign: 'center', color: '#080B0E',
            fontFamily: 'Bon Vivant !important',
        },
        ".about-heading": {
            fontStyle: 'normal !important',
            fontSize: "32px !important",
            lineHeight: "30px",
            fontWeight: '700',
            textAlign: 'center',
            letterSpacing: '0.06em',
            color: '#080B0E',
            fontFamily: 'Bon Vivant !important',
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
            justifyContent: 'center', padding: '20px'
        },
        '.conscious-option': {
            border: '1px solid #080B0E', padding: '27px', borderRadius: '100%',
            width: 'fit-content'
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
            '.mt-40':{
                marginTop:'40px !important'
            }
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
        }
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                {
                    !_.isEmpty(data) &&
                    <React.Fragment>
                        <Navbar heading="About Us"/>
                        <Box>
                            <Box className="main-box">
                                <Box>
                                    <Typography className="about-heading">{data.about_us.header.title}</Typography>
                                    <Box className="sub-box">
                                        <CommanTextCard
                                            mainTitle={data.about_us.who_we_are.title}
                                            details={data.about_us.who_we_are.description}
                                            colors='#080B0E'
                                            fontSize='20px'
                                            marginTop='40px'
                                        />
                                    </Box>
                                    <ImageList variant="masonry" cols={3} rows={3} gap={10}
                                               rowHeight={isMobile ? '150' : '300'}>
                                        {finalImageData.map((item, index) => (
                                            <ImageListItem key={index} cols={item.cols || 1} rows={item.rows || 1}>
                                                <img
                                                    src={item.image}
                                                    alt="img"
                                                    loading="lazy"
                                                />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                </Box>
                                <Box className="sub-box">
                                    <CommanTextCard
                                        mainTitle={data.about_us.dining.title}
                                        colors='#080B0E'
                                        details={data.about_us.dining.description}
                                        fontSize="20px"
                                    />
                                </Box>
                                <Box className="parent-stack">
                                    <Stack
                                        className="conscious-stack"
                                        direction={{xs: 'row'}}
                                        spacing={{xs: 2, md: 25}}
                                    >
                                        {
                                            data.about_us.dining.content.map((item) => {
                                                return (
                                                    <Box className="parent-options">
                                                        <Box className="conscious-option">
                                                            <Avatar
                                                                className="options-icon"
                                                                variant="rounded"
                                                                alt="sustainable"
                                                                src={item.icon}
                                                            />
                                                        </Box>
                                                        <Box>
                                                            <Typography className="sub-title">{item.text}</Typography>
                                                        </Box>
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Stack>
                                </Box>
                            </Box>

                            <Box>
                                <Box className="sub-box-2">
                                    <img
                                        src={data.about_us.mission.image}
                                        alt="view"
                                        className="hotelview-img"
                                        className="team-img"
                                    />
                                    <CommanTextCard
                                        mainTitle={data.about_us.mission.title}
                                        colors='#FBFBFB'
                                        details={data.about_us.mission.description}
                                        fontSize='16px'
                                    />
                                </Box>
                            </Box>
                            <Box className="sub-box-3">
                                <img
                                    src={data.about_us.values.image}
                                    alt="view"
                                    className="team-img"
                                />
                                <CommanTextCard
                                    mainTitle={data.about_us.values.title}
                                    details={data.about_us.values.description}
                                    fontSize='16px'
                                />
                            </Box>
                            <Box className='sub-box-4'>
                                <CommanTextCard
                                    mainTitle={data.about_us.meet_team.title}
                                    colors='#FBFBFB'
                                    details={data.about_us.meet_team.description}
                                    fontSize='16px'
                                />
                                <img
                                    src={data.about_us.meet_team.image}
                                    alt="view"
                                    className="team-img"
                                    style={{marginTop: '40px'}}
                                />
                            </Box>
                            {
                                !isSSR && (
                                    <React.Suspense fallback={<div/>}>
                                        <ClientSideOnlyLazy/>
                                    </React.Suspense>
                                )
                            }

                        </Box>
                        <NeedHelp title={data.about_us.home_footer.desktop_title} description={data.about_us.home_footer.desktop_description}
                                  button_call={data.about_us.home_footer.desktop_button_call}
                                  button_email={data.about_us.home_footer.desktop_button_email}
                        />
                        <OpenPosition/>
                        <Box className="lastBox">
                            <Box>
                                <Typography className="some-text">{data.about_us.about_footer.title}</Typography>
                                <Typography
                                    className="some-details">{data.about_us.about_footer.description}</Typography>
                            </Box>
                            <Button className="btn-get-in-touch">{data.about_us.about_footer.button_text}</Button>
                        </Box>
                        <Footer/>
                        <FooterEnd/>
                    </React.Fragment>
                }
            </BoxWrapper>

        </React.Fragment>
    )
}
export default AboutCardComponent
