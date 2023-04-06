import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, styled, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import teamImg from "../assets/images/team.png";
import { FreeMode, Thumbs, Navigation } from "swiper";
import "../assets/styles/fontStyle.css";
import CmsContext from "../context/CmsContext";
import * as _ from "lodash";

const LookLikeCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const { data } = useContext(CmsContext);

    // const ImageData = [
    //     {
    //         img:teamImg
    //     },
    //     {
    //         img:teamImg
    //     },
    //     {
    //         img:teamImg
    //     },
    //     {
    //         img:teamImg
    //     },
    //     {
    //         img:teamImg
    //     },
    //     {
    //         img:teamImg
    //     }
    // ]
    const style = {
        background: "#080B0E",
        marginTop: "0px",
        padding: "80px 120px",
        ".swiper-box": {
            boxSizing: "border-box",
        },
        ".swiper-heading": {
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "30px",
            lineHeight: "37px",
            textAlign: "center",
            letterSpacing: "0.06em",
            color: "#FBFBFB",
        },
        ".mySwiper2": {
            position: "relative",
            marginTop: "30px",
            width: "100%",
        },
        ".swiper2-img": {
            height: "448px",
            objectFit: "cover",
            width: "100%",
        },
        ".swiper2-slide": {
            width: "100%",
        },
        ".mySwiper": {
            padding: "30px 0px 0px",
            width: "90%",
        },
        ".swiper-img": {
            objectFit: "cover",
            boxShadow: "0px 8px 14px rgba(0, 0, 0, 0.06)",
            width: "100%",
            height: "90px",
            background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) !important",
            opacity: "0.8",
        },
        " .mySwiper .swiper-slide-thumb-active": {
            border: "2px solid #FBFBFB",
        },
        ".swiper1-slide": {
            height: "90px",
        },
        ".view-gallery": {
            position: "absolute",
            whiteSpace: "pre",
            zIndex: 2,
            fontFamily: "Proxima Nova Alt",
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "17px",
            color: "#FBFBFB",
            top: "0px",
            height: "100%",
            display: "flex",
            left: "0px",
            right: "0px",
            textAlign: "center",
            background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))",
            justifyContent: "center",
            placeItems: "center",
        },
        "@media (min-width: 1px) and (max-width:767px)": {
            padding: "40px 16px !important",
            ".swiper-heading": {
                fontSize: "24px",
                lineHeight: "30px",
            },
            '.swiper2-img':{
                height:"200px"
            },
            '.swiper1-slide':{
                height:"57px"
            },
            '.swiper-img':{
                height:"57px"
            },
            '.mySwiper':{
                width:'100%'
            }
        },
    };
    return (
        <React.Fragment>
            {!_.isEmpty(data?.supper_club) && (
                <Box sx={style}>
                    <Box className="swiper-box">
                        <Typography className="swiper-heading">
                            See what our supper clubs look like
                        </Typography>
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            loop={true}
                            spaceBetween={10}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Thumbs]}
                            className="mySwiper2"
                        >
                            {data.supper_club.looks.content.map((item, index) => (
                                <Box key={index}>
                                    <SwiperSlide className="swiper2-slide">
                                        <img className="swiper2-img" src={item} />
                                    </SwiperSlide>
                                </Box>
                            ))}
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={false}
                            spaceBetween={16}
                            slidesPerView={6}
                            watchSlidesProgress={false}
                            modules={[Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            {data.supper_club.looks.content.map((item, index) => (
                                <Box key={index}>
                                    <SwiperSlide className="swiper1-slide">
                                        <img className="swiper-img" src={item} />
                                        {index === data.supper_club.looks.content.length - 1 && (
                                            <Box>
                                                <Typography className="view-gallery">
                                                    View <br /> Gallery
                                                </Typography>
                                            </Box>
                                        )}
                                    </SwiperSlide>
                                </Box>
                            ))}
                        </Swiper>
                    </Box>
                </Box>
            )}
        </React.Fragment>
    );
};
export default LookLikeCarousel;
