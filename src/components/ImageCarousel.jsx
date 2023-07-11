import React, { useContext } from "react";
import sGallery from "./../assets/images/sc-gallery.png";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import {Box} from "@mui/material";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import "../assets/styles/fontStyle.css";
import UsersContext from "../context/UsersContext";
import _ from "lodash";

const ImageCarousel = () => {
    const pagination = {
        clickable: true,
    };
    
    const MainBox = styled(Box)({
        paddingTop: '30px',
        ".carousel-img": {
            height: "270px",
            objectFit: "cover",
            width: '100%'
        },
        '.swiper-pagination': {
            display: 'flex',
            justifyContent: 'center',
            placeItems: 'center',
            bottom: '20px !important'
        },
        '.swiper-pagination-bullet': {
            width: '7px',
            height: '7px',
            background: 'transparent',
            border: '1px solid #FBFBFB',
            opacity: '1',
            margin: ' 0 var(--swiper-pagination-bullet-horizontal-gap,7px) !important'
        },
        '.swiper-pagination-bullet-active': {
            background: '#FBFBFB',
            width: '10px',
            height: '10px'
        },
        "@media (min-width: 768px) and (max-width:2560px)": {
            display: 'none'
        }
    });

    const { userData } = useContext(UsersContext);
    const itemData = {
        img: userData?.cover_picture,
    };

    const itemData2 = _.map(_.get(userData, "pictures", []), (item, index) => {
        return {
            img: item,
        };
    });

    const combinedArray = [itemData, ...itemData2];

    return userData?(
        <React.Fragment>
            <MainBox>
                <Box>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        grabCursor={true}
                        className="mySwiper"
                    >
                        {combinedArray.map((item) => (
                            <SwiperSlide>
                                <img className="carousel-img" src={item.img}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </MainBox>
        </React.Fragment>
    ):'';
};
export default ImageCarousel;
