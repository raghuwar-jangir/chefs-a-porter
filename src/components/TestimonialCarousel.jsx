import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/system';
import {Rating} from '@mui/material';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination} from "swiper";
import HomeContext from "../context/HomeContext";
import * as _ from "lodash";

const TestimonialCarousel = () => {
    const [value, setValue] = useState(4);

    const {data} = useContext(HomeContext);


    const BoxWrapper = styled(Box)(() => ({
        padding: '40px 0px',
        background: '#DCD7CB',
        color: '#222222',
        ".mainTitle": {
            fontSize: '24px ',
            lineHeight: '30px',
            fontWeight: '700',
            textAlign: 'center',
            fontFamily: 'Bon Vivant !important',
            fontStyle: 'normal',
            letterSpacing: '0.06em',
            paddingBottom: '20px'
        },
        ".details": {
            textAlign: 'center',
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: '400',
            fontFamily: 'ProximaNovaA-Regular',
            padding: '0px 250px 20px ',
            marginBottom: '30px'
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
            fontFamily: 'Proxima Nova',
            textTransform: 'uppercase'
        },
        '.rating-star': {
            color: '#222222',
            borderColor: '#222222'
        },
        '.css-dqr9h-MuiRating-label': {
            fontSize: '40px'
        },
        '.swiper-pagination-bullet': {
            width: '8px',
            height: '8px',
            background: 'transparent',
            opacity: 1,
            border: '0.672852px solid rgba(34, 34, 34, 0.5)',
            borderRadius: '100px',
            margin: '0px 10px !important'
        },
        '.swiper-pagination-bullet-active': {
            width: '12px',
            height: '12px',
            background: '#222222',
        },
        '.swiper-pagination': {
            display: 'flex',
            placeItems: 'center',
            justifyContent: 'center'
        },
        '@media(min-width: 430px) and (max-width: 768px)': {
            padding: '40px 20px',
            '.details': {
                padding: '20px',
                fontSize: '16px',
                textAlign: 'center',
            },
            '.swiper-pagination-bullet': {
                width: '4px',
                height: '4px',
                margin: '0px 5px !important'
            },
            ".details": {
                marginBottom: '10px',
                padding: '0px 0px 20px ',
            }
        },
        '@media(min-width: 1px) and (max-width: 425px)': {
            padding: '40px 20px',
            '.details': {
                padding: '20px',
                fontSize: '16px',
                textAlign: 'center',
            },
            '.swiper-pagination-bullet': {
                width: '4px',
                height: '4px',
                margin: '0px 5px !important'
            },
            ".details": {
                marginBottom: '10px',
                padding: '0px 0px 20px ',
            },
            '.swiper-pagination-bullet-active': {
                width: '7px !important',
                height: '7px !important'
            },
        },
    }))

    return (
        <BoxWrapper>
            {
                !_.isEmpty(data) &&
                <React.Fragment>
                    <Swiper autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                            pagination={{
                                clickable: true,
                            }} modules={[Autoplay, Pagination]} className="mySwiper">
                        {data.news_reviews.content.map((step, index) => (
                            <div key={index}>
                                <SwiperSlide className='main-div'>
                                    <Typography className='mainTitle'>
                                        {step.title}
                                    </Typography>
                                    <Typography className='details'>
                                        {step.description}
                                    </Typography>
                                    <Typography>
                                        {step.name}
                                    </Typography>
                                </SwiperSlide>
                            </div>
                        ))}
                    </Swiper>
                </React.Fragment>
            }
        </BoxWrapper>
    );
}

export default TestimonialCarousel;
