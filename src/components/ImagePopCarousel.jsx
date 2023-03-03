import React from 'react';
import chef1 from "./../assets/images/chef5.png";
import chef2 from "./../assets/images/chef6.png";
import sGallery from "./../assets/images/sc-gallery.png";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper';
import styled from 'styled-components';
import {Box} from '@mui/system';
import {ImageListItem} from "@mui/material";

const MainBox = styled(Box)({
    '.swiper-button-prev': {
        left: '3%',
        position: 'fixed',
        color: '#ddd'
    },
    '.swiper-button-next': {
        right: '3%',
        position: 'fixed',
        color: '#ddd'
    },
    '.mySwiper': {
        margin: 'auto',
        display: 'block',
        width: '75%',
        boxShadow: '0 0 8px rgb(0 0 0 / 60%)'
    },
    '.swiper': {
        width: '75%',
        height: '100%',
    },
});
const ImagePopCarousel = ({title}) => {
    const itemData = [
        {
            img: chef1,
            title: 'chef1',

        },
        {
            img: sGallery,
            title: ' sGallery',
        },
        {
            img: chef2,
            title: 'chef2',
        },
    ];
    console.log('tittle', title)
    return (
        <React.Fragment>
            <MainBox>
                <Box>
                    <Swiper navigation={true} modules={[Navigation]} grabCursor={true} className='mySwiper'
                            initialSlide={`${title === 'chef1' ? 0 : title === 'sGallery' ? 1 : title == 'chef2' ? 2 : 0}`}>
                        {itemData.map((item) => (
                            <SwiperSlide><img src={item.img}/></SwiperSlide>
                        ))}

                        {/*<SwiperSlide><img src={sGallery}/></SwiperSlide>*/}
                        {/*<SwiperSlide><img src={chef2}/></SwiperSlide>*/}
                    </Swiper>
                </Box>
            </MainBox>
        </React.Fragment>
    )
}
export default ImagePopCarousel;