import React, {useContext, useEffect, useState} from "react";
import {Box, Grid, ImageListItem, styled, Typography,} from "@mui/material";
import Navbar from "../../components/NavbarComponent";
import add1 from "../../assets/images/add1.png";
import add2 from "../../assets/images/add2.png";
import add3 from "../../assets/images/add3.png";
import add4 from "../../assets/images/add4.png";
import add5 from "../../assets/images/add5.png";
import add6 from "../../assets/images/add6.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddonsCard from "../../components/AddonsCard";
import sGallery from "../../assets/images/sc-gallery.png";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {isMobile} from "react-device-detect";
import "../../assets/styles/fontStyle.css"
import {navigate} from "gatsby";
import UsersContext from "../../context/UsersContext";
import * as _ from "lodash";
import Cookies from "js-cookie";


const Addons = (props) => {
    const summaryCookieValue = Cookies.get('BookingId');
    const summaryBookingId = summaryCookieValue?.replaceAll('"', '')

    console.log("summaryBookingId========", summaryBookingId)
    const {bookingId} = props;
    const {addOnsData, adPaymentData, setPriveePayment} = useContext(UsersContext);
    const handleClick = () => {
        navigate(`/booking-summary/${summaryBookingId}`);
        setPriveePayment(true)
    }

    // const cookieValue = Cookies?.get('adsPaymentInfo');
    // const [paymentCalculationData, setPaymentCalculationData] = useState()
    //
    // useEffect(() => {
    //     if (!_.isEmpty(cookieValue)) {
    //         setPaymentCalculationData(JSON.parse(cookieValue));
    //     }
    // }, [cookieValue])
    //
    // console.log("paymentCalculationData===========", paymentCalculationData)
    // console.log("paymentCalculationData cookieValue===========", cookieValue)

    const BoxWrapper = styled(Box)(() => ({
        background: '#101418',
        '.supper-gallery': {
            marginTop: '40px',
        },
        '.supper-gallery .container-fluid': {
            padding: '80px 120px'
        },
        '.book-trad': {
            display: 'flex',
            placeItems: 'center',
            marginBottom: '40px',
            paddingLeft: '0px !important',
        },
        '.addons-title': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '32px',
            lineHeight: '39px',
            color: '#FBFBFB',
            marginBottom: '0px',
            marginLeft: '16px',
        },
        '.arrow-left': {
            color: '#FBFBFB',
            cursor: 'pointer',
            // fontSize: '20px',
        },
        '.partner': {
            border: '0px',
            background: '#DCD7CB',
            padding: '40px 20px',
        },
        '.addons-heading': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontSize: '18px',
            lineHeight: '20px',
            marginBottom: '16px',
        },
        // '.cust-details': {
        //     padding: '0px 15px'
        // },
        '.dinner-box': {
            padding: '0px 15px'
        },
        '.per-dinner': {
            background: '#101418',
            padding: '40px 20px',
            boxShadow: '0px 20px 24px rgb(0 0 0 / 6%)',
        },
        '.event-div': {
            display: 'flex'
        },
        '.per-dinner-img': {
            width: '116px',
            height: '116px',
            objectFit: 'cover',
        },
        '.rating-star': {
            fontStyle: 'Proxima Nova Alt',
            display: 'flex',
            fontWeight: '100',
            alignItems: 'center',
            fontSize: '18px',
            lineHeight: '20px',
            color: '#FBFBFB'
        },
        '.event-title': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '25px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
            marginBottom: '8px'
        },
        '.event-subtitle': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '15px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
            marginBottom: '11px',
        },
        '.event-link': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '19px',
            textDecoration: 'none',
            color: '#FBFBFB !important',
        },
        '.experience-breakup': {
            border: '0.5px solid #DCD7CB',
            padding: '16px 16px 0px',
            marginTop: '30px',
        },
        '.ex-details': {
            position: 'relative',
        },
        '.ex-heading': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '25px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
            marginBottom: '10px'
        },
        '.ex-detail': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '17px',
            color: '#FBFBFB',
            marginBottom: '0px',
        },
        '.ex-icon': {
            position: 'absolute',
            right: '0px',
            top: '0px',
            height: '24px',
            width: '24px',
            color: '#FBFBFB',
            ' -webkit-text-stroke': '1px',
        },
        '.submit-req': {
            background: '#C6A87D',
            color: '#080B0E',
            fontFamily: 'ProximaNovaA-Regular',
            fontSize: '20px',
            lineHeight: '24px',
            border: '0px',
            marginBottom: '30px',
            marginTop: '30px',
            width: '100%',
            cursor: 'pointer',
            padding: '18px 10px'
        },
        '.contact-text': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '17px',
            textAlign: 'center',
            color: 'rgba(251, 251, 251, 0.6)',
        },
        '.table': {
            marginTop: '20px',
            marginBottom: '0px'
        },
        '.table-box': {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
        },
        '.table-details': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
            padding: '0px 0px 16px',
        },
        '.table-details-pt': {
            paddingTop: '16px'
        },
        '.grand-total': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            padding: '16px 0px'
        },
        '.border': {
            borderTop: '1px solid rgba(255, 255, 255, 0.6)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
            // paddingTop: '16px'
        },
        '.tax1': {
            paddingTop: '20px',
        },
        ".header-club": {
            display: 'none',
            padding: '15px',
            backgroundColor: '#080B0E',
        },
        '.addons-div': {
            padding: '0px 12px'
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            '.supper-gallery .container-fluid': {
                padding: '20px 10px'
            },
            ".header-club": {
                padding: '0px 110px',
                display: 'flex',
            },
            ".addones-mobile-heading": {
                padding: '8px 0px !important',
                fontSize: "24px",
                textAlign: 'center',
                color: '#FBFBFB !important',
                fontFamily: 'Bon Vivant'
            },
            '.addons-title': {
                fontSize: '28px',
                lineHeight: '30px',
            },
            '.per-dinner': {
                padding: '20px 0px'
            },
            '.table-details': {
                fontSize: '12px',
                lineHeight: '15px',
            },
            '.grand-total': {
                fontSize: '16px',
                lineHeight: '20px',
            },
            '.ex-heading': {
                fontSize: '16px',
                lineHeight: '20px',
                letterSpacing: '0.04em',
            },
            '.event-title': {
                fontSize: '14px',
                lineHeight: '18px',
                letterSpacing: '0.04em',
            },
            '.event-link': {
                fontSize: '14px',
                lineHeight: '18px',
            },
            '.rating-star': {
                fontSize: '14px',
                lineHeight: '18px',
            },
            '.submit-req': {
                fontSize: '16px',
                lineHeight: '18px',
            },
            '.book-trad': {
                display: 'none',
                // placeItems: 'center',
                // marginBottom: '40px',
                // paddingLeft: '0px !important',
            },
            '.addons-div': {
                padding: '0px'
            },
            '.dinner-box': {
                display: 'none'
            }
        },
        "@media (min-width: 371px) and (max-width:400px)": {
            '.header-club': {
                padding: '0px 150px'
            }
        },
        "@media (min-width: 425px) and (max-width:450px)": {
            '.header-club': {
                padding: '0px 170px'
            }
        },
        "@media (min-width: 426px) and (max-width:768px)": {
            '.supper-gallery .container-fluid': {
                padding: '40px 80px'
            },
            '.header-club': {
                display: 'flex'
            },
        },
        "@media (min-width: 320px) and (max-width:767px)": {
            ".addones-mobile-heading": {
                padding: '8px 0px !important',
                fontSize: "24px",
                textAlign: 'center',
                color: '#FBFBFB',
                fontFamily: 'Bon Vivant'
            },
        },
        '@media(min-width:600px) and (max-width: 768px)': {
            '.header-club': {
                display: 'flex',
                background: '#DCD7CB',
            },
            '.bm-burger-bars': {
                background: '#080B0E !important',
            },
            '.makeStyles-title-7': {
                textAlign: 'center !important'
            }
        },
        ".addones-mobile-heading": {
            fontSize: "24px",
            paddingLeft: '280px',
            textAlign: 'center',
            color: "#080B0E",
            fontFamily: 'Bon Vivant'
        },
    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                <Navbar to={'/addons'} isColor={true} isIcon={true} heading="Private"/>
                {
                    !_.isEmpty(addOnsData && bookingId) &&
                    <Box className="supper-gallery cust-details">
                        <Box className="container-fluid">
                            <Box className="row supper-chef-details">
                                <Box className="book-trad">
                                    <ArrowBackIcon className="arrow-left"
                                                   onClick={() => navigate(`/customer-details`)}/>
                                    <Typography className="addons-title">Add-on Services</Typography>
                                </Box>
                                <Box className="row customer-details addons-div">
                                    <Grid container>

                                        <Grid xl={7} lg={7} xs={7} md={7} sm={12} xs={12} className="partner">
                                            <Typography className="addons-heading">Our partners help you get set up with
                                                the perfect custom experience</Typography>
                                            <AddonsCard/>
                                        </Grid>
                                        <Grid xl={5} lg={5} xs={5} md={5} sm={12} xs={12}
                                              className="cust-details dinner-box">
                                            <Box className="per-dinner adsss">
                                                <Box className="event-div">
                                                    <img src={sGallery} alt="" className="per-dinner-img"/>
                                                    <Box sx={{marginLeft: '12px'}}>
                                                        <Typography className="event-title">The Big Fat Parsi
                                                            Blowout</Typography>
                                                        <Typography className="event-subtitle">Curated by <a href="#"
                                                                                                             className="event-link">Chef
                                                            Mako</a></Typography>
                                                        <Typography className='rating-star'>
                                                            <StarIcon
                                                                sx={{
                                                                    color: '#C6A87D',
                                                                    height: '24px',
                                                                    width: '24px'
                                                                }}/> 4.7
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box className="experience-breakup">
                                                    <Box className="ex-details">
                                                        <Typography className="ex-heading">
                                                            Breakup</Typography>
                                                        {/*<Typography className="ex-detail">This is an estimate, final*/}
                                                        {/*    price*/}
                                                        {/*    will be <br/>communicated on*/}
                                                        {/*    call*/}
                                                        {/*</Typography>*/}
                                                        <ExpandMoreIcon className="ex-icon"/>
                                                    </Box>
                                                    {
                                                        !_.isEmpty(adPaymentData) &&
                                                        <Box className="table table-borderless">
                                                            <Box className="table-box">
                                                                <Typography
                                                                    className="table-details">Experience*</Typography>
                                                                <Typography
                                                                    className="table-details">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(adPaymentData?.payment?.experience)}</Typography>
                                                            </Box>
                                                            <Box className="table-box">
                                                                <Typography
                                                                    className="table-details">Service
                                                                    Staff**</Typography>
                                                                <Typography
                                                                    className="table-details">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(adPaymentData?.payment?.service_staff)}</Typography>
                                                            </Box>
                                                            <Box className="table-box">
                                                                <Typography
                                                                    className="table-details">Addon Cost</Typography>
                                                                <Typography
                                                                    className="table-details">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(adPaymentData?.payment?.addon_cost)}</Typography>
                                                            </Box>
                                                            <Box className="table-box border table-details-pt">
                                                                <Typography
                                                                    className="table-details">Sub
                                                                    total</Typography>
                                                                <Typography
                                                                    className="table-details">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(adPaymentData?.payment?.sub_total)}</Typography>
                                                            </Box>
                                                            <Box className="table-box table-details-pt">
                                                                <Typography className="table-details">GST
                                                                    @5%</Typography>
                                                                <Typography
                                                                    className="table-details">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(adPaymentData?.payment?.GST)}</Typography>
                                                            </Box>
                                                            <Box className="table-box">
                                                                <Typography className="table-details">Service Charges
                                                                    @10%</Typography>
                                                                <Typography
                                                                    className="table-details">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(adPaymentData?.payment?.service_charges)}</Typography>
                                                            </Box>
                                                            <Box className="table-box border">
                                                                <Typography
                                                                    className="grand-total">Grand Total</Typography>
                                                                <Typography
                                                                    className="grand-total">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(adPaymentData?.payment?.total)}</Typography>
                                                            </Box>
                                                            <Box className="tax tax1">
                                                                <Typography className="table-details">*Includes
                                                                    the menu, tableware, table set-up and
                                                                    white-glove service.</Typography>
                                                                <Typography className="table-details">**Service
                                                                    staff is calculated based on number of
                                                                    diners.</Typography>
                                                            </Box>
                                                        </Box>
                                                    }
                                                </Box>
                                                <Box className="row viewbreak">
                                                    <Box className="col-lg-12">
                                                        <button type="submit" className="submit-req"
                                                                onClick={handleClick}>Next
                                                        </button>
                                                    </Box>
                                                    <Typography className="contact-text">Our team will contact you
                                                        regarding
                                                        your protein and allergeen
                                                        Information after booking is confirmed</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                }
            </BoxWrapper>
        </React.Fragment>
    )
}
export default Addons;