import React from "react";
import { Box, styled, Typography } from "@mui/material";

const CommanTextCard = ({ mainTitle, details, colors }) => {
    const BoxWrapper = styled(Box)((color) => ({
        ".main-heading": {
            // fontWeight: '700',
            fontSize: "28px !important",
            lineHeight: "30px",
            textAlign: 'center',
            paddingBottom: '16px',
            fontFamily: 'Bon Vivant !important',
            color: `${colors}`
        },
        ".details": {
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "24px",
            textAlign: 'center',
            color: `${colors}`,
            margin:'0px 400px'
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            '.details':{
                fontSize:'16px !important',
                lineHeight:'24px !important',
                margin:'0px 0px'
            },
        },
        "@media (min-width: 426px) and (max-width:768px)": {
            '.details':{
                fontSize:'16px !important',
                lineHeight:'24px !important',
                margin:'0px 40px'
            },
        },
        "@media (min-width: 769px) and (max-width:1024px)": {
            '.details':{
                fontSize:'16px !important',
                lineHeight:'24px !important',
                margin:'0px 120px'
            },
        },
        "@media (min-width: 1100px) and (max-width:1450px)": {
            '.details':{
                fontSize:'16px !important',
                lineHeight:'24px !important',
                margin:'0px 200px'
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