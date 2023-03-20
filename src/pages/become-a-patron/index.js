import React, {useContext} from "react";
import {
    Box,
    styled,
    Typography,
    Grid
} from "@mui/material";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarComponent";
import NeedHelp from "../../components/NeedHelp";
import FooterEnd from "../../components/FooterEndSection";
import trendingUp from "../../assets/images/trending-up.png";
import Questions from "../../components/Questions";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {isMobile} from "react-device-detect";
import gallery from "../../assets/images/sc-gallery.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ImageCarousel from "../../components/ImageCarousel";
import {Link} from "gatsby";
import BecomePatronContext from "../../context/BecomePatronContext";
import * as _ from "lodash";


const BecomePartner = () => {

    const {becomePatronData} = useContext(BecomePatronContext);

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
        '.membership-type': {
            background: '#FBFBFB',
            padding: '40px 300px',
        },

        '.membership-heading': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontSize: '24px',
            lineHeight: '30px',
            textAlign: 'center',
            letterSpacing: ' 0.06em',
            color: '#080B0E',
            marginBottom: '40px',
        },
        '.gold-memberships': {
            background: '#080B0E',
            padding: ' 40px 20px 49px',
            position: 'relative',
        },
        '.silver-memberships': {
            background: '#DCD7CB',
            padding: ' 40px 20px 49px',
            position: 'relative',
            boxShadow: '0px 8px 29px rgb(0 0 0 / 12%)',
        },
        '.gold-membership': {
            display: 'flex',
            justifyContent: 'space-between'
        },
        '.gold-membership-heading': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '24px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
        },
        '.silver-membership-heading': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '24px',
            letterSpacing: '0.06em',
            color: '#080B0E',
        },
        '.gold': {
            color: '#C6A87D',
            display: 'inline-block',
        },
        '.gold-months': {
            display: 'block',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '250',
            fontSize: '14px',
            lineHeight: '17px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
            marginTop: '5.5px',
            marginBottom: '20px',
        },
        '.silver-months': {
            display: 'block',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '250',
            fontSize: '14px',
            lineHeight: '17px',
            letterSpacing: '0.06em',
            color: '#080B0E',
            marginTop: '5.5px',
            marginBottom: '20px',
        },
        '.gold-membership-details': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
            marginBottom: '16px'
        },
        '.silver-membership-details': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            letterSpacing: '0.06em',
            color: '#080B0E',
            marginBottom: '16px'
        },
        '.gold-bi-arrow-right': {
            color: '#FBFBFB',
            fontSize: '40px'
        },
        '.silver-bi-arrow-right': {
            color: '#080B0E',
            fontSize: '40px'
        },
        '.gold-amount': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '250',
            fontSize: '16px',
            lineHeight: '19px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
            marginBottom: '14px',
            display: 'block',
        },
        '.silver-amount': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '250',
            fontSize: '16px',
            lineHeight: '19px',
            letterSpacing: '0.06em',
            color: '#080B0E',
            marginBottom: '14px',
            display: 'block',
        },
        '.most-popular': {
            position: 'absolute',
            width: 'auto',
            bottom: '0px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '15.6637px',
            lineHeight: '19px',
            textAlign: 'right',
            letterSpacing: '0.06em',
            color: '#C6A87D',
            right: ' 0px',
            padding: '12px 20px',
            background: '#12171C',
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
        '@media(min-width: 1px) and (max-width: 425px)': {
            '.membership-type': {
                background: '#FBFBFB',
                padding: '40px 10px',
                marginBottom: '-10px'
            },
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
            '.membership-type': {
                background: '#FBFBFB',
                padding: '40px 160px',
            },
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
                {
                    !_.isEmpty(becomePatronData) &&
                    <>
                        <Navbar heading="Become a Patron"/>
                        <Box className="corporate-b">
                            <Box className="container">
                                <Box className="top-10 position-absolute">
                                    <Typography><a href="/" className="header-link"><ArrowBackIcon
                                        style={{marginRight: '15px'}}/>Back</a></Typography>
                                </Box>
                                <Box className="position-absolute patron-flex">
                                    <Box>
                                        <Typography
                                            className="become-heading">{becomePatronData.become_patron.title}</Typography>
                                        <Typography className="become-detail">Check out the benifits our patron
                                            recieve </Typography>
                                    </Box>
                                    <Box><Typography style={{width: '100%'}}><Link href="/become-patron"
                                                                                   className="apply">Apply</Link></Typography></Box>
                                </Box>
                            </Box>
                        </Box>
                        <ImageCarousel/>
                        <Box className="big_dis">
                            <Box> <Typography
                                className="booking-heading">{becomePatronData.benifits.description}</Typography></Box>
                            <Grid container>
                                {
                                    becomePatronData.benifits.content.map((item) => {
                                        return (
                                            <Grid item xl={4} md={4} xs={12} sx={{paddingRight: '5px'}}
                                                  className="booking-border">
                                                <Typography className="book-title">{item.title}</Typography>
                                                <Typography className="book-detail">{item.description}</Typography>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                        <Box className="membership-type">
                            <Box><Typography
                                className="membership-heading">{becomePatronData.become_patron.title}</Typography></Box>
                            <Grid container spacing={4}>
                                <Grid item xl={6} md={6} xs={12}>
                                    <Box className="gold-memberships">
                                        <Box className="gold-membership">
                                            <Box>
                                                <b className="gold-membership-heading">Chef à Porter <span
                                                    className="gold">Gold membership</span></b>
                                                <span className="gold-months">for 12 months</span>
                                            </Box>
                                            <ArrowRightAltIcon className="gold-bi-arrow-right"/>
                                        </Box>
                                        <Typography className="gold-membership-details">Enjoy exclusive benefits through
                                            the
                                            year, including priority bookings, privileged seating and more</Typography>
                                        <span className="gold-amount"><b>₹</b><s>2,000</s> 1,800/month</span>
                                        <Box className="most-popular">Most Popular</Box>
                                    </Box>
                                </Grid>
                                <Grid item xl={6} md={6} xs={12}>
                                    <Box className="silver-memberships">
                                        <Box className="gold-membership">
                                            <Box>
                                                <b className="silver-membership-heading">Chef à Porter Silver
                                                    membership</b>
                                                <span className="silver-months">for 1 months</span>
                                            </Box>
                                            <ArrowRightAltIcon className="silver-bi-arrow-right"/>
                                        </Box>
                                        <Typography className="silver-membership-details">Enjoy exclusive benefits
                                            through the
                                            year, including priority bookings, privileged seating and more</Typography>
                                        <span className="silver-amount">₹2,000/month</span>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Questions isLightTheme={true}/>
                        <Box className="save_booking">
                            <Box className="container">
                                <Box className="row">
                                    <Box className="save-booking-details">
                                        <img src={trendingUp} className="save-booking-img" alt=""/><b>₹</b> 7k + saved
                                        in annual
                                        bookings by corporates
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <NeedHelp/>
                        <Footer/>
                        <FooterEnd/>
                    </>
                }
            </BoxWrapper>
        </React.Fragment>
    )
}
export default BecomePartner