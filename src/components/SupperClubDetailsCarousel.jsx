import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Rating } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {  Autoplay,Pagination } from "swiper";


const images = [
    {
        mainTitle: '"Mako and his eccentric Personality,',
        subTitle:'lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality,',
        subTitle:'lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality,',
        subTitle:'lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality,',
        subTitle:'lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality,',
        subTitle:'lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
];
const BoxWrapper = styled(Box)(() => ({
    padding: '80px 80px 40px',
    background: "#FBFBFB",
    color: '#222222',
    ".mainTitle": {
        fontSize: "24px",
        lineHeight:'150% ',
        textAlign: "center",
        fontFamily: 'Bon Vivant',
        fontWeight:700,
        fonStyle:'normal'
    },
    ".details": {
        textAlign: "center",
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: '24px',
        fontFamily:'ProximaNovaA-Regular'
    },
    ".star": {
        textAlign: "center",
        padding: '22px 0px',
        color: '#000',
    },
    ".ceoName": {
        textAlign: "center",
        fontSize: "16px",
        padding: '30px 0px 24px 0px ',
        fontFamily: 'ProximaNovaA-Regular',
        fonStyle: 'normal',
        lineHeight: '20px',
        textTransform: 'uppercase',
        color: '#080B0E',
        marginBottom:'32px',
        fontWeight:600
    },
    '.swiper-pagination-bullet':{
        width:'8px',
        height:'8px',
        background:'transparent',
        opacity:1,
        border:'0.672852px solid rgba(34, 34, 34, 0.5)',
        borderRadius:'100px',
        margin:'0px 5px !important'
    },
    '.swiper-pagination-bullet-active':{
        width:'12px',
        height:'12px',
        background:'#222222',
    },
    '.swiper-pagination':{
        display:'flex',
        placeItems:'center',
        justifyContent:'center'
    },
    '.swiper':{
        width:'100%'
    },
    "@media (min-width: 1px) and (max-width:768px)": {
        '.swiper-pagination-bullet':{
            width:'4px',
            height:'4px',
            margin:'0px 8px !important'
        }
    }


}))

const SupperClubDetailsCarousel = () => {
    const [value, setValue] = useState(4);
    return (
        <BoxWrapper>
            <Swiper autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
                    pagination={{
                        clickable: true,
                    }} modules={[Autoplay,Pagination]} className="mySwiper">
                {images.map((step, index) => (
                    <div key={index}>
                        <SwiperSlide className='main-div'>
                            <Typography className='mainTitle'>
                                {step.mainTitle}
                            </Typography>
                            <Typography className='mainTitle'>
                                {step.subTitle}
                            </Typography>
                            <Typography
                                className='star'
                            >
                                <Rating
                                    sx={{
                                        color: '#222222',
                                        borderColor: '#222222'
                                    }}
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    size="large"
                                />
                            </Typography>
                            <Typography className='details'>
                                {step.details}
                            </Typography>
                            <Typography >
                                {step.name}
                            </Typography>
                            <Typography className='ceoName'>
                                {step.ceoName}
                            </Typography>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </BoxWrapper>
    );
}

export default SupperClubDetailsCarousel;
