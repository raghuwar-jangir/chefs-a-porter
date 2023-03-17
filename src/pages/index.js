import React, {useContext, useEffect} from 'react';
import {
    Box,
    Button,
    Grid,
    ImageList,
    ImageListItem,
    List,
    ListItemIcon, MenuItem, Select,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import {styled} from '@mui/system';
import {MobileView} from 'react-device-detect';
import FrontFood from '../components/FrontFood';
import PriveeMain from '../components/PriveeMain';
import RatingCarousel from '../components/RatingCarousel';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import MainFoodDetailng from '../components/MainFoodDetailng';
import NeedHelp from "../components/NeedHelp";
import Navbar from "../components/NavbarComponent";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {Link, navigate} from "gatsby";
import LightThemeIcon from "../assets/images/lightThemeIcon.png";
import JoinTableImg from "../assets/images/jointhetable.png";
import priveeVideo from "../assets/video/privee.mp4";
import supperVideo from "../assets/video/supper.mp4";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import footerArrow from "../assets/images/footer-arrow.png";
import {isMobile} from "react-device-detect";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Treaty from "../components/Treaty";
import gallery1 from "../assets/images/gallery1.png";
import gallery2 from "../assets/images/gallery2.png";
import gallery3 from "../assets/images/gallery3.png";
import gallery4 from "../assets/images/team.png";
import gallery5 from "../assets/images/about3.png";
import homeBanner from "../assets/images/homebanner.png";
import food1 from "../assets/images/food1.png";
import food2 from "../assets/images/food2.png";
import food3 from "../assets/images/food3.png";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FooterEnd from "../components/FooterEndSection";
import DiningPage from "../components/DiningPage";
import diningPicture from '../../src/assets/images/cook1.png'
import Privee from '../components/Privee';
import CorporateBooking from "../components/CorporateBooking";
import PriveeComponentSlider from "../components/PriveeComponentSlider";
import PriveeCarousel from "../components/PriveeCarousel";
import TemptedYet from "../components/TemptedYet";
import joinChef from "../assets/images/joinchef-banner.png";
import {Form, Formik} from "formik";
import moment from "moment/moment";
import * as _ from "lodash";
import {DatePickerInput} from "rc-datepicker";
import PriveeImg from "../assets/images/priveeImg.png";
import SupperClubImg from "../assets/images/SupperClubImg.png";
import ClubSection from "../components/ClubSection";
import DiningExperienceCarousel from "../components/DiningExperienceCarousel";
import axios from "axios";
import CmsContext from "../context/CmsContext";


const MainBoxContent = styled(Box)({
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#DCD7CB'
})

const BoxWrapper = styled(Box)({
    '.home-banner': {
        marginTop: '80px',
        // backgroundImage: `url(${homeBanner})`,
        backgroundSize: 'cover',
        // padding: '50px 120px',
        backgroundPosition: 'center',
        height: '600px',
        width: 'auto',
    },
    '.hotchef-title': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        // fontWeight: '700',
        fontSize: '32px',
        lineHeight: '24px',
        textAlign: 'center',
        color: '#FBFBFB',
        marginBottom: '40px'
    },
    '.home-banner .row': {
        paddingTop: '325px',
        margin: '0px',
        // position: 'relative',
    },
    '.justify-content-center': {
        display: 'flex',
        justifyContent: 'center',
    },
    '.chef-container': {
        width: '987px',
        height: '240px',
        background: 'rgba(8, 11, 14, 0.8)',
        alignItems: 'bottom'
    },
    '.pe-fo-exp': {
        // position: 'relative',
        width: 'auto',
        bottom: '0px',
        padding: '40px',
    },
    '.form-row': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    '.form-group': {
        width: '100%',
        flex: '1',
        border: '1px solid #FBFBFB',
        padding: '14px',
        height: '46px',
    },
    '.form-group:last-child': {
        border: 'unset',
        padding: '0px 16px',
        height: '77px'
    },
    '.form-control': {
        backgroundColor: 'transparent',
        border: '0px',
        borderRadius: '0px',
        paddingLeft: '0px',
        paddingRight: '0px',
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#FBFBFB',
        width: '100%'
    },
    '.label': {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#FBFBFB',
        marginBottom: '8px',
        display: 'block',
    },
    // '.css-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {
    //     color: '#FBFBFB !important',
    //     right:'-10px !important'
    // },
    // '.react-datepicker-component':{
    //     top:'-5px'
    // },
    '.react-datepicker-component .react-datepicker-input input': {
        paddingLeft: '5px',
        color: '#080B0E',
        fontSize: '20px',
        fontWeight: '100',
        fontFamily: 'ProximaNovaA-Regular',
    },
    '.icon-rc-datepicker': {
        color: '#FBFBFB !important',
    },
    '.react-datepicker-component .react-datepicker-input': {
        background: 'transparent',
        border: '0px',
        borderRadius: '0px',
    },
    '.react-datepicker-component .react-datepicker-input:hover': {
        background: 'transparent',
        border: '0px',
        borderRadius: '0px'
    },
    '.react-datepicker-component .react-datepicker-input.has-value input': {
        color: '#FBFBFB !important',
        padding: '8px 0px',
        // top: '-5px'
    },
    // '.react-datepicker-component': {
    //     top: '-5px'
    // },
    '.react-datepicker-component .react-datepicker-input.is-open': {
        background: 'transparent',
        border: '0px',
        borderRadius: '0px',
    },
    '.edit': {
        display: 'none',
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '250',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#C6A87D',
        textAlign: 'right',
        marginBottom: '12px',
        textDecoration: 'none',
    },
    '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
        height: '10px',
        padding: '5px !important',
    },
    '.MuiSelect-select': {
        padding: '1px !important',
    },
    '.MuiSelect-icon': {
        top: 0
    },
    '.hot-chef-search-btn': {
        background: '#C6A87D',
        border: '0px',
        borderRadius: '0px',
        height: '75px',
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#080B0E',
        display: 'block',
        padding: '16px',
        width: '148px',
        cursor: 'pointer'
    },
    '.main-container': {
        position: 'relative'
    },
    '.overlay': {
        position: 'absolute',
        bottom: 0,
        right: 0,
        background: '#080B0E',
        overflow: 'hidden',
        height: 0,
        transition: '0.25s ease',
        color: '#FBFBFB',
    },
    '.supper-overlay': {
        position: 'absolute',
        bottom: 0,
        right: 0,
        background: '#DCD7CB',
        overflow: 'hidden',
        height: 0,
        transition: '0.25s ease',
        fontSize: '60px',
        color: '#080B0E'
    },
    '.main-container:hover .overlay': {
        bottom: 0,
        height: '100%',
        padding: '40px 16px'
    },
    '.main-container:hover .supper-overlay': {
        bottom: 0,
        height: '100%',
        padding: '40px 16px'
    },
    '.container': {
        // border: '1px solid red',
        justifyContent: 'center',
        padding: '80px 0px',
        backgroundColor: '#101418'
    },
    '.privee-container': {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    '.supper-container': {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    '.img-box': {
        display: 'flex',
        justifyContent: 'center',
        background: '#101418', padding: '80px 0px',
    },
    '.privee-title-hover': {
        fontSize: '32px',
        textAlign: 'center',
        color: '#FBFBFB',
        paddingTop: '15px'
    },
    '.privee-sub-title': {
        fontSize: '16px',
        textAlign: 'center',
        color: '#FBFBFB',
        padding: '20px',
    },
    '.supper-title-hover': {
        fontSize: '32px',
        textAlign: 'center',
        color: '#080B0E',
        paddingTop: '15px'
    },
    '.supper-sub-title': {
        fontSize: '16px',
        textAlign: 'center',
        color: '#080B0E',
        padding: '20px',
    },
    '.view-btn': {
        fontSize: '16px',
        lineHeight: '19px',
        fontWeight: '600',
        borderRadius: '0',
        backgroundColor: '#C6A87D',
        color: '#080B0E',
        padding: '12px',
        textTransform: 'capitalize',
    },
    '.book-btn': {
        fontSize: '16px',
        lineHeight: '19px',
        fontWeight: '600',
        borderRadius: '0',
        backgroundColor: '#080B0E',
        color: '#FFFFFF',
        padding: '15px',
        textTransform: 'capitalize',
        marginBottom: '20px'
    },
    '.footer-text': {
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: "#222222",
        padding: '18px',
    }, '.footer-item': {
        color: '#DCD7CB',
    },
    '.MobileLightThemeIcon': {
        paddingRight: '40px',
    },
    '.css-oacx5d': {
        padding: '10px'
    },
    '.privee-desktop': {
        background: '#101418',
        padding: '50px 120px',
    },
    '.privee-card-title': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        fontweight: '400',
        fontSize: '32px',
        lineHeight: '40px',
        color: '#FBFBFB',
        marginBottom: '8px'
    },
    '.privee-card-details': {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#FBFBFB',
        marginBottom: '20px',
    },
    '.privee-card-link': {
        background: '#C6A87D',
        padding: '18px',
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: '600',
        fontFamily: 'Proxima Nova',
        textDecoration: 'none',
        display: 'block',
        width: '85%',
        color: '#080B0E !important',
        textAlign: 'center',
    },
    '.privee-details': {
        placeSelf: 'center',
        paddingLeft: '56px',
        flex: '0 0 auto',
        width: ' 33.33333333%',
    },
    '.privee-video': {
        flex: '0 0 auto',
        width: '66.66666667%'
    },
    '.video': {
        width: '100%',
        height: '412px',
        objectFit: 'cover',
    },
    '.row': {
        display: 'flex'
    },
    '.supper-desktop': {
        background: '#DCD7CB',
        padding: '50px 120px',
    },
    '.supper-card-title': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        fontweight: '400',
        fontSize: '32px',
        lineHeight: '40px',
        color: '#080B0E',
        marginBottom: '8px'
    },
    '.supper-card-details': {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#080B0E',
        marginBottom: '20px',
    },
    '.supper-card-link': {
        background: '#080B0E',
        padding: '18px',
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: '400',
        width: '70%',
        fontFamily: 'Proxima Nova',
        textDecoration: 'none',
        display: 'block',
        color: '#FBFBFB !important',
        textAlign: 'center',
    },
    '.supper-details': {
        placeSelf: 'center',
        // paddingRight: '131px',
        paddingLeft: '0px',
        flex: '0 0 auto',
        width: ' 33.33333333%',
    },
    //join table
    '.join-table': {
        background: '#101418',
        width: '100%'
    },
    '.join-table-heading': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        fontSize: '20px',
        lineHeight: '25px',
        color: '#FBFBFB',
        marginBottom: '8px',
    },
    '.join-table-details': {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#FBFBFB',
        marginBottom: '20px',
    },
    '.jtable-img': {
        height: '500px',
        objectFit: 'cover',
        width: '100% !important'
    },
    '.join-table-image': {
        padding: '0px',
    },
    '.find-us': {
        display: 'flex'
    },
    '.find-us-title': {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '19px',
        letterSpacing: '-0.01em',
        color: '#FBFBFB',
        marginRight: '10px',
        marginBottom: '0px',
        marginTop: '7px',
    },
    '.join-table-title': {
        padding: '109px 242px 0px 120px'
    },
    '.social-icon': {
        display: 'flex',
        alignItems: 'center',
        placeContent: 'flex-end',
        cursor: 'pointer'
    },
    '.icon': {
        display: 'flex',
        placeContent: 'flex-end',
        color: 'black',
        background: '#fff',
        padding: '4px',
        borderRadius: '100%',
        marginRight: ' 6px',
    },
    '.input-group': {
        position: 'relative',
    },
    '.input-group a': {
        color: '#FBFBFB',
        textDecoration: 'none',
    },
    '.input-field': {
        borderRadius: '0px',
        background: '#FBFBFB',
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '14px',
        lineHeight: '25px',
        color: '#BDBDBD',
        width: '100%',
        height: "36px !important",
        marginBottom: '20px'
    },
    '.btn': {
        background: "#C6A87D",
        fontSize: '14px !important',
        lineHeight: "25px",
        borderRadius: "0px",
        color: "#080B0E",
        height: "36px !important",
        width: '50px !important',
        borderColor: '#C6A87D',
        margin: '0px',
        textTransform: "capitalize !important"
    },
    ".btn:hover": {color: "#080B0E", background: "#C6A87D",},
    '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
        borderRadius: '0px',
        fontSize: '14px'
    },
    '.sign-in': {
        color: '#C6A87D !important',
        textDecoration: 'underline !important',
    },
    '.treat': {
        display: 'flex',
        justifyContent: 'center',
        background: ' #DCD7CB',
        padding: '80px 120px'
    },
    '.treaty-card': {
        display: "flex",
        justifyContent: 'center'
    },
    //gallery
    '.gallery': {
        background: '#FBFBFB',
        padding: '80px 100px',
    },
    '.gallery-heading': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        fontSize: '24px',
        lineHeight: '30px',
        letterSpacing: ' 0.06em',
        color: '#080B0E',
        textAlign: 'center',
        padding: '15px 5px',
    },
    ".gallery-btn": {
        fontStyle: 'normal',
        lineHeight: '24px',
        marginRight: '0px',
        border: '1px solid #222222',
        width: '100% !important',
        fontFamily: 'Proxima Nova',
        fontSize: "20px !important",
        fontWeight: '600',
        borderRadius: "0px",
        color: "#080B0E !important",
        backgroundColor: 'unset !important',
        textTransform: "capitalize",
        height: "55px !important",
        padding: '14px !important',
    },
    '.mobileView-gallery': {
        display: 'none',
    },
    ".gallery-btn:hover": {color: "#C6A87D!important;"},

    //fresh food from
    '.fresh-blog': {
        padding: '80px 120px'
    },
    '.fresh-food-detail': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0px 8px 10px rgb(0 0 0 / 6%)',
        placeItems: 'center',
        alignItem: 'center',
        marginBottom: '16px'
    },
    '.fresh-food-gallery-heading': {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '30px',
        margin: '20px 0px'
    },
    '.fresh-food-img': {
        width: '250px',
        height: '160px',
        objectFit: 'cover'
    },
    '.fresh-food-title': {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '150%',
        color: '#222222',
        display: 'block',
        paddingBottom: '8px',
        width: '100%'
    },
    '.fresh-food-sub-details': {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#222222',
        display: 'block',
        paddingBottom: '8px'
    },
    '.fresh-food-heading': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        fontSize: '24px',
        lineHeight: '30px',
        letterSpacing: ' 0.06em',
        color: '#080B0E',
        textAlign: 'center',
        padding: '15px 5px',
    },
    '.fresh-food-arrow': {
        fontSize: '40px',
    },
    '.food-box': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    '.up-super-club': {
        padding: '80px 120px',
        background: '#DCD7CB'
    },

    // !media query for mobile device demo component(Privee and supperClub)

    '@media(min-width: 1px) and (max-width: 425px)': {
        '.img-box': {
            padding: '40px 0px'
        },
        '.privee-demo': {
            width: '100%',
        },
        '.supper-demo': {
            width: '100%',
        },
        '.supperClub-demo': {
            width: '45%',
        },
        '.container': {
            padding: '40px 16px'
        },
        '.supper-title-hover': {
            fontSize: '16px',
        },
        '.supper-sub-title': {
            fontSize: '12px',
            padding: '5px',
        },
        '.main-container:hover .supper-overlay': {
            padding: '10px 16px',
            width: "100%"
        },
        '.book-btn': {
            fontSize: '12px',
            fontWeight: 300,
            padding: '5px',
            marginBottom: '20px'
        },
        '.privee-title-hover': {
            fontSize: '16px',
        },
        '.privee-sub-title': {
            fontSize: '12px',
            padding: '5px',
        },
        '.main-container:hover .overlay': {
            padding: '10px 16px',
            width: "100%"
        },
        '.view-btn': {
            fontSize: '12px',
            fontWeight: 300,
            padding: '5px',
            marginBottom: '16px'
        },
        '.treat-card2': {
            display: 'none'
        },
        '.treaty-card': {
            display: "block",
        },
        '.treat': {
            padding: '0px'
        },
        '.gallery': {
            display: 'none'
        },
        '.mobileView-gallery': {
            display: 'block',
        },
        '.gallery-heading': {
            fontSize: '20px',
            lineHeight: '25px',
            textAlign: 'left',
            marginBottom: '16px',
            padding: '15px 12px',
        },
        '.fresh-blog': {
            padding: '15px'
        },
        '.fresh-food-sub-details': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '12px',
            lineHeight: '18px',
            color: '#222222',
        },
        '.fresh-food-title': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '30px',
            paddingBottom: '0px'
        },
        '.fresh-food-img': {
            width: '60px',
            height: '60px',
        },
        '.row': {
            display: 'block'
        },
        '.jtable-img': {
            height: '200px',
            objectFit: 'cover',
            width: '100% !important'
        },
        '.join-table-title': {
            padding: '40px'
        },
        '.privee-video': {
            width: '100%',
            height: 'auto'
        },
        '.privee-details': {
            width: '100%',
            paddingLeft: '0px'
        },
        '.privee-desktop': {
            // padding: '40px'
            display: 'none'
        },
        '.supper-details': {
            width: '100%',
            paddingLeft: '0px',
            paddingBottom: '10px'
        },
        '.supper-desktop': {
            // padding: '40px'
            display: 'none'
        },
        '.justify-content-center': {
            display: 'none',
        },
        '.home-banner': {
            marginTop: '35px',
            width: '100%',
            height: '486px',
            objectFit: 'cover',
            objectPosition: '0px 50px',
        }
    },
    '@media(min-width: 426px) and (max-width: 768px)': {
        '.treaty-card': {
            display: "block",
        },
        '.treat': {
            padding: '40px 120px'
        },
        '.MuiImageList-root': {
            columnCount: '1 !important',
            width: 'auto'
        },
        '.fresh-food-img': {
            width: 'unset',
        },
        '.row': {
            display: 'block'
        },
        '.jtable-img': {
            height: '400px',
            objectFit: 'cover',
            width: '100% !important'
        },
        '.join-table-title': {
            padding: '40px'
        },
        '.privee-video': {
            width: '100%'
        },
        '.privee-details': {
            width: '100%',
            paddingLeft: '0px'
        },
        '.supper-details': {
            width: '100%',
            paddingLeft: '0px',
            paddingBottom: '10px'
        },
        '.home-banner': {
            marginTop: '55px'
        }
    },
    '@media(min-width: 700px) and (max-width: 768px)': {
        '.chef-container': {
            width: '100%',
            background: 'rgba(8, 11, 14, 0.8)',
            alignItems: 'bottom'
        },
        '.pe-fo-exp': {
            padding: '40px 10px',
            width: '750px'
        }
    },
    '@media(min-width: 769px) and (max-width: 1024px)': {
        '.treat': {
            padding: '80px'
        },
        '.fresh-food-img': {
            width: 'unset',
        },
        '.chef-container': {
            width: '987px',
        },
        '.jtable-img': {
            height: '500px',
            objectFit: 'cover',
            width: '100% !important'
        },
    },
    '@media(min-width: 1100px) and (max-width: 1440px)': {
        '.jtable-img': {
            height: '500px',
            objectFit: 'cover',
            width: '600px !important'
        },
        '.chef-container': {
            width: '987px',
        },
    },

})

const HomePage = () => {
    const itemData = [
        {
            img: gallery2,
            title: 'gallery2',
            rows: 0.9,
        },
        {
            img: gallery1,
            title: ' gallery1',
            rows: 1.1,
        },
        {
            img: gallery3,
            title: 'gallery3',
            rows: 2,
            cols: 2,
        },
        {
            img: gallery4,
            title: 'gallery4',
            rows: 1.3,
        },
        {
            img: gallery5,
            title: 'gallery5',
            rows: 0.7,
        },
    ];
    const freshFoodItems = [
        {
            title: "Food Tips",
            subTitle: "Indian dishes that you can prepare at home this diwali",
            img: food1
        },
        {
            title: "Global Fusion",
            subTitle: "Recipes prepared by our chef that have a twist and are easy to make at home",
            img: food2
        },
        {
            title: "Latest Trends",
            subTitle: "Recipes prepared by our chef that have a twist and are easy to make at home",
            img: food3
        }
    ];

    const {data} = useContext(CmsContext);
    console.log('==========data', data)

    const handleClick = () => {
        navigate('/privee-viewmore', {state: true});
    }

    return (
        <React.Fragment>
            <Navbar isIcon={false} isImage={true}/>
            <BoxWrapper>
            {
    !_.isEmpty(data) &&
    <React.Fragment>
                <Box className="home-banner" sx={{backgroundImage: `url(${homeBanner})`,}}>
                    <Box className="row justify-content-center">
                        <Box className="chef-container">
                            <Box className="pe-fo-exp">
                                {/*<Typography className="hotchef-title">The Hottest Chef’s Tables in Town.</Typography>*/}
                                <Typography className="hotchef-title">{data.header.title}</Typography>
                                <Formik
                                    initialValues={{
                                        city: 'Mumbai',
                                        on: new Date(),
                                        time: 'Lunch',
                                        diners: '1'
                                    }}
                                    onSubmit={(values) => {
                                        console.log(values.date)
                                        const experienceData = {
                                            ...values,
                                            on: moment(_.get(values, 'date')).format('DD/MM/YYYY'),
                                        }
                                        console.log("value===>", values)
                                        console.log("experienceData===>", experienceData)
                                    }}
                                >
                                    {({values, handleChange, handleSubmit, setFieldValue}) => (
                                        <Form onSubmit={handleSubmit}>
                                            <Box className="form-row">
                                                <Box className="form-group">
                                                    <label className="label">Where</label>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        name="city"
                                                        value={values.city}
                                                        onChange={handleChange}
                                                        defaultValue={values.city}
                                                        className="selectpicker my-select dropdown-toggle form-control"
                                                        sx={{
                                                            fontSize: '20px',
                                                            '.MuiOutlinedInput-notchedOutline': {border: 0},
                                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                border: 'none',
                                                            },
                                                            '.MuiSelect-icon': {
                                                                color: '#FBFBFB'
                                                            },
                                                            '.MuiSelect-select': {
                                                                padding: '0px 5px',
                                                                fontSize: '20px',
                                                                fontWeight: '100',
                                                                display: 'flex',
                                                                flexDirection: 'column'
                                                            }
                                                        }}
                                                        MenuProps={{
                                                            PaperProps: {
                                                                sx: {
                                                                    background: "#080B0E",
                                                                    color: '#FBFBFB',
                                                                    li: {
                                                                        fontSize: '20px',
                                                                        fontWeight: '100',
                                                                        padding: '6px 16px'
                                                                    },
                                                                    ul: {
                                                                        display: 'flex',
                                                                        flexDirection: 'column'
                                                                    },
                                                                    'li:last-child': {
                                                                        borderBottom: 'none'
                                                                    },
                                                                    'li:hover': {
                                                                        color: '#C6A87D!important',
                                                                        backgroundColor: '#DCD7CB !important'
                                                                    },
                                                                    "&& .Mui-selected": {
                                                                        backgroundColor: "#0000FF !important"
                                                                    }
                                                                },
                                                            },
                                                        }}
                                                    >
                                                        <MenuItem value="Mumbai">Mumbai</MenuItem>
                                                        <MenuItem value="Delhi">Delhi</MenuItem>
                                                        <MenuItem value="Goa">Goa</MenuItem>
                                                        <MenuItem value="Banglore">Banglore</MenuItem>
                                                        <MenuItem value="Hydrabad">Hydrabad</MenuItem>
                                                    </Select>
                                                </Box>
                                                <Box className="form-group">
                                                    <label className="label"
                                                           style={{marginBottom: '1px !important'}}>On</label>
                                                    <DatePickerInput
                                                        name="on"
                                                        value={values.on}
                                                        displayFormat="ddd,DD MMM"
                                                        returnFormat="ddd,DD MMM"
                                                        className="form-control"
                                                        onChange={(dateString) => setFieldValue('on', dateString)}
                                                        defaultValue={values.on}
                                                    />
                                                </Box>
                                                <Box className="form-group">
                                                    <label className="label">Time</label>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        name="time"
                                                        value={values.time}
                                                        onChange={handleChange}
                                                        defaultValue={values.time}
                                                        className="selectpicker my-select dropdown-toggle form-control"
                                                        sx={{
                                                            fontSize: '20px',
                                                            '.MuiOutlinedInput-notchedOutline': {border: 0},
                                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                border: 'none',
                                                            },
                                                            '.MuiSelect-icon': {
                                                                color: '#FBFBFB'
                                                            },
                                                            '.MuiSelect-select': {
                                                                padding: '0px 5px',
                                                                fontSize: '20px',
                                                                fontWeight: '100'
                                                            }
                                                        }}
                                                        MenuProps={{
                                                            PaperProps: {
                                                                sx: {
                                                                    background: "#080B0E",
                                                                    color: '#FBFBFB',
                                                                    li: {
                                                                        fontSize: '20px',
                                                                        fontWeight: '100',
                                                                        padding: '6px 16px'
                                                                    },
                                                                    ul: {
                                                                        display: 'flex',
                                                                        flexDirection: 'column'
                                                                    },
                                                                    'li:last-child': {
                                                                        borderBottom: 'none'
                                                                    },
                                                                    'li:hover': {
                                                                        color: '#C6A87D!important',
                                                                        backgroundColor: '#DCD7CB !important'
                                                                    },
                                                                    "&& .Mui-selected": {
                                                                        backgroundColor: "#0000FF !important"
                                                                    }
                                                                },
                                                            },
                                                        }}
                                                    >
                                                        <MenuItem value="Lunch">Lunch</MenuItem>
                                                        <MenuItem value="Dinner">Dinner</MenuItem>
                                                        <MenuItem value="BreakFast">BreakFast</MenuItem>
                                                    </Select>
                                                </Box>
                                                <Box className="form-group">
                                                    <label className="label">Diners</label>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        name="diners"
                                                        value={values.diners}
                                                        onChange={handleChange}
                                                        defaultValue={values.diners}
                                                        className="selectpicker my-select dropdown-toggle form-control"
                                                        sx={{
                                                            fontSize: '20px',
                                                            '.MuiOutlinedInput-notchedOutline': {border: 0},
                                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                border: 'none',
                                                            },
                                                            '.MuiSelect-icon': {
                                                                color: '#FBFBFB'
                                                            },
                                                            '.MuiSelect-select': {
                                                                padding: '0px 5px',
                                                                fontSize: '20px',
                                                                fontWeight: '100'
                                                            }
                                                        }}
                                                        MenuProps={{
                                                            PaperProps: {
                                                                sx: {
                                                                    background: "#080B0E",
                                                                    color: '#FBFBFB',
                                                                    li: {
                                                                        fontSize: '20px',
                                                                        fontWeight: '100',
                                                                        padding: '6px 16px'
                                                                    },
                                                                    ul: {
                                                                        display: 'flex',
                                                                        flexDirection: 'column'
                                                                    },
                                                                    'li:last-child': {
                                                                        borderBottom: 'none'
                                                                    },
                                                                    'li:hover': {
                                                                        color: '#C6A87D!important',
                                                                        backgroundColor: '#DCD7CB !important'
                                                                    },
                                                                    "&& .Mui-selected": {
                                                                        backgroundColor: "#0000FF !important"
                                                                    }
                                                                },
                                                            },
                                                        }}
                                                    >
                                                        <MenuItem value="1">1</MenuItem>
                                                        <MenuItem value="2">2</MenuItem>
                                                        <MenuItem value="3">3</MenuItem>

                                                    </Select>
                                                </Box>
                                                <Box className="form-group">
                                                    <Typography>
                                                        <button type="submit" className="hot-chef-search-btn"
                                                                onClick={handleClick}>Search
                                                        </button>
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Form>
                                    )}
                                </Formik>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <ClubSection/>
                <Box className="privee-desktop">
                    <Box className="row">
                        <Box className="privee-video">
                            <video autoPlay muted loop className='video'>
                                <source src={priveeVideo} type="video/mp4"/>
                            </video>
                        </Box>
                        <Box className="privee-details">
                            <Typography className="privee-card-title">Privee</Typography>
                            <Typography className='privee-card-details'>Dine in the comfort of your home with
                                friends
                                and family</Typography>
                            <Typography><Link href="/privee" className="privee-card-link">View
                                Experiences</Link></Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="supper-desktop">
                    <Box className="row">
                        <Box className="supper-details">
                            <Typography className="supper-card-title">Supper Club</Typography>
                            <Typography className='supper-card-details'>Experience a shared meal at bespoke
                                locations</Typography>
                            <Typography><Link href="/supper-club" className="supper-card-link">Book a Supper
                                Club</Link></Typography>
                        </Box>
                        <Box className="privee-video">
                            <video autoPlay muted loop className='video'>
                                <source src={supperVideo} type="video/mp4"/>
                            </video>
                        </Box>
                    </Box>
                </Box>
                <PriveeMain title='Continue Browsing' subTitle='Chef s you ve checked out previously'/>
                <MainFoodDetailng/>
                <PriveeCarousel/>
                <RatingCarousel/>
                <DiningPage image={diningPicture} title={'What we cook for'}/>
                <TestimonialCarousel/>
                <Box className="gallery">
                    <Box>
                        {/*<Typography className='gallery-heading'>Food that makes you drool!</Typography>*/}
                        <Typography className='gallery-heading'>{data.food_drools.title}</Typography>
                    </Box>
                    <ImageList variant="masonry"
                               sx={{width: '100%', height: '100%'}}
                               cols={3}
                               gap={20}
                               rowHeight={300}>
                        {data.food_drools.content.map((item) => (
                            <ImageListItem key={item} cols={item.cols || 1} rows={item.rows || 1}>
                                <img
                                    src={item}
                                    // alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                <Box className="mobileView-gallery">
                    <Box>
                        <Typography className='gallery-heading'>Food that makes you drool!</Typography>
                    </Box>
                    <Grid container spacing={1} sx={{padding: '10px 12px'}}>
                        <Grid item xs={12}>
                            <img src={gallery1} style={{width: '100%', height: '200px'}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={gallery2} style={{width: '48%', height: '200', paddingRight: "5px"}}/>
                            <img src={gallery3} style={{width: '48%', height: '200', paddingLeft: "5px"}}/>
                        </Grid>
                        <Grid item xs={12} spacing={2}>
                            <Button className="gallery-btn">
                                View Gallery
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box className="treat">
                    <Grid className="treaty-card">
                        <Grid className="treat-card1" xs={6} md={4} sm={4}><Treaty
                            treatTitle="#Treat your loved ones"
                            mainTitle="Give the gift of an unforgettable food experience"
                            detail="send a gift card to your friends and family"
                            link={'/gift-cards'}/></Grid>
                        <Grid className="treat-card2" xs={6} md={4} sm={4}><Treaty
                            treatTitle="#Patron Privilage"
                            mainTitle="Become a patron and get exclusive access to our top experiences"
                            link={'/become-a-patron'}/></Grid>
                    </Grid>
                </Box>
                <Box className="join-table join-table1">
                    <Box className="container-fluid">
                        <Grid container className="row">
                            <Grid xl={6} lg={6} xs={6} md={6} sm={12} xs={12} className="join-table-image">
                                <img src={JoinTableImg} alt="Join The Table" className="jtable-img"/>
                            </Grid>
                            <Grid xl={6} lg={6} xs={6} md={6} sm={12} xs={12} className="join-table-title">
                                <Typography className='join-table-heading'>Join our table</Typography>
                                <Typography className='join-table-details'>Receive recipes , tips and tricks
                                    from top
                                    chefs from around the globe, and exclusive
                                    offers right to your inbox.</Typography>
                                <form action="" accept-charset="UTF-8" method="get">
                                    <Box className="input-group">
                                        <Box className='input-group'>
                                            <Box style={{width: '100%', display: 'flex'}}>
                                                <TextField className='input-field' id='email-address'
                                                           size='small'
                                                           placeholder='Your email address' variant='outlined'
                                                           InputProps={{
                                                               disableUnderline: true
                                                           }}/>
                                                <Button className='btn'>Submit</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </form>
                                <Typography className="join-table-details">By signing up, I agree to Chef’s a
                                    porter’s <a
                                        href="" className='sign-in'>T&C’s</a> and <a href=""
                                                                                     className='sign-in'>Privacy
                                        Policy</a></Typography>
                                <Box className="find-us">
                                    <Typography className="find-us-title">Find us on:</Typography>
                                    <Box className="social-icon">
                                        <InstagramIcon className='icon'/>
                                        <LinkedInIcon className='icon'/>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <CorporateBooking/>
                <Box className="fresh-blog">
                    <Typography className='fresh-food-heading'>{data.blog.title}</Typography>
                    {data.blog.content.map((item, index) => (
                        <Box className='fresh-food-detail'>
                            <Box key={index} className="food-box">
                                <img src={item.image} className="fresh-food-img"/>
                                <Box style={{marginLeft: '20px'}}>
                                    <Typography className='fresh-food-title'>{item.title}</Typography>
                                    <Typography
                                        className='fresh-food-sub-details'>{item.description}</Typography>
                                </Box>
                            </Box>
                            <Box><KeyboardArrowRightIcon className="fresh-food-arrow"/></Box>
                        </Box>
                    ))}
                </Box>
                <DiningExperienceCarousel/>
                <TemptedYet title={'View our offerings'}/>
                <NeedHelp/>
                <Footer/>
                <FooterEnd/>
                </React.Fragment>
}
            </BoxWrapper>
        </React.Fragment>
    )
}
export default HomePage;
