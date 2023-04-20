import React, {useContext, useRef, useState, useEffect} from "react";
import {Box, styled, Typography} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import masterChef from "./../assets/images/masterChef.png";
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import supperChef1 from "../assets/images/su-club1.png";
import supperChef2 from "../assets/images/su-club2.mp4";
import supperChef3 from "../assets/images/su-club3.png";
import UsersContext from "../context/UsersContext";
import {Navigation, Pagination} from "swiper";

const SupperClubDetailsPastCarousel = (props) => {

    const {userData} = useContext(UsersContext)

    const {
        slidesPerView,
        isBackground,
        chefHeading,
        supperHeadingMain,
        isPadding,
        detailsBox,
        header,
        details,
        swiperImg,
    } = props;
    const BoxWrapper = styled(Box)(() => ({
        backgroundColor: `${isBackground ? "#FBFBFB" : "#DCD7CB"}`,
        padding: `${isPadding ? "0px 120px 80px" : "0px 0 40px 0px"}`,
        ".carousel .thumb": {
            border: "0px",
        },
        ".carousel .thumbs": {
            padding: "0px",
        },
        ".carousel .thumb.selected, .carousel .thumb:hover": {
            border: "1px solid #fff",
        },
        ".carousel.carousel-slider .control-arrow": {
            display: "none",
        },
        ".carousel .thumbs-wrapper": {
            margin: "0px",
        },
        ".slide": {
            width: "250px",
            paddingRight: "8px",
        },
        ".chef-name": [
            {
                padding: "8px 8px 0px",
                fontFamily: "Proxima Nova Alt",
                fontStyle: "normal",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "19px",
                color: "#101418",
                marginBottom: "0px",
            },
            header,
        ],
        ".chef-details": [
            {
                padding: "0 8px 8px",
                fontFamily: "Proxima Nova Alt",
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: "12px",
                lineHeight: "15px",
                color: "#101418",
            },
            details,
        ],
        ".chef-swiper": {
            height: "428px",
            width: "100%",
            paddingBottom: "40px",
        },
        ".supper-heading": [
            {
                fontFamily: "Bon Vivant",
                fontStyle: "normal",
                fontSize: "24px",
                lineHeight: "30px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "#080B0E",
                margin: "0px 16px 20px",
                paddingTop: "40px",
            },
            supperHeadingMain,
        ],
        ".swiper-slide": {
            boxShadow: "0px 8px 10px rgb(0 0 0 / 6%)",
            background: "rgb(251 251 251 / 80%)",
            height: "fit-content",
        },
        ".supper-img": [
            {
                objectFit: "cover",
                height: "370px",
                width: "100%",
            },
            swiperImg,
        ],
        ".supper-swiper": {
            width: "100%",
        },
        ".supper-details-box": {
            backgroundColor: `${detailsBox ? "#DCD7CB" : ""}`,
        },
        "@media (min-width: 1px) and (max-width:767px)": {
            ".supper-heading": {
                fontSize: "20px",
                lineHeight: "25px",
            },
        },
    }));
    return (
        <BoxWrapper>
            <Typography className="supper-heading">{chefHeading}</Typography>
            <Swiper
                style={{
                    "--swiper-navigation-color": "none",
                    "--swiper-navigation-size": "0px",
                }}
                // rewind={true}
                spaceBetween={4}
                slidesPerView={3}
                // navigation={true}
                pagination={{
                    clickable: true,
                }}
                className="supper-swiper"
                slidesPerGroupSkip={1}
            >
                <Box className="chef-swiper">
                    {
                        userData?.chef?.details?.supper_club?.map((item) => {
                            return (
                                <>
                                    <SwiperSlide className="swiper-slide supper-details-box">
                                        <img className="supper-img" src={item.pictures}/>
                                        <Box>
                                            <Typography className="chef-name">{item.title}</Typography>
                                            <Typography className="chef-details">
                                                {item.venue}
                                            </Typography>
                                        </Box>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }

                </Box>
            </Swiper>
        </BoxWrapper>
    );
};
export default SupperClubDetailsPastCarousel;
