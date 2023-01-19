import { Box, Button, Divider, Grid, MobileStepper, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { useTheme } from '@mui/material/styles';
import RestorentImg from "./../assets/images/RestorentImg.png"
import RestorentImgMobile from "./../assets/images/RestorentImgMobile.png"
import { isMobile, MobileView } from "react-device-detect";
import CardChefComponent from "./CardChefComponent";
import DiningPage from "./DiningPage";
import ChefCarousel from "./ChefCarousel";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Footer from "./Footer";
import DetailsCarousel from "./DetailsCarousel (1)";
import Treaty from "./Treaty";
import NeedHelp from "./NeedHelp";
import sampleText from './../assets/images/SupperClub.png'
import arrow from './../assets/images/arrow.png'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    RestorentImgMobile,
    RestorentImgMobile,
    RestorentImgMobile,
    RestorentImgMobile,
    RestorentImgMobile
];

const SupperClubChaefPage = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    const BoxWrapper = styled(Box)(() => ({
        // padding: '40px 120px',
        // background: "#DCD7CB",
        ".header-club": {
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#DCD7CB',
        },
        ".main-box": {
            padding: '40px 120px',
            background: "#DCD7CB",
        },
        ".main-img": {
            width: "100%",
            height: "100%",
            display: 'block'
        },
        ".main-img-1": {
            border: "1px solid",
            width: "100%",
            height: "192px",
            // display: 'block'
        },
        ".sub-box": {
            padding: '40px 0px'
        },
        ".sub-box-heading": {
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "45px",
            letterSpacing: "0.06em",
            color: "#080B0E"
        },
        ".sub-box-text": {
            paddingTop: "8px",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "19px"
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
        ".sub-text": {
            fontWeight: 300,
            fontSize: "20px",
            lineHeight: "24px",
            color: "#080B0E"
        },
        ".experience-date-box": {
            padding: '20px 0px'

        },
        ".experience-date-text": {
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "25px",
            color: "#080B0E"
        },
        ".experience-date-sub-test": {
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#080B0E"
        },
        ".main-date": {
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: "39px",
            color: "#080B0E",
            paddingRight: '10px'
        },
        ".date-month": {
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "17px"
        },
        ".date-day": {
            fontWeight: 250,
            fontSize: "14px",
            lineHeight: "17px"
        },
        ".time-btn": {
            border: '1px solid #F8A039',
            borderRadius: "0px",
            color: '#000',
            marginRight: '8px',
            height: '50px'
        },
        ".end-time-btn": {
            border: '1px solid #000',
            borderRadius: "0px",
            color: '#000',
            height: '50px'
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
        ".invite-btn": {
            border: '1px solid #000',
            background: '#000',
            borderRadius: "0px",
            color: '#fff',
            height: 'auto',
            width: '200px'
        },
        ".invite-friends-text": {
            fontWeight: 700,
            fontSize: "30px",
            lineHeight: "37px"
        },
        ".experience-text": {
            fontWeight: 300,
            fontSize: "20px",
            lineHeight: "24px"
        },
        ".last-cantain": {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '41.5px 120px'
        },
        ".footer-box": {
            display: 'inline'
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
        '.date-stack': {
            color: '#FBFBFB', background: '#101418', padding: '16px 13px'
        },
        '.date-description': {
            fontSize: '14px',
            fontWeight: 400
        },
        '.blowOut-description': {
            padding: '20px 16px',
        },
        '.blowOut-title': {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 700
        },
        '.slots': {
            display: 'flex', justifyContent: 'space-between',
            paddingTop: '4px',
        },
        '.slot-title': {
            fontSize: '16px',
        },
        '.slot-title2': {
            fontSize: '14px',
        },
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
        }
    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                <MobileView>
                    <Box className='header-club'>
                        <img src={arrow} alt="title" className='back-aerrow' />
                        <img src={sampleText} alt="title" className='supper-club-image' />
                    </Box>
                    <Box>
                        <Stack
                            className="date-stack"
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={2}
                        >
                            <Typography className="date-description">April 9</Typography>
                            <Typography className="date-description"> 7:30 PM - 10 PM</Typography>
                            <Typography className="date-description">Blue Cafe, Kamanahalli</Typography>
                        </Stack>
                    </Box>
                    <Box className="blowOut-description">
                        <Typography className="blowOut-title">The Big Fat Parsi Blowout</Typography>
                        <Box className="slots">
                            <Typography className="slot-title">
                                Curated by Chef Mako
                            </Typography>
                            <Typography className="slot-title2">
                                2 Slots Left!o
                            </Typography>
                        </Box>
                    </Box>

                </MobileView>
                <Box className="main-box">
                    <Grid container spacing={{ md: 2 }}>
                        <Grid item xl={7} md={7} sm={6} xs={12}>
                            {isMobile ? (<Box sx={{ background: "#fff" }}>
                                <AutoPlaySwipeableViews
                                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                    index={activeStep}
                                    onChangeIndex={handleStepChange}
                                    enableMouseEvents
                                >
                                    {images.map((step) => (
                                        <div>
                                            <Box className='main-div'>
                                                <img alt="sample_file" className="img" src={step} style={{ display: 'block', width: '100%', height: "100%", }} />
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
                                <img src={RestorentImg} alt="RestorentImg" className="main-img" />
                            </Box>)}
                            <Box>
                            </Box>
                            <Box className="sub-box">
                                <Typography className="sub-box-heading">The Big Fat Parsi Blowout</Typography>
                                <Typography className="sub-box-text">Curated by <span><b>Chef Mako</b></span></Typography>
                                <Typography className="sub-box-text">2 Slots Left!</Typography>
                            </Box>
                            <Box sx={{ padding: '40px 16px 16px 16px', background: '#FBFBFB' }}>
                                <CardChefComponent bgColor="#FBFBFB" />
                            </Box>
                            <Box sx={{ padding: '16px 16px 40px 16px', background: '#DCD7CB' }}>
                                <CardChefComponent />
                            </Box>
                            <DiningPage />
                            <ChefCarousel />
                            <DetailsCarousel />
                            <Treaty />
                            <NeedHelp />
                        </Grid>
                        <Grid item md={5} sm={6} xs={12} xl={5} className="secound-grid">
                            <Grid container spacing={2}>
                                <Grid item md={6} sm={6} xs={6} xl={6}>
                                    <img src={RestorentImg} alt="RestorentImg" className="main-img-1" />
                                </Grid>
                                <Grid item md={6} sm={6} xs={6} xl={6}>
                                    <img src={RestorentImg} alt="RestorentImg" className="main-img-1" />
                                </Grid>
                                <Grid item md={6} sm={6} xs={6} xl={6}>
                                    <img src={RestorentImg} alt="RestorentImg" className="main-img-1" />
                                </Grid>
                                <Grid item md={6} sm={6} xs={6} xl={6}>
                                    <img src={RestorentImg} alt="RestorentImg" className="main-img-1" />
                                </Grid>
                            </Grid>
                            <Box className="sub-box-2">
                                <Box sx={{
                                    display: 'flex', paddingBottom: '20px',
                                    borderBottom: "0.5px solid #080B0E"
                                }}>
                                    <Typography className="sub-text-price">₹ 2,500 <sub className="sub-text">Per Diner</sub></Typography>
                                </Box>
                                <Box className="experience-date-box">
                                    <Typography className="experience-date-text">Experience Date</Typography>
                                    <Typography className="experience-date-sub-text">Pick your preferred experience date</Typography>
                                </Box>
                                <Box className="date-time-box">
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography className="main-date">12</Typography>
                                        <Box>
                                            <Typography className="date-month">November</Typography>
                                            <Typography className="date-day">Wednesday</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Button className="time-btn">
                                            12:00 - 1:00pm
                                        </Button>
                                        <Button className="end-time-btn">
                                            7:30 - 9:00pm
                                        </Button>
                                    </Box>
                                </Box>
                                <Box className="date-time-box">
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography className="main-date">13</Typography>
                                        <Box>
                                            <Typography className="date-month">November</Typography>
                                            <Typography className="date-day">Wednesday</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Button className="time-btn">
                                            12:00 - 1:00pm
                                        </Button>
                                        <Button className="end-time-btn">
                                            7:30 - 9:00pm
                                        </Button>
                                    </Box>
                                </Box>
                                <Box className="date-time-box">
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography className="main-date">14</Typography>
                                        <Box>
                                            <Typography className="date-month">November</Typography>
                                            <Typography className="date-day">Wednesday</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Button className="time-btn">
                                            12:00 - 1:00pm
                                        </Button>
                                        <Button className="end-time-btn">
                                            7:30 - 9:00pm
                                        </Button>
                                    </Box>
                                </Box>
                                <Box className="date-time-box">
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography className="main-date">15</Typography>
                                        <Box>
                                            <Typography className="date-month">November</Typography>
                                            <Typography className="date-day">Wednesday</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Button className="time-btn">
                                            12:00 - 1:00pm
                                        </Button>
                                        <Button className="end-time-btn">
                                            7:30 - 9:00pm
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                {isMobile ? (<Box sx={{ display: "flex", justifyContent: 'space-between', padding: "16px", background: '#DCD7CB' }}>
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
                </Box>)}
                <Box className="footer-box">
                    <Footer />
                </Box>
            </BoxWrapper>

        </React.Fragment>
    )
}
export default SupperClubChaefPage