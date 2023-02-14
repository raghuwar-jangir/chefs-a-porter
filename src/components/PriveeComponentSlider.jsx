import React from "react";
import { Box } from "@mui/system";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Carousel, { consts }  from 'react-elastic-carousel';
import image1 from '../assets/images/ig1.png';
import image2 from '../assets/images/ig2.png';
import image3 from '../assets/images/ig3.png';
import image4 from '../assets/images/ig4.png';
import image5 from '../assets/images/ig5.png';

const  PriveeComponentSlider = () => {
const WrapBox = styled(Box) ({
    '.main-box':{
        background: '#101418',
    padding: '80px 0px',
    textAlign: 'center'
    },
    '.peek-heading':{
        fontFamily: 'Proxima Nova Alt',
    fontStyle: 'normal',
    fontWeight:'125',
    fontSize: '24px',
    lineHeight: '29px',
    textAlign: 'center',
    color: '#FBFBFB',
    marginBottom: '0.5rem'
    },
    '.peek-name':{
        fontFamily: 'Proxima Nova Alt',
        fontStyle: 'normal',
        fontWeight:'200',
        fontSize: '36px',
        lineHeight: '44px',
        textAlign: 'center',
        color: '#C6A87D',
        marginBottom:'0.5rem'
    },
    '.slider-box':{
        marginTop:'30px'
    },
    '.img-box':{
        width: '306.833px',
    marginRight: '8px',
    padding:'0px 0px !important'
    },
    '.img':{
        width: '100%',
    height: '230.54px',
    objectFit: 'cover'
    },
    '.biYdFZ':{
        left:'31% important'
    }
})
    return(
        <WrapBox>                                           
            <Box className='main-box'>
            <Box>
                <Typography className="peek-heading">Peek into our Private Dining Experiences</Typography>
                <Typography className="peek-name" >@Privée</Typography>
            </Box>
            <Box className='slider-box'>
            <Carousel itemsToShow={3} outerSpacing={500} enableMouseSwipe={true} preventDefaultTouchmoveEvent={false} pagination={false} showArrows={false} showEmptySlots>

  <Box className='img-box'><img className="img" src={image1}/></Box>
  <Box className='img-box'><img className="img" src={image2}/></Box>
  <Box className='img-box'><img className="img" src={image3}/></Box>
  <Box className='img-box'><img className="img" src={image4}/></Box>
  <Box className='img-box'><img className="img" src={image5}/></Box>
  <Box className='img-box'><img className="img" src={image2}/></Box>
  <Box className='img-box'><img className="img" src={image4}/></Box>
  <Box className='img-box'><img className="img" src={image5}/></Box>
  <Box className='img-box'><img className="img" src={image2}/></Box>
</Carousel>
            </Box>
            </Box>
        </WrapBox>
    )
}
export default PriveeComponentSlider;