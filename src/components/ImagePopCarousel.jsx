import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styled from "styled-components";
import { Box } from "@mui/system";
import UsersContext from "../context/UsersContext";
import * as _ from "lodash";

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
    const { userData } = useContext(UsersContext);

    const itemData = _.map(_.get(userData, "experinces", []), (item, index) => {
        return {
            img: item.cover_picture,
        };
    });

    const newData = itemData.pop();

    const itemData2 = _.map(
        _.get(userData?.details, "gallery_pictures", []),
        (item, index) => {
            return {
                img: item,
            };
        }
    );

    const combinedArray = [newData, ...itemData2];

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
export default ImagePopCarousel;
