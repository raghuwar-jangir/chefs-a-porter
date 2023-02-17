import {Box, Button, Grid, styled, Typography} from "@mui/material";
import React from "react";
const ContactUsBox = ({ isColor }) => {
    const BoxWarraper = styled(Box)(() => ({
        background: '#FBFBFB',
        margin: '20px',
        display: 'none',
        '.contact-us-main-box':{
            padding: '20px 16px',
            border:'0.5px solid #080B0E',
        },
        ".btn": {
            // border: '0.25px solid #fff',
            background: "#080B0E",
            width: '214px !important',
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "19px",
            borderRadius: "0px",
            color: "#FBFBFB",
            // color: `${isColor ? '#FBFBFB' : '#FBFBFB'}`,
            textTransform: "capitalize",
            fontFamily: 'Proxima Nova',
            height: "55px !important",
            marginTop: "0px",
        },
        ".btn:hover": {
            color: "#C6A87D",
            background: "#080B0E",
        },
        ".btn-2": {
            border: `${isColor ? '0.25px solid #080B0E' : '0.25px solid #080B0E'}`,
            background: "#FBFBFB",
            width: '214px !important',
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "19px",
            borderRadius: "0px",
            color: "#080B0E",
            textTransform: "capitalize",
            fontFamily: 'Proxima Nova',
            height: "55px",
            marginLeft: '24px',
            marginRight: '150px'
        },
        ".btn-2:hover": {
            color: "#C6A87D",
            background: "#FBFBFB",
        },
        ".main-heading": {
            fontWeight: 500,
            fontSize: '24px',
            fontStyle: 'normal',
            fontFamily: 'Bon Vivant',
            lineHeight: "30px",
            letterSpacing: "0.06em",
            color: '#080B0E',
            // color: `${ isColor? '#FBFBFB' : '#080B0E' }`,
            paddingBottom: "8px",
            paddingTop:'0px!important',
            textAlign:'left'
        },
        ".details": {
            fontWeight: 300,
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontSize: "16px !important",
            lineHeight: "24px",
            color: '#080B0E',
            textAlign:'left',
            marginBottom:'10px'
            // color: `${ isColor? '#FBFBFB' : '#080B0E' }`,
            // paddingBottom: "20px"
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            display: 'flex',
            flexDirection: 'column',
            '.contact-us-main-box':{
                padding: '20px 5px',
            },
            ".btn": {
                width: '49% !important',
                height: "55px !important",
            },
            ".btn-2": {
                width: '49% !important',
                marginLeft: '5px',
                marginRight: '0px',
                height: "55px !important",
            },
        },
    }))
    return (
        <React.Fragment>
                <BoxWarraper>
                    <Box className="contact-us-main-box">
                    <Box md={6} sm={6} xs={12} xl={7}>
                        <Typography className="main-heading">Contact Us</Typography>
                        <Typography className="details">We respond within 24 business hours.</Typography>
                    </Box>
                    <Box md={6} sm={6} xs={12} xl={7}>
                        <Button
                            type="submit"
                            className="btn">Schedule a Call</Button>
                        <Button
                            type="submit"
                            className="btn-2">Email us</Button>
                    </Box>
                    </Box>
                </BoxWarraper>

        </React.Fragment>
    )
}
export default ContactUsBox