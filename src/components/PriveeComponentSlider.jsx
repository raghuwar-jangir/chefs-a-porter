import React, {useContext} from "react";
import {Box, styled, Typography} from "@mui/material";
import image1 from '../assets/images/ig1.png';
import image2 from '../assets/images/ig2.png';
import image3 from '../assets/images/ig3.png';
import image4 from '../assets/images/ig4.png';
import image5 from '../assets/images/ig5.png';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import '../assets/styles/fontStyle.css'
import CmsContext from "../context/CmsContext";
import * as _ from "lodash";

const  PriveeComponentSlider = (props) => {
    const {data} = useContext(CmsContext);

    const WrapBox = styled(Box) ({
        '.main-box':{
            background: '#101418',
            padding: '80px 0px',
            textAlign: 'center'
        },
        '.peek-heading':{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight:250,
            fontSize: '24px',
            lineHeight: '29px',
            textAlign: 'center',
            color: '#FBFBFB',
            marginBottom: '0.5rem'
        },
        '.peek-name':{
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight:400,
            fontSize: '36px',
            lineHeight: '44px',
            textAlign: 'center',
            color: '#C6A87D',
            marginBottom:'0.5rem'
        },
        '.slider-box':{
            marginTop:'30px'
        },
        '.img-box':{
            width: '306.833px',
            marginRight: '8px',
            padding:'0px 0px !important'
        },
        '.img':{
            width: '100%',
            height: '230.54px',
            objectFit: 'cover'
        },
        '.biYdFZ':{
            left:'31% important'
        },
        '@media(min-width: 430px) and (max-width: 768px)': {
            '.main-box':{
                display:'none'
            }
        },
        '@media(min-width: 1px) and (max-width: 425px)': {
            '.img':{
                width: '100%',
                height: '111px',
                objectFit: 'cover'
            },
            '.peek-heading':{
                fontFamily: 'Proxima Nova Alt',
                fontStyle: 'normal',
                fontWeight:250,
                fontSize: '20px',
                lineHeight: '24px',
                textAlign: 'center',
                color: '#FBFBFB',
                marginBottom: '0.5rem'
            },
            '.peek-name':{
                fontFamily: 'ProximaNovaA-Regular',
                fontStyle: 'normal',
                fontWeight:400,
                fontSize: '20px',
                lineHeight: '24px',
                textAlign: 'center',
                color: '#C6A87D',
                marginBottom:'0.5rem'
            },
            '.main-box':{
                padding: '40px 0px',
            },
        }
    })
    return(
        <WrapBox>
            <Box className='main-box'>
                {
                    !_.isEmpty(data?.privee) &&
                    <>
                        <Box>
                            <Typography className="peek-heading">{data.privee.private_dining.title}</Typography>
                            <Typography className="peek-name">@Privée</Typography>
                        </Box>
                        <Box className='slider-box'>
                            <Swiper
                                // slidesPerView={6}
                                // spaceBetween={8}
                                className="mySwiper"
                                breakpoints={{
                                    320:{
                                        slidesPerView:3,
                                        spaceBetween: 8,
                                    },
                                    375:{
                                        slidesPerView:3,
                                        spaceBetween: 8,
                                    },
                                    425: {
                                        slidesPerView:3,
                                        spaceBetween: 8,
                                    },
                                    768: {
                                        slidesPerView: 6,
                                        spaceBetween: 8,
                                    },
                                    1024: {
                                        slidesPerView: 6,
                                        spaceBetween: 8,
                                    },
                                    1440: {
                                        slidesPerView: 6,
                                        spaceBetween: 8,
                                    },
                                    2560: {
                                        slidesPerView: 6,
                                        spaceBetween: 8,
                                    },
                                }}>
                                {data.privee.private_dining.images.map((item)=>{
                                    return(
                                        <SwiperSlide><img className="img" src={item}/></SwiperSlide>
                                    )

                                })}
                            </Swiper>
                        </Box>
                    </>
                }
            </Box>
        </WrapBox>
    )
}
export default PriveeComponentSlider;
