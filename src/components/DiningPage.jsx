import {Box, Stack, styled, Typography} from '@mui/material';
import React, {useContext, useRef, useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay, Pagination} from "swiper";
import "swiper/css/pagination";
import '../assets/styles/fontStyle.css';
import CmsContext from "../context/CmsContext";
import * as _ from "lodash";


const DiningPage = (props) => {
    const {header, carouselImg,title} = props
    const MainContentBox = styled(Box)({
        backgroundColor: '#101418',
        padding: '32px 0px',
        '.dining-content': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '17px',
            color: '#FBFBFB',
            padding: '4px 69px'
        },
        '.dining-title': [{
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '30px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
            padding: '0px 120px',
            marginBottom: '20px',
        }, header],
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
        '.dining-img': [{
            width: '100%',
            height: '550px',
            objectFit: 'cover'
        }, carouselImg],
        '.swiper-pagination-bullet': {
            borderRadius: '0px',
            height: '2px',
            width: '200px',
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
            bottom: '-22px !important',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '35px',
            color: '#FBFBFB',
            // padding: '4px 69px',
            position: 'relative'
        },
        '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet': {
            margin: '0 var(--swiper-pagination-bullet-horizontal-gap,19px) !important'
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
            '.dining-img': {
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
            '.dining-img': {
                height: '250px'
            },
            '.dining-title': {
                padding: '0px 29px',
                font: '20px'
            },
            '.swiper-pagination': {
                fontSize: '12px'
            },
            '.swiper': {
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem'
            },
            '.swiper-pagination-bullet': {
                width: '122px'
            },
            '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet': {
                margin: '0 var(--swiper-pagination-bullet-horizontal-gap,7px) !important'
            },
        },
        '@media(min-width: 319px) and (max-width: 375px)': {
            '.dining-img': {
                height: '250px'
            },
            '.dining-title': {
                padding: '0px 10px',
                font: '20px'
            },
            '.swiper': {
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem'
            },
            '.swiper-pagination-bullet': {
                width: '105px'
            },
            '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet': {
                margin: '0 var(--swiper-pagination-bullet-horizontal-gap,7px) !important'
            },
        },
        '@media(min-width: 1px) and (max-width: 320px)': {
            '.dining-img': {
                height: '250px'
            },
            '.dining-title': {
                padding: '0px 10px',
                font: '20px'
            },
            '.swiper': {
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem'
            },
            '.swiper-pagination-bullet': {
                width: '89px'
            },
            '.swiper-pagination': {
                lineHeight: '20px'
            },
            '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet': {
                margin: '0 var(--swiper-pagination-bullet-horizontal-gap,6px) !important'
            },
        }
    })

    const {data} = useContext(CmsContext);

    const labels = data.home.what_we_cook.content.map((item) => {
        return item.text
    })

    const image = data.home.what_we_cook.content.map((item) => {
        return item.image
    })

    return (
        <React.Fragment>
            <MainContentBox>
                {
                    !_.isEmpty(data?.home) &&
                    <React.Fragment>
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
                                delay: 8000,
                                disableOnInteraction: false,
                            }}
                            speed={500}
                            navigation={false}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            {image.map((item) => {
                                return <SwiperSlide><img className='dining-img' src={item}></img></SwiperSlide>
                            })}
                            ...
                        </Swiper>
                    </React.Fragment>
                }
            </MainContentBox>
        </React.Fragment>
    )
}

export default DiningPage;
