import React from "react";
import { Avatar, Box, Button, Grid, ImageList, ImageListItem, Stack, styled, Typography } from "@mui/material";
import IntroChefImg1 from "../assets/images/IntroChefImg1.png"
import IntroChefImg2 from "../assets/images/introChefImg2.png"
import InfiniteCarousel from 'react-leaf-carousel';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const TeamCarousel = (props) => {

    const BoxWrapper = styled(Box)(() => ({
        ".title":{
            fontFamily: 'Bon Vivant',
            fontStyle: "normal",
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '25px',
            textAlign: 'center',
            color: '#FBFBFB',
            marginBottom: '8px'
        },
        '.InfiniteCarouselArrowIcon':{
            padding: "7px",
            borderWidth: '0px 3px 3px 0'
        },
        '.social-icon': {
            display: 'flex',
            alignItems: 'center',
            placeContent: 'center',
            marginTop: "30px"
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
        ".slider-background":{
            background: '#101418',
            padding:'40px'
        },
        ".slider-img":{
            width:'132px',
            display:'block',
            margin:'auto',
            marginBottom: '30px'
        },
        ".position-title":{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            textAlign: 'center',
            color: '#FBFBFB',
            marginBottom: '30px',
            display: 'block'
        },
        ".position-details":{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '24px',
            textAlign: 'center',
            color: '#FBFBFB',
            marginBottom: '30px',
            width: '100%',
            whiteSpace:'normal'
        },
        ".InfiniteCarouselArrowNext": {
            left: "98% !important"
        },
        '.InfiniteCarouselArrowPrev': {
            left: '0%'
        },
        '.InfiniteCarouselDots': {
            top:'99%'
        },
        '.InfiniteCarouselDotActiveIcon': {
            backgroundColor: "#C6A87D !important",
            border: '1px solid white',
            width: '14px',
            height: '14px'
        },
        '.InfiniteCarouselDotIcon':{
            border: '1px solid white',
            backgroundColor:'black'
        },
        ".details": {
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "24px",
            textAlign: 'center',
        },
        ".btn": {
            background: "#C6A87D",
            fontSize: "16px",
            lineHeight: "19px",
            borderRadius: "0px",
            color: "#080B0E",
            textTransform: "capitalize",
            marginTop: "40px",
            padding: "10px"
        },
        '.btn:active':{
            backgroundColor:"#C6A87D",
            color:'white'
        },
        '.btn:focus':{
            color:'white'
        },
        ".positions": {
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px",
            paddingBottom: '16px'
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            ".btn": {
                width: '100%'
            },
            '.social-icon': {
                display: 'flex',
                alignItems: 'center',
                justifyContent:'center'
            },
            '.icon': {
                display: 'flex',
                placeContent: 'flex-end',
                color: 'black',
                background: '#fff !important',
                padding: '4px',
                borderRadius: '100%',
                marginRight: ' 6px',
            },
            '.InfiniteCarouselScrollTrack':{
                display:'flex !important',
                flexDirection:'column !important',
                height:'1013px !important'
            }
        },
        "@media (min-width: 768px) and (max-width:2560px)": {
            '.btn':{
                display:'none'
            }
        }

    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                <Box sx={{ background: "#080B0E", padding: "40px 16px" }}>
                    <InfiniteCarousel
                        breakpoints={[
                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 0,
                                    dots:'false',
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                },
                            },
                        ]}
                        dots={true}
                        infinte={true}
                        swipe={true}
                        animationDuration={500}
                        showSides={false}
                        sidesOpacity={0.5}
                        sideSize={0.1}
                        slidesToScroll={1}
                        slidesToShow={3}
                        scrollOnDevice={true}
                    >
                        <Box className="slider-background" >
                            <img className="slider-img"
                                 alt=""
                                 src={IntroChefImg1}
                            />
                            <Typography className="title">Chef Anou Boccasam</Typography>
                            <Typography className="position-title">Founder</Typography>
                            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
                            <Box className='social-icon'>
                                <InstagramIcon className='icon'/>
                                <LinkedInIcon className='icon'/>
                            </Box>
                        </Box>
                        <Box className="slider-background">
                            <img className="slider-img"
                                 alt=""
                                 src={IntroChefImg2}
                            />
                            <Typography className="title">Chef Mako Ravindran</Typography>
                            <Typography className="position-title">Chief Chef Curating Officer</Typography>
                            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
                            <Box className='social-icon'>
                                <InstagramIcon className='icon'/>
                                <LinkedInIcon className='icon'/>
                            </Box>
                        </Box>
                        <Box className="slider-background">
                            <img className="slider-img"
                                 alt=""
                                 src={IntroChefImg1}
                            />
                            <Typography className="title">Chef Anou Boccasam</Typography>
                            <Typography className="position-title">Founder</Typography>
                            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
                            <Box className='social-icon'>
                                <InstagramIcon className='icon'/>
                                <LinkedInIcon className='icon'/>
                            </Box>
                        </Box>
                        <Box className="slider-background">
                            <img className="slider-img"
                                 alt=""
                                 src={IntroChefImg2}
                            />
                            <Typography className="title">Chef Mako Ravindran</Typography>
                            <Typography className="position-title">Chief Chef Curating Officer</Typography>
                            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
                            <Box className='social-icon'>
                                <InstagramIcon className='icon'/>
                                <LinkedInIcon className='icon'/>
                            </Box>
                        </Box>
                        <Box className="slider-background">
                            <img className="slider-img"
                                 alt=""
                                 src={IntroChefImg1}
                            />
                            <Typography className="title">Chef Anou Boccasam</Typography>
                            <Typography className="position-title">Founder</Typography>
                            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
                            <Box className='social-icon'>
                                <InstagramIcon className='icon'/>
                                <LinkedInIcon className='icon'/>
                            </Box>
                        </Box>
                        <Box className="slider-background">
                            <img className="slider-img"
                                 alt=""
                                 src={IntroChefImg2}
                            />
                            <Typography className="title">Chef Mako Ravindran</Typography>
                            <Typography className="position-title">Chief Chef Curating Officer</Typography>
                            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
                            <Box className='social-icon'>
                                <InstagramIcon className='icon'/>
                                <LinkedInIcon className='icon'/>
                            </Box>
                        </Box>
                        <Box className="slider-background">
                            <img className="slider-img"
                                 alt=""
                                 src={IntroChefImg1}
                            />
                            <Typography className="title">Chef Anou Boccasam</Typography>
                            <Typography className="position-title">Founder</Typography>
                            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
                            <Box className='social-icon'>
                                <InstagramIcon className='icon'/>
                                <LinkedInIcon className='icon'/>
                            </Box>
                        </Box>
                        <Box className="slider-background">
                            <img className="slider-img"
                                 alt=""
                                 src={IntroChefImg2}
                            />
                            <Typography className="title">Chef Mako Ravindran</Typography>
                            <Typography className="position-title">Chief Chef Curating Officer</Typography>
                            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
                            <Box className='social-icon'>
                                <InstagramIcon className='icon'/>
                                <LinkedInIcon className='icon'/>
                            </Box>
                        </Box>
                        <Box className="slider-background">
                            <img className="slider-img"
                                 alt=""
                                 src={IntroChefImg1}
                            />
                            <Typography className="title">Chef Anou Boccasam</Typography>
                            <Typography className="position-title">Founder</Typography>
                            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
                            <Box className='social-icon'>
                                <InstagramIcon className='icon'/>
                                <LinkedInIcon className='icon'/>
                            </Box>
                        </Box>
                        <Box className="slider-background">
                            <img className="slider-img"
                                 alt=""
                                 src={IntroChefImg1}
                            />
                            <Typography className="title">Chef Anou Boccasam</Typography>
                            <Typography className="position-title">Founder</Typography>
                            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
                            <Box className='social-icon'>
                                <InstagramIcon className='icon'/>
                                <LinkedInIcon className='icon'/>
                            </Box>
                        </Box>
                        <Box className="slider-background">
                            <img className="slider-img"
                                 alt=""
                                 src={IntroChefImg2}
                            />
                            <Typography className="title">Chef Mako Ravindran</Typography>
                            <Typography className="position-title">Chief Chef Curating Officer</Typography>
                            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
                            <Box className='social-icon'>
                                <InstagramIcon className='icon'/>
                                <LinkedInIcon className='icon'/>
                            </Box>
                        </Box>
                        <Box className="slider-background">
                            <img className="slider-img"
                                 alt=""
                                 src={IntroChefImg1}
                            />
                            <Typography className="title">Chef Anou Boccasam</Typography>
                            <Typography className="position-title">Founder</Typography>
                            <Typography className="position-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a mauris lacinia, blandit quam nec, iaculis mi. Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam posuere consectetur tortor ultrices feugiat.</Typography>
                            <Box className='social-icon'>
                                <InstagramIcon className='icon'/>
                                <LinkedInIcon className='icon'/>
                            </Box>
                        </Box>
                    </InfiniteCarousel>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Button
                            type="submit"
                            className="btn"
                        >
                            View All Members
                        </Button>
                    </Box>
                </Box>
            </BoxWrapper>
        </React.Fragment >
    )
}
export default TeamCarousel;