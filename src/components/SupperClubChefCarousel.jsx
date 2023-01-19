import React from 'react';
import { Box, Button, Hidden, styled, Typography } from '@mui/material';
import ChefCarousel from './ChefCarousel';


const BoxWrapper = styled(Box)(() => ({
    '.BoxWrapper': {
        padding: '40px 120px',
    },
    ".sub-div": {
        display: "flex",
        justifyContent: "center",
        textAlign: "center"
    },
    ".heading": {
        fontWeight: 700,
        fontSize: "30px",
        lineHeight: "36px",
        paddingBottom: "20px",
        width: '80%'
    },
    '.button-component': {
        textAlign: 'center',
        background: '#FBFBFB',
        paddingBottom: '30px'
    },
    '.view-button': {
        border: '1px solid #080B0E',
        textTransform: 'capitalize',
        width: '30%',
        fontSize: '24px',
        backgroundColor: '#FBFBFB',
        color: '#080B0E',
        marginTop: '40px'
    },

    '@media(min-width: 1px) and (max-width: 425px)': {
        '.BoxWrapper': {
            padding: '40px 16px',
        },
        '.view-button': {
            width: '100%',
        }
    }


}));



const SupperClubChefCarousel = ({ isButtonShow = false }) => {

    return (
        <React.Fragment>
            <BoxWrapper >
                <Box className='BoxWrapper'>
                    <Box className="sub-div">
                        <Typography className="heading">
                            Behind the Scenes
                        </Typography>
                    </Box>
                    <ChefCarousel />

                    <Hidden only='xs'>
                        <Box className='button-component'>
                            <Button
                                fullWidth
                                className='view-button'
                            >
                                View All
                            </Button>
                        </Box>
                    </Hidden>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}

export default SupperClubChefCarousel;