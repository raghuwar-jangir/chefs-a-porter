import { Avatar, Box, styled, Typography } from "@mui/material";
import IntroChefImg1 from "./../assets/images/IntroChefImg1.png"
import linkedInImg from "./../assets/images/linkedInImg.png"
import instaImg from "./../assets/images/instaImg.png"
import React from "react";
const IntroCardComponent = ({ title, position, details, image }) => {

    const BoxWrapper = styled(Box)(() => ({
        textAlign: 'center',
        dispaly: 'flex',
        justifyContent: "center",
        background: '#101418',
        padding: "0px 16px",
        ".main-title": {
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "25px",
            color: '#FBFBFB'
        },
        ".title-post": {
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "19px",
            color: '#FBFBFB',
            padding: '8px 0px 16px 0px'
        },
        ".details": {
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "24px",
            color: '#FBFBFB',
            paddingBottom: '16px'
        },
        ".custum-icon": {
            height: '35px',
            width: "35px",
            background: '#fff',
            color: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '18px',
            margin: '0px 5px'
        },
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                <Box sx={{ padding: "40px 16px", background: '#101418', }}>
                    <Box className="abc" sx={{
                        display: 'flex',
                        justifyContent: "center",
                        paddingBottom: "16px"
                    }} >
                        <Avatar alt="Remy Sharp" sx={{
                            width: "132px", height: "132px"
                        }} src={image} />
                    </Box>
                    <Typography className="main-title">{title}</Typography>
                    <Typography className="title-post">{position}</Typography>
                    <Typography className="details">
                        {details}
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus a mauris lacinia, blandit quam nec, iaculis mi.
                        Cras a est cursus, hendrerit ipsum a, sodales urna. Etiam
                        posuere consectetur tortor ultrices feugiat. Suspendisse
                        vel dui eget turpis rhoncus aliquet. Proin tempor tortor
                        quis pellentesque finibus. Quisque felis urna, pulvinar ut. */}
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: "center",
                    }}>
                        <Box className="custum-icon"><img src={linkedInImg} alt="linkedInImg" /></Box>
                        <Box className="custum-icon"><img src={instaImg} alt="instaImg" /></Box>
                    </Box>
                </Box>

            </BoxWrapper>
        </React.Fragment>
    )
}
export default IntroCardComponent