import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Dining from './../assets/images/privee.png';
import StarIcon from '@mui/icons-material/Star';


const WrapperBox = styled(Box)({
    padding: '16px',
    backgroundColor: '#101418',
    '.dining-privee': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    '.rating-star': {
        display: 'flex',
        alignItems: 'center',
        fontSize: '18px',
        fontWeight: '400',
        color: '#FBFBFB'
    },
    '.title': {
        color: '#C6A87D',
        fontWeight: '250',
        fontSize: '16px',
    },
    '.description': {
        fontSize: '20px',
        lignheight: '24px',
        fontWeight: '700',
        padding: '9px 0px',
        color: '#FBFBFB'
    },
    '.sub-description': {
        fontSize: '14px',
        lignheight: '17px',
        fontWeight: '300',
        color: '#FBFBFB'
    }
})

const PriveeDining = () => {
    return (
        <React.Fragment>
            <img src={Dining} alt='privee-dining' width={'100%'} style={{ verticalAlign: 'top' }} />
            <WrapperBox>
                <Box className='dining-privee'>
                    <Typography className='title'>
                        A Traditional Oma Kase
                    </Typography>
                    <Typography className='rating-star'>
                        <StarIcon sx={{ color: '#C6A87D' }} /> 4.7
                    </Typography>
                </Box>
                <Typography className='description'>
                    by Chef Mako Ravindran
                </Typography>
                <Typography className='sub-description'>
                    Starting from ₹5000 per diner
                </Typography>
            </WrapperBox>
        </React.Fragment>
    )
}

export default PriveeDining;