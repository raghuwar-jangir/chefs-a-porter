import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import logo1 from "./../assets/images/logo1.png"
import logo2 from "./../assets/images/logo2.png"
import logo3 from "./../assets/images/logo3.png"
import logo4 from "./../assets/images/logo4.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Box, styled, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";
const LogoSwiper = () => {
    const BoxWrapper = styled(Box)(() => ({

        padding: "40px",
        background: '#FBFBFB',
        ".swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction": {
            display: "none",

        },
        ".custom-log": {
            height: "120px",
            width: "120px",
            display: "flex",
            boxShadow: "0px 5px 19px rgb(0 0 0 / 8%)",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "60px",
            background: '#fff'
        },
        ".mySwiper": {
            padding: '16px'
        }
    }))

    const logoImg = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo1,
        logo2,
        logo1,
        logo2,
        logo3,
        logo4,
        logo1,
        logo2,
        logo2,
        logo1,
        logo2,
        logo3,
        logo4,
        logo1,
        logo2,
    ]
    return (
        <React.Fragment>
            <BoxWrapper>
                <Typography sx={{
                    textAlign: 'center',
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "30px",
                    paddingBottom: '34px'
                }}>News about us</Typography>
                <Swiper
                    slidesPerView={isMobile ? (2) : (10)}
                    // spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {logoImg.map((imgItem, index) => (
                        <SwiperSlide>
                            <Box key={index} className="custom-log">
                                <img src={imgItem} alt="logo1" style={{ padding: '40px' }} />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </BoxWrapper>
        </React.Fragment>
    );
}

export default LogoSwiper;
