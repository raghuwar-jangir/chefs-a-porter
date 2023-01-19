import React from "react";
import { Box, Grid, Hidden, styled, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import expectation1 from "./../assets/images/expectation1.png";
import expectation from "./../assets/images/expectation.png";
import { isMobile } from 'react-device-detect';


const ExpectactionSection = () => {
    const BoxWrapper = styled(Box)(() => ({
        background: "#DCD7CB",
        '.description-menu': {
            padding: '140px 120px 140px 40px'
        },
        ".main-title": {
            fontWeight: 700,
            fontSize: "30px",
            lineHeight: "37px"
        },
        ".parent-box": {
            display: 'flex',
            paddingTop: '20px'
        },
        ".dot-icon": {
            color: "#C6A87D",
            width: "12px",
            height: "28px",
            marginRight: '10px'
        },
        ".description": {
            fontSize: "20px",
            lineHeight: "30px",
            fontWeight: 400,
            paddingBottom: '8px'
        },

        // !media queries fo the expect details of supper club

        '@media(min-width: 1px) and (max-width: 425px)': {
            '.description-menu': {
                padding: '0px 0px 0px 0px'
            },
            ".main-title": {
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "24px"
            },
            ".parent-box": {
                display: 'flex',
                paddingTop: '8px'
            },
            ".dot-icon": {
                color: "#C6A87D",
                width: "6px",
                height: "24px",
                marginRight: '5px'
            },
            ".description": {
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 400,
                paddingBottom: '8px'
            },
            '.grid': {
                paddingTop: '16px'
            },
            '.BoxWrapper': {
                padding: '40px 16px'
            }}
    }))

    return (
        <React.Fragment>
            <BoxWrapper className="BoxWrapper">
                <Box className="BoxWrapper">
                    <Hidden only='xl'>
                        <Typography className="main-title">What to expect at a Supper Club ?</Typography>
                    </Hidden>
                    <Grid container columnSpacing={{ xs: 1 }} className="grid">
                        <Grid item xs={6} md={6} xl={6} >
                            {
                                (isMobile) ? (
                                    <Box>
                                        <img src={expectation} width={'100%'} style={{ verticalAlign: 'top' }} alt="supper-dining-image" />

                                    </Box>
                                ) : (
                                    <Box>
                                        <img src={expectation1} width={'100%'} height={"600px"} style={{ verticalAlign: 'top' }} alt="supper-dining-image" />
                                    </Box>
                                )
                            }
                        </Grid>
                        <Grid item xs={6} md={6} xl={6}>
                            <Box className="description-menu">
                                <Hidden only='xs'>
                                    <Typography className="main-title">What to expect at a Supper Club ?</Typography>
                                </Hidden>
                                <Box className="parent-box">
                                    <CircleIcon className="dot-icon" />
                                    <Typography className="description"><span><b>EAT</b></span> - Highly curated food from the hottest chefs around the world</Typography>
                                </Box>
                                <Box className="parent-box">
                                    <CircleIcon className="dot-icon" />
                                    <Typography className="description"><span><b>MEET</b></span> - A community of food enthusiasts in your city.</Typography>
                                </Box>
                                <Box className="parent-box">
                                    <CircleIcon className="dot-icon" />
                                    <Typography className="description"><span><b>EXPERIENCE</b></span> - Food like never before made for you by Chefs you've only heard of!</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </BoxWrapper>

        </React.Fragment >
    )
}
export default ExpectactionSection;