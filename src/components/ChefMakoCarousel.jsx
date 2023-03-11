import { Box, Stack, styled, Typography } from '@mui/material';
import React, { useRef, useState }  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination} from "swiper";
import "swiper/css/pagination";
import diningPicture from '../assets/images/cook1.png'
import "swiper/css/pagination";


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
        padding: '0px 16px',
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
    '.swiper':{
        width:'100%'
    },
    '.img-box':{
        padding:'0px'
    },
    '.img':{
        width:'100%',
        height: '352px',
        objectFit: 'cover'
    },
    '.swiper-pagination-bullet':{
        borderRadius:'0px',
        width:'290px',
        height:'5px',
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
        margin:'0 var(--swiper-pagination-bullet-horizontal-gap,10px) !important'
    },
    '.mako-details':{
        fontFamily: 'ProximaNovaA-Regular',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#FBFBFB',
        margin: '24px 16px 10px',
    },
    '@media(min-width: 1px) and (max-width: 768px)': {
        '.img':{
            height:'250%',
            width:'50%',
            // padding:'0px 26%'
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
    '@media(min-width: 2000px) and (max-width: 2560px)': {
        '.swiper-pagination-bullet':{
            width: '403px',
            height: '4px',
        },
        '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet':{
            margin:'0 var(--swiper-pagination-bullet-horizontal-gap,18px) !important'
        },
        '.mako-details':{
            fontSize:'20px'
        }
    },
    '@media(min-width: 1024px) and (max-width: 1440px)': {
        '.swiper-pagination-bullet':{
            width: '187px',
            height: '4px',
        },
        '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet':{
            margin:'0 var(--swiper-pagination-bullet-horizontal-gap,15px) !important'
        },
        '@media(min-width: 768px) and (max-width: 1024px)': {
            '.swiper-pagination-bullet':{
                width: '117px',
            },
            '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet':{
                margin:'0 var(--swiper-pagination-bullet-horizontal-gap,14px) !important'
            },
        },
    },
    '@media(min-width: 320px) and (max-width: 768px)': {
        '.img':{
            width:'100%',
        },
        '.dining-title':{
            padding:'0px 16px',
            font:'20px'
        },
        '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet':{
            margin:'0 var(--swiper-pagination-bullet-horizontal-gap,6px) !important'
        },
        '.swiper-pagination-bullet':{
            width:'148px'
        },
    },
    '@media(min-width: 320px) and (max-width: 425px)': {
        '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet':{
            margin:'0 var(--swiper-pagination-bullet-horizontal-gap,3px) !important'
        },
        '.swiper-pagination-bullet':{
            width:'100px'
        },
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
                        delay: 3800,
                        disableOnInteraction: false,
                    }}
                    speed={500}
                    navigation={false}
                    modules={[Pagination,Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className='img' src={diningPicture}></img> <Typography className='mako-details'>An agnostic menu that explores a diverse culinary journey with chef mako at the helm</Typography></SwiperSlide>
                    <SwiperSlide><img className='img'  src={diningPicture}></img><Typography className='mako-details'>An agnostic menu that explores a diverse culinary journey with chef mako at the helm</Typography></SwiperSlide>
                    <SwiperSlide><img className='img' src={diningPicture}></img><Typography className='mako-details'>An agnostic menu that explores a diverse culinary journey with chef mako at the helm</Typography></SwiperSlide>
                    ...
                </Swiper>
            </MainContentBox>
        </React.Fragment>
    )
}

export default ChefMakoCarousel;
