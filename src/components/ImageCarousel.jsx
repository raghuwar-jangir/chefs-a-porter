import React from "react";
import sGallery from "./../assets/images/sc-gallery.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import { Box } from "@mui/material";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "../assets/styles/fontStyle.css";
const ImageCarousel = () => {
    const pagination = {
        clickable: true,
    };
    const image = [
        {
            img: sGallery,
        },
        {
            img: sGallery,
        },
        {
            img: sGallery,
        },
        {
            img: sGallery,
        },
        {
            img: sGallery,
        },
    ];
    const MainBox = styled(Box)({
        ".carousel-img": {
            height: "270px",
            objectFit: "cover",
            width:'100%'
        },
        '.swiper-pagination':{
            display:'flex',
            justifyContent:'center',
            placeItems:'center',
            bottom:'20px !important'
        },
        '.swiper-pagination-bullet':{
            width:'7px',
            height:'7px',
            background:'transparent',
            border:'1px solid #FBFBFB',
            opacity:'1',
            margin:' 0 var(--swiper-pagination-bullet-horizontal-gap,7px) !important'
        },
        '.swiper-pagination-bullet-active':{
            background:'#FBFBFB',
            width:'10px',
            height:'10px'
        },
        "@media (min-width: 768px) and (max-width:2560px)": {
            display:'none'
        }
    });
    return (
        <React.Fragment>
            <MainBox>
                <Box>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        grabCursor={true}
                        className="mySwiper"
                    >
                        {image.map((item) => (
                            <SwiperSlide>
                                <img className="carousel-img" src={item.img} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </MainBox>
        </React.Fragment>
    );
};
export default ImageCarousel;
