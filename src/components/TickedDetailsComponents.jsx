import { Box, Button, Grid, styled, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form } from "formik";
import React, { useState, useContext, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import * as _ from "lodash";
import moment from "moment/moment";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import GoogleMapReact from "google-map-react";
import { navigate } from "gatsby";
import Cookies from "js-cookie";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";



import RestorentImgMobile from "../assets/images/RestorentImgMobile.png";
import CardChefComponent from "./CardChefComponent";
import Footer from "./Footer";
import NeedHelp from "./NeedHelp";
import pLogo from "../assets/images/valet.png";
import Navbar from "./NavbarComponent";
import SupperClubDetailsCarousel from "./SupperClubDetailsCarousel";
import SupperClubTreatyComponent from "./SupperClubTreatyComponent";
import "../assets/styles/fontStyle.css";
import ChefMakoCarousel from "./ChefMakoCarousel";
import MenuCarousel from "./MenuCarousel";
import UsersContext from "../context/UsersContext";
import SupperClubDetailPopUpCarousel from "./SupperClubDetailPopupCarousel";
import SupperClubDetailsPastCarousel from "./SupperClubDetailsPastCarousel";
import FooterEnd from "./FooterEndSection";
import ticketedImage from "../assets/images/ticeketd.jpeg";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
    RestorentImgMobile,
    RestorentImgMobile,
    RestorentImgMobile,
    RestorentImgMobile,
    RestorentImgMobile,
  ];

const TickedDetailsComponents = ({id})=>{
    const getSupperClubDetailId = id
const { setSupperClubDetailId, userData } = useContext(UsersContext);
  const groupedDates = _.groupBy(userData?.new_dates, (item) => item.date);
  const showDates = Object.values(groupedDates);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTimeNext, setSelectedTimeNext] = useState(null);
  const [showCarousel, setShowCarousel] = useState(false);
  const [showArray, setShowArray] = useState(
    Array(showDates.length).fill(false)
  );

  useEffect(() => {
    setSupperClubDetailId(getSupperClubDetailId);
  }, [getSupperClubDetailId]);

  const handleClick = () => {
    navigate("/personal-details");
  };

  const handleToggle = (index) => {
    setShowArray((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      newState.forEach((state, i) => {
        if (i !== index) {
          newState[i] = false;
        }
      });
      return newState;
    });
    const date = showDates[index]?.[0]?.date;
    const time = showDates[index]?.[0]?.time;
    const nextTime = showDates[index]?.[1]?.time;
    if (
      (selectedDate === date && selectedTime === time) ||
      selectedTimeNext === nextTime
    ) {
      setSelectedDate(null);
      setSelectedTime(null);
      setSelectedTimeNext(null);
    } else {
      setSelectedDate(date);
      setSelectedTime(time);
      setSelectedTimeNext(nextTime);
    }
  };

  console.log('selected Data', selectedDate)
  const disabledStyle = {
    opacity: 0.5,
  };
  const toggleClose = (index) => {
    setShowArray((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: userData?.chef?.details?.coordinates?.lat,
      lng: userData?.chef?.details?.coordinates?.lng,
    },
    zoom: 20,
  };
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: {
        lat: userData?.chef?.details?.coordinates?.lat,
        lng: userData?.chef?.details?.coordinates?.lng,
      },
      map,
    });
    return marker;
  };
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const [title, setTitle] = useState("");
  const handleImageOpen = (title) => {
    setShowCarousel(true);
    setTitle(title);
  };
  const handleImageClose = () => {
    setShowCarousel(false);
  };

  const itemData =  
   {
      img: _.get(userData, "pictures.[0]", []),
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

  const BoxWrapper = styled(Box)(() => ({
    ".header-club": {
      padding: "20px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#DCD7CB",
    },
    ".main-box": {
      padding: "120px 120px 80px 120px",
      background: "#DCD7CB",
    },
    ".main-img": {
      width: "100%",
      height: "390px",
      display: "block",
      objectFit: "cover",
      boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
      cursor: "pointer",
      objectPosition: "top",
    },
    ".main-img-1": {
      width: "95%",
      height: "182px",
      boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
      objectFit: "cover",
    },
    ".main-img-2": {
      width: "100%",
      height: "205px",
      boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
      objectFit: "cover",
    },
    ".sub-box-heading": {
      fontFamily: "Bon Vivant",
      fontSize: "26px",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "32px",
      letterSpacing: "0.06em",
      marginBottom: "8px",
      color: "#080B0E",
    },
    ".sub-box-text": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      marginBottom: "8px",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px",
      letterSpacing: "0.06em",
      display: "flex",
      placeItems: "center",
    },
    ".sub-box-text-2": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "24px",
      paddingLeft: "10px",
    },
    ".sub-box-link": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 600,
      textDecoration: "underline",
      letterSpacing: "0.06em",
      fontSize: "20px",
      padding: "0px 8px",
    },
    ".sub-box-2": {
      background: "#FBFBFB",
      padding: "40px 30px",
    },
    ".sub-text-price": {
      fontWeight: 600,
      fontStyle: "normal",
      fontFamily: "ProximaNovaA-Regular",
      fontSize: "36px",
      lineHeight: "44px",
      color: "#080B0E",
    },
    ".sub-text": {
      fontStyle: "normal",
      fontFamily: "Proxima Nova Alt",
      fontWeight: 300,
      fontSize: "20px",
      lineHeight: "24px",
      color: "#080B0E",
    },
    ".experience-date-box": {
      marginBottom: "0.5rem",
    },
    ".experience-date-text": {
      fontFamily: "Bon Vivant",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "25px",
      color: "#080B0E",
      marginBottom: "0.5rem",
    },
    ".experience-date-sub-test": {
      fontWeight: 300,
      fontSize: "16px",
      lineHeight: "24px",
      color: "#080B0E",
    },
    ".main-date": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "32px",
      lineHeight: "39px",
      color: "#080B0E",
      paddingRight: "10px",
    },
    ".date-month": {
      fontSize: "14px",
      lineHeight: "17px",
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 600,
    },
    ".date-day": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "16px",
      lineHeight: "24px",
    },
    ".next-grid": {
      display: "inline",
      paddingLeft: "0px !important",
    },
    ".date-time-box": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 0px",
      flexWrap: "wrap",
    },
    ".experience-drop": {
      width: "100%",
      marginTop: "10px",
    },
    ".invite-btn": {
      border: "1px solid #000",
      background: "#000",
      borderRadius: "0px",
      color: "#fff",
      height: "auto",
      width: "200px",
    },
    ".invite-friends-text": {
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: "37px",
    },
    ".experience-text": {
      fontWeight: 300,
      fontSize: "20px",
      lineHeight: "24px",
    },
    ".last-cantain": {
      display: "flex",
      justifyContent: "space-between",
      padding: "41.5px 120px",
    },
    ".footer-box": {
      display: "inline",
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
    ".date-stack": {
      color: "#080B0E",
      background: "rgba(189, 189, 189, 0.2)",
      padding: "16px 0px",
      placeContent: "center",
      display: "flex",
      placeItems: "center",
      margin: "0px -30px 20px",
      flexDirection: "row",
    },
    ".date-description": {
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: "ProximaNovaA-Regular",
      lineHeight: "17px",
      textAlign: "center",
      padding: "0px 4px",
    },
    ".blowOut-description": {
      padding: "20px 16px",
    },
    ".blowOut-title": {
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: 700,
    },
    ".slots": {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "4px",
    },
    ".slot-title": {
      fontSize: "16px",
    },
    ".slot-title2": {
      fontSize: "14px",
    },
    ".line": {
      margin: "0px",
      fontSize: "15px",
    },
    ".css-e53awj-MuiStack-root>:not(style)+:not(style)": {
      marginLeft: "6px",
    },
    ".tab-box": {
      border: "1px solid black",
      textAlign: "center",
      borderRight: "1px solid #222",
      borderRadius: "0px",
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "24px",
      padding: "8px",
    },
    ".Joy-selected": {
      border: "1px solid black",
      textAlign: "center",
      borderRight: "1px solid #222",
      borderRadius: "0px",
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "24px",
      padding: "8px",
      color: "#FBFBFB !important",
      backgroundColor: "#080B0E",
    },
    ".MuiTab-variantPlain": {
      border: "1px solid black",
      textAlign: "center",
      borderRight: "1px solid #222",
      borderRadius: "0px",
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "24px",
      padding: "8px",
    },
    ".css-1lhe3ax-JoyTabPanel-root": {
      padding: "0px",
    },
    ".MuiTabList-root": {
      width: "96% !important",
      left: "2% !important",
    },
    ".map-heading": {
      fontFamily: "Proxima Nova Alt",
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: 300,
      marginBottom: "14px",
      color: "#080B0E",
      marginTop: "5%",
    },
    ".map-link": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "24px",
      textDecoration: "underline",
      color: "#080B0E",
      marginBottom: "16px",
      display: "block",
      paddingTop: "8px",
    },
    ".map-link:hover": {
      color: "#C6A87D",
    },
    ".map-container": {
      backgroundColor: "#DCD7CB",
      paddingTop: "2%",
      marginTop: "2%",
    },
    ".logo": {
      width: "24px",
      height: "24px",
      objectFit: "contain",
    },
    ".valet": {
      display: "flex",
      alignItems: "center",
      paddingBottom: "40px",
      marginLeft: "16px",
    },
    ".down-heading": {
      fontFamily: "ProximaNovaA-Regular",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "24px",
      marginLeft: "10px",
      color: "#080B0E",
      textDecoration: "underline",
    },
    ".child-container": {
      position: "relative",
      marginLeft: "2px",
    },
    ".show-btn": {
      position: "absolute",
      bottom: "22px",
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
    ".btn-detail": {
      lineHeight: "0.5",
      fontSize: "13px",
      textTransform: "lowercase",
      fontFamily: "ProximaNovaA-Regular",
    },
    ".submit-request": {
      color: "#FBFBFB",
      backgroundColor: "#000",
      width: "100%",
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "19px",
      padding: "18.5px 10px",
      marginTop: "20px",
      borderRadius: "0px",
      textTransform: "math-auto",
    },
    ".submit-request-disabled": {
      background: '#C6696b6dA87D',
      color: '#080B0E',
      fontFamily: 'ProximaNovaA-Regular',
      fontSize: '20px',
      lineHeight: '24px',
      border: '0px',
      marginBottom: '30px',
      marginTop: '30px',
      width: '100%',
      padding: '18px 10px'
    },
    ".submit-request:hover": {
      backgroundColor: "#000",
    },
    ".chef-carousel": {
      borderLeft: "1px solid black",
      borderRight: "1px solid black",
    },
    ".container": {
      position: "relative",
    },
    ".pop-close-icon": {
      width: "100px",
      height: "40px",
      color: "rgb(160, 160, 160)",
    },
    ".carousel-popup": {
      position: "fixed",
      top: "0px",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "9999",
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
      zIndex: "999",
    },
    ".swiper": {
      height: "100%",
    },
    ".css-cr824o-JoyTab-root": {
      backgroundColor: "#101418",
      color: "#FBFBFB",
    },
    ".css-6gpojs-JoyTab-root": {
      backgroundColor: "#101418",
      color: "#FBFBFB",
    },
    ".switch-field": {
      display: "flex",
      overflow: "hidden",
    },
    ".switch-field input": {
      position: "absolute !important",
      clip: "rect(0, 0, 0, 0)",
      height: "1px",
      width: "1px",
      border: "0",
      overflow: "hidden",
    },

    ".switch-field label": {
      flex: "1",
      margin: "0 4px",
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: "400 !important",
      fontSize: "14px",
      lineHeight: "120%",
      textAlign: "center",
      color: "#080B0E",
      transition: "all 0.1s ease-in-out",
      boxShadow: "none",
      background: "transparent",
      borderRadius: "0px",
      border: "0.5px solid #222222",
      height: "50px",
      display: "flex",
      flexDirection: "column",
      placeContent: "center",
    },
    ".time-text": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: "bolder",
      fontSize: "14px",
      lineHeight: "120%",
    },
    ".switch-field label:hover": {
      cursor: "pointer",
    },

    ".switch-field input:checked + label": {
      background: "#FFFFFF",
      boxShadow: "none",
      border: "0.5px solid #F8A039",
    },

    ".switch-field input:checked:disabled + label,.switch-field input:disabled + label":
      {
        background: "#BDBDBD",
        borderColor: "#BDBDBD ",
        color: "#777777",
      },
    ".time-btn-box": {
      flex: "0 0 auto",
      width: "58.33333333%",
    },
    ".experience-date-sub-text": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "16px",
      lineHeight: "24px",
      color: "#080B0E",
    },
    ".grid-item": {
      paddingRight: "5px",
    },
    ".restorent-1": {
      paddingRight: "10px",
    },
    ".restorent-2": {
      paddingLeft: "10px !important",
      paddingRight: "14px",
    },
    ".dot": {
      background: "#222222",
      width: "3px",
      height: "3px",
      display: "block",
      margin: "auto 13px",
      borderRadius: "100%",
      left: "0px",
      top: "0px",
      bottom: "0px",
    },
    ".supper-main-container": {
      marginTop: "20px",
      marginBottom: "40px",
    },
    ".exp-invite-btn": {
      border: "1px solid #C6A87D",
      background: "#C6A87D",
      borderRadius: "0px",
      color: "#080B0E",
      width: "210px",
      fontSize: "16px",
      lineHeight: "19px",
      fontWeight: 600,
      fontFamily: "Proxima Nova Alt",
      padding: "16px",
      textTransform: "math-auto",
    },
    ".exp-invite-btn :hover ": {
      backgroundColor: "none",
    },
    ".last-contain": {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 16px",
      placeItems: "center",
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
      letterSpacing: "0.06em",
    },
    ".experience-text": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      color: "#FBFBFB",
      marginBottom: "0px",
    },
    ".choose-seat": {
      display: "flex",
      placeContent: "space-between",
      marginBottom: "25px",
    },
    ".choose-seat-text": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px",
      color: "#080B0E",
      marginBottom: "0px",
    },
    ".regular-seat": {
      display: "flex",
      placeContent: "space-between",
      marginBottom: "30px",
      padding: "0px 0.5rem",
    },
    ".r-seat-text": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#080B0E",
      marginBottom: "8px",
    },
    ".r-seat-rate": {
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#080B0E",
    },
    ".r-seat-money": {
      fontWeight: 700,
    },
    ".input-div": {
      placeContent: "flex-start",
      justifyContent: "flex-end",
      position: "relative",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "stretch",
      width: "100%",
    },
    ".left-btn": {
      width: "24px",
      height: "24px",
      borderRadius: "0px",
      color: "#222222",
      border: "0.25px solid #222222",
      backgroundColor: "transparent",
      marginRight: "5px",
    },
    ".right-btn": {
      width: "24px",
      height: "24px",
      borderRadius: "0px",
      color: "#FBFBFB",
      border: "0.25px solid #222222",
      backgroundColor: "#222222",
      marginLeft: "5px",
    },
    ".s-left": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "12px",
      lineHeight: "15px",
      color: "#080B0E",
      display: "block",
      textAlign: "right",
      marginTop: "8px",
    },
    ".seat-hr": {
      margin: "20px 0px",
      color: "inherit",
      border: "0",
      borderTop: "1px solid",
      opacity: "0.25",
    },
    ".no-seat": {
      background: "#BDBDBD",
      padding: "8px 0px",
      textAlign: "center",
      marginTop: "10px",
    },
    "@media (min-width: 768px) and (max-width:1024px)": {
      ".box1": {
        width: "87%",
      },
      ".box2": {
        width: "87%",
      },
      ".time-btn": {
        marginRight: "5px",
        fontSize: "13px",
        padding: "0px 0px",
        lineHeight: "15px",
      },
      ".end-time-btn": {
        fontSize: "13px",
        padding: "0px 0px",
        lineHeight: "15px",
      },
      ".date-stack": {
        display: "-webkit-inline-box",
      },
    },
    "@media (min-width: 1px) and (max-width:768px)": {
      ".date-stack": {
        display: "flex",
      },
      ".last-contain": {
        flexDirection: "column",
        placeItems: "flex-start",
      },
      ".exp-invite-btn": {
        width: "25%",
        padding: "10px",
        background: "#101418",
        color: "#FBFBFB",
      },
      ".parent-container ": {
        flex: "0 0 auto",
        width: "58.33333333%",
        maxWidth: "none",
      },
      ".grid-box-2": {
        flexDirection: "column",
      },
      ".next-grid": {
        flex: " 0 0 auto",
        width: "41.66666667%",
        maxWidth: "none",
      },
      ".grid-child-box": {
        maxWidth: "100%",
      },
      ".sub-box-2": {
        display: "none",
      },
      ".time-btn-box": {
        width: "100%",
        flexShrink: "0",
        maxWidth: "100%",
      },
      ".date-time-box": {
        flexDirection: "column",
        alignItems: "flex-start",
      },
      ".grid-item": {
        maxWidth: "100%",
        paddingRight: "0px",
      },
      ".Joy-selected": {
        width: "80px",
      },
      ".MuiTab-variantPlain": {
        width: "80px",
      },
      ".dining-title": {
        fontSize: "20px !important",
        lineHeight: "25px !important",
      },
      ".last-contain": {
        flexDirection: "row",
      },
      ".experience-text": {
        fontSize: "14px",
        lineHeight: "17px",
      },
    },
    "@media (min-width: 1px) and (max-width:425px)": {
      ".main-box": {
        padding: "55px 0px",
      },
      ".next-grid": {
        display: "none",
      },

      ".footer-box": {
        display: "none",
      },
      ".box1": {
        width: "85%",
      },
      ".box2": {
        width: "84%",
      },
      ".grid-item": {
        paddingRight: "0px",
      },
      ".grid-child-box": {
        maxWidth: "100%",
      },
      ".supper-main-container": {
        display: "none",
      },
      ".sub-box": {
        padding: "20px 16px",
        background: "#FBFBFB",
      },
      ".sub-box-heading": {
        fontSize: "20px",
        lineHeight: "25px",
      },
      ".sub-box-link": {
        fontSize: "16px",
        lineHeight: "19px",
      },
      ".dot": {
        display: "none",
      },
      ".sub-box-text-2": {
        fontSize: "14px",
        lineHeight: "17px",
        textAlign: "right",
        flex: "1",
      },
      ".Joy-selected": {
        fontSize: "16px",
        lineHeight: "19px",
      },
      ".MuiTab-variantPlain": {
        fontSize: "16px",
        lineHeight: "19px",
      },
      ".MuiTabList-root": {
        padding: "0px 16px",
        width: "100% !important",
        left: "0px !important",
      },
    },
  }));
    return(
        <BoxWrapper>
        {!_.isEmpty(userData) && (
          <>
            <Navbar isImage={true} />
            <Box className="main-box">
              <Box className="sub-box">
                <Typography className="sub-box-heading">
                  {userData?.title}
                </Typography>
                <Typography className="sub-box-text">
                  Curated by{" "}
                  <span>
                    <b className="sub-box-link">{userData?.chef?.name}</b>
                  </span>
                </Typography>
              </Box>
              <Grid
                className="supper-main-container"
                container
                spacing={{ md: 2 }}
              >
                <Grid
                  className="parent-container"
                  item
                  xl={7}
                  md={7}
                  sm={6}
                  xs={12}
                >
                  <Box className="container">
                    <img
                      src={itemData.img}
                      alt={itemData.title}
                      className="main-img"
                      loading="lazy"
                      onClick={() => {
                        handleImageOpen(itemData.title);
                      }}
                    />
                    {showCarousel && (
                      <Box className="carousel-popup">
                        <button
                          className="close-button"
                          onClick={handleImageClose}
                        >
                          <CloseIcon className="pop-close-icon" />
                        </button>
                        <Box className="carousel">
                          <SupperClubDetailPopUpCarousel title={title} />
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Grid>
                <Grid item md={5} sm={6} xs={12} xl={5} className="next-grid">
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
                </Grid>
              </Grid>
              <Grid className="grid-box-2" container spacing={{ md: 2 }}>
                <Grid className="grid-item" item xl={7} md={7} sm={6} xs={12}>
                  <Box
                    sx={{
                      paddingTop: "16px",
                      paddingBottom: "0px",
                      background: "#FBFBFB",
                    }}
                  >
                    <Tabs
                      defaultValue={0}
                      sx={{ "--Tabs-gap": "0px", backgroundColor: "#FBFBFB" }}
                    >
                      <TabList>
                        <Tab className="tab-box" value={0}>
                          Experience
                        </Tab>
                        <Tab className="tab-box" value={1}>
                          Menu
                        </Tab>
                        <Tab className="tab-box" value={2}>
                          Venue
                        </Tab>
                      </TabList>
                      <TabPanel value={0} sx={{ p: 0 }}>
                        <CardChefComponent bgColor="#FBFBFB" />
                        <Box className="chef-carousel">
                          <ChefMakoCarousel title="What's Cooking?" />
                          <SupperClubDetailsPastCarousel chefHeading="Past Supper Clubs" />
                          <SupperClubDetailsCarousel />
                        </Box>
                        <Box className="last-contain">
                          <Box>
                            <Typography className="invite-friends-text">
                              Invite friends & family
                            </Typography>
                            <Typography className="experience-text">
                              enjoy a shared experience
                            </Typography>
                          </Box>
                          <Button className="exp-invite-btn">Invite</Button>
                        </Box>
                      </TabPanel>
                      <TabPanel value={1} sx={{ p: 0 }}>
                        <MenuCarousel />
                      </TabPanel>
                      <TabPanel value={2} sx={{ p: 0 }}>
                        <Box className="map-container">
                          <Box
                            style={{
                              backgroundColor: "#FBFBFB",
                              padding: "16px 16px 20px 16px",
                            }}
                          >
                            <Box className="map-heading">
                              {userData?.chef?.details?.address2}
                            </Box>
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${userData?.chef?.details?.coordinates?.lat},${userData?.chef?.details?.coordinates?.lng}`}
                              className="map-link"
                              target="_blank"
                            >
                              Get Directions
                            </a>
                            <Box
                              style={{
                                height: "380px",
                                width: "100%",
                              }}
                            >
                              <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                                onGoogleApiLoaded={({ map, maps }) =>
                                  renderMarkers(map, maps)
                                }
                              >
                                <AnyReactComponent
                                  lat={
                                    userData?.chef?.details?.coordinates?.lat
                                  }
                                  lng={
                                    userData?.chef?.details?.coordinates?.lng
                                  }
                                />
                              </GoogleMapReact>
                            </Box>
                          </Box>
                        </Box>
                        <Box class="valet">
                          <img className="logo" src={pLogo} />
                          <Typography className="down-heading">
                            Valet Available
                          </Typography>
                        </Box>
                      </TabPanel>
                    </Tabs>
                  </Box>
                </Grid>
                <Grid
                  className="grid-child-box"
                  item
                  md={5}
                  sm={6}
                  xs={12}
                  xl={5}
                >
                  <Formik
                    initialValues={{
                      numberOfSeats: userData?.seats ? 1 : 0,
                      numberOfTables: userData?.seats_chefs_table ? 1 : 0,
                    }}
                    onSubmit={(values) => {
                      Cookies.set(
                        "supperClubExperienceTime",
                        JSON.stringify(selectedTime)
                      );
                      Cookies.set(
                        "supperClubExperienceDates",
                        JSON.stringify(moment(selectedDate).toISOString())
                      );
                      Cookies.set(
                        "supperClubExperienceSeats",
                        JSON.stringify(values.numberOfSeats)
                      );
                      Cookies.set(
                        "supperClubExperienceTables",
                        JSON.stringify(values.numberOfTables)
                      );
                    }}
                  >
                    {({ values, setFieldValue }) => (
                      <Form>
                        <Box className="sub-box-2">
                          <Box
                            sx={{
                              display: "flex",
                              paddingBottom: "0.5rem",
                            }}
                          >
                            <Typography className="sub-text-price">
                              ₹{userData?.price}{" "}
                              <sub className="sub-text">Per Diner</sub>
                            </Typography>
                          </Box>
                          <Box className="experience-date-box">
                            <Typography className="experience-date-text"></Typography>
                            <Typography className="experience-date-text">
                              Choose Your Date
                            </Typography>
                          </Box>
                          {showDates?.map((item, index) => {
                            const isSelected =
                              (selectedDate === item[0]?.date &&
                                selectedTime === item[0]?.time) ||
                              selectedTimeNext === item[1]?.time;
                            return (
                              <Box className="date-time-box">
                                <Box
                                  sx={{ display: "flex", alignItems: "center" }}
                                >
                                  <Typography className="main-date">
                                    {/* {values.mainDate = moment(item[0].date).format("D")} */}
                                    {moment(item[0]?.date).format("D")}
                                  </Typography>
                                  <Box>
                                    <Typography className="date-month">
                                      {moment(item[0].date).format("MMMM")}
                                    </Typography>
                                    <Typography className="date-day">
                                      {moment(item[0].date).format("dddd")}
                                    </Typography>
                                  </Box>
                                </Box>
                                <Box className="time-btn-box">
                                  <Box className="switch-field">
                                    <input
                                      type="radio"
                                      id={`radio-${index}-1`}
                                      name={`switch-${index}`}
                                      value="yes"
                                    />
                                    <label
                                      htmlFor={`radio-${index}-1`}
                                      onClick={() => handleToggle(index)}
                                    >
                                      <Typography className="time-text">
                                        {moment(item[0]?.from, "HH:mm").format(
                                          "h:mm A"
                                        )}{" "}
                                        -{" "}
                                        {moment(item[0]?.to, "HH:mm").format(
                                          "h:mm A"
                                        )}
                                      </Typography>
                                    </label>
                                    <input
                                      type="radio"
                                      id={`radio-${index}-2`}
                                      name={`switch-${index}`}
                                      value="yes"
                                    />
                                    {!_.isEmpty(item[1]?.from) &&
                                      !_.isEmpty(item[1]?.to) && (
                                        <label
                                          htmlFor={`radio-${index}-2`}
                                          onClick={() => handleToggle(index)}
                                        >
                                          <Typography className="time-text">
                                            {moment(
                                              item[1]?.from,
                                              "HH:mm"
                                            ).format("h:mm A")}{" "}
                                            -{" "}
                                            {moment(
                                              item[1]?.to,
                                              "HH:mm"
                                            ).format("h:mm A")}
                                          </Typography>
                                        </label>
                                      )}
                                  </Box>
                                </Box>
                                <Box
                                  className="experience-drop"
                                  style={{ width: "100%" }}
                                >
                                  {showArray[index] && (
                                    <Form>
                                      <Box>
                                        <Box className="choose-seat">
                                          <div className="choose-seat-text">
                                            Choose Seating option
                                          </div>
                                          <KeyboardArrowDownIcon
                                            className="seat-down"
                                            onClick={toggleClose}
                                          />
                                        </Box>
                                        <Box className="regular-seat">
                                          <div className="r-seat">
                                            <div className="r-seat-text">
                                              Regular Seating
                                            </div>
                                            <span className="r-seat-rate">
                                              <b className="r-seat-money">
                                                ₹{" "}
                                                {userData?.price
                                                  ? userData?.price
                                                  : 0}
                                              </b>
                                              / diner
                                            </span>
                                          </div>
                                          <div>
                                            <div className="input-div">
                                              <RemoveIcon
                                                className="left-btn"
                                                onClick={() =>
                                                  setFieldValue(
                                                    "numberOfSeats",
                                                    Math.max(
                                                      values.numberOfSeats - 1,
                                                      0
                                                    )
                                                  )
                                                }
                                                style={
                                                  values.numberOfSeats === 0
                                                    ? disabledStyle
                                                    : {}
                                                }
                                                disabled={
                                                  values.numberOfSeats === 0
                                                }
                                              />
                                              <Typography className="number-ans">
                                                {values.numberOfSeats}
                                              </Typography>
                                              <AddIcon
                                                className="right-btn"
                                                onClick={() =>
                                                  setFieldValue(
                                                    "numberOfSeats",
                                                    Math.min(
                                                      values.numberOfSeats + 1,
                                                      userData?.seats
                                                        ? userData?.seats
                                                        : 0
                                                    )
                                                  )
                                                }
                                                disabled={
                                                  values.numberOfSeats ===
                                                  userData?.seats
                                                    ? userData?.seats
                                                    : 0
                                                }
                                                style={
                                                  values.numberOfSeats ===
                                                  userData?.seats
                                                    ? disabledStyle
                                                    : {}
                                                }
                                              />
                                            </div>
                                            <span className="s-left">
                                              {userData?.seats
                                                ? userData?.seats
                                                : 0}{" "}
                                              seats left
                                            </span>
                                          </div>
                                        </Box>
                                        {userData?.seats_chefs_table && userData?.seats_chefs_table!==0 && (
                                            <>
                                            <hr className="seat-hr" />
                                        <Box className="regular-seat">
                                          <div className="r-seat">
                                            <div className="r-seat-text">
                                              Chefs Table {userData?.seats_chefs_table}
                                            </div>
                                            <span className="r-seat-rate">
                                              <b className="r-seat-money">
                                                ₹{" "}
                                                {userData?.price_chefs_table
                                                  ? userData?.price_chefs_table
                                                  : 0}
                                              </b>
                                              / diner
                                            </span>
                                          </div>
                                          <div>
                                            <div className="input-div">
                                              <RemoveIcon
                                                className="left-btn"
                                                onClick={() =>
                                                  setFieldValue(
                                                    "numberOfTables",
                                                    Math.max(
                                                      values.numberOfTables - 1,
                                                      0
                                                    )
                                                  )
                                                }
                                                style={
                                                  values.numberOfTables === 0
                                                    ? disabledStyle
                                                    : {}
                                                }
                                                disabled={
                                                  values.numberOfTables === 0
                                                }
                                              />
                                              <Typography className="number-ans">
                                                {values.numberOfTables}
                                              </Typography>
                                              <AddIcon
                                                className="right-btn"
                                                onClick={() =>
                                                  setFieldValue(
                                                    "numberOfTables",
                                                    Math.min(
                                                      values.numberOfTables + 1,
                                                      userData?.seats_chefs_table
                                                        ? userData?.seats_chefs_table
                                                        : 0
                                                    )
                                                  )
                                                }
                                                style={
                                                  values.numberOfTables ===
                                                  userData?.seats_chefs_table
                                                    ? disabledStyle
                                                    : {}
                                                }
                                                disabled={
                                                  values.numberOfTables ===
                                                  userData?.seats_chefs_table
                                                    ? userData?.seats_chefs_table
                                                    : 0
                                                }
                                              />
                                            </div>
                                            <span className="s-left">
                                              {userData?.seats_chefs_table
                                                ? userData?.seats_chefs_table
                                                : 0}{" "}
                                              seats left
                                            </span>
                                          </div>
                                        </Box>
                                        </>
                                        )}
                                        

                                      </Box>{" "}
                                    </Form>
                                  )}
                                </Box>
                              </Box>
                            );
                          })}
                          <Button
                            type="submit"
                            className={selectedDate ? 'submit-request' : 'submit-request-disabled'}
                            onClick={selectedDate && handleClick}
                          >
                            Reserve a seat
                          </Button>
                          <Box></Box>
                        </Box>
                      </Form>
                    )}
                  </Formik>
                  <SupperClubTreatyComponent
                    padding={"40px 16px"}
                    subTitle="Give the gift of an unforgettable food experience"
                  />
                </Grid>
              </Grid>
            </Box>
            <NeedHelp />
            <Box className="footer-box">
              <Footer />
            </Box>
          </>
        )}
        <FooterEnd />
      </BoxWrapper>
    )
}

export default TickedDetailsComponents