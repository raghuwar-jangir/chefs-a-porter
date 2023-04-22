import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styled from "styled-components";
import { Box } from "@mui/system";
import "../assets/styles/fontStyle.css";
import UsersContext from "../context/UsersContext";
import * as _ from "lodash";

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

const EventPopUpCarousel = ({ title }) => {
    const getEventId = "640b22b691e7236a1d0a264e";
    const { userData } = useContext(UsersContext);

    const itemData = {
        img: userData.cover_picture,
    };

    const itemData2 = _.map(_.get(userData, "pictures", []), (item, index) => {
        return {
            img: item,
        };
    });

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
export default EventPopUpCarousel;
