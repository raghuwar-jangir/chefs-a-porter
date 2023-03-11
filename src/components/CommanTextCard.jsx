import React from "react";
import {Box, styled, Typography} from "@mui/material";
import '../assets/styles/fontStyle.css'

const CommanTextCard = ({mainTitle, details, colors, fontSize}) => {
    const BoxWrapper = styled(Box)((color) => ({
        ".main-heading": {
            fontWeight: '700',
            fontSize: "24px !important",
            lineHeight: "30px",
            textAlign: 'center',
            marginBottom: '20px',
            fontFamily: 'Bon Vivant !important',
            color: `${colors}`
        },
        ".details": {
            fontFamily: 'ProximaNovaA-Regular',
            fontWeight: '400',
            fontSize: `${fontSize}`,
            lineHeight: "24px",
            textAlign: 'center',
            color: `${colors}`,
            margin: '0px 405px'
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            '.details': {
                fontSize: '16px !important',
                lineHeight: '24px !important',
                margin: '0px 0px'
            },
        },
        "@media (min-width: 426px) and (max-width:768px)": {
            '.details': {
                fontSize: '16px !important',
                lineHeight: '24px !important',
                margin: '0px 40px'
            },
        },
        "@media (min-width: 769px) and (max-width:1024px)": {
            '.details': {
                fontSize: '16px !important',
                lineHeight: '24px !important',
                margin: '0px 120px'
            },
        },
        "@media (min-width: 1100px) and (max-width:1450px)": {
            '.details': {
                fontSize: '16px !important',
                lineHeight: '24px !important',
                margin: '0px 200px'
            },
        },
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                <Box>
                    <Typography className="main-heading">{mainTitle}</Typography>
                    <Typography className="details">
                        {details}
                    </Typography>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default CommanTextCard