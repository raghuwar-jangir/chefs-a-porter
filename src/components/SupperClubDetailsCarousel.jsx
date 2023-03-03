import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { styled } from '@mui/system';
import { Rating } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
    {
        mainTitle: '"Mako and his eccentric Personality,',
        subTitle:'lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality,',
        subTitle:'lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality,',
        subTitle:'lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality,',
        subTitle:'lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality,',
        subTitle:'lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
];
const BoxWrapper = styled(Box)(() => ({
    padding: '80px 80px 40px',
    background: "#FBFBFB",
    color: '#222222',
    ".mainTitle": {
        fontSize: "24px",
        lineHieght:'150%',
        textAlign: "center",
        fontFamily: 'Bon Vivant'
    },
    ".details": {
        textAlign: "center",
        fontSize: "20px",
        // fontWeight: 400,
        lineHeight: '24px',
        fontFamily:'Proxima Nova Alt'
    },
    ".star": {
        textAlign: "center",
        padding: '22px 0px',
        color: '#000',
    },
    ".ceoName": {
        textAlign: "center",
        fontSize: "14px",
        padding: '30px 0px 24px 0px ',
        fontFamily: 'ProximaNovaA-Regular',
        fonStyle: 'normal',
        lineHeight: '150%',
        textTransform: 'uppercase',
        color: '#080B0E'
    },
    '.css-114p2tk-MuiMobileStepper-dot':{
        border:'1px solid black',
        backgroundColor:'white'

    },
    '.css-26w9jf-MuiMobileStepper-dot':{
        backgroundColor:'black',
        width:'14px',
        height:'14px'
    },
    "@media (min-width: 1px) and (max-width:768px)": {
        '.css-26w9jf-MuiMobileStepper-dot':{
            width:'8px',
            height:'8px'
        },
        '.css-114p2tk-MuiMobileStepper-dot':{
            width:'5px',
            height:'5px'
        }
    }


}))

const SupperClubDetailsCarousel = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [value, setValue] = useState(4);
    const maxSteps = images.length;

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <BoxWrapper
            // sx={{ maxWidth: 400, flexGrow: 1 }}
        >
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={index}>
                        <Box className='main-div'>
                            <Typography className='mainTitle'>
                                {step.mainTitle}
                            </Typography>
                            <Typography className='mainTitle'>
                                {step.subTitle}
                            </Typography>
                            <Typography
                                className='star'
                            >
                                <Rating
                                    sx={{
                                        color: '#222222',
                                        borderColor: '#222222'
                                    }}
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    size="large"
                                />
                            </Typography>
                            <Typography className='details'>
                                {step.details}
                            </Typography>
                            <Typography >
                                {step.name}
                            </Typography>
                            <Typography className='ceoName'>
                                {step.ceoName}
                            </Typography>
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
                    Color:'black'
                }}
            />
        </BoxWrapper>
    );
}

export default SupperClubDetailsCarousel;
