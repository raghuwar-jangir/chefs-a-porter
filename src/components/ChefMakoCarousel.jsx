import { Box, Stack, styled, Typography } from '@mui/material';
import React, { useRef, useState }  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination} from "swiper";
import "swiper/css/pagination";
import diningPicture from '../assets/images/cook1.png'
import "swiper/css/pagination";

const ChefMakoCarousel = (props) => {
    const {title,header} = props
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
        '.dining-title': [{
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '24px',
            lineHeight: '30px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
            padding: '0px 16px',
            marginBottom: '20px',
        },header],
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
            width:'100%',
            height:'2px',
            background:'#FBFBFB',
            opacity:'1',
            margin:'0px 5px !important'
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
            bottom:'-22px !important',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle:'normal',
            fontWeight: '300',
            fontSize: '20px',
            lineHeight: '35px',
            color: '#FBFBFB !important',
            position:'relative',
            display:'inline-flex',
            justifyContent:'center'
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
        '.swiper':{
            paddingBottom:'18px'
        },

        '@media(min-width: 767px) and (max-width: 1024px)': {
            '.swiper-pagination':{
                lineHeight:'27px'
            },
            '.swiper':{
                paddingBottom:'35px'
            }
        },
        '@media(min-width: 1px) and (max-width: 767px)': {
            '.swiper-pagination':{
                lineHeight:'17px',
                fontSize:'12px'
            }
        }
    })

    let labels = ['Conscious Dining', 'Championing Chefs', 'Community'];
    return (
        <React.Fragment>
            <MainContentBox>
                <Typography className="dining-title">
                    {title}
                </Typography>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<div class="' + className + '">' + (labels[index]) +
                                '</div>';

                        },
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
                    <SwiperSlide><img className='img' src={diningPicture}></img></SwiperSlide>
                    <SwiperSlide><img className='img'  src={diningPicture}></img></SwiperSlide>
                    <SwiperSlide><img className='img' src={diningPicture}></img></SwiperSlide>
                    ...
                </Swiper>
            </MainContentBox>
        </React.Fragment>
    )
}

export default ChefMakoCarousel;
