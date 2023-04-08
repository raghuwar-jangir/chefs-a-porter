import React, { useContext, useEffect, useState } from "react";
import { Box, Grid, ImageListItem, styled, Typography } from "@mui/material";
import Navbar from "../../components/NavbarComponent";
import add1 from "../../assets/images/add1.png";
import add2 from "../../assets/images/add2.png";
import add3 from "../../assets/images/add3.png";
import add4 from "../../assets/images/add4.png";
import add5 from "../../assets/images/add5.png";
import add6 from "../../assets/images/add6.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddonsCard from "../../components/AddonsCard";
import sGallery from "../../assets/images/sc-gallery.png";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { isMobile } from "react-device-detect";
import "../../assets/styles/fontStyle.css";
import { navigate } from "gatsby";
import UsersContext from "../../context/UsersContext";
import * as _ from "lodash";
import Cookies from "js-cookie";

const Addons = (props) => {
    const summaryCookieValue = Cookies.get('BookingId');
    const summaryBookingId = summaryCookieValue?.replaceAll('"', '')
    const {bookingId} = props;
    const {userData, setIsBookingStatus} = useContext(UsersContext);
    console.log("addons userData==========",userData)
    const handleClick = () => {
        navigate(`/booking-summary/${summaryBookingId}`);
        setIsBookingStatus(true)
    }

  const [paymentCalculationData, setPaymentCaclulationData] = useState();
  const cookieValue = Cookies.get("paymentCalculation");
  useEffect(() => {
    if (cookieValue) {
      setPaymentCaclulationData(JSON.parse(cookieValue));
    }
  }, [cookieValue]);
  console.log("paymentCalulationData=====", paymentCalculationData);

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
            cursor:'pointer',
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
        '.grand-total': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            padding: '22px 0px',
        },
        '.border': {
            borderTop: '1px solid rgba(255, 255, 255, 0.6)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
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

    console.log("======bookingId=============",bookingId)
    console.log("======userData=============", userData)

    return (
        <React.Fragment>
            <BoxWrapper>
                <Navbar to={'/addons'} isColor={true} isIcon={true} heading="Privee"/>
                {
                    !_.isEmpty(userData && bookingId) &&
                    <Box className="supper-gallery cust-details">
                        <Box className="container-fluid">
                            <Box className="row supper-chef-details">
                                <Box className="book-trad">
                                    <ArrowBackIcon className="arrow-left" onClick={()=>navigate(`/customer-details`)}/>
                                    <Typography className="addons-title">Add-on Services</Typography>
                                </Box>
                                <Box className="row customer-details addons-div">
                                    <Grid container>
                                        <Grid xl={7} lg={7} xs={7} md={7} sm={12} xs={12} className="partner">
                                            <Box className="addons">
                                                <Typography className="addons-heading">Our partners help you get set up
                                                    with
                                                    the perfect custom experience</Typography>
                                                {
                                                    !_.isEmpty(userData) &&
                                                    <Grid container className="addon-grid" rowSpacing={2} columnSpacing={2}>
                                                        {userData.map((item, index) => (
                                                            <Grid item xl={4} md={4} sm={6} xs={6} key={index}>
                                                                <AddonsCard image={item?.image} title={item?.name}/>
                                                            </Grid>
                                                        ))}
                                                    </Grid>
                                                }

                                            </Box>
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
                                                        <Typography className="ex-heading">Experience
                                                            Breakup</Typography>
                                                        <Typography className="ex-detail">This is an estimate, final
                                                            price
                                                            will be <br/>communicated on
                                                            call
                                                        </Typography>
                                                        <ExpandMoreIcon className="ex-icon"/>
                                                    </Box>
                                                    {
                                                        !_.isEmpty(paymentCalculationData) &&
                                                        <Box className="table table-borderless">
                                                            {
                                                                Object.keys(paymentCalculationData?.payment).map((key) => {
                                                                    return (
                                                                        <Box className="table-box">
                                                                            <Typography
                                                                                className="table-details">{key.charAt(0).toUpperCase() + key.slice(1)}</Typography>
                                                                            <Typography className="table-details">₹
                                                                                {paymentCalculationData?.payment[key]}</Typography>
                                                                        </Box>
                                                                    )
                                                                })
                                                            }
                                                            <Box className="table-box border">
                                                                <Typography className=" grand-total table-details">Grand
                                                                    Total</Typography>
                                                                <Typography className="table-details grand-total">₹
                                                                    {paymentCalculationData?.total}</Typography>
                                                            </Box>
                                                            <Box className="tax tax1 table-box">
                                                                <Typography className="table-details">+Incl Of
                                                                    GST</Typography>
                                                            </Box>
                                                            <Box className="tax">
                                                                <Typography className="table-details">++1.95% +
                                                                    GST</Typography>
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
