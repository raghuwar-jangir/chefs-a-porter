import React, {useRef, useState} from "react";
import {Box} from "@mui/system";
import styled from "styled-components";
import {Typography} from "@mui/material";
import image1 from '../assets/images/ig1.png';
import image2 from '../assets/images/ig2.png';
import image3 from '../assets/images/ig3.png';
import image4 from '../assets/images/ig4.png';
import image5 from '../assets/images/ig5.png';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

const DiningExperienceCarousel = () => {
    const WrapBox = styled(Box)({
        '.main-box': {
            background: '#101418',
            padding: '80px 0px',
            textAlign: 'center'
        },
        '.peek-heading': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '125',
            fontSize: '24px',
            lineHeight: '29px',
            textAlign: 'center',
            color: '#FBFBFB',
            marginBottom: '0.5rem'
        },
        '.peek-name': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '200',
            fontSize: '36px',
            lineHeight: '44px',
            textAlign: 'center',
            color: '#C6A87D',
            marginBottom: '0.5rem'
        },
        '.slider-box': {
            marginTop: '30px'
        },
        '.img': {
            width: '100%',
            height: '230.54px',
            objectFit: 'cover'
        },
        "@media (min-width: 1px) and (max-width:768px)": {
            '.main-box': {
                display: 'none'
            }
        },
    })
    return (
        <WrapBox>
            <Box className='main-box'>
                <Box>
                    <Typography className="peek-heading">Peek into our Private Dining Experiences</Typography>
                    <Typography className="peek-name">@Privée</Typography>
                </Box>
                <Box className='slider-box'>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={8}
                        className="mySwiper"
                    >

                        <SwiperSlide><img className="img" src={image1}/></SwiperSlide>
                        <SwiperSlide><img className="img" src={image2}/></SwiperSlide>
                        <SwiperSlide><img className="img" src={image3}/></SwiperSlide>
                        <SwiperSlide><img className="img" src={image4}/></SwiperSlide>
                        <SwiperSlide><img className="img" src={image5}/></SwiperSlide>
                        <SwiperSlide><img className="img" src={image2}/></SwiperSlide>
                        <SwiperSlide><img className="img" src={image5}/></SwiperSlide>
                    </Swiper>
                </Box>
            </Box>
        </WrapBox>
    )
}
export default DiningExperienceCarousel;