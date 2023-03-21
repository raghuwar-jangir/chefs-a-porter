import React from "react";
import {Box, styled, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import AvlExperienceCarousel from "./AvlExperienceCarousel";
import avlExp1 from "../assets/images/avl-exp1.jpg";
import avlExp2 from "../assets/images/avl-exp2.jpg";
import '../assets/styles/fontStyle.css'

const ExperienceCarousel = (props) => {
    const WrapBox = styled(Box)({
        '.main-box': {
            background: '#101418 !important',
            padding: '80px 0px',
            textAlign: 'center'
        },
        '.peek-heading': {
            fontFamily: 'Bon Vivant !important',
            fontSize: '24px !important',
            lineHeight: '30px !important',
            color: '#FBFBFB !important',
            textAlign: 'center !important',
            letterSpacing:'0.06em',
            fontWeight:700
        },
        '.slider-box': {
            marginTop: '40px'
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
                    <Typography className="peek-heading">{props.title}</Typography>
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
