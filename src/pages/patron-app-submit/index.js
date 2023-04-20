import React from "react";
import {
    Box,
    Grid,
    MenuItem,
    Select,
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
import moment from "moment";
import * as _ from 'lodash';
import '../../assets/styles/searchBar.css'
import "../../assets/styles/fontStyle.css"

const PatronAppSubmit = () => {

    //validations
    const validationSchema = Yup.object({
        membershipType: Yup.string().required('Please select type'),
        name: Yup.string().required('Please enter name'),
        email: Yup.string().email('Incorrect Email Id').required('please enter email'),
        contactNumber: Yup.number().typeError("Incorrect Contact Number").required('please enter contact number'),
        occupation: Yup.string().required('Please select occupation'),
        brandName: Yup.string().required('Please enter Company/Brand Name'),
    });

    const BoxWrapper = styled(Box)(() => ({
        backgroundColor: '#DCD7CB',
        PaddingRight: '0px',
        '.banner': {
            marginTop: '80px',
            backgroundImage: `url(${joinChef})`,
            backgroundSize: 'cover',
            padding: '50px 120px',
            backgroundPosition: 'center',
            height: '250px',
            width: 'auto',
        },
        '.become-partner-header': {
            display: 'flex',
            placeContent: 'space-between',
            padding: '0px 12px'
        },
        ".header-link": {
            display: 'flex',
            fontFamily: 'Proxima Nova Alt',
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
            fontFamily: 'ProximaNovaA-Regular',
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
        '.agree': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '17px',
            textAlign: 'center',
            color: '#080B0E',
            marginTop: '16px',
            marginBottom: '0px',
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
            fontFamily: 'ProximaNovaA-Regular',
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
        '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
            height: '10px',
            padding: '5px',
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
        '.form-check-inline': {
            display: 'inline-flex',
            marginRight: '1rem',
            flexDirection: 'row',
            placeItems: 'end',
        },
        '.form-check-input': {
            width: '1em',
            height: '1em',
            verticalAlign: 'top',
            backgroundColor: '#fff',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            border: '1px solid rgba(0,0,0,.25)',
        },

        '#inlineRadio1': {
            fontSize: '20px',
            marginRight: '10px',
        },
        '#inlineRadio2': {
            fontSize: '20px',
            marginRight: '10px',
        },
        '.form-check-label': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineheight: '22px',
            color: '#222222',
            marginBottom: '0px',
            backgroundColor: 'white',
        },
        '.agree-link': {
            fontWeight: '700',
            color: '#080B0E',
            fontFamily: 'Proxima Nova',
        },
        '.agree-link:hover': {
            color: '#C6A87D !important',
        },
        '.capital-date-format .css-1x51dt5-MuiInputBase-input-MuiInput-input': {
            textTransform: 'uppercase',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            lineHeight: '17px',
            fontWeight: '400',
            color: ' #7D7D7D',
        },

        '@media(min-width: 1px) and (max-width: 425px)': {
            '.banner': {
                display: 'none',
            },
            '.joinaschef': {
                paddingTop: '80px',
                backgroundColor: '#FBFBFB'
            },
            '.become-partner-form':{
              marginTop:'55px',
                width:'auto'
            },
        },
        '@media(min-width: 615px) and (max-width: 768px)': {
            '.banner': {
                marginTop: '40px'
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
        '@media(min-width: 769px) and (max-width: 2560px)': {
            '.mobile-header': {
                display: "none",
            }
        },
        '@media(min-width: 320px) and (max-width: 370px)': {
            '.mobile-header': {
                paddingRight: '80px'
            },
            '.css-1x51dt5-MuiInputBase-input-MuiInput-input': {
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                lineHeight: '17px',
                fontWeight: '400',
                color: ' #7D7D7D',
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
                <Navbar isIcon={true}/>
                <Box className="joinaschef">
                    <Box className="banner">
                        <Box className="become-partner-header">
                            <Typography><a href="" className="header-link"><ArrowBackIcon
                                style={{marginRight: '20px'}}/>Back</a></Typography>
                            <Typography className="become-partner-heading">Become a Patron</Typography>
                        </Box>
                    </Box>
                    <Box className="container-fluid">
                        <Formik
                            initialValues={{
                                enrollOrRenew: 'New Patron',
                                membershipType: 'Decor',
                                name: '',
                                brandName: '',
                                occupation: 'Decor',
                                email: '',
                                contactNumber: '',
                                dateOfBirth: '',
                                anniversaryDate: ''
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                const PatronData = {
                                    ...values,
                                    dateOfBirth: moment(JSON.stringify(_.get(values, 'dateOfBirth'))).format('DD/MM/YYYY'),
                                    anniversaryDate: moment(JSON.stringify(_.get(values, 'anniversaryDate'))).format('DD/MM/YYYY')
                                }
                            }}
                        >
                            {({values, handleChange, handleSubmit, setFieldValue}) => (
                                <Form onSubmit={handleSubmit}>
                                    <Box className="row white-bg justify-content-center">
                                        <Box className="">
                                            <Grid className="row become-partner-form" xs={12}>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="enroll">Enroll or renew?</label>
                                                    <Box className="form-check form-check-inline">
                                                        <input className="form-check-input form-control" type="radio"
                                                               name="enrollOrRenew" id="inlineRadio1"
                                                               value="New Patron"
                                                               checked={values.enrollOrRenew === "New Patron"}
                                                               onChange={() => setFieldValue("enrollOrRenew", "New Patron")}
                                                        />
                                                        <label className="form-check-label" htmlFor="inlineRadio1">New
                                                            Patron</label>
                                                    </Box>
                                                    <Box className="form-check form-check-inline">
                                                        <input className="form-check-input form-control" type="radio"
                                                               name="enrollOrRenew" id="inlineRadio2"
                                                               value="Renew existing membership"
                                                               checked={values.enrollOrRenew === "Renew existing membership"}
                                                               onChange={() => setFieldValue("enrollOrRenew", "Renew existing membership")}
                                                        />
                                                        <label className="form-check-label" htmlFor="inlineRadio2">Renew
                                                            existing membership</label>
                                                    </Box>
                                                </Grid>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="validationCustom01">Membership Type<span
                                                        className="red">*</span></label>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        name="membershipType"
                                                        value={values.membershipType}
                                                        onChange={handleChange}
                                                        defaultValue={values.membershipType}
                                                        className="selectpicker my-select dropdown-toggle form-control"
                                                        sx={{
                                                            '.MuiOutlinedInput-notchedOutline': {border: 0},
                                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                border: 'none',
                                                            },
                                                            '.css-qiwgdb.MuiSelect-select': {
                                                                padding: '0px'
                                                            }
                                                        }}
                                                        MenuProps={{
                                                            PaperProps: {
                                                                sx: {
                                                                    backgroundColor: '#DCD7CB !important',
                                                                    li: {
                                                                        fontFamily: 'ProximaNovaA-Regular',
                                                                        borderBottom: "1px solid black",
                                                                        fontWeight: '100',
                                                                        padding: '6px 0px',
                                                                        justifyContent:'start'
                                                                    },
                                                                    ul: {
                                                                        display: 'flex',
                                                                        flexDirection: 'column',
                                                                        padding: '16px',
                                                                    },
                                                                    'li:hover': {
                                                                        color: '#C6A87D!important',
                                                                        backgroundColor: 'unset !important'
                                                                    },
                                                                    'li:last-child': {
                                                                        borderBottom: 'none'
                                                                    },
                                                                    "&& .Mui-selected": {
                                                                        backgroundColor: "unset !important"
                                                                    },
                                                                },
                                                            },
                                                        }}
                                                    >
                                                        <MenuItem value="Decor">Decor</MenuItem>
                                                        <MenuItem value="Venue">Venue</MenuItem>
                                                        <MenuItem value="Produce">Produce</MenuItem>
                                                        <MenuItem value="Service Staff">Service Staff</MenuItem>
                                                        <MenuItem value="Sommelier">Sommelier</MenuItem>
                                                        <MenuItem value="Bartender">Bartender</MenuItem>
                                                    </Select>
                                                    <ErrorMessage name='membershipType' component="div"
                                                                  className="error"/>
                                                </Grid>
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
                                                    <label htmlFor="validationCustomcompany">Company Name
                                                        (Optional)</label>
                                                    <TextField type="text" className="form-control"
                                                               id="validationCustomcompany"
                                                               placeholder="Please enter company or brand name"
                                                               name="brandName"
                                                               autoComplete="off"
                                                               value={values.brandName}
                                                               onChange={handleChange}
                                                               variant="standard"
                                                               InputProps={{
                                                                   disableUnderline: true,
                                                               }}/>
                                                    <ErrorMessage name='brandName' component="div" className="error"/>
                                                </Grid>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="validationCustom01">Occupation (Optional)</label>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        name="occupation"
                                                        value={values.occupation}
                                                        onChange={handleChange}
                                                        defaultValue={values.occupation}
                                                        className="selectpicker my-select dropdown-toggle form-control"
                                                        sx={{
                                                            '.MuiOutlinedInput-notchedOutline': {border: 0},
                                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                border: 'none',
                                                            },
                                                            '.css-qiwgdb.MuiSelect-select': {
                                                                padding: '0px'
                                                            }
                                                        }}
                                                        MenuProps={{
                                                            PaperProps: {
                                                                sx: {
                                                                    backgroundColor: '#DCD7CB !important',
                                                                    li: {
                                                                        fontFamily: 'ProximaNovaA-Regular',
                                                                        borderBottom: "1px solid black",
                                                                        fontWeight: '100',
                                                                        padding: '6px 0px',
                                                                        justifyContent:'start'
                                                                    },
                                                                    ul: {
                                                                        display: 'flex',
                                                                        flexDirection: 'column',
                                                                        padding: '16px',
                                                                    },
                                                                    'li:hover': {
                                                                        color: '#C6A87D!important',
                                                                        backgroundColor: 'unset !important'
                                                                    },
                                                                    'li:last-child': {
                                                                        borderBottom: 'none'
                                                                    },
                                                                    "&& .Mui-selected": {
                                                                        backgroundColor: "unset !important"
                                                                    },
                                                                },
                                                            },
                                                        }}
                                                    >
                                                        <MenuItem value="Decor">Decor</MenuItem>
                                                        <MenuItem value="Venue">Venue</MenuItem>
                                                        <MenuItem value="Produce">Produce</MenuItem>
                                                        <MenuItem value="Service Staff">Service Staff</MenuItem>
                                                        <MenuItem value="Sommelier">Sommelier</MenuItem>
                                                        <MenuItem value="Bartender">Bartender</MenuItem>
                                                    </Select>
                                                    <ErrorMessage name='occupation' component="div" className="error"/>
                                                </Grid>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="validationCustom02">Email<span
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
                                                    <Box className="form-group">
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
                                                    <label htmlFor="validationCustom03">Date of Birth (Optional)</label>
                                                    <Box className="form-group">
                                                        <TextField type="date" name="dateOfBirth"
                                                                   value={values.dateOfBirth}
                                                                   onChange={handleChange}
                                                                   className="form-control capital-date-format"
                                                                   autoComplete="off"
                                                                   variant="standard"
                                                                   InputProps={{
                                                                       disableUnderline: true,
                                                                       autoCapitalize: true,
                                                                   }}/>
                                                    </Box>
                                                </Grid>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="validationCustom03">Anniversary Date
                                                        (Optional)</label>
                                                    <Box className="form-group">
                                                        <TextField type="date" name="anniversaryDate"
                                                                   value={values.anniversaryDate}
                                                                   onChange={handleChange}
                                                                   className="form-control capital-date-format"
                                                                   autoComplete="off"
                                                                   variant="standard"
                                                                   InputProps={{
                                                                       disableUnderline: true,
                                                                       autoCapitalize: true,
                                                                   }}/>
                                                    </Box>
                                                </Grid>
                                                <Grid xs={12} className="col-lg-12">
                                                    <button className="btn btn-primary" type="submit">Submit</button>
                                                    <p className="agree">By continuing you agree to the <a
                                                        href="" className="agree-link">T&amp;C</a> of Chefs à Porter</p>
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
export default PatronAppSubmit