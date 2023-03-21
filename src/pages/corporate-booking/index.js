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
import {isMobile} from "react-device-detect";
import gallery from "../../assets/images/sc-gallery.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import bookingImg1 from "../../assets/images/bethesda.png";
import bookingImg2 from "../../assets/images/thekitchn.png";
import bookingImg3 from "../../assets/images/food52.png";
import bookingImg4 from "../../assets/images/leites-culinaria-1.png";
import bookingImg5 from "../../assets/images/hallmark_channel.png";
import bookingImg6 from "../../assets/images/good-day-DC-logo.png";
import ContactUsBox from "../../components/ContactUs";
import ImageCarousel from "../../components/ImageCarousel";
import {Link} from "gatsby";
import '../../assets/styles/fontStyle.css';
import CorporateBookingContext from "../../context/CorporateBookingContext";
import * as _ from "lodash";
import CorporateBookingQuestion from "../../components/CorporateBookingQuestions";

const CorporateBooking = () => {

    const {corporateBookingData} = useContext(CorporateBookingContext);

    const BoxWrapper = styled(Box)(() => ({
        background: '#FBFBFB',
        '.corporate-b': {
            marginTop: '80px',
            // backgroundImage: `linear-gradient(180.32deg, rgba(0, 0, 0, 0) 21.51%, rgba(0, 0, 0, 0.4) 81.02%),url(${gallery})`,
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
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '600',
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
            fontFamily: 'ProximaNovaA-Regular',
            marginBottom: '8px',
        },
        '.become-detail': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '18px',
            lineHeight: '22px',
            color: '#FBFBFB',
            marginBottom: '0px',
        },
        '.apply': {
            fontFamily: 'ProximaNovaA-Regular',
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
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
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
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '28px',
            letterSpacing: '-0.01em',
            color: '#FBFBFB',
            marginBottom: '4px',
        },
        '.book-detail': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: 300,
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
        '.booked-us-img': {
            background: '#FBFBFB',
            width: '183px',
            height: '94px',
            objectFit: 'contain',
            objectPosition: 'center',
            padding: '0px 12px'
        },
        '.booked_us': {
            padding: '40px 300px',
            background: '#DCD7CB'
        },
        '.corporate-booking-heading': {
            fontFamily: 'Bon Vivant',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '24px',
            lineHeight: '30px',
            color: '#080B0E',
            textAlign: 'center',
            marginBottom: '20px',
        },
        '.apply_div': {
            padding: '40px 4px',
            display: 'none',
        },
        '.apply_btn': {
            width: 'auto',
            background: '#080B0E',
            border: '0px',
            borderRadius: '0px',
            padding: '19px 10px',
            display: 'block',
            textAlign: 'center',
            textDecoration: 'none',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#DCD7CB',
        }, '.apply_btn:hover': {
            color: '#C6A87D !important',
        },
        '.mbl-view-big-dis': {
            display: 'none'
        },
        '@media(min-width: 1px) and (max-width: 425px)': {
            ".header-club": {
                display: 'block'
            },
            '.booking-border': {
                borderLeft: 'unset',
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
                display: 'block',
                // paddingTop: '48px'
            },
            '.booked_us': {
                padding: '40px 15px',
            },
            '.booked-us-img': {
                width: '130px',
                height: '94px',
                objectFit: 'contain',
                objectPosition: 'center',
                padding: '0px 12px'
            },
            '.apply_div': {
                display: 'block',
            },
            '.mbl-view-big-dis': {
                display: 'block',
                paddingBottom: '10px'
            },
        },
        '@media(min-width: 1px) and (max-width: 325px)': {
            '.booked_us': {
                padding: '40px 15px',
            },
            '.booked-us-img': {
                width: '100px',
                height: '94px',
                objectFit: 'contain',
                objectPosition: 'center',
                padding: '0px 12px'
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
            },
            '.booked_us': {
                padding: '40px 150px',
            },
            '.booked-us-img': {
                width: '160px',
                height: '94px',
                objectFit: 'contain',
                objectPosition: 'center',
                padding: '0px 12px'
            },
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
        '@media(min-width: 1200px) and (max-width: 1460px)': {
            '.booked_us': {
                padding: '40px 10px',
            },
            '.booked-us-img': {
                width: '170px',
                height: '94px',
                objectFit: 'contain',
                objectPosition: 'center',
                padding: '0px 12px'
            },
        },
        '@media(min-width: 900px) and (max-width: 1100px)': {
            '.booked_us': {
                padding: '40px 10px',
            },
            '.booked-us-img': {
                width: '130px',
                height: '94px',
                objectFit: 'contain',
                objectPosition: 'center',
                padding: '0px 12px'
            },
        },
    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                {
                    !_.isEmpty(corporateBookingData) &&
                    <>
                        <Navbar heading="Corporate Booking"/>
                        <Box className="corporate-b"
                             sx={{backgroundImage: `linear-gradient(180.32deg, rgba(0, 0, 0, 0) 21.51%, rgba(0, 0, 0, 0.4) 81.02%),url(${corporateBookingData.header.image})`,}}>
                            <Box className="container">
                                <Box className="top-10 position-absolute">
                                    <Typography><a href="" className="header-link"><ArrowBackIcon
                                        style={{marginRight: '4px'}}/>Back</a></Typography>
                                </Box>
                                <Box className="position-absolute patron-flex">
                                    <Box>
                                        <Typography
                                            className="become-heading">{corporateBookingData.header.title}</Typography>
                                        <Typography
                                            className="become-detail">{corporateBookingData.header.description}</Typography>
                                    </Box>
                                    <Box><Typography style={{width: '100%'}}><Link href="/become-partner"
                                                                                   className="apply">Apply</Link></Typography></Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="gallery-carousel"><ImageCarousel/></Box>
                        <Box className="big_dis">
                            <Grid container>
                                <Box><Typography className="book-detail mbl-view-big-dis">Join as a member and get
                                    exclusive
                                    member priviliges</Typography></Box>
                                {
                                    corporateBookingData.header.content.map((item) => {
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
                        <Box className="booked_us">
                            <Box className="container">
                                <Box className="col-lg-12">
                                    <Typography
                                        className="corporate-booking-heading">{corporateBookingData.booked_us.title}</Typography>
                                </Box>
                                <Grid container spacing={1} gridTemplateColumns="repeat(12, 1fr)">
                                    {corporateBookingData.booked_us.content.map((item, index) => (
                                        <Grid key={index} item xl={2} md={2} xs={6} className="img-grid">
                                            <img src={item} className="booked-us-img"/>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Box>
                        <CorporateBookingQuestion isLightTheme={true}/>
                        <ContactUsBox title={corporateBookingData.contact_us.title}
                                      description={corporateBookingData.contact_us.description}/>
                        <Box className="save_booking">
                            <Box className="container">
                                <Box className="row">
                                    <Box className="save-booking-details">
                                        <img src={trendingUp} className="save-booking-img"
                                             alt=""/>{corporateBookingData.corporate_bookings_footer.title}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="apply_div">
                            <a href="" className="apply_btn">Apply</a>
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
export default CorporateBooking