import { Box, Stack, styled, Typography } from '@mui/material';
import React, { useRef, useState }  from 'react';
import { Link } from 'gatsby';
// import Carousel from 'react-bootstrap/Carousel';
import Slider from 'infinite-react-carousel';
import diningPicture from '../assets/images/cook1.png'
import DiningProgress from './DiningProgress';


const MainContentBox = styled(Box)({
    backgroundColor: '#101418',
    padding: '32px 0px',
    '.dining-title': {
        padding: '0px 120px',
        marginBottom: '20px',
        fontFamily: 'Bon Vivant',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '24px',
    lineHeight: '30px',
    letterSpacing: '0.06em',
    color:'#FBFBFB',
    },
    '.dining-content': {
        padding: '16px 18px',
    },
    '.img-box':{
        padding:'0px !important '
    },
    '.img':{
        width:'100%',
        height: '550px',
    objectFit: 'cover'
    }
})

const DiningPage = () => {
    return (
        <React.Fragment>
            <MainContentBox>
                <Typography className="dining-title">
                    What we cook for
                </Typography>
                <Slider dots={false} arrows={false}>
    <Box className='img-box'>
      <img className='img' src={diningPicture}/>
      </Box>
      <Box className='img-box'>
    <img className='img' src={diningPicture}/>
    </Box>
    <Box className='img-box'>
    <img className='img' src={diningPicture}/>
    </Box>
  </Slider>
                {/* <Stack className='dining-content' direction="row" spacing={2}>
                    <DiningProgress title='Conscious Dining' />
                    <DiningProgress title='Championing Chefs' />
                    <DiningProgress title='Community' />
                </Stack> */}
            </MainContentBox>
        </React.Fragment>
    )
}

export default DiningPage;