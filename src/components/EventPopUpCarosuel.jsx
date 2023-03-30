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

const EventPopUpCarousel = ({ title }) => {
  const getEventId = "640b22b691e7236a1d0a264e";
  const { setEventId, userData } = useContext(UsersContext);
  const itemData = [
    {
      img: userData.cover_picture,
      title: "chef1",
    },
    {
      img: userData.user.details.gallery_pictures[0],
      title: "sGallery",
    },
    {
      img: userData.user.details.gallery_pictures[0],
      title: "sGallery",
    },
    {
      img: userData.user.details.gallery_pictures[1],
      title: "chef2",
    },
    {
      img: userData.user.details.gallery_pictures[1],
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
                : title === "sGallery"
                ? 2
                : title === "chef2"
                ? 3
                : title === "chef2"
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
export default EventPopUpCarousel;
