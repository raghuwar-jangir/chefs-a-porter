import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination} from "swiper";
import { Box} from "@mui/system";
import styled from "styled-components";
import { Typography } from "@mui/material";
import backgroungLogo from "../assets/images/menuBackground.png";


const MenuCarousel = () => {
    const MainBox = styled(Box)({
        // ".detail-box": {
        //     marginBottom: "36.69px",
        //   },
        //   ".detail-box-margin": {
        //     marginBottom: "40px",
        //   },
          ".menu-title": {
            margin: "0px",
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "25px",
            letterSpacing: "0.06em",
            color: "#080B0E",
            marginBottom: "8px",
          },
          ".menu-sub": {
            fontFamily: 'ProximaNovaA-Regular',
            margin: "0px",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.00938em",
          },
          ".box-contain": {
            display: "grid",
            gridTemplate: "repeat(1, 1fr) / repeat(2, 1fr)",
            background: "#DCD7CB",
            gap: "16px",
            marginTop: "20px",
            width:'100%'
          },
          ".box2": {
            
            marginBottom:'36px'
           
          },
          '.background-logo':{
            padding:'40px',
            position: "relative",
            backgroundImage: `url(${backgroungLogo})`,
            backgroundSize: "212.4px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginBottom:'30px'
          },
          '.swiper-pagination': {
            paddingTop: '20px',
            bottom: '0px',
            background: '#DCD7CB',
            display: 'flex',
            placeContent: 'center',
            alignItems: 'center',
            bottom:'0px !important'
        },
        '.swiper-pagination-bullet': {
            width: '8px !important',
            height: '8px !important',
            margin: '0px 7px !important',
            background: '#D6D6D6',
            border: '1px solid rgba(34, 34, 34, 0.8)',
            opacity:'1',
            backgroundColor:'transparent'
        },
        '.swiper-pagination-bullet-active': {
            background: '#222222!important',
            width: '11px !important',
            height: '11px !important',
        },
    })
    const data = [
        {
            title1:'Course 1',
            details1:'Seafood Soup | Roasted Garlic Foam | Snail butter',
            title2:'Course 2',
            details2:"Beetrott Sweet and Sour | Granny Smiith | Chicken Liver Spread | Tamarind served with croutons, curry leaves powder and oil, onion pickles",
            title3:'Course 3',
            details3:'Bread Skinned Fish | Grenoblaise | Smoked Pumpkin Served with white wine and mushroom sauce',
            title4:'Course 4',
            details4:'Braised Lamb & Vadouvan | Gremolata | Carrot Served with cashew crumble and potato cappuccino',
            title5:'Course 5',
            details5:'Citrus Variation| Walnut | Yogurt Paired with Five reserves Chemin Blanc & Five Reserves Pintoge'
        },
        {
            title1:'Course 1',
            details1:'Seafood Soup | Roasted Garlic Foam | Snail butter',
            title2:'Course 2',
            details2:"Beetrott Sweet and Sour | Granny Smiith | Chicken Liver Spread | Tamarind served with croutons, curry leaves powder and oil, onion pickles",
            title3:'Course 3',
            details3:'Bread Skinned Fish | Grenoblaise | Smoked Pumpkin Served with white wine and mushroom sauce',
            title4:'Course 4',
            details4:'Braised Lamb & Vadouvan | Gremolata | Carrot Served with cashew crumble and potato cappuccino',
            title5:'Course 5',
            details5:'Citrus Variation| Walnut | Yogurt Paired with Five reserves Chemin Blanc & Five Reserves Pintoge'
        },
        {
            title1:'Course 1',
            details1:'Seafood Soup | Roasted Garlic Foam | Snail butter',
            title2:'Course 2',
            details2:"Beetrott Sweet and Sour | Granny Smiith | Chicken Liver Spread | Tamarind served with croutons, curry leaves powder and oil, onion pickles",
            title3:'Course 3',
            details3:'Bread Skinned Fish | Grenoblaise | Smoked Pumpkin Served with white wine and mushroom sauce',
            title4:'Course 4',
            details4:'Braised Lamb & Vadouvan | Gremolata | Carrot Served with cashew crumble and potato cappuccino',
            title5:'Course 5',
            details5:'Citrus Variation| Walnut | Yogurt Paired with Five reserves Chemin Blanc & Five Reserves Pintoge'
        },
        {
            title1:'Course 1',
            details1:'Seafood Soup | Roasted Garlic Foam | Snail butter',
            title2:'Course 2',
            details2:"Beetrott Sweet and Sour | Granny Smiith | Chicken Liver Spread | Tamarind served with croutons, curry leaves powder and oil, onion pickles",
            title3:'Course 3',
            details3:'Bread Skinned Fish | Grenoblaise | Smoked Pumpkin Served with white wine and mushroom sauce',
            title4:'Course 4',
            details4:'Braised Lamb & Vadouvan | Gremolata | Carrot Served with cashew crumble and potato cappuccino',
            title5:'Course 5',
            details5:'Citrus Variation| Walnut | Yogurt Paired with Five reserves Chemin Blanc & Five Reserves Pintoge'
        },
        {
            title1:'Course 1',
            details1:'Seafood Soup | Roasted Garlic Foam | Snail butter',
            title2:'Course 2',
            details2:"Beetrott Sweet and Sour | Granny Smiith | Chicken Liver Spread | Tamarind served with croutons, curry leaves powder and oil, onion pickles",
            title3:'Course 3',
            details3:'Bread Skinned Fish | Grenoblaise | Smoked Pumpkin Served with white wine and mushroom sauce',
            title4:'Course 4',
            details4:'Braised Lamb & Vadouvan | Gremolata | Carrot Served with cashew crumble and potato cappuccino',
            title5:'Course 5',
            details5:'Citrus Variation| Walnut | Yogurt Paired with Five reserves Chemin Blanc & Five Reserves Pintoge'
        },
    ]
    return(
        <React.Fragment>
            <MainBox>
<Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <Box className="box-contain">
        {data.map((item,index) => (
            <Box key={index}>
                 <SwiperSlide>
                    <Box className="background-logo">
                                            <Box className="box2">
                                                <Box className="detail-box">
                                                    <Typography className="menu-title">
                                                        {item.title1}
                                                    </Typography>
                                                    <Typography className="menu-sub">
                                                        {item.details1}
                                                    </Typography>
                                                </Box>
                                                </Box>
                                                <Box className="box2">
                                                <Box className="detail-box">
                                                    <Typography className="menu-title">
                                                        {item.title2}
                                                    </Typography>
                                                    <Typography className="menu-sub">
                                                        {item.details2}
                                                    </Typography>
                                                </Box>
                                                </Box>
                                                <Box className="box2">
                                                <Box className="detail-box">
                                                    <Typography className="menu-title">
                                                        {item.title3}
                                                    </Typography>
                                                    <Typography className="menu-sub">
                                                        {item.details3}
                                                    </Typography>
                                                </Box>
                                                </Box>
                                                <Box className="box2">
                                                <Box className="detail-box">
                                                    <Typography className="menu-title">
                                                        {item.title4}
                                                    </Typography>
                                                    <Typography className="menu-sub">
                                                        {item.details4}
                                                    </Typography>
                                                </Box>
                                                </Box>
                                                <Box className="box2">
                                                <Box className="detail-box">
                                                    <Typography className="menu-title">
                                                        {item.title5}
                                                    </Typography>
                                                    <Typography className="menu-sub">
                                                        {item.details5}
                                                    </Typography>
                                                </Box>
                                                </Box>
                                                </Box>
                                                </SwiperSlide>
            </Box>
            
        ))}
        </Box>
      </Swiper>
      </MainBox>
        </React.Fragment>
    )
}
export default MenuCarousel;