import React from "react";
import {
    Box,
    styled,
    Typography,
    Grid
} from "@mui/material";
import Footer from "../../components/Footer";
import Navbar from "../navbar";
import NeedHelp from "../../components/NeedHelp";
import FooterEnd from "../../components/FooterEndSection";
import trendingUp from "../../assets/images/trending-up.png";
import Questions from "../../components/Questions";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {isMobile} from "react-device-detect";
import gallery from "../../assets/images/sc-gallery.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CommanCarousel from "../../components/CommanCarousel";

const CorporateBooking = () => {

    const BoxWrapper = styled(Box)(() => ({
        background: '#FBFBFB',
        '.corporate-b': {
            marginTop: '80px',
            backgroundImage: `linear-gradient(180.32deg, rgba(0, 0, 0, 0) 21.51%, rgba(0, 0, 0, 0.4) 81.02%),url(${gallery})`,
            height: '500px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.16))',
            padding: '30px 300px'
        },
        '.container': {
            position: 'relative',
            height: 'inherit',
        },
        '.top-10': {
            top: '50px',
            bottom: '0px',
        },
        ".header-link": {
            display: 'flex',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            textDecoration: 'none',
            position: 'absolute',
        },
        ".header-link:hover": {
            color: '#C6A87D !important',
        },
        '.position-absolute': {
            width: '100%',
            bottom: '40px',
            position: 'absolute'
        },
        '.become-heading': {
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '32px',
            lineHeight: '39px',
            color: '#FBFBFB',
            fontFamily: 'Proxima Nova',
            marginBottom: '8px',
        },
        '.become-detail': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '18px',
            lineHeight: '22px',
            color: '#FBFBFB',
            marginBottom: '0px',
        },
        '.apply': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#080B0E',
            width: '250px',
            background: ' #fff',
            display: 'block',
            textAlign: 'center',
            padding: '16.5px',
            textDecoration: 'none',
        },
        '.apply:hover': {
            color: '#C6A87D',
        },
        '.patron-flex': {
            display: "flex",
            justifyContent: 'space-between'
        },
        '.save_booking': {
            background: '#101418',
            padding: '16px 0px',
            marginBottom: '2px',
        },
        ".header-club": {
            display: 'none',
            padding: '15px',
            backgroundColor: '#DCD7CB',
        },
        '.save-booking-details': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontweight: '400',
            fontSize: '14px',
            lineHeight: '17px',
            textAlign: 'center',
            color: '#FBFBFB',
        },
        '.save-booking-img': {
            height: '24px',
            width: '24px',
            objectFit: 'contain',
            marginRight: ' 8px',
            verticalAlign: 'middle'
        },
        '.big_dis': {
            padding: '80px 300px',
            background: '#101418',
        },
        '.booking-heading': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '28px',
            letterSpacing: '-0.01em',
            color: '#FBFBFB',
            textAlign: 'center',
            marginBottom: '25px',
        },
        '.book-title': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '28px',
            letterSpacing: '-0.01em',
            color: '#FBFBFB',
            marginBottom: '4px',
        },
        '.book-detail': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontSize: '18px',
            lineHeight: '24px',
            letterSpacing: '-0.01em',
            color: '#FBFBFB',
            marginBottom: '0px',
        },
        '.booking-border': {
            borderLeft: '0.25px solid #FBFBFB',
            paddingLeft: '14px'
        },
        '.gallery-carousel': {
            display: 'none'
        },
        '@media(min-width: 1px) and (max-width: 425px)': {
            ".header-club": {
                display: 'block'
            },
            '.booking-border': {
                borderLeft: 'unset',
                borderTop: '0.25px solid #FBFBFB',
                paddingLeft: '0px',
                paddingTop: '10px',
            },
            '.big_dis': {
                padding: '30px 10px',
                background: '#101418',
            },
            '.corporate-b': {
                display: 'none'
            },
            '.gallery-carousel': {
                display: 'block'
            },
        },
        '.booked_us':{
            padding: '40px 0px',
            background: '#DCD7CB'
        },
        '.corporate-booking-heading': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '30px',
            color: '#080B0E',
            textAlign: 'center',
            marginBottom: '20px',
        },
        '@media(min-width: 320px) and (max-width: 768px)': {
            ".patron-mobile-heading": {
                padding: '8px 10px !important',
                fontSize: "24px",
                textAlign: 'center',
                color: '#000',
                fontFamily: 'Bon Vivant'
            },
            ".header-club": {
                padding: '0px',
                display: 'block'
            },
            '.booking-border': {
                borderLeft: 'unset',
                borderTop: '0.25px solid #FBFBFB',
                paddingLeft: '0px',
                paddingTop: '10px',
            },
            '.big_dis': {
                padding: '30px 10px',
                background: '#101418',
            },
        },
        '@media(min-width:600px) and (max-width: 768px)': {
            ".patron-mobile-heading": {
                textAlign: 'left',
            },
            '.patron-flex': {
                display: "block",
            },
            '.apply': {
                width: "100%"
            },
            '.corporate-b': {
                marginTop: '0px',
            }
        },

        '@media(min-width: 768px) and (max-width: 1460px)': {
            '.big_dis': {
                padding: '80px 40px',
                background: '#101418',
            },
            '.corporate-b': {
                padding: '30px 50px'
            },
        },
    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                <Navbar/>
                {isMobile ? (
                    <Box className='header-club'>
                        <Typography className="patron-mobile-heading">Corporate Booking</Typography>
                    </Box>
                ) : ('')}
                <Box className="corporate-b">
                    <Box className="container">
                        <Box className="top-10 position-absolute">
                            <Typography><a href="" className="header-link"><ArrowBackIcon
                                style={{marginRight: '15px'}}/>Back</a></Typography>
                        </Box>
                        <Box className="position-absolute patron-flex">
                            <Box>
                                <Typography className="become-heading">Corporate Booking</Typography>
                                <Typography className="become-detail">Join as a member and get exclusive member
                                    priviliges</Typography>
                            </Box>
                            <Box><Typography style={{width: '100%'}}><a href="" className="apply">Apply</a></Typography></Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="gallery-carousel"><CommanCarousel/></Box>
                <Box className="big_dis">
                    <Grid container>
                        <Grid item xl={4} md={4} xs={12}>
                            <Typography className="book-title">Big discount</Typography>
                            <Typography className="book-detail">Divide your purchase into easy EMIs of 3,6,9,12,18 or 24
                                months, according to your ease.</Typography>
                        </Grid>
                        <Grid item xl={4} md={4} xs={12} sx={{paddingRight: '5px'}} className="booking-border">
                            <Typography className="book-title">Exclusive Access to Top Chefs</Typography>
                            <Typography className="book-detail">Forget heaps of paper work and never ending forms. All
                                you need are KYC documents.</Typography>
                        </Grid>
                        <Grid item xl={4} md={4} xs={12} sx={{paddingRight: '5px'}} className="booking-border">
                            <Typography className="book-title">Early access to Supper clubs</Typography>
                            <Typography className="book-detail">Products bought from EMI network have minimal or zero
                                down payment, convert your purchases into EMIs.</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box className="booked_us">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Typography className="corporate-booking-heading">Corporate that have booked with us</Typography>
                            </div>
                        </div>
                        <div className="row d-grid">
                            <div className="col-lg-2">
                                <img src="assets/images/bethesda.png" alt="" />
                            </div>
                            <div className="col-lg-2">
                                <img src="assets/images/thekitchn.png" alt="" />
                            </div>
                            <div className="col-lg-2">
                                <img src="assets/images/food52.png" alt="" />
                            </div>
                            <div className="col-lg-2">
                                <img src="assets/images/leites-culinaria-1.png" alt="" />
                            </div>
                            <div className="col-lg-2">
                                <img src="assets/images/hallmark_channel.png" alt="" />
                            </div>
                            <div className="col-lg-2">
                                <img src="assets/images/good-day-DC-logo.png" alt="" />
                            </div>
                        </div>
                    </div>
                </Box>
                <Questions isLightTheme={true}/>
                <Box className="save_booking">
                    <Box className="container">
                        <Box className="row">
                            <Box className="save-booking-details">
                                <img src={trendingUp} className="save-booking-img" alt=""/><b>₹</b> 7k + saved in annual
                                bookings by corporates
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <NeedHelp/>
                <Footer/>
                <FooterEnd/>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default CorporateBooking