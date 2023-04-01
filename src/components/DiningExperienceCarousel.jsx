import React, {useRef, useState, useContext} from "react";
import {Box, styled} from "@mui/system";
import {Typography} from "@mui/material";
import image1 from '../assets/images/ig1.png';
import image2 from '../assets/images/ig2.png';
import image3 from '../assets/images/ig3.png';
import image4 from '../assets/images/ig4.png';
import image5 from '../assets/images/ig5.png';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import CmsContext from "../context/CmsContext";
import * as _ from "lodash";

const DiningExperienceCarousel = (props) => {
    const {title, subTitle, titleBox, linkTitle, main, peek} = props
    const {data} = useContext(CmsContext)
    const WrapBox = styled(Box)({
        '.main-box': [{
            background: '#101418',
            padding: '80px 0px',
            textAlign: 'center'
        },main],
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
        '.peek-name': [{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '200',
            fontSize: '36px',
            lineHeight: '44px',
            textAlign: 'center',
            color: '#C6A87D',
            marginBottom: '0.5rem'
        },peek],
        '.slider-box': {
            marginTop: '30px'
        },
        '.img': {
            width: '100%',
            height: '230.54px',
            objectFit: 'cover'
        },
        '.title-box': [{
            display: 'content'
        }, titleBox],
        "@media (min-width: 1px) and (max-width:768px)": {
            '.img':{
                height:'111px'
            },
            '.main-box':{
                padding:'40px 0px'
            },
            '.peek-heading':{
                fontSize:'20px',
                lineHeight:'24px'
            },
            '.peek-name':{
                fontSize:'20px !important',
                lineHeight:'24px !important'
            },
            '.slider-box':{
                marginTop:'0px'
            }
        },
    })
    return (
        <WrapBox>
            <Box className='main-box'>
                {
                    !_.isEmpty(data?.home) &&
                    <>
                        <Box>
                            <Typography className="peek-heading">{data.home.private_dining.title}</Typography>
                            <Typography className="peek-name">@Privée</Typography>
                        </Box>
                        <Box className='slider-box'>
                            <Swiper
                                // slidesPerView={6}
                                // spaceBetween={8}
                                className="mySwiper"
                                breakpoints={{
                                    320: {
                                        slidesPerView: 3,
                                        spaceBetween: 8,
                                    },
                                    375: {
                                        slidesPerView: 3,
                                        spaceBetween: 8,
                                    },
                                    425: {
                                        slidesPerView: 3,
                                        spaceBetween: 8,
                                    },
                                    768: {
                                        slidesPerView: 6,
                                        spaceBetween: 8,
                                    },
                                    1024: {
                                        slidesPerView: 6,
                                        spaceBetween: 8,
                                    },
                                    1440: {
                                        slidesPerView: 6,
                                        spaceBetween: 8,
                                    },
                                    2560: {
                                        slidesPerView: 6,
                                        spaceBetween: 8,
                                    },
                                }}>
                                {data.home.private_dining.images.map((item) => {
                                    return (
                                        <SwiperSlide><img className="img" src={item}/></SwiperSlide>
                                    )

                                })}
                            </Swiper>
                        </Box>
                    </>
                }
                {
                    _.isEmpty(data?.home) &&
                    <>
                        <Box className='title-box'>
                            <Typography className="peek-heading">{title}</Typography>
                            <Typography className="peek-name">{subTitle}</Typography>
                        </Box>
                        <Box className='slider-box'>
                            <Swiper
                                // slidesPerView={6}
                                // spaceBetween={8}
                                className="mySwiper"
                                breakpoints={{
                                    320: {
                                        slidesPerView: 3,
                                        spaceBetween: 8,
                                    },
                                    375: {
                                        slidesPerView: 3,
                                        spaceBetween: 8,
                                    },
                                    425: {
                                        slidesPerView: 3,
                                        spaceBetween: 8,
                                    },
                                    768: {
                                        slidesPerView: 6,
                                        spaceBetween: 8,
                                    },
                                    1024: {
                                        slidesPerView: 6,
                                        spaceBetween: 8,
                                    },
                                    1440: {
                                        slidesPerView: 6,
                                        spaceBetween: 8,
                                    },
                                    2560: {
                                        slidesPerView: 6,
                                        spaceBetween: 8,
                                    },
                                }}
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
                    </>
                }

            </Box>
        </WrapBox>
    )
}
export default DiningExperienceCarousel;