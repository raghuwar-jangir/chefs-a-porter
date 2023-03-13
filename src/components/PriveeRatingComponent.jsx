import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {  Autoplay,Pagination } from "swiper";
import {styled} from '@mui/system';
import {Rating} from '@mui/material';
import '../assets/styles/fontStyle.css';

const images = [
    {
        mainTitle: '"Mako and his eccentric Personality, lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality, lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality, lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality, lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality, lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
];


const PriveeRatingComponent = ({backgroundColor}) => {
    const [value, setValue] = useState(4);

    const StyledRating = styled(Rating)({
        '& .MuiRating-icon': {
            fontSize: '40px',
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            '& .MuiRating-icon': {
                fontSize: '24px',
            },
        },
    });

    const BoxWrapper = styled(Box)(() => ({
        padding: '40px 150px',
        background: '#DCD7CB',
        color: '#222222',
        ".mainTitle": {
            fontSize: '24px ',
            lineHeight: '36px',
            textAlign: 'center',
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight:700
        },
        ".details": {
            textAlign: 'center',
            fontSize: '24px',
            lineHeight: '29px',
            fontFamily: 'ProximaNovaA-Regular !important',
            padding: '0px 200px',
        },
        ".star": {
            height: '40px',
            textAlign: "center",
            padding: '22px 0px',
            color: '#000',
        },
        ".ceoName": {
            textAlign: "center",
            fontSize: "20px",
            fontWeight: 600,
            padding: '30px 0px 24px 0px ',
            fontFamily: 'ProximaNovaA-Regular',
            textTransform: 'uppercase',
            marginBottom:'20px'
        },
        '.rating-star': {
            color: '#222222 !important ',
            borderColor: '#222222 !important'
        },
        '.css-dqr9h-MuiRating-label': {
            fontSize: '40px'
        },
        '.swiper-pagination-bullet':{
            width:'8px',
            height:'8px',
            background:'transparent',
            opacity:1,
            border:'0.672852px solid rgba(34, 34, 34, 0.5)',
            borderRadius:'100px',
            margin:'0px 10px !important'
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
        "@media (min-width: 700px) and (max-width:768px)": {
            ".mainTitle": {
                fontSize: '24px ',
                lineHeight: '30px',
                textAlign: 'center',
                fontFamily: 'Bon Vivant',
                fontStyle: 'normal',
            },
            '.css-dqr9h-MuiRating-label': {
                fontSize: '23px'
            },
            ".details": {
                textAlign: 'center',
                fontSize: '14px',
                lineHeight: '17px',
                fontFamily: 'Proxima Nova !important',
                // padding: '0px 50px',
            },
            ".ceoName": {
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                padding: '30px 0px 24px 0px ',
                fontFamily: 'Proxima Nova',
                textTransform: 'uppercase'
            },
        },
        "@media (min-width: 768px) and (max-width:1020px)": {
            padding: '40px 20px',
            ".mainTitle": {
                fontSize: '24px ',
                lineHeight: '36px',
                textAlign: 'center',
                fontFamily: 'Bon Vivant',
                fontStyle: 'normal',

            },
            '.css-dqr9h-MuiRating-label': {
                fontSize: '23px'
            },
            ".details": {
                textAlign: 'center',
                fontSize: '16px',
                lineHeight: '17px',
                fontFamily: 'Proxima Nova !important',
                padding: '0px 10px',
            },
            ".ceoName": {
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                padding: '30px 0px 24px 0px ',
                fontFamily: 'Proxima Nova',
                textTransform: 'uppercase'
            },
        },

        "@media (min-width: 1024px) and (max-width:1450px)": {
            padding: '80px 206px',
            ".details": {
                textAlign: 'center',
                fontSize: '24px',
                lineHeight: '29px',
                fontFamily: 'Proxima Nova !important',
                padding: '0px 100px',
            },
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            padding: '40px 20px',
            ".mainTitle": {
                fontSize: '24px ',
                lineHeight: '36px',
                textAlign: 'center',
                fontFamily: 'Bon Vivant',
                fontStyle: 'normal',
            },
            '.css-dqr9h-MuiRating-label': {
                fontSize: '23px'
            },
            ".details": {
                textAlign: 'center',
                fontSize: '14px',
                lineHeight: '17px',
                fontFamily: 'Proxima Nova !important',
                padding: '0px 5px',
            },
            ".ceoName": {
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                padding: '30px 0px 24px 0px ',
                fontFamily: 'Proxima Nova',
                textTransform: 'uppercase'
            },
            '.swiper-pagination-bullet-active':{
                width:'7px !important',
                height:'7px !important'
            },
            '.swiper-pagination-bullet':{
                width:'4px',
                height:'4px',
                margin:'0px 5px !important'
            }
        },
        "@media (min-width: 430px) and (max-width:768px)": {
            '.swiper-pagination-bullet':{
                width:'4px',
                height:'4px',
                margin:'0px 5px !important'
            }
        }
    }))
    return (
        <BoxWrapper
            // sx={{ maxWidth: 400, flexGrow: 1 }}
        >
            <Box>
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
                                <Typography
                                    className='star'
                                >
                                    <StyledRating className='rating-star'
                                                  name="simple-controlled"
                                                  value={value}
                                                  onChange={(event, newValue) => {
                                                      setValue(newValue);
                                                  }}
                                    />
                                </Typography>
                                <Typography className='details'>
                                    {step.details}
                                </Typography>
                                <Typography>
                                    {step.name}
                                </Typography>
                                <Typography className='ceoName'>
                                    {step.ceoName}
                                </Typography>
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>
            </Box>
        </BoxWrapper>
    );
}

export default PriveeRatingComponent;
