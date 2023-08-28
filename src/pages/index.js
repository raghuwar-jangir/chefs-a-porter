import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Grid, ImageList, ImageListItem, List, ListItemIcon, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import PriveeMain from '../components/PriveeMain';
import RatingCarousel from '../components/RatingCarousel';
import Footer from '../components/Footer';
import MainFoodDetailng from '../components/MainFoodDetailng';
import NeedHelp from '../components/NeedHelp';
import Navbar from '../components/NavbarComponent';
import { Link, navigate } from 'gatsby';
import LunchWithFork from '../assets/images/lunch_with_fork.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Treaty from '../components/Treaty';
import gallery1 from '../assets/images/gallery1.png';
import gallery2 from '../assets/images/gallery2.png';
import gallery3 from '../assets/images/gallery3.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FooterEnd from '../components/FooterEndSection';
import DiningPage from '../components/DiningPage';
import CorporateBooking from '../components/CorporateBooking';
import PriveeCarousel from '../components/PriveeCarousel';
import TemptedYet from '../components/TemptedYet';
import { Form, Formik } from 'formik';
import moment from 'moment/moment';
import * as _ from 'lodash';
import { DatePickerInput } from 'rc-datepicker';
import ClubSection from '../components/ClubSection';
import DiningExperienceCarousel from '../components/DiningExperienceCarousel';
import CmsContext from '../context/CmsContext';
import UsersContext from '../context/UsersContext';
import '../assets/styles/searchBar.css';
import '../assets/styles/fontStyle.css';
import Cookies from 'js-cookie';
import { isImageOrVideo } from '../helpers';

const BoxWrapper = styled(Box)((props) => ({
  '.home-banner': {
    marginTop: '80px',
    backgroundImage: `url(${props.homebannerimage})`,
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
    marginBottom: '40px',
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
    alignItems: 'bottom',
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
    width: '100%',
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
    height: '77px',
  },
  '.form-control': {
    backgroundColor: 'transparent',
    border: '0px',
    borderRadius: '0px',
    paddingLeft: '0px',
    paddingRight: '0px',
    fontFamily: 'ProximaNovaA-Regular',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#FBFBFB',
    width: '100%',
  },
  '.label': {
    fontFamily: 'Proxima Nova Alt',
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
    fontWeight: '400',
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
    borderRadius: '0px',
  },
  '.react-datepicker-component .react-datepicker-input.has-value input': {
    color: '#FBFBFB !important',
    padding: '8px 0px',
    // top: '-5px'
  },
  '.react-datepicker-component': {
    top: '-5px',
  },
  '.react-datepicker-component .react-datepicker-input.is-open': {
    background: 'transparent',
    border: '0px',
    borderRadius: '0px',
  },
  '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
    height: '10px',
    padding: '5px !important',
  },
  '.MuiSelect-select': {
    padding: '1px !important',
  },
  '.MuiSelect-icon': {
    top: 0,
  },
  '.hot-chef-search-btn': {
    background: '#C6A87D',
    border: '0px',
    borderRadius: '0px',
    height: '75px',
    fontFamily: 'ProximaNovaA-Regular',
    fontStyle: 'normal',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#080B0E',
    display: 'block',
    padding: '16px',
    width: '148px',
    cursor: 'pointer',
  },
  '.main-container': {
    position: 'relative',
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
    color: '#080B0E',
  },
  '.main-container:hover .overlay': {
    bottom: 0,
    height: '100%',
    padding: '40px 16px',
  },
  '.main-container:hover .supper-overlay': {
    bottom: 0,
    height: '100%',
    padding: '40px 16px',
  },
  '.container': {
    // border: '1px solid red',
    justifyContent: 'center',
    padding: '80px 0px',
    backgroundColor: '#101418',
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
    background: '#101418',
    padding: '80px 0px',
  },
  '.privee-title-hover': {
    fontSize: '32px',
    textAlign: 'center',
    color: '#FBFBFB',
    paddingTop: '15px',
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
    paddingTop: '15px',
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
    marginBottom: '20px',
  },
  '.footer-text': {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: '#222222',
    padding: '18px',
  },
  '.footer-item': {
    color: '#DCD7CB',
  },
  '.MobileLightThemeIcon': {
    paddingRight: '40px',
  },
  '.css-oacx5d': {
    padding: '10px',
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
    marginBottom: '8px',
  },
  '.privee-card-details': {
    fontFamily: 'Proxima Nova Alt',
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
    fontFamily: 'ProximaNovaA-Regular',
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
    width: '66.66666667%',
  },
  '.video': {
    width: '100%',
    height: '412px',
    objectFit: 'cover',
  },
  '.row': {
    display: 'flex',
  },
  '.supper-desktop': {
    background: '#DCD7CB',
    padding: '50px 120px',
  },
  '.supper-card-title': {
    fontFamily: 'Bon Vivant',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '30px',
    letterSpacing: '0.06em',
    color: '#080B0E',
    marginBottom: '8px',
  },
  '.supper-card-details': {
    fontFamily: 'Proxima Nova Alt',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#080B0E',
    width: '80%',
    marginBottom: '20px',
  },
  '.supper-card-link': {
    background: '#080B0E',
    padding: '18px',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: '400',
    width: '70%',
    fontFamily: 'ProximaNovaA-Regular',
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
    width: '100%',
  },
  '.join-table-heading': {
    fontFamily: 'Bon Vivant',
    fontStyle: 'normal',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '25px',
    color: '#FBFBFB',
    marginBottom: '8px',
  },
  '.join-table-details': {
    fontFamily: 'Proxima Nova Alt',
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
    width: '100% !important',
  },
  '.join-table-image': {
    padding: '0px',
  },
  '.find-us': {
    display: 'flex',
  },
  '.find-us-title': {
    fontFamily: 'Proxima Nova Alt',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: '-0.01em',
    color: '#FBFBFB',
    marginRight: '10px',
    marginBottom: '0px',
    marginTop: '7px',
  },
  '.join-table-title': {
    padding: '109px 242px 0px 120px',
  },
  '.social-icon': {
    display: 'flex',
    alignItems: 'center',
    placeContent: 'flex-end',
    cursor: 'pointer',
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
    height: '36px !important',
    marginBottom: '20px',
  },
  '.btn': {
    background: '#C6A87D',
    fontSize: '14px !important',
    lineHeight: '25px',
    borderRadius: '0px',
    color: '#080B0E',
    height: '36px !important',
    width: '50px !important',
    borderColor: '#C6A87D',
    margin: '0px',
    textTransform: 'capitalize !important',
    fontStyle: 'ProximaNovaA-Regular',
  },
  '.btn:hover': { color: '#080B0E', background: '#C6A87D' },
  '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
    borderRadius: '0px',
    fontSize: '14px',
  },
  '.sign-in': {
    color: '#C6A87D !important',
    textDecoration: 'underline !important',
  },
  '.treat': {
    display: 'flex',
    justifyContent: 'center',
    background: ' #DCD7CB',
    padding: '80px 80px',
  },
  '.treaty-card': {
    display: 'flex',
    rowGap: '32px',
    justifyContent: 'center',
    margin: '40px 0',
  },
  '.treat-card': {
    flex: 1,
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
    fontWeight: '700',
  },
  '.gallery_img_box': {
    objectFit: 'cover',
  },
  '.gallery-btn': {
    fontStyle: 'normal',
    lineHeight: '24px',
    marginRight: '0px',
    border: '1px solid #222222',
    width: '100% !important',
    fontFamily: 'Proxima Nova',
    fontSize: '20px !important',
    fontWeight: '600',
    borderRadius: '0px',
    color: '#080B0E !important',
    backgroundColor: 'unset !important',
    textTransform: 'capitalize',
    height: '55px !important',
    padding: '14px !important',
  },
  '.mobileView-gallery': {
    display: 'none',
  },
  '.gallery-btn:hover': { color: '#C6A87D!important;' },

  //fresh food from
  '.fresh-blog': {
    padding: '80px 120px',
  },
  '.fresh-food-detail': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 8px 10px rgb(0 0 0 / 6%)',
    placeItems: 'center',
    alignItem: 'center',
    marginBottom: '16px',
    cursor: 'pointer',
  },
  '.fresh-food-gallery-heading': {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '30px',
    margin: '20px 0px',
  },
  '.fresh-food-img': {
    width: '250px',
    height: '160px',
    objectFit: 'cover',
  },
  '.fresh-food-title': {
    fontFamily: 'ProximaNovaA-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '150%',
    color: '#222222',
    display: 'block',
    paddingBottom: '8px',
    width: '100%',
  },
  '.fresh-food-sub-details': {
    fontFamily: 'Proxima Nova Alt',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#222222',
    display: 'block',
    paddingBottom: '8px',
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
    alignItems: 'center',
  },
  '.up-super-club': {
    padding: '80px 120px',
    background: '#DCD7CB',
  },

  // !media query for mobile device demo component(Privee and supperClub)

  '@media(min-width: 1px) and (max-width: 431px)': {
    '.img-box': {
      padding: '40px 0px',
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
      padding: '40px 16px',
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
      width: '100%',
    },
    '.book-btn': {
      fontSize: '12px',
      fontWeight: 300,
      padding: '5px',
      marginBottom: '20px',
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
      width: '100%',
    },
    '.view-btn': {
      fontSize: '12px',
      fontWeight: 300,
      padding: '5px',
      marginBottom: '16px',
    },
    '.treaty-card': {
      display: 'block',
    },
    '.treat': {
      padding: '0px',
    },
    '.gallery': {
      display: 'none',
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
      letterSpacing: ' 0.06em',
      fontWeight: '700',
    },
    '.fresh-blog': {
      padding: '15px',
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
      paddingBottom: '0px',
    },
    '.fresh-food-img': {
      width: '60px',
      height: '60px',
    },
    '.row': {
      display: 'block',
    },
    '.jtable-img': {
      height: '200px',
      objectFit: 'cover',
      width: '100% !important',
    },
    '.join-table-title': {
      padding: '40px',
    },
    '.privee-video': {
      width: '100%',
      height: 'auto',
    },
    '.privee-details': {
      width: '100%',
      paddingLeft: '0px',
    },
    '.privee-desktop': {
      // padding: '40px'
      display: 'none',
    },
    '.supper-details': {
      width: '100%',
      paddingLeft: '0px',
      paddingBottom: '10px',
    },
    '.supper-desktop': {
      // padding: '40px'
      display: 'none',
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
    },
  },
  // '@media(min-width: 1px) and (max-width: 431px)': {
  //   '.justify-content-center': {
  //     display: 'none !important',
  //   },
  // },
  '@media(min-width: 431px) and (max-width: 768px)': {
    '.treaty-card': {
      display: 'block',
    },
    '.treat': {
      padding: '40px 120px',
    },
    '.MuiImageList-root': {
      columnCount: '1 !important',
      width: 'auto',
    },
    '.fresh-food-img': {
      width: 'unset',
    },
    '.row': {
      display: 'block',
    },
    '.jtable-img': {
      height: '400px',
      objectFit: 'cover',
      width: '100% !important',
    },
    '.join-table-title': {
      padding: '40px',
    },
    '.privee-video': {
      width: '100%',
    },
    '.privee-details': {
      width: '100%',
      paddingLeft: '0px',
    },
    '.supper-details': {
      width: '100%',
      paddingLeft: '0px',
      paddingBottom: '10px',
    },
    '.home-banner': {
      marginTop: '55px',
    },
  },
  '@media(min-width: 700px) and (max-width: 768px)': {
    '.chef-container': {
      width: '100%',
      background: 'rgba(8, 11, 14, 0.8)',
      alignItems: 'bottom',
    },
    '.pe-fo-exp': {
      padding: '40px 10px',
      width: '750px',
    },
  },
  '@media(min-width: 769px) and (max-width: 1024px)': {
    '.treat': {
      padding: '80px',
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
      width: '100% !important',
    },
  },
  '@media(min-width: 1100px) and (max-width: 1440px)': {
    '.jtable-img': {
      height: '500px',
      objectFit: 'cover',
      width: '600px !important',
    },
    '.chef-container': {
      width: '987px',
    },
  },
  '@media(min-width: 1px) and (max-width: 768px)': {
    '.main-box': {
      display: 'none',
    },
  },
}));

const HomePage = () => {
  const { data } = useContext(CmsContext);
  const { mealData, commonCityData } = useContext(UsersContext);

  //FoodDrool
  const [imageData, setImageData] = useState([]);
  const [onData, setOnData] = useState();

  useEffect(() => {
    const date1 = new Date();
    const futureDate = date1.getDate() + 2;
    date1.setDate(futureDate);
    const defaultValue = date1.toLocaleDateString('en-CA');
    setOnData(defaultValue);
  }, [onData]);

  useEffect(() => {
    {
      !_.isEmpty(data?.home) && setImageData(data.home.food_drools.content);
    }
  }, [data?.home]);

  const valueAtIndex2 = imageData?.[1];
  imageData.splice(1, 1);
  imageData.splice(2, 0, valueAtIndex2);
  const imgData = imageData.map((item) => {
    return { image: item };
  });
  const rows = [0.9, 1.1, 2, 1.3, 0.7];
  const rowOfObjects = rows.map((item) => {
    return { rows: item };
  });
  const cols = [, , 2, ,];
  const ColsOfObjects = cols.map((item) => {
    return { cols: item };
  });
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const menuitemValue = _.range(1, 26);

  const finalImgData = imgData.map((item, i) => Object.assign({}, item, rowOfObjects[i]));

  const finalImageData = finalImgData.map((item, i) => Object.assign({}, item, ColsOfObjects[i]));
  const handleClick = () => {
    navigate('/private-viewmore');
  };
  

  return (
    <React.Fragment>
      <Navbar isIcon={false} isImage={true} />
      <BoxWrapper homebannerimage={data?.home?.header?.image || ""}>
        <React.Fragment>
          {!_.isEmpty(data?.home && mealData && commonCityData) && (
            <>
              <Box
                className="home-banner"
                sx={{ backgroundImage: `url(${data.home.header.image})` }}
              >
                <Box className="row justify-content-center">
                  <Box className="chef-container">
                    <Box className="pe-fo-exp">
                      <Typography className="hotchef-title">
                        {data.home.header.title}
                      </Typography>
                      {!_.isEmpty(commonCityData) && (
                        <Formik
                          initialValues={{
                            city: commonCityData?.[0].name,
                            date: new Date(onData),
                            time: mealData?.[0].name,
                            diners: 1,
                          }}
                          onSubmit={(values) => {
                            const experienceData = {
                              ...values,
                              // on: moment(_.get(values, 'date')).format('DD/MM/YYYY'),
                              date: moment(_.get(values, "date")).toISOString(),
                            };
                            Cookies.set(
                              "priveeData",
                              JSON.stringify(experienceData)
                            );
                          }}
                        >
                          {({
                            values,
                            handleChange,
                            handleSubmit,
                            setFieldValue,
                          }) => (
                            <Form onSubmit={handleSubmit}>
                              <Box className="form-row">
                                <Box className="form-group">
                                  <label className="label">Where</label>
                                  {!_.isEmpty(commonCityData) && (
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      name="city"
                                      value={values.city}
                                      onChange={handleChange}
                                      defaultValue={values.city}
                                      className="selectpicker my-select dropdown-toggle form-control"
                                      sx={{
                                        fontFamily: "ProximaNovaA-Regular",
                                        fontSize: "20px",
                                        ".MuiOutlinedInput-notchedOutline": {
                                          border: 0,
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                          {
                                            border: "none",
                                          },
                                        ".MuiSelect-icon": {
                                          color: "#FBFBFB",
                                        },
                                        ".MuiSelect-select": {
                                          padding: "0px 5px",
                                          fontSize: "20px",
                                          fontWeight: "400",
                                          display: "flex",
                                          fontFamily: "ProximaNovaA-Regular",
                                          flexDirection: "column",
                                        },
                                      }}
                                      MenuProps={{
                                        PaperProps: {
                                          sx: {
                                            background: "#080B0E",
                                            color: "#FBFBFB",
                                            li: {
                                              fontSize: "20px",
                                              fontWeight: "400",
                                              fontFamily:
                                                "ProximaNovaA-Regular",
                                              padding: "6px 16px",
                                            },
                                            ul: {
                                              display: "flex",
                                              flexDirection: "column",
                                            },
                                            "li:last-child": {
                                              borderBottom: "none",
                                            },
                                            "li:hover": {
                                              color: "#C6A87D!important",
                                              backgroundColor:
                                                "#DCD7CB !important",
                                            },
                                            "&& .Mui-selected": {
                                              backgroundColor:
                                                "#0000FF !important",
                                            },
                                          },
                                        },
                                      }}
                                    >
                                      {commonCityData?.map((item) => {
                                        return (
                                          <MenuItem value={item.name}>
                                            {item.name}
                                          </MenuItem>
                                        );
                                      })}
                                      {/*<MenuItem value="Mumbai">Mumbai</MenuItem>*/}
                                      {/*<MenuItem value="Delhi">Delhi</MenuItem>*/}
                                      {/*<MenuItem value="Goa">Goa</MenuItem>*/}
                                      {/*<MenuItem value="Banglore">Banglore</MenuItem>*/}
                                      {/*<MenuItem value="Hydrabad">Hydrabad</MenuItem>*/}
                                    </Select>
                                  )}
                                </Box>
                                <Box className="form-group">
                                  <label
                                    className="label"
                                    style={{ marginBottom: "1px !important" }}
                                  >
                                    On
                                  </label>
                                  <DatePickerInput
                                    name="date"
                                    value={values.date}
                                    displayFormat="ddd, DD MMM"
                                    returnFormat="ddd,DD MMM"
                                    className="form-control"
                                    onChange={(dateString) =>
                                      setFieldValue("date", dateString)
                                    }
                                    defaultValue={values.date}
                                    minDate={new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)}
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
                                      fontSize: "20px",
                                      fontFamily: "ProximaNovaA-Regular",
                                      ".MuiOutlinedInput-notchedOutline": {
                                        border: 0,
                                      },
                                      "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                        {
                                          border: "none",
                                        },
                                      ".MuiSelect-icon": {
                                        color: "#FBFBFB",
                                      },
                                      ".MuiSelect-select": {
                                        fontFamily: "ProximaNovaA-Regular",
                                        padding: "0px 5px",
                                        fontSize: "20px",
                                        fontWeight: "100",
                                      },
                                    }}
                                    MenuProps={{
                                      PaperProps: {
                                        sx: {
                                          background: "#080B0E",
                                          color: "#FBFBFB",
                                          li: {
                                            fontSize: "20px",
                                            fontFamily: "ProximaNovaA-Regular",
                                            fontWeight: "400",
                                            padding: "6px 16px",
                                          },
                                          ul: {
                                            display: "flex",
                                            flexDirection: "column",
                                          },
                                          "li:last-child": {
                                            borderBottom: "none",
                                          },
                                          "li:hover": {
                                            color: "#C6A87D!important",
                                            backgroundColor:
                                              "#DCD7CB !important",
                                          },
                                          "&& .Mui-selected": {
                                            backgroundColor:
                                              "#0000FF !important",
                                          },
                                        },
                                      },
                                    }}
                                  >
                                    {mealData?.map((item) => {
                                      return (
                                        <MenuItem value={item.name}>
                                          {item.name}
                                        </MenuItem>
                                      );
                                    })}
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
                                      fontSize: "20px",
                                      fontFamily: "ProximaNovaA-Regular",
                                      ".MuiOutlinedInput-notchedOutline": {
                                        border: 0,
                                      },
                                      "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                        {
                                          border: "none",
                                        },
                                      ".MuiSelect-icon": {
                                        color: "#FBFBFB",
                                      },
                                      ".MuiSelect-select": {
                                        fontFamily: "ProximaNovaA-Regular",
                                        padding: "0px 5px",
                                        fontSize: "20px",
                                        fontWeight: "100",
                                      },
                                    }}
                                    MenuProps={{
                                      PaperProps: {
                                        sx: {
                                          background: "#080B0E",
                                          color: "#FBFBFB",
                                          maxHeight:
                                            ITEM_HEIGHT * 4.5 +
                                            ITEM_PADDING_TOP,
                                          li: {
                                            fontSize: "20px",
                                            fontFamily: "ProximaNovaA-Regular",
                                            fontWeight: "400",
                                            padding: "6px 16px",
                                          },
                                          ul: {
                                            display: "flex",
                                            flexDirection: "column",
                                          },
                                          "li:last-child": {
                                            borderBottom: "none",
                                          },
                                          "li:hover": {
                                            color: "#C6A87D!important",
                                            backgroundColor:
                                              "#DCD7CB !important",
                                          },
                                          "&& .Mui-selected": {
                                            backgroundColor:
                                              "#0000FF !important",
                                          },
                                        },
                                      },
                                    }}
                                  >
                                    {menuitemValue.map((item, index) => (
                                      <MenuItem value={index + 1}>
                                        {item}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </Box>
                                <Box className="form-group">
                                  <Typography>
                                    <button
                                      type="submit"
                                      className="hot-chef-search-btn"
                                      onClick={handleClick}
                                    >
                                      Search
                                    </button>
                                  </Typography>
                                </Box>
                              </Box>
                            </Form>
                          )}
                        </Formik>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <ClubSection />
              <Box className="privee-desktop">
                <Box className="row">
                  <Box className="privee-video">
                    {isImageOrVideo(data.home.booking_types.privee.image) ===
                    "video" ? (
                      <video className="video" autoPlay muted loop>
                        <source
                          src={data.home.booking_types.privee.image}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img
                        src={data.home.booking_types.privee.image}
                        className="video"
                      />
                    )}
                  </Box>
                  <Box className="privee-details">
                    <Typography className="privee-card-title">
                      {data.home.booking_types.privee.title}
                    </Typography>
                    <Typography className="privee-card-details">
                      {data.home.booking_types.privee.description}
                    </Typography>
                    <Typography>
                      <Link href="/private" className="privee-card-link">
                        {data.home.booking_types.privee.button_text}
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="supper-desktop">
                <Box className="row">
                  <Box className="supper-details">
                    <Typography className="supper-card-title">
                      {data.home.booking_types.supper_club.title}
                    </Typography>
                    <Typography className="supper-card-details">
                      {data.home.booking_types.supper_club.description}
                    </Typography>
                    <Typography>
                      <Link href="/ticketed" className="supper-card-link">
                        {data.home.booking_types.supper_club.button_text}
                      </Link>
                    </Typography>
                  </Box>
                  <Box className="privee-video">
                  {isImageOrVideo(data.home.booking_types.supper_club.image) ===
                    "video" ? (
                      <video className="video" autoPlay muted loop>
                        <source
                          src={data.home.booking_types.supper_club.image}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img
                        src={data.home.booking_types.supper_club.image}
                        className="video"
                      />
                    )}
                  </Box>
                </Box>
              </Box>
              <PriveeMain />
              <Box className="home_ticketed_chef">
                <MainFoodDetailng
                  title={data.home.upcoming_supper_clubs.title}
                  description={data.home.upcoming_supper_clubs.description}
                />
              </Box>
              <PriveeCarousel />
              <RatingCarousel />
              <DiningPage title={data.home.what_we_cook.title} />
              <TestimonialCarousel />
              <Box className="gallery">
                <Box>
                  <Typography className="gallery-heading">
                    {data.home.food_drools.title}
                  </Typography>
                </Box>
                <ImageList
                  variant="masonry"
                  sx={{ width: "100%", height: "100%" }}
                  cols={1}
                  gap={20}
                  rowHeight={300}
                >
                  {console.log("finalImageData", finalImageData)}
                  {finalImageData.map((item, index) =>
                    item.image ? (
                      <ImageListItem
                        key={index}
                        cols={item.cols || 1}
                        rows={item.rows || 1}
                        style={{ height: "100%" }}
                      >
                        <img
                          src={item.image}
                          alt={item?.title || ""}
                          className="gallery_img_box"
                          loading="lazy"
                        />
                      </ImageListItem>
                    ) : null
                  )}
                </ImageList>
              </Box>
              <Box className="mobileView-gallery">
                <Box>
                  <Typography className="gallery-heading">
                    {data.home.food_drools.title}
                  </Typography>
                </Box>
                <Grid container spacing={1} sx={{ padding: "10px 12px" }}>
                  <Grid item xs={12}>
                    <img
                      src={gallery1}
                      style={{ width: "100%", height: "200px" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <img
                      src={gallery2}
                      style={{
                        width: "48%",
                        height: "200",
                        paddingRight: "5px",
                      }}
                    />
                    <img
                      src={gallery3}
                      style={{
                        width: "48%",
                        height: "200",
                        paddingLeft: "5px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} spacing={2}>
                    <Button className="gallery-btn">View Gallery</Button>
                  </Grid>
                </Grid>
              </Box>
              <Box className="treat">
                <Grid container className="treaty-card row">
                  <Grid item className="" xl={4} lg={6}>
                    <Treaty
                      treatTitle={`#${data.home.gift.gift.hashtag}`}
                      mainTitle={data.home.gift.gift.title}
                      detail={data.home.gift.gift.description}
                      link={"/gift-cards"}
                      button_text={data.home.gift.gift.button_text}
                    />
                  </Grid>
                  <Grid item className="" xl={4} lg={6}>
                    <Treaty
                      treatTitle={`#${data.home.gift.patron.hashtag}`}
                      mainTitle={data.home.gift.patron.title}
                      detail={data.home.gift.patron.description}
                      link={"/private"}
                      button_text={data.home.gift.patron.button_text}
                    />
                  </Grid>
                  <Grid item className="" xl={4} lg={6}>
                    <Treaty
                      treatTitle={`#${data.home.gift.duchchef.hashtag}`}
                      mainTitle={data.home.gift.duchchef.title}
                      detail={data.home.gift.duchchef.description}
                      link={"/become-a-patron"}
                      button_text={data.home.gift.duchchef.button_text}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box className="join-table join-table1">
                <Box className="container-fluid">
                  <Grid container className="row">
                    <Grid
                      xl={6}
                      lg={6}
                      xs={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className="join-table-image"
                    >
                      <img
                        src={LunchWithFork}
                        alt="Join The Table"
                        className="jtable-img"
                      />
                    </Grid>
                    <Grid
                      xl={6}
                      lg={6}
                      xs={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className="join-table-title"
                    >
                      <Typography className="join-table-heading">
                        Join Our Mailing List!
                      </Typography>
                      <Typography className="join-table-details">
                        Receive exclusive access to our Chefs, the latest recipes, and first dibs to our Chef's Tables.
                      </Typography>
                      <form action="" accept-charset="UTF-8" method="get">
                        <Box className="input-group">
                          <Box className="input-group">
                            <Box style={{ width: "100%", display: "flex" }}>
                              <TextField
                                className="input-field"
                                id="email-address"
                                size="small"
                                placeholder="Your email address"
                                variant="outlined"
                                InputProps={{
                                  disableUnderline: true,
                                }}
                                sx={{
                                  ".MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                    outline: "none",
                                  },
                                  ".MuiInputBase-input": {
                                    borderRadius: "0px",
                                    background: "#FBFBFB",
                                    fontFamily: "Proxima Nova Alt",
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    fontSize: "14px",
                                    lineHeight: "25px",
                                    color: "#BDBDBD",
                                    padding: "8px 14px",
                                  },
                                }}
                              />
                              <Button className="btn">Submit</Button>
                            </Box>
                          </Box>
                        </Box>
                      </form>
                      <Typography className="join-table-details">
                        By signing up, I agree to Chefs-à-Porter{" "}
                        <Link to="/cancellation-policy" className="sign-in">
                          T&C’s
                        </Link>{" "}
                        and{" "}
                        <Link to="/cancellation-policy" className="sign-in">
                          Privacy Policy
                        </Link>
                      </Typography>
                      <Box className="find-us">
                        <Typography className="find-us-title">
                          Find us on:
                        </Typography>
                        <Box className="social-icon">          
                                <a href={data.home.footer.instagram_link} target='_blank'><InstagramIcon className="icon" /></a>
                                <a href={data.home.footer.facebook_link} target='_blank'><FacebookIcon className="icon" /></a>                     
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <CorporateBooking />
              <Box className="fresh-blog">
                <Typography className="fresh-food-heading">
                  {data.home.blog.title}
                </Typography>
                {data.home.blog.content.map((item, index) => (
                  <Box className="fresh-food-detail">
                    <Box key={index} className="food-box">
                      <img src={item.image} className="fresh-food-img" />
                      <Box style={{ marginLeft: "20px" }}>
                        <Typography className="fresh-food-title">
                          {item.title}
                        </Typography>
                        <Typography className="fresh-food-sub-details">
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <KeyboardArrowRightIcon className="fresh-food-arrow" />
                    </Box>
                  </Box>
                ))}
              </Box>
              <DiningExperienceCarousel
                title="Peek into our Private Dining Experiences"
                subTitle="@Private"
              />
              <TemptedYet
                title={data.home.home_footer.moblie_title}
                buttonText={data.home.home_footer.mobile_button}
              />
              <NeedHelp
                title={data.home.footer.common_footer.details.title}
                description={data.home.footer.common_footer.details.description}
                button_call={
                  data.home.footer.common_footer.details.button1_text
                }
                button_email={
                  data.home.footer.common_footer.details.button2_text
                }
              />
              <Footer />
              <FooterEnd />
            </>
          )}
        </React.Fragment>
      </BoxWrapper>
    </React.Fragment>
  );
};
export default HomePage;
