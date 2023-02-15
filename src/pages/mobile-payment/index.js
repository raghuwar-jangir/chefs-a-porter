import React from "react";
import {Box, Grid, Stack, styled, TextField, Typography} from "@mui/material";
import {isMobile} from "react-device-detect";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MobilePayment = () => {
    const BoxWrapper = styled(Box)(() => ({
        '.allow-access': {
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.4)',
            position: 'absolute',
            width: '100%',
            top: '0px',
            zIndex: '999',
        },
        '.access-box': {
            padding: '40px 16px',
            position: 'relative',
            background: '#DCD7CB',
            transform: 'translateY(40vh)',
            display: 'block',
        },
        '.allow-details': {
            fontFamily: 'Barlow, sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineheight: '22px',
            textAlign: 'center',
            color: '#000000',
        },
        '.allow-permission-button': {
            background: '#080B0E',
            padding: '15px 10px',
            fontSize: '16px',
            lineheight: '20px',
            fontWeight: '600',
            fontFamily: 'Proxima Nova',
            textDecoration: 'none',
            display: 'block',
            color: ' #FBFBFB !important',
            textAlign: 'center',
            border: '0.5px solid #080B0E',
            flex: '1'
        },
        '.deny-permission-button': {
            padding: '15px 10px',
            fontSize: '16px',
            lineheight: '20px',
            fontWeight: '600',
            fontFamily: 'Proxima Nova',
            textDecoration: 'none',
            display: 'block',
            color: ' #080B0E!important',
            textAlign: 'center',
            border: '0.5px solid #080B0E',
            flex: '1'
        },
        '.deny-permission-button:hover': {
            color: '#C6A87D!important',
        },
        '.allow-permission-button:hover': {
            color: '#C6A87D!important',
        },
        '.access-btn': {
            display: 'flex',
            flexDirection: 'row',
            gap: '8px',
            marginTop: '16px',
            justifyContent: 'center'
        },
        '.payment-details': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineheight: '19px',
            color: '#080B0E',
        },
        '.price-details': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px',
            lineheight: '19px',
            color: '#080B0E',
        },
        '.select-payment': {
            marginTop: '40px',
            padding: '50px 10px',
            display: 'flex',
            justifyContent: 'space-between'
        },
        '@media(min-width: 1px) and (max-width: 768px)': {
            '.mobile-header': {
                display: "flex",
                alignItems: 'center',
                padding: '12px',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(220, 215, 203, 1)!important',
            },
            '.mobile-heading': {
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '20px',
                lineheight: '24px',
                textDecoration: 'none',
                color: 'rgba(0, 0, 0, 0.9)',
            },
            '.select-payment': {
                marginTop: '0px',
                padding: '30px 10px',
            }
        },
        '@media(min-width: 769px) and (max-width: 2560px)': {
            '.mobile-header': {
                display: "none",
            },
        },
        '@media(min-width: 320px) and (max-width: 370px)': {
            '.mobile-header': {
                paddingRight: '80px'
            },
        },
        '@media(min-width: 371px) and (max-width: 400px)': {
            '.mobile-header': {
                paddingRight: '100px'
            },
        },
        '@media(min-width: 401px) and (max-width: 565px)': {
            '.mobile-header': {
                paddingRight: '120px'
            },
        },
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                {isMobile ? (
                    <Box className="mobile-header">
                        <ArrowBackIcon/>
                        <a href="/" className="mobile-heading" style={{textAlign: 'center !important'}}>Payment
                            Gateway</a>
                    </Box>
                ) : ''}
                <Box className="select-payment">
                    <Typography className="payment-details">Select an option to pay</Typography>
                    <Typography className="price-details"><b>₹ 2,500</b></Typography>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default MobilePayment