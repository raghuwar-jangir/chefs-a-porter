import React, {useContext, useRef, useState, useEffect} from "react";
import {Box, styled, Typography} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import masterChef from "./../assets/images/masterChef.png"
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import supperChef1 from '../assets/images/su-club1.png';
import supperChef2 from '../assets/images/su-club2.mp4';
import supperChef3 from '../assets/images/su-club3.png';
import CmsContext from "../context/CmsContext";

const BehindScenesCarousel = (props) => {

    const {
        // slidesPerView,
        isBackground,
        chefHeading,
        supperHeadingMain,
        isPadding,
        detailsBox,
        header,
        details,
        swiperImg
    } = props

    const {data} = useContext(CmsContext);

    const BoxWrapper = styled(Box)(() => ({
        backgroundColor: `${isBackground ? '#FBFBFB' : '#DCD7CB'}`,
        padding: `${isPadding ? '0px 120px 80px' : '0px'}`,
        ".carousel .thumb": {
            border: '0px',
        },
        ".carousel .thumbs": {
            padding: "0px"
        },
        ".carousel .thumb.selected, .carousel .thumb:hover": {
            border: '1px solid #fff'
        },
        ".carousel.carousel-slider .control-arrow": {
            display: "none"
        },
        ".carousel .thumbs-wrapper": {
            margin: "0px"
        },
        ".slide": {
            width: "250px",
            paddingRight: '8px',
        },
        ".chef-name": [{
            padding: '8px 8px 0px',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '19px',
            color: '#101418',
            marginBottom: '0px',
        }, header],
        ".chef-details": [{
            padding: '0 8px 8px',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '12px',
            lineHeight: '15px',
            color: '#101418',
        }, details],
        '.chef-swiper': {
            height: '428px',
            width: '100%',
            paddingBottom: '40px'
        },
        '.supper-heading': [{
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontSize: '24px',
            lineHeight: '30px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            color: '#080B0E',
            margin: '0px 16px 20px',
            paddingTop: '40px'
        }, supperHeadingMain],
        '.swiper-slide': {
            boxShadow: '0px 8px 10px rgb(0 0 0 / 6%)',
            background: 'rgb(251 251 251 / 80%)',
            height: 'fit-content',
        },
        '.supper-img': [{
            objectFit: 'cover',
            height: '370px',
            width: '100%'
        }, swiperImg],
        '.supper-swiper': {
            width: '100%'
        },
        '.supper-details-box': {
            backgroundColor: `${detailsBox ? '#DCD7CB' : ''}`,
        },
        "@media (min-width: 321px) and (max-width:767px)": {
            padding:'40px 16px',
            '.supper-heading':{
                padding:'0px !important'
            },
            '.chef-name':{
                fontSize:'16px !important',
                lineHeight:'19px !important'
            },
            '.chef-details':{
                fontSize:'12px !important',
                lineHeight:'15px !important'
            }
        },
        "@media (min-width: 1px) and (max-width:320px)": {
            padding:'40px 16px',
            '.supper-heading':{
                padding:'0px !important'
            },
            '.chef-name':{
                fontSize:'13px !important',
                lineHeight:'15px !important'
            },
            '.chef-details':{
                fontSize:'12px !important',
                lineHeight:'15px !important'
            }
        }
    }))
    return (
        <BoxWrapper>
            <Typography className="supper-heading">{data.supper_club.behind_scenes.title}</Typography>
            <Swiper
                slidesPerView={4}
                slidesPerGroupSkip={1}
                spaceBetween={20}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={{
                   320:{
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    767:{
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024:{
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                }}
                className="supper-swiper"
            >
                <Box className="chef-swiper">
                    {
                        data.supper_club.behind_scenes.content.map((item) => {
                            return (
                                <SwiperSlide className="swiper-slide supper-details-box">
                                    <img className='supper-img' src={item.image}/>
                                    <Box>
                                        <Typography className="chef-name">{item.name}</Typography>
                                        <Typography className="chef-details">{item.location}</Typography>
                                    </Box>
                                </SwiperSlide>
                            )

                        })
                    }

                </Box>
            </Swiper>
        </BoxWrapper>
    );
}
export default BehindScenesCarousel;
