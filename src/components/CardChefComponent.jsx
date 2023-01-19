import { Box, styled, Typography } from "@mui/material";
import React from "react";
import WorkIcon from '@mui/icons-material/Work';
const CardChefComponent = ({ bgColor }) => {

    const BoxWrapper = styled(Box)(() => ({
        // padding: '40px 16px 16px 16px',
        background: bgColor,
        ".sub-box-card": {
            display: 'flex',
            alignItems: "center",
            paddingBottom: "8px"
        },
        ".heading": {
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "25px",
            paddingBottom: "22px"
        },
        ".field-name": {
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "19px",
            padding: '0px 8px 0px 10px'
        },
        ".field-ans": {
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E"
        },
        ".details": {
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#080B0E",
            padding: '12px 0px 0px 0px'
        },
        "@media (min-width: 1px) and (max-width:425px)": {
        }
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                <Typography className="heading">About the Chef</Typography>
                <Box className="sub-box-card">
                    <WorkIcon />
                    <Typography className="field-name">Fun facts:</Typography>
                    <Typography className="field-ans">Food fanatic</Typography>
                </Box>
                <Box className="sub-box-card">
                    <WorkIcon />
                    <Typography className="field-name">Worked at:</Typography>
                    <Typography className="field-ans">Taj</Typography>
                </Box>
                <Box className="sub-box-card">
                    <WorkIcon />
                    <Typography className="field-name">Culinary School:</Typography>
                    <Typography className="field-ans">Le Cordon Blue</Typography>
                </Box>
                <Box className="sub-box-card">
                    <WorkIcon />
                    <Typography className="field-name">Trained under:</Typography>
                    <Typography className="field-ans">Gordan Ramsay</Typography>
                </Box>
                <Typography className="details">
                    From Bangalore to the Culinary Institute of
                    America in New York. He has developed his skills and love for the culinary arts.
                    From Bangalore to the Culinary...<span><u><b>Read more</b></u></span>
                </Typography>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default CardChefComponent