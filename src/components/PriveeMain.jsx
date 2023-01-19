import React from 'react'
import { Box, Button, Grid, Hidden, styled, Typography } from '@mui/material';
import Privee from './Privee';
import chef from './../assets/images/chef1.png'
import chef2 from './../assets/images/chef2.png'


const MainParent = styled(Box)({
    '.continue-browsing-box': {
        background: '#080B0E',
        padding: '80px 120px',
        color: '#fff',
    },
    '.main-heading': {
        fontWeight: 700,
        fontSize: '32px',
        lineHeight: '40px',
        letterSpacing: '0.06em',
        color: '#FBFBFB'
    },
    '.heading-details': {
        fontWeight: 300,
        fontSize: '20px',
        lineHeight: '24px',
        color: '#FBFBFB',
        padding: '16px 0px 30px 0px'
    },
    '.parent-view-button': {
        textAlign: 'center',
        marginTop: '20px',
        marginTop: '40px',
    },
    '.view-more': {
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '29px',
        width: '30%',
        color: '#FBFBFB',
        background: '#080B0E',
        border: '1px solid #DCD7CB',
        padding: '12px'
    },

    '@media(min-width: 1px) and (max-width: 425px)': {
        '.continue-browsing-box': {
            background: '#080B0E',
            padding: '40px 16px',
            color: '#fff'
        },
        '.main-heading': {
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '25px',
        },
        '.heading-details': {
            fontWeight: 300,
            fontSize: '14px',
            lineHeight: '17px',
            padding: '4px 0px 20px 0px'
        },
        '.view-more': {
            width: '100%',
            fontSize: '16px',
            fontWeight: '600',
        }
    }
}
)

const PriveeMain = ({ title, subTitle, isButtonShow = false }) => {
    return (
        <React.Fragment>
            <MainParent>
                <Box className='continue-browsing-box'>
                    <Typography className='main-heading'>
                        {title}
                    </Typography>
                    <Typography className='heading-details'>
                        {subTitle}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xl={3} md={3} sm={6} xs={6}>
                            <Privee image={chef} />
                        </Grid>
                        <Grid item xl={3} md={3} sm={6} xs={6}>
                            <Privee image={chef2} />
                        </Grid>
                        <Grid item xl={3} md={3} sm={6} xs={6}>
                            <Privee image={chef} />
                        </Grid>
                        <Grid item xl={3} md={3} sm={6} xs={6}>
                            <Privee image={chef2} />
                        </Grid>
                    </Grid>
                    {isButtonShow &&
                        <Box className='parent-view-button'>
                            <Button
                                fullWidth
                                className='view-more'
                                variant="contained">
                                View More Chefs
                            </Button>
                        </Box>
                    }
                </Box>
            </MainParent >
        </React.Fragment >
    )
}

export default PriveeMain;