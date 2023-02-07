import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import Privee from "./Privee";
import facebook from './../assets/images/facebook.png'
import twitter from './../assets/images/twitter.png'
import instagram from './../assets/images/instagram.png'
import { Link } from "gatsby";

const TeamDetails = ({ title, profetion, image }) => {
    const BoxWrapper = styled(Box)(() => ({
        // background: 'red',
        ".main-box": {
            display: 'flex',
            justifyContent: 'space-between'
        },
        ".main_chefdetail": {
            paddingTop: "70px",
            fontWeight: "bold",
            textAlign: "left",
            letterSpacing: "1px",
            color: "#3e383099",
            textTransform: "uppercase",
            opacity: 1,
            marginBottom: "5px",
            fontSize: "10px",
            // fontFamily: 'Rubik', sans-serif ;
        },
        ".sort_intro": {
            padding: 0
        },
        ".social_image": {
            display: 'flex',
            // border: "1px solid",
            width: "9%",
            justifyContent: "space-between",
            paddingTop: "25px",
        },
        ".website_any": {
            textAlign: "center",
            fontWeight: 400,
            fontSize: "14px",
            // color: "#3e3830"
        },
        ".img": {

            width: "26px",

            // marginBottom: "10px"
        },
        ".name": {
            textAlign: "center",
            letterSpacing: "0px",
            color: "#3e3830",
            fontSize: "24px",
            fontWeight: 500,
            fontStyle: "italic"
            // font-family: 'Playfair Display', serif;
        },
        ".main-img": {
            width: "100%",
            objectFit: "cover",
            height: "348px"
        },
        ".sub-div": {
            paddingLeft: '30px',
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
        }
    }))
    //   const BoxWrapper = styled(Box)(() => ({
    return (
        <React.Fragment>
            <BoxWrapper>
                <Box class="main-box">
                    <Grid container spacing={0}>
                        <Grid item xl={4} md={4} sm={4} xs={12}>
                            <Box class="main_team">
                                <img className="main-img" src={image} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xl={8} md={8} sm={8} xs={12}>
                            <Box className="sub-div" sx={{}}>
                                <Box>
                                    <Typography class="main_chefdetail"> {profetion} </Typography>
                                    <Typography className="name"> {title} </Typography>
                                </Box>
                                <Typography class="sort_intro">Short intro to describe background connection to / influence on Chefs-a-Porter. Include some bragging about accomplishments and make it 3-4 lines (about 50-100 words).
                                </Typography>
                                <Typography class="website_any"><Link href="" style={{ color: "#3e3830" }}>website.if.any</Link></Typography>
                                <Box class="social_image">
                                    <img className="img" src={instagram} alt="" />
                                    <img className="img" src={facebook} alt="" />
                                    <img className="img" src={twitter} alt="" />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default TeamDetails;