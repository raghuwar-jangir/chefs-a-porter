import { Button, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {Link} from "gatsby";
const SupperClubTreatyComponent = () => {
    const BoxWrapper = styled(Box)(() => ({
        padding: '40px 16px',
        color: '#080B0E',
        width:'auto',
        textAlign:'left',
        backgroundColor:'#DCD7CB',
        ".heading": {
            fontSize: "14px",
            fontWeight:400,
            lineHeight: "24px",
            fontStyle:'normal',
            fontFamily: 'Proxima Nova Alt',
            marginBottom: '8px',
        },
        ".main-title": {
            fontSize: "20px",
            lineHeight: "25px",
            letterSpacing: "0.06em",
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: 700,
            color: '#080B0E',
            padding:"0px",
            marginBottom: '8px',

        },
        ".details": {
            fontSize: "14px",
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight:400,
            lineHeight: '26px',
            color: '#080B0E',
            height: '24px',
            marginBottom: '13px',
        },
        ".btn": {
            fontStyle: 'normal',
            lineHeight: '19px',
            marginRight: '0px',
            border: '1px solid #222222',
            width: '188px !important',
            fontFamily: 'Proxima Nova Alt',
            fontSize: "16px !important",
            fontWeight: 600,
            borderRadius: "0px",
            color: "#080B0E !important",
            backgroundColor: 'unset !important',
            textTransform: "capitalize",
            height: "45px !important",
            // padding: '14px !important',
            textDecoration:'none',
            display:'flex',
            justifyContent:'center',
            alignItems:"center",
        },
        ".btn:hover": {color: "#C6A87D!important;"},
        ".sub-div": {
            background: '#FBFBFB',
            padding: '20px 19px',
            boxShadow:' 0px 20px 24px rgb(0 0 0 / 6%)',
            border:'0.5px solid #080B0E'
        },
        '.btn-box':{
            display:'flex',
            justifyContent:'end',
            placeSelf:'center'
        },
        '.treaty-box':{
            display:'flex',
            justifyContent:'space-between',
            placeItems:'flex-start',
            flexDirection:'column'
        },
        "@media (min-width: 768px) and (max-width:1024px)": {
            '.btn':{
                width:'100px !important'
            }
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
            },
            '.treaty-box':{
                flexDirection:'column'
            },
            '.btn-box':{
                width:'100%'
            },
        },
        '@media(min-width: 426px) and (max-width: 768px)': {
            ".btn": {
                width: '100% !important',
                margin:"0px",
            },
            '.btn-box':{
                width:'100%'
            },
            '.treaty-box':{
                flexDirection:'column'
            }
        },
    }))


    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className="sub-div">
                    <Box className='treaty-box'>
                        <Box>
                            <Typography className="heading">
                                #Patron Privilage
                            </Typography>
                            <Typography className="main-title">
                                Give the gift of an unforgettable food experience
                            </Typography>
                            <Typography className="details">
                                send a gift card to your friends and family
                            </Typography>
                        </Box>
                        <Box className='btn-box'>
                            <Link href="/gift-cards" className="btn">
                                Learn More
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </BoxWrapper>

        </React.Fragment>
    )
}
export default SupperClubTreatyComponent ;
