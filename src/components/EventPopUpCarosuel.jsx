import React from "react";
import chef1 from "./../assets/images/chef5.png";
import chef2 from "./../assets/images/chef6.png";
import sGallery from "./../assets/images/sc-gallery.png";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import styled from "styled-components";
import {Box} from "@mui/system";
import '../assets/styles/fontStyle.css'

const MainBox = styled(Box)({
    ".swiper-button-prev": {
        left: '3%',
        position: "fixed",
        color: 'rgba(255, 255, 255, 0.5)'
    },
    '.swiper-button-next': {
        right: '3%',
        position: 'fixed',
        color: 'rgba(255, 255, 255, 0.5)'
    },
    '.mySwiper': {
        margin: 'auto',
        display: 'block',
        width: '75%',
        backgroundColor: 'rgba(0,0,0,.8)'
        // boxShadow: '0 0 8px rgb(0 0 0 / 60%)'
    },
    '.swiper': {
        width: '70%',
        height: '100%',
    },
    "@media (min-width: 1px) and (max-width:768px)": {
        '.swiper': {
            width: '100%'
        }
    }
});

const EventPopUpCarousel = () => {
    const itemData = [
        {
            img: chef1,
        },
        {
            img: sGallery,
        },
        {
            img: sGallery,
        },
        {
            img: chef2,
        },
        {
            img: chef2,
        },
    ];
    return (
        <React.Fragment>
            <MainBox>
                <Box>
                    <Swiper navigation={true} modules={[Navigation]} grabCursor={true} className="mySwiper">
                        {itemData.map((item) => (
                            <SwiperSlide><img src={item.img}/></SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </MainBox>
        </React.Fragment>
    )
}
export default EventPopUpCarousel;
