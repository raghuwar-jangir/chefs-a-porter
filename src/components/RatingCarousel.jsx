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
        mainTitle: '"Mako and his eccentric Personality, lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality, lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality, lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality, lit up the room and our taste buds!"',
        details: "I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!",
        ceoName: "Arvind Mohan, CEO of Alpha",
    },
    {
        mainTitle: '"Mako and his eccentric Personality, lit up the room and our taste buds!"',
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
            fontSize: '40px ',
            lineHeight:'60px',
            textAlign: 'center',
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
        },
        ".details": {
            textAlign: 'center',
            fontSize: '24px',
            lineHeight:'29px',
            fontFamily: 'Proxima Nova !important',
            padding: '0px 250px',
        },
        ".star": {
            height:'40px',
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
            textTransform:'uppercase'
        },
        '.rating-star': {
            color: '#222222 !important',
            borderColor: '#222222 !important'
        },
        '.css-26w9jf-MuiMobileStepper-dot':{
            backgroundColor:'black !important',
            color:'black !important',
            width: '14px',
            height: '14px',
            marginTop:'-3px',
        },
        '.css-dqr9h-MuiRating-label':{
            fontSize:'40px'
        },
        "@media (min-width: 700px) and (max-width:768px)": {
            ".mainTitle": {
                fontSize: '24px ',
                lineHeight:'30px',
                textAlign: 'center',
                fontFamily: 'Bon Vivant',
                fontStyle: 'normal',
            },
            '.css-dqr9h-MuiRating-label':{
                fontSize:'23px'
            },
            ".details": {
                textAlign: 'center',
                fontSize: '14px',
                lineHeight:'17px',
                fontFamily: 'Proxima Nova !important',
                padding: '0px 50px',
            },
            ".ceoName": {
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                padding: '30px 0px 24px 0px ',
                fontFamily: 'Proxima Nova',
                textTransform:'uppercase'
            },
            '.css-26w9jf-MuiMobileStepper-dot':{
                backgroundColor:'black !important',
                width: '12px',
                height: '12px',
                marginTop:'-3px',
            },
        },
        "@media (min-width: 768px) and (max-width:1024px)": {
            ".mainTitle": {
                fontSize: '24px ',
                lineHeight:'30px',
                textAlign: 'center',
                fontFamily: 'Bon Vivant',
                fontStyle: 'normal',
            },
            '.css-dqr9h-MuiRating-label':{
                fontSize:'23px'
            },
            ".details": {
                textAlign: 'center',
                fontSize: '16px',
                lineHeight:'17px',
                fontFamily: 'Proxima Nova !important',
                padding: '0px 10px',
            },
            ".ceoName": {
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                padding: '30px 0px 24px 0px ',
                fontFamily: 'Proxima Nova',
                textTransform:'uppercase'
            },
            '.css-26w9jf-MuiMobileStepper-dot':{
                backgroundColor:'black !important',
                width: '12px',
                height: '12px',
                marginTop:'-3px',
            },
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            padding: '40px 20px',
            ".mainTitle": {
                fontSize: '22px ',
                lineHeight:'30px',
                textAlign: 'center',
                fontFamily: 'Bon Vivant',
                fontStyle: 'normal',
            },
            '.css-dqr9h-MuiRating-label':{
                fontSize:'23px'
            },
            ".details": {
                textAlign: 'center',
                fontSize: '14px',
                lineHeight:'17px',
                fontFamily: 'Proxima Nova !important',
                padding: '0px 5px',
            },
            ".ceoName": {
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                padding: '30px 0px 24px 0px ',
                fontFamily: 'Proxima Nova',
                textTransform:'uppercase'
            },
            '.css-26w9jf-MuiMobileStepper-dot':{
                backgroundColor:'black !important',
                width: '12px',
                height: '12px',
                marginTop:'-3px',
            },
        },
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
