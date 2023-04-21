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
import { ImageListItem } from "@mui/material";
import UsersContext from "../context/UsersContext";

const MainBox = styled(Box)({
    ".swiper-button-prev": {
        left: "3%",
        position: "fixed",
        color: "#ddd",
    },
    ".swiper-button-next": {
        right: "3%",
        position: "fixed",
        color: "#ddd",
    },
    ".mySwiper": {
        margin: "auto",
        display: "block",
        width: "75%",
        boxShadow: "0 0 8px rgb(0 0 0 / 60%)",
    },
    ".swiper-slide": {
        maxHeight: "100%",
        maxWidth: "100%",
        alignSelf: "center",
    },
});
const ImagePopCarousel = ({ title }) => {
    const getEventId = "640b22b691e7236a1d0a264e";
    const { setEventId, userData } = useContext(UsersContext);
    const itemData = [
        {
            img: userData?.experinces[0]?.cover_picture ? userData?.experinces[0]?.cover_picture : userData?.details?.gallery_pictures[0],
            title: "chef1",
        },
        {
            img: userData?.details?.gallery_pictures[0],
            title: " sGallery",
        },
        {
            img: userData?.details?.gallery_pictures[1],
            title: "chef2",
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
                            title === "chef1"
                                ? 0
                                : title === "sGallery"
                                    ? 1
                                    : title === "chef2"
                                        ? 2
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
export default ImagePopCarousel;
