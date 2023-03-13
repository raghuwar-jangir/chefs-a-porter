import React  from "react";
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
import joinChef from "../../assets/images/joinchef-banner.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InputAdornment from '@mui/material/InputAdornment';
import {Formik, Form, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {isMobile} from "react-device-detect";

const ContactUs = () => {

    //validations
    const validationSchema = Yup.object({
        name: Yup.string().required('Please enter name'),
        email: Yup.string().email('Incorrect Email Id').required('please enter email'),
        contactNumber: Yup.number().typeError("Incorrect Contact Number").required('please enter contact number'),
        coverLetterMessage: Yup.string().required('Please enter text'),
    });

    //for Cover Letter
    const CHARACTER_LIMIT = 500;

    const BoxWrapper = styled(Box)(() => ({
        backgroundColor: '#DCD7CB',
        PaddingRight: '0px',
        '.banner': {
            marginTop: '60px',
            backgroundImage: `url(${joinChef})`,
            backgroundSize: 'cover',
            padding: '50px 120px',
            backgroundPosition: 'center',
            height: '300px',
            width: 'auto',
        },
        '.become-partner-header': {
            display: 'flex',
            placeContent: 'space-between',
        },
        ".header-link": {
            display: 'flex',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            textDecoration: 'none',
            position: 'absolute',
        },
        ".header-link:hover": {
            color: '#C6A87D !important',
        },
        '.become-partner-heading': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '32px',
            lineHeight: '39px',
            color: '#FBFBFB',
            flex: '1',
            textAlign: 'center',
        },
        '.justify-content-center': {
            display: 'flex',
            marginTop: '-80px',
            justifyContent: 'center'
        },
        '.become-partner-form': {
            background: '#FBFBFB',
            padding: '30px',
            width: '596px',
            marginBottom: '36px',

        },
        '.form-details': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '30px',
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
        '@media(min-width: 1px) and (max-width: 425px)': {
            '.banner': {
                display: 'none',
            },
            '.form-details': {
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#080B0E',
                marginBottom: '40px',
            },
            '.joinaschef': {
                paddingTop: '80px'
            },
        },
        '@media(min-width: 615px) and (max-width: 768px)': {
            '.banner': {
                marginTop: '10px'
            }
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
        '@media(min-width: 320px) and (max-width: 370px)': {
            '.mobile-header': {
                paddingRight: '80px'
            },
        },
        '@media(min-width: 371px) and (max-width: 400px)': {
            '.mobile-header': {
                paddingRight: '100px'
            },
        },
        '@media(min-width: 401px) and (max-width: 565px)': {
            '.mobile-header': {
                paddingRight: '120px'
            },
        },
    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                <Navbar isIcon={true} heading="Get In Touch"/>
                {/*{isMobile ? (*/}
                {/*    <Box className="mobile-header">*/}
                {/*        <ArrowBackIcon/>*/}
                {/*        <Typography><a href="/" className="mobile-heading" style={{textAlign: 'center !important'}}>Get*/}
                {/*            In Touch</a></Typography>*/}
                {/*    </Box>*/}
                {/*) : ''}*/}
                <Box className="joinaschef">
                    <Box className="banner">
                        <Box className="become-partner-header">
                            <Typography><a href="/" className="header-link"><ArrowBackIcon
                                style={{marginRight: '15px'}}/>Back</a></Typography>
                            <Typography className="become-partner-heading">Get In Touch</Typography>
                        </Box>
                    </Box>
                    <Box className="container-fluid">
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                contactNumber: '',
                                coverLetterMessage: ''
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                console.log("value===>", values)
                            }}
                        >
                            {({values, handleChange, handleSubmit}) => (
                                <Form onSubmit={handleSubmit}>
                                    <Box className="row white-bg justify-content-center">
                                        <Box className="become-partner-form">
                                            <Typography className="form-details">Questions, ideas, feedback — we want to
                                                hear it all. Drop us a line at <strong>hi@chefsaporter</strong> or
                                                complete the form below.
                                                For questions regarding an upcoming reservation, shoot us a note
                                                at <strong>reservations@chefsaporter.com</strong></Typography>
                                            <Grid className="row" xs={12}>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="validationCustomname">Your Name<span
                                                        className="red">*</span></label>
                                                    <TextField type="text" className="form-control" name="name"
                                                               value={values.name}
                                                               onChange={handleChange} id="validationCustomname"
                                                               placeholder="Enter your full name"
                                                               variant="standard"
                                                               autoComplete="off"
                                                               InputProps={{
                                                                   disableUnderline: true,
                                                               }}
                                                    />
                                                    <ErrorMessage name='name' component="div" className="error"/>
                                                </Grid>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="validationCustom02">Email Address<span
                                                        className="red">*</span></label>
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
                                                    <label htmlFor="validationCustom03">Contact Number</label>
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
                                                                           position="start">91+</InputAdornment>
                                                                   }}/>
                                                        <ErrorMessage name='contactNumber' component="div"
                                                                      className="error"/>
                                                    </Box>
                                                </Grid>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="">Cover Letter</label>
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
                                                        name="coverLetterMessage"
                                                        autoComplete="off"
                                                        className="form-control remove-bottom-border"
                                                        value={values.coverLetterMessage}
                                                        placeholder="Do you have any special requests or concerns ?"
                                                        helperText={`${values.coverLetterMessage.length}/${CHARACTER_LIMIT} Characters`}
                                                        onChange={handleChange("coverLetterMessage")}
                                                        margin="normal"
                                                        variant="outlined"
                                                        fullWidth
                                                        multiline
                                                        rows={1}
                                                        autoComplete="off"
                                                    />
                                                    <ErrorMessage name='coverLetterMessage' component="div"
                                                                  className="error"/>
                                                </Grid>
                                                <Grid xs={12} className="col-lg-12">
                                                    <button className="btn btn-primary" type="submit">Apply</button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Box>
                <NeedHelp/>
                <Footer/>
                <FooterEnd/>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default ContactUs;