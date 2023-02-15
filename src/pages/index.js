import React from 'react';
import {
    Box,
    Button,
    Grid,
    ImageList,
    ImageListItem,
    List,
    ListItemIcon,
    Stack,
    TextField,
    Typography
} from '@mui/material';
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
import {isMobile} from "react-device-detect";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Treaty from "../components/Treaty";
import gallery1 from "../assets/images/gallery1.png";
import gallery2 from "../assets/images/gallery2.png";
import gallery3 from "../assets/images/gallery3.png";
import gallery4 from "../assets/images/team.png";
import gallery5 from "../assets/images/about3.png";
import food1 from "../assets/images/food1.png";
import food2 from "../assets/images/food2.png";
import food3 from "../assets/images/food3.png";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FooterEnd from "../components/FooterEndSection";



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
        width: '100%'
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
    '.join-table-image': {
        padding: '0px',
    },
    '.find-us': {
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
    '.join-table-title': {
        padding: '109px 200px 0px 120px'
    },
    '.social-icon': {
        display: 'flex',
        alignItems: 'center',
        placeContent: 'flex-end',
        cursor: 'pointer'
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
        width: '100%',
        height: "36px !important",
        marginBottom: '20px'
    },
    '.btn': {
        background: "#C6A87D",
        fontSize: '14px !important',
        lineHeight: "25px",
        borderRadius: "0px",
        color: "#080B0E",
        height: "36px !important",
        width: '50px !important',
        borderColor: '#C6A87D',
        margin: '0px',
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
    '.treat': {
        display: 'flex',
        justifyContent: 'center',
        background: ' #DCD7CB',
        padding: '80px 120px'
    },
    '.treaty-card': {
        display: "flex",
        justifyContent: 'center'
    },
    //gallery
    '.gallery': {
        background: '#FBFBFB',
        padding: '80px 120px',
    },
    '.gallery-heading': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        fontSize: '24px',
        lineHeight: '30px',
        letterSpacing: ' 0.06em',
        color: '#080B0E',
        textAlign: 'center',
        padding: '15px 5px',
    },
    ".gallery-btn": {
        fontStyle: 'normal',
        lineHeight: '24px',
        marginRight: '0px',
        border: '1px solid #222222',
        width: '100% !important',
        fontFamily: 'Proxima Nova',
        fontSize: "20px !important",
        fontWeight: '600',
        borderRadius: "0px",
        color: "#080B0E !important",
        backgroundColor: 'unset !important',
        textTransform: "capitalize",
        height: "55px !important",
        padding: '14px !important',
    },
    '.mobileView-gallery': {
        display: 'none',
    },
    ".gallery-btn:hover": {color: "#C6A87D!important;"},

    //fresh food from
    '.fresh-blog': {
        padding: '80px 120px'
    },
    '.fresh-food-detail': {
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        boxShadow: '0px 8px 10px rgb(0 0 0 / 6%)',
        placeItems:'center',
        alignItem: 'center',
        marginBottom: '16px'
    },
    '.fresh-food-gallery-heading': {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '30px',
        margin: '20px 0px'
    },
    '.fresh-food-img': {
        width: '250px',
        height: '160px',
        objectFit:'cover'
    },
    '.fresh-food-title': {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '150%',
        color: '#222222',
        display: 'block',
        paddingBottom: '8px',
        width:'100%'
    },
    '.fresh-food-sub-details': {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '150%',
        color: '#222222',
        display: 'block',
        paddingBottom: '8px'
    },
    '.fresh-food-heading': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        fontSize: '24px',
        lineHeight: '30px',
        letterSpacing: ' 0.06em',
        color: '#080B0E',
        textAlign: 'center',
        padding: '15px 5px',
    },
    '.fresh-food-arrow':{
        fontSize: '40px',
    },
    '.food-box':{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
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
        '.treat-card2': {
            display: 'none'
        },
        '.treaty-card': {
            display: "block",
        },
        '.treat': {
            padding: '0px'
        },
        '.gallery': {
            display: 'none'
        },
        '.mobileView-gallery': {
            display: 'block',
        },
        '.gallery-heading': {
            fontSize: '20px',
            lineHeight: '25px',
            textAlign: 'left',
            marginBottom: '16px',
            padding: '15px 12px',
        },
        '.fresh-blog': {
            padding: '15px'
        },
        '.fresh-food-sub-details': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '12px',
            lineHeight: '18px',
            color: '#222222',
        },
        '.fresh-food-title': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '30px',
            paddingBottom:'0px'
        },
        '.fresh-food-img': {
            width: '60px',
            height: '60px',
        },
    },
    '@media(min-width: 426px) and (max-width: 768px)': {
        '.treaty-card': {
            display: "block",
        },
        '.treat': {
            padding: '0px'
        },
        '.MuiImageList-root': {
            columnCount: '1 !important',
            width: 'auto'
        },
        '.fresh-food-img': {
            width: 'unset',
        },
    },
    '@media(min-width: 769px) and (max-width: 1024px)': {
        '.treat': {
            padding: '80px'
        },
        '.fresh-food-img': {
            width: 'unset',
        },
    },
})

function FooterMobile() {
    return null;
}

const HomePage = () => {
    const itemData = [
        {
            img: gallery2,
            title: 'gallery2',
        },
        {
            img: gallery1,
            title: ' gallery1',
        },
        {
            img: gallery3,
            title: 'gallery3',
            rows: 2,
            cols: 2,
        },
        {
            img: gallery4,
            title: 'gallery4',
        },
        {
            img: gallery5,
            title: 'gallery5',
        },
    ];
    const freshFoodItems= [
        {
            title:"Food Tips",
            subTitle:"Indian dishes that you can prepare at home this diwali",
            img:food1
        },
        {
            title:"Global Fusion",
            subTitle:"Recipes prepared by our chef that have a twist and are easy to make at home",
            img:food2
        },
        {
            title:"Latest Trends",
            subTitle:"Recipes prepared by our chef that have a twist and are easy to make at home",
            img:food3
        }
    ];
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
                <TestimonialCarousel/>
                <Box className="gallery">
                    <Box>
                        <Typography className='gallery-heading'>Food that makes you drool!</Typography>
                    </Box>
                    <ImageList variant="masonry"
                               sx={{width: '100%', height: '100%'}}
                               cols={3}
                               gap={20}
                               rowHeight={300}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                <Box className="mobileView-gallery">
                    <Box>
                        <Typography className='gallery-heading'>Food that makes you drool!</Typography>
                    </Box>
                    <Grid container spacing={1} sx={{padding: '10px 12px'}}>
                        <Grid item xs={12}>
                            <img src={gallery1} style={{width: '100%', height: '200px'}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={gallery2} style={{width: '48%', height: '200', paddingRight: "5px"}}/>
                            <img src={gallery3} style={{width: '48%', height: '200', paddingLeft: "5px"}}/>
                        </Grid>
                        <Grid item xs={12} spacing={2}>
                            <Button className="gallery-btn">
                                View Gallery
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box className="treat">
                    <Grid className="treaty-card">
                        <Grid className="treat-card1" item xs={6} md={4} sm={4}><Treaty/></Grid>
                        <Grid className="treat-card2" item xs={6} md={4} sm={4}><Treaty/></Grid>
                    </Grid>
                </Box>
                <Box className="join-table join-table1">
                    <Box className="container-fluid">
                        <Box className="row">
                            <Box className="join-table-image">
                                <img src={JoinTableImg} alt="Join The Table" className="jtable-img"/>
                            </Box>
                            <Box className="join-table-title">
                                <Typography className='join-table-heading'>Join our table</Typography>
                                <Typography className='join-table-details'>Receive recipes , tips and tricks from top
                                    chefs from around the globe, and exclusive
                                    offers right to your inbox.</Typography>
                                <form action="" accept-charset="UTF-8" method="get">
                                    <Box className="input-group">
                                        <Box className='input-group'>
                                            <Box style={{width: '100%', display: 'flex'}}>
                                                <TextField className='input-field' id='email-address' size='small'
                                                           placeholder='Your email address' variant='outlined'
                                                           InputProps={{
                                                               disableUnderline: true
                                                           }}/>
                                                <Button className='btn'>Submit</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </form>
                                <Typography className="join-table-details">By signing up, I agree to Chef’s a
                                    porter’s <a
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
                <Box className="fresh-blog">
                    <Typography className='fresh-food-heading'>Fresh from the blog</Typography>
                    {freshFoodItems.map((item, index) => (
                        <Box className='fresh-food-detail'>
                            <Box key={index} className="food-box">
                                <img src={item.img} className="fresh-food-img"/>
                                <Box style={{marginLeft: '20px'}}>
                                    <Typography className='fresh-food-title'>{item.title}</Typography>
                                    <Typography className='fresh-food-sub-details'>{item.subTitle}</Typography>
                                </Box>
                            </Box>
                            <Box><KeyboardArrowRightIcon className="fresh-food-arrow"/></Box>
                        </Box>
                    ))}
                </Box>
                <NeedHelp/>
                <Footer/>
               <FooterEnd/>
                {/* <PrivateProfile /> */}
                {/* <DiningPage /> */}
            </BoxWrapper>
        </React.Fragment>
    )
}
export default HomePage;