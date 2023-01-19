import { Box, Button, Grid, styled, Typography } from "@mui/material";
import React from "react";
const NeedHelp = ({ isColor }) => {
    const BoxWarraper = styled(Box)(() => ({
        padding: '40px 16px',
        background: `${isColor ? '#101418' : '#FBFBFB'
    }`,
        ".btn": {
            // border: '0.25px solid #fff',
            background: "#C6A87D",
            width: '162px',
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "19px",
            borderRadius: "0px",
            color: "#080B0E",
            color: `${ isColor? '#080B0E' : '#080B0E' }`,
            textTransform: "capitalize",
            height: "55px",
        },
        ".btn-2": {
            border: `${ isColor? '0.25px solid #554B3D' : '0.25px solid #fff' }`,
            background: "#080B0E",
            width: '162px',
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "19px",
            borderRadius: "0px",
            color: "#FBFBFB",
            textTransform: "capitalize",
            height: "55px",
            marginLeft: '6px'
        },
        ".main-heading": {
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "25px",
            letterSpacing: "0.06em",
            color: `${ isColor? '#FBFBFB' : '#080B0E' }`,
            paddingBottom: "8px"
        },
        ".details": {
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "24px",
            color: `${ isColor? '#FBFBFB' : '#080B0E' }`,
            // paddingBottom: "20px"
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            ".details": {
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "24px",
                // color: "#FBFBFB",
                paddingBottom: "20px"
            },
            ".btn": {
                width: '50%',
            },
            ".btn-2": {
                width: '48%',
            }

        }
    }))
    return (
        <React.Fragment>
            <BoxWarraper>
                <Grid container >
                    <Grid item md={6} sm={6} xs={12} xl={7}>
                        <Typography className="main-heading">Need Help?</Typography>
                        <Typography className="details">We respond within 24 business hours.</Typography>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12} xl={7}>
                        <Button
                            type="submit"
                            className="btn">Schedule a Call</Button>
                        <Button
                            type="submit"
                            className="btn-2">Email us</Button>
                    </Grid>

                </Grid>
                {/* <Box md={6}>
                    <Typography className="main-heading">Need Help?</Typography>
                    <Typography className="details">We respond within 24 business hours.</Typography>
                </Box>
                <Box md={6} sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Button
                        type="submit"
                        className="btn">Schedule a Call</Button>
                    <Button
                        type="submit"
                        className="btn-2">Email us</Button>
                </Box> */}
            </BoxWarraper>

        </React.Fragment>
    )
}
export default NeedHelp