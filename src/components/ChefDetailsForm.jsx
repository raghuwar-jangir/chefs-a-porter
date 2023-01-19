import { Box, Button, styled, TextField, Tooltip, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
// import styled from "styled-components";
import * as Yup from 'yup';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InfoIcon from '@mui/icons-material/Info';



const DisplayingErrorMessagesSchema = Yup.object().shape({
    yourName: Yup.string().required('Your Name Required'),
    email: Yup.string().required('Email id Required'),
    experienceDate: Yup.string().required('Experience Date Required'),
    startTime: Yup.string().required('Start Time Required'),


});

const ChefDetailsForm = () => {
    const [numberOfDenner, setNumberOfDenner] = useState(0)
    const [numberOfCourses, setNumberOfCourses] = useState(0)
    const BoxWrapper = styled(Box)(() => ({
        background: '#101418',
        color: '#FBFBFB',
        padding: '16px',
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
            color: "#fff !important",
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
            padding: '0px 0px 12px 0px',
        },
        ".experience-btn": {
            background: "#C6A87D",
            fontSize: "16px",
            width: '100%',
            fontWeight: 600,
            borderRadius: "0px",
            color: "#080B0E",
            textTransform: "capitalize",
            height: "48px",
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
            fontWeight: 300,
            fontSize: "12px",
            lineHeight: "15px", paddingTop: '6px'
        },
        ".sub-box-counter": {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px',
            background: '#080B0E',
            marginBottom: '16px'
        },
        ".left-btn": {
            color: "#C6A87D",
            background: "none"
        },
        ".right-btn": {
            border: "0px solid",
            background: "#C6A87D"
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
        }

    }))


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
            <BoxWrapper>
                <Formik
                    initialValues={{
                        yourName: "",
                        email: "",
                        experienceDate: "",
                        startTime: "",
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
                                    <Typography className='field-title'>Enter your full name</Typography>
                                    <TextField
                                        className='input-field'
                                        name="yourName"
                                        value={values.yourName}
                                        id="standard-size-normal"
                                        placeholder='Enter Specify Occassion'
                                        onChange={handleChange}
                                        variant="standard"
                                        fullWidth
                                    />
                                    {touched.yourName && errors.yourName && <Typography className='error-msg'>{errors.yourName}</Typography>}
                                </Box>

                                <Box className="comman-field-box">
                                    <Typography className='field-title'>Email Address</Typography>
                                    <TextField
                                        className='input-field'
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
                                    <Box className="comman-field-box" sx={{ width: "49%" }}>
                                        <Typography className='field-title'>Experience Date</Typography>
                                        <TextField
                                            className='input-field'
                                            value={values.experienceDate}
                                            onChange={handleChange}
                                            name="experienceDate"
                                            type="date"
                                            id="standard-size-normal"
                                            variant="standard"
                                            fullWidth
                                        />
                                        {touched.experienceDate && errors.experienceDate && <Typography className='error-msg'>{errors.experienceDate}</Typography>}
                                    </Box>




                                    <Box className="comman-field-box" sx={{ width: "48.5%" }}>
                                        <Typography className='field-title' sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            paddingRight: '10px'
                                        }}>
                                            Start Time
                                            <Tooltip
                                                title="Private Dining usually last upto 3 hrs but can extend upto 5 hrs based on number of courses  "
                                                placement="right"
                                                arrow
                                                PopperProps={{
                                                    background: 'red',
                                                    popperRef,
                                                    anchorEl: {
                                                        getBoundingClientRect: () => {
                                                            return new DOMRect(
                                                                positionRef.current.x,
                                                                areaRef.current.getBoundingClientRect().y,
                                                                0,
                                                                0,
                                                            );
                                                        },
                                                    },
                                                }}
                                            >
                                                <InfoIcon
                                                    ref={areaRef}
                                                    onMouseMove={handleMouseMove}
                                                />
                                            </Tooltip>
                                        </Typography>
                                        <TextField
                                            className='input-field'
                                            value={values.experienceDate}
                                            onChange={handleChange}
                                            name="startTime"
                                            type="Time"
                                            id="standard-size-normal"
                                            variant="standard"
                                            fullWidth
                                        />
                                        {touched.startTime && errors.startTime && <Typography className='error-msg'>{errors.startTime}</Typography>}
                                    </Box>
                                </Box>
                                <Box className="sub-box-counter">
                                    <Typography>Number of Diners <span>(min 2)</span></Typography>
                                    <Box sx={{ display: 'flex' }}>
                                        <button
                                            className="left-btn"
                                            onClick={() => { setNumberOfDenner((numberOfDenner - 1 > 0)) }}
                                        >
                                            -
                                        </button>
                                        <Typography sx={{ width: '20px', textAlign: 'center' }}>{numberOfDenner}</Typography>
                                        <button
                                            className="right-btn"
                                            onClick={() => { setNumberOfDenner(numberOfDenner + 1) }}
                                        >
                                            +
                                        </button>
                                    </Box>
                                </Box>
                                <Box className="sub-box-counter">
                                    <Typography>Number of Courses<span>(min 3)</span></Typography>
                                    <Box sx={{ display: 'flex' }}>
                                        <button
                                            className="left-btn"
                                            onClick={() => { setNumberOfCourses(numberOfCourses - 1 > 0) }}
                                        >
                                            -
                                        </button>
                                        <Typography sx={{ width: '20px', textAlign: 'center' }}>{numberOfCourses}</Typography>
                                        <button
                                            className="right-btn"
                                            onClick={() => { setNumberOfCourses(numberOfCourses + 1) }}
                                        >
                                            +
                                        </button>
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{ paddingBottom: '40px' }}>
                                <Button
                                    className="experience-btn"
                                    type="submit"
                                >
                                    Host this Experience
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