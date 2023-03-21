import React, {useContext} from "react";
import {Box, styled} from '@mui/system';
import {Button, Typography} from "@mui/material";
import cop1 from '../assets/images/cop1.png';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import '../assets/styles/fontStyle.css';
import HomeContext from "../context/HomeContext";
import * as _ from "lodash";


const CorporateBooking = () => {
    const BoxWrapper = styled(Box)({
        '.main-box': {
            background: '#F3F3F3',
            padding: '40px 0px'
        },
        '.title': {
            textAlign: 'center',
            fontSize: '24px',
            lineHeight: '30px',
            fontWeight: 700,
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            color: '#080B0E',
            marginBottom: '0.5rem'
        },
        '.carousel-box': {
            display: 'flex',
            background: '#FFFFFF',
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
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '20px',
            color: '#080B0E'
        },
        '.person-position': {
            fontSize: '16px',
            lineHeight: '19px',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            marginBottom: '4px'
        },
        '.person-name': {
            fontFamily: 'ProximaNovaA-Regular',
            fontSize: '16px',
            lineHeight: '24px',
            fontStyle: 'normal',
            fontWeight: '600',
            textTransform: 'uppercase',
            marginBottom: '8px'
        },
        '.booking-btn': {
            fontSize: '16px',
            lineHeight: '19px',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: 600,
            marginTop: '16px',
            width: '162px !important',
            display: 'block',
            border: '0.694469px solid #080B0E',
            padding: '12px',
            textAlign: 'center',
            borderRadius: '1px',
            color: 'black',
            background: 'none',
            textTransform: 'math-auto'
        },
        '.booking-btn:hover': {
            color: '#C6A87D !important',
            backgroundColor: 'white'
        },
        '.img': {
            width: '212px',
            height: '260px',
            marginLeft: '40px',
            objectFit: 'cover'
        },
        '.swiper': {
            width: '625px'
        },
        '.swiper-slide': {
            width: '586px !important',
            boxShadow: '0px 20px 24px rgb(0 0 0 / 6%)'
        },
        '.swiper-pagination': {
            position: 'relative',
            paddingTop: '10px',
            bottom: '0px',
            background: '#F3F3F3',
            display: 'flex',
            placeContent: 'center',
            alignItems: 'center'

        },
        '.swiper-pagination-bullet': {
            width: '9px',
            height: '9px',
            margin: '5px 7px',
            background: '#D6D6D6',
            border: '1px solid black',
        },
        '.swiper-pagination-bullet:hover': {
            backgroundColor: 'black'
        },
        '.swiper-pagination-horizontal': {
            bottom: '0px !important'
        },
        '.swiper-pagination-bullet-active': {
            background: '#222222!important',
            width: '14px',
            height: '14px',
        },
        '@media(min-width: 375px) and (max-width: 425px)': {
            '.person-parts': {
                flexFlow: 'row-reverse'
            },
            '.carousel-box': {
                width: '367px',
                padding: '0px',
                margin: '0px auto 0px',
            },
            '.person-details': {
                marginLeft: '6px',
                paddingTop: '0px'
            },
            '.img': {
                marginLeft: '0px',
                width: '130px',
                height: '205px'
            },
            '.swiper': {
                width: '410px'
            },
            '.swiper-slide': {
                width: '412px !important'
            },
            ".title": {
                marginLeft: '4%',
                textAlign: 'start',
                fontSize: '20px',
                lineHeight: '25px',
                marginBottom: '1.5rem'
            },
            '.main-box': {
                backgroundColor: '#FBFBFB'
            },
            '.booking-btn': {
                width: '96% !important',
                fontSize: '14px',
                lineHeight: '17px'
            },
            '.swiper-pagination': {
                backgroundColor: '#FBFBFB'
            },
            ".swiper-pagination-bullet-active": {
                width: '6px',
                height: "6px"
            },
            '.main-details': {
                fontSize: '14px',
                lineHeight: '20px'
            },
            '.person-position': {
                fontSize: '14px',
                lineHeight: '17px'
            },
            '.person-name': {
                fontSize: '14px',
                lineHeight: '150%'
            }
        },
        '@media(min-width: 322px) and (max-width: 375px)': {
            '.swiper-slide': {
                width: '340px !important'
            },
            ".title": {
                marginBottom: '1.5rem'
            },
            '.carousel-box': {
                margin: '0px auto 0px',
            },
            '.swiper': {
                width: '339px'
            },
            ".main-details": {
                marginBottom: '8px',
                fontSize: '14px'
            },
            '.booking-btn': {
                marginTop: '8px',
                lineHeight: '17px',
                fontSize: '14px'
            },
            '.person-position': {
                fontSize: '14px',
                lineHeight: '17px'
            },
            '.person-name': {
                fontSize: '14px',
                lineHeight: '150%'
            }
        },
        '@media(min-width: 1px) and (max-width: 320px)': {
            '.person-parts': {
                flexFlow: 'row-reverse'
            },
            '.img': {
                marginLeft: '-6px',
                width: '130px',
                height: '256px'
            },
            ".title": {
                marginBottom: '-0.5rem'
            },
            '.swiper': {
                width: '303px !important'
            },
            '.swiper-slide': {
                width: '286px !important'
            },
            '.booking-btn': {
                width: '100% !important',
                fontSize: '14px',
                padding: '10px',
                lineHeight: '17px'
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
                fontSize: '14px',
                lineHeight: '150%'
            },
            '.main-details': {
                fontSize: '14px'
            },
            '.swiper-pagination': {
                backgroundColor: '#FBFBFB'
            },
            '.main-box': {
                backgroundColor: '#FBFBFB'
            },
            ".title": {
                marginLeft: '4%',
                textAlign: 'start',
                fontSize: '20px',
                lineHeight: '25px'
            },
            '.carousel-box': {
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
                paddingTop: '0px',
                paddingBottom: '0px'
            },
            ".swiper-pagination-bullet-active": {
                width: '6px',
                height: "6px"
            },
        },
    });

    const {data} = useContext(HomeContext);

    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className='main-box'>
                    {
                        !_.isEmpty(data) &&
                        <React.Fragment>
                            <Box>
                                <Typography className="title">{data.corporate.title}</Typography>
                            </Box>
                            <Swiper loop={true} modules={[Pagination]} className="mySwiper" grabCursor={true}
                                    pagination={{clickable: true}}>
                                {
                                    data.corporate.content.map((item) => {
                                        return (
                                            <SwiperSlide className='carousel-box'>
                                                <Box className='person-parts'>
                                                    <Box className='person-details'>
                                                        <Typography
                                                            className="main-details">{item.description}</Typography>
                                                        <Typography
                                                            className="person-position">{item.position}</Typography>
                                                        <Typography className="person-name">{item.name}</Typography>
                                                        <Button className="booking-btn"
                                                                href="/corporate-booking">{item.button_text}</Button>
                                                    </Box>
                                                    <Box>
                                                        <img className="img"
                                                             src={item.image}
                                                        />
                                                    </Box>
                                                </Box>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </React.Fragment>
                    }
                </Box>
            </BoxWrapper>
            </React.Fragment>
    )
}
export default CorporateBooking;
