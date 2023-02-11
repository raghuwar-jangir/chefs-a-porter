import React from 'react';
import {Box, Button, Grid, List, ListItemIcon, Stack, TextField, Typography} from '@mui/material';
import {styled} from '@mui/system';
import {MobileView} from 'react-device-detect';
import FrontFood from '../components/FrontFood';
import PriveeMain from '../components/PriveeMain';
import RatingCarousel from '../components/RatingCarousel';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import MainFoodDetailng from '../components/MainFoodDetailng';
import NeedHelp from "../components/NeedHelp";
import Navbar from "./navbar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {Link} from "gatsby";
import LightThemeIcon from "../assets/images/lightThemeIcon.png";
import JoinTableImg from "../assets/images/jointhetable.png";
import priveeVideo from "../assets/video/privee.mp4";
import supperVideo from "../assets/video/supper.mp4";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import footerArrow from "../assets/images/footer-arrow.png";


const MainBoxContent = styled(Box)({
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#DCD7CB'
})

const BoxWrapper = styled(Box)({
    '.main-container': {
        position: 'relative'
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
        color: '#080B0E'
    },
    '.main-container:hover .overlay': {
        bottom: 0,
        height: '100%',
        padding: '40px 16px'
    },
    '.main-container:hover .supper-overlay': {
        bottom: 0,
        height: '100%',
        padding: '40px 16px'
    },
    '.container': {
        // border: '1px solid red',
        justifyContent: 'center',
        padding: '80px 0px',
        backgroundColor: '#101418'
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
        background: '#101418', padding: '80px 0px',
    },
    '.privee-title-hover': {
        fontSize: '32px',
        textAlign: 'center',
        color: '#FBFBFB',
        paddingTop: '15px'
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
        paddingTop: '15px'
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
        marginBottom: '20px'
    },
    '.footer-text': {
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: "#222222",
        padding: '18px',
    }, '.footer-item': {
        color: '#DCD7CB',
    },
    '.MobileLightThemeIcon': {
        paddingRight: '40px',
    },
    '.css-oacx5d': {
        padding: '10px'
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
        marginBottom: '8px'
    },
    '.privee-card-details': {
        fontFamily: 'Proxima Nova',
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
        fontFamily: 'Proxima Nova',
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
        width: '66.66666667%'
    },
    '.video': {
        width: '100%',
        height: '412px',
        objectFit: 'cover',
    },
    '.row': {
        display: 'flex'
    },
    '.supper-desktop': {
        background: '#DCD7CB',
        padding: '50px 120px',
    },
    '.supper-card-title': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        fontweight: '400',
        fontSize: '32px',
        lineHeight: '40px',
        color: '#080B0E',
        marginBottom: '8px'
    },
    '.supper-card-details': {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#080B0E',
        marginBottom: '20px',
    },
    '.supper-card-link': {
        background: '#080B0E',
        padding: '18px',
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: '400',
        width: '70%',
        fontFamily: 'Proxima Nova',
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
        width:'100%'
    },
    '.join-table-heading': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        fontSize: '20px',
        lineHeight: '25px',
        color: '#FBFBFB',
        marginBottom: '8px',
    },
    '.join-table-details': {
        fontFamily: 'Proxima Nova',
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
        width: '952px !important'
    },
    '.join-table-image':{
        padding: '0px',
    },
    '.find-us':{
        display: 'flex'
    },
    '.find-us-title': {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '19px',
        letterSpacing: '-0.01em',
        color: '#FBFBFB',
        marginRight: '10px',
        marginBottom: '0px',
        marginTop: '7px',
    },
    '.join-table-title':{
        padding: '109px 200px 0px 120px'
    },
    '.social-icon': {
        display: 'flex',
        alignItems: 'center',
        placeContent: 'flex-end',
        cursor:'pointer'
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
        width:'100%',
        height: "36px !important",
        marginBottom:'20px'
    },
    '.btn': {
        background: "#C6A87D",
        fontSize: '14px !important',
        lineHeight: "25px",
        borderRadius: "0px",
        color: "#080B0E",
        height: "36px !important",
        width:'50px !important',
        borderColor: '#C6A87D',
        margin:'0px',
        textTransform: "capitalize !important"
    },
    ".btn:hover": {color: "#080B0E", background: "#C6A87D",},
    '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
        borderRadius: '0px',
        fontSize: '14px'
    },
    '.sign-in': {
        color: '#C6A87D !important',
        textDecoration: 'underline !important',
    },
    // !media query for mobile device demo component(Privee and supperClub)

    '@media(min-width: 1px) and (max-width: 425px)': {
        '.img-box': {
            padding: '40px 0px'
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
            padding: '40px 16px'
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
            width: "100%"
        },
        '.book-btn': {
            fontSize: '12px',
            fontWeight: 300,
            padding: '5px',
            marginBottom: '20px'
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
            width: "100%"
        },
        '.view-btn': {
            fontSize: '12px',
            fontWeight: 300,
            padding: '5px',
            marginBottom: '16px'
        },
    }
})

function FooterMobile() {
    return null;
}

const HomePage = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <BoxWrapper>

                {/* //! Header for home Screen with title (Mobile-screen)  */}

                <MobileView>
                    <MainBoxContent>
                        <img src={LightThemeIcon} alt="title-text" className='MobileLightThemeIcon'/>
                    </MainBoxContent>
                </MobileView>
                {/* //! Browser view for main-home screen */}

                <FrontFood/>
                <Box className="privee-desktop">
                    <Box className="row">
                        <Box className="privee-video">
                            <video autoPlay muted loop className='video'>
                                <source src={priveeVideo} type="video/mp4"/>
                            </video>
                        </Box>
                        <Box className="privee-details">
                            <Typography className="privee-card-title">Privee</Typography>
                            <Typography className='privee-card-details'>Dine in the comfort of your home with friends
                                and family</Typography>
                            <Typography><a href="/privee.html" className="privee-card-link">View
                                Experiences</a></Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="supper-desktop">
                    <Box className="row">
                        <Box className="supper-details">
                            <Typography className="supper-card-title">Supper Club</Typography>
                            <Typography className='supper-card-details'>Experience a shared meal at bespoke
                                locations</Typography>
                            <Typography><a href="/privee.html" className="supper-card-link">Book a Supper
                                Club</a></Typography>
                        </Box>
                        <Box className="privee-video">
                            <video autoPlay muted loop className='video'>
                                <source src={supperVideo} type="video/mp4"/>
                            </video>
                        </Box>

                    </Box>
                </Box>
                <PriveeMain title='Continue Browsing' subTitle='Chef s you ve checked out previously'/>
                {/* <FoodDetailing /> */}
                <MainFoodDetailng/>
                <PriveeMain title='Chefs available for private dining this month' isButtonShow={true}/>
                <RatingCarousel/>
                <Box className="join-table join-table1">
                    <Box className="container-fluid">
                        <Box className="row">
                            <Box className="join-table-image">
                                <img src={JoinTableImg} alt="Join The Table" className="jtable-img"/>
                            </Box>
                            <Box className="join-table-title">
                                <Typography className='join-table-heading'>Join our table</Typography>
                                <Typography className='join-table-details'>Receive recipes , tips and tricks from top chefs from around the globe, and exclusive
                                    offers right to your inbox.</Typography>
                                <form action="" accept-charset="UTF-8" method="get">
                                    <Box className="input-group">
                                        <Box className='input-group'>
                                            <Box style={{width: '100%',display:'flex'}}>
                                                <TextField className='input-field' id='email-address' size='small'
                                                           placeholder='Your email address' variant='outlined'  InputProps={{
                                                    disableUnderline: true}}/>
                                                <Button className='btn'>Submit</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </form>
                                <Typography className="join-table-details">By signing up, I agree to Chef’s a porter’s <a
                                    href="" className='sign-in'>T&C’s</a> and <a href="" className='sign-in'>Privacy
                                    Policy</a></Typography>
                                <Box className="find-us">
                                    <Typography className="find-us-title">Find us on:</Typography>
                                    <Box className="social-icon">
                                        <InstagramIcon className='icon'/>
                                        <LinkedInIcon className='icon'/>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Questions/>
                <NeedHelp/>
                <Footer/>
                <Box className="footer-end">
                    <Stack className='footer-text'
                           Boxider={<FiberManualRecordIcon sx={{fontSize: '6px', color: '#C6A87D'}}/>}
                           direction="row" spacing={2}>
                        <Link className='footer-item' to='/'> FAQs </Link>
                        <Link className='footer-item' to='/'> Privacy Policy </Link>
                        <Link className='footer-item' to='/'> T&C </Link>
                    </Stack>
                </Box>
                {/* <PrivateProfile /> */}
                {/* <DiningPage /> */}
            </BoxWrapper>
        </React.Fragment>
)
}
export default HomePage;