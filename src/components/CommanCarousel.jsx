import React from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { styled } from '@mui/system';
import CarouselImg from "./../assets/images/team.png"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    CarouselImg,
    CarouselImg,
    CarouselImg,
    CarouselImg,
    CarouselImg,
];
const BoxWrapper = styled(Box)(() => ({
    background: "#FBFBFB",
    color: '#222222',
    ".css-1w60iqt-MuiPaper-root-MuiMobileStepper-root": {
        background: "#101418",
    },
    '.MuiMobileStepper-dot.MuiMobileStepper-dotActive.css-26w9jf-MuiMobileStepper-dot': {
        width: '15px',
        height: '15px',
        backgroundColor: '#C6A87D',
    },
    '.MuiMobileStepper-dots.css-1384nzf-MuiMobileStepper-dots': {
        paddingTop: '16px',
    },
    ".css-114p2tk-MuiMobileStepper-dot": {
        background: "#080B0E",
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
        ".img": {
            width: '100%',
            display: 'block',
        },
    }
}))

const CommanCarousel = () => {
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
                        <div key={index}>
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
                        background: "#FBFBFB",
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                />

            </BoxWrapper>
        </React.Fragment >
    )
}
export default CommanCarousel