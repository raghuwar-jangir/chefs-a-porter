import {Button, styled, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React from "react";
import {Link} from "gatsby";
import * as _ from "lodash";

const Treaty = (props) => {
    const BoxWrapper = styled(Box)(() => ({
        padding: '40px 16px',
        color: '#080B0E',
        textAlign: 'left',
        ".heading": {
            fontSize: "16px",
            lineHeight: "38px",
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            marginBottom: '13px',
        },
        ".main-title": {
            fontSize: "31px",
            lineHeight: "40px",
            letterSpacing: "0.03em",
            fontWeight: '700',
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            color: '#080B0E',
            padding: "0px",
            marginBottom: '13px',
        },
        ".details": {
            fontSize: "21px",
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            lineHeight: '26px',
            color: '#080B0E',
            height: '26px',
            marginBottom: '13px',
        },
        ".btn": {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '24px',
            marginRight: '0px',
            border: '1px solid #222222',
            width: '188px !important',
            fontSize: "20px !important",
            borderRadius: "0px",
            color: "#080B0E !important",
            backgroundColor: 'unset !important',
            textTransform: "capitalize",
            height: "55px !important",
            // padding: '14px !important',
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
        },
        ".btn:hover": {color: "#C6A87D!important;"},
        ".sub-div": {
            background: '#FBFBFB',
            padding: '30px 20px 30px 30px',
            boxShadow: ' 0px 20px 24px rgb(0 0 0 / 6%)',
            // width: '636px'
        },
        '.btn-box': {
            display: 'flex',
            justifyContent: 'end',
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
            '.sub-div': {
                width: 'auto'
            }
        },
        '@media(min-width: 426px) and (max-width: 768px)': {
            ".btn": {
                width: '100% !important',
                margin: "0px",
            },
        },
        '@media(min-width: 769px) and (max-width: 1100px)': {
            '.sub-div': {
                width: '368px'
            }
        },
        '@media(min-width: 1100px) and (max-width: 1450px)': {
            '.sub-div': {
                width: '550px'
            }
        },
    }))


    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className="sub-div">
                    <Typography className="heading">
                        {props.treatTitle}
                    </Typography>
                    <Typography className="main-title">
                        {props.mainTitle}
                    </Typography>
                    <Typography className="details">
                        {props.detail}
                    </Typography>
                    <Box className='btn-box'>
                        <Link href={props.link} className="btn">
                            {props.button_text ? props.button_text : 'Learn More'}
                        </Link>
                    </Box>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default Treaty;