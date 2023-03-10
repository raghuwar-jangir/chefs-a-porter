import React, {useState} from "react";
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
import RatingCarousel from "../../components/RatingCarousel";
import TemptedYet from "../../components/TemptedYet";
import ImageCarousel from "../../components/ImageCarousel";
import AvlExperienceCarousel from "../../components/AvlExperienceCarousel";
import avlExp1 from "../../assets/images/avl-exp1.jpg";
import avlExp2 from "../../assets/images/avl-exp2.jpg";
import {isMobile} from "react-device-detect";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DiningPage from "../../components/DiningPage";
import ImagePopCarousel from "../../components/ImagePopCarousel";

const ChefDetails = (props) => {

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

    const breadcrumbs = [
        <Typography key="1" color="#FBFBFB">
            Privee
        </Typography>,
        <Link underline="none" key="2" color="#C6A87D" href="">
            Chef
        </Link>,
    ];

    const longText = "From Bangalore to the Culinary Institute of America in New York. He has developed his skills and love for the culinary arts. From Bangalore to the Culinary ..."

    const itemData = [
        {
            img: chef1,
            title: 'chef1',
            rows: 2,
            cols: 3,
        },
        {
            img: sGallery,
            title: 'sGallery',
            cols: 4,
        },
        {
            img: chef2,
            title: 'chef2',
            cols: 4,
        },
    ];

    const BoxWrapper = styled(Box)(() => ({
            background: '#080B0E',
            '.supper-gallery': {
                marginTop: '40px',
                padding: '0px 20px'
            },
            '.container-fluid': {
                padding: '80px 235px'
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
                // fontWeight: '700',
                fontSize: '24px',
                lineHeight: '30px',
                letterSpacing: '0.06em',
                color: '#080B0E',
                margin: '5px',
            },
            '.about-chef-details': {
                fontfamily: 'Proxima Nova',
                fontStyle: 'normal',
                // fontWeight: '300',
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
                // fontWeight: 300,
                fontSize: '16px',
                lineHeight: '19px !important',
                color: '#080B0E',
            },
            '.all-photos': {
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '19px',
                color: '#080B0E',
                textDecoration: 'none',
                background: '#FBFBFB',
                boxShadow: '0px 20px 24px rgb(0 0 0 / 6%)',
                padding: '8px 12px',
                position: 'relative',
                bottom: '50px',
                left: '530px',
            },
            '.read-more-less--more, .read-more-less--less': {
                all: 'unset',
                color: '#080B0E',
                textSecoration: 'underline',
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
                // fontWeight: '700',
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
            '.view-all': {
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
                // fontWeight: '700',
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

            '@media(min-width: 1000px) and (max-width: 1024px)': {
                '.swiper-pagination-bullet': {
                    width: '145px !important',
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
            },
            '@media(min-width: 2200px) and (max-width: 2560px)': {
                '.all-photos': {
                    bottom: '50px',
                    left: '850px',
                },
            },
            '@media(min-width: 1100px) and (max-width: 1440px)': {
                '.all-photos': {
                    bottom: '50px',
                    left: '300px',
                },
            },
            '@media(min-width: 800px) and (max-width: 1024px)': {
                '.all-photos': {
                    bottom: '50px',
                    left: '100px',
                },
            },
            '@media(min-width: 700px) and (max-width: 768px)': {
                '.all-photos': {
                    bottom: '50px',
                    left: '200px',
                },
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
                '.supper-chef-details': {
                    display: 'none'
                },
                '.tz-gallery': {
                    display: 'none'
                },
                '.mobileView-chef': {
                    display: 'block'
                },
                '.mbl-chef-name': {
                    textAlign: 'center',
                    marginBottom: '0px !important'
                },
                '.chef-header': {
                    fontSize: '24px',
                    lineHeight: '30px',
                },
                '.mobile-show': {
                    display: 'block'
                },
                ".header-club": {
                    padding: '0px',
                    display: 'flex',
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
                <Navbar isColor={true}/>
                {isMobile ? (
                    <Box className='header-club'>
                        <ArrowBackIcon className="header-icon"/>
                        <Typography className="chef-mobile-heading">Privee</Typography>
                    </Box>
                ) : (
                    ''
                )}
                <Box className="supper-gallery chef-ind">
                    <Box className="container-fluid">
                        <Box className="row supper-chef-details">
                            <Box className="details">
                                <Breadcrumbs separator="›" aria-label="breadcrumb" color="white">
                                    {breadcrumbs}
                                </Breadcrumbs>
                                <Typography className="chef-name">Chef Mako Ravindran</Typography>
                                <span className="chef-details">Specialty:<b> Thai, Japanese</b></span>
                            </Box>
                        </Box>
                        <Box className="mobileView-chef">
                            <Typography className="chef-name mbl-chef-name">Chef Mako Ravindran</Typography>
                        </Box>
                        <ImageCarousel/>
                        <Box className="mobileView-chef">
                            <Typography className="chef-details mbl-chef-name">Specialty:<b> Thai,
                                Japanese</b></Typography>
                        </Box>
                        <Box className="tz-gallery">
                            <ImageList variant="masonry"
                                       sx={{width: '100%', height: '100%', cursor: 'pointer'}}
                                       cols={2}
                                       gap={10}
                                       rowHeight={200}>
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            loading="lazy"
                                            onClick={() => {
                                                handleImageOpen(item.title)
                                            }}
                                        />
                                    </ImageListItem>
                                ))}
                                {showCarousel && (
                                    <Box className='carousel-popup'>
                                        <button className='close-button' onClick={handleImageClose}><CloseIcon/>
                                        </button>
                                        <Box className='carousel'>
                                            <ImagePopCarousel title={title}/>
                                        </Box>
                                    </Box>
                                )}

                                <a href="javascript:void(0);" className="all-photos" data-bs-toggle="modal"
                                   data-bs-target="#exampleModal" onClick={handleOpen}>Show All Photos</a>
                            </ImageList>
                        </Box>
                        <Box className="row supper-chef-details">
                            <Box className="col-lg-12">
                                <Box className="details">
                                    <Box className="supper-tabs">
                                        <Box className="tab-content" id="pills-tabContent">
                                            <Box className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                                 aria-labelledby="pills-home-tab">
                                                <Typography className="about-chef-heading">About the Chef</Typography>
                                                <Box>
                                                    <Box className='about-container'>
                                                        <img src={party} className="about-chef-icon" alt=""/>
                                                        <Typography className="about-chef-details">Fun facts: <b>Food
                                                            fanatic</b></Typography>
                                                    </Box>
                                                    <Box className='about-container'>
                                                        <img src={work} className="about-chef-icon" alt=""/>
                                                        <Typography className="about-chef-details">Worked at: <b>Taj</b></Typography>
                                                    </Box>
                                                    <Box className='about-container'>
                                                        <img src={culinary} className="about-chef-icon" alt=""/>
                                                        <Typography className="about-chef-details">Culinary School: <b>Le
                                                            Cordon Blue</b></Typography>
                                                    </Box>
                                                    <Box className='about-container'>
                                                        <img src={chef} className="about-chef-icon" alt=""/>
                                                        <Typography className="about-chef-details">Trained under: <b>Gordan
                                                            Ramsay</b></Typography>
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
                                                        {longText}
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
                                <Grid item xl={4} md={4} sm={6} xs={12}>
                                    <AvlExperienceCarousel image={avlExp1}/>
                                </Grid>
                                <Grid item xl={4} md={4} sm={6} xs={12}>
                                    <AvlExperienceCarousel image={avlExp2} isLabelShow={true}/>
                                </Grid>
                                <Grid item xl={4} md={4} sm={6} xs={12}>
                                    <AvlExperienceCarousel image={avlExp1} isLabelShow={true}/>
                                </Grid>
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
                                        <Typography className="surpirse-details">An agnostic menu that explores a
                                            Boxerse culinary<br/>journey with chef mako at the helm</Typography>
                                    </Box>
                                    <Box className="book-now">
                                        <a href="javascript:void(0);" className="view-all">Book Now</a>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <RatingCarousel backgroundColor="#DCD7CB"/>
                        <DiningPage image={chef1} title={'Gallery'}/>
                        <Box className="chef-btn book-now">
                            <Link href="/our-chefs" className="view-all">View More Chef</Link>
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
                                <Typography id="exampleModalLabel" className='schedule-heading modal-title'>Schedule a
                                    call</Typography>
                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="close"
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
                                                    <label className="schedule-label">Write your query below</label>
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
                <TemptedYet title={'Book an Experience'}/>
                <FooterEnd/>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default ChefDetails