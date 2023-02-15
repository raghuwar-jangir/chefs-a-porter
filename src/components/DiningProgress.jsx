import React from 'react';
import { Box, styled, Typography } from '@mui/material';


const DiningProgress = ({ title }) => {
    const ProgressParent = styled(Box)({
        width: '100%',
        backgroundColor: '#101418',
        '.progress-line': {
            // width: '100%',
            backgroundColor: 'white',
            height: '2px',
            padding:'0px'
        },
        '.subProgressText': {
            textAlign: 'center',
            fontSize: '12px',
            color: '#FBFBFB',
            marginTop:'8px'
        }
    });

    return (
        <React.Fragment>
            <ProgressParent >
                <Box  className='progress-line' />
          <Typography className='subProgressText'> {title} </Typography>
            </ProgressParent>
        </React.Fragment >
    )
}

export default DiningProgress;