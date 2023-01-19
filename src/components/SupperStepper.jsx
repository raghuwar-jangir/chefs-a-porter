import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import SupperTabComponent from './SupperTabComponent';

const ContentWrapprer = styled(Box)({
    background: '#FBFBFB',
    '.super-title': {
        color: '#050405',
        fontSize: '32px',
        lineHeight: '24px',
        fontWeight: '700',
        padding: '37px',
        textAlign: 'center',
    },
    '.food-box': {
        margin: '0px 120px'
    },

    // !media queries for title of supper-Clube(Browser)

    '@media(min-width: 1px) and (max-width: 425px)': {
        '.super-title': {
            fontSize: '24px',
            lineHeight: '24px',
            fontWeight: '700',
        },
        '.food-box': {
            margin: '0px 16px'
        },
    }
})

const SupperStepper = () => {
    return (
        <React.Fragment>
            <ContentWrapprer>
                <Typography className='super-title'>
                    Upcoming Supper Clubs
                </Typography>
                <Box className='food-box'>
                    <SupperTabComponent />
                </Box>
            </ContentWrapprer>
        </React.Fragment>
    )
}

export default SupperStepper;