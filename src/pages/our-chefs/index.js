import { Box, Button, Grid, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Privee from "../../components/Privee";
import chef from '../../assets/images/chef1.png'
import chef2 from '../../assets/images/chef2.png'
import Footer from "../../components/Footer";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link } from "gatsby";
import { isMobile, MobileView } from "react-device-detect";
import FoodCard from "../../components/FoodCard";
import Navbar from '../navbar'
import NeedHelp from "../../components/NeedHelp";
import FooterEnd from "../../components/FooterEndSection";


const OurChefsPage = () => {
    const BoxWrapper = styled(Box)(() => ({
        background: '#080B0E',
        '.main-parent-box': {
            position: 'relative',
        },
        ".header-club": {
            padding: '15px',
            backgroundColor: '#DCD7CB',
        },
        ".main-heading": {
            fontWeight: 400,
            fontSize: "26px",
            lineHeight: "24px",
            letterSpacing:'0.06em',
            textAlign: 'center', color: '#FBFBFB',
            padding: '110px 0px 16px 0px',
            fontFamily: 'Bon Vivant'
        },
        '.chef-title': {
            color: '#FBFBFB',
            fontSize: '32px', padding: '32px',
            lineHeight: '40px', textAlign: 'center'
        },
        '.chef-content': {
            padding: '40px 120px'
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
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            '.main-parent-box': {
                position: 'static',
            },
            '.chef-content': {
                padding: '16px 16px'
            }, '.footer-shadow': {
                position: 'static',
                padding: '20px 0px',
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
                textAlign: 'center', color: '#000',
                // padding: '16px',
                fontFamily: 'Bon Vivant'
            },
            "@media (min-width: 1px) and (max-width:1024px)": {
                '.btn':{
                    width:'auto'
            },
            },
            "@media (min-width: 320px) and (max-width:768px)": {
                ".main-heading": {
                    padding: '15px 0px 15px 0px !important',
                    fontSize: "24px",
                    textAlign: 'center', color: '#000',
                    fontFamily: 'Bon Vivant'
                },
                ".chef-mobile-heading": {
                    padding: '8px 0px !important',
                    fontSize: "24px",
                    textAlign: 'center',
                    color: '#000',
                    fontFamily: 'Bon Vivant'
                },
            },
        }
    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                <Navbar/>
                <Box className="main-parent-box">
                    {isMobile ? (
                        <Box className='header-club'>
                            <Typography className="chef-mobile-heading">Our Chefs</Typography>
                        </Box>
                    ) : (
                        <Typography className="main-heading">Our Chefs</Typography>
                    )}

                    <Box className="chef-content">
                        <Grid container spacing={{ xs: 2, md: 2 }}>
                            <Grid item xl={4} sm={4} xs={6}>
                                <Privee image={chef} />
                            </Grid>
                            <Grid item xl={4} sm={4} xs={6}>
                                <Privee image={chef2} isLabelShow={true} />
                            </Grid>
                            <Grid item xl={4} sm={4} xs={6}>
                                <Privee image={chef} />
                            </Grid>
                            <Grid item xl={4} sm={4} xs={6}>
                                <Privee image={chef2} isLabelShow={true} />
                            </Grid>
                            <Grid item xl={4} sm={4} xs={6}>
                                <Privee image={chef} />
                            </Grid>
                            <Grid item xl={4} sm={4} xs={6}>
                                <Privee image={chef2} isLabelShow={true} />
                            </Grid>
                            <Grid item xl={4} sm={4} xs={6}>
                                <Privee image={chef} />
                            </Grid>
                            <Grid item xl={4} sm={4} xs={6}>
                                <Privee image={chef2} isLabelShow={true} />
                            </Grid>
                            <Grid item xl={4} sm={4} xs={6}>
                                <Privee image={chef} />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="footer-shadow">
                        <Button className="btn">View More Chefs</Button>
                    </Box>
                </Box>
                <NeedHelp/>
                <MobileView>
                    <FoodCard />
                </MobileView>
                <Footer />
                <FooterEnd/>
            </BoxWrapper >
        </React.Fragment >
    )
}
export default OurChefsPage;