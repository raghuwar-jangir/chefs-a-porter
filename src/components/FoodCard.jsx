import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FoodImg1 from './../assets/images/joinaschef.png'
const FoodCard = () => {
    const BoxWrapper = styled(Box)(() => ({
        padding: '40px 10px',
        background: '#DCD7CB',
        '.main-parent': {
            display: 'flex',
            padding: '0px',
            background: '#FBFBFB',
            boxShadow: " 0px 8px 10px rgba(0, 0, 0, 0.06)",
        },
        ".food-title": {
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: '25px',
            color: '#080B0E'
        },
        ".food-Details": {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: '20px',
            color: "#080B0E",
            width: '100%',
        },
        ".sub-box": {
            padding: '10px',
            width: '58%'
        }, ".view-point": {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: '20px',
            display: 'flex', alignItems: 'center', paddingTop: '3px'
        }

    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className='main-parent'>
                    <img src={FoodImg1} alt="FoodImg1" style={{ width: "35%" }} />
                    <Box className="sub-box">
                        <Typography className="food-title">Join as a chef</Typography>
                        <Typography className="food-Details">we are looking for top talent to join us</Typography>
                        <Typography className="view-point">View Openings <ChevronRightIcon sx={{ fontSize: '15px' }} /> </Typography>
                    </Box>
                </Box>

            </BoxWrapper>
        </React.Fragment>
    )
}
export default FoodCard;