import { Box, Button,styled, Typography } from "@mui/material";
import React from "react";
import Privee from "../../components/Privee";
import Footer from "../../components/Footer";
import FoodCard from "../../components/FoodCard";
import Navbar from "../../components/NavbarComponent";
import NeedHelp from "../../components/NeedHelp";
import FooterEnd from "../../components/FooterEndSection";


const OurChefsPage = () => {
    const BoxWrapper = styled(Box)(() => ({
        background: '#080B0E',
        '.main-parent-box': {
            position: 'relative',
        },
        ".main-heading": {
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "24px",
            letterSpacing:'0.06em',
            textAlign: 'center', color: '#FBFBFB',
            padding: '120px 0px 0px 0px',
            fontFamily: 'Bon Vivant'
        },
        '.chef-content': {
            padding: '40px 120px'
        },
        '.footer-shadow': {
            position: 'absolute',
            display: 'block',
            width: '100%',
            bottom: 0,
            padding: '120px 0px',
            textAlign: 'center',
            background: 'linear-gradient(180deg,rgba(8, 11, 14, 0)-97.92%,rgba(8,11,14,0.6)45.9%)'
        },
        '.parent-view-button': {
            textAlign: 'center',
            padding:'0px 16px 0px 16px',
            marginTop: '40px'
        },
        '.view-more': {
            fontFamily:'Proxima Nova Alt',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '19px',
            width: '100%',
            color: '#FBFBFB',
            background: 'transparent',
            border: '0.5px solid #C6A87D',
            padding: '10px',
            borderRadius:'1px',
            textTransform:'math-auto'
        },
        "@media (min-width: 767px) and (max-width:2560px)": {
            '.parent-view-button': {
                display:'none'
            }
        },
        "@media (min-width: 768px) and (max-width:990px)": {
            '.chef-content':{
                padding:'40px 0px'
            },
            '.main-heading':{
                padding:'82px 0px 0px 0px'
            }
          },
          "@media (min-width: 1px) and (max-width:767px)": {
            '.chef-content':{
                padding:'40px 0px'
            },
            '.main-heading':{
                display:'none'
            },
            '.footer-shadow':{
                display:'none'
            }
          }
    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                <Navbar heading="Our Chefs"/>
                <Box className="main-parent-box">
                    <Typography className="main-heading">Our Chefs</Typography>
                    <Box className="chef-content">
                        <Privee/>
                        <Box className='parent-view-button'>
                            <Button
                                fullWidth
                                className='view-more'
                                variant="contained">
                                View All Chefs
                            </Button>
                        </Box>
                    </Box>
                    <Box className="footer-shadow">
                    </Box>
                </Box>
                <NeedHelp/>
                <FoodCard />
                <Footer />
                <FooterEnd/>
            </BoxWrapper >
        </React.Fragment >
    )
}
export default OurChefsPage;
