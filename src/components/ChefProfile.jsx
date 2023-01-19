import { Box, Button, Grid, styled, Typography } from "@mui/material";
import React from "react";
import Privee from "./Privee";

import star from './../assets/images/star-rate-outline12.png'

import facebook from './../assets/images/facebook.png'
import img from './../assets/images/1212.png'
import twitter from './../assets/images/twitter.png'
import instagram from './../assets/images/instagram.png'
import { Link } from "react-router-dom";

const ChefProfile = () => {
    const BoxWrapper = styled(Box)(() => ({
        padding: '16px',
        ".main-box": {
            display: 'flex',
            justifyContent: 'space-between'
        },
        '.main_team': {
            display: 'flex', justifyContent: 'flex-end',
        },
        ".main_chefdetail": {
            color: "#3e383099",
            fontWeight: 700,
            fontSize: '10px'
        },
        ".social_image": {
            display: 'flex',
            width: "9%",
            justifyContent: "space-between",
            padding: "30px 0px",
        },
        ".img": {
            width: "26px",
        },
        ".name": {
            letterSpacing: "0px",
            color: "#3e3830",
            fontSize: "24px",
            fontWeight: 500,
            fontStyle: "italic"
        },
        ".main-img": {
            opacity: 1,
            objectFit: "cover",
        },
        ".sub-div": {
            paddingLeft: '30px',
        },
        ".main-heading": {
            padding: "40px 20rem",
            textAlign: "left",
            letterSpacing: "-0.32px",
            color: "#3e3830",
            fontweight: 500,
            fontSize: '35px', fontStyle: 'italic',

        },
        ".some-text": {
            letterSpacing: "0px",
            color: "#3e3830",
            opacity: 1,
            fontWeight: 400,
            lineHeight: "28px",
            fontSize: "14px",
        },
        ".some-text-top": {
            letterSpacing: "0px",
            color: "#3e3830",
            opacity: 1,
            fontWeight: 400,
            lineHeight: "28px",
            fontSize: "14px",
            paddingBottom: '16px'
        },
        ".link-text": {

        },
        ".learn-more-btn": {
            background: "#3e3830",
            opacity: 1,
            width: "250px",
            height: "50px",
            textAlign: "center",
            letterSpacing: "0px",
            color: "#f6f7f7",
            opacity: 1,
            // fontFamily: 'Rubik', "sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            border: "none"
        },
        '.main-chef-star': {
            marginTop: '12%'
        },

        '@media(min-width: 1px) and (max-width: 425px)': {
            ".main_chefdetail": {
                paddingTop: "20px",
            },
            ".sub-div": {
                paddingLeft: '0px',
            },
            ".sort_intro": {
                fontSize: "14px",
                lineHeight: "22px"
            },
            ".social_image": {
                width: "24%",
            },
            '.main-heading': {
                padding: '30px 0px'
            }, '.main-img': { width: '100%' }, '.main-chef-star': {
                marginTop: '0%'
            },
        }
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                <Typography className="main-heading">Meet our founder and inspiration</Typography>

                <Box class="main-box">
                    <Grid container spacing={0}>
                        <Grid item md={5} sm={4} xs={12}>
                            <Box className="main_team">
                                <img className="main-img" src={img} alt="chef-image" />
                            </Box>
                        </Grid>
                        <Grid item md={7} sm={8} xs={12}>
                            <Box className="main-chef-star">
                                <Box>
                                    <Typography class="main_chefdetail"> Founder </Typography>
                                    <Typography class="name"> Anu Boccasam </Typography>
                                </Box>
                                <Box class="imp_details_for ">
                                    <img className="img_prochef" src={star} alt="" />
                                    Pro Chef
                                </Box>

                                <Typography className="some-text-top">Short intro to describe her background and what led her to start Chefs-a-Porter.</Typography>
                                <Typography className="some-text"> An architect by trade, chef by passion and purpose and change maker by choice. She creatively weaves three unique disciplines of Architecture, Food and Social Impact to create awareness for Conscious Living. An integrated, Geneva-based brand, she provides innovative, high quality services through three core segments: Live, Eat and Give.</Typography>
                                <Typography class="some-text-top"> Always guided by her values, she brings her passion for Contemporary design and Architecture together with her unique brand of plant based cuisine making you reimagine the way you experience life. She achieves this goal, by employ innovative techniques, creative thinking and a joyful smile!</Typography>
                                <Link href="" className="some-text">get consciuos.ch</Link>
                                <Box class="social_image">
                                    <img className="img" src={instagram} alt="" />
                                    <img className="img" src={facebook} alt="" />
                                    <img className="img" src={twitter} alt="" />
                                </Box>
                                <Box class="for_spacing"> <Button class="learn-more-btn">Learn More About Anou</Button> </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default ChefProfile;