import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react'
import FoodDetailing from './FoodDetailing';


const MainParent = styled(Box)({
    '.parent-body': {
        padding: '80px 120px',
        backgroundColor: '#DCD7CB',
    },
    '.food-header': {
        fontSize: '32px',
        lineHeight: '24px',
        fontWeight: '700',
        color: '#050405',
        padding: '0px 5px',
        fontFamily: 'Bon Vivant'
    },
    '.sub-description': {
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: '400',
        color: '#434343',
        padding: '16px 5px 0px 5px'

    },
    '.button-component': {
        textAlign: 'center',
    },
    '.view-button': {
        textTransform: 'capitalize',
        backgroundColor: '#DCD7CB',
        color: '#080B0E',
        fontFamily: 'ProximaNovaA-Regular',
        right:'86%',
        fontStyle: 'normal',
    fontWeight: '200',
    fontSize: '16px',
    lineHeight: '19px',
    },
    ".btn-container":{
        display:'flex',
        justifyContent:'space-between',
        position:'relative'
    },

    // ! media query for foodDetails card-component(Mobile-view)
    '@media(min-width: 380px)and (max-width: 425px)': {
        '.view-button':{
            position:'absolute',
            // top: '1090px',
            // left:'0%',
            border:'1px solid black',
            width: '100%',
    fontSize: '13px',
    fontWeight: '200',
    fontFamily: 'ProximaNovaA-Regular',
    top:'663px',
    right:'0px',
    // height:'65%'
        },
        '.css-10vjzfb-MuiButtonBase-root-MuiButton-root:hover ':{
            color:'#C6A87D !important'
        },
        
    },
    '@media(min-width: 1px) and (max-width: 425px)': {
        '.parent-body': {
            padding: '40px 16px',
        },
        '.food-header': {
            fontSize: '24px',
        },
        '.sub-description': {
            fontSize: '14px',
            lineHeight: '19px',
            paddingTop: '8px'
        },
        '.view-button': {
            width: '100%',
            fontSize: '16px',
            // fontWeight: '600'
        },
       
    }

})


const MainFoodDetailng = () => {
    return (
        <React.Fragment>
            <MainParent>
               
                <Box className='parent-body'>
                    <Typography className="food-header">
                        Upcoming Supper Clubs
                    </Typography>
                    <Box className='btn-container'>
                    <Typography className="sub-description">
                        Step out & enjoy a curated meal prepared by top chefs
                    </Typography>
                    <Box className='button-component'>
                        <Button
                            fullWidth
                            className='view-button'
                        >
                           View All
                        </Button>
                    </Box>
                    </Box>
                    <FoodDetailing />
                </Box>
            </MainParent>
        </React.Fragment>
    )
}

export default MainFoodDetailng;