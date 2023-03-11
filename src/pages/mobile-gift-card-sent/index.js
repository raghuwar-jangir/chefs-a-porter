import React from "react";
import {Box, Grid, styled, Typography} from "@mui/material";
import Occasion from '../../assets/images/occasion.png'
import ChefsLogo from '../../assets/images/logo-gold.png'
import ShareIcon from '@mui/icons-material/Share';
import {isMobile} from "react-device-detect";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Link} from 'gatsby';

const MobileGiftCardSent = () => {
    const BoxWrapper = styled(Box)(() => ({
        '.patron-submitted': {
            marginTop: '56px',
            padding: '40px 16px'
        },
        '.logo': {
            height: '50px',
            position: 'relative',
            width: '226px',
            objectFit: 'contain',
        },
        '.occasion-cards': {
            backgroundColor: '#101418',
            boxShadow: '0px 12.0863px 18.1295px rgb(0 0 0 / 20%)',
            // marginTop: '20px',
            padding: '30px 10px',
            backgroundImage: `url(${Occasion})`,
            backgroundPosition: 'bottom',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        },
        '.occasion-heading': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: '700',
            fontSize: '32px',
            lineHeight: '40px',
            color: '#FBFBFB',
            marginBottom: '12px'
        },
        '.occasion-title-message': {
            width: '100%',
            background: 'transparent',
            border: '0px',
            // borderBottom: '0.377697px solid #FBFBFB',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            paddingBottom: '12px',
            outline: 'none',
            borderRadius: '0px',
            paddingLeft: '0px',
        },
        '.personalize': {
            marginBottom: '74px',
        },
        '.char-count': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: '400',
            fontSize: '24px',
            lineHeight: '17px',
            color: '#FBFBFB',
            textAlign: 'right',
            marginTop: '5px',
            marginBottom: '0px',
        },
        '.receiver-title': {
            marginTop: '20px',
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: '700',
            fontSize: '20px',
            lineHeight: '30px',
            letterSpacing: '0.06em',
            color: '#080B0E',
        },
        '.r-details': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
            padding: '16px 0px',
        },
        '.down-invoice': {
            gap: '8px',
            display: 'flex',
        },
        '.down-invoice a': {
            border: '0.5px solid #222222',
            padding: '10px 20px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineheight: '19px',
            color: '#080B0E',
            textDecoration: 'none',
        },
        '.down-invoice a:hover': {
            color: '#C6A87D !important',
        },
        '.shareIcon': {
            height: '16px',
            width: '16px'
        },
        '.tell-us': {
            marginTop: '20px',
            display: 'block',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            letterSpacing: '0.06em',
            textDecorationLine: 'underline',
            color: '#080B0E',
        },
        '.tell-us:hover': {
            color: '#C6A87D !important'
        },
        '.rec-name': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: '700',
            fontSize: '20px',
            lineHeight: '30px',
            letterSpacing: '0.06em',
            color: '#080B0E',
        },
        '.mobile-header': {
            display: "none",
        },
        '.apply_div': {
            display: 'none',
            padding: '40px 16px'
        },
        '.apply_btn': {
            width: 'auto',
            background: '#080B0E',
            border: '0px',
            borderRadius: '0px',
            padding: '19px 10px',
            display: 'block',
            textAlign: 'center',
            textDecoration: 'none',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#DCD7CB',
        },
        '.apply_btn:hover': {
            color: '#C6A87D !important'
        },
        '.need-help': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            textAlign: 'center',
            color: ' #080B0E',
            marginTop: '16px',
            marginBottom: '0px',
        },
        '.need-help-link': {
            fontWeight: '400',
            fontFamily: 'Proxima Nova',
            color: '#080B0E',
            textAlign: 'center'
        },
        '.need-help-link:hover': {
            color: '#C6A87D !important'
        },

        '@media(min-width: 1px) and (max-width: 768px)': {
            '.mobile-header': {
                display: "flex",
                alignItems: 'center',
                padding: '12px',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(220, 215, 203, 1)!important',
            },
            '.patron-submitted': {
                marginTop: 'unset',
                padding: '40px 16px'
            },
            '.logo': {
                height: '35px',
                width: '141px',
            },
            '.personalize': {
                marginBottom: '40px',
            },
            '.occasion-heading': {
                fontSize: '20px',
                lineHeight: '25px',
            },
            '.occasion-title-message': {
                fontSize: '12px',
                lineHeight: '15px',
            },
            '.apply_div': {
                display: 'block',
            }
        }
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                {/*{isMobile ? (*/}
                {/*    <Box className="mobile-header">*/}
                {/*        <ArrowBackIcon/>*/}
                {/*    </Box>*/}
                {/*) : ''}*/}
                <Box className="patron-submitted">
                    <Grid container>
                        <Grid item xs={12} md={12} className="occasion-cards">
                            <Box className="personalize">
                                <img src={ChefsLogo} alt="Logo" className="logo footer-logo"/>
                            </Box>
                            <Box className="row occasion-title">
                                <Box className="col-lg-12">
                                    <Typography className="occasion-heading">Happy Wedding</Typography>
                                    <Typography className="occasion-title-message">Wishing you the best of a lifetime of
                                        memories|</Typography>
                                    <p className="char-count"><span id="rchars1">₹</span>2,500</p>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} className="receiver-details">
                            <Typography className="receiver-title">Gift card sent successfully<br/> to <span
                                className="rec_name">Sana</span></Typography>
                            <Typography className="r-details">We’ll let them know you sent it</Typography>
                            <Box className="down-invoice">
                                <a href="">Download Invoice</a>
                                <a href="" style={{padding: '10px'}}><ShareIcon className="shareIcon"/></a>
                            </Box>
                            <a href="" className="tell-us">Tell us how this transaction went</a>
                        </Grid>
                    </Grid>
                </Box>
                <Box className="apply_div">
                    <a href="/" className="apply_btn">Browse upcoming experiences</a>
                    <Typography className="need-help">Need Help? <Link href="/contact-us" className="need-help-link">Contact
                        Us</Link></Typography>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default MobileGiftCardSent