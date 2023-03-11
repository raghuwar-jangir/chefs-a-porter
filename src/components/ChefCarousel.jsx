import React, { useContext,useRef,useState,useEffect } from "react";
import { Box, styled, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import masterChef from "./../assets/images/masterChef.png"
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import supperChef1 from '../assets/images/su-club1.png';
import supperChef2 from '../assets/images/su-club2.mp4';
import supperChef3 from '../assets/images/su-club3.png';

const ChefCarousel = () => {
    const BoxWrapper = styled(Box)(() => ({
        backgroundColor: '#DCD7CB',
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
        ".chef-name": {
            padding: '8px 8px 0px',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontSize: '16px',
            fontWeight:600,
            lineHeight: '19px',
            color: '#101418',
            marginBottom: '0px',
        },
        ".chef-details": {
            padding: '0 8px 8px',
    fontFamily: 'Proxima Nova Alt',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '15px',
    color: '#101418',
        },
        '.swiper': {
            height: '428px',
            width:'100%',
            paddingBottom:'40px'
          },
          '.supper-heading':{
            fontFamily: 'Bon Vivant',
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight:700,
    letterSpacing: '0.06em',
    color: '#080B0E',
    margin: '0px 16px 20px',
    paddingTop:'40px'
          },
          '.swiper-slide':{
            boxShadow: '0px 8px 10px rgb(0 0 0 / 6%)',
            background: 'rgb(251 251 251 / 80%)',
            height:'fit-content',
          },
          '.supper-img':{
            objectFit:'cover',
            height:'370px',
            width:'100%'
          },
    }))
    return (
        <BoxWrapper>
            <Typography className="supper-heading">Past Supper Clubs</Typography>
                        <Swiper
        slidesPerView={3}
        slidesPerGroupSkip={1}
        spaceBetween={4}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <Box class="swiper">
        <SwiperSlide class="swiper-slide"><img className='supper-img' src={supperChef1} />
        <Box>
            <Typography className="chef-name">Chef Karan Thakker</Typography>
            <Typography className="chef-details">Surburbia, Banglore East</Typography>
            </Box>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide"><video  autoPlay muted loop controls={false}  className="supper-img" src={supperChef2}
          />
        <Box>
            <Typography className="chef-name">Chef Karan Thakker</Typography>
            <Typography className="chef-details">Surburbia, Banglore East</Typography>
            </Box>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide"><img className="supper-img" src={supperChef3} />
        <Box>
            <Typography className="chef-name">Chef Mako</Typography>
            <Typography className="chef-details">Surburbia, Banglore East</Typography>
            </Box>
            </SwiperSlide>
        <SwiperSlide class="swiper-slide"><img className="supper-img" src={supperChef1} />
        <Box>
            <Typography className="chef-name">Chef Karan Thakker</Typography>
            <Typography className="chef-details">Surburbia, Banglore East</Typography>
            </Box>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide"><video  autoPlay muted loop controls={false}  className="supper-img" src={supperChef2}
          />
        <Box>
            <Typography className="chef-name">Chef Karan Thakker</Typography>
            <Typography className="chef-details">Surburbia, Banglore East</Typography>
            </Box>
            </SwiperSlide>
        <SwiperSlide class="swiper-slide"><img className="supper-img" src={supperChef3} />
        <Box>
            <Typography className="chef-name">Chef Mako</Typography>
            <Typography className="chef-details">Surburbia, Banglore East</Typography>
            </Box>
            </SwiperSlide>
        </Box>
      </Swiper>
        </BoxWrapper>
    );
}
export default ChefCarousel;
