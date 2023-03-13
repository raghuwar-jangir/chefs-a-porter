import React , { useRef, useState } from "react";
import RestorentImg from "../assets/images/sc-gallery.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styled from "styled-components";
import { Box } from "@mui/system";
import '../assets/styles/fontStyle.css'

const MainBox = styled(Box)({
    ".swiper-button-prev":{
        left:'3%',
        position:"fixed",
        color:'rgba(255, 255, 255, 0.5)'
    },
    '.swiper-button-next':{
        right:'3%',
        position:'fixed',
        color:'rgba(255, 255, 255, 0.5)'
    },
    '.mySwiper':{
        margin: 'auto',
        display: 'block',
        width: '75%',
        backgroundColor:'rgba(0,0,0,.8)'
        // boxShadow: '0 0 8px rgb(0 0 0 / 60%)'
    },
    '.swiper': {
        width:'75%',
        height:'100%',
    },
    "@media (min-width: 1px) and (max-width:768px)": {
        '.swiper': {
            width:'100%'
        }
    }
});

const SuperClubPopCarousel = () =>{
    return(
        <React.Fragment>
            <MainBox>
                <Box>
                    <Swiper navigation={true} modules={[Navigation]}  grabCursor={true} className="mySwiper">
                        <SwiperSlide><img  src={RestorentImg}/></SwiperSlide>
                        <SwiperSlide><img src={RestorentImg}/></SwiperSlide>
                        <SwiperSlide><img src={RestorentImg}/></SwiperSlide>
                        <SwiperSlide><img src={RestorentImg}/></SwiperSlide>
                        <SwiperSlide><img src={RestorentImg}/></SwiperSlide>
                    </Swiper>
                </Box>
            </MainBox>
        </React.Fragment>
    )}
export default SuperClubPopCarousel;
