import { Box, Stack, styled, Typography } from '@mui/material';
import React, { useRef, useState }  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination} from "swiper";
import "swiper/css/pagination";
import '../assets/styles/fontStyle.css';

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
        fontWeight: '700',
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
        height:'2px',
        width:'200px',
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
        bottom:'-22px !important',
        fontFamily: 'Proxima Nova Alt',
        fontStyle:'normal',
        fontWeight: '300',
        fontSize: '14px',
        lineHeight: '35px',
        color: '#FBFBFB',
        // padding: '4px 69px',
        position:'relative'
    },
    '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet':{
        margin:'0 var(--swiper-pagination-bullet-horizontal-gap,19px) !important'
    },
'@media(min-width: 430px) and (max-width: 768px)': {
    '.dining-title': {
        padding: '0px 29px',
        font: '20px'
    },
    '.content-box': {
        display: 'flex',
        justifyContent: 'center',
        marginRight: '34px'
    },
    '.active': {
        padding: '0px !important '
    },
    '.img-box': {
        padding: '0px'
    },
    '.img': {
        width: '100%',
        height: '550px',
        objectFit: 'cover'
    },
    '.swiper-pagination-bullet': {
        borderRadius: '0px',
        width: '200px',
        height: '2px',
        background: '#FBFBFB',
        opacity: '1',
    },
    '.swiper-pagination-bullet-active': {
        animationDuration: '5s',
        animationName: 'swiper-pagination-bullet',
        animationDirection: 'normal',
        animationFillMode: 'forwards',
        backgroundColor: '#C6A87D',
        opacity: '1',
        positionX: 'end'
    },
    '@keyframes swiper-pagination-bullet': {
        '0%': {

            background: '#FBFBFB',
        },
        '100%': {
            background: '#C6A87D',
        }
    },
    '.swiper-pagination': {
        bottom: '-5px !important',
    },
    '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet': {
        margin: '0 var(--swiper-pagination-bullet-horizontal-gap,19px) !important'
    },
},
'@media(min-width: 370px) and (max-width: 425px)': {
    '.img':{
        height:'250px'
    },
    '.dining-title': {
        padding: '0px 29px',
        font: '20px'
    },
    '.swiper-pagination':{
        fontSize:'12px'
    },
    '.swiper':{
        paddingLeft:'0.5rem',
        paddingRight:'0.5rem'
    },
    '.swiper-pagination-bullet':{
        width:'122px'
    },
    '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet': {
        margin: '0 var(--swiper-pagination-bullet-horizontal-gap,7px) !important'
    },
},
'@media(min-width: 319px) and (max-width: 375px)': {
    '.img':{
        height:'250px'
    },
    '.dining-title': {
        padding: '0px 10px',
        font: '20px'
    },
    '.swiper':{
        paddingLeft:'0.5rem',
        paddingRight:'0.5rem'
    },
    '.swiper-pagination-bullet':{
        width:'105px'
    },
    '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet': {
        margin: '0 var(--swiper-pagination-bullet-horizontal-gap,7px) !important'
    },
},
'@media(min-width: 1px) and (max-width: 320px)': {
    '.img':{
        height:'250px'
    },
    '.dining-title': {
        padding: '0px 10px',
        font: '20px'
    },
    '.swiper':{
        paddingLeft:'0.5rem',
        paddingRight:'0.5rem'
    },
    '.swiper-pagination-bullet':{
        width:'89px'
    },
    '.swiper-pagination':{
        lineHeight:'20px'
    },
    '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet': {
        margin: '0 var(--swiper-pagination-bullet-horizontal-gap,6px) !important'
    },
}
})
const DiningPage = (props) => {
    let labels = ['Conscious Dining', 'Championing Chefs', 'Community'];
    return (
        <React.Fragment>
            <MainContentBox>
                <Typography className="dining-title">
                    {props.title}
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
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    speed={500}
                    navigation={false}
                    modules={[Pagination,Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className='img' src={props.image}></img></SwiperSlide>
                    <SwiperSlide><img className='img'  src={props.image}></img></SwiperSlide>
                    <SwiperSlide><img className='img' src={props.image}></img></SwiperSlide>
                    ...
                </Swiper>
            </MainContentBox>
        </React.Fragment>
    )
}

export default DiningPage;
