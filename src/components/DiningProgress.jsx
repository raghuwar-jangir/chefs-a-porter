import React from 'react';
import { Box, styled, Typography } from '@mui/material';


const DiningProgress = ({ title }) => {

    const ProgressParent = styled(Box)({
        width: '100%',
        backgroundColor: '#101418',
        '.progress-line': {
            // width: '100%',
            backgroundColor: '#C6A87D',
            height: '2px',
        },
        '.subProgressText': {
            textAlign: 'center',
            fontSize: '12px',
            color: '#FBFBFB'
        }
    });

    return (
        <React.Fragment>
            <ProgressParent >
                <Box className='progress-line' />
                <Typography className='subProgressText'> {title} </Typography>
            </ProgressParent>
        </React.Fragment >
    )
}

export default DiningProgress;