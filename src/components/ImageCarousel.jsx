import React from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { styled } from '@mui/system';
import gallery from "../assets/images/sc-gallery.png";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    gallery,
    gallery,
    gallery,
    gallery,
    gallery,
];
const BoxWrapper = styled(Box)(() => ({
    display:"none",
    background: "#FBFBFB",
    color: '#222222',
    ".css-1w60iqt-MuiPaper-root-MuiMobileStepper-root": {
        background: "#101418",
    },
    '.MuiMobileStepper-dot.MuiMobileStepper-dotActive.css-26w9jf-MuiMobileStepper-dot': {
        width: '15px',
        height: '15px',
        backgroundColor: '#FBFBFB',
    },
    '.MuiMobileStepper-dots.css-1384nzf-MuiMobileStepper-dots': {
        paddingTop: '16px',
    },
    ".css-114p2tk-MuiMobileStepper-dot": {
        border: '1px solid #FBFBFB',
        width: '14px',
        height: '14px'
    },
    ".img": {
        width: '100%',
        display: 'block',
        height: "100%"
    },
    "@media (min-width: 1px) and (max-width:425px)": {
        display:"block",
        ".img": {
            width: '100%',
            display: 'block',
        },
    },
    "@media (min-width: 320px) and (max-width:425px)": {
        '.css-5n45bv-MuiPaper-root-MuiMobileStepper-root':{
            paddingLeft:'130px',
            top:'220px'
        },
    },
    "@media (min-width: 320px) and (max-width:350px)": {
        '.css-5n45bv-MuiPaper-root-MuiMobileStepper-root':{
            paddingLeft:'105px',
            top:'190px'
        },
    },
    "@media (min-width: 425px) and (max-width:450px)": {
        '.css-5n45bv-MuiPaper-root-MuiMobileStepper-root':{
            paddingLeft:'150px',
            top:'250px'
        },
    },
}))

const ImageCarousel = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <React.Fragment>
            <BoxWrapper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={index} sx={{position:'relative'}}>
                            <Box className='main-div'>
                                <img alt="sample_file" className="img" src={step} />
                            </Box>
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                        background: "transparent",
                        position:'absolute',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                />
            </BoxWrapper>
        </React.Fragment >
    )
}
export default ImageCarousel