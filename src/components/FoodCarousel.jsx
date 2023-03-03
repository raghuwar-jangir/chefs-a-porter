import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Pagination } from "swiper";
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import testImage from './../assets/images/testImage.png';
import testImage2 from './../assets/images/testImage2.png';
import cap from '../assets/images/chef-cap.png';
import date from '../assets/images/date.png';
import tag from '../assets/images/tag-chef.png';
import trending from '../assets/images/trending.png'


const MainParent = styled(Box)({
    padding:'35px 120px 80px',
    '.parent-view-button': {
        textAlign: 'center',
        // marginTop: '20px',
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
    '.parent-grid': {
        paddingTop: "30px"
    },
    '.supper-info':{
        padding: '20px 16px 10px 16px',
        background: '#FFFFFF',
        boxShadow: '0px 16.3378px 20.4223px rgb(0 0 0 / 6%)',
        position: 'relative',
        bottom: '4px'
    },
    '.super-title': {
        fontFamily: 'Proxima Nova Alt Bold',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#050405',
        marginBottom: '0px',
    },
    '.super-chef-details': {
        paddingTop: '20px'
    },
    '.chef-tag': {
        display: 'flex',
        paddingBottom: '13px',
        fontFamily: 'ProximaNovaA-Regular',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#222222'
    },
    '.img-tag': {
        width: '18px !important',
        height: '18px',
        objectFit: 'contain',
        marginRight: '20px'
    },
    '.tag-detail': {
        margin: '0',
        fontFamily: "Roboto , Helvetica , Arial , sans-serif",
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '19px',
        letterSpacing: '0.00938em',
    },
    '.swiper-slide':{
        width:'395.25px'
    },
    '.test-img':{
        height:'284px',
        width:'100%',
        objectFit:'cover'
    },
    '.trending':{
        position: 'absolute',
        background: '#101418',
        display: 'flex',
        placeContent: 'flex-end',
        top: '0px',
        width:'100%',
    },
    '.trending-img':{
        objectFit: 'contain',
        marginRight: '4px',
        width:'12px',
        height:'16px',
        paddingTop:'5px'
    },
    '.trending-title':{
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
    '@media(min-width: 426px) and (max-width: 768px)': {
        padding: '58px 10px 40px 10px',
        '.test-img':{
            height:'358px'
        },
        '.trending':{
            display:'none'
        },
        '.tag-detail':{
            fontSize:'15px'
        }
    },
    '@media(min-width: 374px) and (max-width: 425px)': {
        padding:'35px 10px 100px 10px',
        '.test-img':{
            height:'358px',
            display:'block',
            width:'100%'
        },
        '.swiper':{
            height:'1090px'
        },
        '.swiper-button-prev':{
            display:'none'
        },
        '.swiper-button-next':{
            display:'none'
        },
        '.swiper-slide':{
            width:'405.25px'
        },
        '.trending':{
            display:'none'
        }
    },
        '@media(min-width: 319px) and (max-width: 375px)': {
            '.swiper-slide':{
                width:'355.25px'
            },
            '.trending':{
                display:'none'
            }
        },
            '@media(min-width: 1px) and (max-width: 320px)': {
                padding:'35px 10px 100px 10px',
                '.swiper-slide':{
                    width:'301.25px'
                },
                '.swiper':{
                    height:'1100px'
                },
                '.swiper-button-prev':{
                    display:'none'
                },
                '.swiper-button-next':{
                    display:'none'
                },
                '.trending':{
                    display:'none'
                },
                '.test-img':{
                    height:'358px'
                }
    }
})

const FoodCarousel = (isButtonShow) =>{
    return (
        <React.Fragment>
            <MainParent>
                <Swiper  style={{
            "--swiper-navigation-color": "white",
            "--swiper-navigation-size": "17px",
          }}
                slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation, Pagination]}
        breakpoints={{
            320:{
                slidesPerView:2,
                spaceBetween: 0,
                direction:"vertical",
                navigation:'false'
            },
            375:{
                slidesPerView:2,
                spaceBetween: 0,
                direction:"vertical",
                navigation:'false'
            },
            425: {
                slidesPerView:2,
                spaceBetween: 0,
                direction:"vertical",
                navigation:'false'
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 8,
            //   direction:'horizontal'
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            2560: {
                slidesPerView: 4,
                spaceBetween: 20,
            },

          }}
        className="mySwiper">
                    <SwiperSlide><img className='test-img' src={testImage}/>
                    <Box  className='trending'><img className='trending-img' src={trending}/><Typography className='trending-title'>Trending</Typography></Box>
                        <Box className='supper-info' >
                            <Typography className='super-title'>The Big Fat Parsi Blowout</Typography>
                            <Box className='super-chef-details'>
                                <span className='chef-tag'><img className='img-tag' src={cap}
                                                                alt="chef cap"/><Typography className='tag-detail'>Chef Anna Miocher</Typography></span>
                                <span className='chef-tag'><img className='img-tag' src={date} alt="date"/><Typography
                                    className='tag-detail'>April 9 | 7.30 PM - 10 PM</Typography></span>
                                <span className='chef-tag'><img className='img-tag' src={tag} alt="Rates"/><Typography
                                    className='tag-detail'>₹2500/per diner</Typography></span>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide><img className='test-img' src={testImage2}/>
                        <Box className='supper-info' >
                            <Typography className='super-title'>The Big Fat Parsi Blowout</Typography>
                            <Box className='super-chef-details'>
                                <span className='chef-tag'><img className='img-tag' src={cap}
                                                                alt="chef cap"/><Typography className='tag-detail'>Chef Anna Miocher</Typography></span>
                                <span className='chef-tag'><img className='img-tag' src={date} alt="date"/><Typography
                                    className='tag-detail'>April 9 | 7.30 PM - 10 PM</Typography></span>
                                <span className='chef-tag'><img className='img-tag' src={tag} alt="Rates"/><Typography
                                    className='tag-detail'>₹2500/per diner</Typography></span>
                            </Box>
                        </Box></SwiperSlide>
                    <SwiperSlide><img className='test-img' src={testImage}/>
                        <Box className='supper-info' >
                            <Typography className='super-title'>The Big Fat Parsi Blowout</Typography>
                            <Box className='super-chef-details'>
                                <span className='chef-tag'><img className='img-tag' src={cap}
                                                                alt="chef cap"/><Typography className='tag-detail'>Chef Anna Miocher</Typography></span>
                                <span className='chef-tag'><img className='img-tag' src={date} alt="date"/><Typography
                                    className='tag-detail'>April 9 | 7.30 PM - 10 PM</Typography></span>
                                <span className='chef-tag'><img className='img-tag' src={tag} alt="Rates"/><Typography
                                    className='tag-detail'>₹2500/per diner</Typography></span>
                            </Box>
                        </Box></SwiperSlide>
                    <SwiperSlide><img className='test-img' src={testImage2}/>
                    <Box  className='trending'><img className='trending-img' src={trending}/><Typography className='trending-title'>Trending</Typography></Box>
                        <Box className='supper-info' >
                            <Typography className='super-title'>The Big Fat Parsi Blowout</Typography>
                            <Box className='super-chef-details'>
                                <span className='chef-tag'><img className='img-tag' src={cap}
                                                                alt="chef cap"/><Typography className='tag-detail'>Chef Anna Miocher</Typography></span>
                                <span className='chef-tag'><img className='img-tag' src={date} alt="date"/><Typography
                                    className='tag-detail'>April 9 | 7.30 PM - 10 PM</Typography></span>
                                <span className='chef-tag'><img className='img-tag' src={tag} alt="Rates"/><Typography
                                    className='tag-detail'>₹2500/per diner</Typography></span>
                            </Box>
                        </Box></SwiperSlide>
                    <SwiperSlide><img className='test-img' src={testImage2}/>
                        <Box className='supper-info' >
                            <Typography className='super-title'>The Big Fat Parsi Blowout</Typography>
                            <Box className='super-chef-details'>
                                <span className='chef-tag'><img className='img-tag' src={cap}
                                                                alt="chef cap"/><Typography className='tag-detail'>Chef Anna Miocher</Typography></span>
                                <span className='chef-tag'><img className='img-tag' src={date} alt="date"/><Typography
                                    className='tag-detail'>April 9 | 7.30 PM - 10 PM</Typography></span>
                                <span className='chef-tag'><img className='img-tag' src={tag} alt="Rates"/><Typography
                                    className='tag-detail'>₹2500/per diner</Typography></span>
                            </Box>
                        </Box></SwiperSlide>
                </Swiper>
            </MainParent>
        </React.Fragment>
    )
}
export default FoodCarousel;
