import React from "react";
import {Box} from "@mui/system";
import styled from "styled-components";
import {Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import AvlExperienceCarousel from "./AvlExperienceCarousel";
import avlExp1 from "../assets/images/avl-exp1.jpg";
import avlExp2 from "../assets/images/avl-exp2.jpg";

const ExperienceCarousel = () => {
    const WrapBox = styled(Box)({
        '.main-box': {
            background: '#101418',
            padding: '80px 0px',
            textAlign: 'center'
        },
        '.peek-heading': {
            fontFamily: 'Bon Vivant',
            fontSize: '36px',
            lineHeight: '45px',
            color: '#FBFBFB',
            textAlign: 'center',
            paddingBottom: '40px'
        },
        '.slider-box': {
            marginTop: '30px'
        },
        ".swiper-slide": {
            width: '350px !important'
        },
        '.pl': {
            paddingLeft: '120px'
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            '.main-box': {
                display: 'none'
            },
        },
        "@media (min-width: 768px) and (max-width:1024px)": {
            ".swiper-slide": {
                width: '250px !important'
            },
            '.pl': {
                paddingLeft: '70px'
            },
        },
    })
    return (
        <WrapBox>
            <Box className='main-box'>
                <Box>
                    <Typography className="peek-heading">Available Experiences</Typography>
                </Box>
                <Box className='slider-box'>
                    {/*<Swiper*/}
                    {/*    slidesPerView={'auto'}*/}
                    {/*    spaceBetween={8}*/}
                    {/*    centeredSlides={false}*/}
                    {/*    className="mySwiper"*/}
                    {/*    grabCursor={true}*/}
                    {/*>*/}
                    <Swiper
                        slidesPerView={4.5}
                        spaceBetween={8}
                        className="mySwiper pl"
                    >

                        <SwiperSlide><AvlExperienceCarousel image={avlExp1}
                                                            description={'by Chef Mako Ravindran'}/></SwiperSlide>
                        <SwiperSlide><AvlExperienceCarousel image={avlExp2} description={'by Chef Mako Ravindran'}
                                                            isLabelShow={true}/></SwiperSlide>
                        <SwiperSlide><AvlExperienceCarousel image={avlExp1} description={'by Chef Mako Ravindran'}
                                                            isLabelShow={true}/></SwiperSlide>
                        <SwiperSlide><AvlExperienceCarousel image={avlExp2} description={'by Chef Mako Ravindran'}
                                                            isLabelShow={true}/></SwiperSlide>
                        <SwiperSlide><AvlExperienceCarousel image={avlExp2}
                                                            description={'by Chef Mako Ravindran'}/></SwiperSlide>
                        <SwiperSlide><AvlExperienceCarousel image={avlExp1}
                                                            description={'by Chef Mako Ravindran'}/></SwiperSlide>
                    </Swiper>
                </Box>
            </Box>
        </WrapBox>
    )
}
export default ExperienceCarousel;