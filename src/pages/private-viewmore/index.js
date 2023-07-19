import React, {useContext, useState, useEffect} from "react";
import {Box, styled, Grid, Typography, Select, MenuItem, TextField, TextareaAutosize} from "@mui/material";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarComponent";
import NeedHelp from "../../components/NeedHelp";
import FooterEnd from "../../components/FooterEndSection";
import avlExp1 from '../../assets/images/avl-exp1.jpg';
import avlExp2 from '../../assets/images/avl-exp2.jpg';
import AvlExperienceCarousel from "../../components/AvlExperienceCarousel";
import {Form, Formik} from "formik";
import moment from "moment";
import * as _ from "lodash";
import {DatePickerInput} from "rc-datepicker";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import Modal from "@mui/material/Modal";
import {isMobile} from "react-device-detect";
import ShareIcon from "@mui/icons-material/Share";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {navigate} from "gatsby";
import UsersContext from "../../context/UsersContext";
import CmsContext from "../../context/CmsContext";
import InfiniteScrollData from "../../components/InfiniteScrollData";
import Cookies from 'js-cookie';

const BoxWrapper = styled(Box)(() => ({
    background: "#080B0E",
    '.home-banner': {
        marginTop: '80px'
    },
    '.home-banner .row': {
        padding: '0px',
        margin: '0px',
        // position: 'relative',
    },
    '.justify-content-center': {
        display: 'flex',
        justifyContent: 'center',
    },
    ".available-experiences": {
        padding: "80px 120px",
        background: "#080B0E"
    },
    ".btn-outer":{
        width:"100%",
        float:"left",
        textAlign:"center",
    },
    ".more_btn":{
        background:"#C6A87D",
        color: "#080B0E",
        fontFamily: "ProximaNovaA-Regular",
        fontSize: "16px",
        lineHeight: "20px",
        border: "0px",
        marginBottom: "30px",
        marginTop: "30px",
        width: "auto",
        float:"none",
        display:"inline-block",
        cursor: "pointer",
        padding: "14px 30px",
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
        padding: '0px  12px',
        marginBottom: '40px',
    },
    '.privee-container': {
        width: '1190px !important',
        padding: '40px 40px 0px'
    },
    '.pe-fo-exp': {
        // position: 'relative',
        width: '100%',
        bottom: '0px',

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
        padding: '12px',
        height: '50px !important',
    },
    '.MuiSelect-select': {
        padding: '1px !important',
    },
    '.MuiSelect-icon': {
        top: 0
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
    '.css-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {
        color: '#FBFBFB'
    },
    '.react-datepicker-component .react-datepicker-input input': {
        paddingLeft: '0px',
        color: '#080B0E',
        fontSize: '20px',
        fontWeight: '100',
        fontFamily: 'ProximaNovaA-Regular',
    },
    '.icon-rc-datepicker': {
        color: '#FBFBFB !important',
    },
    '.react-datepicker-component': {
        top: '-5px'
    },
    '.react-datepicker-component .react-datepicker-input': {
        background: 'transparent',
        border: '0px',
        borderRadius: '0px',
        height: '30px !important'
    },
    '.react-datepicker-component .react-datepicker-input:hover': {
        background: 'transparent',
        border: '0px',
        borderRadius: '0px'
    },
    '.react-datepicker-component .react-datepicker-input.has-value input': {
        color: '#FBFBFB !important',
        padding: '8px 0px'
    },
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
        padding: '1px !important',
    },
    ".header-club": {
        display: 'none',
        padding: '15px',
        backgroundColor: '#080B0E',
    },
    '.header-icon': {
        color: '#FBFBFB'
    },
    "@media (min-width: 1px) and (max-width:431px)": {
        ".header-club": {
            padding: '0px',
            display: 'flex',
        },
        '.home-banner': {
            marginTop: '0px'
        },
        ".available-experiences": {
            padding: "5px 16px",
            background: "#080B0E"
        },
        '.chef-header': {
            fontSize: '24px',
            lineHeight: '30px',
        },
        '.form-group': {
            width: 'auto',
            flex: '1',
            border: '1px solid #FBFBFB',
            padding: '5px',
            height: '55px',
        },
        '.privee-container': {
            width: 'auto !important',
            padding: '60px 10px 30px 10px'
        },
        '.label': {
            fontSize: '14px',
            lineHeight: '15px',
            marginBottom: '5px',
        },
        '.form-control': {
            fontSize: '14px',
            lineHeight: '15px',
            color: '#FBFBFB',
            width: '100%'
        },
        '.pe-fo-exp': {
            width: 'auto',
        },
        '.edit': {
            display: 'block'
        },
        '.form-row': {
            display: 'block'
        },
        '.justify-content-center': {
            display: 'block',
        },
    },
    "@media (min-width: 431px) and (max-width:768px)": {
        ".available-experiences": {
            padding: "40px",
            background: "#080B0E"
        },
        '.header-club': {
            display: 'flex'
        },
        '.privee-container': {
            width: '688px !important',
        },
    },
    "@media (min-width: 769px) and (max-width:1024px)": {
        '.privee-container': {
            width: '688px !important',
        },
    },
    "@media (min-width: 1025px) and (max-width:1500px)": {
        '.privee-container': {
            width: '880px !important',
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
    "@media (min-width: 425px) and (max-width:450px)": {
        '.header-icon': {
            padding: '14px 140px 0px 10px'
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
        '.home-banner': {
            marginTop: '55px'
        },
    },
}));
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 330,
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
        width: '45% !important',
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
    ".btn-cancel": {
        border: '1px solid #080B0E!important',
        background: "transparent",
        width: '45% !important',
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "19px",
        borderRadius: "0px",
        color: "#080B0E",
        textTransform: "capitalize",
        fontFamily: 'Proxima Nova',
        height: "40px !important",
        marginTop: "0px",
    },
    '.btn-group': {
        display: 'flex',
        justifyContent: 'space-between'
    },
    '.react-datepicker-component .react-datepicker-input input': {
        paddingLeft: '5px',
        color: '#080B0E',
        fontSize: '20px',
        fontWeight: '100',
        fontFamily: 'Proxima Nova Alt',
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
    },
    '.react-datepicker-component .react-datepicker-input.is-open': {
        background: 'transparent',
        border: '0px',
        borderRadius: '0px',
    },
}
const PriveeViewMore = (props) => {

    const {userData, mealData, commonCityData} = useContext(UsersContext);
    const [priveeInfo, setPriveeInfo] = useState()
    const cookieValue = Cookies?.get('priveeData');

    const {footerData} = useContext(CmsContext)
 
    {
        !_.isEmpty(cookieValue) &&
        useEffect(() => {
            if (cookieValue) {
                setPriveeInfo(JSON.parse(cookieValue));
            }
        }, [cookieValue])
    }


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const menuitemValue = _.range(1, 26);

    // const handleClick = () => {
    //     navigate('/event-details');
    // }

    console.log('userData',userData?.results)

    return (
        <React.Fragment>
            <BoxWrapper>
                {
                    !_.isEmpty(userData && mealData) &&
                    <>
                        <Navbar to={'/private-viewmore'} isColor={true} isIcon={true} heading="Private"/>
                        <Box className="home-banner dark">
                            <Box className="row justify-content-center">
                                <Box className="privee-container">
                                    <Box className="pe-fo-exp">
                                        <a className="edit" onClick={handleOpen}>Edit</a>
                                        {
                                            !_.isEmpty(priveeInfo) &&
                                            <Formik
                                                initialValues={{
                                                    city: priveeInfo?.city ? priveeInfo?.city : commonCityData?.[0].name,
                                                    on: moment(priveeInfo?.date).format('ddd,DD MMM') ? moment(priveeInfo?.date).format('ddd,DD MMM') : new Date(),
                                                    time: priveeInfo?.time ? priveeInfo?.time : mealData?.[0].name,
                                                    diners: priveeInfo?.diners
                                                }}
                                                onSubmit={(values) => {
                                                    const experienceData = {
                                                        ...values,
                                                        on: moment(_.get(values, 'date')).format('DD/MM/YYYY'),
                                                    }
                                                }}
                                            >
                                                {({values, handleChange, handleSubmit, setFieldValue}) => (
                                                    <Form onSubmit={handleSubmit}>
                                                        <Box className="form-row">
                                                            {
                                                                !_.isEmpty(commonCityData) &&
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
                                                                        {
                                                                            commonCityData?.map((item) => {
                                                                                return <MenuItem
                                                                                    value={item.name}>{item.name}</MenuItem>
                                                                            })
                                                                        }
                                                                        {/*<MenuItem value="Mumbai">Mumbai</MenuItem>*/}
                                                                        {/*<MenuItem value="Delhi">Delhi</MenuItem>*/}
                                                                        {/*<MenuItem value="Goa">Goa</MenuItem>*/}
                                                                        {/*<MenuItem value="Banglore">Banglore</MenuItem>*/}
                                                                        {/*<MenuItem value="Hydrabad">Hydrabad</MenuItem>*/}
                                                                    </Select>
                                                                </Box>
                                                            }

                                                            <Box className="form-group">
                                                                <label className="label">On</label>
                                                                <DatePickerInput
                                                                    name="on"
                                                                    value={values.on}
                                                                    displayFormat="ddd, DD MMM"
                                                                    returnFormat="ddd,DD MMM"
                                                                    className="form-control"
                                                                    onChange={(dateString) => setFieldValue('on', dateString)}
                                                                    defaultValue={values.on}
                                                                />
                                                            </Box>
                                                            {
                                                                !_.isEmpty(mealData) && <Box className="form-group">
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
                                                                        {
                                                                            mealData.map((item) => {
                                                                                return <MenuItem
                                                                                    value={item.name}>{item.name}</MenuItem>
                                                                            })
                                                                        }
                                                                        {/*<MenuItem value="Lunch">Lunch</MenuItem>*/}
                                                                        {/*<MenuItem value="Dinner">Dinner</MenuItem>*/}
                                                                        {/*<MenuItem value="BreakFast">BreakFast</MenuItem>*/}
                                                                    </Select>
                                                                </Box>
                                                            }

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
                                                                                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
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
                                                                    {menuitemValue.map((item, index) => (
                                                                        <MenuItem value={index + 1}>{item}</MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </Box>
                                                        </Box>
                                                    </Form>
                                                )}
                                            </Formik>
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        {
                                !_.isEmpty(userData?.results) && userData?.results.length>0 &&
                                <InfiniteScrollData allData={userData?.results} />
                        }
                        <NeedHelp
                            title={footerData?.footer.footer.common_footer.details.title}
                            description={footerData?.footer.footer.common_footer.details.description}
                            button_call={footerData?.footer.footer.common_footer.details.button1_text}
                            button_email={footerData?.footer.footer.common_footer.details.button2_text}
                        />
                        <Footer/>
                        <FooterEnd/>
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
                                        <Typography id="exampleModalLabel" className='schedule-heading modal-title'>Host
                                            an
                                            Experience</Typography>
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
                                                    <Box className="btn-group">
                                                        <button className="btn btn-cancel" type="reset">cancel
                                                        </button>
                                                        <button className="btn btn-primary" type="submit">Apply Filter
                                                        </button>
                                                    </Box>
                                                </Form>
                                            )}
                                        </Formik>
                                    </Box>
                                </Box>
                            </Box>
                        </Modal>
                    </>
                }
            </BoxWrapper>
        </React.Fragment>
    )
}
export default PriveeViewMore;