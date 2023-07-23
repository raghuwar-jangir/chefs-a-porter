import React from 'react'
import { useContext } from "react";
import CmsContext from "../../context/CmsContext";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import ItemCard from "./itemCard";
import { navigate } from 'gatsby';

const PriveeCarouselDesktop = () => { 
    const { data } = useContext(CmsContext);
    return <Swiper
                style={{
                "--swiper-navigation-color": "white",
                "--swiper-navigation-size": "17px",
                }}
                slidesPerView={4}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation, Pagination]}
                breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                    direction: "vertical",
                },
                375: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                    direction: "vertical",
                },
                425: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                    direction: "vertical",
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                2560: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                }}
                className="mySwiper"
            >
                {data.home.chefs_private_dining.chefs.map((item) => {
                return (
                    <SwiperSlide onClick={() => navigate(`/chef-details/${item?.id}`)} style={{ cursor: 'pointer' }}>
                        <ItemCard item={item} />
                    </SwiperSlide>
                );
                })}
            </Swiper>
}

export default PriveeCarouselDesktop;