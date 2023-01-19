import { Box, Step, StepLabel, Stepper, styled, Typography } from "@mui/material";
import first from "./../assets/images/1.png"
import secound from "./../assets/images/2.png"
import third from "./../assets/images/3.png"
import line from "./../assets/images/Line.png"


import React from "react";
const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
];
const StepsComponent = () => {
    const BoxWrapper = styled(Box)(() => ({
        background: "#080B0E",
        color: "#FBFBFB",
        textAlign: 'center',
        padding: '80px 0px',
        ".heading": {
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "45px"
        },
        ".comman-box": {
            display: "flex",
            justifyContent: "space-between"
        },
        ".comman-box-2": {
            display: "flex",
            justifyContent: "space-between",
            padding: '30px 35px 8px 35px',
            textAlign: 'center'
        },
        ".text": {
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "30px",
            padding: '30px 0px 8px 0px'
        },
        ".img": {
            marginTop: '50px',
            display: 'flex'
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            ".img": {
                display: "none"
            }
        }
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                <Typography className="heading">How it works</Typography>
                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', paddingTop: "40px" }}>
                    <Box>
                        <img src={first} alt="first" />
                        <Typography className="text">BOOK</Typography>
                        <Typography>Personal Details</Typography>
                    </Box>
                    <img src={line} alt="line" className="img" />
                    <Box>
                        <img src={secound} alt="secound" />
                        <Typography className="text">ADD</Typography>
                        <Typography>Make it better</Typography>
                    </Box>
                    <img src={line} alt="line" className="img" />
                    <Box>
                        <img src={third} alt="third" />
                        <Typography className="text">PAY</Typography>
                        <Typography>Let’s shake on it</Typography>
                    </Box>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default StepsComponent