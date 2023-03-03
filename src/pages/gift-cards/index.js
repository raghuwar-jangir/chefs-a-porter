import React, {useState} from "react";
import {
    Box,
    Grid,
    styled,
    TextField,
    Typography,
} from "@mui/material";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarComponent";
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
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import ChefsLogo from "../../assets/images/logo-gold.png";
import {Link} from "gatsby";
import Occasion from "../../assets/images/occasion.png";
import contacts1 from "../../assets/images/contacts1.png";
import contacts2 from "../../assets/images/contacts2.png";
import contacts3 from "../../assets/images/contacts3.png";
import contacts4 from "../../assets/images/contacts4.png";
import contacts5 from "../../assets/images/contacts5.png";

const GiftCards = () => {

    //validations
    const validationSchema = Yup.object({
        name: Yup.string().required('Please enter name'),
        email: Yup.string().email('Incorrect Email Id').required('please enter email'),
        contactNumber: Yup.number().typeError("Incorrect Contact Number").required('please enter contact number'),
        receiverMessage: Yup.string().required('Please enter text'),
    });

    const [occassionMessage, setOccassionMessage] = useState("");

    const [open, setOpen] = React.useState(false);
    const handleOpenPopUp = () => setOpen(true);
    const handleClosePopUp = () => setOpen(false);
    const [contactPopUp, setContactPopUp] = React.useState(false);
    const ContactOpen = () => setContactPopUp(true);
    const ContactClose = () => setContactPopUp(false);
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
        '.MuiFormHelperText-root': {
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
        '.qty': {
            width: '100',
            placeItems: 'center',
            display: 'flex',
            placeContent: 'space-between',
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
        '.Joy-selected': {
            border: '0.5px solid #080B0E',
            borderRadius: '0px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontHeight: '400',
            fontSize: '12px',
            lineHeight: '15px',
            color: '#FBFBFB !important',
            background: '#080B0E',
            padding: '8px 0px',
            width: '100.9px',
            height: '38px',
        },
        '.MuiTab-variantPlain': {
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
            '.Joy-selected': {
                width: '58px',
                height: '35px',
                fontSize: '9px'
            },
            '.MuiTab-variantPlain': {
                width: '58px',
                height: '35px',
                fontSize: '9px'
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
                paddingTop: '15px'
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

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 406,
        boxShadow: 24,
        background: '#FBFBFB',
        '.patron-submitted': {
            padding: '25px 20px'
        },
        '.logo': {
            height: '50px',
            position: 'relative',
            width: '226px',
            objectFit: 'contain',
        },
        '.occasion-cards': {
            backgroundColor: '#101418',
            boxShadow: '0px 12.0863px 18.1295px rgb(0 0 0 / 20%)',
            // marginTop: '20px',
            padding: '30px 10px',
            backgroundImage: `url(${Occasion})`,
            backgroundPosition: 'bottom',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        },
        '.modal-header': {
            display: 'flex',
            justifyContent: 'end'
        },
        '.close': {
            padding: '0px',
            border: '0px',
            background: 'transparent',
            cursor: 'pointer',
        },
        '.occasion-heading': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: '700',
            fontSize: '20px',
            lineHeight: '25px',
            color: '#FBFBFB',
            marginBottom: '8px'
        },
        '.occasion-title-message': {
            width: '100%',
            background: 'transparent',
            border: '0px',
            // borderBottom: '0.377697px solid #FBFBFB',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '17px',
            color: '#FBFBFB',
            paddingBottom: '8px',
            outline: 'none',
            borderRadius: '0px',
            paddingLeft: '0px',
        },
        '.personalize': {
            marginBottom: '40px',
        },
        '.char-count': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: '400',
            fontSize: '24px',
            lineHeight: '17px',
            color: '#FBFBFB',
            textAlign: 'right',
            marginTop: '5px',
            marginBottom: '0px',
        },
        '.receiver-title': {
            marginTop: '20px',
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: '700',
            fontSize: '20px',
            lineHeight: '30px',
            letterSpacing: '0.06em',
            color: '#080B0E',
        },
        '.r-details': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
            padding: '16px 0px',
        },
        '.down-invoice': {
            gap: '8px',
            display: 'flex',
        },
        '.down-invoice a': {
            border: '0.5px solid #222222',
            padding: '10px 20px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineheight: '19px',
            color: '#080B0E',
            textDecoration: 'none',
        },
        '.down-invoice a:hover': {
            color: '#C6A87D !important',
        },
        '.shareIcon': {
            height: '16px',
            width: '16px'
        },
        '.tell-us': {
            marginTop: '20px',
            display: 'block',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            letterSpacing: '0.06em',
            textDecorationLine: 'underline',
            color: '#080B0E',
        },
        '.tell-us:hover': {
            color: '#C6A87D !important'
        },
        '.rec-name': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: '700',
            fontSize: '20px',
            lineHeight: '30px',
            letterSpacing: '0.06em',
            color: '#080B0E',
        },
        '.mobile-header': {
            display: "none",
        },
        '.apply_div': {
            marginTop: '50px'
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
        },
        '.apply_btn:hover': {
            color: '#C6A87D !important'
        },
        '.need-help': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            textAlign: 'center',
            color: ' #080B0E',
            marginTop: '16px',
            marginBottom: '0px',
        },
        '.need-help-link': {
            fontWeight: '400',
            fontFamily: 'Proxima Nova',
            color: '#080B0E',
            textAlign: 'center'
        },
        '.need-help-link:hover': {
            color: '#C6A87D !important'
        },
        '.allow-access': {
            padding: '20px',
            background: '#DCD7CB',
        },
        '.access-box': {
            background: '#DCD7CB',
            display: 'block',
        },
        '.allow-details': {
            fontFamily: 'Barlow, sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '22px',
            textAlign: 'center',
            color: '#000000',
        },
        '.allow-permission-button': {
            background: '#080B0E',
            padding: '15px 10px',
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '600',
            fontFamily: 'Proxima Nova',
            textDecoration: 'none',
            display: 'block',
            color: ' #FBFBFB !important',
            textAlign: 'center',
            border: '0.5px solid #080B0E',
            flex: '1'
        },
        '.deny-permission-button': {
            padding: '15px 10px',
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '600',
            fontFamily: 'Proxima Nova',
            textDecoration: 'none',
            display: 'block',
            color: ' #080B0E!important',
            textAlign: 'center',
            border: '0.5px solid #080B0E',
            flex: '1'
        },
        '.deny-permission-button:hover': {
            color: '#C6A87D!important',
        },
        '.allow-permission-button:hover': {
            color: '#C6A87D!important',
        },
        '.access-btn': {
            display: 'flex',
            flexDirection: 'row',
            gap: '8px',
            marginTop: '16px',
            justifyContent: 'center'
        },
    }
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
                                <Typography><a href='/' className="header-link"><ArrowBackIcon
                                    style={{marginRight: '15px'}}/>Back</a></Typography>
                            </Box>
                            <Box className="position-absolute patron-flex">
                                <Box>
                                    <Typography className="become-heading">Gift Card</Typography>
                                    <Typography className="become-detail">Join as a member and get exclusive member
                                        priviliges</Typography>
                                </Box>
                                <Box><Typography style={{width: '100%'}}><a href="#recipientDetails"
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
                                                            // className="form-control"
                                                                   value={values.giftCardAmount}
                                                                   onChange={handleChange}
                                                                   autoComplete="off"
                                                                   variant="outlined"
                                                                   id="gift-amount"
                                                                   sx={{
                                                                       '& .MuiInputBase-formControl ': {
                                                                           paddingLeft: '0px',
                                                                           paddingTop: '14px'
                                                                       },
                                                                       '& .MuiOutlinedInput-notchedOutline': {
                                                                           border: 'none',
                                                                           outline: 'none',
                                                                       },
                                                                       '& .MuiInputBase-input': {
                                                                           background: '#FBFBFB',
                                                                           height: '31px',
                                                                           borderRadius: '0px',
                                                                           fontFamily: 'Proxima Nova',
                                                                           fontStyle: 'normal',
                                                                           fontWeight: '400',
                                                                           fontSize: '16px',
                                                                           lineHeight: '19px',
                                                                           color: '#080B0E',
                                                                           padding: '0px'
                                                                       },

                                                                   }}
                                                                   InputProps={{
                                                                       disableUnderline: true,
                                                                       startAdornment: <InputAdornment
                                                                           position="start"
                                                                           sx={{
                                                                               background: '#FBFBFB',
                                                                               height: '31px',
                                                                               border: '0px',
                                                                               borderRadius: '0px',
                                                                               fontFamily: 'Proxima Nova',
                                                                               fontStyle: 'normal',
                                                                               fontWeight: '400',
                                                                               lineHeight: '19px',
                                                                               color: '#080B0E',
                                                                               fontSize: '18px',
                                                                               margin: '0px',
                                                                           }}><CurrencyRupeeIcon sx={{
                                                                           background: '#FBFBFB',
                                                                           height: '20px',
                                                                           color: '#080B0E',
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
                                                                           '& .MuiInputBase-input': {
                                                                               width: "25px", background: 'transparent',
                                                                               border: '0px',
                                                                               fontFamily: 'Proxima Nova',
                                                                               fontStyle: 'normal',
                                                                               fontWeight: '400',
                                                                               fontSize: '14px',
                                                                               color: '#FBFBFB',
                                                                               lineHeight: '17px',
                                                                               paddingLeft: '0px',
                                                                               paddingRight: '0px',
                                                                               flex: 'none',
                                                                               textAlign: 'center'
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
                                                                                    '.MuiInputBase-root ': {
                                                                                        padding: '0px'
                                                                                    },
                                                                                    '.MuiOutlinedInput-notchedOutline': {
                                                                                        border: 'none',
                                                                                        outline: 'none',
                                                                                    },
                                                                                    '& .MuiInputBase-input': {
                                                                                        width: '100%',
                                                                                        background: 'transparent',
                                                                                        border: '0px',
                                                                                        borderBottom: '0.377697px solid #FBFBFB',
                                                                                        fontFamily: 'Proxima Nova',
                                                                                        fontStyle: 'normal',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '24px',
                                                                                        color: '#FBFBFB !important',
                                                                                        paddingBottom: '12px',
                                                                                        outline: 'none',
                                                                                        borderRadius: '0px',
                                                                                        paddingLeft: '0px',
                                                                                        opacity: '1'
                                                                                    },
                                                                                    '.MuiFormHelperText-root': {
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
                                                                                    '@media(min-width: 1px) and (max-width: 425px)': {
                                                                                        '& .MuiInputBase-input': {
                                                                                            fontSize: '12px',
                                                                                            lineHeight: '15px',
                                                                                        },
                                                                                    }
                                                                                }}
                                                                                name="occassionMessage1"
                                                                                autoComplete="off"
                                                                                className="form-control remove-bottom-border occassion-box"
                                                                                value={values.occassionMessage1}
                                                                                placeholder="Wishing you the best of a lifetime of memories|"
                                                                                helperText={`${values.occassionMessage1.length}/${CHAR_LIMIT} Characters`}
                                                                                onChange={handleChange("occassionMessage1")}
                                                                                margin="normal"
                                                                                variant="outlined"
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
                                                                                    '.MuiInputBase-root ': {
                                                                                        padding: '0px'
                                                                                    },
                                                                                    '.MuiOutlinedInput-notchedOutline': {
                                                                                        border: 'none',
                                                                                        outline: 'none'
                                                                                    },
                                                                                    '& .MuiInputBase-input': {
                                                                                        width: '100%',
                                                                                        background: 'transparent',
                                                                                        border: '0px',
                                                                                        borderBottom: '0.377697px solid #FBFBFB',
                                                                                        fontFamily: 'Proxima Nova',
                                                                                        fontStyle: 'normal',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '24px',
                                                                                        color: '#FBFBFB !important',
                                                                                        paddingBottom: '12px',
                                                                                        outline: 'none',
                                                                                        borderRadius: '0px',
                                                                                        paddingLeft: '0px',
                                                                                        opacity: '1'
                                                                                    },
                                                                                    '.MuiFormHelperText-root': {
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
                                                                                    '@media(min-width: 1px) and (max-width: 425px)': {
                                                                                        '& .MuiInputBase-input': {
                                                                                            fontSize: '12px',
                                                                                            lineHeight: '15px',
                                                                                        },
                                                                                    }
                                                                                }}
                                                                                name="occassionMessage2"
                                                                                autoComplete="off"
                                                                                className="form-control remove-bottom-border occassion-box"
                                                                                value={values.occassionMessage2}
                                                                                placeholder="Wishing you the best of a lifetime of memories|"
                                                                                helperText={`${values.occassionMessage2.length}/${CHAR_LIMIT} Characters`}
                                                                                onChange={handleChange("occassionMessage2")}
                                                                                margin="normal"
                                                                                variant="outlined"
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
                                                                                    '.MuiInputBase-root ': {
                                                                                        padding: '0px'
                                                                                    },
                                                                                    disableUnderline: true,
                                                                                    '.MuiOutlinedInput-notchedOutline': {
                                                                                        border: 'none',
                                                                                        outline: 'none'
                                                                                    },
                                                                                    '& .MuiInputBase-input': {
                                                                                        width: '100%',
                                                                                        background: 'transparent',
                                                                                        border: '0px',
                                                                                        borderBottom: '0.377697px solid #FBFBFB',
                                                                                        fontFamily: 'Proxima Nova',
                                                                                        fontStyle: 'normal',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '24px',
                                                                                        color: '#FBFBFB !important',
                                                                                        paddingBottom: '12px',
                                                                                        outline: 'none',
                                                                                        borderRadius: '0px',
                                                                                        paddingLeft: '0px',
                                                                                        opacity: '1'
                                                                                    },
                                                                                    '.MuiFormHelperText-root': {
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
                                                                                    '@media(min-width: 1px) and (max-width: 425px)': {
                                                                                        '& .MuiInputBase-input': {
                                                                                            fontSize: '12px',
                                                                                            lineHeight: '15px',
                                                                                        },
                                                                                    }
                                                                                }}
                                                                                name="occassionMessage3"
                                                                                autoComplete="off"
                                                                                className="form-control remove-bottom-border occassion-box"
                                                                                value={values.occassionMessage3}
                                                                                placeholder="Wishing you the best of a lifetime of memories|"
                                                                                helperText={`${values.occassionMessage3.length}/${CHAR_LIMIT} Characters`}
                                                                                onChange={handleChange("occassionMessage3")}
                                                                                margin="normal"
                                                                                variant="outlined"
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
                                                                                    '.MuiInputBase-root ': {
                                                                                        padding: '0px'
                                                                                    },
                                                                                    '.MuiOutlinedInput-notchedOutline': {
                                                                                        border: 'none',
                                                                                        outline: 'none'
                                                                                    },
                                                                                    '& .MuiInputBase-input': {
                                                                                        width: '100%',
                                                                                        background: 'transparent',
                                                                                        border: '0px',
                                                                                        borderBottom: '0.377697px solid #FBFBFB',
                                                                                        fontFamily: 'Proxima Nova',
                                                                                        fontStyle: 'normal',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '24px',
                                                                                        color: '#FBFBFB !important',
                                                                                        paddingBottom: '12px',
                                                                                        outline: 'none',
                                                                                        borderRadius: '0px',
                                                                                        paddingLeft: '0px',
                                                                                        opacity: '1'
                                                                                    },
                                                                                    '.MuiFormHelperText-root': {
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
                                                                                    '@media(min-width: 1px) and (max-width: 425px)': {
                                                                                        '& .MuiInputBase-input': {
                                                                                            fontSize: '12px',
                                                                                            lineHeight: '15px',
                                                                                        },
                                                                                    }

                                                                                }}
                                                                                name="occassionMessage4"
                                                                                autoComplete="off"
                                                                                className="form-control remove-bottom-border occassion-box"
                                                                                value={values.occassionMessage4}
                                                                                placeholder="Wishing you the best of a lifetime of memories|"
                                                                                helperText={`${values.occassionMessage4.length}/${CHAR_LIMIT} Characters`}
                                                                                onChange={handleChange("occassionMessage4")}
                                                                                margin="normal"
                                                                                variant="outlined"
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
                                                                                    '.MuiInputBase-root ': {
                                                                                        padding: '0px'
                                                                                    },
                                                                                    '.MuiOutlinedInput-notchedOutline': {
                                                                                        border: 'none',
                                                                                        outline: 'none'
                                                                                    },
                                                                                    '& .MuiInputBase-input': {
                                                                                        width: '100%',
                                                                                        background: 'transparent',
                                                                                        border: '0px',
                                                                                        borderBottom: '0.377697px solid #FBFBFB',
                                                                                        fontFamily: 'Proxima Nova',
                                                                                        fontStyle: 'normal',
                                                                                        fontSize: '20px',
                                                                                        lineHeight: '24px',
                                                                                        color: '#FBFBFB !important',
                                                                                        paddingBottom: '12px',
                                                                                        outline: 'none',
                                                                                        borderRadius: '0px',
                                                                                        paddingLeft: '0px',
                                                                                        opacity: '1'
                                                                                    },
                                                                                    '.MuiFormHelperText-root': {
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
                                                                                    '@media(min-width: 1px) and (max-width: 425px)': {
                                                                                        '& .MuiInputBase-input': {
                                                                                            fontSize: '12px',
                                                                                            lineHeight: '15px',
                                                                                        },
                                                                                    }
                                                                                }}
                                                                                name="occassionMessage5"
                                                                                autoComplete="off"
                                                                                className="form-control remove-bottom-border occassion-box"
                                                                                value={values.occassionMessage5}
                                                                                placeholder="Wishing you the best of a lifetime of memories|"
                                                                                helperText={`${values.occassionMessage5.length}/${CHAR_LIMIT} Characters`}
                                                                                onChange={handleChange("occassionMessage5")}
                                                                                margin="normal"
                                                                                variant="outlined"
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
                                        <Box className="recipient" id="recipientDetails">
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
                                                                           position="end"
                                                                           onClick={ContactOpen}><ContactsIcon
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
                                                            '& .MuiInputBase-input': {
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
                                                            '& .css-15kq27i': {
                                                                padding: '0px'
                                                            }
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
                                                    <button className="btn btn-primary" type="submit"
                                                            onClick={handleOpenPopUp}>Submit
                                                    </button>
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
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClosePopUp}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <Box className="modal-content">
                            <Box className="patron-submitted">
                                <Box className="modal-header">
                                    <button type="button" data-bs-dismiss="modal" aria-label="Close" className="close"
                                            onClick={handleClosePopUp}>
                                        <CloseIcon/>
                                    </button>
                                </Box>
                                <Grid container>
                                    <Grid item xs={12} md={12} className="occasion-cards">
                                        <Box className="personalize">
                                            <img src={ChefsLogo} alt="Logo" className="logo footer-logo"/>
                                        </Box>
                                        <Box className="row occasion-title">
                                            <Box className="col-lg-12">
                                                <Typography className="occasion-heading">Happy Wedding</Typography>
                                                <Typography className="occasion-title-message">Wishing you the best of a
                                                    lifetime of
                                                    memories|</Typography>
                                                <p className="char-count"><span id="rchars1">₹</span>2,500</p>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={12} className="receiver-details">
                                        <Typography className="receiver-title">Gift card sent successfully<br/> to <span
                                            className="rec_name">Sana</span></Typography>
                                        <Typography className="r-details">We’ll let them know you sent it</Typography>
                                        <Box className="down-invoice">
                                            <a href="">Download Invoice</a>
                                            <a href="" style={{padding: '10px'}}><ShareIcon className="shareIcon"/></a>
                                        </Box>
                                        <a href="" className="tell-us">Tell us how this transaction went</a>
                                    </Grid>
                                </Grid>
                                <Box className="apply_div">
                                    <a href="" className="apply_btn">Browse upcoming experiences</a>
                                    <Typography className="need-help">Need Help? <Link href="/contact-us"
                                                                                       className="need-help-link">Contact
                                        Us</Link></Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
                <Modal
                    keepMounted
                    open={contactPopUp}
                    onClose={ContactClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <Box className="allow-access">
                            <Box className="modal-header">
                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="close"
                                        onClick={ContactClose}>
                                    <CloseIcon/>
                                </button>
                            </Box>
                            <Box className="access-box">
                                <Typography className="allow-details">Allow <strong>Chefs-à-Porter</strong> to
                                    access your contacts?</Typography>
                                <Box className="access-btn">
                                    <Link href="/gift-cards"
                                          className="deny-permission-button">Deny</Link>
                                    <Link href="/mobile-contact"
                                          className="allow-permission-button">Allow</Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default GiftCards;