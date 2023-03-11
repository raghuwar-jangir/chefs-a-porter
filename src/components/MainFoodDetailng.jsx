import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react'
import FoodDetailing from './FoodDetailing';
import FoodCarousel from "./FoodCarousel";
import '../assets/styles/fontStyle.css'

const MainParent = styled(Box)({
    backgroundColor: '#DCD7CB',
    '.parent-body': {
        padding: '80px 120px 0px 120px',
        backgroundColor: '#DCD7CB',
    },
    '.food-header': {
        fontSize: '24px',
        lineHeight: '24px',
        color: '#050405',
        padding: '0px 5px',
        fontFamily: 'Bon Vivant',
        letterSpacing:'0.06em',
        fontWeight:700
    },
    '.sub-description': {
        fontSize: '20px',
        lineHeight: '24px',
        letterSpacing:'0.01em',
        color: '#434343',
        padding: '16px 5px 0px 5px',
        fontWeight:400,
        fontFamily:'ProximaNovaA-Regular'
    },
    '.button-component': {
        textAlign: 'center',
    },
    '.view-button': {
        textTransform: 'capitalize',
        backgroundColor: '#DCD7CB',
        color: '#080B0E',
        fontFamily: 'ProximaNovaA-Regular',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '19px',
    },
    ".btn-container":{
        display:'flex',
        justifyContent:'space-between',
        position:'relative'
    },

// ! media query for foodDetails card-component(Mobile-view)
    '@media(min-width: 425px)and (max-width: 768px)': {
        '.parent-body':{
            padding:'36px 5px 0px 19px'
        },
        '.sub-description': {
            fontSize: '14px',
            lineHeight: '141.5%',
        }
    },
    '@media(min-width: 375px)and (max-width: 425px)': {
        '.view-button':{
            position:'absolute',
            border:'1px solid black',
            width: '100%',
            fontSize: '13px',
            fontWeight: '600',
            fontFamily: 'ProximaNovaA-Regular',
            top:'1170px',
            right:'0px',
            borderRadius:'1px'
        },
        '.css-10vjzfb-MuiButtonBase-root-MuiButton-root:hover ':{
            color:'#C6A87D !important'
        },

    },
    '@media(min-width: 320px)and (max-width: 375px)': {
        '.view-button':{
            position:'absolute',
            border:'1px solid black',
            width: '100%',
            fontSize: '13px',
            fontWeight: '600',
            fontFamily: 'ProximaNovaA-Regular',
            top:'1193px',
            right:'0px',
            borderRadius:'1px'
        },},
    '@media(min-width: 1px)and (max-width: 320px)': {
        '.view-button':{
            position:'absolute',
            border:'1px solid black',
            width: '100%',
            fontSize: '13px',
            fontWeight: '600',
            fontFamily: 'ProximaNovaA-Regular',
            top:'1200px',
            right:'0px',
            borderRadius:'1px'
        },},
    '@media(min-width: 1px) and (max-width: 425px)': {
        '.parent-body': {
            padding: '58px 10px 0px 10px',
            backgroundColor: '#DCD7CB',
        },
        '.food-header': {
            fontSize: '24px',
            lineHeight:'24px',
            marginBottom:'0.5rem'
        },
        '.sub-description': {
            fontSize: '14px',
            lineHeight: '19px',
            paddingTop: '8px'
        },
        '.view-button': {
            width: '100%',
            fontSize: '16px',
            padding:'10px',
            lineHeight:'19px'
        },
    },

})


const MainFoodDetailng = () => {
    return (
        <React.Fragment>
            <MainParent>
                <Box>
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
                    </Box>
                    {/* <FoodDetailing /> */}
                    <FoodCarousel/>
                </Box>
            </MainParent>
        </React.Fragment>
    )
}

export default MainFoodDetailng;
