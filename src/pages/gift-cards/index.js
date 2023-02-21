import React, {useState} from "react";
import {
    Box,
    Grid,
    styled,
    TextField,
    Typography,
} from "@mui/material";
import Footer from "../../components/Footer";
import Navbar from "../navbar";
import NeedHelp from "../../components/NeedHelp";
import FooterEnd from "../../components/FooterEndSection";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InputAdornment from '@mui/material/InputAdornment';
import ContactsIcon from '@mui/icons-material/Contacts';
import {Formik, Form, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {isMobile} from "react-device-detect";
import trendingUp from "../../assets/images/trending-up.png";
import gallery from "../../assets/images/sc-gallery.png";
import occasion from "../../assets/images/occasion.png";
import goldLogo from "../../assets/images/logo-gold.png";
import ShareIcon from '@mui/icons-material/Share';
import ImageCarousel from "../../components/ImageCarousel";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveIcon from '@mui/icons-material/Remove';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

const GiftCards = () => {

    //validations
    const validationSchema = Yup.object({
        name: Yup.string().required('Please enter name'),
        email: Yup.string().email('Incorrect Email Id').required('please enter email'),
        contactNumber: Yup.number().typeError("Incorrect Contact Number").required('please enter contact number'),
        receiverMessage: Yup.string().required('Please enter text'),
    });

    //for Cover Letter
    const CHARACTER_LIMIT = 500;

    //for occassionMessage
    const CHAR_LIMIT = 70;
    let [count, setCount] = useState(1);
    let Qty = 10;
    function incrementCount() {
        if (count < Qty) {
            count = count + 1;
            setCount(count);
        }
    }
    function decrementCount() {
        if (count > 0) {
            count = count - 1;
            setCount(count);
        }
    }

    const [occassionMessage, setOccassionMessage] = useState("");

    const BoxWrapper = styled(Box)(() => ({
        backgroundColor: '#DCD7CB',
        PaddingRight: '0px',
        '.justify-content-center': {
            display: 'flex',
            marginTop: '-80px',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        '.recipient': {
            background: '#FBFBFB',
            padding: '20px',
            width: '596px',
            position: 'relative',
        },
        '.recipient-title': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: 700,
            fontSize: '20px',
            lineHeight: '25px',
            color: '#080B0E',
            marginBottom: '8px',
        },
        '.recipient-details': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            // fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
            marginBottom: '40px',
        },
        '.btn-primary': {
            width: '100%',
            background: '#080B0E',
            border: '0px',
            borderRadius: '0px',
            padding: '19px 10px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
            cursor: 'pointer'
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
        '.remove-bottom-border': {
            border: '0px',
            borderBottom: 'unset !important',
        },
        '.css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input': {
            height: '149px',
            background: 'rgba(189, 189, 189, 0.2)',
            border: '0px',
            minHeight: '149px',
            resize: 'none',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            lineHeight: '17px',
            fontWeight: '400',
            color: ' #7D7D7D',
            padding: '16px 15px',
        },
        'form label': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
            marginBottom: '8px',
            display: 'block',
        },
        '.mb-3': {
            marginBottom: '30px'
        },
        '.red': {
            color: '#EB4040'
        },
        '.css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root': {
            borderRadius: '0px',
            padding: "0px",
        },
        '.form-text': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '12px',
            lineHeight: '15px',
            color: '#080B0E',
        },
        '.error': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '15px',
            color: '#EB4040',
            marginTop: '6px',
        },
        '.css-1wc848c-MuiFormHelperText-root': {
            textAlign: 'right',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '17px',
            color: '#7D7D7D',
            marginTop: '8px',
            marginBottom: '0px',
        },
        '.save_booking': {
            background: '#101418',
            padding: '16px 0px',
            marginBottom: '40px',
            width: '636px'
        },
        '.save-booking-container': {
            display: 'flex',
            justifyContent: 'center'
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
        ".header-club": {
            display: 'none',
            padding: '15px',
            backgroundColor: '#DCD7CB',
        },
        //main-header
        '.corporate-b': {
            marginTop: '80px',
            backgroundImage: `linear-gradient(180.32deg, rgba(0, 0, 0, 0) 21.51%, rgba(0, 0, 0, 0.4) 81.02%),url(${gallery})`,
            height: '500px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.16))',
            padding: '0px 300px 80px'
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
        '.gallery-carousel': {
            display: 'none'
        },

        //giftwork-Box
        '.gift-work': {
            background: '#101418',
            padding: '20px',
            width: '596px',
            position: 'relative',
        },
        '.gift-work-heading': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: '700',
            fontSize: '29.8333px',
            lineHeight: '37px',
            textAlign: 'center',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
            marginBottom: '20px',
        },
        '.step-1-heading': {
            width: '120px',
            height: '74px',
            fontFamily: "Bon Vivant",
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '59.6667px',
            lineHeight: '74px',
            textAlign: 'center',
            background: 'linear-gradient(132.43deg, #C19F5F 36.47%, #EECD8D 44.71%, #FFE8B9 52.12%, #DBAE5B 64.92%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
        },
        '.gift-steps': {
            display: 'flex',
            placeContent: 'space-between',
            position: 'relative',
            borderBottom: '0.25px solid #FBFBFB',
        },
        '.gift-steps:before': {
            content: '""',
            width: '100%',
            position: 'absolute',
            top: '37px',
            margin: 'auto',
            height: '0.25px',
            background: '#C6A87D',
            zIndex: 0,
        },
        '.step-1-detail': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '20.8833px',
            lineHeight: '25px',
            textAlign: 'center',
            color: '#FBFBFB',
            display: 'block',
            marginBottom: '20px',
        },
        '.step-1': {
            position: 'relative',
            zIndex: '1',
            background: '#101418',
        },
        '.things-to-do': {
            marginTop: '20px',
            paddingLeft: '16px',
            paddingRight: '16px',
            marginBottom: '40px',
        },
        '.things-to-do-details': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            // fontWeight: '600',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
            marginBottom: '8px',
        },
        '.things-to-do-ul': {
            paddingLeft: '1em',
            marginTop: '0',
            marginBottom: '1rem'
        },
        '.things-to-do li::marker': {
            color: '#C6A87D'
        },
        '.enter-amount-label': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
            marginBottom: '8px',
        },
        '.justify-content-between': {
            display: 'flex',
            justifyContent: 'space-between'
        },
        '.css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root': {
            background: '#FBFBFB',
            border: '0px',
            height: '35px',
            width: '75%',
            borderRadius: '0px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
            paddingLeft: '0px',
        },
        '.qty': {
            width: '100',
            placeItems: 'center',
            display: 'flex',
            placeContent: 'space-between',
        },
        '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            background: 'transparent',
            border: '0px',
            width: '20px !important',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '17px',
            color: '#FBFBFB',
            paddingLeft: '0px',
            paddingRight: '0px',
            flex: 'none',
            textAlign: 'center',
        },
        '.input-group-btn button': {
            width: '24px',
            height: '24px',
            borderRadius: '0px',
            color: '#c6a87d',
            background: 'transparent',
            border: '0.25px solid #c6a87d',
        },
        '.input-group-btn button:disabled': {
            opacity: '0.65',
        },
        '.plus button': {
            background: '#c6a87d',
            borderRadius: '0px',
            color: '#080B0E',
        },
        '.input-group-btn .btn': {
            position: 'relative',
            zIndex: '2',
        },
        '.donate-now': {
            listStyleType: 'none',
            padding: '0',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '16px',
            marginTop: '20px!important',
        },
        '.donate-now li': {
            position: 'relative',
            height: '42px',
            flex: '1 100px',
        },
        '.donate-now input': {
            display: 'block',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
        },
        '.donate-now input[type="radio"]': {
            opacity: '0.01',
            zIndex: '100',
        },
        '.donate-now input[type="radio"]:checked+label, checked+label': {
            background: '#C6A87D',
            color: '#222222',
            border: ' 0.25px solid #C6A87D',
        },
        '.donate-now label': {
            display: 'block',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            padding: '11px 28px',
            border: '0.25px solid #FBFBFB',
            cursor: 'pointer',
            zIndex: '90',
            fontFamily: 'Proxima Nova',
            fontstyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            textAlign: 'center',
            color: '#FBFBFB',
            marginBottom: '0px',
        },
        '.qty-box': {
            maxWidth: '17%'
        },
        '.amount-box': {
            maxWidth: '45%'
        },

        //occasion
        '.occasion': {
            padding: '20px',
            background: '#FBFBFB',
            width: '596px',
            position: 'relative'
        },
        '.occasion-container': {
            padding: '10px 28px',
        },
        '.occasion-title': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '25px',
            color: '#080B0E',
            // marginBottom: '26px',
        },
        // 'ul#piils-tab': {
        //     gap: '8px'
        // },
        '.css-cr824o-JoyTab-root': {
            border: '0.5px solid #080B0E',
            borderRadius: '0px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontHeight: '400',
            fontSize: '12px',
            lineHeight: '15px',
            color: '#FBFBFB',
            background: '#080B0E',
            padding: '8px 0px',
            width: '100.9px',
            height: '38px',
        },
        '.css-6gpojs-JoyTab-root': {
            border: '0.5px solid #080B0E',
            borderRadius: '0px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontHeight: '400',
            fontSize: '12px',
            lineHeight: '15px',
            color: '#FBFBFB',
            background: '#080B0E',
            padding: '8px 0px',
            width: '100.9px',
            height: '38px',
        },
        '.css-p8bp3u-JoyTab-root': {
            border: '0.5px solid #080B0E',
            borderRadius: '0px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontHeight: '400',
            fontSize: '12px',
            lineHeight: '15px',
            color: '#080B0E',
            padding: '8px 0px',
            width: '100.9px',
            height: '38px',
        },
        '.css-9qqdig-JoyTab-root': {
            border: '0.5px solid #080B0E',
            borderRadius: '0px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontHeight: '400',
            fontSize: '12px',
            lineHeight: '15px',
            color: '#080B0E',
            padding: '8px 0px',
            width: '100.9px',
            height: '38px',
        },
        '.css-1lhe3ax-JoyTabPanel-root': {
            padding: '0px'
        },
        '.occasion-cards': {
            backgroundColor: '#101418',
            boxShadow: '0px 12.0863px 18.1295px rgba(0, 0, 0, 0.2)',
            marginTop: '20px',
            padding: '30px 15px 5px 30px',
            backgroundImage: `url(${occasion})`,
            backgroundPosition: 'bottom',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        },
        '.occasion-cards u': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            // fontWeight: '300',
            fontSize: '20px',
            lineHeight: '24px',
            textAlign: 'right',
            textDecorationLine: 'underline',
            color: '#FBFBFB',
            display: 'block',
        },
        '.personalize': {
            marginBottom: '74px',
        },
        '.occasion-subtitle': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: '700',
            fontSize: '32px',
            lineHeight: '40px',
            color: '#FBFBFB',
            // marginBottom: '12px',
        },
        '.logo': {
            width: '226.29px',
            height: '50px',
        },
        '.align-items-center': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        '.nav': {
            display: 'flex',
            flexWrap: 'wrap',
            paddingLeft: '0',
            marginBottom: '0',
            listStyle: 'none',
            justifyContent: 'center'
        },
        '.css-66dh3a-MuiInputBase-input-MuiInput-input': {
            width: '100%',
            background: 'transparent',
            border: '0px',
            borderBottom: '0.377697px solid #FBFBFB',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            // fontWeight: '300',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB !important',
            paddingBottom: '12px',
            outline: 'none',
            borderRadius: '0px',
            paddingLeft: '0px',
            opacity: '1'
        },
        // '.tab-pane': {
        //     padding: '0px'
        // },
        '.clean': {
            // position: 'absolute',
            right: '20px',
            top: '24px',
            background: 'transparent',
            border: '0px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            // fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            textDecorationLine: 'underline',
            color: '#FBFBFB',
            display: 'block',
            cursor: 'pointer',
        },
        '@media(min-width: 1px) and (max-width: 425px)': {
            '.logo': {
                width: '140px',
                height: '35px',
            },
            '.personalize': {
                marginBottom: '40px',
            },
            '.occasion-subtitle': {
                fontSize: '25px',
                lineHeight: '25px',
            },
            '.css-cr824o-JoyTab-root': {
                width: '60px',
                height: '35px',
                fontSize: '9px'
            },
            '.css-6gpojs-JoyTab-root': {
                width: '60px',
                height: '35px',
                fontSize: '9px'
            },
            '.css-p8bp3u-JoyTab-root': {
                width: '58px',
                height: '35px',
                fontSize: '8px'
            },
            '.css-9qqdig-JoyTab-root': {
                width: '60px',
                height: '35px',
                fontSize: '8px'
            },
            '.occasion': {
                width: '100%',
                padding: '0px',
                background: '#DCD7CB'
            },
            '.occasion-container': {
                padding: '10px 5px',
                // background:'#DCD7CB'
            },
            '.occasion-cards': {
                padding: '10px',
                width: 'auto'
            },
            '.occasion-cards u': {
                fontSize: '12px',
                lineHeight: '15px',
            },
            '.css-66dh3a-MuiInputBase-input-MuiInput-input': {
                fontSize: '14px',
                lineHeight: '15px'
            },
            '.gallery-carousel': {
                display: 'block'
            },
            '.corporate-b': {
                display: 'none'
            },
            '.joinaschef': {
                paddingTop: '80px',
                background: '#FBFBFB'
            },
            ".header-club": {
                padding: '0px',
                display: 'flex',
            },
            '.gift-work': {
                width: 'auto',
            },
            '.recipient': {
                width: 'auto',
                background: 'unset'
            },
            '.step-1-heading': {
                width: 'auto'
            },
            '.qty-box': {
                maxWidth: '30%'
            },
            '.amount-box': {
                maxWidth: '60%'
            },
            '.donate-now': {
                gap: '8px'
            },
            '.donate-now li': {
                height: '32px',
                flex: '1 60px'
            },
            '.donate-now label': {
                padding: '6px 0px'
            }
        },
        '@media(min-width:600px) and (max-width: 768px)': {
            '.header-club': {
                display: 'flex'
            },
            ".chef-mobile-heading": {
                fontSize: "24px",
                paddingLeft: '280px',
                textAlign: 'center',
                color: '#000',
                fontFamily: 'Bon Vivant'
            },
            ".patron-mobile-heading": {
                textAlign: 'left',
            },
            '.patron-flex': {
                display: "block",
            },
            '.apply': {
                width: "auto"
            },
            '.corporate-b': {
                marginTop: '0px',
            },
            '.justify-content-between': {
                display: 'block'
            },
            '.qty-box': {
                maxWidth: '100%',
                paddingTop: '5px'
            },
        },
        "@media (min-width: 320px) and (max-width:767px)": {
            ".chef-mobile-heading": {
                padding: '8px 0px !important',
                fontSize: "24px",
                textAlign: 'center',
                color: '#000',
                fontFamily: 'Bon Vivant'
            },
        },
        '@media(min-width: 768px) and (max-width: 1460px)': {
            '.corporate-b': {
                padding: '10px 40px 80px'
            },
        },
        '@media(min-width: 1px) and (max-width: 768px)': {
            '.mobile-header': {
                display: "flex",
                alignItems: 'center',
                padding: '12px',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(220, 215, 203, 1)!important',
            },
            '.mobile-heading': {
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '20px',
                lineHeight: '24px',
                textDecoration: 'none',
                color: 'rgba(0, 0, 0, 0.9)',
            },
        },
        "@media (min-width: 320px) and (max-width:370px)": {
            '.header-icon': {
                padding: '14px 60px 0px 10px'
            }
        },
        "@media (min-width: 371px) and (max-width:400px)": {
            '.header-icon': {
                padding: '14px 80px 0px 10px'
            }
        },
        "@media (min-width: 425px) and (max-width:450px)": {
            '.header-icon': {
                padding: '14px 110px 0px 10px'
            }
        },
    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                <Navbar/>
                {isMobile ? (
                    <Box className='header-club'>
                        <ShareIcon className="header-icon"/>
                        <Typography className="chef-mobile-heading"> Gift Cards</Typography>
                    </Box>
                ) : (
                    ''
                )}
                <Box className="gallery-carousel"><ImageCarousel/></Box>
                <Box className="joinaschef">
                    <Box className="corporate-b">
                        <Box className="container">
                            <Box className="top-10 position-absolute">
                                <Typography><a href="" className="header-link"><ArrowBackIcon
                                    style={{marginRight: '15px'}}/>Back</a></Typography>
                            </Box>
                            <Box className="position-absolute patron-flex">
                                <Box>
                                    <Typography className="become-heading">Gift Card</Typography>
                                    <Typography className="become-detail">Join as a member and get exclusive member
                                        priviliges</Typography>
                                </Box>
                                <Box><Typography style={{width: '100%'}}><a href=""
                                                                            className="apply">Apply</a></Typography></Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="container-fluid">
                        <Formik
                            initialValues={{
                                name: 'sana',
                                email: 'kachwallasana@gmail.com',
                                contactNumber: '8794561230',
                                giftCardAmount: '',
                                receiverMessage: '',
                                occassionMessage1: '',
                                occassionMessage2: '',
                                occassionMessage3: '',
                                occassionMessage4: '',
                                occassionMessage5: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                console.log("value===>", values)
                            }}
                        >
                            {({values, handleChange, handleSubmit}) => (
                                <Form onSubmit={handleSubmit}>
                                    <Box className="row white-bg justify-content-center">
                                        <Box className="gift-work">
                                            <Typography className="gift-work-heading">How gift card work</Typography>
                                            <Box className="gift-steps">
                                                <Box className="step-1">
                                                    <Typography className="step-1-heading">1</Typography>
                                                    <span className="step-1-detail">Customise</span>
                                                </Box>
                                                <Box className="step-1">
                                                    <Typography className="step-1-heading">2</Typography>
                                                    <span className="step-1-detail">Gift</span>
                                                </Box>
                                                <Box className="step-1">
                                                    <Typography className="step-1-heading">3</Typography>
                                                    <span className="step-1-detail">Redeem</span>
                                                </Box>
                                            </Box>
                                            <Box className="things-to-do">
                                                <Typography className="things-to-do-details">Things to
                                                    note:</Typography>
                                                <ul className="things-to-do-details things-to-do-ul">
                                                    <li>Valid for 12 months</li>
                                                    <li>Redeemable online only</li>
                                                    <li>Valid on all experiences</li>
                                                    <li>No minimum booking amount</li>
                                                    <li>Multiple gift cards cannot be utilized for one booking</li>
                                                    <li>Not valid on XXX</li>
                                                </ul>
                                            </Box>
                                            <Box className="enter-amount">
                                                <Box className="justify-content-between">
                                                    <Box className="amount-box">
                                                        <label className="sr-only" className="enter-amount-label"
                                                               htmlFor="gift-amount">Enter Gift Card
                                                            Amount</label>
                                                        <TextField type="text" name="giftCardAmount"
                                                                   className="form-control"
                                                                   value={values.giftCardAmount}
                                                                   onChange={handleChange}
                                                                   autoComplete="off"
                                                                   variant="outlined"
                                                                   id="gift-amount"
                                                                   sx={{
                                                                       '.MuiOutlinedInput-notchedOutline': {
                                                                           border: 'none',
                                                                           outline: 'none'
                                                                       },
                                                                   }}
                                                                   InputProps={{
                                                                       disableUnderline: true,
                                                                       startAdornment: <InputAdornment
                                                                           position="start"><CurrencyRupeeIcon sx={{
                                                                           paddingLeft: '10px',
                                                                           fontSize: '18px',
                                                                           color: 'black',
                                                                           borderRight: '1px solid black'
                                                                       }}/></InputAdornment>,
                                                                   }}/>
                                                    </Box>
                                                    <Box className="qty-box">
                                                        <label className="sr-only enter-amount-label">Qty</label>
                                                        <div className="input-group qty">
                                                            <span className="input-group-btn">
                                                              <button type="button"
                                                                      className="btn btn-default btn-number"
                                                                      disabled={count == 1 ? true : false}
                                                                      data-type="minus"
                                                                      onClick={decrementCount}>-
                                                              </button>
                                                            </span>
                                                            <TextField type="text" name="quant[1]" id="Qty"
                                                                       className="input-number"
                                                                       value={count}
                                                                       autoComplete={"off"}
                                                                       sx={{
                                                                '.MuiOutlinedInput-notchedOutline': {
                                                                    border: 'none',
                                                                    outline: 'none'
                                                                },
                                                            }}
                                                            />
                                                            <span className="input-group-btn plus">
                                                              <button type="button"
                                                                      className="btn btn-default btn-number"
                                                                      disabled={count == 10 ? true : false}
                                                                      data-type="plus"
                                                                      onClick={incrementCount}>+
                                                              </button>
                                                            </span>
                                                        </div>
                                                    </Box>
                                                </Box>
                                                <div className="row r-btn">
                                                    <ul className="donate-now">
                                                        <li>
                                                            <input type="radio" id="amt1" name="amount" value="₹1000"
                                                                   defaultChecked="checked"/>
                                                            <label htmlFor="amt1">₹1000</label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="amt2" name="amount" value="₹2000"/>
                                                            <label htmlFor="amt2">₹2000</label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="amt3" name="amount" value="₹3000"/>
                                                            <label htmlFor="amt3">₹3000</label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="amt4" name="amount" value="₹4000"/>
                                                            <label htmlFor="amt4">₹4000</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Box>
                                        </Box>
                                        <Box className="occasion">
                                            <Box className="occasion-container">
                                                <h4 className="occasion-title">Choose Occassion</h4>
                                                <Tabs aria-label="Basic tabs" defaultValue={0}>
                                                    <TabList>
                                                        <Tab>Wedding</Tab>
                                                        <Tab>Festive</Tab>
                                                        <Tab>Birthday</Tab>
                                                        <Tab>Congratulation</Tab>
                                                        <Tab>Congratulation</Tab>
                                                    </TabList>
                                                    <TabPanel value={0} sx={{p: 2}}>
                                                        <div className="tab-content" id="pills-tabContent">
                                                            <div className="tab-pane fade show" id="wedding"
                                                                 role="tabpanel"
                                                                 aria-labelledby="wedding-tab">
                                                                <div className="occasion-cards">
                                                                    <div className="row align-items-center personalize">
                                                                        <div className="col-lg-7">
                                                                            <img src={goldLogo} alt="Logo"
                                                                                 className="logo footer-logo"/>
                                                                        </div>
                                                                        <div className="col-lg-5">
                                                                            <u>Personalize</u>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row occasion-title">
                                                                        <div className="col-lg-12">
                                                                            <Box style={{
                                                                                display: 'flex',
                                                                                justifyContent: 'space-between',
                                                                                alignItems: 'center'
                                                                            }}>
                                                                                <Box> <Typography
                                                                                    className="occasion-subtitle">Happy
                                                                                    Wedding</Typography></Box>
                                                                                <Box>
                                                                                    <button id="clean" type="reset"
                                                                                            className="clean"
                                                                                            onClick={() => setOccassionMessage('')}>Clear
                                                                                    </button>
                                                                                </Box>
                                                                            </Box>
                                                                            <TextField
                                                                                inputProps={{
                                                                                    maxlength: CHAR_LIMIT,
                                                                                }}
                                                                                sx={{
                                                                                    disableUnderline: true,
                                                                                    '.MuiOutlinedInput-notchedOutline': {
                                                                                        border: 'none',
                                                                                        outline: 'none'
                                                                                    },
                                                                                    '.css-1rcvvn7-MuiInputBase-root-MuiInput-root:after': {
                                                                                        borderBottom: 'unset'
                                                                                    },
                                                                                    '.css-1d1r5q-MuiFormHelperText-root': {
                                                                                        fontFamily: 'Proxima Nova',
                                                                                        fontStyle: 'normal',
                                                                                        fontWeight: '250',
                                                                                        fontSize: '16px',
                                                                                        lineHeight: '19px',
                                                                                        textAlign: 'right',
                                                                                        color: '#FBFBFB',
                                                                                        marginBottom: '0px',
                                                                                        opacity: '1',
                                                                                    },
                                                                                }}
                                                                                name="occassionMessage1"
                                                                                autoComplete="off"
                                                                                className="form-control remove-bottom-border occassion-box"
                                                                                value={values.occassionMessage1}
                                                                                placeholder="Wishing you the best of a lifetime of memories|"
                                                                                helperText={`${values.occassionMessage1.length}/${CHAR_LIMIT} Characters`}
                                                                                onChange={handleChange("occassionMessage1")}
                                                                                margin="normal"
                                                                                variant="standard"
                                                                                fullWidth
                                                                                multiline
                                                                                autoComplete="off"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </TabPanel>
                                                    <TabPanel value={1} sx={{p: 2}}>
                                                        <div className="tab-content" id="pills-tabContent">
                                                            <div className="tab-pane fade show " id="wedding"
                                                                 role="tabpanel"
                                                                 aria-labelledby="wedding-tab">
                                                                <div className="occasion-cards">
                                                                    <div className="row align-items-center personalize">
                                                                        <div className="col-lg-7">
                                                                            <img src={goldLogo} alt="Logo"
                                                                                 className="logo footer-logo"/>
                                                                        </div>
                                                                        <div className="col-lg-5">
                                                                            <u>Personalize</u>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row occasion-title">
                                                                        <div className="col-lg-12">
                                                                            <Box style={{
                                                                                display: 'flex',
                                                                                justifyContent: 'space-between',
                                                                                alignItems: 'center'
                                                                            }}>
                                                                                <Box> <Typography
                                                                                    className="occasion-subtitle">Happy
                                                                                    Festive</Typography></Box>
                                                                                <Box>
                                                                                    <button id="clean" type="reset"
                                                                                            className="clean"
                                                                                            onClick={() => setOccassionMessage('')}>Clear
                                                                                    </button>
                                                                                </Box>
                                                                            </Box>
                                                                            <TextField
                                                                                inputProps={{
                                                                                    maxlength: CHAR_LIMIT,
                                                                                }}
                                                                                sx={{
                                                                                    disableUnderline: true,
                                                                                    '.MuiOutlinedInput-notchedOutline': {
                                                                                        border: 'none',
                                                                                        outline: 'none'
                                                                                    },
                                                                                    '.css-1rcvvn7-MuiInputBase-root-MuiInput-root:after': {
                                                                                        borderBottom: 'unset'
                                                                                    },
                                                                                    '.css-1d1r5q-MuiFormHelperText-root': {
                                                                                        fontFamily: 'Proxima Nova',
                                                                                        fontStyle: 'normal',
                                                                                        fontWeight: '250',
                                                                                        fontSize: '16px',
                                                                                        lineHeight: '19px',
                                                                                        textAlign: 'right',
                                                                                        color: '#FBFBFB',
                                                                                        marginBottom: '0px',
                                                                                        opacity: '1',
                                                                                    },
                                                                                }}
                                                                                name="occassionMessage2"
                                                                                autoComplete="off"
                                                                                className="form-control remove-bottom-border occassion-box"
                                                                                value={values.occassionMessage2}
                                                                                placeholder="Wishing you the best of a lifetime of memories|"
                                                                                helperText={`${values.occassionMessage2.length}/${CHAR_LIMIT} Characters`}
                                                                                onChange={handleChange("occassionMessage2")}
                                                                                margin="normal"
                                                                                variant="standard"
                                                                                fullWidth
                                                                                multiline
                                                                                autoComplete="off"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </TabPanel>
                                                    <TabPanel value={2} sx={{p: 2}}>
                                                        <div className="tab-content" id="pills-tabContent">
                                                            <div className="tab-pane fade show " id="wedding"
                                                                 role="tabpanel"
                                                                 aria-labelledby="wedding-tab">
                                                                <div className="occasion-cards">
                                                                    <div className="row align-items-center personalize">
                                                                        <div className="col-lg-7">
                                                                            <img src={goldLogo} alt="Logo"
                                                                                 className="logo footer-logo"/>
                                                                        </div>
                                                                        <div className="col-lg-5">
                                                                            <u>Personalize</u>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row occasion-title">
                                                                        <div className="col-lg-12">
                                                                            <Box style={{
                                                                                display: 'flex',
                                                                                justifyContent: 'space-between',
                                                                                alignItems: 'center'
                                                                            }}>
                                                                                <Box> <Typography
                                                                                    className="occasion-subtitle">Happy
                                                                                    Birthday</Typography></Box>
                                                                                <Box>
                                                                                    <button id="clean" type="reset"
                                                                                            className="clean"
                                                                                            onClick={() => setOccassionMessage('')}>Clear
                                                                                    </button>
                                                                                </Box>
                                                                            </Box>
                                                                            <TextField
                                                                                inputProps={{
                                                                                    maxlength: CHAR_LIMIT,
                                                                                }}
                                                                                sx={{
                                                                                    disableUnderline: true,
                                                                                    '.MuiOutlinedInput-notchedOutline': {
                                                                                        border: 'none',
                                                                                        outline: 'none'
                                                                                    },
                                                                                    '.css-1rcvvn7-MuiInputBase-root-MuiInput-root:after': {
                                                                                        borderBottom: 'unset'
                                                                                    },
                                                                                    '.css-1d1r5q-MuiFormHelperText-root': {
                                                                                        fontFamily: 'Proxima Nova',
                                                                                        fontStyle: 'normal',
                                                                                        fontWeight: '250',
                                                                                        fontSize: '16px',
                                                                                        lineHeight: '19px',
                                                                                        textAlign: 'right',
                                                                                        color: '#FBFBFB',
                                                                                        marginBottom: '0px',
                                                                                        opacity: '1',
                                                                                    },
                                                                                }}
                                                                                name="occassionMessage3"
                                                                                autoComplete="off"
                                                                                className="form-control remove-bottom-border occassion-box"
                                                                                value={values.occassionMessage3}
                                                                                placeholder="Wishing you the best of a lifetime of memories|"
                                                                                helperText={`${values.occassionMessage3.length}/${CHAR_LIMIT} Characters`}
                                                                                onChange={handleChange("occassionMessage3")}
                                                                                margin="normal"
                                                                                variant="standard"
                                                                                fullWidth
                                                                                multiline
                                                                                autoComplete="off"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </TabPanel>
                                                    <TabPanel value={3} sx={{p: 2}}>
                                                        <div className="tab-content" id="pills-tabContent">
                                                            <div className="tab-pane fade show " id="wedding"
                                                                 role="tabpanel"
                                                                 aria-labelledby="wedding-tab">
                                                                <div className="occasion-cards">
                                                                    <div className="row align-items-center personalize">
                                                                        <div className="col-lg-7">
                                                                            <img src={goldLogo} alt="Logo"
                                                                                 className="logo footer-logo"/>
                                                                        </div>
                                                                        <div className="col-lg-5">
                                                                            <u>Personalize</u>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row occasion-title">
                                                                        <div className="col-lg-12">
                                                                            <Box style={{
                                                                                display: 'flex',
                                                                                justifyContent: 'space-between',
                                                                                alignItems: 'center'
                                                                            }}>
                                                                                <Box> <Typography
                                                                                    className="occasion-subtitle">Congratulations!!</Typography></Box>
                                                                                <Box>
                                                                                    <button id="clean" type="reset"
                                                                                            className="clean"
                                                                                            onClick={() => setOccassionMessage('')}>Clear
                                                                                    </button>
                                                                                </Box>
                                                                            </Box>
                                                                            <TextField
                                                                                inputProps={{
                                                                                    maxlength: CHAR_LIMIT,
                                                                                }}
                                                                                sx={{
                                                                                    disableUnderline: true,
                                                                                    '.MuiOutlinedInput-notchedOutline': {
                                                                                        border: 'none',
                                                                                        outline: 'none'
                                                                                    },
                                                                                    '.css-1rcvvn7-MuiInputBase-root-MuiInput-root:after': {
                                                                                        borderBottom: 'unset'
                                                                                    },
                                                                                    '.css-1d1r5q-MuiFormHelperText-root': {
                                                                                        fontFamily: 'Proxima Nova',
                                                                                        fontStyle: 'normal',
                                                                                        fontWeight: '250',
                                                                                        fontSize: '16px',
                                                                                        lineHeight: '19px',
                                                                                        textAlign: 'right',
                                                                                        color: '#FBFBFB',
                                                                                        marginBottom: '0px',
                                                                                        opacity: '1',
                                                                                    },
                                                                                }}
                                                                                name="occassionMessage4"
                                                                                autoComplete="off"
                                                                                className="form-control remove-bottom-border occassion-box"
                                                                                value={values.occassionMessage4}
                                                                                placeholder="Wishing you the best of a lifetime of memories|"
                                                                                helperText={`${values.occassionMessage4.length}/${CHAR_LIMIT} Characters`}
                                                                                onChange={handleChange("occassionMessage4")}
                                                                                margin="normal"
                                                                                variant="standard"
                                                                                fullWidth
                                                                                multiline
                                                                                autoComplete="off"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </TabPanel>
                                                    <TabPanel value={4} sx={{p: 2}}>
                                                        <div className="tab-content" id="pills-tabContent">
                                                            <div className="tab-pane fade show " id="wedding"
                                                                 role="tabpanel"
                                                                 aria-labelledby="wedding-tab">
                                                                <div className="occasion-cards">
                                                                    <div className="row align-items-center personalize">
                                                                        <div className="col-lg-7">
                                                                            <img src={goldLogo} alt="Logo"
                                                                                 className="logo footer-logo"/>
                                                                        </div>
                                                                        <div className="col-lg-5">
                                                                            <u>Personalize</u>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row occasion-title">
                                                                        <div className="col-lg-12">
                                                                            <Box style={{
                                                                                display: 'flex',
                                                                                justifyContent: 'space-between',
                                                                                alignItems: 'center'
                                                                            }}>
                                                                                <Box> <Typography
                                                                                    className="occasion-subtitle">Congratulations!!</Typography></Box>
                                                                                <Box>
                                                                                    <button id="clean" type="reset"
                                                                                            className="clean"
                                                                                            onClick={() => setOccassionMessage('')}>Clear
                                                                                    </button>
                                                                                </Box>
                                                                            </Box>
                                                                            <TextField
                                                                                inputProps={{
                                                                                    maxlength: CHAR_LIMIT,
                                                                                }}
                                                                                sx={{
                                                                                    disableUnderline: true,
                                                                                    '.MuiOutlinedInput-notchedOutline': {
                                                                                        border: 'none',
                                                                                        outline: 'none'
                                                                                    },
                                                                                    '.css-1rcvvn7-MuiInputBase-root-MuiInput-root:after': {
                                                                                        borderBottom: 'unset'
                                                                                    },
                                                                                    '.css-1d1r5q-MuiFormHelperText-root': {
                                                                                        fontFamily: 'Proxima Nova',
                                                                                        fontStyle: 'normal',
                                                                                        fontWeight: '250',
                                                                                        fontSize: '16px',
                                                                                        lineHeight: '19px',
                                                                                        textAlign: 'right',
                                                                                        color: '#FBFBFB',
                                                                                        marginBottom: '0px',
                                                                                        opacity: '1',
                                                                                    },
                                                                                }}
                                                                                name="occassionMessage5"
                                                                                autoComplete="off"
                                                                                className="form-control remove-bottom-border occassion-box"
                                                                                value={values.occassionMessage5}
                                                                                placeholder="Wishing you the best of a lifetime of memories|"
                                                                                helperText={`${values.occassionMessage5.length}/${CHAR_LIMIT} Characters`}
                                                                                onChange={handleChange("occassionMessage5")}
                                                                                margin="normal"
                                                                                variant="standard"
                                                                                fullWidth
                                                                                multiline
                                                                                autoComplete="off"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </TabPanel>
                                                </Tabs>
                                            </Box>
                                        </Box>
                                        <Box className="recipient">
                                            <Typography className="recipient-title">Recipient details</Typography>
                                            <Typography className="recipient-details">Gift card will be sent by email or
                                                SMS</Typography>
                                            <Grid className="row" xs={12}>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="validationCustomname">Receiver’s Name</label>
                                                    <TextField type="text" className="form-control" name="name"
                                                               value={values.name}
                                                               onChange={handleChange} id="validationCustomname"
                                                               placeholder="Enter name"
                                                               variant="standard"
                                                               autoComplete="off"
                                                               InputProps={{
                                                                   disableUnderline: true,
                                                               }}
                                                    />
                                                    <ErrorMessage name='name' component="div" className="error"/>
                                                </Grid>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="validationCustom02">Receiver’s Email ID</label>
                                                    <TextField type="email" name="email" className="form-control"
                                                               id="validationCustom02"
                                                               value={values.email}
                                                               onChange={handleChange}
                                                               placeholder="Enter your email address"
                                                               variant="standard"
                                                               autoComplete="off"
                                                               InputProps={{
                                                                   disableUnderline: true,
                                                               }}/>
                                                    <ErrorMessage name='email' component="div" className="error"/>
                                                </Grid>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="validationCustom03">Receiver’s Phone Number</label>
                                                    <Box className="form-group country">
                                                        <TextField type="tel" name="contactNumber"
                                                                   className="form-control" id="validationCustom03"
                                                                   placeholder="10 digit number"
                                                                   value={values.contactNumber}
                                                                   onChange={handleChange}
                                                                   autoComplete="off"
                                                                   variant="standard"
                                                                   InputProps={{
                                                                       disableUnderline: true,
                                                                       startAdornment: <InputAdornment
                                                                           position="start">91+</InputAdornment>,
                                                                       endAdornment: <InputAdornment
                                                                           position="end"><ContactsIcon
                                                                           sx={{
                                                                               color: 'black',
                                                                               cursor: 'pointer'
                                                                           }}/></InputAdornment>
                                                                   }}/>
                                                        <ErrorMessage name='contactNumber' component="div"
                                                                      className="error"/>
                                                    </Box>
                                                </Grid>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="">Message for Receiver ( Optional)</label>
                                                    <TextField
                                                        inputProps={{
                                                            maxlength: CHARACTER_LIMIT,
                                                        }}
                                                        sx={{
                                                            '.MuiOutlinedInput-notchedOutline': {
                                                                border: 'none',
                                                                outline: 'none'
                                                            },
                                                        }}
                                                        id="validationCustom04"
                                                        name="receiverMessage"
                                                        autoComplete="off"
                                                        className="form-control remove-bottom-border"
                                                        value={values.receiverMessage}
                                                        placeholder="Do you have any special requests or concerns ?"
                                                        helperText={`${values.receiverMessage.length}/${CHARACTER_LIMIT} Characters`}
                                                        onChange={handleChange("receiverMessage")}
                                                        margin="normal"
                                                        variant="outlined"
                                                        fullWidth
                                                        multiline
                                                        rows={1}
                                                        autoComplete="off"
                                                    />
                                                    <ErrorMessage name='receiverMessage' component="div"
                                                                  className="error"/>
                                                </Grid>
                                                <Grid xs={12} className="col-lg-12">
                                                    <button className="btn btn-primary" type="submit">Submit</button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Box>
                <Box className="save-booking-container">
                    <Box className="save_booking">
                        <Box className="container">
                            <Box className="row">
                                <Box className="save-booking-details">
                                    <img src={trendingUp} className="save-booking-img" alt=""/><b>₹</b> 7k + saved in
                                    annual
                                    bookings by corporates
                                </Box>
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
export default GiftCards;