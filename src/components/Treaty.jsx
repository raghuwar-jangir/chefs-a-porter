import { Button, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const Treaty = () => {
    const BoxWrapper = styled(Box)(() => ({
        padding: '40px 16px',
        background: "#DCD7CB",
        color: '#080B0E',
        ".heading": {
            fontSize: "14px",
            fontWeight: 300,
        },
        ".main-title": {
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "25px",
            letterSpacing: "0.03em",
            padding: '8px 0px'
        },
        ".details": {
            fontSize: "14px",
            fontWeight: 300,
            paddingBottom: '8px'
        },
        ".btn": {
            border: '1px solid #000',
            width: '100%',
            fontSize: "16px",
            fontWeight: 600,
            borderRadius: "0px",
            color: "#000",
            textTransform: "capitalize",
            height: "55px",
        },
        ".sub-div": {
            background: '#FBFBFB',
            padding: '20px 16px'
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
                    <Button className="btn">
                        Learn More
                    </Button>
                </Box>
            </BoxWrapper>

        </React.Fragment>
    )
}
export default Treaty;