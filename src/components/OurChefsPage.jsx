import { Box, Button, Grid, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Privee from "./Privee";
import chef from './../assets/images/chef1.png'
import chef2 from './../assets/images/chef2.png'
import Footer from "./Footer";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link } from "gatsby";
import { isMobile, MobileView } from "react-device-detect";
import FoodCard from "./FoodCard";


const OurChefsPage = () => {
    const BoxWrapper = styled(Box)(() => ({
        background: '#080B0E',
        '.main-parent-box': {
            position: 'relative',
        },
        ".header-club": {
            padding: '20px',
            backgroundColor: '#DCD7CB',
        },
        ".main-heading": {
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: "40px",
            textAlign: 'center', color: '#FBFBFB', padding: '30px 0px 16px 0px',
            fontFamily: 'Bon Vivant'
        },
        '.chef-title': {
            color: '#FBFBFB',
            fontSize: '32px', padding: '32px',
            lineHeight: '40px', textAlign: 'center'
        },
        '.chef-content': {
            padding: '16px 120px'
        },
        '.footer-shadow': {
            position: 'absolute',
            display: 'block',
            width: '100%',
            bottom: 0,
            /* left: 48%; */
            padding: '120px 0px',
            textAlign: 'center',
            background: 'linear-gradient(180deg,rgba(8, 11, 14, 0)-97.92%,rgba(8,11,14,0.6)45.9%)'
        },
        '.btn': {
            width: '420px',
            fontSize: '24px',
            lineHeight: '29px',
            padding: '16px 10px',
            fontWeight: 400,
            border: '0.5px solid #C6A87D',
            color: '#FBFBFB',
            textTransform: 'capitalize',
            borderRadius: '0px'
        },
        '.btn:hover': {
            color: '#C6A87D',
        }, '.footer-text': {
            display: 'flex',
            justifyContent: 'space-evenly',
            backgroundColor: "#222222",
            padding: '18px', width: '50%'
        }, '.footer-end': { display: 'flex', justifyContent: 'center', backgroundColor: '#222222' },
        '.footer-item': {
            fontSize: '12px',
            textDecoration: 'none',
            color: '#FBFBFB',
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            '.main-parent-box': {
                position: 'static',
            },
            '.chef-content': {
                padding: '16px 16px'
            }, '.footer-shadow': {
                position: 'static',
                padding: '40px 0px',
            },
            '.btn': {
                width: '420px',
                fontSize: '16px',
                lineHeight: '29px',
                padding: '10px',
            },
            ".header-club": {
                padding: '0px',
            },
            '.footer-text': {
                width: '100%'
            },
            '.btn:hover': {
                color: '#C6A87D',
            }, ".main-heading": {
                fontSize: "24px",
                textAlign: 'center', color: '#000', padding: '16px',
                fontFamily: 'Bon Vivant'
            },

        }
    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className="main-parent-box">

                    {isMobile ? (
                        <Box className='header-club'>
                            <Typography className="main-heading">Our Chefs</Typography>
                        </Box>
                    ) : (
                        <Typography className="main-heading">Our Chefs</Typography>
                    )}

                    {/* <Typography className="chef-title"> Our Chefs </Typography> */}
                    <Box className="chef-content">
                        <Grid container spacing={{ xs: 1, md: 2 }}>
                            <Grid item xl={3} md={3} sm={6} xs={6}>
                                <Privee image={chef} />
                            </Grid>
                            <Grid item xl={3} md={3} sm={6} xs={6}>
                                <Privee image={chef2} isLabelShow={true} />
                            </Grid>
                            <Grid item xl={3} md={3} sm={6} xs={6}>
                                <Privee image={chef} />
                            </Grid>
                            <Grid item xl={3} md={3} sm={6} xs={6}>
                                <Privee image={chef2} isLabelShow={true} />
                            </Grid>
                            <Grid item xl={3} md={3} sm={6} xs={6}>
                                <Privee image={chef} />
                            </Grid>
                            <Grid item xl={3} md={3} sm={6} xs={6}>
                                <Privee image={chef2} isLabelShow={true} />
                            </Grid>
                            <Grid item xl={3} md={3} sm={6} xs={6}>
                                <Privee image={chef} />
                            </Grid>
                            <Grid item xl={3} md={3} sm={6} xs={6}>
                                <Privee image={chef2} isLabelShow={true} />
                            </Grid>
                            <Grid item xl={3} md={3} sm={6} xs={6}>
                                <Privee image={chef} />
                            </Grid>
                            <Grid item xl={3} md={3} sm={6} xs={6}>
                                <Privee image={chef2} isLabelShow={true} />
                            </Grid>
                            <Grid item xl={3} md={3} sm={6} xs={6}>
                                <Privee image={chef} />
                            </Grid>
                            <Grid item xl={3} md={3} sm={6} xs={6}>
                                <Privee image={chef2} isLabelShow={true} />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="footer-shadow">
                        <Button className="btn">View More Chefs</Button>
                    </Box>
                </Box>
                <MobileView>
                    <FoodCard />
                </MobileView>
                <Footer />
                <Box className="footer-end">
                    <Stack className='footer-text'
                        divider={<FiberManualRecordIcon sx={{ fontSize: '6px', color: '#C6A87D' }} />}
                        direction="row" spacing={2}>
                        <Link className='footer-item' to='/'> FAQs </Link>
                        <Link className='footer-item' to='/'> Privacy Policy </Link>
                        <Link className='footer-item' to='/'> T&C </Link>
                    </Stack>
                </Box>
            </BoxWrapper >
        </React.Fragment >
    )
}
export default OurChefsPage;