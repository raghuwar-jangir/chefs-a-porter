import * as React from 'react';
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
        mainTitle: '"They are the only ones that do Private Dining Well"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '“They are the only ones that do Private Dining Well”',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '“They are the only ones that do Private Dining Well”',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '“They are the only ones that do Private Dining Well”',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
];


const RatingCarousel = ({ backgroundColor }) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [value, setValue] = React.useState(4);
    const maxSteps = images.length;


    const BoxWrapper = styled(Box)(() => ({
        padding: '40px 37px',
        background: `${backgroundColor}`,
        color: '#222222',
        ".mainTitle": {
            fontSize: "24px",
            textAlign: "center"
        },
        ".details": {
            textAlign: "center",
            fontSize: "14px",
            fontWeight: 400,
        },
        ".star": {
            textAlign: "center",
            padding: '22px 0px',
            color: '#000',
        },
        ".ceoName": {
            textAlign: "center",
            fontSize: "14px",
            fontWeight: 600,
            padding: '30px 0px 24px 0px '
        },
        '.rating-star': {
            color: '#222222',
            borderColor: '#222222'
        }

    }))


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
                            <Typography
                                className='star'
                            >
                                <Rating className='rating-star'
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
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
                    background: `${backgroundColor}`,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            />
        </BoxWrapper>
    );
}

export default RatingCarousel;
