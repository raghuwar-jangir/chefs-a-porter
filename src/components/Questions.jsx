import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, styled } from '@mui/material';




const Questions = ({ isLightTheme = false }) => {

    const [expanded, setExpanded] = React.useState(false)

    const WrapperBox = styled(Box)({
        background: `${isLightTheme ? '#FBFBFB' : "#080B0E"}`,
        textAlign: 'center',
        '.WrapperBox': {
            padding: '80px 120px'
        },
        '.title-question': {
            fontSize: '36px',
            fontWeight: '700',
            lineHeight: '45px',
            color: `${isLightTheme ? '#080B0E' : "#FBFBFB"}`
        },
        '.parent-accordion': {
            margin: '40px 0px',
        },
        '.accordion': {
            margin: '20px 0px',
            boShadow: '0px 8px 10px rgba(0, 0, 0, 0.06)',
            background: `${isLightTheme ? '#FBFBFB' : '#101418'}`,
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '17px',
            color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`
        },

        // !media query for accodion component(mobileView) 

        '@media(min-width: 1px) and (max-width: 425px)': {
            '.title-question': {
                fontSize: '24px',
                fontWeight: '700',
                lineHeight: '29px',
            },
            '.WrapperBox': {
                padding: '20px 16px'
            }
        }

    })



    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <React.Fragment>
            <WrapperBox>
                <Box className='WrapperBox'>
                    <Typography className='title-question'>
                        Frequently Asked Questions
                    </Typography>
                    <Box className='parent-accordion'>

                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='accordion'>
                            <AccordionSummary
                                // expandIcon={<AddIcon sx={{ color: '#fff' }} />}
                                expandIcon={expanded === 'panel1' ? <RemoveIcon sx={{
                                    color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`
                                }} /> : <AddIcon sx={{ color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}` }} />}
                                aria- controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Would there be any pure vegetarian options?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='accordion'>
                            <AccordionSummary
                                expandIcon={expanded === 'panel2' ? <RemoveIcon sx={{ color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}` }} /> : <AddIcon sx={{ color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}` }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>How long does the meal last for ?</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='accordion'>
                            <AccordionSummary
                                expandIcon={expanded === 'panel3' ? <RemoveIcon sx={{ color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}` }} /> : <AddIcon sx={{ color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}` }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Whats the cancellation policy?</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className='accordion'>
                            <AccordionSummary
                                expandIcon={expanded === 'panel4' ? <RemoveIcon sx={{ color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}` }} /> : <AddIcon sx={{ color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}` }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Will the cutlery be provided?</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className='accordion'>
                            <AccordionSummary
                                expandIcon={expanded === 'panel5' ? <RemoveIcon sx={{ color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}` }} /> : <AddIcon sx={{ color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}` }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Is it possible to pay the entiresum in EMIs</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className='accordion'>
                            <AccordionSummary
                                expandIcon={expanded === 'panel6' ? <RemoveIcon sx={{ color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}` }} /> : <AddIcon sx={{ color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}` }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Is it possible to pay the entiresum in EMIs</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className='accordion'>
                            <AccordionSummary
                                expandIcon={expanded === 'panel7' ? <RemoveIcon sx={{ color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}` }} /> : <AddIcon sx={{ color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}` }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>How many guest can i invite for a private dinner?</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>

            </WrapperBox>
        </React.Fragment >
    );
}

export default Questions;