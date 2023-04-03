import {Box, styled, Typography} from '@mui/material';
import React, {useContext} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay, Pagination} from "swiper";
import "swiper/css/pagination";
import diningPicture from '../assets/images/cook1.png'
import "swiper/css/pagination";
import UsersContext from "../context/UsersContext";
import CmsContext from "../context/CmsContext";
import * as _ from "lodash";


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
    '.content-box': {
        display: 'flex',
        justifyContent: 'center',
        marginRight: '34px'
    },
    '.active': {
        padding: '0px !important '
    },
    '.swiper': {
        width: '100%'
    },
    '.img-box': {
        padding: '0px'
    },
    '.img': {
        width: '100%',
        height: '352px',
        objectFit: 'cover'
    },
    '.swiper-pagination-bullet': {
        borderRadius: '0px',
        width: '280px',
        height: '4px',
        background: '#FBFBFB',
        opacity: '1',
        margin: '16px !important'
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
        fontSize: '12px',
        lineHeight: '35px',
        color: '#FBFBFB',
        position: 'relative',
    },
    '@media(min-width: 1px) and (max-width: 768px)': {
        '.img': {
            height: '250%',
            width: '50%',
        },

        '.dining-content': {
            width: '10px',
            font: '12px',
            padding: '4px 46px'
        },
        '.content-box': {
            marginRight: '65px'
        }
    },
    '@media(min-width: 2000px) and (max-width: 2560px)': {
        '.swiper-pagination-bullet': {
            width: '403px',
            height: '4px',
            margin: '18px !important'
        },
        '.swiper-pagination': {
            bottom: '-10px !important'
        }
    },
    '@media(min-width: 1024px) and (max-width: 1440px)': {
        '.swiper-pagination-bullet': {
            width: '187px',
            height: '4px',
            margin: '15px !important'
        },
        '.swiper-pagination': {
            bottom: '-10px !important'
        }
    },
    '@media(min-width: 768px) and (max-width: 1024px)': {
        '.swiper-pagination-bullet': {
            width: '117px',
            margin: '14px !important'
        },
        '.swiper-pagination': {
            bottom: '-10px !important'
        }
    },
    '@media(min-width: 320px) and (max-width: 768px)': {
        '.img': {
            width: '100%',
        },
        '.dining-title': {
            padding: '0px 16px',
            font: '20px'
        },
        '.swiper-pagination-bullet': {
            width: '148px',
            margin: '6px !important'
        },
        '.swiper-pagination': {
            bottom: '0px !important'
        }
    },
    '@media(min-width: 375px) and (max-width: 425px)': {
        '.swiper-pagination-bullet': {
            width: '130px',
            margin: '4px !important'
        },
        '.swiper-pagination': {
            bottom: '0px !important'
        }
    },
    '@media(min-width: 320px) and (max-width: 375px)': {
        '.swiper-pagination-bullet': {
            width: '110px',
            margin: '5px !important'
        },
        '.swiper-pagination': {
            bottom: '0px !important'
        }
    },
    '@media(min-width: 1px) and (max-width: 320px)': {
        padding: '32px 0px 0px 0px',
        '.swiper-pagination-bullet': {
            width: '97px',
            margin: '4px !important'
        },
        '.swiper-pagination': {
            fontSize: '11px',
            bottom: '0px !important'
        }
    }
})

const EventChefCarousel = (props) => {

    const {userData} = useContext(UsersContext);
    const {data} = useContext(CmsContext);

    const labels = userData?.user?.details?.sliders?.map((item) => {
        return item.text
    })

    const image = userData?.user?.details?.sliders?.map((item) => {
        return item.image
    })

    // let labels = ['Conscious Dining', 'Championing Chefs', 'Community'];
    const {title} = props
    return (
        <React.Fragment>
            <MainContentBox>
                {
                    !_.isEmpty(userData) &&
                    <>
                        <Typography className="dining-title">
                            {userData.user.role} {userData.user.name} Creations
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
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            {image?.map((item) => {
                                return <SwiperSlide><img className='img' src={item}></img></SwiperSlide>
                            })}
                            ...
                        </Swiper>
                    </>
                }
            </MainContentBox>
        </React.Fragment>
    )
}

export default EventChefCarousel;
