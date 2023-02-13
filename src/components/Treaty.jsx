import { Button, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const Treaty = () => {
    const BoxWrapper = styled(Box)(() => ({
        padding: '40px 16px',
        color: '#080B0E',
        width:'auto',
        textAlign:'left',
        ".heading": {
            fontSize: "16px",
            lineHeight: "38px",
            fontFamily: 'Proxima Nova',
            marginBottom: '13px',
        },
        ".main-title": {
            fontSize: "31px",
            width:'80%',
            lineHeight: "40px",
            letterSpacing: "0.03em",
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            color: '#080B0E',
            padding:"0px",
            marginBottom: '13px',

        },
        ".details": {
            fontSize: "21px",
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            lineHeight: '26px',
            color: '#080B0E',
            height: '26px',
            marginBottom: '13px',
        },
        ".btn": {
            fontStyle: 'normal',
            lineHeight: '24px',
            marginRight: '0px',
            border: '1px solid #222222',
            width: '188px !important',
            fontFamily: 'Proxima Nova',
            fontSize: "20px !important",
            fontWeight: '600',
            borderRadius: "0px",
            color: "#080B0E !important",
            backgroundColor: 'unset !important',
            textTransform: "capitalize",
            height: "55px !important",
            padding: '14px !important',
        },
        ".btn:hover": {color: "#C6A87D!important;"},
        ".sub-div": {
            background: '#FBFBFB',
            padding: '30px 20px 30px 30px',
            boxShadow:' 0px 20px 24px rgb(0 0 0 / 6%)',
        },
        '.btn-box':{
            display:'flex',
            justifyContent:'end',
        },
        '@media(min-width: 1px) and (max-width: 425px)': {
            ".btn": {
                width: '100% !important',
            },
            '.main-title': {
                fontSize: '20px',
                lineHeight: '25px',
                marginBottom: '8px'
            },
            '.details': {
                fontSize: '14px',
                lineHeight: '17px',
            },
            '.heading': {
                fontSize: '14px',
                lineHeight: '24px',
            }
        },
        '@media(min-width: 426px) and (max-width: 768px)': {
            ".btn": {
                width: '100% !important',
                margin:"0px",
            },
        },
    }))


    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className="sub-div">
                    <Typography className="heading">
                        #Treat your loved ones
                    </Typography>
                    <Typography className="main-title">
                        Give the gift of an unforgettable food experience
                    </Typography>
                    <Typography className="details">
                        send a gift card to your friends and family
                    </Typography>
                   <Box className='btn-box'>
                       <Button className="btn">
                           Learn More
                       </Button>
                   </Box>
                </Box>
            </BoxWrapper>

        </React.Fragment>
    )
}
export default Treaty;