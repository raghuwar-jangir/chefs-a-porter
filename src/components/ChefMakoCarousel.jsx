import { Box, Stack, styled, Typography } from '@mui/material';
import React, { useRef, useState }  from 'react';
import { Link } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination} from "swiper";
import "swiper/css/pagination";
import ProgressBar from 'react-bootstrap/ProgressBar'
import diningPicture from '../assets/images/cook1.png'
import DiningProgress from './DiningProgress';
import { keyframes } from 'styled-components';
import { slide } from 'react-burger-menu';
import { width } from '@mui/system';


const MainContentBox = styled(Box)({
    backgroundColor: '#101418',
    padding: '32px 0px',
    '.dining-content': {
        fontFamily: 'Proxima Nova Alt',
    fontStyle:'normal',
    fontWeight: '300',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#FBFBFB',
    padding: '4px 69px'
    },
    '.dining-title': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '24px',
        lineHeight: '30px',
        letterSpacing: '0.06em',
        color: '#FBFBFB',
        padding: '0px 120px',
    marginBottom: '20px',
    },
    '.content-box':{
        display:'flex',
        justifyContent:'center',
        marginRight:'34px'
        },
    '.active':{
        padding:'0px !important '
    },
    '.img-box':{
        padding:'0px'
    },
    '.img':{
        width:'100%',
        height: '550px',
    objectFit: 'cover'
    },
    '.swiper-pagination-bullet':{
        borderRadius:'0px',
        width:'200px',
        height:'3px',
        background:'#FBFBFB',
        opacity:'1',
    },
    '.swiper-pagination-bullet-active':{
    animationDuration: '5s',
  animationName: 'swiper-pagination-bullet',
  animationDirection:'normal',
animationFillMode:'forwards',
backgroundColor:'#C6A87D',
opacity:'1',
positionX:'end'
    },
    '@keyframes swiper-pagination-bullet' :{
        '0%' :{
            background:'#FBFBFB',

        },
        '100%' :{
            background:'#C6A87D',
        }
    },
    '.swiper-pagination':{
        bottom:'-5px !important',
    },
    '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet':{
        margin:'0 var(--swiper-pagination-bullet-horizontal-gap,19px) !important'
    },
    '@media(min-width: 1px) and (max-width: 768px)': {
        '.img':{
            height:'250%',
            width:'50%',
            padding:'0px 26%'
        },
        '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet':{
            margin:'0 var(--swiper-pagination-bullet-horizontal-gap,3px) !important'
    },
    '.swiper-pagination-bullet':{
        width:'96px'
    },
    '.dining-content': {
        width:'10px',
        font:'12px',
        padding: '4px 46px'
    },
    '.content-box':{
        marginRight:'65px'
    }
},
'@media(min-width: 320px) and (max-width: 768px)': {
    '.img':{
        width:'94%',
        padding:'0px 3%'
    },
    '.dining-title':{
        padding:'0px 29px',
        font:'20px'
    }
}
})

const ChefMakoCarousel = () => {
    return (
        <React.Fragment>
            <MainContentBox>
                <Typography className="dining-title">
                Chef Mako's Creations
                </Typography>
                <Swiper
       slidesPerView={1}
       spaceBetween={30}
       loop={true}
       pagination={{
         clickable: true,
       }}
       autoplay={{
        delay: 8000,
        disableOnInteraction: false,
    }}
    speed={500}
       navigation={true}
       modules={[Pagination,Autoplay]}
       className="mySwiper"
    >
      <SwiperSlide><img className='img' src={diningPicture}></img> <Typography style={{color:'white'}}>An agnostic menu that explores a diverse culinary journey with chef mako at the helm</Typography></SwiperSlide>
      <SwiperSlide><img className='img'  src={diningPicture}></img><Typography style={{color:'white'}}>An agnostic menu that explores a diverse culinary journey with chef mako at the helm</Typography></SwiperSlide>
      <SwiperSlide><img className='img' src={diningPicture}></img><Typography style={{color:'white'}}>An agnostic menu that explores a diverse culinary journey with chef mako at the helm</Typography></SwiperSlide>
      ...
    </Swiper>
    {/* <Box className='content-box'>
        <Typography className='dining-content'>Conscious Dining</Typography>
        <Typography className='dining-content'>Championing Chefs</Typography>
        <Typography className='dining-content'>Community</Typography>
      </Box> */}
            </MainContentBox>
        </React.Fragment>
    )
}

export default ChefMakoCarousel;