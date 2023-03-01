import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Pagination } from "swiper";
import { Box, Button, Grid, Hidden, styled, Typography } from '@mui/material';
import chef from './../assets/images/chef1.png'
import chef2 from './../assets/images/chef2.png'
import chef3 from '../assets/images/chef3.png';
import reebok from '../assets/images/rebook.png'
import {navigate} from "gatsby";

const MainParent = styled(Box)({
        '.continue-browsing-box': {
            background: '#080B0E',
            padding: '80px 120px',
            color: '#fff'

        },
        '.main-heading': {
            fontFamily: 'Bon Vivant',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '40px',
            letterSpacing: '0.06em',
            color: '#FBFBFB'
        },
        '.heading-details': {
            fontFamily:'Proxima Nova Alt',
            fontWeight: 300,
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            padding: '16px 0px 30px 0px'
        },
        '.parent-view-button': {
            textAlign: 'center',
            marginTop: '20px',
            marginTop: '40px'
        },
        '.view-more': {
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '29px',
            width: '30%',
            color: '#FBFBFB',
            background: '#080B0E',
            border: '1px solid #DCD7CB',
            padding: '12px'
        },
        ".name-box":{
            padding: '22px 20px',
            background: '#101418',
            position: 'relative',
            bottom: '29%'
        },
        '.chef-title':{
            display: 'flex',
            placeContent: 'center',
            fontSize: '20px',
            lineHeight: '25px',
            marginBottom: '6px',
            fontFamily:'Bon Vivant ',

        },
        '.chef-details':{
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: '19px',
            fontFamily:'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '250',
            letterSpacing: '0.02em',
            color: 'rgba(198, 168, 125, 0.8)',
            position: 'relative',
            paddingTop: '6px',
        },
        '.line':{
            position: 'relative',
            width: '1px',
            height: '100%',
            margin: '0 5px'
        },
        '.img-size':{
            width: '100%',
            height: '426px',
            objectFit: 'cover',
            objectPosition: 'top'
        },
        '.rebook-title':{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '150',
            fontSize: '16px',
            lineHeight: '19px',
            textAlign: 'right',
            letterSpacing: '0.02em',
            color: '#C6A87D',
            padding:'5px 20px 5px 0px'
        },
        '.rebook-img':{
            objectFit: 'contain',
            marginRight: '4px',
            width:'12px',
            height:'16px',
            paddingTop:'5px'
        },
        '.rebook':{
            position: 'absolute',
            background: '#101418',
            display: 'flex',
            placeContent: 'flex-end',
            top: '0px',
            width:'100%',
        },
        '.swiper-slide':{
            width:'538.667px'
        },
        '.swiper-button-prev':{
            height:'17px !important'
        },
        '@media(min-width: 426px) and (max-width: 768px)': {
            '.img-size':{
                height:'234px'
            },
            '.continue-browsing-box':{
                padding:'80px 10px'
            },
            ".main-heading":{
                fontSize:'20px'
            },
            '.heading-details':{
                fontSize:'14px',
                padding:'0px 0px 30px 0px'
            },
            '.chef-title':{
                placeContent:'flex-start',
                fontSize:'14px',
                marginBottom:'0px'
            },
            '.chef-details ':{
                textAlign:'start',
                fontSize:'14px'
            },
            '.name-box':{
                padding:'16px 8px'
            }
        },
        '@media(min-width: 1px) and (max-width: 425px)': {
            '.img-size':{
                height:'234px'
            },
            '.continue-browsing-box':{
                padding:'80px 10px'
            },
            ".main-heading":{
                fontSize:'20px'
            },
            '.heading-details':{
                fontSize:'16px',
                padding:'0px 0px 30px 0px'
            },
            '.chef-title':{
                placeContent:'flex-center',
                fontSize:'14px',
                marginBottom:'0px'
            },
            '.chef-details ':{
                textAlign:'center',
                fontSize:'14px'
            },
            '.name-box':{
                padding:'16px 8px'
            }
        }
    },
)

const PriveeMain = ({ title, subTitle, isButtonShow = false }) => {

    const handleClick = () =>{
        navigate('/chef-details');
    }
    return (
        <React.Fragment>
            <MainParent>
                <Box className='continue-browsing-box' onClick={handleClick}>
                    <Typography className='main-heading'>
                        Continue Browsing
                    </Typography>
                    <Typography className='heading-details'>
                        Chef’s you’ve checked out previously
                    </Typography>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "white",
                            "--swiper-navigation-size": "17px",
                        }}
                        slidesPerView={3}
                        spaceBetween={20}
                        navigation={true}
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                            320:{
                                slidesPerView:2,
                                spaceBetween: 8,
                            },
                            375:{
                                slidesPerView:2,
                                spaceBetween: 8,
                            },
                            425: {
                                slidesPerView:2,
                                spaceBetween: 8,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 8,
                            },

                        }}
                        className="mySwiper">
                        <SwiperSlide><img className="img-size" src={chef}/>
                            <Box className="name-box" ><Typography className='chef-title'>Madhav Dayal</Typography>
                                <Box className="chef-details">
                                    <span>Thai <span className='line'>|</span></span>
                                    <span>Japanese <span className='line'>|</span></span>
                                    <span>Parsi</span>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img-size" src={chef2}
                            />
                            <Box  className='rebook'><img className='rebook-img' src={reebok}/><Typography className='rebook-title'>Rebook</Typography></Box>
                            <Box className="name-box"><Typography className='chef-title'>Kyoumars Freeman</Typography>
                                <Box className="chef-details"><span>Persian</span></Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide><img className="img-size" src={chef3}/>
                            <Box className="name-box"><Typography className='chef-title'>Mako Ravindran</Typography>
                                <Box className="chef-details">
                                    <span>French <span className='line'>|</span></span>
                                    <span>Italian <span className='line'>|</span></span>
                                    <span>Indian </span></Box>
                            </Box></SwiperSlide>
                        <SwiperSlide><img className="img-size" src={chef2}/>
                            <Box  className='rebook'><img className='rebook-img' src={reebok}/><Typography className='rebook-title'>Rebook</Typography></Box>
                            <Box className="name-box"><Typography className='chef-title'>Kyoumars Freeman</Typography>
                                <Box className="chef-details"><span>Persian</span></Box>
                            </Box></SwiperSlide>
                    </Swiper>
                    {isButtonShow &&
                        <Box className='parent-view-button'>
                            <Button
                                fullWidth
                                className='view-more'
                                variant="contained">
                                View More Chefs
                            </Button>
                        </Box>
                    }
                </Box>
            </MainParent >
        </React.Fragment >
    )
}

export default PriveeMain;