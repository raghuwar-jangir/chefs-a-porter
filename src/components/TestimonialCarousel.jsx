import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import {styled} from '@mui/system';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
    {
        mainTitle: 'Times Of India',
        details: '“A unique way of dining that is truly magical and extraordinary”',
    },
    {
        mainTitle: 'Times Of India',
        details: '“A unique way of dining that is truly magical and extraordinary”',
    },
    {
        mainTitle: 'Times Of India',
        details: '“A unique way of dining that is truly magical and extraordinary”',
    },
    {
        mainTitle: 'Times Of India',
        details: '“A unique way of dining that is truly magical and extraordinary”',
    },
    {
        mainTitle: 'Times Of India',
        details: '“A unique way of dining that is truly magical and extraordinary”',
    },
];


const TestimonialCarousel = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [value, setValue] = React.useState(4);
    const maxSteps = images.length;


    const BoxWrapper = styled(Box)(() => ({
        padding: '40px 0px',
        background: '#DCD7CB',
        color: '#222222',
        ".mainTitle": {
            fontSize: '30px ',
            lineHeight: '30px',
            textAlign: 'center',
            fontFamily: 'Bon Vivant !important',
            fontStyle: 'normal',
            letterSpacing: '0.06em',
            paddingBottom: '20px'
        },
        ".details": {
            textAlign: 'center',
            fontSize: '20px',
            lineHeight: '24px',
            fontFamily: 'Proxima Nova !important',
            padding: '0px 250px 20px ',
        },
        ".star": {
            height: '40px',
            textAlign: "center",
            padding: '22px 0px',
            color: '#000',
        },
        ".ceoName": {
            textAlign: "center",
            fontSize: "20px",
            fontWeight: 600,
            padding: '30px 0px 24px 0px ',
            fontFamily: 'Proxima Nova',
            textTransform: 'uppercase'
        },
        '.rating-star': {
            color: '#222222',
            borderColor: '#222222'
        },
        '& .MuiMobileStepper-dot': {
            height: '10px',
            width: '10px',
            marginTop: '1px',
            backgroundColor: 'transparent',
            border: '0.5px solid black'
        },
        '& .MuiMobileStepper-dotActive': {
            marginTop: '0px',
            height: '12px',
            width: '12px',
            color: '#000',
            backgroundColor: '#000',
        },
        '.css-dqr9h-MuiRating-label': {
            fontSize: '40px'
        },
        '@media(min-width: 1px) and (max-width: 768px)': {
            padding: '40px 20px',
            '.details': {
                padding: '20px',
                fontSize: '16px',
                textAlign: 'center',
            },
            '& .MuiMobileStepper-dot': {
                height: '6px',
                width: '6px',
            },
            '& .MuiMobileStepper-dotActive': {
                marginTop: '0px',
                height: '8px',
                width: '8px',
                color: '#000',
                backgroundColor: '#000',
            }
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
                            <Typography className='details'>
                                {step.details}
                            </Typography>
                            <Typography>
                                {step.name}
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
                    background: '#DCD7CB',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            />
        </BoxWrapper>
    );
}

export default TestimonialCarousel;
