import React, {useState} from "react";
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
import uploadCloud from "../../assets/images/upload-cloud.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InputAdornment from '@mui/material/InputAdornment';
import IosShareIcon from '@mui/icons-material/IosShare';
import {Formik, Form, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {isMobile} from "react-device-detect";

const BecomePartner = () => {

    //Adding Multiple inputBox
    const [inputList, setInputList] = useState([]);
    const Input = (values, handleChange) => {
        return <TextField type="text" id="otherlinks" className="form-control"
                          name="otherLinks"
                          value={values.otherLinks}
                          onChange={handleChange}
                          placeholder="https://" variant="standard"
                          autoComplete="off"
                          InputProps={{
                              disableUnderline: true,
                          }}/>;
    };
    const AddInputLinkListBox = event => {
        setInputList(inputList.concat(<Input key={inputList.length}/>));
        if (inputList.length > 9) {
            alert("Only 10 textBoxes allow");
            return false;
        }
    };

    //validations
    const validationSchema = Yup.object({
        partner: Yup.string().required('Please enter name'),
        name: Yup.string().required('Please enter name'),
        email: Yup.string().email('Incorrect Email Id').required('please enter email'),
        contactNumber: Yup.number().typeError("Incorrect Contact Number").required('please enter contact number'),
        city: Yup.string().required('Please select city'),
        brandName: Yup.string().required('Please enter Company/Brand Name'),
        instagramLink: Yup.string().required('Please enter link'),
    });

    //for getting file upload name
    window.pressed = function () {
        var a = document.getElementById('aa');
        if (a.value == "") {
            fileLabel.innerHTML = "Choose a File";
        } else {
            var theSplit = a.value.split('\\');
            fileLabel.innerHTML = theSplit[theSplit.length - 1];
        }
    };

    const CHARACTER_LIMIT = 500;

    const BoxWrapper = styled(Box)(() => ({
        backgroundColor: '#DCD7CB',
        PaddingRight: '0px',
        '.banner': {
            marginTop: '80px',
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
        '.css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input': {
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
        '.files': {
            position: 'relative',
            height: '150px',
            border: '1px dashed #080B0E!important',
            background: 'rgba(189, 189, 189, 0.2)',
        },
        '.files input': {
            cursor: 'pointer',
            textAlign: 'center !important',
            margin: '0',
            width: '100% !important',
            background: 'rgba(189, 189, 189, 0.2)',
            border: '0px dashed #080B0E !important',
            color: 'transparent !important',
            position: 'absolute',
            height: '100%',
            zIndex: '1',
        },
        '.upload-files': {
            position: 'relative',
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: 'center',
            placeItems: 'center',
            height: '150px',
            width: '100%',
        },
        '.file-upload-label': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
            marginBottom: '8px',
            display: 'block',
        },
        '.files input::file-selector-button': {
            display: 'none',
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
        '#addButton': {
            width: '100%',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
            position: 'relative',
            padding: '9.5px',
            background: 'transparent',
            border: '0.5px solid #080B0E',
            cursor: 'pointer'
        },
        '.red': {
            color: '#EB4040'
        },
        '.css-6hp17o-MuiList-root-MuiMenu-list': {
            listStyle: 'none',
            padding: '16px',
            position: 'relative',
            paddingTop: '8px',
            paddingBottom: '8px',
            outline: '0',
            backgroundColor: '#DCD7CB !important',
            background: '#DCD7CB !important',
            borderRadius: '0px',
            boxShadow: '0px 5px 13px rgb(0 0 0 / 20%)',
            border: '0px',
            marginTop: '-2px!important',
        },
        '.css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root': {
            borderRadius: '0px',
            padding: "0px",
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
        '.css-1wc848c-MuiFormHelperText-root': {
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
    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                {isMobile ? (
                    <Box className="mobile-header">
                        <ArrowBackIcon/>
                        <Typography><a href="/" className="mobile-heading" style={{textAlign: 'center !important'}}>Become
                            a partner</a></Typography>
                    </Box>
                ) : (<Navbar/>)}
                <Box className="joinaschef">
                    <Box className="banner">
                        <Box className="become-partner-header">
                            <Typography><a href="" className="header-link"><ArrowBackIcon
                                style={{marginRight: '15px'}}/>Back</a></Typography>
                            <Typography className="become-partner-heading">Become a partner</Typography>
                        </Box>
                    </Box>
                    <Box className="container-fluid">
                        <Formik
                            initialValues={{
                                partner: 'Decor',
                                name: '',
                                email: '',
                                contactNumber: '',
                                city: '-select-',
                                brandName: '',
                                instagramLink: '',
                                otherLinks: '',
                                brandMessage: '',
                                chefsMessage: '',
                                workSampleFile: ''
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
                                            <Typography className="form-details">We’re looking for talented people to
                                                help our bring out our chefs vision to life. If you think you fit the
                                                bill, apply below!</Typography>
                                            <Typography className="form-details">If your service meets Chefs à
                                                Porter prerequisite one of our representatives shall get in touch with
                                                you via email
                                                either approving/rejecting your request or asking you for a
                                                clarification where
                                                required. Request you to promptly respond to the clarification requested
                                                for a
                                                faster response and closure.</Typography>
                                            <Grid className="row" xs={12}>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="validationCustom01">Partner with us as<span
                                                        className="red">*</span></label>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        name="partner"
                                                        value={values.partner}
                                                        onChange={handleChange}
                                                        defaultValue={values.partner}
                                                        className="selectpicker my-select dropdown-toggle form-control"
                                                        sx={{
                                                            '.MuiOutlinedInput-notchedOutline': {border: 0},
                                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                border: 'none',
                                                            },
                                                        }}
                                                        MenuProps={{
                                                            PaperProps: {
                                                                sx: {
                                                                    backgroundColor: '#DCD7CB !important',
                                                                    li: {
                                                                        borderBottom: "1px solid black"
                                                                    },
                                                                    'li:hover': {
                                                                        color: '#C6A87D!important',
                                                                        backgroundColor:'unset !important'
                                                                    },
                                                                    'li:last-child': {
                                                                        borderBottom: 'none'
                                                                    },
                                                                    "&& .Mui-selected": {
                                                                        backgroundColor: "unset !important"
                                                                    }
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
                                                    <ErrorMessage name='partner' component="div" className="error"/>
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
                                                    <label htmlFor="validationCustomcity">City<span
                                                        className="red">*</span></label>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        name="city"
                                                        value={values.city}
                                                        defaultValue={values.city}
                                                        onChange={handleChange}
                                                        className="selectpicker my-select dropdown-toggle form-control"
                                                        sx={{
                                                            '.MuiOutlinedInput-notchedOutline': {border: 0},
                                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                border: 'none',
                                                            },
                                                        }}
                                                        MenuProps={{
                                                            PaperProps: {
                                                                sx: {
                                                                    backgroundColor: '#DCD7CB !important',
                                                                    li: {
                                                                        borderBottom: "1px solid black",
                                                                    },
                                                                    'li:hover': {
                                                                        color: '#C6A87D!important',
                                                                        backgroundColor:'unset !important'
                                                                    },
                                                                    'li:last-child': {
                                                                        borderBottom: 'none'
                                                                    },
                                                                    "&& .Mui-selected": {
                                                                        backgroundColor: "unset !important"
                                                                    }
                                                                },
                                                            },
                                                        }}
                                                    >
                                                        <MenuItem value="-select-">-select-</MenuItem>
                                                        <MenuItem value="Venue">Venue</MenuItem>
                                                        <MenuItem value="Produce">Produce</MenuItem>
                                                        <MenuItem value="Service Staff">Service Staff</MenuItem>
                                                        <MenuItem value="Sommelier">Sommelier</MenuItem>
                                                        <MenuItem value="Bartender">Bartender</MenuItem>
                                                    </Select>
                                                    <ErrorMessage name='city' component="div" className="error"/>
                                                </Grid>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="validationCustomcompany">Company/Brand Name <span>(if you have one)</span></label>
                                                    <TextField type="text" className="form-control"
                                                               id="validationCustomcompany"
                                                               placeholder="eg.ikea"
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
                                                    <label htmlFor="profilelinks" className="form-label">Instagram
                                                        Profile
                                                        Link</label>
                                                    <Box className="input-group">
                                                        <TextField type="text" id="profilelinks"
                                                                   className="form-control"
                                                                   aria-describedby="passwordHelpBlock"
                                                                   name="instagramLink"
                                                                   value={values.instagram}
                                                                   onChange={handleChange}
                                                                   placeholder="https://"
                                                                   variant="standard"
                                                                   autoComplete="off"
                                                                   InputProps={{
                                                                       disableUnderline: true,
                                                                       endAdornment: <InputAdornment
                                                                           position="end"><IosShareIcon
                                                                           sx={{color: 'black'}}/></InputAdornment>
                                                                   }}/>
                                                        <span className="input-group-text" id="basic-addon1"><i
                                                            className="bi bi-box-arrow-up-right"/></span>
                                                    </Box>
                                                    <ErrorMessage name='instagramLink' component="div"
                                                                  className="error"/>
                                                </Grid>
                                                <Grid xs={12} className="mb-3" id="other">
                                                    <label htmlFor="otherlinks" className="form-label">Other
                                                        Link <span>(Optional)</span></label>
                                                    <TextField type="text" id="otherlinks" className="form-control"
                                                               name="otherLinks"
                                                               value={values.otherLinks}
                                                               onChange={handleChange}
                                                               autoComplete="off"
                                                               placeholder="https://" variant="standard"
                                                               InputProps={{
                                                                   disableUnderline: true,
                                                               }}/>
                                                    {inputList}
                                                </Grid>
                                                <Grid xs={12} className="mb-3">
                                                    <input type="button" onClick={AddInputLinkListBox}
                                                           defaultValue="+ Add Link" id="addButton"/>
                                                </Grid>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="">About your brand</label>
                                                    <TextField
                                                        inputProps={{
                                                            maxlength: CHARACTER_LIMIT,
                                                        }}
                                                        sx={{
                                                            '.MuiOutlinedInput-notchedOutline': {
                                                                border: 'none',
                                                                outline: 'none'
                                                            },
                                                        }}
                                                        id="validationCustom04"
                                                        name="brandMessage"
                                                        autoComplete="off"
                                                        className="form-control remove-bottom-border"
                                                        value={values.brandMessage}
                                                        placeholder="Tell us a bit about what you do"
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
                                                <Grid xs={12} className="mb-3">
                                                    <TextField
                                                        inputProps={{
                                                            maxlength: CHARACTER_LIMIT,
                                                        }}
                                                        sx={{
                                                            '.MuiOutlinedInput-notchedOutline': {
                                                                border: 'none',
                                                                outline: 'none'
                                                            },
                                                        }}
                                                        className="form-control remove-bottom-border"
                                                        id="validationCustomaboutbrand"
                                                        autoComplete="off"
                                                        value={values.chefsMessage}
                                                        placeholder="Tell us why you want to join Chefs-à-Porter"
                                                        helperText={`${values.chefsMessage.length}/${CHARACTER_LIMIT} Characters`}
                                                        onChange={handleChange("chefsMessage")}
                                                        margin="normal"
                                                        variant="outlined"
                                                        fullWidth
                                                        multiline
                                                        rows={1}
                                                        autoComplete="off"
                                                    />
                                                </Grid>
                                                <Grid xs={12} className="mb-3">
                                                    <label htmlFor="validationCustom05">Work
                                                        Samples <span>(Required)</span></label>
                                                    <Box className="form-group files">
                                                        <input type="file" className="form-control"
                                                               title="Choose a video please" id="aa"
                                                               name="workSampleFile"
                                                               value={values.workSampleFile}
                                                               onChange={handleChange,pressed}/>
                                                        <Box className="upload-files">
                                                            <img src={uploadCloud}
                                                                 style={{width: '24px', height: '24px'}}
                                                                 alt=""/>
                                                            <label className="file-upload-label" id="fileLabel"><u>Choose
                                                                a
                                                                File</u></label>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid xs={12} className="col-lg-12">
                                                    <button className="btn btn-primary" type="submit">Submit</button>
                                                    <p className="agree">By continuing you agree to the Terms of USe,
                                                        Privacy
                                                        Policy and Community Standards of Chefs à Porter </p>
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
export default BecomePartner