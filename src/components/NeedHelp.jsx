import {Box, Button, Grid, styled, Typography} from "@mui/material";
import React from "react";
const NeedHelp = ({ isColor }) => {
    const BoxWarraper = styled(Box)(() => ({
        padding: '40px 120px',
        display: 'flex',
        justifyContent: 'space-between',
        background: `${isColor ? '#101418' : '#FBFBFB'
        }`,
        ".btn": {
            // border: '0.25px solid #fff',
            background: "#080B0E",
            width: '214px !important',
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "19px",
            borderRadius: "0px",
            color: "#FBFBFB",
            // color: `${isColor ? '#FBFBFB' : '#FBFBFB'}`,
            textTransform: "capitalize",
            fontFamily: 'Proxima Nova',
            height: "55px",
            marginTop: "0px",
        },
        ".btn:hover": {
            color: "#C6A87D",
            background: "#080B0E",
        },
        ".btn-2": {
            border: `${isColor ? '0.25px solid #080B0E' : '0.25px solid #080B0E'}`,
            background: "#FBFBFB",
            width: '214px !important',
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "19px",
            borderRadius: "0px",
            color: "#080B0E",
            textTransform: "capitalize",
            fontFamily: 'Proxima Nova',
            height: "55px",
            marginLeft: '24px',
            marginRight: '150px'
        },
        ".btn-2:hover": {
            color: "#C6A87D",
            background: "#FBFBFB",
        },
        ".main-heading": {
            fontWeight: 500,
            fontSize: '24px',
            fontStyle: 'normal',
            fontFamily: 'Bon Vivant',
            lineHeight: "30px",
            letterSpacing: "0.06em",
            color: '#080B0E',
            // color: `${ isColor? '#FBFBFB' : '#080B0E' }`,
            paddingBottom: "8px",
            paddingTop:'0px!important',
            textAlign:'left'
        },
        ".details": {
            fontWeight: 300,
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontSize: "16px !important",
            lineHeight: "24px",
            color: '#080B0E',
            textAlign:'left'
            // color: `${ isColor? '#FBFBFB' : '#080B0E' }`,
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
        },
        "@media (min-width: 768px) and (max-width:1024px)": {
            '.btn-2':{
                marginLeft:'-1px !important',
                marginRight:'0px !important',
            }
        },
        "@media (min-width: 582px) and (max-width:768px)": {
           padding:'40px 30px', ".details": {
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "24px",
                // color: "#FBFBFB",
                paddingBottom: "20px"
            },

        },
        "@media (min-width: 1px) and (max-width:767px)": {
            display:'none'
        }
    }))
    return (
        <React.Fragment>
            <BoxWarraper>
                {/*<Grid container >*/}
                {/*    <Grid item md={6} sm={6} xs={12} xl={7}>*/}
                {/*        <Typography className="main-heading">Need Help?</Typography>*/}
                {/*        <Typography className="details">We respond within 24 business hours.</Typography>*/}
                {/*    </Grid>*/}
                {/*    <Grid item md={6} sm={6} xs={12} xl={7}>*/}
                {/*        <Button*/}
                {/*            type="submit"*/}
                {/*            className="btn">Schedule a Call</Button>*/}
                {/*        <Button*/}
                {/*            type="submit"*/}
                {/*            className="btn-2">Email us</Button>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
                <Box md={6} sm={6} xs={12} xl={7}>
                    <Typography className="main-heading">Need Help?</Typography>
                    <Typography className="details">We respond within 24 business hours.</Typography>
                </Box>
                <Box md={6} sm={6} xs={12} xl={7}>
                    <Button
                        type="submit"
                        className="btn">Schedule a Call</Button>
                    <Button
                        type="submit"
                        className="btn-2">Email us</Button>
                </Box>
            </BoxWarraper>

        </React.Fragment>
    )
}
export default NeedHelp