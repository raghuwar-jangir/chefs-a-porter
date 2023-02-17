import { Box, Stack, styled, Typography } from '@mui/material';
import React, { useRef, useState }  from 'react';
import { Link } from 'gatsby';
// import Carousel from 'react-bootstrap/Carousel';
// import Slider from 'infinite-react-carousel';
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination} from "swiper";
import "swiper/css/pagination";
// import "swiper/css/navigation";
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
            // textAlign:'center'
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
//         webkitTransition: 'background-color 5s ease-out',
//   mozTransition: 'background-color 5s ease-out',
//   oTransition: 'background-color 5s ease-out',
//   transition: 'background-color 8s linear',
    },
    '.swiper-pagination-bullet-active':{
        // background:'linear-gradient(to left, red 50%, blue 50%) right',
        // backgroundPosition: 'left',
        // transition: '.5s ease-out',',
        // width: '0%',
        // height: '100%',
        // borderRadius: '10px',
        // backgroundImage: 'linear-gradient(to right,blue , white)',
        // backgroundSize: '360px 100%',
        // transition: 'width 200ms'


        // background: 'linear-gradient(to left, salmon 50%, lightblue 50%) right',
        // backgroundSize: '200%',
        // transition: '.5s ease-out',
        // backgroundPosition: 'left',
    //  backgroundColor:'#C6A87D',
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
            // width:'100px'
           
        },
        '100%' :{
            background:'#C6A87D',
            // opacity: '2'
            // width:'200px'
        }
    },
    '.swiper-pagination':{
        bottom:'-5px !important',
    },
    '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet':{
        margin:'0 var(--swiper-pagination-bullet-horizontal-gap,19px) !important'
    },
    // '.carousel-dots li button:before':{
    // '.carousel-dots':{
      
    //             content: `'-'`,
    //             color:'red !important'       
           
        
    // }
    // '.test':{
    //     color:'red',
    //     content:`'-'`
    // }
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
        // height:'250%',
        width:'94%',
        padding:'0px 3%'
    },
    '.dining-title':{
        padding:'0px 29px',
        font:'20px'
    }
}
})

const DiningPage = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
    return (
        <React.Fragment>
            <MainContentBox>
                <Typography className="dining-title">
                    What we cook for
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
      <SwiperSlide><img className='img' src={diningPicture}></img></SwiperSlide>
      <SwiperSlide><img className='img'  src={diningPicture}></img></SwiperSlide>
      <SwiperSlide><img className='img' src={diningPicture}></img></SwiperSlide>
      ...
    </Swiper>
    <Box className='content-box'>
        <Typography className='dining-content'>Conscious Dining</Typography>
        <Typography className='dining-content'>Championing Chefs</Typography>
        <Typography className='dining-content'>Community</Typography>
      </Box>
                {/* <Slider dots={true} arrows={false} dotsClass='carousel-dots'>
    <Box className='img-box'>
      <img className='img' src={diningPicture}/>
      </Box>
      <Box className='img-box'>
    <img className='img' src={diningPicture}/>
    </Box>
    <Box className='img-box'>
    <img className='img' src={diningPicture}/>
    </Box>
  </Slider> */}
  {/* <Slider {...settings}>
    <Box className='img-box'>
      <img className='img' src={diningPicture}/>
      </Box>
      <Box className='img-box'>
    <img className='img' src={diningPicture}/>
    </Box>
    <Box className='img-box'>
    <img className='img' src={diningPicture}/>
    </Box>
  </Slider> */}
                {/* <Stack className='dining-content' direction="row" spacing={2}>
                    <DiningProgress className='title' title='Conscious Dining' />
                    <DiningProgress className='title' title='Championing Chefs' />
                    <DiningProgress className='title' title='Community' />
                </Stack> */}
            </MainContentBox>
        </React.Fragment>
    )
}

export default DiningPage;


// import React from 'react'
// import { Fragment } from 'react'

// // import classes from '../assets/styles/bergerMenu.css'

// const DiningPage = props => {

//     let [minorSlideImg, setMinorSlideImg] = React.useState(0)

//     let minorSlides = [
//         {
//             img: require('../assets/images/diningPicture.png'),
//             alt: 'Produto 1',
//             linkText: ['PRODUTO 5', '$ 19.99'],
//             productId: 5,
//             bg: 'rgb(151, 105, 105)'
//         },
//         {
//             img: require('../assets/images/cook1.png'),
//             alt: 'Produto 1',
//             linkText: ['PRODUTO 5', '$ 19.99'],
//             productId: 5,
//             bg: 'rgb(151, 105, 105)'
//         },
//         {
//             img: require('../assets/images/cook1.png'),
//             alt: 'Produto 1',
//             linkText: ['PRODUTO 5', '$ 19.99'],
//             productId: 5,
//             bg: 'rgb(151, 105, 105)'
//         },
//         {
//             img: require('../assets/images/cook1.png'),
//             alt: 'Produto 1',
//             linkText: ['PRODUTO 5', '$ 19.99'],
//             productId: 5,
//             bg: 'rgb(151, 105, 105)'
//         },
//     ]
    
//     const passSlideHandler = () => {
//         if (minorSlideImg < minorSlides.length - 1) {
//             setMinorSlideImg(minorSlideImg + 1)
//         } else {
//             setMinorSlideImg(0)
//         }
//     }   
    
//     React.useEffect(() => {
//         const interval = setTimeout(() => {
//             passSlideHandler()
//         }, 5000);
//         return () => clearTimeout(interval);
//     });    


//     return (
//         <Fragment>
//             <div 
//                 // className={classes.MinorSlider_subContainer} 
//                 style={{backgroundColor: minorSlides[minorSlideImg].bg}} // <= This is what I'd like to remove
//             >
//                 <img 
//                     src={minorSlides[minorSlideImg].img}
//                     alt={"img-1"} 
//                 />
//             </div>
//         </Fragment>
//     )
// }

// export default DiningPage
