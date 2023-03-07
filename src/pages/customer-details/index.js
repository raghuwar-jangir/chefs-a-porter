import React from "react";
import {Box, Grid, ImageListItem, MenuItem, Select, styled, TextField, Typography,} from "@mui/material";
import Navbar from "../../components/NavbarComponent";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Formik, Form, ErrorMessage} from "formik";
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
import goldLogo from "../../assets/images/logo-gold.png";
import {DatePickerInput} from "rc-datepicker";

const validationSchema = Yup.object({
    partner: Yup.string().required('Please enter name'),
    name: Yup.string().required('Please enter name'),
    email: Yup.string().email('Incorrect Email Id').required('please enter email'),
    contactNumber: Yup.number().typeError("Incorrect Contact Number").required('please enter contact number'),
    city: Yup.string().required('Please select city'),
    brandName: Yup.string().required('Please enter Company/Brand Name'),
    instagramLink: Yup.string().required('Please enter link'),
});


const CustomerDetails = () => {
    const CHARACTER_LIMIT = 40;

    const BoxWrapper = styled(Box)(() => ({
        background: '#101418',

        '.supper-gallery': {
            marginTop: '40px',
        },
        '.supper-gallery .container-fluid': {
            padding: '80px 120px'
        },
        '.book-trad': {
            display: 'flex',
            placeItems: 'center',
            marginBottom: '40px',
            paddingLeft: '0px !important',
        },
        '.addons-title': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '32px',
            lineHeight: '39px',
            color: '#FBFBFB',
            marginBottom: '0px',
            marginLeft: '16px',
        },
        '.arrow-left': {
            color: '#FBFBFB',
            // fontSize: '20px',
        },
        '.cust-details': {
            padding: '0px 15px'
        },
        '.per-dinner': {
            background: '#101418',
            padding: '40px 20px',
            boxShadow: '0px 20px 24px rgb(0 0 0 / 6%)',
        },
        '.event-div': {
            display: 'flex'
        },
        '.per-dinner-img': {
            width: '116px',
            height: '116px',
            objectFit: 'cover',
        },
        '.rating-star': {
            fontStyle: 'Proxima Nova',
            display: 'flex',
            alignItems: 'center',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB'
        },
        '.event-title': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: '700',
            fontSize: '20px',
            lineHeight: '25px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
        },
        '.event-subtitle': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            // fontWeight: '400',
            fontSize: '12px',
            lineHeight: '15px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
            marginBottom: '11px',
        },
        '.event-link': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            // fontWeight: '700',
            fontSize: '16px',
            lineHeight: '19px',
            textDecoration: 'none',
            color: '#FBFBFB !important',
        },
        '.experience-breakup': {
            border: '0.5px solid #DCD7CB',
            padding: '16px 16px 0px',
            marginTop: '30px',
        },
        '.ex-details': {
            position: 'relative',
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
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            // fontWeight: '400',
            fontSize: '14px',
            lineHeight: '17px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
            marginBottom: '0px',
        },
        '.ex-icon': {
            position: 'absolute',
            right: '0px',
            top: '0px',
            height: '24px',
            width: '24px',
            color: '#FBFBFB',
            ' -webkit-text-stroke': '1px',
        },
        '.submit-req': {
            background: '#C6A87D',
            color: '#080B0E',
            fontFamily: 'Proxima Nova',
            fontSize: '20px',
            lineHeight: '24px',
            border: '0px',
            marginBottom: '30px',
            marginTop: '30px',
            width: '100%',
            cursor: 'pointer',
            padding: '18px 10px'
        },
        '.contact-text': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '17px',
            textAlign: 'center',
            color: 'rgba(251, 251, 251, 0.6)',
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
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            // fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
            padding: '0px 0px 16px',
        },
        '.grand-total': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            padding: '22px 0px',
        },
        '.border': {
            borderTop: '1px solid rgba(255, 255, 255, 0.6)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
        },
        '.tax1': {
            paddingTop: '20px',
        },
        ".header-club": {
            display: 'none',
            padding: '15px',
            backgroundColor: '#080B0E',
        },
        '.booking-box': {
            border: '1px solid #FBFBFB',
            padding: '40px 20px',
        },
        'form label': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
            marginBottom: '8px',
            display: 'block',
        },
        '.form-control': {
            backgroundColor: 'transparent',
            border: '0px',
            borderBottom: '0.25px solid #FBFBFB',
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
        '.remove-bottom-border': {
            borderBottom: 'none',
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
            marginBottom: '0px',
        },
        '.save-title': {
            backgroundColor: 'transparent',
            border: '0px',
            borderRadius: '0px',
            fontFamily: 'Proxima Nova',
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
            fontFamily: 'Proxima Nova',
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
            '-webkit-text-stroke': '1px',
        },
        '.form-check-input:checked[type=checkbox]': {
            background: '#080B0E',
            borderColor: '#080B0E',
            borderRadius: '0px',
            backgroundImage: `url(data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='%23C6A87D' stroke-linecap='square' stroke-linejoin='square' stroke-width='3' d='m6 10 3 3 6-6'/></svg>)`,
            width: '18px',
            height: '18px',
            marginRight: '11px',
        },
        '.MuiTabList-root': {
            width: '140px'
        },
        '.Joy-selected': {
            border: '0.5px solid #C6A87D !important',
            borderRadius: '0px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontHeight: '400',
            fontSize: '12px',
            lineHeight: '15px',
            color: '#080B0E !important',
            background: '#C6A87D !important',
            padding: '8px 0px',
            width: '140px',
            height: '38px',
        },
        '.MuiTab-variantPlain': {
            border: '0.5px solid #FBFBFB',
            borderRadius: '0px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontHeight: '400',
            fontSize: '14px',
            lineHeight: '17px',
            color: '#FBFBFB',
            padding: '8px 0px',
            width: '140px',
            height: '38px',
        },
        '.MuiTab-variantPlain:hover': {
            color: '#FBFBFB',
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
            fontSize: '20px',
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
        "@media (min-width: 1px) and (max-width:425px)": {
            '.supper-gallery .container-fluid': {
                padding: '20px 10px'
            },
            ".header-club": {
                padding: '0px 110px',
                display: 'flex',
            },
            ".addones-mobile-heading": {
                padding: '8px 0px !important',
                fontSize: "24px",
                textAlign: 'center',
                color: '#FBFBFB !important',
                fontFamily: 'Bon Vivant'
            },
            '.addons-title': {
                fontSize: '28px',
                lineHeight: '30px',
            },
            '.per-dinner': {
                padding: '20px 0px'
            },
            '.table-details': {
                fontSize: '12px',
                lineHeight: '15px',
            },
            '.grand-total': {
                fontSize: '16px',
                lineHeight: '20px',
            },
            '.ex-heading': {
                fontSize: '16px',
                lineHeight: '20px',
                letterSpacing: '0.04em',
            },
            '.event-title': {
                fontSize: '14px',
                lineHeight: '18px',
                letterSpacing: '0.04em',
            },
            '.event-link': {
                fontSize: '14px',
                lineHeight: '18px',
            },
            '.rating-star': {
                fontSize: '14px',
                lineHeight: '18px',
            },
            '.submit-req': {
                fontSize: '16px',
                lineHeight: '18px',
            },
        },
        "@media (min-width: 371px) and (max-width:400px)": {
            '.header-club': {
                padding: '0px 150px'
            }
        },
        "@media (min-width: 425px) and (max-width:450px)": {
            '.header-club': {
                padding: '0px 170px'
            }
        },
        "@media (min-width: 426px) and (max-width:768px)": {
            '.supper-gallery .container-fluid': {
                padding: '40px 80px'
            },
            '.header-club': {
                display: 'flex'
            },
        },
        "@media (min-width: 320px) and (max-width:767px)": {
            ".addones-mobile-heading": {
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
            '.bm-burger-bars': {
                background: '#080B0E !important',
            },
        },
        ".addones-mobile-heading": {
            fontSize: "24px",
            paddingLeft: '280px',
            textAlign: 'center',
            color: "#080B0E",
            fontFamily: 'Bon Vivant'
        },
    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                <Navbar isColor={true}/>
                {isMobile ? (
                    <Box className='header-club'>
                        <Typography className="addones-mobile-heading">Privee</Typography>
                    </Box>
                ) : (
                    ''
                )}
                <Box className="supper-gallery cust-details">
                    <Box className="container-fluid">
                        <Box className="row supper-chef-details">
                            <Box className="book-trad">
                                <ArrowBackIcon className="arrow-left"/>
                                <Typography className="addons-title">Book a Traditional Oma Kase</Typography>
                            </Box>
                            <Box className="row customer-details addons-div">
                                <Formik
                                    initialValues={{
                                        contactNumber: '',
                                        address: '',
                                        brandMessage: '',
                                        date: '',
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => {
                                        console.log("value===>", values)
                                    }}
                                >
                                    {({values, handleChange, handleSubmit, setFieldValue}) => (
                                        <Form onSubmit={handleSubmit}>
                                            <Grid container>
                                                <Grid xl={7} lg={7} xs={7} md={7} sm={12} xs={12}
                                                      className="booking-box">
                                                    <Box className="contact-box">
                                                        <Grid xs={12} className="mb-3">
                                                            <label htmlFor="validationCustom03">Contact Number</label>
                                                            <Box className="form-group country">
                                                                <TextField type="tel" name="contactNumber"
                                                                           className="form-control"
                                                                           id="validationCustom03"
                                                                           placeholder="10 digit number"
                                                                           value={values.contactNumber}
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
                                                            <label htmlFor="validationCustom03">Address</label>
                                                            <Box className="form-group country">
                                                                <TextField type="tel" name="address"
                                                                           className="form-control"
                                                                           id="validationCustom03"
                                                                           placeholder="Add Address"
                                                                           value={values.address}
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
                                                                />
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
                                                                name="brandMessage"
                                                                autoComplete="off"
                                                                className="form-control remove-bottom-border"
                                                                value={values.brandMessage}
                                                                placeholder="eg Special Decor, "
                                                                helperText={`${values.brandMessage.length}/${CHARACTER_LIMIT} Characters`}
                                                                onChange={handleChange("brandMessage")}
                                                                margin="normal"
                                                                variant="outlined"
                                                                fullWidth
                                                                multiline
                                                                rows={1}
                                                                autoComplete="off"
                                                            />
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
                                                        <Tabs aria-label="Basic tabs" defaultValue={0}>
                                                            <TabList>
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
                                                                        placeholder="-DD/MM/YYYY-"
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
                                                                        name="date"
                                                                        value={values.date}
                                                                        displayFormat="DD/MMMM/YYYY"
                                                                        returnFormat="DD/MMMM/YYYY"
                                                                        className="form-control"
                                                                        placeholder="-DD/MM/YYYY-"
                                                                        onChange={(dateString) => setFieldValue('date', dateString)}
                                                                        defaultValue={values.date}/>
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
                                                                        name="date"
                                                                        value={values.date}
                                                                        displayFormat="DD/MMMM/YYYY"
                                                                        returnFormat="DD/MMMM/YYYY"
                                                                        className="form-control"
                                                                        placeholder="-DD/MM/YYYY-"
                                                                        onChange={(dateString) => setFieldValue('date', dateString)}
                                                                        defaultValue={values.date}/>
                                                                    <Typography className="sp-occ ex-detail">We will
                                                                        send you exclusive offers on this
                                                                        day</Typography>
                                                                </Grid>
                                                            </TabPanel>
                                                            <TabPanel value={3} sx={{p: 2}}>
                                                                <Grid xs={12} className="mb-3">
                                                                    <label className="mt-40">Experience Date
                                                                        (Optional)</label>
                                                                    <DatePickerInput
                                                                        name="date"
                                                                        value={values.date}
                                                                        displayFormat="DD/MMMM/YYYY"
                                                                        returnFormat="DD/MMMM/YYYY"
                                                                        className="form-control"
                                                                        placeholder="-DD/MM/YYYY-"
                                                                        onChange={(dateString) => setFieldValue('date', dateString)}/>
                                                                    <Typography className="sp-occ ex-detail">We will
                                                                        send you exclusive offers on this
                                                                        day</Typography>
                                                                </Grid>
                                                            </TabPanel>
                                                        </Tabs>
                                                    </Box>
                                                    <Box className="row patron-check">
                                                        <Box className="col-lg-12 save-patron">
                                                            <input className="form-check-input" type="checkbox"
                                                                   defaultValue id="flexCheckDefault" defaultChecked/>
                                                            <Box sx={{width: '100%'}}>
                                                                <Typography className="save-title">Save 15% on all
                                                                    experiences by becoming a patron</Typography>
                                                                <Typography className="save-subtitle">You will
                                                                    save <b>₹1300</b> on this booking</Typography>
                                                            </Box>
                                                            <ChevronRightIcon className="bi-chevron-right"/>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid xl={5} lg={5} xs={5} md={5} sm={12} xs={12}
                                                      className="cust-details">
                                                    <Box className="per-dinner adsss">
                                                        <Box className="event-div">
                                                            <img src={sGallery} alt="" className="per-dinner-img"/>
                                                            <Box sx={{marginLeft: '12px'}}>
                                                                <Typography className="event-title">The Big Fat Parsi
                                                                    Blowout</Typography>
                                                                <Typography className="event-subtitle">Curated by <a
                                                                    href="#"
                                                                    className="event-link">Chef
                                                                    Mako</a></Typography>
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
                                                                <Typography className="ex-heading">Experience
                                                                    Breakup</Typography>
                                                                <Typography className="ex-detail">This is an estimate,
                                                                    final price
                                                                    will be <br/>communicated on
                                                                    call
                                                                </Typography>
                                                                <ExpandMoreIcon className="ex-icon"/>
                                                            </Box>
                                                            <Box className="table table-borderless">
                                                                <Box className="table-box">
                                                                    <Typography
                                                                        className="table-details">Food</Typography>
                                                                    <Typography className="table-details">₹
                                                                        2,500</Typography>
                                                                </Box>
                                                                <Box className="table-box">
                                                                    <Typography className="table-details">Service
                                                                        Charge</Typography>
                                                                    <Typography className="table-details">₹
                                                                        2,500</Typography>
                                                                </Box>
                                                                <Box className="table-box">
                                                                    <Typography className="table-details"
                                                                    >Tax</Typography>
                                                                    <Typography className="table-details">₹
                                                                        2,500</Typography>
                                                                </Box>
                                                                <Box className="table-box">
                                                                    <Typography className="table-details"
                                                                    >Venue</Typography>
                                                                    <Typography className="table-details">₹
                                                                        2,500</Typography>
                                                                </Box>
                                                                <Box className="table-box">
                                                                    <Box className="table-details">Additional Courses
                                                                        +2</Box>
                                                                    <Box className="table-details">₹ 2,500</Box>
                                                                </Box>
                                                                <Box className="table-box border">
                                                                    <Typography className=" grand-total table-details">Grand
                                                                        Total</Typography>
                                                                    <Typography className="table-details grand-total">₹
                                                                        2,5000</Typography>
                                                                </Box>
                                                                <Box className="tax tax1 table-box">
                                                                    <Typography className="table-details">+Incl Of
                                                                        GST</Typography>
                                                                </Box>
                                                                <Box className="tax">
                                                                    <Typography className="table-details">++1.95% +
                                                                        GST</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box className="row viewbreak">
                                                            <Box className="col-lg-12">
                                                                <button type="submit" className="submit-req">Next
                                                                </button>
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
            </BoxWrapper>
        </React.Fragment>
    )
}
export default CustomerDetails;