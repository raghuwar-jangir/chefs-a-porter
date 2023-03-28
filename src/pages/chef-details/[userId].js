import React, {useContext, useState, useEffect} from "react";
import {
    Box,
    Grid,
    MenuItem,
    Select,
    styled,
    TextField,
    Typography,
    Link, ImageListItem, ImageList, Button, TextareaAutosize
} from "@mui/material";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarComponent";
import NeedHelp from "../../components/NeedHelp";
import FooterEnd from "../../components/FooterEndSection";
import party from '../../assets/images/party.png';
import work from '../../assets/images/mdi_bag.png';
import culinary from '../../assets/images/culinary.png';
import chef from '../../assets/images/chef.png';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ReactReadMoreReadLess from "react-read-more-read-less";
import chef1 from "../../assets/images/chef5.png";
import chef2 from "../../assets/images/chef6.png";
import sGallery from "../../assets/images/sc-gallery.png";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import {Form, Formik} from "formik";
import moment from "moment/moment";
import * as _ from "lodash";
import {DatePickerInput} from "rc-datepicker";
import InputAdornment from "@mui/material/InputAdornment";
import TemptedYet from "../../components/TemptedYet";
import ImageCarousel from "../../components/ImageCarousel";
import AvlExperienceCarousel from "../../components/AvlExperienceCarousel";
import avlExp1 from "../../assets/images/avl-exp1.jpg";
import avlExp2 from "../../assets/images/avl-exp2.jpg";
import {isMobile} from "react-device-detect";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DiningPage from "../../components/DiningPage";
import ImagePopCarousel from "../../components/ImagePopCarousel";
import SupperClubDetailsCarousel from "../../components/SupperClubDetailsCarousel";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {navigate} from "gatsby";
import GalleryCarousel from "../../components/GalleryCarousel"
import UsersContext from "../../context/UsersContext";


const ChefDetails = (props) => {

    // const getUserId = props?.params?.userId;
    const getUserId = '62b4582185ac160c4cbf118a';

    const {setUserId, userData} = useContext(UsersContext);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [showCarousel, setShowCarousel] = useState(false);

    const [title, setTitle] = useState('');
    const handleImageOpen = (title) => {
        setShowCarousel(true);
        setTitle(title);
    };
    const handleImageClose = () => {
        setShowCarousel(false);
    };

    useEffect(() => {
        setUserId(getUserId)
    }, [getUserId])

    const breadcrumbs = [
        <Typography key="1" color="#FBFBFB">
            Privee
        </Typography>,
        <Link underline="none" key="2" color="#C6A87D" href="">
            Chef
        </Link>,
    ];

    // const longText = "From Bangalore to the Culinary Institute of America in New York. He has developed his skills and love for the culinary arts. From Bangalore to the Culinary ..."

    // const itemData = [
    //     {
    //         img: chef1,
    //         title: 'chef1',
    //         rows: 2,
    //         cols: 3,
    //     },
    //     {
    //         img: sGallery,
    //         title: 'sGallery',
    //         cols: 4,
    //     },
    //     {
    //         img: chef2,
    //         title: 'chef2',
    //         cols: 4,
    //     },
    // ];

    const BoxWrapper = styled(Box)(() => ({
            background: '#080B0E',
            '.supper-gallery': {
                marginTop: '40px',
                // padding: '0px 20px'
            },
            '.container-fluid': {
                padding: '80px 235px'
            },
            '.carousel-box': {
                display: 'none'
            },
            '.chef-name': {
                fontSize: '23px',
                lineHeight: '30px',
                color: '#FBFBFB',
                marginTop: '8px',
                fontFamily: 'Bon Vivant',
                fontStyle: 'normal',
                letterSpacing: '0.06em',
                marginBottom: '8px',
            },
            '.chef-details': {
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontWeight: '300',
                color: '#FBFBFB',
                marginBottom: '20px',
            },
            '#pills-home': {
                background: '#DCD7CB'
            },
            '.about-chef-heading': {
                fontFamily: 'Bon Vivant',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '24px',
                lineHeight: '30px',
                letterSpacing: '0.06em',
                color: '#080B0E',
                margin: '0px 16px 20px',
                paddingTop: '20px'
            },
            '.about-chef-details': {
                fontfamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontWeight: '300',
                color: '#080B0E',
                marginLeft: '10px',
                fontSize: '16px',
                lineHeight: '19px !important',
            },
            '.about-chef-icon': {
                width: '24px',
                height: '24px',
                objectFit: 'contain',
                verticleAlign: 'middle',
            },
            '.about-container': {
                display: 'flex',
                marginBottom: '8px',
                alignItems: 'center'
            },
            '.read-more': {
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: '19px !important',
                color: '#080B0E',
                margin: '0px 16px',
                paddingBottom: '40px'
            },
            '.all-photos': {
                fontFamily: 'ProximaNovaA-Regular',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '19px',
                color: '#080B0E',
                textDecoration: 'none',
                background: '#FBFBFB',
                boxShadow: '0px 20px 24px rgb(0 0 0 / 6%)',
                padding: '8px 12px',
                position: 'absolute',
                bottom: '22px',
                right: '18px',
                borderRadius: '1px',
            },
            '.all-photos:hover': {
                fontFamily: 'ProximaNovaA-Regular',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '19px',
                color: '#080B0E',
                textDecoration: 'none',
                background: '#FBFBFB',
                boxShadow: '0px 20px 24px rgb(0 0 0 / 6%)',
                padding: '8px 12px',
                position: 'absolute',
                bottom: '22px',
                right: '18px',
                borderRadius: '1px',
            },
            '.read-more-less--more, .read-more-less--less': {
                all: 'unset',
                color: '#080B0E',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                cursor: 'pointer',
                fontWeight: '700',
                fontFamily: 'Proxima Nova',
            },
            '.treat': {
                padding: '40px 20px',
                background: '#101418',
            },
            '.treat-container': {
                padding: ' 0px',
                border: '0px',
                background: 'transparent',
            },
            '.treat-Box': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            },
            '.surprise-title': {
                fontSize: '24px',
                lineHeight: '30px',
                color: '#FBFBFB',
                fontFamily: 'Bon Vivant',
                fontStyle: 'normal',
                fontWeight: '700',
                letterSpacing: '0.06em',
                marginBottom: '8px',
            },
            '.surpirse-details': {
                fontSize: '15px',
                lineHeight: '24px',
                color: '#FBFBFB',
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
            },
            '.surprise-Box': {
                padding: '0px 12px',
                width: '75%'
            },
            '.view-all-gallery': {
                fontSize: '16px',
                lineHeight: '19px',
                color: '#FBFBFB',
                fontFamily: 'Proxima nova',
                fontStyle: 'normal',
                letterSpacing: '0.06em',
                marginBottom: '8px',
                textAlign: 'center',
                textDecoration: 'none',
                border: '1px solid #C6A87D',
                padding: '15px 45px',
                display: 'block'
            },
            '.view-all': {
                fontSize: '16px',
                lineHeight: '19px',
                color: '#FBFBFB',
                fontFamily: 'Proxima nova',
                fontStyle: 'normal',
                letterSpacing: '0.06em',
                marginBottom: '40px',
                textAlign: 'center',
                textDecoration: 'none',
                border: '1px solid #C6A87D',
                padding: '14px',
                display: 'block'
            },
            '.view-all:hover': {
                color: '#C6A87D !important',
            },
            '.book-now': {
                width: '25%',
                padding: '0px 12px'
            },
            '.mobile-show': {
                display: 'none'
            },
            '.mobileView-chef': {
                display: 'none',
                margin: '5px 0px'
            },
            '.chef-header': {
                fontFamily: 'Bon Vivant',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '30px',
                lineHeight: '37px',
                textAlign: 'left',
                letterSpacing: '0.06em',
                color: '#FBFBFB',
                padding: '20px 0px',
                marginBottom: '10px',
            },
            ".available-experiences": {
                padding: "5px",
                background: "#101418"
            },
            ".header-club": {
                display: 'none',
                padding: '15px',
                backgroundColor: '#080B0E',
            },
            '.header-icon': {
                color: '#FBFBFB'
            },
            '.chef-btn': {
                display: 'flex',
                justifyContent: 'center',
                width: 'auto'
            },
            '.carousel-popup': {
                position: 'fixed',
                top: '0px',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: '5'
            },
            '.close-button': {
                position: 'absolute',
                top: '90px',
                right: '50px',
                fontSize: '24px',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                zIndex: '10'
            },
            ".main-img": {
                width: "100%",
                height: "390px",
                display: "block",
                objectFit: "cover",
                boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
                cursor: "pointer",
            },
            '.gallery-carousel': {
                display: 'none'
            },
            ".main-img-1": {
                width: "100%",
                height: "180px",
                boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
                objectFit: "cover",
              },
              ".main-img-2": {
                width: "100%",
                height: "190px",
                boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
                objectFit: "cover",
              },
              '.child-container':{
                display:'flex',
                flexDirection:'column',
                position:'relative'
              },
              '.restorent-1':{
                maxWidth:'100% !important',
              },
              '.next-grid':{
                maxWidth:'100% !important'
              },
              '.main-2':{
                paddingLeft:"20px !important"
              },
              '.container-spacing':{
                marginTop:'5px'
              },
              '.supper-chef-details': {
                paddingTop:'20px'
              },
              '.chef-icon':{
                margin:' 0px 16px 20px'
              },
            '@media(min-width: 1000px) and (max-width: 1024px)': {
                '.swiper-pagination-bullet': {
                    width: '145px',
                },
                '.dining-content': {
                    padding: '4px 35px !important'
                },
            },
            '@media(min-width: 1px) and (max-width: 768px)': {
                '.treat-Box': {
                    display: 'block',
                    alignItems: 'center'
                },
                '.book-now': {
                    width: 'auto',
                },
                '.surprise-Box': {
                    width: 'auto'
                },
                '.container-fluid': {
                    padding: '0px 0px 0px'
                },
                '.view-all-gallery': {
                    marginBottom: '40px'
                }
            },
            '@media(min-width: 700px) and (max-width: 768px)': {
                '.bm-burger-bars': {
                    background: '#080B0E !important',
                },
            },
            "@media (min-width: 320px) and (max-width:425px)": {
                '.css-5n45bv-MuiPaper-root-MuiMobileStepper-root': {
                    paddingLeft: '130px',
                    top: '300px !important'
                },
            },
            "@media (min-width: 320px) and (max-width:350px)": {
                '.css-5n45bv-MuiPaper-root-MuiMobileStepper-root': {
                    paddingLeft: '105px',
                    top: '270px  !important'
                },
            },
            "@media (min-width: 425px) and (max-width:450px)": {
                '.css-5n45bv-MuiPaper-root-MuiMobileStepper-root': {
                    paddingLeft: '160px !important',
                    top: '330px  !important'
                },
                '.header-icon': {
                    padding: '14px 140px 0px 10px'
                }
            },
            "@media (min-width: 1px) and (max-width:425px)": {
                // '.supper-chef-details': {
                //     display: 'none'
                // },
                '.gallery-carousel': {
                    display: 'block'
                },
                '.tz-gallery': {
                    display: 'none'
                },
                '.mobileView-chef': {
                    display: 'block',
                    paddingTop: '15px'
                },
                '.mbl-chef-name': {
                    textAlign: 'center',
                    marginBottom: '0px !important'
                },
                '.chef-header': {
                    fontSize: '24px',
                    lineHeight: '30px',
                    textAlign: 'center'
                },
                '.mobile-show': {
                    display: 'block'
                },
                ".header-club": {
                    padding: '0px',
                    display: 'flex',
                },
                '.view-all-gallery':{
                    width:'100%'
                },
                '.container-spacing': {
                    display: 'none'
                },
            },
            '@media(min-width:600px) and (max-width: 768px)': {
                '.header-club': {
                    display: 'flex',
                    background: '#DCD7CB',
                },
                '.header-icon': {
                    color: "#080B0E",
                },
                ".chef-mobile-heading": {
                    fontSize: "24px",
                    paddingLeft: '280px',
                    textAlign: 'center',
                    color: "#080B0E",
                    fontFamily: 'Bon Vivant'
                },
                '.template':{
                    backgroundColor:'#FBFBFB !important'
                },
                '.template-title':{
                    color:'#080B0E !important'
                }
            },
            "@media (min-width: 320px) and (max-width:767px)": {
                ".chef-mobile-heading": {
                    padding: '8px 0px !important',
                    fontSize: "24px",
                    textAlign: 'center',
                    color: '#FBFBFB',
                    fontFamily: 'Bon Vivant'
                },
            },
            "@media (min-width: 320px) and (max-width:370px)": {
                '.header-icon': {
                    padding: '14px 80px 0px 10px'
                }
            },
            "@media (min-width: 371px) and (max-width:400px)": {
                '.header-icon': {
                    padding: '14px 110px 0px 10px'
                }
            },
        }
    ))

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 398,
        boxShadow: 24,
        '.modal-content': {
            backgroundColor: '#DCD7CB !important',
            boxShadow: '0px 8px 12px rgb(0 0 0 / 16%)',
            padding: '40px 30px 20px',
            // position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            // width: '100%',
            pointerEvents: 'auto',
            backgroundClip: 'paddingBox',
            outline: '0'
        },
        '.form-control': {
            backgroundColor: 'transparent',
            border: '0px',
            borderBottom: '0.25px solid #080B0E',
            borderRadius: '0px',
            paddingLeft: '0px',
            paddingRight: '0px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#222222',
            width: '100%'
        },
        '.form-control:focus-visible': {
            outline: '0px'
        },
        '.modal-header': {
            padding: '0px',
            marginBottom: '30px',
            borderBottom: 'none',
            position: 'relative',
            justifyContent: 'flex-start',
        },
        '.modal-header button': {
            padding: '0px',
            border: '0px',
            position: 'absolute',
            right: '0px',
            bottom: '8px',
            background: 'transparent',
            cursor: 'pointer'
        },
        '.schedule-label': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
            marginBottom: '8px',
            display: 'block',
        },
        '.schedule-heading': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '30px',
            color: '#080B0E',
            marginBottom: '8px',
            marginTop: '0px',
            display: 'block',
            textAlign: 'center'
        },
        '.mb-3': {
            marginBottom: '1rem'
        },
        ".btn-primary": {
            border: 'none !important',
            background: "#080B0E",
            width: '100% !important',
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "19px",
            borderRadius: "0px",
            color: "#FBFBFB",
            textTransform: "capitalize",
            fontFamily: 'Proxima Nova',
            height: "40px !important",
            marginTop: "0px",
        },
        '.react-datepicker-component .react-datepicker-input input': {
            paddingLeft: '5px',
            color: '#080B0E',
        },
        '.icon-rc-datepicker': {
            color: '#080B0E !important',
        },
        '.react-datepicker-component .react-datepicker-input.is-open': {
            background: 'transparent',
            border: '0px',
            borderRadius: '0px',
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
            color: '#080B0E !important',
        },
    }


    return (
        <React.Fragment>
            <BoxWrapper>
                {
                    !_.isEmpty(userData) &&
                    <>
                        <Navbar to={'/chef-details'} heading="Privee" isColor={true} isIcon={true}/>
                        <Box className="supper-gallery chef-ind">
                            <Box className="container-fluid">
                                <Box className="row supper-chef-details">
                                    <Box className="details">
                                        <Breadcrumbs separator={<ArrowForwardIosIcon
                                            sx={{
                                                fontSize: '12px',
                                                '-webkit-text-stroke': '0.2px',
                                                fontWeight: 'unset'
                                            }}/>}
                                                     aria-label="breadcrumb" color="white">
                                            {breadcrumbs}
                                        </Breadcrumbs>
                                        <Typography className="chef-name">{userData.name}</Typography>
                                        <span className="chef-details">Specialty:<b>
                                            {!_.isEmpty(userData?.details?.tags) &&
                                                <span>
                                                {userData?.details?.tags?.map((item, index) => {
                                                    return <span>{item}{index !== userData.details.tags.length - 1 && (
                                                        <span>,</span>)}</span>
                                                })}
                                            </span>
                                            }
                                        </b></span>
                                    </Box>
                                </Box>
                                <Box className="mobileView-chef">
                                    <Typography className="chef-name mbl-chef-name">{userData.name}</Typography>
                                </Box>
                                <Box className="gallery-carousel"><ImageCarousel/></Box>
                                <Box className="mobileView-chef">
                                    <Typography className="chef-details mbl-chef-name">Specialty:<b> Thai,
                                        Japanese</b></Typography>
                                </Box>
                                <Grid container spacing={{md: 2}} className="container-spacing">
                                    <Grid className="parent-container" item xl={7} md={7} sm={6} xs={12}>
                                        <Box className="container">
                                            <img
                                                src={chef1}
                                                alt="RestorentImg"
                                                className="main-img"
                                                onClick={handleImageOpen}
                                            />
                                            {showCarousel && (
                                                <Box className="carousel-popup">
                                                    <button className='close-button' onClick={handleImageClose}>
                                                        <CloseIcon
                                                            className="pop-close-icon"/></button>
                                                    <Box className="carousel">
                                                        <ImagePopCarousel title={title}/>
                                                    </Box>
                                                </Box>
                                            )}
                                        </Box>
                                    </Grid>
                                    <Grid item md={5} sm={6} xs={12} xl={5} className="main-2">
                                        <Grid className="child-container" container spacing={2}>
                                            <Grid className="restorent-1" item md={6} sm={6} xs={6} xl={6}>
                                                <img
                                                    src={sGallery}
                                                    alt="RestorentImg"
                                                    className="main-img-1"
                                                    onClick={handleImageOpen}
                                                />
                                            </Grid>
                                            <Grid item md={5} sm={6} xs={12} xl={5} className="next-grid">
                                                <Grid className="restorent-1" item md={6} sm={6} xs={6} xl={6}>
                                                    <img
                                                        src={chef2}
                                                        alt="RestorentImg"
                                                        className="main-img-2"
                                                        onClick={handleImageOpen}
                                                    />
                                                </Grid>
                                                <Button className="all-photos" onClick={handleOpen}
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal">Show All Photos</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Box className="row supper-chef-details">
                                    <Box className="col-lg-12">
                                        <Box className="details">
                                            <Box className="supper-tabs">
                                                <Box className="tab-content" id="pills-tabContent">
                                                    <Box className="tab-pane fade show active" id="pills-home"
                                                         role="tabpanel"
                                                         aria-labelledby="pills-home-tab">
                                                        <Typography className="about-chef-heading">About the
                                                            Chef</Typography>
                                                        <Box className='chef-icon'>
                                                            <Box className='about-container'>
                                                                <img src={party} className="about-chef-icon" alt=""/>
                                                                <Typography className="about-chef-details">Fun
                                                                    facts: <b>{userData.details.fun_fact}</b></Typography>
                                                            </Box>
                                                            <Box className='about-container'>
                                                                <img src={work} className="about-chef-icon" alt=""/>
                                                                <Typography className="about-chef-details">Worked
                                                                    at: <b>{userData.details.worked_at}</b></Typography>
                                                            </Box>
                                                            <Box className='about-container'>
                                                                <img src={culinary} className="about-chef-icon" alt=""/>
                                                                <Typography className="about-chef-details">Culinary
                                                                    School: <b>{userData.details.culinary_school}</b></Typography>
                                                            </Box>
                                                            <Box className='about-container'>
                                                                <img src={chef} className="about-chef-icon" alt=""/>
                                                                <Typography className="about-chef-details">Trained
                                                                    under: <b>{userData.details.trained_under}</b></Typography>
                                                            </Box>
                                                        </Box>
                                                        <Box className="read-more">
                                                            <ReactReadMoreReadLess
                                                                charLimit={125}
                                                                className="read-more-content"
                                                                readMoreClassName="read-more-less--more"
                                                                readLessClassName="read-more-less--less"
                                                                style={{
                                                                    fontFamily: 'Proxima Nova',
                                                                    fontStyle: 'normal',
                                                                    // fontWeight: 300,
                                                                    fontSize: '16px',
                                                                    lineHeight: '19px !important',
                                                                    color: '#080B0E',
                                                                }}
                                                            >
                                                                {userData.details.intro}
                                                            </ReactReadMoreReadLess>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="available-experiences">
                                    <Typography className="chef-header">Available Experiences</Typography>
                                    <Grid container spacing={2}>
                                        {userData.experinces.map((item) => {
                                            return (
                                                <Grid item xl={4} md={4} sm={6} xs={12}>
                                                    <AvlExperienceCarousel
                                                        image={item.cover_picture}
                                                        title={item.title} description={`by ${userData.name}`}/>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </Box>
                                <Box className="mobile-show book-now">
                                    <a href="javascript:void(0);" className="view-all">View More</a>
                                </Box>
                                <Box className="treat">
                                    <Box className="treat-container">
                                        <Box className="treat-Box">
                                            <Box className="surprise-Box">
                                                <Typography className="surprise-title">Surprise me</Typography>
                                                <Typography className="surpirse-details">An agnostic menu that explores
                                                    a
                                                    Boxerse culinary<br/>journey with chef mako at the helm</Typography>
                                            </Box>
                                            <Box className="book-now">
                                                <a href="/event-details" className="view-all">Book Now</a>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <SupperClubDetailsCarousel changeDetails={{fontSize: '16px'}}
                                                           changeFont={{fontSize: '20px'}}
                                                           backgroundColor='#DCD7CB'/>
                                <GalleryCarousel image={chef1} title={'Gallery'}/>
                                <Box className="chef-btn book-now">
                                    <Link href="/our-chefs" className="view-all-gallery">View More Chef</Link>
                                </Box>
                            </Box>
                        </Box>
                        <Modal
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="keep-mounted-modal-title"
                            aria-describedby="keep-mounted-modal-description"
                        >
                            <Box sx={style}>
                                <Box className="modal-content">
                                    <Box className="modal-header">
                                        <Typography id="exampleModalLabel" className='schedule-heading modal-title'>Schedule
                                            a
                                            call</Typography>
                                        <button type="button" data-bs-dismiss="modal" aria-label="Close"
                                                className="close"
                                                onClick={handleClose}>
                                            <CloseIcon/>
                                        </button>
                                    </Box>
                                    <Box className="container-fluid">
                                        <Formik
                                            initialValues={{
                                                day: new Date(),
                                                time: new Date().getHours() + ':' + new Date().getMinutes(),
                                                contactNumber: '',
                                                queryMessage: '',
                                            }}
                                            onSubmit={(values) => {
                                                const experienceData = {
                                                    ...values,
                                                    day: moment(_.get(values, 'day')).format("ddd,DD MMM "),
                                                }
                                                console.log("value===>", values)
                                                console.log("experienceData===>", experienceData)
                                            }}
                                        >
                                            {({values, handleChange, handleSubmit, setFieldValue}) => (
                                                <Form onSubmit={handleSubmit}>
                                                    <Box className="row">
                                                        <Box className="mb-3">
                                                            <label className="schedule-label">Day</label>
                                                            <DatePickerInput
                                                                name="day"
                                                                value={values.day}
                                                                displayFormat="ddd,DD MMM"
                                                                returnFormat="ddd,DD MMM"
                                                                className="form-control"
                                                                onChange={(dateString) => setFieldValue('day', dateString)}
                                                                defaultValue={values.day}
                                                            />
                                                        </Box>
                                                        <Box className="mb-3  ">
                                                            <label className="schedule-label">Time</label>
                                                            <Box
                                                                className="input-group">
                                                                <TextField type="time" name="time"
                                                                           value={values.time}
                                                                           onChange={handleChange}
                                                                           defaultValue={values.time}
                                                                           className="form-control"
                                                                           autoComplete="off"
                                                                           variant="standard"
                                                                           InputProps={{
                                                                               disableUnderline: true,
                                                                               autoCapitalize: true,
                                                                           }}/>
                                                            </Box>

                                                        </Box>
                                                        <Box className="mb-3">
                                                            <label className="schedule-label">Contact
                                                                Number</label>
                                                            <Box className="form-group">
                                                                <TextField type="tel" name="contactNumber"
                                                                           className="form-control"
                                                                           placeholder="10 digit number"
                                                                           value={values.contactNumber}
                                                                           onChange={handleChange}
                                                                           autoComplete="off"
                                                                           variant="standard"
                                                                           InputProps={{
                                                                               disableUnderline: true,
                                                                               startAdornment: <InputAdornment
                                                                                   position="start">91+</InputAdornment>
                                                                           }}/>
                                                            </Box>
                                                        </Box>
                                                        <Box className="mb-3">
                                                            <label className="schedule-label">Write your query
                                                                below</label>
                                                            <TextareaAutosize
                                                                name="queryMessage"
                                                                value={values.queryMessage}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                                maxRows={2}
                                                                maxLength={500}
                                                                placeholder="Eg. Menu, Decor, Cancellation  "
                                                            />
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <button className="btn btn-primary" type="submit"
                                                                style={{width: '100% !important'}}>Apply
                                                        </button>
                                                    </Box>
                                                </Form>
                                            )}
                                        </Formik>
                                    </Box>
                                </Box>
                            </Box>
                        </Modal>
                        <NeedHelp/>
                        <Footer/>
                        <TemptedYet isTempted={true} title={'Tempted yet?'} buttonRText={'Book an Experience'}/>
                        <FooterEnd/>
                    </>
                }
            </BoxWrapper>
        </React.Fragment>
    )
}
export default ChefDetails
