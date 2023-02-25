import {Box, styled, Typography} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
import {Link} from "gatsby";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const OpenPosition = () => {
    const BoxWrapper = styled(Box)(() => ({
        display: 'none',
        ".main-heading": {
            // fontWeight: 700,
            fontSize: "30px",
            lineHeight: "25px",
            textAlign: 'center', color: '#080B0E',
            fontFamily: 'Bon Vivant'
        },
        ".details": {
            // fontWeight: 400,
            fontSize: "14px",
            lineHeight: "24px",
            textAlign: 'center',
        },
        ".main-div-open-positions": {
            // fontWeight: 700,
            fontSize: "24px",
            lineHeight: "30px",
            textAlign: 'center',
            padding: '40px 16px'
        },
        ".sub-div-open-positions": {
            background: "#FBFBFB",
            boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.06)",
            padding: '16px 10px 16px 10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '8px'
        },
        ".positions": {
            // fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px",
            paddingBottom: '16px'
        },
        ".main-heading-open-positions": {
            // fontWeight: 700,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#242F35",
        },
        ".details-open-positions": {
            // fontWeight: 300,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#242F35",
            paddingTop: "8px",
        },
        ".sub-heading-open-positions": {
            // fontWeight: 600,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#101418",
            paddingTop: '20px'
        },
        ".some-details": {
            // fontWeight: 300,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#242F35"
        },
        ".open-positions-div": {
            padding: "0px"
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            display: 'block',
            ".open-positions-div": {
                padding: "0px 16px 40px 16px"
            },
        }
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className="open-positions-div">
                    <Typography className="main-div-open-positions">Open Positions</Typography>
                    <Typography className="positions">Engineers</Typography>
                    <Box className="sub-div-open-positions">
                        <Box>
                            <Typography className="main-heading-open-positions">Software Engineers (Back
                                End)</Typography>
                            <Typography className="details-open-positions">Mumbai, IN</Typography>
                        </Box>
                        <ChevronRightIcon/>
                    </Box>
                    <Box className="sub-div-open-positions">
                        <Box>
                            <Typography className="main-heading-open-positions">QA Engineer</Typography>
                            <Typography className="details-open-positions">Mumbai, IN</Typography>
                        </Box>
                        <ChevronRightIcon/>
                    </Box>
                    <Typography className="sub-heading-open-positions">Developers</Typography>
                    <Box className="sub-div-open-positions">
                        <Box>
                            <Typography className="main-heading-open-positions">Full Stack Developer</Typography>
                            <Typography className="details-open-positions">Mumbai, IN</Typography>
                        </Box>
                        <ChevronRightIcon/>
                    </Box>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default OpenPosition
