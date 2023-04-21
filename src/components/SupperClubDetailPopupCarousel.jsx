import React, { useContext, useEffect, useState } from "react";
import chef1 from "./../assets/images/chef5.png";
import chef2 from "./../assets/images/chef6.png";
import sGallery from "./../assets/images/sc-gallery.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styled from "styled-components";
import { Box } from "@mui/system";
import "../assets/styles/fontStyle.css";
import UsersContext from "../context/UsersContext";

const MainBox = styled(Box)({
    ".swiper-button-prev": {
        left: "3%",
        position: "fixed",
        color: "rgba(255, 255, 255, 0.5)",
    },
    ".swiper-button-next": {
        right: "3%",
        position: "fixed",
        color: "rgba(255, 255, 255, 0.5)",
    },
    ".mySwiper": {
        margin: "auto",
        display: "block",
        width: "75%",
        backgroundColor: "rgba(0,0,0,.8)",
        // boxShadow: '0 0 8px rgb(0 0 0 / 60%)'
    },
    ".swiper-slide": {
        maxHeight: "100%",
        maxWidth: "100%",
        alignSelf: "center",
    },
    "@media (min-width: 1px) and (max-width:768px)": {
        ".swiper": {
            width: "100%",
        },
    },
});

const SupperClubDetailPopupCarousel = ({ title }) => {
    const getEventId = "640b22b691e7236a1d0a264e";
    const { setEventId, userData } = useContext(UsersContext);
    const itemData = [
        {
            img: userData?.pictures[0],
            title: "img1",
        },
        {
            img: userData?.pictures[1] ? userData?.pictures[1] : userData?.pictures[0],
            title: "img2",
        },
        {
            img: userData?.pictures[2] ? userData?.pictures[1] : userData?.pictures[0],
            title: "img3",
        },
        {
            img: userData?.pictures[3] ? userData?.pictures[1] : userData?.pictures[0],
            title: "img4",
        },
        {
            img: userData?.pictures[4] ? userData?.pictures[1] : userData?.pictures[0],
            title: "img5",
        },
    ];
    return (
        <React.Fragment>
            <MainBox>
                <Box style={{ background: "rgba(0, 0, 0, 0.8)" }}>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        grabCursor={true}
                        className="mySwiper"
                        initialSlide={`${
                            title === "img1"
                                ? 0
                                : title === "img2"
                                    ? 1
                                    : title === "img3"
                                        ? 2
                                        : title === "img4"
                                            ? 3
                                            : title === "img5"
                                                ? 4
                                                : 0
                        }`}
                    >
                        {itemData.map((item) => (
                            <SwiperSlide>
                                <img className="carousel-img" src={item.img} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </MainBox>
        </React.Fragment>
    );
};
export default SupperClubDetailPopupCarousel;
