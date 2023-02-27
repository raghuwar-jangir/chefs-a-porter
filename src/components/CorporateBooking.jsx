import React from "react";
import {Box, styled} from '@mui/system';
import {Button, Typography} from "@mui/material";
import cop1 from '../assets/images/cop1.png';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";


const CorporateBooking = () => {
    const BoxWrapper = styled(Box)({
        '.main-box': {
            background: '#F3F3F3',
            padding: '70px 0px'
        },
        '.title': {
            textAlign: 'center',
            fontSize: '24px',
            lineHeight: '30px',
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            color: '#080B0E',
            marginBottom: '0.5rem'
        },
        '.carousel-box': {
            display: 'flex',
            background: '#FFFFFF',
            boxShadow: '0px 20px 24px rgb(0 0 0 / 6%)',
            padding: '20px',
            margin: '30px auto 0px',
            width: '598px'
        },
        '.person-parts': {
            display: 'flex',
            position: 'relative'
        },
        '.person-details': {
            paddingLeft: '0px',
            paddingTop: '30px',
            position: 'relative'
        },
        '.main-details': {
            fontSize: '16px',
            marginBottom: '16px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '20px',
            color: '#080B0E'
        },
        '.person-position': {
            fontSize: '16px',
            lineHeight: '20px',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '300',
            marginBottom: '4px'
        },
        '.person-name': {
            fontFamily: 'ProximaNovaA-Regular',
            fontSize: '16px',
            lineHeight: '24px',
            fontStyle: 'normal',
            fontWeight: '400',
            textTransform: 'uppercase',
            marginBottom: '8px'
        },
        '.booking-btn': {
            fontSize: '16px',
            lineHeight: '19px',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
            marginTop: '16px',
            width: '162px !important',
            display: 'block',
            border: '0.694469px solid #080B0E',
            padding: '12px',
            textAlign: 'center',
            borderRadius: '1px',
            color: 'black',
            background: 'none',
        },
        '.btn:hover': {
            color: '#C6A87D !important',
            backgroundColor: 'white'
        },
        '.img': {
            width: '195px',
            height: '260px',
            marginLeft: '15px'
        },
        '.swiper': {
            width: '625px'
        },
        '.swiper-slide': {
            width: '586px !important'
        },
        '.swiper-pagination': {
            position: 'relative',
            paddingTop: '4%',
            bottom: '0px',
            background: '#F3F3F3'
        },
        '.swiper-pagination-bullet': {
            width: '9px',
            height: '9px',
            margin: '5px 7px',
            background: '#D6D6D6',
            border: '1px solid black',
        },
        '.swiper-pagination-bullet-active': {
            background: '#222222!important',
            width: '10px',
            height: '10px',
        },
        '@media(min-width: 375px) and (max-width: 425px)': {
            '.person-parts': {
                flexFlow: 'row-reverse'
            },
            '.carousel-box': {
                width: '367px',
                padding: '0px'
            },
            '.person-details': {
                marginLeft: '6px',
                paddingTop: '0px'
            },
            '.img': {
                marginLeft: '0px',
                width: '143px',
                height: '222px'
            },
            '.swiper': {
                width: '410px'
            },
            '.swiper-slide': {
                width: '412px !important'
            },
            ".title": {
                marginLeft: '4%',
                textAlign: 'start'
            },
            '.main-box': {
                backgroundColor: '#FBFBFB'
            },
            '.booking-btn': {
                width: '96% !important'
            },
            '.swiper-pagination': {
                backgroundColor: '#FBFBFB'
            },
            ".swiper-pagination-bullet-active": {
                width: '8px',
                height: "8px"
            },
        },
        '@media(min-width: 320px) and (max-width: 375px)': {
            '.swiper-slide': {
                width: '340px !important'
            },
            '.swiper': {
                width: '339px'
            },
            ".main-details": {
                marginBottom: '2px'
            },
            '.booking-btn': {
                marginTop: '8px'
            }
        },
        '@media(min-width: 1px) and (max-width: 320px)': {
            '.person-parts': {
                flexFlow: 'row-reverse'
            },
            '.img': {
                height: '275px',
                width: '161px',
                marginLeft: '-12px',
                objectFit: 'cover'
            },
            '.swiper': {
                width: '314px'
            },
            '.swiper-slide': {
                width: '272px !important'
            },
            '.booking-btn': {
                width: '100% !important',
                fontSize: '14px',
                padding: '10px'
            },
            '.person-details': {
                paddingLeft: '3%',
                paddingTop: '0px',
                fontSize: '14px'
            },
            '.person-position': {
                fontSize: '14px'
            },
            '.person-name': {
                fontSize: '13px'
            },
            '.main-details': {
                fontSize: '13px'
            },
            '.swiper-pagination': {
                backgroundColor: '#FBFBFB'
            },
            '.main-box': {
                backgroundColor: '#FBFBFB'
            },
            ".title": {
                marginLeft: '4%',
                textAlign: 'start'
            },
        },
    });
    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className='main-box'>
                    <Box>
                        <Typography className="title">Corporate bookings</Typography>
                    </Box>
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper" grabCursor={true} loop={true}
                            pagination={{
                                clickable: true,
                            }}>
                        <SwiperSlide className='carousel-box'>
                            <Box className='person-parts'>
                                <Box className='person-details'>
                                    <Typography className="main-details">I had chef Mako over to host a few business
                                        partners. The dinner experience was absolutely amazing and he makes amazing
                                        Sushi!</Typography>
                                    <Typography className="person-position">CEO, Accenture</Typography>
                                    <Typography className="person-name">Pratyush Shah</Typography>
                                    <Button className="booking-btn">Know More</Button>
                                </Box>
                                <Box>
                                    <img className="img"
                                         src={cop1}
                                    />
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide className='carousel-box'>
                            <Box className='person-parts'>
                                <Box className='person-details'>
                                    <Typography className="main-details">I had chef Mako over to host a few business
                                        partners. The dinner experience was absolutely amazing and he makes amazing
                                        Sushi!</Typography>
                                    <Typography className="person-position">CEO, Accenture</Typography>
                                    <Typography className="person-name">Pratyush Shah</Typography>
                                    <Button className="booking-btn">Know More</Button>
                                </Box>
                                <Box>
                                    <img className="img"
                                         src={cop1}
                                    />
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide className='carousel-box'>
                            <Box className='person-parts'>
                                <Box className='person-details'>
                                    <Typography className="main-details">I had chef Mako over to host a few business
                                        partners. The dinner experience was absolutely amazing and he makes amazing
                                        Sushi!</Typography>
                                    <Typography className="person-position">CEO, Accenture</Typography>
                                    <Typography className="person-name">Pratyush Shah</Typography>
                                    <Button className="booking-btn">Know More</Button>
                                </Box>
                                <Box>
                                    <img className="img"
                                         src={cop1}
                                    />
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide className='carousel-box'>
                            <Box className='person-parts'>
                                <Box className='person-details'>
                                    <Typography className="main-details">I had chef Mako over to host a few business
                                        partners. The dinner experience was absolutely amazing and he makes amazing
                                        Sushi!</Typography>
                                    <Typography className="person-position">CEO, Accenture</Typography>
                                    <Typography className="person-name">Pratyush Shah</Typography>
                                    <Button className="booking-btn">Know More</Button>
                                </Box>
                                <Box>
                                    <img className="img"
                                         src={cop1}
                                    />
                                </Box>
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default CorporateBooking;