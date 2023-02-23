import React from 'react';
import {Box,Typography} from '@mui/material';
import {styled} from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const MainContentBox = styled(Box)({
    position: 'relative',
    '.dining-privee': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    '.rating-star': {
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        lineHeight: '17px',
        color: '#FBFBFB'

    },
    '.title': {
        color: '#C6A87D',
        fontWeight: '250',
        fontSize: '16px',
    },
    '.saff-parent': {
        padding: '16px',
        width: 'auto',
        height: '88px',
        backgroundColor: '#101418',
    },
    '.main-chaf-image': {
        height: '309px',
        objectFit: 'cover',
        width: '100%'
    },
    '.sub-box': {
        position: 'absolute',
        backgroundColor: '#101418',
        width: '100%',
        top: '0px', left: '0px'
    },
    '.top-box': {
        fontWeight: 300,
        fontSize: '16px',
        padding: '8px 12px',
        textAlign: 'right',
        letterSpacing: '0.02em',
        color: '#C6A87D',
        display:'flex',
        justifyContent:'end',
        alignItems:'center'
    },
    '.description': {
        fontSize: '20px',
        lignHeight: '24px',
        fontFamily: 'Bon Vivant',
        color: '#FBFBFB'
    },
    '.sub-description': {
        fontSize: '14px',
        lignHeight: '17px',
        fontWeight: '300',
        color: '#FBFBFB'
    },
    '.trending-icon': {
        width: '16px',
        height: '16px',
        paddingRight:'5px'
    },

    "@media (min-width: 1px) and (max-width:1024px)": {
        '.sub-description': {
            fontSize: '12px',
        },
        '.saff-parent': {
            padding: '14px 8px'
        },
    },
    "@media (min-width: 320px) and (max-width:1024px)": {
        '.main-chaf-image': {
            height: '220px',
            objectFit: 'cover',
            width: '100%'
        },
        '.saff-parent': {
            padding: '16px',
            width: 'auto',
            height: '88px',
            backgroundColor: '#101418',
        },
        '.sub-box': {
            width: '100%',
        },
        '.top-box': {
            fontWeight: 300,
            fontSize: '12px',
            padding: '1px 12px',
            textAlign: 'right',
            letterSpacing: '0.02em',
            color: '#C6A87D',
        }
    }

})

const AvlExperienceCarousel = (props) => {
    return (
        <React.Fragment>
            <MainContentBox>
                <img src={props.image} alt="saffImage" style={{verticalAlign: 'top'}} width={'100%'}
                     className='main-chaf-image'/>
                <Box className='saff-parent'>
                    <Box className='dining-privee'>
                        <Typography className='title'>
                            A Traditional Oma Kase
                        </Typography>
                        <Typography className='rating-star'>
                            <StarIcon sx={{color: '#C6A87D',}}/>  4.7
                        </Typography>
                    </Box>
                    <Typography className='description'>
                        by <b>Chef Mako Ravindran</b>
                    </Typography>
                    <Typography className='sub-description'>
                        Starting from ₹5000 per diner
                    </Typography>
                    {
                        props.isLabelShow &&
                        <Box className='sub-box'>
                            <Box className='top-box'>
                                <ElectricBoltIcon className="trending-icon"/>  Trending
                                {/*<img src={Trending} alt='RebookImg' className="trending-icon"/>*/}
                            </Box>
                        </Box>
                    }
                </Box>
            </MainContentBox>
        </React.Fragment>
    )
}

export default AvlExperienceCarousel;