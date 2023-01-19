import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import Privee from "./Privee";
import FooterLogo2 from './../assets/images/footerLogo2.png'
// import mobileCap from './../assets/images/CAP_Logo.png';

import facebook from './../assets/images/facebook.png'
// import teamImg from './../assets/images/Rectangle 392.png'
import twitter from './../assets/images/twitter.png'
import instagram from './../assets/images/instagram.png'
import { Link } from "react-router-dom";

const FooterOurChef = () => {
    const BoxWrapper = styled(Box)(() => ({
        backgroundColor: "#3e3830",
        color: "#bbb",
        lineHeight: 1.5,
        paddingTop: "40px",
        margin: "0 auto",
        display: "block",
        // textAlign: "center",
        ".social-media-icon": {

        },
        ".social-media-icon": {
            padding: "20px"
        },
        ".main-log-footer": {
            height: "35px",
            objectFit: "contain",
            width: "100%"
        },
        ".social_image": {
            display: "flex",
            justifyContent: "center"
        },
        ".img": {
            width: "25px",
        },
        ".sub-social_imagebox": {
            display: 'flex',
            width: "6%",
            justifyContent: "space-between",
            paddingBottom: '16px'
        },
        ".divider5": {
            borderBottom: "1px solid #ffffff14",
            width: "80%",
            margin: "auto",
            display: "flex",
            justifyContent: "center"
        },
        ".contact-us-text": {
            color: "#bbb",
            fontSize: "16px",
            fontFamily: 'Work Sans',
            textAlign: 'center',
            paddingBottom: '16px'
        },
        ".ft-social": {
            textAlign: "center",
            paddingTop: "30px",
            color: "#ffffff38",
            fontSize: "14px",
            paddingBottom: "30px"
        },
        ".main-Box": {
            paddingTop: '20px'
        },


        '@media(min-width: 1px) and (max-width: 425px)': {
            ".sub-social_imagebox": {
                width: "25%",
            },
            ".main-log-footer": {
                height: "60px"
            }
        }
    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className="main-Box">
                    <img className="main-log-footer" src={FooterLogo2} alt="" />
                </Box>
                <Box>
                    <Box className="social-media-icon">
                        <Box className="social_image">
                            <Box className="sub-social_imagebox" >
                                <img className="img" src={instagram} alt="" />
                                <img className="img" src={facebook} alt="" />
                                <img className="img" src={twitter} alt="" />
                            </Box>
                        </Box>
                        <Typography className="contact-us-text">Contact Us +91 96111 19633</Typography>
                    </Box>
                </Box>
                <Box className="divider5"></Box>
                <Box className="ft-social">
                    &copy;  2021-present, Chefs-a-Porter. All rights reserved.
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default FooterOurChef;