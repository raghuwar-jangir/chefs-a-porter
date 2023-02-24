import { Button, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const TemplateYet = (props) => {
    const BoxWrapper = styled(Box)(() => ({
        '.template': {
            display: 'none',
            background: '#FBFBFB',
            padding: '0px 10px 24px'
        },
        '.template-title': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '30px',
            textAlign: 'center',
            letterSpacing: '0.06em',
            color: '#080B0E',
            marginBottom: '0px',
            paddingBottom: '34px',
            // paddingTop: '20px',
        },
        '.view-all': {
            marginTop: '40px',
            display: 'block',
            width: 'auto',
            padding: '10px',
            textAlign: 'center',
            border: '0.5px solid #080B0E',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '19px',
            background: '#080B0E',
            color: '#FBFBFB',
            textDecoration: 'none',
        },
        '.view-all:hover': {
            color: '#C6A87D !important',
        },
        "@media (min-width: 1px) and (max-width:768px)": {
            '.template': {
                display: 'block',
            },
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            '.template': {
                background: '#080B0E',
            },
            '.template-title': {
                color: '#FBFBFB',
            },
            '.view-all': {
                marginTop: '5px',
                color: '#080B0E',
                background: '#C6A87D',
            },
        },

    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className="template show">
                    <Typography className="template-title">Tempted yet?</Typography>
                    <a href="" className="view-all">{props.title}</a>
                    {/*<a href="" className="view-all">Book an Experience</a>*/}
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default TemplateYet;