import {styled, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React from "react";

const TemptedYet = (props) => {
    const {background, color, title, buttonText, isTempted} = props;
    const BoxWrapper = styled(Box)(() => ({
        '.template': [{
            display: 'none',
            padding: '0px 10px 24px',
            backgroundColor: `${isTempted ? '#080B0E' : '#FBFBFB'}`,
        }, background],
        '.template-title': [{
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '30px',
            textAlign: 'center',
            letterSpacing: '0.06em',
            color: `${isTempted ? '#FBFBFB' : '#080B0E'}`,
            marginBottom: '0px',
            paddingBottom: '34px',
            paddingTop: '20px',
        }, color],
        '.view-all': {
            marginTop: '40px',
            display: 'block',
            marginBottom: '0px',
            width: 'auto',
            padding: '10px',
            textAlign: 'center',
            border: '0.5px solid #080B0E',
            fontFamily: 'ProximaNovaA-Regular',
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
            '.view-all': {
                marginTop: '5px',
                color: '#080B0E',
                background: '#C6A87D',
                marginBottom: '0px'
            },
        },

    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className="template show">
                    <Typography className="template-title">{title}</Typography>
                    <a href="" className="view-all">{buttonText}</a>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default TemptedYet;