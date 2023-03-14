import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Box, styled} from '@mui/material';
import '../assets/styles/fontStyle.css';

const PriveeQuestions = ({isLightTheme = false}) => {

    const [expanded, setExpanded] = React.useState(false)

    const WrapperBox = styled(Box)({
        background: `${isLightTheme ? '#FBFBFB' : "#080B0E"}`,
        textAlign: 'center',
        '.WrapperBox': {
            padding: '80px 120px'
        },
        '.title-question': {
            fontSize: '36px',
            fontFamily: 'Bon Vivant',
            lineHeight: '45px',
            fontWeight:'700 !important',
            letterSpacing: '0.06em',
            color: `${isLightTheme ? '#080B0E' : "#FBFBFB"}`
        },
        '.parent-accordion': {
            margin: '40px 0px',
        },
        '.accordion': {
            margin: '20px 0px',
            fontFamily: 'Proxima Nova !important',
            textAlign: 'left',
            boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.06)',
            background: `${isLightTheme ? '#FBFBFB' : '#101418'}`,
            fontSize: '16px',
            lineHeight: '19px',
            color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`
        },
        '.css-1elwnq4-MuiPaper-root-MuiAccordion-root:last-of-type': {
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
        },
        '.css-f1ki3n-MuiSvgIcon-root': {
            fontSize: '22px',
        },
        '.css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root': {
            borderTopStyle: 'unset',
            borderTopColor: 'unset',
        },
        '.css-1elwnq4-MuiPaper-root-MuiAccordion-root:before': {
            backgroundColor: 'unset'
        },
        '.css-ahj2mt-MuiTypography-root': {
            fontWeight: '200'
        },
        '.css-o4b71y-MuiAccordionSummary-content':{
            margin:'20px 0px'
        },
        '.frequently-questions':{
            fontStyle: 'normal',
		fontWeight: '400 !important',
		fontVariant:'normal',
		lineHeight: '1.5',
		fontSize:'1rem',
        },
        '.frequently-ans':{
            fontStyle: 'normal',
		fontWeight: '400 !important',
		fontVariant:'normal',
		lineHeight: '1.5',
		fontSize:'1rem'
        },
        '.accordionSummary':{
            display:'flex !important'
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
            },
            '.frequently-questions':{
    fontFamily: 'Proxima Nova Alt',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '17px',
            },
            '.frequently-ans':{
                fontStyle: 'normal',
            fontWeight: '400 !important',
            lineHeight: '17px',
            fontSize:'14px',
            fontFamily:'Proxima Nova Alt'
            },
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
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                                   className='accordion'>
                            <AccordionSummary className='accordionSummary'
                                // expandIcon={<AddIcon sx={{ color: '#fff' }} />}
                                expandIcon={expanded === 'panel1' ? <RemoveIcon sx={{
                                    color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`
                                }}/> : <AddIcon sx={{fontSize:'19px', color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`}}/>}
                                aria- controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className='frequently-questions'>Would there be any pure vegetarian options?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='frequently-ans'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ultrices urna
                                    vitae laoreet. Fusce posuere nec dui sed euismod. Vestibulum ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere cubilia curae; Sed eu faucibus elit, eget
                                    venenatis nulla. Vivamus vel blandit ipsum, eget fringilla neque. Sed sed dui eu
                                    erat tincidunt placerat. Nulla vitae aliquet urna.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                                   className='accordion'>
                            <AccordionSummary className='accordionSummary'
                                expandIcon={expanded === 'panel2' ?
                                    <RemoveIcon sx={{color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`}}/> :
                                    <AddIcon sx={{fontSize:'19px',color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className='frequently-questions'>How long does the meal last for ?</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='frequently-ans'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ultrices urna
                                    vitae laoreet. Fusce posuere nec dui sed euismod. Vestibulum ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere cubilia curae; Sed eu faucibus elit, eget
                                    venenatis nulla. Vivamus vel blandit ipsum, eget fringilla neque. Sed sed dui eu
                                    erat tincidunt placerat. Nulla vitae aliquet urna.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                                   className='accordion'>
                            <AccordionSummary className='accordionSummary'
                                expandIcon={expanded === 'panel3' ?
                                    <RemoveIcon sx={{color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`}}/> :
                                    <AddIcon sx={{fontSize:'19px',color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`}}/>}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography className='frequently-questions'>Whats the cancellation policy?</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='frequently-ans'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ultrices urna
                                    vitae laoreet. Fusce posuere nec dui sed euismod. Vestibulum ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere cubilia curae; Sed eu faucibus elit, eget
                                    venenatis nulla. Vivamus vel blandit ipsum, eget fringilla neque. Sed sed dui eu
                                    erat tincidunt placerat. Nulla vitae aliquet urna.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
                                   className='accordion'>
                            <AccordionSummary className='accordionSummary'
                                expandIcon={expanded === 'panel4' ?
                                    <RemoveIcon sx={{color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`}}/> :
                                    <AddIcon sx={{fontSize:'19px',color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`}}/>}
                                aria-controls="panel4a-content"
                                id="panel4a-header"
                            >
                                <Typography className='frequently-questions'>Will the cutlery be provided?</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='frequently-ans'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ultrices urna
                                    vitae laoreet. Fusce posuere nec dui sed euismod. Vestibulum ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere cubilia curae; Sed eu faucibus elit, eget
                                    venenatis nulla. Vivamus vel blandit ipsum, eget fringilla neque. Sed sed dui eu
                                    erat tincidunt placerat. Nulla vitae aliquet urna.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}
                                   className='accordion'>
                            <AccordionSummary className='accordionSummary'
                                expandIcon={expanded === 'panel5' ?
                                    <RemoveIcon sx={{color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`}}/> :
                                    <AddIcon sx={{fontSize:'19px',color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`}}/>}
                                aria-controls="panel5a-content"
                                id="panel5a-header"
                            >
                                <Typography className='frequently-questions'>Is it possible to pay the entiresum in EMIs?</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='frequently-ans'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ultrices urna
                                    vitae laoreet. Fusce posuere nec dui sed euismod. Vestibulum ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere cubilia curae; Sed eu faucibus elit, eget
                                    venenatis nulla. Vivamus vel blandit ipsum, eget fringilla neque. Sed sed dui eu
                                    erat tincidunt placerat. Nulla vitae aliquet urna.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}
                                   className='accordion'>
                            <AccordionSummary className='accordionSummary'
                                expandIcon={expanded === 'panel6' ?
                                    <RemoveIcon sx={{color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`}}/> :
                                    <AddIcon sx={{fontSize:'19px',color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`}}/>}
                                aria-controls="panel6a-content"
                                id="panel6a-header"
                            >
                                <Typography className='frequently-questions'>Is it possible to pay the entiresum in EMIs?</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='frequently-ans'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ultrices urna
                                    vitae laoreet. Fusce posuere nec dui sed euismod. Vestibulum ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere cubilia curae; Sed eu faucibus elit, eget
                                    venenatis nulla. Vivamus vel blandit ipsum, eget fringilla neque. Sed sed dui eu
                                    erat tincidunt placerat. Nulla vitae aliquet urna.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}
                                   className='accordion'>
                            <AccordionSummary className='accordionSummary'
                                expandIcon={expanded === 'panel7' ?
                                    <RemoveIcon sx={{color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`}}/> :
                                    <AddIcon sx={{fontSize:'19px',color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`}}/>}
                                aria-controls="panel7a-content"
                                id="panel7a-header"
                            >
                                <Typography className='frequently-questions'>How many guest can i invite for a private dinner?</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='frequently-ans'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet ultrices urna
                                    vitae laoreet. Fusce posuere nec dui sed euismod. Vestibulum ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere cubilia curae; Sed eu faucibus elit, eget
                                    venenatis nulla. Vivamus vel blandit ipsum, eget fringilla neque. Sed sed dui eu
                                    erat tincidunt placerat. Nulla vitae aliquet urna.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>

            </WrapperBox>
        </React.Fragment>
    );
}

export default PriveeQuestions;
