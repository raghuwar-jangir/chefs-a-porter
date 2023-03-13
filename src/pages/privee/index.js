import React, {useState} from "react";
import {Box, MenuItem, Select, styled, Grid, TextField, Typography} from "@mui/material";
import {MobileView} from "react-device-detect";
import PriveeDining from "../../components/PriveeDining";
import PriveeLogo from '../../assets/images/priveeLogo.png';
import DownArrow from '../../assets/images/down-arrow.png';
import priveeEx from '../../assets/images/privee-ex.png';
import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarComponent";
import NeedHelp from "../../components/NeedHelp";
import priveeVideo from "../../assets/video/privee.mp4";
import FooterEnd from "../../components/FooterEndSection";
import moment from "moment/moment";
import {Formik, Form} from "formik";
import * as _ from "lodash";
import PriveeComponentSlider from "../../components/PriveeComponentSlider";
import {DatePickerInput} from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';
import TemptedYet from "../../components/TemptedYet";
import ExperienceCarousel from "../../components/ExperienceCarousel";
import AvlExperienceCarousel from "../../components/AvlExperienceCarousel";
import avlExp1 from "../../assets/images/avl-exp1.jpg";
import avlExp2 from "../../assets/images/avl-exp2.jpg";
import '../../assets/styles/fontStyle.css';
import PriveeRatingComponent from "../../components/PriveeRatingComponent";
import PriveeQuestions from "../../components/PriveeQuestions";
import {navigate} from "gatsby";

const MainBoxContent = styled(Box)({
    position: 'relative',
    ".header-club": {
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#080B0E',
    },
    '.super-club-text': {
        fontSize: '24px',
        lineHeight: '36px',
        fontWeight: '700',
        padding: '0px 31px',
        position: 'absolute',
        color: '#FBFBFB',
        width: '100%',
        bottom: '47px',
        textAlign: 'center',
    },
    ".supper-club-image": {
        display: 'block'
    }
})

const BoxWrapper = styled(Box)(() => ({
    ".available-experiences": {
        display: 'none',
        padding: "40px 120px",
        background: "#080B0E"
    },
    ".experience-form-box": {
        padding: "85px 120px",
        background: "#DCD7CB",
        height: '100%'
    },
    ".display-text": {
        fontWeight: 700,
        fontSize: "36px",
        lineHeight: "36px"
    },
    '.chef-header': {
        fontFamily: 'Bon Vivant',
        fontSize: '36px',
        lineHeight: '45px',
        // fontWeight: 700,
        color: '#FBFBFB',
        textAlign: 'center',
        paddingBottom: '40px'
    },
    '.home-banner': {
        marginTop: '80px'
    },
    '.container-fluid': {
        padding: '0px',
        margin: '0px',
        position: 'relative',
    },
    '.home-banner-video': {
        width: '100%',
        height: '600px',
        objectFit: 'cover',
        display: 'block',
    },
    '.video-overlays': {
        position: 'relative'
    },
    '.justify-content-center': {
        padding: '0px',
        margin: '0px',
        position: 'relative',
    },
    '.arrows': {
        position: 'absolute',
        bottom: '28px',
        display: 'block',
        left: '0px',
        right: '0px',
        margin: '0 auto',
        '-moz-animation': 'bounce 2s infinite',
        '-webkit-animatio': 'bounce 2s infinite',
        animation: 'bounce 2s infinite,'
    },
    '.home-text': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '36px',
        textAlign: 'center',
        color: '#FBFBFB',
        position: 'absolute',
        left: '0px',
        right: '0px',
        bottom: '42px',
    },
    '.down-arrow-op': {
        opacity: '0.38',
    },
    '.arrows img': {
        display: 'block',
        margin: '0 auto',
        width: '15px',
        height: '8px',
        objectFit: 'contain',
    },

    //how it works
    '.how-work': {
        padding: '80px 350px',
        background: '#101418',
    },
    '.how-work-heading': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '30px',
        textAlign: 'center',
        letterSpacing: '0.06em',
        color: '#FBFBFB',
        marginBottom: '20px',
    },
    '.step-1-heading': {
        width: '220px',
        height: '100px',
        fontFamily: "Bon Vivant",
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '80px',
        lineHeight: '100px',
        textAlign: 'center',
        background: 'linear-gradient(132.43deg, #C19F5F 36.47%, #EECD8D 44.71%, #FFE8B9 52.12%, #DBAE5B 64.92%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
    },
    '.how-steps': {
        display: 'flex',
        placeContent: 'space-between',
        position: 'relative',
    },
    '.how-steps:before': {
        content: '""',
        width: '100%',
        position: 'absolute',
        top: '37px',
        margin: 'auto',
        height: '0.25px',
        background: '#C6A87D',
        zIndex: 0,
    },
    '.step-1-detail': {
        fontFamily: 'ProximaNovaA-Regular',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '20.8833px',
        lineHeight: '30px',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#FBFBFB',
        display: 'block',
        marginBottom: '8px',
    },
    '.step-1': {
        position: 'relative',
        zIndex: '1',
        background: '#101418',
    },
    '.step-1-sub-detail': {
        fontFamily: 'Proxima Nova Alt',
        fontStyle: 'normal',
        fontWeight: '250',
        fontSize: '18px',
        lineHeight: '19px',
        textAlign: 'center',
        color: '#FBFBFB',
        display: 'block',
        marginBottom: '0px',
    },
    //privee-exp
    '.privee-exp': {
        backgroundColor: 'rgba(220, 215, 203, 1)',
    },
    '.px-0': {
        paddingRight: '0!important',
        paddingLeft: '0!important',
        width: '100%'
    },
    '.m-0': {
        margin: '0'
    },
    '.privee-container': {
        display: 'flex',
        width: '100%'
    },
    '.privee-ex-img': {
        width: '100% !important',
        height: '537px',
        objectFit: 'cover',
        verticalAlign: 'middle'
    },
    '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
        height: '10px',
        padding: '5px',
        fontSize: '20px',
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
    '.px-last': {
        padding: '60px 120px 30px 120px',
        width: '75%'
    },
    '.exp-heading': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '30px',
        textAlign: 'center',
        letterSpacing: '0.06em',
        color: '#080B0E',
        marginBottom: '40px',
    },
    '.capital-date-format .css-1x51dt5-MuiInputBase-input-MuiInput-input': {
        textTransform: 'uppercase',
        fontFamily: 'Proxima Nova',
        fontSize: '16px',
        lineHeight: '19px',
    },
    '.react-datepicker-component .react-datepicker-input input': {
        paddingLeft: '5px',
        color: '#080B0E',
        fontSize: '20px',
        fontWeight: '100',
        fontFamily: 'Proxima Nova Alt',
    },
    '.icon-rc-datepicker': {
        color: '#080B0E !important',
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
        color: '#080B0E !important',
    },
    '.react-datepicker-component .react-datepicker-input.is-open': {
        background: 'transparent',
        border: '0px',
        borderRadius: '0px',
    },
    '.form-group': {
        marginBottom: '30px',
        position: 'relative',
    },
    '.diners': {
        fontFamily: 'Proxima Nova Alt',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '20px',
        lineHeight: '19px',
        color: '#080B0E',
        marginBottom: '8px',
        display: 'block',
    },
    '.d-flex': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    '.input-group-btn button': {
        width: '24px',
        height: '24px',
        borderRadius: '0px',
        color: '#080B0E',
        background: 'transparent',
        border: '0.25px solid #080B0E',
    },
    '.input-group-btn button:disabled': {
        opacity: '0.65',
    },
    '.plus button': {
        background: '#080B0E',
        borderRadius: '0px',
        color: '#FBFBFB',
    },
    '.input-group-btn .btn': {
        position: 'relative',
        zIndex: '2',
    },
    '.qty': {
        width: '100',
        placeItems: 'center',
        display: 'flex',
        // placeContent: 'space-between',
        justifyContent: 'space-evenly'
    },
    '.btn-primary': {
        width: '100%',
        background: 'transparent',
        border: '0.5px solid #080B0E',
        borderRadius: '0px',
        padding: '15px 10px',
        fontFamily: 'ProximaNovaA-Regular',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '20px',
        lineHeight: '19px',
        color: '#080B0E',
        cursor: 'pointer',
    },
    '.exp-btn': {
        width: '100%',
        background: 'transparent',
        marginTop: '40px',
        border: '1px solid #C6A87D',
        borderRadius: '0px',
        padding: '15px 10px',
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#FBFBFB',
        cursor: 'pointer',
    },

    "@media(width = 1440px)": {
        ".experience-form-box": {
            padding: '38px 120px'
        }
    },

    "@media (min-width: 1px) and (max-width:425px)": {
        '.home-banner': {
            marginTop: '0px'
        },
        '.how-work': {
            padding: '10px 15px',
            width: 'auto',
        },
        '.step-1-heading': {
            width: 'auto'
        },
        ".experience-form-box": {
            padding: "0px",
            background: "#DCD7CB"
        },
        ".available-experiences": {
            display: 'block',
            padding: "40px 16px",
            background: "#101418"
        },
        ".frequently-questions-box": {
            padding: '0px'
        },
        ".display-text": {
            fontSize: "24px",
        },
        '.chef-header': {
            fontSize: '24px',
            lineHeight: '30px',
            paddingBottom: '20px'
        },
        '.px-last': {
            padding: '30px',
            width: 'auto'
        },
        '.privee-container': {
            display: 'block'
        },
    },
    "@media (min-width: 1px) and (max-width:767px)": {
        '.step-1-heading': {
            width: '80px',
            // height: '50px',
            fontWeight: '400',
            fontSize: '40px',
        },
        '.how-steps:before': {
            top: '50px',
        },
        '.step-1-detail': {
            fontSize: '12px',
            lineHeight: '18px',
        },
        '.step-1-sub-detail': {
            fontSize: '12px',
            lineHeight: '18px',
        },
    },
    "@media (min-width: 1000px) and (max-width:1024px)": {
        '.px-last': {
            padding: '30px 120px',
            width: '60%'
        },
    },
    "@media (min-width: 700px) and (max-width:768px)": {
        '.px-last': {
            padding: '30px 120px',
            width: 'auto'
        },
        '.privee-container': {
            display: 'block'
        },
        '.home-banner': {
            marginTop: '0px'
        }
    },
    "@media (min-width: 768px) and (max-width:1460px)": {
        '.how-work': {
            padding: '50px 15px',
            width: 'auto',
        },
    },
}))
const PriveePage = () => {
    const [search, setSearch] = useState(false);

    const handleChange = () => {
        setSearch(true);
    }

    let [count, setCount] = useState(1);
    let Qty = 10;

    function incrementCount() {
        if (count < Qty) {
            count = count + 1;
            setCount(count);
        }
    }

    function decrementCount() {
        if (count > 0) {
            count = count - 1;
            setCount(count);
        }
    }

    const handleClick = () => {
        navigate('/privee-viewmore', {state: true});
    }

    // const styles = theme => ({
    //     input: {
    //         width: 40
    //     },
    //     button: {
    //         width: 40
    //     },
    //     selectRoot: {
    //         width: 40,
    //     },
    //     select: {
    //         width: 40,
    //     }
    // });

    return (
        <React.Fragment>
            <BoxWrapper>
                <Navbar isColor={true} heading="Privee"/>
                <MainBoxContent>
                    {/* //! privee header section for title */}
                    <MobileView>
                        <Box className='header-club'>
                            <img src={PriveeLogo} alt="privee-logo" className='privee-image'/>
                        </Box>
                    </MobileView>
                    {search &&
                        <Box className='search-box'>
                            <input type='search' placeholder='Search supper club, city...' className='supper-search'/>
                        </Box>
                    }

                </MainBoxContent>
                <Box className="home-banner">
                    <Box className="container-fluid">
                        <Box className="justify-content-center">
                            <Box id="video_overlays">
                                <video autoPlay muted loop className='video' className="home-banner-video">
                                    <source src={priveeVideo} type="video/mp4"/>
                                </video>
                            </Box>
                            <Box className="arrows">
                                <Typography className="home-text">Let’s Elevate Your Dining.</Typography>
                                <img src={DownArrow} alt="down" className="down-arrow-op"/>
                                <img src={DownArrow} alt="down" className="down-arrow"/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="how-work">
                    <Typography className="how-work-heading">How it works</Typography>
                    <Box className="how-steps">
                        <Box className="step-1">
                            <Typography className="step-1-heading">1</Typography>
                            <span className="step-1-detail">CHOOSE</span>
                            <span className="step-1-sub-detail">The perfect fit</span>
                        </Box>
                        <Box className="step-1">
                            <Typography className="step-1-heading">2</Typography>
                            <span className="step-1-detail">CUSTOMIZE</span>
                            <span className="step-1-sub-detail">Make it unique</span>
                        </Box>
                        <Box className="step-1">
                            <Typography className="step-1-heading">3</Typography>
                            <span className="step-1-detail">CLOSE</span>
                            <span className="step-1-sub-detail">Let's shake on it</span>
                        </Box>
                    </Box>
                </Box>
                <Box className="privee-exp">
                    <Box className="container-fluid px-0">
                        <Box className="privee-container m-0">
                            <Box className="px-0">
                                <img src={priveeEx} alt="" className="privee-ex-img"/>
                            </Box>
                            <Box className="px-last">
                                <Typography className="exp-heading">Book an Experience</Typography>
                                <Formik
                                    initialValues={{
                                        city: 'Mumbai',
                                        date: new Date(),
                                        experience: 'Experiences',
                                        numberOfDiner: ''
                                    }}
                                    onSubmit={(values) => {
                                        console.log(values.date)
                                        const experienceData = {
                                            ...values,
                                            date: moment(_.get(values, 'date')).format('DD/MM/YYYY'),
                                            numberOfDiner: count,
                                        }
                                        console.log("value===>", values)
                                        console.log("experienceData===>", experienceData)
                                    }}
                                >
                                    {({values, handleChange, handleSubmit, setFieldValue}) => (
                                        <Form onSubmit={handleSubmit}>
                                            <Box className="form-group">
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
                                                        '.MuiSelect-select': {
                                                            padding: '0px 5px',
                                                            fontSize: '20px',
                                                            fontWeight: '100'
                                                        }
                                                    }}
                                                    MenuProps={{
                                                        PaperProps: {
                                                            sx: {
                                                                backgroundColor: '#DCD7CB !important',
                                                                li: {
                                                                    borderBottom: "1px solid black",
                                                                    fontSize: '20px',
                                                                    fontWeight: '100'
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
                                                                }
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
                                            <Box className="form-group">
                                                <DatePickerInput
                                                    name="date"
                                                    value={values.date}
                                                    displayFormat="DD/MM/YYYY"
                                                    returnFormat="DD/MM/YYYY"
                                                    className="form-control"
                                                    onChange={(dateString) => setFieldValue('date', dateString)}
                                                    defaultValue={values.date}/>

                                            </Box>
                                            <Box className="form-group">
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    name="experience"
                                                    value={values.experience}
                                                    onChange={handleChange}
                                                    defaultValue={values.experience}
                                                    className="selectpicker my-select dropdown-toggle form-control"
                                                    sx={{
                                                        '.MuiOutlinedInput-notchedOutline': {border: 0},
                                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                            border: 'none',
                                                        },
                                                        '.MuiSelect-select': {
                                                            padding: '0px 5px',
                                                            fontSize: '20px'
                                                        }
                                                    }}
                                                    MenuProps={{
                                                        PaperProps: {
                                                            sx: {
                                                                backgroundColor: '#DCD7CB !important',
                                                                li: {
                                                                    borderBottom: "1px solid black",
                                                                    fontSize: '20px',
                                                                    fontWeight: '100'
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
                                                                '.MuiSelect-select': {
                                                                    padding: '5px !important',
                                                                    fontSize: '17px',
                                                                },
                                                            },
                                                        },
                                                    }}
                                                >
                                                    <MenuItem value="Experiences">Experiences</MenuItem>
                                                    <MenuItem value="Cocktail">Cocktail</MenuItem>
                                                    <MenuItem value="Brunch">Brunch</MenuItem>
                                                    <MenuItem value="High Tea">High Tea</MenuItem>
                                                    <MenuItem value="Lunch">Lunch</MenuItem>
                                                    <MenuItem value="Dinner">Dinner</MenuItem>
                                                </Select>
                                            </Box>
                                            <Box className="form-group d-flex">
                                                <Box><label className="diners">Number of diners</label></Box>
                                                <Box className="input-group qty">
                                                <span className="input-group-btn">
                                                     <button type="button"
                                                             className="btn btn-default btn-number"
                                                             disabled={count == 1 ? true : false}
                                                             data-type="minus"
                                                             onClick={decrementCount}>-
                                                     </button>
                                                </span>
                                                    <TextField type="text" name="numberOfDiner" id="Qty"
                                                               name="numberOfDiner"
                                                               onChange={handleChange}
                                                               value={values.numberOfDiner}
                                                               value={count}
                                                               className="input-number"
                                                        // value={count}
                                                               InputProps={{
                                                                   sx: {
                                                                       width: "25px", background: 'transparent',
                                                                       border: '0px',
                                                                       fontFamily: 'Proxima Nova',
                                                                       fontStyle: 'normal',
                                                                       fontWeight: '400',
                                                                       fontSize: '14px',
                                                                       color: '#080B0E',
                                                                       lineHeight: '17px',
                                                                       paddingLeft: '0px',
                                                                       paddingRight: '0px',
                                                                       flex: 'none',
                                                                       textAlign: 'center',
                                                                   },
                                                               }}
                                                               autoComplete={"off"} sx={{
                                                        '.MuiOutlinedInput-notchedOutline': {
                                                            border: 'none',
                                                            outline: 'none',
                                                        },
                                                        '& .MuiInputBase-input': {
                                                            width: "25px", background: 'transparent',
                                                            border: '0px',
                                                            fontFamily: 'Proxima Nova',
                                                            fontStyle: 'normal',
                                                            fontWeight: '400',
                                                            fontSize: '14px',
                                                            color: '#080B0E',
                                                            lineHeight: '17px',
                                                            paddingLeft: '0px',
                                                            paddingRight: '0px',
                                                            flex: 'none',
                                                            textAlign: 'center'
                                                        },
                                                    }}
                                                    />
                                                    <span className="input-group-btn plus">
                                                <button type="button"
                                                        className="btn btn-default btn-number"
                                                        disabled={count == 10 ? true : false}
                                                        data-type="plus"
                                                        onClick={incrementCount}>+
                                                </button>
                                                </span>
                                                </Box>
                                            </Box>
                                            <Box className="form-group">
                                                <button type="submit" className="btn btn-primary"
                                                        onClick={handleClick}>View Experiences
                                                </button>
                                            </Box>
                                        </Form>
                                    )}
                                </Formik>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <ExperienceCarousel/>
                <Box className="available-experiences mobile-view">
                    <Typography className="chef-header">Available Experiences</Typography>
                    <Grid container spacing={2}>
                        <Grid item xl={4} md={4} sm={6} xs={12}>
                            <AvlExperienceCarousel image={avlExp1} description={'by Chef Mako Ravindran'}
                                                   subDescription={'Starting from ₹5000 per diner'}/>
                        </Grid>
                        <Grid item xl={4} md={4} sm={6} xs={12}>
                            <AvlExperienceCarousel image={avlExp2} description={'by Chef Mako Ravindran'}
                                                   subDescription={'Starting from ₹5000 per diner'} isLabelShow={true}/>
                        </Grid>
                    </Grid>
                    <button type="submit" className="exp-btn">View More</button>
                </Box>
                <PriveeRatingComponent/>
                <PriveeComponentSlider/>
                <Box className="frequently-questions-box">
                    <PriveeQuestions/>
                </Box>
                <TemptedYet title={'Book an Experience'} isTempted={true}/>
                <NeedHelp/>
                <Footer/>
                <FooterEnd/>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default PriveePage;