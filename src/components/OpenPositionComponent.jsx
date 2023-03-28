import {Box, styled, Typography} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, {useContext} from "react";
import {Link} from "gatsby";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import * as _ from "lodash";
import CmsContext from "../context/CmsContext";

const OpenPosition = () => {
    const {data} = useContext(CmsContext);
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
            paddingBottom: '16px',
            paddingTop: '5px'
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
                {
                    !_.isEmpty(data?.about_us) &&
                    <Box className="open-positions-div">
                        <Typography className="main-div-open-positions">{data.about_us.positions.title}</Typography>
                        {
                            data.about_us.positions.content.map((item) => {
                                return (
                                    <>
                                        <Typography className="positions">{item.name}</Typography>
                                        {
                                            item.positions.map(data => {
                                                return (
                                                    <>
                                                        <Box className="sub-div-open-positions">
                                                            <Box>
                                                                <Typography
                                                                    className="main-heading-open-positions">{data.title}</Typography>
                                                                <Typography
                                                                    className="details-open-positions">{data.location}</Typography>
                                                            </Box>
                                                            <ChevronRightIcon/>
                                                        </Box>
                                                    </>
                                                )
                                            })
                                        }
                                    </>
                                )
                            })
                        }
                    </Box>
                }
            </BoxWrapper>
        </React.Fragment>
    )
}
export default OpenPosition
