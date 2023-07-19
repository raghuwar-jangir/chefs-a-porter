import React, {useContext} from "react";
import {Box, styled, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css";
import AvlExperienceCarousel from "./AvlExperienceCarousel";
import avlExp1 from "../assets/images/avl-exp1.jpg";
import avlExp2 from "../assets/images/avl-exp2.jpg";
import '../assets/styles/fontStyle.css'
import CmsContext from "../context/CmsContext";
import * as _ from "lodash";
import {navigate} from "gatsby";

const ExperienceCarousel = (props) => {

    const {data} = useContext(CmsContext)

    console.log('data',data)

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
            letterSpacing:'0.06em',
            fontWeight:700
        },
        '.slider-box': {
            marginTop: '40px'
        },
        ".swiper-button-prev, .swiper-button-next" : {
            height: "100%",
            background: "#0000008c",
            top: "0",
            padding: "0 10px",
        },
        ".swiper-button-prev" : {
            left: "0"
        },
        ".swiper-button-next" : {
            right: "0"
        },
        ".swiper-slide": {
            width: '401px !important'
        },
        '.pl': {
            paddingLeft: '120px'
        },
        '.img':{
            height:"299.31px !important"
        },
        "@media (min-width: 1px) and (max-width:431px)": {
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
                !_.isEmpty(data?.privee) &&
                <Box className='main-box'>
                    <Box>
                        <Typography className="peek-heading">{props.title}</Typography>
                    </Box>
                    <Box className='slider-box'>
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "white",
                                "--swiper-navigation-size": "30px",
                            }}
                            loop={true}
                            slidesPerView={4}
                            spaceBetween={20}
                            navigation={true}
                            modules={[Navigation, Pagination]}
                            className="mySwiper pl"
                        >
                            {data.privee.experiences.experiences.results.map((item) => {
                                return (
                                    <>
                                        <SwiperSlide><AvlExperienceCarousel
                                            className="img"
                                            // image={item.user.picture}
                                            image={item.cover_picture}
                                            title={item.title} description={`by ${item.user.name}`}
                                            isLabelShow={item.status && true}
                                            onClick={() => navigate(`/event-details/${item?.id}`)}
                                        /></SwiperSlide>
                                    </>
                                )
                            })}
                            {data.privee.experiences.experiences.results.map((item) => {
                                return (
                                    <>
                                        <SwiperSlide><AvlExperienceCarousel
                                            className="img"
                                            // image={item.user.picture}
                                            image={item.cover_picture}
                                            title={item.title} description={`by ${item.user.name}`}
                                            isLabelShow={item.status && true}
                                            onClick={() => navigate(`/event-details/${item?.id}`)}
                                        /></SwiperSlide>
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
