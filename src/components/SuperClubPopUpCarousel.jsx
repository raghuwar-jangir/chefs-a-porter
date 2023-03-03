import React, {useRef, useState} from "react";
import RestorentImg from "../assets/images/sc-gallery.png";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import styled from "styled-components";
import {Box} from "@mui/system";

const MainBox = styled(Box)({
    ".swiper-button-prev": {
        left: '3%',
        position: "fixed",
        color: '#ddd'
    },
    '.swiper-button-next': {
        right: '3%',
        position: 'fixed',
        color: '#ddd'
    },
    '.mySwiper': {
        margin: 'auto',
        display: 'block',
        width: '75%',
        boxShadow: '0 0 8px rgb(0 0 0 / 60%)'
    },
    '.swiper': {
        width: '75%',
        height: '100%',
    },
});

const SuperClubPopUpCarousel = () => {
    return (
        <React.Fragment>
            <MainBox>
                <Box>
                    <Swiper navigation={true} modules={[Navigation]} grabCursor={true} className="mySwiper">
                        <SwiperSlide><img src={RestorentImg}/></SwiperSlide>
                        <SwiperSlide><img src={RestorentImg}/></SwiperSlide>
                        <SwiperSlide><img src={RestorentImg}/></SwiperSlide>
                        <SwiperSlide><img src={RestorentImg}/></SwiperSlide>
                        <SwiperSlide><img src={RestorentImg}/></SwiperSlide>
                    </Swiper>
                </Box>
            </MainBox>
        </React.Fragment>
    )
}
export default SuperClubPopUpCarousel;
