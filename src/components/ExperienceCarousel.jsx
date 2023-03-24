import React, {useContext} from "react";
import {Box, styled, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import AvlExperienceCarousel from "./AvlExperienceCarousel";
import avlExp1 from "../assets/images/avl-exp1.jpg";
import avlExp2 from "../assets/images/avl-exp2.jpg";
import '../assets/styles/fontStyle.css'
import CmsContext from "../context/CmsContext";
import * as _ from "lodash";

const ExperienceCarousel = (props) => {

    const {data} = useContext(CmsContext)

    const WrapBox = styled(Box)({
        '.main-box': {
            background: '#101418 !important',
            padding: '80px 0px',
            textAlign: 'center'
        },
        '.peek-heading': {
            fontFamily: 'Bon Vivant !important',
            fontSize: '24px !important',
            lineHeight: '30px !important',
            color: '#FBFBFB !important',
            textAlign: 'center !important',
            letterSpacing: '0.06em',
            fontWeight: 700
        },
        '.slider-box': {
            marginTop: '40px'
        },
        ".swiper-slide": {
            width: '350px !important'
        },
        '.pl': {
            paddingLeft: '120px'
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            '.main-box': {
                display: 'none'
            },
        },
        "@media (min-width: 768px) and (max-width:1024px)": {
            ".swiper-slide": {
                width: '250px !important'
            },
            '.pl': {
                paddingLeft: '70px'
            },
        },
    })
    return (
        <WrapBox>
            {
                !_.isEmpty(data) &&
                <Box className='main-box'>
                    <Box>
                        <Typography className="peek-heading">{props.title}</Typography>
                    </Box>
                    <Box className='slider-box'>
                        <Swiper
                            slidesPerView={4.5}
                            spaceBetween={8}
                            className="mySwiper pl"
                        >
                            {data.privee.experiences.experiences.results.map((item) => {
                                return (
                                    <>
                                        <SwiperSlide><AvlExperienceCarousel
                                            // image={item.user.picture}
                                            image={item.user.picture}
                                            title={item.title} description={`by ${item.user.name}`}
                                            isLabelShow={item.status && true}/></SwiperSlide>
                                    </>
                                )
                            })}
                        </Swiper>
                    </Box>
                </Box>
            }
        </WrapBox>
    )
}
export default ExperienceCarousel;