import { styled, Box, Grid, Typography, Select, MenuItem,Stack,Modal,TextField } from "@mui/material";
import React from "react";
import { Formik,Form,ErrorMessage,Field } from "formik";
import * as Yup from 'yup';
import Navbar from "../../components/NavbarComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../../assets/styles/fontStyle.css";
import sGallery from "../../assets/images/sc-gallery.png";
import people from "../../assets/images/people.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from '@mui/icons-material/Info';
import gUser from '../../assets/images/user.png';
import CloseIcon from '@mui/icons-material/Close';
import SupperClubTreatyComponent from '../../components/SupperClubTreatyComponent';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import contact from '../../assets/images/contact-form.png';
import {navigate} from "gatsby";
import InputAdornment from "@mui/material/InputAdornment";


const PersonalDetails = () => {
    const handleClick = () => {
        navigate('/contact-permission');
    }
    const newPage = () =>{
        navigate('/personal-details1')
    }
    const afterClick = () => {
        const newParam = 'newParamValue'
        navigate(`/personal-details/?myParam=${newParam}`);
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const validationSchema = Yup.object().shape({
        number: Yup.string()
          .required('Number is required'),
        name: Yup.string()
          .required('Name is required'),
        flatNumber: Yup.string()
          .required('Flat number is required'),
        address: Yup.string()
          .required('Address is required'),
        pincode: Yup.string()
            .required('Pincode is required')
    });
    //   const initialValues = {
    //     number:'9876543210',
    //     name:'Teqzo International',
    //     flatNumber:'111',
    //     address:'Manchester',
    //     pincode:'400022'
    //   };

    const MainBox = styled(Box)({
        padding: "80px 120px",
        marginTop: "40px",
        background: "#dcd7cb",
        ".book-trad": {
            display: "flex",
            placeItems: "center",
            marginBottom: "40px",
            paddingLeft: "0px !important",
        },
        ".addons-title": {
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "39px",
            color: "#080B0E",
            marginBottom: "0px",
            marginLeft: "16px",
        },
        ".arrow-left": {
            color: "#080B0E",
            // fontSize: '20px',
        },
        ".dinner-box": {
            paddingLeft:'20px',
            position: "relative",
            // flex: "0 0 auto",
            // width: "41.66666667%",
        },
        ".per-dinner": {
            background: "#FBFBFB",
            padding: "0px 20px 40px",
            boxShadow: "0px 20px 24px rgb(0 0 0 / 6%)",
            position: "sticky",
            top: "100px",
        },
        ".event-div": {
            display: "flex",
            placeItems:'center'
        },
        ".per-dinner-img": {
            width: "116px",
            height: "116px",
            objectFit: "cover",
        },
        ".event-title": {
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            fontWeight: '700',
            fontSize: "20px",
            lineHeight: "25px",
            letterSpacing: "0.06em",
            color: "#101418",
            marginBottom: "8px",
        },
        ".event-subtitle": {
            fontFamily: "Proxima Nova",
            fontStyle: "normal",
            // fontWeight: '400',
            fontSize: "12px",
            lineHeight: "15px",
            letterSpacing: "0.06em",
            color: "#101418",
            marginBottom: "11px",
        },
        ".event-link": {
            fontFamily: "Proxima Nova",
            fontStyle: "normal",
            fontWeight: '700',
            fontSize: "16px",
            lineHeight: "19px",
            textDecoration: "underline",
            color: "#101418 !important",
        },
        ".experience-breakup": {
            border: "0.5px solid #101418",
            padding: "16px 16px 0px",
            marginTop: "30px",
        },
        ".ex-details": {
            position: "relative",
        },
        ".ex-heading": {
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "25px",
            letterSpacing: "0.06em",
            color: "#101418",
            marginBottom: "10px",
        },
        ".ex-detail": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "17px",
            color: "#101418",
            marginBottom: "0px",
        },
        ".ex-icon": {
            position: "absolute",
            right: "0px",
            top: "0px",
            fontSize: "30px",
            color: "#101418",
            " -webkit-text-stroke": "1px",
        },
        ".submit-req": {
            background: "#080B0E",
            color: "#C6A87D",
            fontFamily: "ProximaNovaA-Regular",
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: 600,
            border: "0px",
            marginBottom: "30px",
            marginTop: "30px",
            width: "100%",
            cursor: "pointer",
            padding: "18px 10px",
        },
        ".rating-star": {
            fontFamily: 'ProximaNovaA-Regular',
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#101418",
        },
        ".table": {
            marginTop: "20px",
            marginBottom: "0px",
        },
        ".table-box": {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
        },
        ".table-details": {
            fontFamily: "Proxima Nova",
            fontStyle: "normal",
            // fontWeight: '300',
            fontSize: "16px",
            lineHeight: "19px",
            color: "#101418",
            padding: "0px 0px 16px",
        },
        ".grand-total": {
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "24px",
            color: "#101418",
            padding: "22px 0px",
        },
        ".border": {
            borderTop: "1px solid #080B0E",
        },
        ".tax1": {
            paddingTop: "20px",
        },
        ".contact-text": {
            fontFamily: "Proxima Nova",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "14px",
            lineHeight: "17px",
            textAlign: "center",
            color: "#080B0E",
        },
        ".main-person-box": {
            display: "flex",
            flexWrap: "wrap",
        },
        ".container": {
            width: "100%",
            overflow: "hidden"
        },

        ".partner": {
            float: "left",
            width: "58.333%",
            background: "#FBFBFB",
            border: "1px solid #FBFBFB",
            padding: "40px 20px",
        },
        '.form-field':{
            // paddingLeft:'0.5rem',
            // paddingRight:'0.5rem',
            marginBottom: '40px',
            position: 'relative'
        },
        '.form-label':{
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
            marginBottom: '16px',
        },
        ".form-control": {
            paddingLeft: "10px",
            flex: "1",
            outline:'none',
            backgroundColor: "transparent",
            border: "0px",
            borderBottom: "0.25px solid #080B0E",
            borderRadius: "0px",
            // paddingLeft: "0px",
            paddingRight: "0px",
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
            display: "block",
            width: "99%",
            padding: "20px 0.75rem 0.375rem 0px",
            transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        },
        ".form-control-drop": {
            paddingLeft: "10px",
            flex: "1",
            outline:'none',
            backgroundColor: "transparent",
            border: "0px",
            borderBottom: "0.25px solid #080B0E",
            borderRadius: "0px",
            // paddingLeft: "0px",
            paddingRight: "0px",
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
            display: "block",
            width: "100%",
            padding: "0px 0.75rem 0.375rem 0px",
            transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        },
        '.your-box':{
            display:'flex',
            justifyContent:'space-between'
        },
        '.your-food':{
            marginBottom:'40px'
        },
        '.view-text':{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '19px',
            textDecoration: 'underline',
            color: '#080B0E',
        },
        '.view-text:hover':{
            color:'#C6A87D'
        },
        '.who-join':{
            backgroundColor:'#101418',
            padding:'20px 30px'
        },
        '.who-heading':{
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#FBFBFB',
            marginBottom: '8px',
        },
        '.who-heading-option':{
            fontFamily: 'Proxima Nova Alt',
            fontWeight: 300
        },
        '.who-sub-heading':{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '14px',
            lineHeight: '24px',
            color: '#FBFBFB',
            marginBottom:'1rem'
        },
        '.guest-details':{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '8px',
            gap: '8px',
            background: '#080B0E',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.08)',
            position: 'relative',
        },
        '.user-logo':{
            width: '18px',
            height: '18px',
            objectFit: 'contain',
        },
        '.user-name':{
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#FBFBFB',
            marginBottom: '0px',
        },
        '.line':{
            color:'#FBFBFB',
            fontSize:'25px',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: 300,
        },
        '.guest-mail':{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#FBFBFB',
            marginBottom: '0px',
            position: 'relative',
        },
        '.guest-close':{
            color: '#FBFBFB',
            fontSize: '18px',
            position: 'absolute',
            right: '8px',
        },
        '.guest-number':{
            display:'flex',
            alignItems:'center'
        },
        '.guest-remain':{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '12px',
            lineHeight: '15px',
            color: '#FBFBFB',
            marginBottom: '0px',
            marginTop: '20px',
        },
        '.add-guest':{
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#FBFBFB',
            textDecoration: 'none',
            border: '1px solid #C6A87D',
            padding: '12px 20px',
            marginRight: '0',
            display: 'block',
            width: 'max-content',
            marginLeft: 'auto',
            marginTop: '20px',
            background:'transparent'
        },
        '.add-guest:hover':{
            color:'#C6A87D'
        },
        '.main-title':{
            fontSize:'14px !important',
            lineHeight:'17px !important'
        },
        '.treaty-box':{
            flexDirection:'row !important'
        },
        ".sub-div":{
            padding:'20px 30px !important'
        },
        ".date-stack": {
            color: "#FBFBFB",
            background: "#101418",
            padding: "16px 0px",
            placeContent: "center",
            display:'flex',
            placeItems:'center',
            margin:'0px -20px 20px',
            flexDirection:'row'
        },
        ".date-description": {
            fontSize: "12px",
            fontWeight: 300,
            fontFamily: 'Proxima Nova Alt',
            lineHeight: "15px",
            letterSpacing:'0.06em',
            textAlign:'center',
            padding:'0px 6px'
        },
        ".line": {
            margin: "0px",
            fontSize: "15px",
        },
        '.text-box-1':{
            background: 'rgba(189, 189, 189, 0.2)',
            padding: '16px',
            border: '0px',
            width:'-webkit-fill-available',
            maxWidth:'-webkit-fill-available',
            minWidth:'-webkit-fill-available',
            maxHeight:'110px',
            minHeight:'110px'
        },
        '.text-box':{
            height: '110px',
            background: 'rgba(189, 189, 189, 0.2)',
            padding: '16px',
            border: '0px',
            width:'-webkit-fill-available',
            maxWidth:'-webkit-fill-available',
            minWidth:'-webkit-fill-available'
        },
        '.rating-people':{
            width:'24px',
            height:'24px',
            marginRight:'8px'
        },
        '.css-1x51dt5-MuiInputBase-input-MuiInput-input':{
            padding:'0px !important'
        },
        '.contact-down':{
            fontSize:'15px',
            paddingBottom:'9px'
        },
        "@media (min-width: 1px) and (max-width:768px)": {
            '.dinner-box':{
                paddingLeft:'0px'
            }
        }
    });
    const style= {
        '.modal-div':{
            display:'block',
            zIndex:'1055',
            width:'100%',
            height:'100%',
            position:'fixed',
            top:'0px',
            left:'0px',
            overflowX:'hidden',
            overflowY:'auto',
            outline:'0',
        },
        '.modal-content':{
            position:'relative',
            display:'flex',
            flexDirection:'column',
            width:'100%',
            backgroundColor: '#DCD7CB',
            boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.16)',
            padding: '40px 30px 20px',
            borderRadius: '0px'
        },
        '.modal-dialog':{
            width:'800px',
            alignItems:'center',
            display:'flex',
            position:'relative',
            marginLeft:'auto',
            marginRight:'auto',
            marginTop:'4.25em'
        },
        '.modal-header':{
            display:'flex',
            padding: '0px',
            marginBottom: '30px',
            borderBottom: 'none',
            position:'relative',
            justifyContent: 'flex-start',
            flexShrink:'0',
            alignItems:'center'
        },
        '.form-arrow':{
            fontSize: '20px',
            marginRight: '16px',
        },
        '.modal-title':{
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "24px",
        },
        '.close':{
            position:'absolute',
            padding:' 0px',
            border:' 0px',
            background: 'transparent',
            right:'0px'
        },
        '.close-icon':{
            fontSize:'28px',
            marginRight:'0px',
        },
        '.modal-body':{
            padding:'0px',
            position:'relative',
            flex:'1 1 auto'
        },
        '.modal-child':{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
        },
        '.initial-box':{
            borderRight:'10px solid #DCD7CB',
            padding:'20px 16px',
            background:'#FBFBFB',
        },
        '.second-box':{
            borderLeft:'10px solid #DCD7CB',
            padding:'20px 16px',
            background:'#FBFBFB'
        },
        '.modal-people':{
            fontSize:'1rem',
            lineHeight:'1.2',
            fontWeight:'500',
            marginBottom:'0.5rem',
            display:'flex',
            fontFamily:'ProximaNovaA-Regular',
            alignItems:'center'
        },
        '.modal-people-details':{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#080B0E',
            marginBottom: '40px'
        },
        '.add-btn':{
            padding: '12px 8px',
            border: '1px solid #C6A87D',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#080B0E',
            background: 'transparent',
            display: 'flex',
            placeContent: 'center',
            placeItems:'center'
        },
        '.add-icon':{
            marginRight: '10px',
            fontSize: '22px'
        },
        '.recipient':{
            padding:'0px',
            display:'flex',
            flexWrap:'wrap',
            background:'#FBFBFB',
            justifyContent:'center',
            flexDirection:'column'
        },
        '.guest-1':{
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '25px',
            color: '#080B0E',
            textAlign: 'center',
            marginBottom: '38px'
        },
        '.form-field':{
            // paddingLeft:'0.5rem',
            // paddingRight:'0.5rem',
            marginBottom: '28px',
            position: 'relative'
        },
        '.form-label':{
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
            marginBottom: '16px',
        },
        ".form-control": {
            paddingLeft: "10px",
            flex: "1",
            outline:'none',
            backgroundColor: "transparent",
            border: "0px",
            borderBottom: "0.25px solid #080B0E",
            borderRadius: "0px",
            // paddingLeft: "0px",
            paddingRight: "0px",
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
            display: "block",
            width: "100%",
            padding: "0.75rem 0px 0.375rem 0px",
            transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        },
        ".form-control-drop": {
            paddingLeft: "10px",
            flex: "1",
            outline:'none',
            backgroundColor: "transparent",
            border: "0px",
            borderBottom: "0.25px solid #080B0E",
            borderRadius: "0px",
            // paddingLeft: "0px",
            paddingRight: "0px",
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
            display: "block",
            width: "100%",
            padding: "0px 0.75rem 0.375rem 0px",
            transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        },
        '.your-box':{
            display:'flex',
            justifyContent:'space-between'
        },
        '.your-food':{
            marginBottom:'28px'
        },
        '.modal-add':{
            width: '100%',
            background:' #080B0E',
            border: '0px',
            borderRadius: '0px',
            padding: '19px 10px',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
        },
        '.view-break':{
            marginTop:'40px'
        },
        '.view-text-box':{
            display:'flex',
            padding:'0px',
            placeItems:'center'
        },
        '.rate-text':{
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '39px',
            color: '#080B0E',
        },
        '.per-text':{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: 250,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
            marginLeft: '8px'
        },
        '.done-btn':{
            width: 'max-content',
            marginLeft: 'auto',
            border: '0px',
            background: '#080B0E',
            color:' #FBFBFB',
            padding: '14.5px 30px',
            marginTop:' 0px',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '19px'
        },
        '.contact':{
            position:'absolute',
            bottom:'0px',
            right:'0px'
        },
        '.css-1x51dt5-MuiInputBase-input-MuiInput-input':{
            padding:'0px !important'
        },
        '.contact-down':{
            fontSize:'15px',
            paddingBottom:'9px'
        },
        "@media (min-width: 1px) and (max-width:768px)": {
            '.modal-child':{
                display:'flex',
                flexDirection:'column',
            },
            '.modal-dialog':{
                width:'500px'
            },
            '.initial-box':{
                borderRight:'0px'
            },
            '.second-box':{
                borderLeft:'0px'
            }
        }
    }
    return (
        <React.Fragment>
            <MainBox>
                <Navbar heading="Privee" />
                <div className="row supper-chef-details">
                    <div className="book-trad">
                        <ArrowBackIcon className="arrow-left" />
                        <div className="addons-title">Personal Details</div>
                    </div>
                </div>
                <Grid container>
                    <Grid
                        xl={7}
                        lg={7}
                        xs={7}
                        md={7}
                        sm={12}
                        // xs={12}
                        className="partner"
                    >
                        <Formik
                            initialValues={{
                                city: 'Mumbai',
                            }}
                            //   initialValues={initialValues}
                            validationSchema={validationSchema}
                            //   onSubmit={handleSubmit}
                        >
                            {/* {({ isSubmitting }) => ( */}
                            {({values, handleChange}) => (
                                <Form>
                                    <Box  className="row">
                                        <Box className='form-field'>
                                            <label className="form-label" htmlFor="number">Your Name</label>
                                            <Field className="form-control" type="text" id="number" name="number" placeholder='Enter your full name'/>
                                            {/* <ErrorMessage name="number" /> */}
                                        </Box>
                                        <Box className='form-field'>
                                            <label className="form-label" htmlFor="name">Email Address</label>
                                            <Field className="form-control" type="text" id="name" name="name" placeholder="kachwallasana@gmail.con" />
                                            {/* <ErrorMessage name="name" /> */}
                                        </Box>
                                        <Box className='form-field'>
                                            <label className="form-label" htmlFor="flatNumber">Contact Number</label>
                                            <TextField variant="standard" className="form-control" type="text" id="flatNumber" name="flatNumber" placeholder='10 digit number'  InputProps={{
                                                disableUnderline: true,

                                                startAdornment: <InputAdornment
                                                    position="start">+91<KeyboardArrowDownIcon className="contact-down"/></InputAdornment>
                                            }}/>
                                            {/* <ErrorMessage name="flatNumber" /> */}
                                        </Box>
                                        <Box className="your-food">
                                            <div className="your-box">
                                                <label className="form-label" htmlFor="pincode">Your Food Preference</label>
                                                <div className="view-text">View Menu</div>
                                            </div>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="city"
                                                value={values.city}
                                                onChange={handleChange}
                                                defaultValue={values.city}
                                                className="form-control-drop"
                                                sx={{
                                                    fontSize: "20px",
                                                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                        border: "none",
                                                    },
                                                    ".MuiSelect-select": {
                                                        padding: "0px 5px",
                                                        fontFamily: 'Proxima Nova Alt',
                                                        fontStyle: 'normal',
                                                        fontWeight: 300,
                                                        fontSize: '16px',
                                                        lineHeight: '19px',
                                                        color: '#222222',
                                                        height:'20px !important',
                                                        minHeight:'0px !important'
                                                    },
                                                }}
                                                MenuProps={{
                                                    PaperProps: {
                                                        sx: {
                                                            backgroundColor: "#DCD7CB !important",
                                                            li: {
                                                                fontFamily: "ProximaNovaA-Regular",
                                                                borderBottom: "1px solid black",
                                                                fontSize: "20px",
                                                                fontWeight: "100",
                                                                padding: "6px 0px",
                                                                justifyContent: "start",
                                                            },
                                                            ul: {
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                padding: "16px",
                                                            },
                                                            "li:hover": {
                                                                color: "#C6A87D!important",
                                                                backgroundColor: "unset !important",
                                                            },
                                                            "li:last-child": {
                                                                borderBottom: "none",
                                                            },
                                                            "&& .Mui-selected": {
                                                                backgroundColor: "unset !important",

                                                            },
                                                            ".MuiSelect-select": {
                                                                padding: "5px !important",
                                                                fontSize: "17px",
                                                            },
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
                                        <Box className='form-field'>
                                            <div style={{display:'flex'}}>
                                                <label className="form-label" htmlFor="comment">Are you allergic to something</label>
                                                <InfoIcon sx={{fontSize:'20px',paddingLeft:'5px'}}/>
                                            </div>
                                            <textarea className="form-control text-box" type="text-area" id="comment" name="comment" placeholder="Specific ingredients eg nuts, milk, soy...  "/>
                                        </Box>
                                        <Box className='form-field'>
                                            <Box className='who-join'>
                                                <div className="who-heading">Who will be joining you? <span className="who-heading-option">(optional)</span></div>
                                                <div className="who-sub-heading">Chefs à Porter will contact your guests to collect allergen details directly.</div>
                                                <div className="guest-details">
                                                    <img className="user-logo" src={gUser}/>
                                                    <div className="user-name">Mayank Jain</div>
                                                    <span className="line">|</span>
                                                    <div className="guest-mail">mayankjain@gmail.com</div>
                                                    <CloseIcon className="guest-close"/>
                                                </div>
                                                <div className="guest-number">
                                                    <div className="guest-remain">2 Guests Remaining</div>
                                                    <button type="button" onClick={handleOpen} className="add-guest" data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                    >Add Guest Details</button>
                                                </div>
                                            </Box>
                                        </Box>
                                        <Box className='form-field'>
                                            <div style={{display:'flex'}}>
                                                <label className="form-label" htmlFor="comment-box">Additional Requests</label>
                                            </div>
                                            <textarea maxLength='40' className="form-control text-box-1" type="text-area" id="comment" name="comment" placeholder="Do you have any special requests or concerns ?"/>
                                        </Box>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                        <SupperClubTreatyComponent background={true} subTitle='Save 15% on all experiences by becoming a patron'/>
                    </Grid>
                    <Grid
                        xl={5}
                        lg={5}
                        xs={5}
                        md={5}
                        sm={12}
                        // xs={12}
                        className="cust-details dinner-box"
                    >
                        <Box className="per-dinner adsss">
                            <Box>
                                <Stack
                                    className="date-stack"
                                >
                                    <Typography className="date-description">April 9</Typography>
                                    <span className="line">|</span>
                                    <Typography className="date-description">
                                        {" "}
                                        7:30 PM - 10 PM
                                    </Typography>
                                    <span className="line">|</span>
                                    <Typography className="date-description">
                                        Blue Cafe, Kamanahalli
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box className="event-div">
                                <img src={sGallery} alt="" className="per-dinner-img" />
                                <Box sx={{ marginLeft: "12px" }}>
                                    <Typography className="event-title">
                                        The Big Fat Parsi Blowout
                                    </Typography>
                                    <Typography className="event-subtitle">
                                        Curated by{" "}
                                        <a href="#" className="event-link">
                                            Chef Mako
                                        </a>
                                    </Typography>
                                    <Typography className="rating-star">
                                        <img className="rating-people" src={people} />
                                        <Typography className="rating-star">4 Seats</Typography>
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="experience-breakup">
                                <Box className="ex-details">
                                    <Typography className="ex-heading">
                                        Payment Summary
                                    </Typography>
                                    <ExpandMoreIcon className="ex-icon" />
                                </Box>
                                <Box className="table table-borderless">
                                    <Box className="table-box">
                                        <Typography className="table-details">Food</Typography>
                                        <Typography className="table-details">₹ 2,500</Typography>
                                    </Box>
                                    <Box className="table-box">
                                        <Typography className="table-details">
                                            Service Charge
                                        </Typography>
                                        <Typography className="table-details">₹ 2,500</Typography>
                                    </Box>
                                    <Box className="table-box">
                                        <Typography className="table-details">Tax</Typography>
                                        <Typography className="table-details">₹ 2,500</Typography>
                                    </Box>
                                    <Box className="table-box border">
                                        <Typography className=" grand-total table-details">
                                            Grand Total
                                        </Typography>
                                        <Typography className="table-details grand-total">
                                            ₹ 2,5000
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="row viewbreak">
                                <Box>
                                    <button onClick={newPage} type="submit" className="submit-req">
                                        Next
                                    </button>
                                </Box>
                                <Typography className="contact-text">
                                    Our team will contact you regarding your protein and allergeen
                                    Information after booking is confirmed
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Modal  keepMounted
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description">
                    <Box sx={style}>
                        <Formik
                            initialValues={{
                                city: 'Mumbai',
                            }}
                            validationSchema={validationSchema}
                        >
                            {({values, handleChange}) => (
                                <Form>
                                    <div className="modal-div">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <ArrowBackIcon className="form-arrow"/>
                                                    <div className="modal-title" id="exampleModalLabel">
                                                        Add Guests</div>
                                                    <button type="button" data-bs-dismiss="modal" aria-label="Close" className="close"
                                                            onClick={handleClose}>
                                                        <CloseIcon className="close-icon"/>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="modal-child">
                                                        <div className="initial-box">
                                                            <div>
                                                                <div className="modal-people">
                                                                    <img src={people} />1/3 Guest details entered
                                                                </div>
                                                                <div className="modal-people-details">
                                                                    Chefs à Porter will contact your guests to collect allergen details directly. <br/> This experience is not suitable for children
                                                                </div>
                                                                <button className="add-btn"><AddIcon className="add-icon"/>Add Guest</button>
                                                            </div>
                                                        </div>
                                                        <div className="second-box">
                                                            <div className="recipient">
                                                                <div className="guest-1">Guest #1</div>
                                                                <Box  className="row">
                                                                    <Box className='form-field'>
                                                                        <label className="form-label" htmlFor="number">Your Name</label>
                                                                        <Field className="form-control" type="text" id="number" name="number" placeholder='Guest Name'/>
                                                                        {/* <ErrorMessage name="number" /> */}
                                                                    </Box>
                                                                    <Box className='form-field'>
                                                                        <label className="form-label" htmlFor="name">Email Address</label>
                                                                        <Field className="form-control" type="text" id="name" name="name" placeholder="email id" />
                                                                        {/* <ErrorMessage name="name" /> */}
                                                                    </Box>
                                                                    <Box className='form-field'>
                                                                        <label className="form-label" htmlFor="flatNumber">Contact Number</label>
                                                                        <img className="contact" onClick={handleClick} src={contact}/>
                                                                        <TextField variant="standard" className="form-control" type="text" id="flatNumber" name="flatNumber" placeholder='10 digit number' InputProps={{
                                                                            disableUnderline: true,
                                                                            padding:'0px',
                                                                            startAdornment: <InputAdornment
                                                                                position="start">+91 <KeyboardArrowDownIcon className="contact-down"/></InputAdornment>
                                                                        }}/>
                                                                        {/* <ErrorMessage name="flatNumber" /> */}
                                                                    </Box>
                                                                    <Box className="your-food">
                                                                        <div className="your-box">
                                                                            <label className="form-label" htmlFor="pincode">Your Food Preference</label>
                                                                        </div>
                                                                        <Select
                                                                            labelId="demo-simple-select-label"
                                                                            id="demo-simple-select"
                                                                            name="city"
                                                                            value={values.city}
                                                                            onChange={handleChange}
                                                                            defaultValue={values.city}
                                                                            className="form-control-drop"
                                                                            sx={{
                                                                                fontSize: "20px",
                                                                                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                                                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                                                    border: "none",
                                                                                },
                                                                                ".MuiSelect-select": {
                                                                                    padding: "0px 5px",
                                                                                    fontFamily: 'Proxima Nova Alt',
                                                                                    fontStyle: 'normal',
                                                                                    fontWeight: 300,
                                                                                    fontSize: '16px',
                                                                                    lineHeight: '19px',
                                                                                    color: '#222222',
                                                                                    height:'20px !important',
                                                                                    minHeight:'0px !important'
                                                                                },
                                                                            }}
                                                                            MenuProps={{
                                                                                PaperProps: {
                                                                                    sx: {
                                                                                        backgroundColor: "#DCD7CB !important",
                                                                                        li: {
                                                                                            fontFamily: "ProximaNovaA-Regular",
                                                                                            borderBottom: "1px solid black",
                                                                                            fontSize: "20px",
                                                                                            fontWeight: "100",
                                                                                            padding: "6px 0px",
                                                                                            justifyContent: "start",
                                                                                        },
                                                                                        ul: {
                                                                                            display: "flex",
                                                                                            flexDirection: "column",
                                                                                            padding: "16px",
                                                                                        },
                                                                                        "li:hover": {
                                                                                            color: "#C6A87D!important",
                                                                                            backgroundColor: "unset !important",
                                                                                        },
                                                                                        "li:last-child": {
                                                                                            borderBottom: "none",
                                                                                        },
                                                                                        "&& .Mui-selected": {
                                                                                            backgroundColor: "unset !important",

                                                                                        },
                                                                                        ".MuiSelect-select": {
                                                                                            padding: "5px !important",
                                                                                            fontSize: "17px",
                                                                                        },
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
                                                                    <button onClick={afterClick} className="modal-add">Add</button>
                                                                </Box>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="view-break">
                                                    <div className="view-text-box">
                                                        <div className="rate-text">₹ 2,500<span className="per-text">Per dinner</span></div>
                                                        <button type="submit" onClick={afterClick} className="done-btn">Done</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Box>

                </Modal>
            </MainBox>
        </React.Fragment>
    );
};
export default PersonalDetails;