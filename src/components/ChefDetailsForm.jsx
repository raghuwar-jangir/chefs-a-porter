import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import {
    createMuiTheme,
    MuiThemeProvider,
    withStyles
} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// import styled from "styled-components";
import * as Yup from 'yup';
import InfoIcon from '@mui/icons-material/Info';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import gCal from '../assets/images/date-gold.png';
import gInfo from '../assets/images/info.png';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Checkbox from '@mui/material/Checkbox';
import '../assets/styles/fontStyle.css';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import {navigate} from "gatsby";

const DisplayingErrorMessagesSchema = Yup.object().shape({
    yourName: Yup.string().required('Your Name Required'),
    email: Yup.string().required('Email id Required'),
    experienceDate: Yup.string().required('Experience Date Required'),
    startTime: Yup.string().required('Start Time Required'),


});
const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "8px",
                color: "#080B0E",
                backgroundColor: "#DCD7CB",
                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)',
                padding: '16px 32px',
                textAlign: 'center',
                fontFamily: 'Proxima Nova Alt',
                fontStyle:' normal',
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: '17px',
                opacity: '1',
                width:'160px',
                borderRadius:'1px'
            }
        }
    }
});
const ChefDetailsForm = (props) => {
    const tipTitle ="Private Dining usually last upto 3 hrs but can extend upto 5 hrs based on number of courses"
    const [startDate, setStartDate] = useState(new Date());
    console.log("startDate=",moment(startDate).format("dddd, MMMM DD, YYYY"));
    const [numberOfDenner, setNumberOfDenner] = useState(2)
    const [numberOfCourses, setNumberOfCourses] = useState(3)

    const handleDecrement = () => {
        if (numberOfDenner > 2) {
            setNumberOfDenner(numberOfDenner - 1);
        }
    }

    const handleIncrement = () => {
        setNumberOfDenner(numberOfDenner + 1);
    }
    const handleCoursesDecrement = () => {
        if (numberOfCourses > 3) {
            setNumberOfCourses(numberOfCourses - 1);
        }
    }

    const handleCoursesIncrement = () => {
        setNumberOfCourses(numberOfCourses + 1);
    }
        const handleClick = () => {
            navigate('/customer-details');
        }
    const BoxWrapper = styled(Box)(() => ({
        background: '#101418',
        color: '#FBFBFB',
        padding: '40px 31px',
        ".heading": {
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "25px",
            letterSpacing: "0.06em"
        },
        ".heading-details": {
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "17px",
            padding: '8px 0px 30px 0px'
        },
        ".sub-heading": {
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "19px"
        },
        ".sub-heading-details": {
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "17px",
            padding: '8px 0px 30px 0px',

        },
        ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
            paddingLeft: "10px",
            flex: "1",
            outline:'none',
            backgroundColor: "transparent",
            border: "0px",
            borderBottom: "0.25px solid #FBFBFB",
            borderRadius: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#FBFBFB",
            display: "block",
            width: "100%",
            padding: "0.375rem 0.75rem 0.375rem 0px",
            transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
            zIndex:'1'
        },
        '.form-control':{
            position:'relative',
            zIndex:'1',
            paddingLeft: "10px",
            flex: "1",
            outline:'none',
            backgroundColor: "transparent",
            border: "0px",
            borderBottom: "0.25px solid #FBFBFB",
            borderRadius: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#FBFBFB",
            display: "block",
            width: "100%",
            padding: "0.375rem 0.75rem 0.375rem 0px",
            transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        },
        ".input-field": {
            borderBottom: '1px solid #FBFBFB',
            color: '#FBFBFB !important',

        },
        ".text": {
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "24px"
        },
        ".field-title": {
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "19px",
            padding: '0px 0px 10px 0px',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            color: '#FBFBFB',
        },
        ".experience-btn": {
            fontFamily: 'ProximaNovaA-Regular',
            background: "#C6A87D",
            fontSize: "20px",
            lineHeight:'24px',
            width: '100%',
            fontWeight: 600,
            borderRadius: "0px",
            color: "#080B0E",
            textTransform: "math-auto",
            padding:'18.5px 10px',
            marginTop:'20px'
        },

        ".error-msg": {
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "15px",
            color: '#EB4040'
        },
        ".last-text-condiction": {
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "17px",
            color: "#080B0E",
            textAlign: "center",
            paddingTop: '16px'
        },
        ".redio-btn": {
            visibility: "hidden",
            display: "none",
        },
        ".label-btn": {
            border: '1px solid #FBFBFB',
            padding: '8px 12px',
            marginRight: "6px"
        },
        ".last-text": {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '12px',
            lineHeight: '15px',
            color: 'rgba(251, 251, 251, 0.6)',
            display: 'block',
            marginTop: '4px',
        },
        ".sub-box-counter": {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px',
            background: '#080B0E',
            marginBottom: '16px'
        },
        ".left-btn": {
            width: '24px',
            height: '24px',
            borderRadius: '0px',
            color: '#C6A87D',
            border: '0.25px solid #C6A87D',
            backgroundColor:'black'
        },
        ".right-btn": {
            width: '24px',
            height: '24px',
            borderRadius: '0px',
            color: 'black',
            border: '0.25px solid #C6A87D',
            backgroundColor:'#C6A87D'
        },
        ".details-box": {
            display: 'flex',
            alignItems: "center",
            background: "#DCD7CB",
            color: '#000',
            padding: "16px 32px 16px 39px",
            marginTop: '20px'
        },
        ".price-text": {
            display: 'flex',
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px"
        },
        ".comman-field-box": {
            padding: '16px',
            background: '#080B0E',
            marginBottom: '16px'
        },
        ".sub-text-price": {
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "44px",
            color: "#FBFBFB",
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
        },
        ".sub-text": {
            fontWeight: 300,
            fontSize: "20px",
            lineHeight: "24px",
            color: "#FBFBFB",
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
        },
        '.min-2-3':{
            flex: '1',
            marginBottom: '0px',
            fontFamily: 'Proxima Nova Alt',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
        },
        '.gold-cal':{
            height: '22.8px',
            objectFit: 'contain',
            position: 'absolute',
            right: '15px',
            bottom: '25px',
            zIndex:' 0'
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
        '.number-ans':{
            width: '24px',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            marginLeft: '5px',
            marginRight: '5px',
            color: 'rgba(251, 251, 251, 1)',
            background: 'transparent',
            textAlign:'center'
        },
        '.surprise-box':{
            background: '#080B0E',
            padding: '16px',
            position: 'relative',
            marginBottom: '16px'
        },
        '.form-check':{
            display: 'block',
            minHeight: '1.5rem',
            marginBottom: '0.125rem',
        },
        '.form-check-input':{
            backgroundColor: '#C6A87D',
            borderColor: '#C6A87D',
            borderRadius: '0px',
        },
        ".form-check-label":{
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#FBFBFB',
        },
        '.email-confirm':{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '12px',
            lineHeight: '15px',
            color: 'rgba(251, 251, 251, 0.6)',
            display: 'block',
            marginTop: '4px',
            marginLeft:'1.5rem'
        },
        '.surprise-check-box':{
            display:'flex',
            placeItems:'center'
        },
        '.input-check':{
            paddingRight:'5px !important',
            padding:'0px',
            marginBottom:'0.125rem',
            color:'#C6A87D !important'
        },
        '.date-box':{
            position:'relative'
        },
        '.gcal':{
            height:'22.8px',
        },
        '.gcal-icon':{
            position:'absolute',
            right:'6px',
            bottom:'19px'
        },
        '.time-picker':{
            position:'relative'
        },
        '.timer-drop-down':{
            position:'absolute',
            right: '-11px',
            fontSize: '38px',
            bottom: '-4px'
        },
        '.gInfo-logo':{
            height:'16px',
            width:'16px',
            marginLeft:'8px'
        }
    }))
    const disabledStyle = {
        opacity: 0.5,
    }


    // for tooltip
    const positionRef = useRef({
        x: 0,
        y: 0,
    });
    const popperRef = useRef(null);
    const areaRef = useRef(null);

    const handleMouseMove = (event) => {
        positionRef.current = { x: event.clientX, y: event.clientY };

        if (popperRef.current != null) {
            popperRef.current.update();
        }
    };
    return (
        <React.Fragment>
            <BoxWrapper sx={{position:'sticky',top:'100px'}}>
                <Typography className="sub-text-price">
                    ₹ 2,500 <sub className="sub-text">Per Diner</sub>
                </Typography>
                <Formik
                    initialValues={{
                        yourName: "",
                        email: "",
                        experienceDate: "",
                        startTime: "",
                        time: new Date().getHours() + ":" + new Date().getMinutes(),
                    }}
                    validationSchema={DisplayingErrorMessagesSchema}
                    onSubmit={values => {
                        console.log("values===>", values);
                    }}
                >
                    {({ errors, touched, values, handleChange, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            {console.log("errors", errors)}
                            <Box sx={{}}>
                                <Box className="comman-field-box" >
                                    <Typography className='field-title'>Your Name</Typography>
                                    <input
                                        className='form-control'
                                        name="yourName"
                                        value={values.yourName}
                                        id="standard-size-normal"
                                        placeholder='Enter your full name'
                                        onChange={handleChange}
                                        variant="standard"
                                        fullWidth
                                    />
                                    {touched.yourName && errors.yourName && <Typography className='error-msg'>{errors.yourName}</Typography>}
                                </Box>

                                <Box className="comman-field-box">
                                    <Typography className='field-title'>Email Address</Typography>
                                    <input
                                        className='form-control'
                                        name="email"
                                        value={values.email}
                                        id="standard-size-normal"
                                        placeholder='eg yourname@email.com'
                                        onChange={handleChange}
                                        variant="standard"
                                        fullWidth
                                    />
                                    <Typography className='last-text'>A Email Confirmation will be sent to this ID after booking</Typography>
                                    {touched.email && errors.email && <Typography className='error-msg'>{errors.email}</Typography>}
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Box className="comman-field-box date-box" sx={{ width: "49%" }}>
                                        <Typography className='field-title'>Experience Date</Typography>
                                        <DatePicker selected={startDate}  className='form-control' onChange={(date) => setStartDate(date)} value={moment(startDate).format("ddd,DD MMM YYYY")}/>
                                        {touched.experienceDate && errors.experienceDate && <Typography className='error-msg'>{errors.experienceDate}</Typography>}
                                        <Box className="gcal-icon">
                                            <img className="gcal" src={gCal}/>
                                        </Box>
                                    </Box>
                                    <Box className="comman-field-box" sx={{ width: "48.5%" }}>
                                        <Typography className='field-title' sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            paddingRight: '10px',
                                            paddingBottom:'6px !important'
                                        }}>
                                            Start Time
                                            <MuiThemeProvider theme={defaultTheme}>
                                                <Box className="App">
                                                    <MuiThemeProvider theme={theme}>
                                                        <Tooltip title={tipTitle}
                                                                 arrow
                                                                 placement="top">
                                                            <Box>
                                                                <img className="gInfo-logo" src={gInfo}/>
                                                            </Box>
                                                        </Tooltip>
                                                    </MuiThemeProvider>
                                                </Box>
                                            </MuiThemeProvider>
                                        </Typography>
                                        <Box className='time-picker'>
                                            <input
                                                type="time"
                                                name="time"
                                                value={values.time}
                                                onChange={handleChange}
                                                defaultValue={values.time}
                                                style={{width:'100%'}}
                                                className="form-control"
                                                autoComplete="off"
                                                variant="standard"
                                                InputProps={{
                                                    disableUnderline: true,
                                                    autoCapitalize: true,
                                                }}
                                            />
                                            {touched.startTime && errors.startTime && <Typography className='error-msg'>{errors.startTime}</Typography>}
                                            <ExpandMoreSharpIcon className="timer-drop-down"/>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="sub-box-counter">
                                    <Typography className="min-2-3">Number of Diners <span>(min 2)</span></Typography>
                                    <Box sx={{ display: 'flex' }}>
                                        <RemoveIcon
                                            style={numberOfDenner === 2 ? disabledStyle : {}}
                                            className="left-btn"
                                            onClick={handleDecrement}  disabled={numberOfDenner === 2}
                                        />
                                        <Typography className="number-ans">{numberOfDenner}</Typography>
                                        <AddIcon
                                            className="right-btn"
                                            onClick={handleIncrement}
                                        />
                                    </Box>
                                </Box>
                                <Box className="sub-box-counter">
                                    <Typography className="min-2-3">Number of Diners <span>(min 3)</span></Typography>
                                    <Box sx={{ display: 'flex' }}>
                                        <RemoveIcon
                                            style={numberOfCourses === 3 ? disabledStyle : {}}
                                            className="left-btn"
                                            onClick={handleCoursesDecrement} disabled={numberOfCourses === 3}
                                        />
                                        <Typography className="number-ans">{numberOfCourses}</Typography>
                                        <AddIcon
                                            className="right-btn"
                                            onClick={handleCoursesIncrement}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='surprise-box'>
                                <Box className="form-check">
                                    <Box className='surprise-check-box'>
                                        <Checkbox className="input-check" defaultChecked/>
                                        <Typography className="form-check-label" for="flexCheckChecked">Surprise me</Typography></Box>
                                    <Typography className="email-confirm">An agnostic menu that explores a diverse culinary journey with chef mako at the helm.</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Button
                                    className="experience-btn"
                                    type="submit"
                                    onClick={handleClick}
                                >
                                    Book this Experience
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>

            </BoxWrapper >
        </React.Fragment >
    )

}
export default ChefDetailsForm