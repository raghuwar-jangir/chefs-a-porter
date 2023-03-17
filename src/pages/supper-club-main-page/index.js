import React from "react";
import { Box,Typography,styled } from "@mui/system";
import supperVideo from '../../assets/video/supper.mp4';
import NavbarComponent from '../../components/NavbarComponent';
import DownArrow from '../../assets/images/down-arrow.png';
import '../../assets/styles/fontStyle.css';

const SupperClubMainComponent = () => {
const MainBox = styled(Box)(()=>({
    '.home-banner': {
        marginTop: '25px'
    },
    '.container-fluid': {
        padding: '0px',
        margin: '0px',
        position: 'relative',
    },
    '.home-banner-video': {
        width: '100%',
        height: '600px',
        objectFit: 'cover',
        display: 'block',
    },
    '.video-overlays': {
        position: 'relative'
    },
    '.justify-content-center': {
        padding: '0px',
        margin: '0px',
        position: 'relative',
    },
    '.arrows': {
        position: 'absolute',
        bottom: '28px',
        display: 'block',
        left: '0px',
        right: '0px',
        margin: '0 auto',
        '-moz-animation': 'bounce 2s infinite',
        '-webkit-animation': 'bounce 2s infinite',
        animation: 'bounce 2s infinite,'
    },
    '.arrows img': {
        display: 'block',
        margin: '0 auto',
        width: '15px',
        height: '8px',
        objectFit: 'contain',
    },
    '.home-text': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '36px',
        textAlign: 'center',
        color: '#FBFBFB',
        position: 'absolute',
        left: '0px',
        right: '0px',
        bottom: '42px',
    },
    '.down-arrow-op': {
        opacity: '0.38',
    },
}))
    return(
        <React.Fragment>
            <MainBox>
                <NavbarComponent/>
                <Box className="home-banner">
                    <Box className="container-fluid">
                        <Box className="justify-content-center">
                            <Box id="video_overlays">
                                <video autoPlay muted loop className="video home-banner-video">
                                    <source src={supperVideo} type="video/mp4"/>
                                </video>
                            </Box>
                            <Box className="arrows">
                                {/* <Typography className="home-text">We believe in good food for all!</Typography> */}
                                <img src={DownArrow} alt="down" className="down-arrow-op"/>
                                <img src={DownArrow} alt="down" className="down-arrow"/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </MainBox>
        </React.Fragment>
    )
}
export default SupperClubMainComponent;