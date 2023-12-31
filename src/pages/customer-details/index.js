import React, {useState, useContext, useEffect, useCallback, useRef} from "react";
import {
    Box,
    Grid,
    styled,
    TextField,
    Checkbox,
    Typography,
} from "@mui/material";
import Navbar from "../../components/NavbarComponent";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Formik, Form, ErrorMessage, Field} from "formik";
import sGallery from "../../assets/images/sc-gallery.png";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {isMobile} from "react-device-detect";
import * as Yup from "yup";
import InputAdornment from "@mui/material/InputAdornment";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import {DatePickerInput} from "rc-datepicker";
import "../../assets/styles/fontStyle.css";
import "../../assets/styles/searchBar.css";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import GoogleMapReact from "google-map-react";
import location from "../../assets/images/location.png";
import {navigate} from "gatsby";
import OTPInput from "react-otp-input";
import OtpContext from "../../context/OtpContext";
import UsersContext from "../../context/UsersContext";
import * as _ from 'lodash'
import OtpVerificationModal from "../../components/OtpVerificationModal";
import Cookies from "js-cookie";
import {withScriptjs} from "react-google-maps";
import MapComponent from "../../components/MapComponent";

import configuration from "../../configuration";

const {API_KEY} = configuration;

const validationSchema = Yup.object({
    contactNumber: Yup.number().required('please enter the number')
});


const CustomerDetails = (props) => {
    // let userAddress = JSON.parse(localStorage.getItem('userAddress'));
    const eventIdCookieValue = Cookies.get('eventIdValue');
    const eventId = eventIdCookieValue?.replaceAll('"', '')
    const {setOtpNumber, setVerifyOtp, setResendOtp, setIsSendOtpApiCall, openOtp, setOpenOtp} = useContext(OtpContext);
    const {customerDetailsPaymentCalculation, setIsConfirm} = useContext(UsersContext);
    const CHARACTER_LIMIT = 40;
    // const [isNewAddress, setNewAddress] = useState(userAddress);
    const [isNewAddress, setNewAddress] = useState();
    const formAddress = _.values(isNewAddress);
    const MapLoader = withScriptjs(MapComponent);
    const [open, setOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState(0);    
    const [contactNumber, setContactNumber] = useState('');
    const [customerInfo, setCustomerInfo] = useState('')
    const cookieValue = Cookies?.get('customerData');
    const cDsPaymentCookieVal = Cookies?.get('CPaymentInfo');
    const[privateEventData,setPrivateEventData]=useState()

    console.log('customerDetailsPaymentCalculation',customerDetailsPaymentCalculation)

    useEffect(() => {
      let userAddress = JSON.parse(localStorage.getItem('userAddress'));
      setNewAddress(userAddress);
    }, [])
    
    // const getMinDiners=()=> {
    //   return customerDetailsPaymentCalculation.prices.reduce((min, p) => p.min_diner < min ? p.min_diner : min, data[0].min_diner);
    // }
    // const getMaxDiners=()=> {
    //   return customerDetailsPaymentCalculation.prices.reduce((max, p) => p.max_diner > max ? p.max_diner : max, data[0].max_diner);
    // }

    // console.log('min diners',getMinDiners)
    // console.log('max diners',getMaxDiners)

    // const [customerDetailsPaymentCalculation, setCustomerDetailsPaymentCalculation] = useState();

    useEffect(() => {
        if (cookieValue) {
            let cookieValueObj = JSON.parse(cookieValue);
            setCustomerInfo(cookieValueObj);
            setContactNumber(cookieValueObj.contactNumber);
        }
        setPrivateEventData(JSON.parse(localStorage.getItem('privateEventData')))
        // if (cDsPaymentCookieVal) {
        //     setCustomerDetailsPaymentCalculation(JSON.parse(cDsPaymentCookieVal));
        // }
    }, [cookieValue])

    const handleOpenOtp = (contactNumber, values) => {
        if (!_.isEmpty(contactNumber)) {
            setOpenOtp(true);
            setOtpNumber(`+91${contactNumber}`);
            setContactNumber(contactNumber);
            setIsSendOtpApiCall(true);
            setIsConfirm(false);
        }
        Cookies.set('customerData', JSON.stringify(values));
    }
    const handleCloseOtp = () => setOpenOtp(false);
    const [code, setCode] = useState("");
    //address model open and close code
    const handleOpen = () => {
        setOpen(true);
        setCurrentModal(0);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //google map for address popup
    const AnyReactComponent = ({text}) => <div>{text}</div>;
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };

    const styleModel1 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        boxShadow: 24,
    
        '.modal-content': {
          backgroundColor: '#101418!important',
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
    
        '.btn-primary': {
          border: 'none !important',
          background: 'transparent',
          fontSize: '20px',
          fontWeight: '600',
          borderRadius: '0px',
          color: '#FBFBFB',
          fontFamily: 'Proxima Nova',
          height: '40px !important',
          cursor: 'pointer'
        },
    
        '.add-location': {
          background: '#C6A87D',
          color: '#080B0E',
          fontFamily: 'ProximaNovaA-Regular',
          fontSize: '20px',
          lineHeight: '24px',
          border: '0px',
          padding: '14.5px 10px',
          width: '100%',
          fontWeight: '600',
          cursor: 'pointer',
          marginTop: '30px'
        },
    
        '.modal-header': {
          padding: '0px',
          paddingBottom: '30px',
          borderBottom: 'none',
          display: 'flex',
          position: 'relative',
          justifyContent: 'space-between'
        },
    
        '.modal-title': {
          fontFamily: 'ProximaNovaA-Regular',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '20px',
          lineHeight: '24px',
          color: '#FBFBFB'
        },
    
        '.arrow-left': {
          color: '#FBFBFB',
          fontSize: '20px',
          marginRight: '16px'
        },
        '.map-box': {
          height: '380px',
          width: '100%',
          marginBottom: '30px'
        },
        '.change-detail': {
          fontFamily: 'Proxima Nova Alt',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '16px',
          lineHeight: '19px',
          textDecorationLine: 'underline',
          color: '#C6A87D',
          position: 'absolute',
          right: '0px',
          top: '0px'
        },
        '.add-flat': {
          background: '#C6A87D',
          color: '#080B0E',
          fontFamily: 'ProximaNovaA-Regular',
          fontSize: '20px',
          lineHeight: '24px',
          border: '0px',
          padding: '14.5px 10px',
          width: '100%',
          fontWeight: '600',
          cursor: 'pointer',
          marginTop: '30px'
        },
        '.label': {
          fontFamily: 'ProximaNovaA-Regular',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '16px',
          lineHeight: '19px',
          color: '#FBFBFB',
          marginBottom: '8px'
        },
    
        '.form-control': {
          backgroundColor: 'transparent',
          border: '0px',
          borderBottom: '0.25px solid #FBFBFB',
          borderRadius: '0px',
          paddingLeft: '0px',
          paddingRight: '0px',
          fontFamily: 'Proxima Nova Alt',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '16px',
          lineHeight: '19px',
          color: '#FBFBFB',
          width: '100%',
          outline: 'none'
        },
    
        '.loc-ad': {
          display: 'flex',
          borderBottom: '0.25px solid #FBFBFB',
          padding: '30px 0px'
        },
    
        '.loc-ad img': {
          width: '17px',
          height: '20px',
          objectFit: 'contain'
        },
    
        '.address-title': {
          fontFamily: 'ProximaNovaA-Regular',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '14px',
          lineHeight: '17px',
          color: '#FBFBFB',
          marginBottom: '0.5rem'
        },
    
        '.address-detail': {
          fontFamily: 'ProximaNovaA-Regular',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '17px',
          color: 'rgba(251, 251, 251, 0.6)',
          marginBottom: '0px!important'
        },
    
        '.address-box': {
          marginLeft: '15px'
        },
    
        '.save-btn': {
          background: '#C6A87D',
          color: '#080B0E',
          fontFamily: 'ProximaNovaA-Regular',
          fontSize: '20px',
          lineHeight: '24px',
          border: '0px',
          padding: '14.5px 10px',
          width: '100%',
          fontWeight: '600',
          cursor: 'pointer'
        },
    
        '@media (min-width: 426px) and (max-width:768px)': {
          width: '500px'
        },
    
        '@media (min-width: 1px) and (max-width:400px)': {
          width: '320px !important'
        },
    
        '@media (min-width: 400px) and (max-width:425px)': {
          width: '400px !important'
        }
      }
    
      const BoxWrapper = styled(Box)(() => ({
        background: '#101418',
    
        '.supper-gallery': {
          marginTop: '40px'
        },
        '.supper-gallery .container-fluid': {
          padding: '80px 120px'
        },
        '.book-trad': {
          display: 'flex',
          placeItems: 'center',
          marginBottom: '40px',
          paddingLeft: '0px !important'
        },
        '.contact-box .error': {
            color: '#f80000 !important',
          },
        '.addons-title': {
          fontFamily: 'ProximaNovaA-Regular',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '32px',
          lineHeight: '39px',
          color: '#FBFBFB',
          marginBottom: '0px',
          marginLeft: '16px'
        },
        '.arrow-left': {
          color: '#FBFBFB',
          cursor: 'pointer'
          // fontSize: '20px',
        },
        '.cust-details': {
          padding: '0px 15px'
        },
        '.position': {
          position: 'relative'
        },
        '.per-dinner': {
          background: '#101418',
          padding: '40px 20px',
          boxShadow: '0px 20px 24px rgb(0 0 0 / 6%)',
          position: 'sticky',
          top: '50px'
        },
        '.event-div': {
          display: 'flex'
        },
        '.per-dinner-img': {
          width: '116px',
          height: '116px',
          objectFit: 'cover'
        },
        '.rating-star': {
          fontStyle: 'Proxima Nova Alt',
          display: 'flex',
          alignItems: 'center',
          fontSize: '20px',
          lineHeight: '24px',
          color: '#FBFBFB'
        },
        '.event-title': {
          fontFamily: 'Bon Vivant',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '20px',
          lineHeight: '25px',
          letterSpacing: '0.06em',
          color: '#FBFBFB'
        },
        '.event-subtitle': {
          fontFamily: 'ProximaNovaA-Regular',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '15px',
          letterSpacing: '0.06em',
          color: '#FBFBFB',
          marginBottom: '11px'
        },
        '.event-link': {
          fontFamily: 'ProximaNovaA-Regular',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '16px',
          lineHeight: '19px',
          textDecoration: 'none',
          color: '#FBFBFB !important'
        },
        '.experience-breakup': {
          border: '0.5px solid #DCD7CB',
          padding: '16px 16px 0px',
          marginTop: '30px'
        },
        '.ex-details': {
          position: 'relative'
        },
        '.ex-heading': {
          fontFamily: 'Bon Vivant',
          fontStyle: 'normal',
          // fontWeight: '700',
          fontSize: '20px',
          lineHeight: '25px',
          letterSpacing: '0.06em',
          color: '#FBFBFB',
          marginBottom: '10px'
        },
        '.ex-detail': {
          fontFamily: 'Proxima Nova Alt',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '17px',
          letterSpacing: '0.06em',
          color: '#FBFBFB',
          marginBottom: '0px'
        },
        '.ex-icon': {
          position: 'absolute',
          right: '0px',
          top: '0px',
          height: '24px',
          width: '24px',
          color: '#FBFBFB',
          ' -webkit-text-stroke': '1px'
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
        '.submit-req-disabled': {
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
        '.contact-text': {
          fontFamily: 'ProximaNovaA-Regular',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '14px',
          lineHeight: '17px',
          textAlign: 'center',
          color: 'rgba(251, 251, 251, 0.6)'
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
          padding: '0px 0px 16px'
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
          borderBottom: '1px solid rgba(255, 255, 255, 0.6)'
          // paddingTop: '16px'
        },
        '.tax1': {
          paddingTop: '20px'
        },
        '.header-club': {
          display: 'none',
          padding: '15px',
          backgroundColor: '#080B0E'
        },
        '.booking-box': {
          border: '1px solid #FBFBFB',
          padding: '40px 20px'
        },
        'form label': {
          fontFamily: 'ProximaNovaA-Regular',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '16px',
          lineHeight: '19px',
          color: '#FBFBFB',
          marginBottom: '8px',
          display: 'block'
        },
        '.form-control': {
          backgroundColor: 'transparent',
          border: '0px',
          borderBottom: '0.25px solid #FBFBFB',
          borderRadius: '0px',
          paddingLeft: '0px',
          paddingRight: '0px',
          fontFamily: 'Proxima Nova Alt',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '16px',
          lineHeight: '19px',
          color: '#FBFBFB',
          width: '100%'
        },
        '.remove-bottom-border': {
          borderBottom: 'none'
        },
        '.mb-3': {
          marginBottom: '40px'
        },
        '.add-details': {
          marginTop: '50px'
        },
        '.ad-detail': {
          fontFamily: 'Bon Vivant',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '20px',
          lineHeight: '25px',
          letterSpacing: '0.06em',
          color: '#FBFBFB',
          marginBottom: '8px'
        },
        '.exp-title': {
          fontFamily: 'Proxima Nova',
          fontStyle: 'normal',
          // fontWeight:'600',
          fontSize: '16px',
          lineHeight: '19px',
          color: '#FBFBFB',
          marginBottom: '2px'
        },
        '.mb-40': {
          marginBottom: '40px'
        },
        '.mt-40': {
          marginTop: '40px'
        },
        // '.patron-check': {
        //     padding: '0px 12px'
        // },
        '.save-patron': {
          background: '#DCD7CB',
          marginTop: '24px',
          padding: '16px !important',
          display: 'flex',
          placeItems: 'flex-start',
          alignItems: 'center',
          placeContent: 'baseline',
          marginBottom: '0px'
        },
        '.save-title': {
          backgroundColor: 'transparent',
          border: '0px',
          borderRadius: '0px',
          fontFamily: 'ProximaNovaA-Regular',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '16px',
          lineHeight: '19px',
          color: '#080B0E',
          marginBottom: '8px'
        },
        '.save-subtitle': {
          backgroundColor: 'transparent',
          border: '0px',
          borderRadius: '0px',
          fontFamily: 'Proxima Nova Alt',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '14px',
          lineHeight: '17px',
          color: '#080B0E',
          marginBottom: '8px'
        },
        '.bi-chevron-right': {
          position: 'relative',
          height: '24px',
          width: '24px',
          '-webkit-text-stroke': '1px'
        },
        '.form-check-input': {
          background: '#C6A87D',
          borderColor: '#080B0E !important',
          borderRadius: '0px',
          color: '#080B0E !important',
          width: '18px',
          height: '18px',
          marginRight: '11px'
        },
        '.form-check-input:hover': {
          background: '#C6A87D',
          borderColor: '#080B0E !important',
          borderRadius: '0px',
          color: '#080B0E !important',
          width: '18px',
          height: '18px',
          marginRight: '11px'
        },
        // '.form-check-input': {
        //     background: '#080B0E',
        //     borderColor: '#080B0E',
        //     borderRadius: '0px',
        //     width: '18px',
        //     height: '18px',
        //     marginRight: '11px',
        // },
        // '.form-check-input:checked[type=checkbox]': {
        //     background: '#080B0E',
        //     borderColor: '#080B0E',
        //     borderRadius: '0px',
        //     backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='%23C6A87D' stroke-linecap='square' stroke-linejoin='square' stroke-width='3' d='m6 10 3 3 6-6'/></svg>")`,
        //     width: '18px',
        //     height: '18px',
        //     marginRight: '11px',
        // },
        '.MuiTabList-root': {
          width: '140px',
          background: 'transparent'
        },
        '.tabs': {
          background: 'transparent'
        },
        '.tablist .MuiTab-variantPlain': {
          width: '134px'
        },
        '.tablist .MuiTab-variantPlain:hover': {
          background: '#c6a87d'
        },
        '.error': {
          fontFamily: 'Proxima Nova Alt',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '15px',
          color: '#FBFBFB',
          marginTop: '6px'
        },
        '.Joy-selected': {
          border: '0.5px solid #C6A87D !important',
          borderRadius: '0px',
          fontFamily: 'ProximaNovaA-Regular',
          fontStyle: 'normal',
          fontHeight: '400',
          fontSize: '14px',
          lineHeight: '15px',
          color: '#080B0E !important',
          background: '#C6A87D !important',
          padding: '8px 0px',
          width: '140px',
          height: '38px'
        },
        '.MuiTab-variantPlain': {
          border: '0.5px solid #FBFBFB',
          borderRadius: '0px',
          fontFamily: 'ProximaNovaA-Regular',
          fontStyle: 'normal',
          fontHeight: '400',
          fontSize: '14px',
          lineHeight: '17px',
          color: '#FBFBFB',
          padding: '8px 0px',
          width: '140px',
          height: '38px'
        },
        '.heading:hover': {
          background: 'transparent'
        },
        '.MuiTab-variantPlain:hover': {
          color: '#FBFBFB'
        },
        '.sp-occ': {
          margin: '6px 0px 20px'
        },
        '.css-1lhe3ax-JoyTabPanel-root': {
          padding: '1px 3px'
        },
        '.react-datepicker-component .react-datepicker-input input': {
          paddingLeft: '5px',
          color: '#080B0E',
          fontSize: '16px',
          lineHeight: '19px'
        },
        '.icon-rc-datepicker': {
          color: '#C6A87D !important',
          fontSize: '20px'
        },
        '.react-datepicker-component .react-datepicker-input': {
          background: 'transparent',
          border: '0px',
          borderRadius: '0px'
        },
        '.react-datepicker-component .react-datepicker-input:hover': {
          background: 'transparent',
          border: '0px',
          borderRadius: '0px'
        },
        '.react-datepicker-component .react-datepicker-input.has-value input': {
          color: '#FBFBFB !important'
        },
        '.react-datepicker-component .react-datepicker-input.is-open': {
          background: 'transparent',
          border: '0px',
          borderRadius: '0px'
        },
        '.alternative': {
          fontFamily: 'Proxima Nova Alt',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '14px',
          lineHeight: '17px',
          color: 'rgba(251, 251, 251, 0.6)',
          marginTop: '6px',
          marginBottom: '0px'
        },
        '.alternative span': {
          fontFamily: 'ProximaNovaA-Regular',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '17px',
          color: '#C6A87D !important',
          textDecoration: 'underline',
          cursor: 'pointer'
        },
        '@media (min-width: 1px) and (max-width:425px)': {
          '.supper-gallery .container-fluid': {
            padding: '20px 10px'
          },
          '.header-club': {
            padding: '0px 110px',
            display: 'flex'
          },
          '.addones-mobile-heading': {
            padding: '8px 0px !important',
            fontSize: '24px',
            textAlign: 'center',
            color: '#FBFBFB !important',
            fontFamily: 'Bon Vivant'
          },
          '.addons-title': {
            fontSize: '16px',
            lineHeight: '30px'
          },
          'form label': {
            fontSize: '15px'
          },
          '.per-dinner': {
            padding: '20px 0px'
          },
          '.table-details': {
            fontSize: '12px',
            lineHeight: '15px'
          },
          '.grand-total': {
            fontSize: '16px',
            lineHeight: '20px'
          },
          '.ex-heading': {
            fontSize: '16px',
            lineHeight: '20px',
            letterSpacing: '0.04em'
          },
          '.event-title': {
            fontSize: '14px',
            lineHeight: '18px',
            letterSpacing: '0.04em'
          },
          '.event-link': {
            fontSize: '14px',
            lineHeight: '18px'
          },
          '.rating-star': {
            fontSize: '14px',
            lineHeight: '18px'
          },
          '.submit-req': {
            fontSize: '16px',
            lineHeight: '18px'
          },
          '.MuiTabList-root': {
            width: '100%',
            display: 'flow-root'
          },
          '.MuiTab-variantPlain': {
            width: '100%',
            margin: '10px 0px'
          },
          '.Joy-selected': {
            width: '100%'
          },
          '.booking-box': {
            border: 'unset',
            padding: '0px'
          },
          '.book-trad': {
            display: 'none'
          }
        },
        '@media (min-width: 371px) and (max-width:400px)': {
          '.header-club': {
            padding: '0px 150px'
          }
          // '.MuiTabList-root': {
          //     width: '70px'
          // },
          // '.MuiTab-variantPlain': {
          //     width: '70px',
          //     fontSize: '12px'
          // },
          // '.Joy-selected': {
          //     width: '70px',
          //     fontSize: '12px'
          // },
        },
        '@media (min-width: 300px) and (max-width:350px)': {
          // '.MuiTabList-root': {
          //     width: '55px'
          // },
          // '.MuiTab-variantPlain': {
          //     width: '55px',
          //     fontSize: '10px'
          // },
          // '.Joy-selected': {
          //     width: '55px',
          //     fontSize: '10px'
          // },
        },
        '@media (min-width: 425px) and (max-width:450px)': {
          '.header-club': {
            padding: '0px 170px'
          }
        },
        '@media (min-width: 426px) and (max-width:768px)': {
          '.supper-gallery .container-fluid': {
            padding: '40px 80px'
          },
          '.header-club': {
            display: 'flex'
          }
        },
        '@media (min-width: 320px) and (max-width:767px)': {
          '.addones-mobile-heading': {
            padding: '8px 0px !important',
            fontSize: '24px',
            textAlign: 'center',
            color: '#FBFBFB',
            fontFamily: 'Bon Vivant'
          }
        },
        '@media(min-width:600px) and (max-width: 768px)': {
          '.header-club': {
            display: 'flex',
            background: '#DCD7CB'
          },
          '.bm-burger-bars': {
            background: '#080B0E !important'
          },
          '.MuiTabList-root': {
            width: '100px'
          },
          '.MuiTab-variantPlain': {
            width: '100px'
          },
          '.Joy-selected': {
            width: '100px'
          }
        },
        '@media(min-width:1000px) and (max-width: 1024px)': {
          '.MuiTabList-root': {
            width: '90px'
          },
          '.MuiTab-variantPlain': {
            width: '90px'
          },
          '.Joy-selected': {
            width: '90px'
          }
        },
        '.addones-mobile-heading': {
          fontSize: '24px',
          paddingLeft: '280px',
          textAlign: 'center',
          color: '#080B0E',
          fontFamily: 'Bon Vivant'
        }
      }))

      // console.log('formAddress',formAddress)
      // console.log('customerInfo',customerInfo)
      // // console.log('isNewAddress',isNewAddress)

    return (
        <React.Fragment>
            <BoxWrapper>
                <Navbar to={'/customer-details'} isColor={true} isIcon={true} heading="Private"/>
                <Box className="supper-gallery cust-details">
                    <Box className="container-fluid">
                        <Box className="row supper-chef-details">
                            <Box className="book-trad">
                                <ArrowBackIcon className="arrow-left" onClick={() => {
                                    navigate(`/event-details/${eventId}`)
                                }}/>
                                <Typography className="addons-title">Book {privateEventData?.title}</Typography>
                            </Box>
                            <Box className="row customer-details addons-div">
                                <Formik
                                    initialValues={{
                                      contactNumber: customerInfo?.contactNumber,
                                        // address: customerInfo?.address ? customerInfo?.address : '',
                                        address: formAddress,
                                        message: customerInfo?.message ? customerInfo?.message : '',
                                        experienceName: '',
                                        date: '',
                                        date1: '',
                                        date2: '',
                                        date3: ''
                                    }}
                                    enableReinitialize
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => {
                                    }}
                                >
                                    {({values, handleChange, handleSubmit, setFieldValue}) => (
                                        <Form onSubmit={handleSubmit}>
                                            <Grid container>
                                                <Grid xl={7} lg={7} xs={7} md={7} sm={12} xs={12}
                                                      className="booking-box">
                                                    <Box className="contact-box">
                                                    <Grid xs={12} className="mb-3">
                                                            <label htmlFor="validationCustom03">Address</label>
                                                            <label htmlFor="validationCustom03">
                                                              {values.address && values.address.map((item)=>(
                                                                <label htmlFor="">{item}</label>
                                                              ))                                                              
                                                              }
                                                            </label>
                                                            <Box className="form-group country">
                                                                {/* <TextField type="tel" name="address"
                                                                           className="form-control"
                                                                           id="validationCustom03"
                                                                           placeholder="Please select your address from the Venues"
                                                                           value={values.address}
                                                                           onChange={handleChange}
                                                                           autoComplete="off"
                                                                           variant="standard"
                                                                           InputProps={{
                                                                               disableUnderline: true,
                                                                               endAdornment: <InputAdornment
                                                                                   position="end"
                                                                               >/<ChevronRightIcon
                                                                                   sx={{color: '#FBFBFB'}}/></InputAdornment>
                                                                           }}
                                                                           sx={{
                                                                               '& .MuiInputBase-input': {
                                                                                   background: 'transparent',
                                                                                   height: '31px',
                                                                                   borderRadius: '0px',
                                                                                   fontFamily: 'Proxima Nova',
                                                                                   fontStyle: 'normal',
                                                                                   fontWeight: '400',
                                                                                   fontSize: '16px',
                                                                                   lineHeight: '19px',
                                                                                   color: '#FBFBFB',
                                                                                   padding: '0px'
                                                                               },
                                                                               '.css-1x51dt5-MuiInputBase-input-MuiInput-input': {
                                                                                   padding: '0px !important'
                                                                               }

                                                                           }}
                                                                />
                                                                <ErrorMessage name='address' component="div"
                                                                              className="error"/> */}
                                                                <Typography className="alternative">
                                                                  Enter your <span onClick={handleOpen}>address</span></Typography>
                                                                
                                                            </Box>
                                                        </Grid>
                                                        <Grid xs={12} className="mb-3">
                                                            <label htmlFor="validationCustom03">Contact Number</label>
                                                            <Box className="form-group country">
                                                                <TextField type="tel" name="contactNumber"
                                                                           className="form-control"
                                                                           id="validationCustom03"
                                                                           placeholder="10 digit number"
                                                                           value={values.contactNumber}  
                                                                           autoFocus="autofocus"                                                                                
                                                                           onChange={handleChange}
                                                                           autoComplete="off"
                                                                           variant="standard"
                                                                           sx={{
                                                                               '& .MuiInputBase-input': {
                                                                                   background: 'transparent',
                                                                                   height: '31px',
                                                                                   borderRadius: '0px',
                                                                                   fontFamily: 'Proxima Nova',
                                                                                   fontStyle: 'normal',
                                                                                   fontWeight: '400',
                                                                                   fontSize: '16px',
                                                                                   lineHeight: '19px',
                                                                                   color: '#FBFBFB',
                                                                                   padding: '0px'
                                                                               },

                                                                           }}
                                                                           InputProps={{
                                                                               disableUnderline: true,
                                                                               startAdornment: <InputAdornment
                                                                                   position="start"
                                                                                   sx={{
                                                                                       '& .MuiTypography-root': {
                                                                                           color: '#FBFBFB'
                                                                                       }
                                                                                   }}>+91</InputAdornment>
                                                                           }}/>
                                                                <ErrorMessage name='contactNumber' component="div"
                                                                              className="error"/>
                                                            </Box>
                                                        </Grid>
                                                        
                                                        <Grid xs={12} className="mb-3">
                                                            <label htmlFor="">Do you have any special requests or
                                                                concerns ?</label>
                                                            <TextField
                                                                inputProps={{
                                                                    maxlength: CHARACTER_LIMIT,
                                                                }}
                                                                sx={{
                                                                    '.MuiOutlinedInput-notchedOutline': {
                                                                        border: 'none',
                                                                        outline: 'none'
                                                                    },
                                                                    '& .MuiInputBase-formControl ': {
                                                                        padding: '0px',
                                                                    },
                                                                    '& .MuiInputBase-input': {
                                                                        height: '149px',
                                                                        background: 'rgba(251, 251, 251, 0.02)',
                                                                        border: '0px',
                                                                        minHeight: '149px',
                                                                        resize: 'none',
                                                                        fontFamily: 'Inter, sans-serif',
                                                                        fontSize: '14px',
                                                                        lineHeight: '17px',
                                                                        fontWeight: '400',
                                                                        color: ' #FBFBFB',
                                                                        padding: '16px 15px',
                                                                    },
                                                                    '.MuiFormHelperText-root': {
                                                                        fontFamily: 'Proxima Nova',
                                                                        fontStyle: 'normal',
                                                                        fontWeight: '250',
                                                                        fontSize: '14px',
                                                                        lineHeight: '17px',
                                                                        textAlign: 'right',
                                                                        color: '#7D7D7D',
                                                                        marginBottom: '0px',
                                                                        opacity: '1',
                                                                    },
                                                                    '& .css-15kq27i': {
                                                                        padding: '0px'
                                                                    }
                                                                }}
                                                                id="validationCustom04"
                                                                name="message"
                                                                autoComplete="off"
                                                                className="form-control remove-bottom-border"
                                                                value={values.message}
                                                                placeholder="eg Special Decor, "
                                                                helperText={`${values.message.length}/${CHARACTER_LIMIT} Characters`}
                                                                onChange={handleChange("message")}
                                                                margin="normal"
                                                                variant="outlined"
                                                                fullWidth
                                                                multiline
                                                                rows={1}
                                                                autoComplete="off"
                                                            />
                                                            <ErrorMessage name='message' component="div"
                                                                          className="error"/>
                                                        </Grid>
                                                        re </Box>
                                                    <Box className="row add-details">
                                                        <Typography className="ad-detail">Additional
                                                            Details </Typography>
                                                        <Typography className="ex-detail mb-40">Details help us
                                                            customize your experience to make it
                                                            memorable</Typography>
                                                        <Typography className="exp-title">Experience</Typography>
                                                        <Typography className="sp-occ ex-detail">Is there a special
                                                            occasion being
                                                            celebrated ?</Typography>
                                                            <Tabs
                                                                aria-label='Basic tabs'
                                                                className='tabs'
                                                                defaultValue={0}
                                                                sx={{
                                                                    '& .MuiTab-root': {
                                                                    marginRight: 1
                                                                    },
                                                                    '@media (min-width: 1px) and (max-width:768px)':
                                                                    {
                                                                        '& .MuiTab-root': {
                                                                        marginRight: 0
                                                                        }
                                                                    }
                                                                }}
                                                                >
                                                             <TabList className='tablist'>
                                                                <Tab>Birthday</Tab>
                                                                <Tab>Anniversary</Tab>
                                                                <Tab>Promotion</Tab>
                                                                <Tab>Other</Tab>
                                                            </TabList>
                                                            <TabPanel value={0} sx={{p: 2}}>
                                                                <Grid xs={12} className="mb-3">
                                                                    <label className="mt-40">Experience Date
                                                                        (Optional)</label>
                                                                    <DatePickerInput
                                                                        name="date"
                                                                        value={values.date}
                                                                        displayFormat="DD/MMMM/YYYY"
                                                                        returnFormat="DD/MMMM/YYYY"
                                                                        className="form-control"
                                                                        autoComplete="off"
                                                                        placeholder="DD/MM/YYYY"
                                                                        onChange={(dateString) => setFieldValue('date', dateString)}
                                                                        defaultValue={values.date}/>
                                                                    <Typography className="sp-occ ex-detail">We will
                                                                        send you exclusive offers on this
                                                                        day</Typography>
                                                                </Grid>
                                                            </TabPanel>
                                                            <TabPanel value={1} sx={{p: 2}}>
                                                                <Grid xs={12} className="mb-3">
                                                                    <label className="mt-40">Experience Date
                                                                        (Optional)</label>
                                                                    <DatePickerInput
                                                                        name="date1"
                                                                        value={values.date1}
                                                                        displayFormat="DD/MMMM/YYYY"
                                                                        returnFormat="DD/MMMM/YYYY"
                                                                        autoComplete="off"
                                                                        className="form-control"
                                                                        placeholder="DD/MM/YYYY"
                                                                        onChange={(dateString) => setFieldValue('date1', dateString)}
                                                                        defaultValue={values.date1}/>
                                                                    <Typography className="sp-occ ex-detail">We will
                                                                        send you exclusive offers on this
                                                                        day</Typography>
                                                                </Grid>
                                                            </TabPanel>
                                                            <TabPanel value={2} sx={{p: 2}}>
                                                                <Grid xs={12} className="mb-3">
                                                                    <label className="mt-40">Experience Date
                                                                        (Optional)</label>
                                                                    <DatePickerInput
                                                                        name="date2"
                                                                        value={values.date2}
                                                                        displayFormat="DD/MMMM/YYYY"
                                                                        returnFormat="DD/MMMM/YYYY"
                                                                        autoComplete="off"
                                                                        className="form-control"
                                                                        placeholder="DD/MM/YYYY"
                                                                        onChange={(dateString) => setFieldValue('date2', dateString)}
                                                                        defaultValue={values.date2}/>
                                                                    <Typography className="sp-occ ex-detail">We will
                                                                        send you exclusive offers on this
                                                                        day</Typography>
                                                                </Grid>
                                                            </TabPanel>
                                                            <TabPanel value={3} sx={{p: 2}}>
                                                                <Grid xs={12} className="mb-3">
                                                                    <TextField type="tel" name="experienceName"
                                                                               className="form-control label"
                                                                               id="validationCustom03"
                                                                               placeholder="Add Experience"
                                                                               value={values.experienceName}
                                                                               onChange={handleChange}
                                                                               autoComplete="off"
                                                                               variant="standard"
                                                                               sx={{
                                                                                   '& .MuiInputBase-input': {
                                                                                       background: 'transparent',
                                                                                       height: '31px',
                                                                                       borderRadius: '0px',
                                                                                       fontFamily: 'Proxima Nova',
                                                                                       fontStyle: 'normal',
                                                                                       fontWeight: '400',
                                                                                       fontSize: '16px',
                                                                                       lineHeight: '19px',
                                                                                       color: '#FBFBFB',
                                                                                       paddingTop: '30px'
                                                                                   },
                                                                                   '.css-v4u5dn-MuiInputBase-root-MuiInput-root:after': {
                                                                                       borderBottom: 'unset !important'
                                                                                   }
                                                                               }}
                                                                    />
                                                                    <label className="mt-40">Experience Date
                                                                        (Optional)</label>
                                                                    <DatePickerInput
                                                                        name="date3"
                                                                        value={values.date3}
                                                                        displayFormat="DD/MMMM/YYYY"
                                                                        returnFormat="DD/MMMM/YYYY"
                                                                        autoComplete="off"
                                                                        className="form-control"
                                                                        placeholder="DD/MM/YYYY"
                                                                        onChange={(dateString) => setFieldValue('date3', dateString)}
                                                                        defaultValue={values.date3}/>
                                                                    <Typography className="sp-occ ex-detail">We will
                                                                        send you exclusive offers on this
                                                                        day</Typography>
                                                                </Grid>
                                                            </TabPanel>
                                                        </Tabs>
                                                    </Box>
                                                    {/* <Box className="row patron-check">
                                                        <Box className="col-lg-12 save-patron">
                                                            <Checkbox className="form-check-input"
                                                                      defaultChecked/>
                                                            <Box sx={{width: '100%'}}>
                                                                <Typography className="save-title">Save 15% on all
                                                                    experiences by becoming a patron</Typography>
                                                                <Typography className="save-subtitle">You will
                                                                    save <b>₹1300</b> on this booking</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box> */}
                                                </Grid>
                                                <Grid xl={5} lg={5} xs={5} md={5} sm={12} xs={12}
                                                      className="cust-details position">
                                                    <Box className="per-dinner adsss">
                                                        <Box className="event-div">
                                                            <img src={privateEventData?.cover_picture} alt="" className="per-dinner-img"/>
                                                            <Box sx={{marginLeft: '12px'}}>
                                                                <Typography className="event-title">{privateEventData?.title}</Typography>
                                                                <Typography className="event-subtitle">Curated by <a
                                                                    href="#"
                                                                    className="event-link">{privateEventData?.user?.name}</a></Typography>
                                                                <Typography className='rating-star'>
                                                                    <StarIcon
                                                                        sx={{
                                                                            color: '#C6A87D',
                                                                            height: '20px',
                                                                            width: '20px'
                                                                        }}/> 4.7
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                        <Box className="experience-breakup">
                                                            <Box className="ex-details">
                                                                <Typography className="ex-heading">
                                                                    Breakup</Typography>
                                                                {/*<Typography className="ex-detail">This is an estimate,*/}
                                                                {/*    final price*/}
                                                                {/*    will be <br/>communicated on*/}
                                                                {/*    call*/}
                                                                {/*</Typography>*/}
                                                                <ExpandMoreIcon className="ex-icon"/>
                                                            </Box>
                                                            {
                                                                !_.isEmpty(customerDetailsPaymentCalculation) &&
                                                                <Box className="table table-borderless">
                                                                    <Box className="table-box">
                                                                        <Typography
                                                                            className="table-details">Experience*</Typography>
                                                                        <Typography
                                                                            className="table-details">{new Intl.NumberFormat('en-IN', {
                                                                            style: 'currency',
                                                                            currency: 'INR'
                                                                        }).format(customerDetailsPaymentCalculation?.experience)}</Typography>
                                                                    </Box>
                                                                    <Box className="table-box">
                                                                        <Typography
                                                                            className="table-details">Service
                                                                            Staff**</Typography>
                                                                        <Typography
                                                                            className="table-details">{new Intl.NumberFormat('en-IN', {
                                                                            style: 'currency',
                                                                            currency: 'INR'
                                                                        }).format(customerDetailsPaymentCalculation?.service_staff)}</Typography>
                                                                    </Box>
                                                                    <Box className="table-box border table-details-pt">
                                                                        <Typography
                                                                            className="table-details">Sub
                                                                            total</Typography>
                                                                        <Typography
                                                                            className="table-details">{new Intl.NumberFormat('en-IN', {
                                                                            style: 'currency',
                                                                            currency: 'INR'
                                                                        }).format(customerDetailsPaymentCalculation?.sub_total)}</Typography>
                                                                    </Box>
                                                                    <Box className="table-box table-details-pt">
                                                                        <Typography className="table-details">GST
                                                                            @5%</Typography>
                                                                        <Typography
                                                                            className="table-details">{new Intl.NumberFormat('en-IN', {
                                                                            style: 'currency',
                                                                            currency: 'INR'
                                                                        }).format(customerDetailsPaymentCalculation?.GST)}</Typography>
                                                                    </Box>
                                                                    <Box className="table-box">
                                                                        <Typography className="table-details">Service
                                                                            Charges @10%</Typography>
                                                                        <Typography
                                                                            className="table-details">{new Intl.NumberFormat('en-IN', {
                                                                            style: 'currency',
                                                                            currency: 'INR'
                                                                        }).format(customerDetailsPaymentCalculation?.service_charges)}</Typography>
                                                                    </Box>
                                                                    <Box className="table-box border">
                                                                        <Typography
                                                                            className="grand-total">Grand
                                                                            Total</Typography>
                                                                        <Typography
                                                                            className="grand-total">{new Intl.NumberFormat('en-IN', {
                                                                            style: 'currency',
                                                                            currency: 'INR'
                                                                        }).format(customerDetailsPaymentCalculation?.total)}</Typography>
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
                                                              {values?.contactNumber && values?.contactNumber!=='' ? (
                                                                <button type="submit" className="submit-req"
                                                                onClick={() => {
                                                                    handleOpenOtp(values?.contactNumber, values);
                                                                }}>Next
                                                        </button>
                                                              ) : (
                                                                <button type="submit" className="submit-req-disabled" disabled>Next
                                                                </button>
                                                              )}
                                                                
                                                            </Box>
                                                            <Typography className="contact-text">Our team will contact
                                                                you regarding
                                                                your protein and allergeen
                                                                Information after booking is confirmed</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Form>
                                    )}
                                </Formik>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                { open && <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                    sx={{overflowX: "scroll"}}
                >
                    <Box sx={styleModel1}>
                        <Box className="modal-content">
                            <Box className="modal-header">
                                <Box sx={{display: "flex", alignItems: "center"}}>
                                    <ArrowBackIcon className="arrow-left"/>
                                    <Typography id="exampleModalLabel" className="modal-title">
                                        Address
                                    </Typography>
                                </Box>
                                <Box>
                                    <button
                                        type="button"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        className="btn-primary"
                                        onClick={handleClose}
                                    >
                                        <CloseIcon/>
                                    </button>
                                </Box>
                            </Box>
                            <Box className="modal-body">
                                <Box className="container-fluid">
                                    <form action className="needs-validation">
                                        <Box className="row">
                                            <Box className="col-lg-12">
                                                <Box className="map-box">
                                                    <MapLoader setNewAddress={setNewAddress} setOpen={setOpen}
                                                              newAddress={formAddress && formAddress}
                                                               googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`}
                                                               loadingElement={<div style={{height: `100%`}}/>}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </form>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Modal>}
                {
                    openOtp && <OtpVerificationModal openOtp={openOtp}
                                                     handleCloseOtp={handleCloseOtp}
                                                     contactNumber={contactNumber}
                    />
                }
            </BoxWrapper>
        </React.Fragment>
    )
}
export default CustomerDetails;