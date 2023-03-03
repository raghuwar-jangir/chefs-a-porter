import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import {styled} from '@mui/system';
import {Rating} from '@mui/material';

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


const RatingCarousel = ({backgroundColor}) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [value, setValue] = React.useState(4);
    const maxSteps = images.length;

    const StyledRating = styled(Rating)({
        '& .MuiRating-icon': {
            fontSize: '40px',
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            '& .MuiRating-icon': {
                fontSize: '24px',
            },
        },
    });

    const BoxWrapper = styled(Box)(() => ({
        padding: '40px 150px',
        background: `${backgroundColor}`,
        color: '#222222',
        ".mainTitle": {
            fontSize: '40px ',
            lineHeight: '60px',
            textAlign: 'center',
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
        },
        ".details": {
            textAlign: 'center',
            fontSize: '24px',
            lineHeight: '29px',
            fontFamily: 'Proxima Nova !important',
            padding: '0px 200px',
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
            color: '#222222 !important ',
            borderColor: '#222222 !important'
        },
        '.css-dqr9h-MuiRating-label': {
            fontSize: '40px'
        },
        '& .MuiMobileStepper-dot': {
            height: '10px',
            width: '10px',
            marginTop: '1px',
            backgroundColor:'transparent',
            border:'0.5px solid black'
        },
        '& .MuiMobileStepper-dotActive': {
            marginTop: '0px',
            height: '12px',
            width: '12px',
            color: '#000',
            backgroundColor: '#000',
        },
        "@media (min-width: 700px) and (max-width:768px)": {
            ".mainTitle": {
                fontSize: '24px ',
                lineHeight: '30px',
                textAlign: 'center',
                fontFamily: 'Bon Vivant',
                fontStyle: 'normal',
            },
            '.css-dqr9h-MuiRating-label': {
                fontSize: '23px'
            },
            ".details": {
                textAlign: 'center',
                fontSize: '14px',
                lineHeight: '17px',
                fontFamily: 'Proxima Nova !important',
                // padding: '0px 50px',
            },
            ".ceoName": {
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                padding: '30px 0px 24px 0px ',
                fontFamily: 'Proxima Nova',
                textTransform: 'uppercase'
            },
        },
        "@media (min-width: 768px) and (max-width:1024px)": {
            padding: '40px 100px',
            ".mainTitle": {
                fontSize: '24px ',
                lineHeight: '30px',
                textAlign: 'center',
                fontFamily: 'Bon Vivant',
                fontStyle: 'normal',
            },
            '.css-dqr9h-MuiRating-label': {
                fontSize: '23px'
            },
            ".details": {
                textAlign: 'center',
                fontSize: '16px',
                lineHeight: '17px',
                fontFamily: 'Proxima Nova !important',
                padding: '0px 10px',
            },
            ".ceoName": {
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                padding: '30px 0px 24px 0px ',
                fontFamily: 'Proxima Nova',
                textTransform: 'uppercase'
            },
        },

        "@media (min-width: 1100px) and (max-width:1450px)": {
            padding: '40px 120px',
            ".details": {
                textAlign: 'center',
                fontSize: '24px',
                lineHeight: '29px',
                fontFamily: 'Proxima Nova !important',
                padding: '0px 100px',
            },
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            padding: '40px 20px',
            ".mainTitle": {
                fontSize: '22px ',
                lineHeight: '30px',
                textAlign: 'center',
                fontFamily: 'Bon Vivant',
                fontStyle: 'normal',
            },
            '.css-dqr9h-MuiRating-label': {
                fontSize: '23px'
            },
            ".details": {
                textAlign: 'center',
                fontSize: '14px',
                lineHeight: '17px',
                fontFamily: 'Proxima Nova !important',
                padding: '0px 5px',
            },
            ".ceoName": {
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 600,
                padding: '30px 0px 24px 0px ',
                fontFamily: 'Proxima Nova',
                textTransform: 'uppercase'
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
            <Box>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    springConfig= {{duration: '1s'}}
                    // hysteresis={0.9}
                    // animateTransitions={true}
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
                                    <StyledRating className='rating-star'
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
                                <Typography>
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
                        // '& .MuiMobileStepper-dot': {
                        //     height: '12px',
                        //     width: '12px',
                        //     marginTop: '1px',
                        // },
                        // '& .MuiMobileStepper-dotActive': {
                        //     marginTop: '0px',
                        //     height: '14px',
                        //     width: '14px',
                        //     color: '#000',
                        //     backgroundColor: '#000',
                        // }
                    }}
                />
            </Box>
        </BoxWrapper>
    );
}

export default RatingCarousel;
