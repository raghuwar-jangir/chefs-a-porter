import React, {useContext} from "react";
import {Box} from "@mui/system";
import styled from "styled-components";
import {Typography} from "@mui/material";
import backgroungLogo from "../assets/images/menuBackground.png";
import UsersContext from "../context/UsersContext";

const MenuCarousel = () => {
    const {userData} = useContext(UsersContext);
    const MainBox = styled(Box)({
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
            gap: "16px",
            marginTop: "20px",
            width: '100%'
        },
        ".box2": {
            marginBottom: '36px'
        },
        '.background-logo': {
            padding: '40px',
            position: "relative",
            backgroundImage: `url(${backgroungLogo})`,
            backgroundSize: "212.4px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginBottom: '30px'
        },
        '.swiper-pagination': {
            paddingTop: '20px',
            background: '#DCD7CB',
            display: 'flex',
            placeContent: 'center',
            alignItems: 'center',
            bottom: '0px !important'
        },
        '.swiper-pagination-bullet': {
            width: '8px !important',
            height: '8px !important',
            margin: '0px 7px !important',
            background: '#D6D6D6',
            border: '1px solid rgba(34, 34, 34, 0.8)',
            opacity: '1',
            backgroundColor: 'transparent'
        },
        '.swiper-pagination-bullet-active': {
            background: '#222222!important',
            width: '11px !important',
            height: '11px !important',
        },
    })
    return (
        <React.Fragment>
            <MainBox>
                <Box className="box-contain">
                    <Box className="background-logo">
                        {userData?.what_to_expect.map((item, index) => {
                            return (
                                <Box className="box2">
                                    <Box className="detail-box">
                                        <Typography className="menu-title">
                                            {item}
                                        </Typography>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </MainBox>
        </React.Fragment>
    )
}
export default MenuCarousel;