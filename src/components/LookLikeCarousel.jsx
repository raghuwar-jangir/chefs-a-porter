import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, styled, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import teamImg from '../assets/images/team.png';
import { FreeMode,Thumbs,Navigation } from "swiper";
import '../assets/styles/fontStyle.css';

const LookLikeCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const ImageData = [
    {
        img:teamImg
    },
    {
        img:teamImg
    },
    {
        img:teamImg
    },
    {
        img:teamImg
    },
    {
        img:teamImg
    },
    {
        img:teamImg
    }
  ]
  const style = {
    background:'#080B0E',
    marginTop:'0px',
    padding:'80px 120px',
    '.swiper-box':{
        boxSizing:'border-box'
    },
    '.swiper-heading':{
        fontFamily: 'Bon Vivant',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '30px',
    lineHeight: '37px',
    textAlign: 'center',
    letterSpacing: '0.06em',
    color: '#FBFBFB',
    },
    '.mySwiper2':{
        position: 'relative',
    marginTop: '30px',
    width:'100%'
    },
    '.swiper2-img':{
        height:'448px',
        objectFit:'cover',
        width:'100%'
    },
    '.swiper2-slide':{
        width:'100%'
    },
    '.mySwiper':{
        padding:'30px 100px 0px'
    },
    '.swiper-img':{
        objectFit: 'cover',
        boxShadow: '0px 8px 14px rgba(0, 0, 0, 0.06)',
        width:'100%',
        height:'90px',
        background:'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) !important',
        opacity:'0.8'
    },
   ' .mySwiper .swiper-slide-thumb-active': {
    border:'2px solid #FBFBFB',
      },
      '.swiper1-slide':{
        height:'90px'
    },
    '.last-pagination':{
        position:'relative',
    },
    '.view-gallery':{
        position: 'absolute',
    whiteSpace: 'pre',
    zIndex: 2,
    fontFamily: 'Proxima Nova Alt',
    fontWeight: 300,
    fontSize: '14px',
    lineHeight: '17px',
    textSlign: 'center',
    color: '#FBFBFB',
    top: '30px',
    left: '0px',
    right: '0px',
    textAlign:'center'
    },
    '.last-img':{
        opacity:'0.2'
    }
  }
  return (
    <React.Fragment>
            <Box sx={style}>
                <Box className='swiper-box'>
                    <Typography className="swiper-heading">See what our supper clubs look like</Typography>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode,Thumbs]}
        className="mySwiper2"
      >
        {ImageData.map((item,index)=>(
             <Box key={index}>
        <SwiperSlide className="swiper2-slide">
            <img className="swiper2-img" src={item.img}/>
        </SwiperSlide>
        </Box>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={16}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper1-slide">
            <img className="swiper-img" src={teamImg}/>
        </SwiperSlide>
        <SwiperSlide className="swiper1-slide">
            <img className="swiper-img" src={teamImg}/>
        </SwiperSlide>
        <SwiperSlide className="swiper1-slide">
            <img className="swiper-img" src={teamImg}/>
        </SwiperSlide>
        <SwiperSlide className="swiper1-slide">
            <img className="swiper-img" src={teamImg}/>
        </SwiperSlide>
        <SwiperSlide className="swiper1-slide">
            <img className="swiper-img" src={teamImg}/>
        </SwiperSlide>
        <SwiperSlide className="swiper1-slide last-pagination">
            <img className="swiper-img last-img" src={teamImg}/>
            <Typography className="view-gallery">View <br/> Gallery</Typography>
        </SwiperSlide>
      </Swiper>
      </Box>
      </Box>
    </React.Fragment>
  );
}
export default LookLikeCarousel;
