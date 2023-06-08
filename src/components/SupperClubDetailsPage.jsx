import { Box, Button, Grid, MobileStepper, Rating, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from '@mui/material/styles';
import ChefImg from "./../assets/images/ChefImg.png"
import priveeLogo from './../assets/images/priveeLogo.png'
import priveeSerch from './../assets/images/priveeSerch.png'


import chefImgMoblile from "./../assets/images/chefImgMoblile.png"
import { isMobile, MobileView } from "react-device-detect";
import CardChefComponent from "./CardChefComponent";
import DiningPage from "./DiningPage";
import ChefCarousel from "./ChefCarousel";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Footer from "./Footer";
import vector from './../assets/images/vector.svg'

import DetailsCarousel from "./DetailsCarousel (1)";
import Treaty from "./Treaty";
import NeedHelp from "./NeedHelp";
import PriveeDining from "./PriveeDining";
import RatingCarousel from "./RatingCarousel";
import ChefDetailsForm from "./ChefDetailsForm";
import CmsContext from "../context/CmsContext";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    chefImgMoblile,
    chefImgMoblile,
    chefImgMoblile,
    chefImgMoblile,
    chefImgMoblile
];
const SupperClubDetailsPage = () => {
    const theme = useTheme();
    const {footerData} = useContext(CmsContext)

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const [search, setSearch] = useState(false);

    const handleChange = () => {
        setSearch(true);
    }

    const BoxWrapper = styled(Box)(() => ({
        // padding: '40px 120px',
        // background: "#DCD7CB",
        ".main-box": {
            padding: '40px 120px',
            background: "#080B0E",
        },
        ".main-img": {
            border: "1px solid",
            width: "100%",
            height: "100%",
            display: 'block'
        },
        ".main-img-1": {
            border: "1px solid",
            width: "235px",
            height: "192px",
        },
        ".sub-box": {
            padding: '40px 0px'
        },
        ".sub-box-heading": {
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "45px",
            letterSpacing: "0.06em",
            color: "#FBFBFB"
        },
        ".sub-box-text": {
            paddingTop: "8px",
            fontWeight: 300,
            fontSize: "20px",
            lineHeight: "24px",
            color: "#FBFBFB"
        },
        ".sub-box-2": {
            background: '#FBFBFB',
            padding: '40px 30px',
            marginTop: '40px'
        },
        ".sub-text-price": {
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "44px",
            color: "#080B0E",
        },
        ".book-now-btn": {
            border: '1px solid #C6A87D',
            borderRadius: "0px",
            padding: "16px 0px",
            width: '35%',
            height: '100%',
            color: "#FBFBFB",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "19px",
            textTransform: "capitalize"
        },
        ".sub-text": {
            fontWeight: 300,
            fontSize: "20px",
            lineHeight: "24px",
            color: "#080B0E"
        },
        ".secound-grid": {
            display: 'inline',
        },
        ".date-time-box": {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 0px'
        },
        ".footer-box": {
            display: 'inline'
        },
        ".surprise-me-box": {
            padding: '40px 16px',
            background: '#101418',
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'center'
        },
        ".surprise-me-heading": {
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "25px",
            color: '#FBFBFB',
            paddingBottom: '8px'
        },
        ".surprise-me-details": {
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#FBFBFB",
            lineHeight: '24px'
        },
        ".chef-main-box": {
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "30px",
            letterSpacing: "0.06em",
            color: "#FBFBFB",
            padding: "20px 0px"
        },
        ".header-club": {
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#080B0E',
        },
        '.super-club-text': {
            fontSize: '24px',
            lineHeight: '36px',
            fontWeight: '700',
            padding: '0px 31px',
            position: 'absolute',
            color: '#FBFBFB',
            width: '100%',
            bottom: '47px',
            textAlign: 'center',
        },
        '.text-img': {
            marginLeft: '35%'
        },

        ".dining-page-box": {
            padding: '0px',
            ".css-7jnpsn": {
                padding: "0px"
            },
            ".dining-page-main-box": {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: "center",
                padding: '20px 0px'
            },
            ".diningPage-title": {
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "30px",
                color: "#FBFBFB"
            },
            ".diningPage-btn": {
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#FFFFFF",
                border: '1px solid #4F4537',
                padding: "20px",
                textTransform: "capitalize"
            },
            ".dining-title": {
                display: 'none'
            },
            ".dining-more": {
                display: 'none'
            }
        },
        ".experiences-chef-box": {
            padding: "20px 0px"
        },
        ".abc": {
            '.css-1w60iqt-MuiPaper-root-MuiMobileStepper-root': {
                position: "absolute",
                bottom: "0rem",
                right: "40%",
                background: "none"
            },
        }
        ,
        "@media (min-width: 1px) and (max-width:425px)": {
            ".main-box": {
                padding: '0px',
            },
            ".sub-box": {
                display: "none"
            },
            ".secound-grid": {
                display: 'none'
            },
            ".footer-box": {
                display: 'none'
            },
            ".experiences-chef-box": {
                padding: "16px 16px"
            },
            ".chef-main-box": {
                fontSize: "20px",
                textAlign: 'center'
            },
        }
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className="main-box">
                    <Grid container spacing={2}>
                        <Grid item md={7} sm={6} xs={12} xl={7}>
                            <MobileView>
                                <Box className='header-club'>
                                    {!search &&
                                        <img src={priveeSerch} alt="vector" onClick={handleChange} />
                                    }
                                    <img src={priveeLogo} alt="title" className='text-img' />
                                </Box>
                                <Box style={{
                                    color: '#fff', background: '#080B0E', textAlign: 'center', padding: "16px",
                                    fontWeight: 700,
                                    fontSize: "20px",
                                    lineHeight: "25px"
                                }}> Chef Mako Ravindran</Box>
                            </MobileView>
                            {isMobile ? (<Box className="abc">
                                <AutoPlaySwipeableViews
                                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                    index={activeStep}
                                    onChangeIndex={handleStepChange}
                                    enableMouseEvents
                                >
                                    {images.map((step) => (
                                        <div>
                                            <Box className='main-div'>
                                                <img alt="sample_file" className="img" src={step} style={{ display: 'block', width: '100%', height: "100%", border: '1px solid ' }} />
                                            </Box>
                                        </div>
                                    ))}
                                </AutoPlaySwipeableViews>
                                <MobileStepper
                                    steps={maxSteps}
                                    position="static"
                                    activeStep={activeStep}
                                    sx={{
                                        background: "#FBFBFB",
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                />
                            </Box>) : (<Box>
                                <img src={ChefImg} alt="RestorentImg" className="main-img" />
                            </Box>)}
                            <Box>
                            </Box>
                            <Box className="sub-box">
                                <Typography className="sub-box-heading">Chef Mako Ravindran</Typography>
                                <Typography className="sub-box-text">Specialty: <span><b> Thai, Japanese</b></span></Typography>
                            </Box>
                            <Box sx={{ padding: '40px 16px 40px 16px', background: '#DCD7CB' }}>
                                <CardChefComponent />
                            </Box>
                            <Box className="experiences-chef-box" sx={{ padding: "20px 0px" }}>
                                <Typography className="chef-main-box" sx={{}}>Available Experiences by the Chef</Typography>
                                <Grid container spacing={2}>
                                    <Grid item md={6} sm={6} xs={12} xl={6}>
                                        <PriveeDining />
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={12} xl={6}>
                                        <PriveeDining />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className="dining-page-box">
                                <Box className="dining-page-main-box">
                                    <Typography className="diningPage-title">Chef Mako's Creations</Typography>
                                    <Button className="diningPage-btn">View More Chef</Button>
                                </Box>
                                <DiningPage />
                            </Box>
                            <Box className="surprise-me-box">
                                <Box>
                                    <Typography className="surprise-me-heading">Surprise me</Typography>
                                    <Typography className="surprise-me-details">An agnostic menu that explores a diverse culinary journey with chef mako at the helm</Typography>
                                </Box>
                                <Button className="book-now-btn">Book Now</Button>
                            </Box>
                            <RatingCarousel isColor={true} />
                            <NeedHelp 
                                isColor={true} 
                                title={footerData?.footer.footer.common_footer.details.title}
                                description={footerData?.footer.footer.common_footer.details.description}
                                button_call={footerData?.footer.footer.common_footer.details.button1_text}
                                button_email={footerData?.footer.footer.common_footer.details.button2_text}
                            />
                            {/* <ChefCarousel /> */}
                            {/* <DetailsCarousel /> */}
                            {/* <Treaty /> */}
                            {/* <Rating /> */}
                            {/* <NeedHelp /> */}
                        </Grid>
                        <Grid item md={5} sm={6} xs={12} xl={5} className="secound-grid">
                            <Grid container spacing={2}>
                                <Grid item md={6} sm={6} xs={6} xl={6}>
                                    <img src={ChefImg} alt="RestorentImg" className="main-img-1" />
                                </Grid>
                                <Grid item md={6} sm={6} xs={6} xl={6}>
                                    <img src={ChefImg} alt="RestorentImg" className="main-img-1" />
                                </Grid>
                                <Grid item md={6} sm={6} xs={6} xl={6}>
                                    <img src={ChefImg} alt="RestorentImg" className="main-img-1" />
                                </Grid>
                                <Grid item md={6} sm={6} xs={6} xl={6}>
                                    <img src={ChefImg} alt="RestorentImg" className="main-img-1" />
                                </Grid>
                            </Grid>
                            {/* <Box className="sub-box-2">
                                <Box sx={{
                                    display: 'flex', paddingBottom: '20px',
                                    borderBottom: "0.5px solid #080B0E"
                                }}>
                                    <Typography className="sub-text-price">₹ 2,500 <sub className="sub-text">Per Diner</sub></Typography>
                                </Box>
                            </Box> */}
                            <ChefDetailsForm />
                        </Grid>
                    </Grid>
                </Box>
                {/* {isMobile ? (<Box sx={{ display: "flex", justifyContent: 'space-between', padding: "16px", background: '#DCD7CB' }}>
                    <Box>
                        <Typography className="mobile-view-price-text">₹ 2,500</Typography>
                        <Typography className="mobile-view-diner" >Per diner</Typography>
                    </Box>
                    <Button className="invite-btn">
                        Reserve a Seat
                    </Button>
                </Box>) : (<Box className="last-cantain">
                    <Box>
                        <Typography className="invite-friends-text">Invite friends & family</Typography>
                        <Typography className="experience-text" >enjoy a shared experience</Typography>
                    </Box>
                    <Button className="invite-btn">
                        Invite
                    </Button>
                </Box>)} */}
                <Box className="footer-box">
                    <Footer />
                </Box>
            </BoxWrapper>

        </React.Fragment >
    )
}
export default SupperClubDetailsPage