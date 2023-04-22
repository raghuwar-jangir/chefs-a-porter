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
import * as _ from "lodash";
import ticketedImage from '../assets/images/ticeketd.jpeg'

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
    const itemData =
        {
            // img: userData?.chef?.picture,
            img: ticketedImage,
        }
    const itemData2 = _.map(_.get(userData,'pictures',[]), (item,index) => {
        return {
            img: item,
        }
    })
console.log("userData=====>",userData);
    const combinedArray = [itemData, ...itemData2];

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
                            title === "chef"
                                ? 0
                                : title === "sGallery"
                                    ? 1
                                    : title === "chef1"
                                        ? 2
                                        : title === "chef2"
                                            ? 3
                                            : title === "chef3"
                                                ? 4
                                                : 0
                        }`}
                    >
                        {combinedArray.map((item) => (
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
