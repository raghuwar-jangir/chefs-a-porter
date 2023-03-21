import * as React from 'react';
import {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination} from "swiper";
import {styled} from '@mui/system';
import * as _ from "lodash";
import {Rating} from '@mui/material';
import HomeContext from "../context/HomeContext";

const RatingCarousel = (props) => {
    const {backgroundColor, isFontSize, details, padding} = props
    const {data} = useContext(HomeContext);
    const [value, setValue] = useState();

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
        background: `${backgroundColor}`,
        color: '#222222',
        ".mainTitle": {
            fontSize: '40px ',
            lineHeight: '60px',
            textAlign: 'center',
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
        },
        ".details": {
            textAlign: 'center',
            fontSize: '24px',
            lineHeight: '29px',
            fontFamily: 'ProximaNovaA-Regular',
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
            textTransform: 'uppercase'
        },
        '.rating-star': {
            color: '#222222 !important ',
            borderColor: '#222222 !important'
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
        "@media (min-width: 700px) and (max-width:768px)": {
            ".mainTitle": {
                fontSize: '24px ',
                lineHeight: '30px',
                textAlign: 'center',
            },
            '.css-dqr9h-MuiRating-label': {
                fontSize: '23px'
            },
            ".details": {
                textAlign: 'center',
                fontSize: '14px',
                lineHeight: '17px',
                // padding: '0px 50px',
            },
            ".ceoName": {
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                padding: '30px 0px 24px 0px ',
                textTransform: 'uppercase'
            },
        },
        "@media (min-width: 768px) and (max-width:1024px)": {
            padding: '40px 100px',
            ".mainTitle": {
                fontSize: '24px ',
                lineHeight: '30px',
                textAlign: 'center',
            },
            '.css-dqr9h-MuiRating-label': {
                fontSize: '23px'
            },
            ".details": {
                textAlign: 'center',
                fontSize: '16px',
                lineHeight: '17px',
                padding: '0px 10px',
            },
            ".ceoName": {
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                padding: '30px 0px 24px 0px ',
                textTransform: 'uppercase'
            },
        },

        "@media (min-width: 1100px) and (max-width:1450px)": {
            padding: '40px 120px',
            ".details": {
                textAlign: 'center',
                fontSize: '24px',
                lineHeight: '29px',
                padding: '0px 100px',
            },
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            padding: '40px 20px',
            ".mainTitle": {
                fontSize: '22px ',
                lineHeight: '30px',
                textAlign: 'center',
                fontStyle: 'normal',
            },
            '.css-dqr9h-MuiRating-label': {
                fontSize: '23px'
            },
            ".details": {
                textAlign: 'center',
                fontSize: '14px',
                lineHeight: '17px',
                padding: '0px 5px',
            },
            ".ceoName": {
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                padding: '30px 0px 24px 0px ',
                textTransform: 'uppercase'
            },
            '.swiper-pagination-bullet-active': {
                width: '7px !important',
                height: '7px !important'
            },
            '.swiper-pagination-bullet': {
                width: '4px',
                height: '4px',
                margin: '0px 5px !important'
            }
        },
        "@media (min-width: 430px) and (max-width:768px)": {
            '.swiper-pagination-bullet': {
                width: '4px',
                height: '4px',
                margin: '0px 5px !important'
            }
        }
    }))
    return (
        <BoxWrapper
            // sx={{ maxWidth: 400, flexGrow: 1 }}
        >
            {
                !_.isEmpty(data) &&
                <React.Fragment>
                    <Box>
                        <Swiper autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                                pagination={{
                                    clickable: true,
                                }} modules={[Autoplay, Pagination]} className="mySwiper">

                            {data.reviews.reviews.map((step, index) => (
                                <div key={index}>
                                    <SwiperSlide className='main-div'>
                                        <Typography className='mainTitle'>
                                            {step.title}
                                        </Typography>
                                        <Typography className='star'>
                                            <StyledRating className='rating-star'
                                                          name="simple-controlled"
                                                          value={step.rating}
                                                // onChange={(event, newValue) => {
                                                //     setValue(newValue);
                                                // }}
                                            />
                                        </Typography>
                                        <Typography className='details'>
                                            {step.description}
                                        </Typography>
                                        <Typography>
                                            {step.name}
                                        </Typography>
                                        <Typography className='ceoName'>
                                            {step.reviewer}
                                        </Typography>
                                    </SwiperSlide>
                                </div>
                            ))}
                        </Swiper>
                    </Box>
                </React.Fragment>
            }
        </BoxWrapper>
    );
}

export default RatingCarousel;
