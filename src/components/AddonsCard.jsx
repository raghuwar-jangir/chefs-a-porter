import React from 'react';
import {Box, Typography} from '@mui/material';
import {styled} from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import '../assets/styles/searchBar.css'
import "../assets/styles/fontStyle.css"

const MainContentBox = styled(Box)({
    position: 'relative',
    '.addons-parent': {
        padding: '12px 8px',
        width: 'auto',
        height: 'auto',
        backgroundColor: '#101418',
    },
    '.addons-img': {
        height: '240px',
        objectFit: 'cover',
        width: '100%',
        position: 'relative'
    },
    '.sub-box': {
        position: 'absolute',
        backgroundColor: '#101418',
        width: '100%',
        top: '0px', left: '0px'
    },
    '.top-box': {
        fontFamily: 'Proxima Nova',
        fontWeight: '300',
        fontSize: '12px',
        lineHeight: '15px',
        padding: '1px 12px',
        textAlign: 'right',
        letterSpacing: '0.02em',
        color: '#C6A87D',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center'
    },
    '.title': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        // fontWeight: 700,
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '0.06em',
        color: '#FBFBFB',
    },
    '.trending-icon': {
        width: '16px',
        height: '16px',
        paddingRight: '5px'
    },
    "@media (min-width: 1px) and (max-width:425px)": {
        '.addons-parent': {
            padding: '6px',
            width: 'auto',
            height: 'auto',
            backgroundColor: '#101418',
        },
        '.title': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: 700,
            fontSize: '12px',
            lineHeight: '20px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
        },
        '.sub-box': {
            width: '100%',
        },
        '.top-box': {
            fontFamily: 'Proxima Nova',
            fontWeight: '300',
            fontSize: '12px',
            lineHeight: '15px',
            padding: '1px 12px',
            textAlign: 'right',
            letterSpacing: '0.02em',
            color: '#C6A87D',
        },
        '.addons-img': {
            height: 'auto',
        },
    }

})

const AddonsCard = (props) => {
    return (
        <React.Fragment>
            <MainContentBox>
                <img src={props.image} alt="saffImage" style={{verticalAlign: 'top'}} width={'100%'}
                     className='addons-img'/>
                <Box className='addons-parent'>
                    <Typography className='title'>
                        {props.title}
                    </Typography>
                    {
                        props.isLabelShow &&
                        <Box className='sub-box'>
                            <Box className='top-box'>
                                <ElectricBoltIcon className="trending-icon"/> Trending
                            </Box>
                        </Box>
                    }
                </Box>
            </MainContentBox>
        </React.Fragment>
    )
}

export default AddonsCard;