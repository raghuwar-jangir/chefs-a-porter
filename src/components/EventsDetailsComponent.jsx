import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Grid, styled, Typography, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import * as _ from "lodash";

import Navbar from "./NavbarComponent";
import Footer from "./Footer";
import FooterEnd from "./FooterEndSection";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NeedHelp from "./NeedHelp";
import { isMobile } from "react-device-detect";
import ImageCarousel from "./ImageCarousel";
import star from "../assets/images/star.png";
import "../assets/styles/fontStyle.css";
import EventCard from "./EventCard";
import ChefDetailsForm from "./ChefDetailsForm";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SupperClubDetailsCarousel from "./SupperClubDetailsCarousel";
import "../assets/styles/fontStyle.css";
import EventPopUpCarosuel from "./EventPopUpCarosuel";
import TemptedYet from "./TemptedYet";
import NeedHelpEvent from "./NeedHelpEvent";
import EventChefCarousel from "./EventChefCarousel";
import UsersContext from "../context/UsersContext";
import CmsContext from "../context/CmsContext";
import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";

const EventsDetailsComponent = ({eventId})=>{
  const { setEventId,
    userData
    } = useContext(UsersContext);

    const {footerData} = useContext(CmsContext)
                
  const [showCarousel, setShowCarousel] = useState(false);
  const [minDinersValue, setMinDinersValue] = useState(0);
  const [maxDinersValue, setMaxDinersValue] = useState(0);
  const [title, setTitle] = useState("");

  // to handle booking form hide/show in mobile
  const [showBookingFormMobile, setShowBookingFormMobile] = useState(false);

  useEffect(() => {
    setEventId(eventId);
    Cookies.set("eventIdValue",JSON.stringify(eventId));
  },[eventId]);

  const toggleBookingFormMobile = () => { 
    console.log('yes');
    setShowBookingFormMobile(true);
    window.scrollTo(0, 0)
  }



  // const dinersMaxValue = Math.max.apply(Math, userData?.prices.map(function(o) {
  //     return o.max_diner;
  // }));
  // const dinersMinValue = Math.min.apply(Math, userData?.prices.map(function(o) {
  //     return o.min_diner;
  // }));

  // const dinersMaxGet = dinersMaxValue && userData?.prices.filter((item)=>{
  //   return item.max_diner===dinersMaxValue
  // })

  // const dinersMinGet = dinersMinValue && userData?.prices.filter((item)=>{
  //   return item.min_diner===dinersMinValue
  // })

  // const dinersMaxObject = dinersMaxGet && dinersMaxGet[0]
  // const dinersMinObject = dinersMinGet && dinersMinGet[0]

  // console.log('dinersMaxObject',dinersMaxObject && dinersMaxObject)
  // console.log('dinersMinObject',dinersMinObject && dinersMinObject)

  useEffect(() => {
    setMinDinersValue(5)
    console.log('minDinersValue in UseEffct',minDinersValue)
  },[minDinersValue]);

  //setMinDinersValue(5)



  // const dinersMinValue = ()=>{
  //   if(userData?.prices){
  //     return userData?.prices.reduce((min, p) => p.min_diner < min ? p.min_diner : min, userData?.prices[0].min_diner);
  //   }
  // }

  // const dinersMaxValue = ()=>{
  //   if(userData?.prices){
  //     return  userData?.prices.reduce((max, p) => p.max_diner > max ? p.max_diner : max,  userData?.prices[0].max_diner);
  //   }
  // }

  // console.log('mindian', dinersMinValue())
  // console.log('mindian', dinersMaxValue())

  // const dinersMinValues = userData?.prices && userData.prices.map((item)=>{
  //   return item.min_diner
  // })
  // const dinersMaxValues = userData?.prices && userData.prices.map((item)=>{
  //   return item.max_diner
  // })

  // console.log('dinersMinValues',dinersMinValues)
  // console.log('dinersMaxValues',dinersMaxValues)
  // setMinDinersValue(dinersMinValues ? Math.min(dinersMinValues) : 0);
  // if(dinersMinValues){
  //   setMinDinersValue(Math.min(dinersMinValues));
  // }
  // if(dinersMaxValues){
  //   setMaxDinersValue(Math.max(dinersMaxValues));
  // }
  

  // useEffect(() => {
   
    
  // },[minDinersValue, maxDinersValue, dinersMinValues, dinersMaxValues]);
  // console.log('minDinersValue',minDinersValue)
  // console.log('maxDinersValue',maxDinersValue)
  // const getMaxDiners=()=> {
  //   return userData.prices.reduce((max, p) => p.max_diner > max ? p.max_diner : max, userData[0].max_diner);
  // }

  //console.log('min diners',getMinDiners())
  //console.log('max diners',getMaxDiners)

  // userData.prices.map((item)=>{
  //   console.log('diners', item.min_diner)
  // })

  // const getDiners=()=>{
  //   return userData.prices.map(d => d.min_diner);
  // }
  // console.log('getDiners',getDiners)

  // const getMaxDiners=()=> {
  //   return userData.prices.reduce((max, p) => p.max_diner > max ? p.max_diner : max, userData.prices.[0].max_diner);
  // }

  //console.log('min diners',getMinDiners)
  //console.log('max diners',getMaxDiners)



  const handleImageOpen = (title) => {
    setShowCarousel(true);
    setTitle(title);
  };
  const handleImageClose = () => {
    setShowCarousel(false);
  };

  const bread = {
    fontFamily: "Proxima Nova Alt",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "19px",
  };

  const breadcrumbs = [
    <Typography sx={bread} key="1" color="#FBFBFB">
      Private
    </Typography>,
    <Link underline="none" key="2" color="#C6A87D" href="">
      Event
    </Link>,
  ];

  const itemData = {
    img: userData?.cover_picture,
    title: "chef",
  };

  const itemData2 = _.map(_.get(userData, "pictures", []), (item, index) => {
    return {
      img: item,
      title:
        index === 1
          ? "chef1"
          : index === 2
          ? "chef2"
          : index === 3
          ? "chef3"
          : "sGallery",
    };
  });

  const MainBox = styled(Box)(() => ({
    ".main-box": {
      padding: "80px 120px",
      background: "#080B0E",
    },
    ".container": {
      position: "relative",
    },
    ".main-img": {
      width: "100%",
      height: "390px",
      display: "block",
      objectFit: "cover",
      boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
      cursor: "pointer",
    },
    ".main-img-1": {
      width: "100%",
      height: "185px",
      boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
      objectFit: "cover",
      marginBottom: "16px",
    },
    ".main-img-2": {
      width: "100%",
      height: "190px",
      boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
      objectFit: "cover",
    },
    ".carousel-popup": {
      position: "fixed",
      top: "0px",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1200",
    },
    ".close-button": {
      position: "absolute",
      top: "20px",
      right: "0px",
      fontSize: "24px",
      backgroundColor: "transparent",
      border: "none",
      color: "white",
      cursor: "pointer",
      zIndex: "1200",
    },
    ".next-grid": {
      display: "inline",
      paddingLeft: "0px !important",
    },
    ".child-container": {
      position: "relative",
      marginLeft: "2px",
      paddingLeft: "0px",
      paddingTop: "15px",
    },
    ".show-btn": {
      position: "absolute",
      bottom: "32px",
      right: "29px",
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px",
      color: "#080B0E",
      textTransform: "math-auto",
      background: "#FBFBFB",
      boxShadow: "0px 20px 24px rgb(0 0 0 / 6%)",
      borderRadius: "1px",
      padding: "8px 12px",
    },
    ".show-btn:hover": {
      color: "#C6A87D",
      backgroundColor: "#FBFBFB",
    },
    ".show-btn:focus": {
      backgroundColor: "#FBFBFB",
      color: "#C6A87D",
    },
    ".container-fluid": {
      marginTop: "40px",
    },
    ".header-club": {
      display: "none",
      padding: "15px",
      backgroundColor: "#080B0E",
    },
    ".header-icon": {
      color: "#FBFBFB",
    },
    ".chef-name": {
      fontSize: "24px",
      lineHeight: "30px",
      color: "#FBFBFB",
      fontWeight: 700,
      marginTop: "8px",
      fontFamily: "Bon Vivant",
      fontStyle: "normal",
      letterSpacing: "0.06em",
      marginBottom: "8px",
    },
    ".chef-name-rate": {
      display: "flex",
      justifyContent: "center",
      placeItems: "center",
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: 400,
      color: "#FBFBFB",
      marginTop: "8px",
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      marginBottom: "8px",
    },
    ".chef-details": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: 300,
      color: "#FBFBFB",
      marginBottom: "20px",
      display: "flex",
      fontSize: "20px",
      lineHeight: "24px",
      letterSpacing: "0.06em",
      placeItems: "center",
    },
    ".chef-details-by": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: 300,
      color: "#FBFBFB",
      display: "flex",
      fontSize: "20px",
      lineHeight: "24px",
      letterSpacing: "0.06em",
      placeItems: "center",
    },
    ".mobileView-chef": {
      display: "none",
      margin: "5px 0px",
    },
    ".star-logo": {
      height: "18px",
      width: "18px",
      objectFit: "contain",
      marginRight: "8px",
      marginLeft: "20px",
    },
    ".star-box": {
      display: "flex",
    },
    ".detail-1": {
      textDecoration: "none",
      color: "#C6A87D",
      fontWeight: 600,
      position: "relative",
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "24px",
      letterSpacing: "0.06em",
      marginLeft: "5px",
    },
    ".line": {
      display: "inline-block",
      color: "#FBFBFB",
      margin: "0 16px",
      fontWeight: "300",
    },
    ".detail-2": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      letterSpacing: "0.06em",
    },
    ".grid-item": {
      paddingRight: "5px",
    },
    ".mobile-view-price-text": {
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "24px",
    },
    ".mobile-view-diner": {
      fontWeight: 300,
      fontSize: "16px",
      lineHeight: "19px",
    },
    ".invite-btn": {
      border: "1px solid #C6A87D",
      background: "#000",
      borderRadius: "0px",
      color: "#FBFBFB",
      width: "210px",
      fontSize: "16px",
      lineHeight: "19px",
      fontWeight: 600,
      fontFamily: "Proxima Nova Alt",
      padding: "13.8894px",
      textTransform: "math-auto",
    },
    ".last-contain": {
      display: "flex",
      justifyContent: "space-between",
      padding: "40px 20px",
      backgroundColor: "#101418",
    },
    ".invite-friends-text": {
      fontFamily: "Bon Vivant",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "25px",
      color: "#FBFBFB",
      marginBottom: "0px",
    },
    ".experience-text": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      color: "#FBFBFB",
      marginBottom: "0px",
    },
    ".img": {
      height: "352px",
    },
    ".breadcrumbs-heading": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "19px",
    },
    ".pop-close-icon": {
      width: "100px",
      height: "40px",
      color: "rgb(160, 160, 160)",
    },
    ".MuiBreadcrumbs-separator": {
      marginLeft: "0.5rem",
      marginRight: "0.5rem",
    },
    ".item-img-1": {
      paddingLeft: "10px !important",
      paddingRight: "10px !important",
      paddingTop: "0px !important",
    },
    ".item-img-2": {
      paddingLeft: "10px !important",
      paddingRight: "10px !important",
    },
    ".container-parent": {
      paddingRight: "5px !important",
    },
    "@media(min-width: 431px) and (max-width: 768px)": {
      ".container-parent": {
        flex: "0 0 auto",
        maxWidth: "58.333333%",
      },
      ".next-grid": {
        flex: "0 0 auto",
        width: "41.66666667%",
      },
    },
    "@media(min-width: 1px) and (max-width: 768px)": {
      ".grid-box-2": {
        display: "flex",
        flexDirection: "column",
      },
      ".grid-item": {
        maxWidth: "100%",
        paddingRight: "0px",
      },
      ".grid-child-box": {
        maxWidth: "100%",
      },
    },
    "@media (min-width: 1px) and (max-width:431px)": {
      ".main-grid": {
        display: "none",
      },
      ".main-box": {
        padding: "40px 0px 0px",
      },
      ".breadcrumbs-heading": {
        display: "none",
      },
      ".star-box": {
        padding: "0px 16px",
        justifyContent: "space-between",
      },
      ".chef-name": {
        fontSize: "20px",
        lineHeight: "25px",
      },
      ".chef-name-rate": {
        fontSize: "18px",
        lineHeight: "22px",
      },
      ".chef-details": {
        flexFlow: "wrap",
        padding: "0px 16px",
        marginBottom: "8px",
      },
      ".chef-details-by": {
        fontSize: "14px",
        lineHeight: "17px",
      },
      ".detail-1": {
        fontSize: "14px",
        lineHeight: "17px",
        fontWeight: 300,
        textDecoration: "underline",
        paddingLeft: "5px",
      },
      ".line": {
        display: "none",
      },
      ".grid-child-box": {
        display: "none",
      },
      ".grid-item.mobile-booking-form-show": {
        display: "none",
      },
      ".grid-child-box.mobile-booking-form-show": {
        display: "block",
      },
      ".invite-btn": {
        width: "114px",
      },
      ".template": {
        background: "#080B0E",
      },
      ".template-title": {
        color: "#FBFBFB !important",
      },
    },
    "@media (min-width: 1px) and (max-width:320px)": {
      ".invite-btn": {
        width: "80px",
      },
    },
    "@media(min-width:600px) and (max-width: 768px)": {
      ".template": {
        backgroundColor: "#FBFBFB !important",
      },
      ".template-title": {
        color: "#080B0E !important",
      },
    },
  }));

    return(
        <MainBox>
        {!_.isEmpty(userData && eventId) && (
          <> 
            <Navbar
              to={"/event-details"}
              heading="Private"
              isIcon={true}
              isColor={true}
            />
            <Box className="main-box">
              {isMobile ? (
                <Box className="header-club">
                  <ArrowBackIcon className="header-icon" />
                  <Typography className="chef-mobile-heading">
                    Privée
                  </Typography>
                </Box>
              ) : (
                ""
              )}
              <Box className="container-fluid">
                <Box className="row supper-chef-details">
                  <Box className="details">
                    <Breadcrumbs
                      separator={<ChevronRightIcon className="chevron-right" />}
                      aria-label="breadcrumb"
                      color="white"
                      className="breadcrumbs-heading"
                    >
                      {breadcrumbs}
                    </Breadcrumbs>
                    <Box className="star-box">
                      <Typography className="chef-name">
                        {userData.title}
                      </Typography>
                      <Typography className="chef-name-rate">
                        <img className="star-logo" src={star} />
                        4.7
                      </Typography>
                    </Box>
                    <Box className="chef-details">
                      <Typography className="chef-details-by">by</Typography>
                      <Link href={`/chef-details/${userData?.user?.id}`} className="detail-1">
                        {userData?.user?.name}
                      </Link>
                      {/* <span className="line">|</span>
                      <Typography className="detail-2">
                        Starting from ₹{userData?.price_per_course} per diner
                      </Typography> */}
                    </Box>
                  </Box>
                </Box>
                <Box className="mobileView-chef">
                  <Typography className="chef-name mbl-chef-name">
                    {userData.title}
                  </Typography>
                </Box>
                <ImageCarousel />
                {!_.isEmpty(userData?.user) && (
                  <Box className="mobileView-chef">
                    <Typography className="chef-details mbl-chef-name">
                      by {userData.user.name}
                      {/* <b>
                        {" "}
                        Starting from ₹{userData.price_per_course} per diner
                      </b> */}
                    </Typography>
                  </Box>
                )}

                <Grid className="main-grid" container spacing={{ md: 2 }}>
                  <Grid
                    className="container-parent"
                    item
                    xl={7}
                    md={7}
                    sm={6}
                    xs={12}
                  >
                    <Box className="container">
                        {itemData?.img && (
                            <img
                                src={itemData.img}
                                alt={itemData.title}
                                className="main-img"
                                loading="lazy"
                                onClick={() => {
                                handleImageOpen(itemData.title);
                                }}
                            />
                        )}
                      
                      {showCarousel && (
                        <Box className="carousel-popup">
                          <button
                            className="close-button"
                            onClick={handleImageClose}
                          >
                            <CloseIcon className="pop-close-icon" />
                          </button>
                          <Box className="carousel">
                            <EventPopUpCarosuel title={title} />
                          </Box>
                        </Box>
                      )}
                    </Box>
                  </Grid>
                  <Grid item md={5} sm={6} xs={12} xl={5} className="next-grid">
                    {
                      <Grid className="child-container" container spacing={2}>
                        {itemData2.map((item) => (
                          <Grid
                            className="item-img-1"
                            item
                            md={6}
                            sm={6}
                            xs={6}
                            xl={6}
                          >
                            <img
                              src={item.img}
                              alt={item.title}
                              className="main-img-1"
                              loading="lazy"
                              onClick={() => {
                                handleImageOpen(item.title);
                              }}
                            />
                          </Grid>
                        ))}
                        <Button
                          className="show-btn"
                          onClick={() => {
                            setShowCarousel(true);
                          }}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Show All Photos
                        </Button>
                      </Grid>
                    }
                  </Grid>
                </Grid>
                <Grid className="grid-box-2" container spacing={{ md: 2 }}>
                  <Grid className={`grid-item ${showBookingFormMobile === true ? "mobile-booking-form-show" : ""}`} item xl={7} md={7} sm={6} xs={12}>
                    <EventCard />
                    <EventChefCarousel />
                    <SupperClubDetailsCarousel
                      mainBox={{ padding: "40px 0px" }}
                      changeDetails={{ fontSize: "16px" }}
                      changeFont={{ fontSize: "20px" }}
                      backgroundColor="#DCD7CB"
                    />
                    <Box className="last-contain">
                      <Box>
                        <Typography className="invite-friends-text">
                          Invite friends & family
                        </Typography>
                        <Typography className="experience-text">
                          enjoy a shared experience
                        </Typography>
                      </Box>
                      <Button className="invite-btn">Invite</Button>
                    </Box>
                  </Grid>
                  <Grid
                    className={`grid-child-box ${showBookingFormMobile === true ? "mobile-booking-form-show" : ""}`}
                    item
                    md={5}
                    sm={6}
                    xs={12}
                    xl={5}
                  >
                    <ChefDetailsForm />
                  </Grid>
                </Grid>
              </Box>
            </Box>
            {showBookingFormMobile !== true && (<>
            <NeedHelpEvent />
            <TemptedYet
              title={"Tempted yet?"}
              buttonText="Book this Experience"
              isTempted={false}
              toggleBookingFormMobile={toggleBookingFormMobile}
            />
            </>)}
            <NeedHelp
                title={footerData?.footer.footer.common_footer.details.title}
                description={footerData?.footer.footer.common_footer.details.description}
                button_call={footerData?.footer.footer.common_footer.details.button1_text}
                button_email={footerData?.footer.footer.common_footer.details.button2_text}
            />
            <Footer />
            <FooterEnd />
            <ToastContainer />
          </>
        )}
      </MainBox>
    )
}

export default EventsDetailsComponent;