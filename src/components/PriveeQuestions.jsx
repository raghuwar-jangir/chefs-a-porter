import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Box, styled} from '@mui/material';
import '../assets/styles/fontStyle.css';
import {useContext} from "react";
import CmsContext from "../context/CmsContext";
import * as _ from "lodash";

const PriveeQuestions = ({isLightTheme = false}) => {

    const [expanded, setExpanded] = React.useState(false)

    const {data} = useContext(CmsContext);

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
            fontWeight: '700 !important',
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
        '.css-o4b71y-MuiAccordionSummary-content': {
            margin: '20px 0px'
        },
        '.frequently-questions': {
            fontStyle: 'normal',
            fontWeight: '400 !important',
            fontVariant: 'normal',
            lineHeight: '1.5',
            fontSize: '1rem',
            padding: "0 20px"
        },
        '.frequently-ans': {
            fontStyle: 'normal',
            fontWeight: '400 !important',
            fontVariant: 'normal',
            lineHeight: '1.5',
            fontSize: '1rem'
        },
        '.accordionSummary': {
            display: 'flex !important'
        },
        // !media query for accodion component(mobileView)

        '@media(min-width: 1px) and (max-width: 431px)': {
            '.title-question': {
                fontSize: '24px',
                fontWeight: '700',
                lineHeight: '29px',
            },
            '.WrapperBox': {
                padding: '20px 16px'
            },
            '.frequently-questions': {
                fontFamily: 'Proxima Nova Alt',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '17px',
            },
            '.frequently-ans': {
                fontStyle: 'normal',
                fontWeight: '400 !important',
                lineHeight: '17px',
                fontSize: '14px',
                fontFamily: 'Proxima Nova Alt'
            },
        }

    })
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <React.Fragment>
            <WrapperBox>
                {
                    !_.isEmpty(data?.privee) &&
                    <Box className='WrapperBox'>
                        <Typography className='title-question'>
                            {data.privee.faq.title}
                        </Typography>
                        {
                            data.privee.faq.contents.map((item, index) => {
                                return (
                                    // <Box className='parent-accordion'>
                                    <Box className=''>
                                        <Accordion expanded={expanded === `panel${index}`}
                                                   onChange={handleChange(`panel${index}`)}
                                                   className='accordion'>
                                            <AccordionSummary className='accordionSummary'
                                                // expandIcon={<AddIcon sx={{ color: '#fff' }} />}
                                                              expandIcon={expanded === `panel${index}` ?
                                                                  <RemoveIcon sx={{
                                                                      color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`,
                                                                      padding: "20px"
                                                                    }}/> : <AddIcon sx={{
                                                                        fontSize: '19px',
                                                                        color: `${isLightTheme ? '#080B0E' : '#FBFBFB'}`,
                                                                        padding: "20px"
                                                                  }}/>}
                                                              aria- controls="panel1a-content"
                                                              id="panel1a-header"
                                            >
                                                <Typography className='frequently-questions'>{item.title}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography className='frequently-ans'>{item.description}</Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                }
            </WrapperBox>
        </React.Fragment>
    )
        ;
}

export default PriveeQuestions;