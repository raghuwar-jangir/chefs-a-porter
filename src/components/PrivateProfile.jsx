import React from 'react'
import { Box, Button, styled, Typography } from '@mui/material';
import Privee from './Privee';
import chefProfile from './../assets/images/chef1.png'
import chefProfile2 from './../assets/images/chef2.png'


const MainContentBox = styled(Box)({
    // border: '1px solid green',
    backgroundColor: '#080B0E',
    padding: '0px 16px',
    '.chefs-title': {
        color: '#FBFBFB',
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '30px',
        paddingTop: '40px',
    },
    '.child-privee-profile': {
        paddingTop: '26px'
    },
    '.view-more': {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '19px',
        border: '1px solid #C6A87D',
        textTransform: 'capitalize',
        padding: '15px',
        margin: '35px 0px',
        color: '#FBFBFB'
    }
})

const PrivateProfile = () => {
    return (
        <React.Fragment>
            <MainContentBox>
                <Typography className="chefs-title">
                    Chefs available for private dining this month
                </Typography>
                <Box className='child-privee-profile'>
                    <Privee image={chefProfile} width='100%' />
                </Box>
                <Box className='child-privee-profile'>
                    <Privee image={chefProfile2} width='100%' />
                </Box>
                <Button
                    className='view-more'
                    fullWidth
                >
                    View More Chefs
                </Button>

            </MainContentBox>
        </React.Fragment >
    )
}

export default PrivateProfile;