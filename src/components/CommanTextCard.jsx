import React from "react";
import { Box, styled, Typography } from "@mui/material";

const CommanTextCard = ({ mainTitle, details, colors }) => {
    const BoxWrapper = styled(Box)((color) => ({
        ".main-heading": {
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "25px",
            textAlign: 'center',
            paddingBottom: '16px', fontFamily: 'Bon Vivant',
            color: `${colors}`
        },
        ".details": {
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "24px",
            textAlign: 'center',
            color: `${colors}`
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