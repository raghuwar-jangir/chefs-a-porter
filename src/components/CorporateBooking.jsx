import React from "react";
import {Box, styled} from '@mui/system';
import InfiniteCarousel from 'react-leaf-carousel';
import { Button, Typography } from "@mui/material";
import cop1 from '../assets/images/cop1.png';


const CorporateBooking = () => {
    const BoxWrapper = styled(Box)(()=> ({
        '.main-box':{
            // display: 'block',
        background: '#F3F3F3',
        padding: '40px 0px'
        },
        '.title':{
            textAlign: 'center',
            fontSize: '24px',
            lineHeight: '30px',
            fontFamily: 'Bon Vivant',
    fontStyle: 'normal',
    // fontWeight: '700',
    color: '#080B0E',
    marginBottom: '0.5rem'
        },
        '.carousel-box':{
            display: 'flex',
            background: '#FFFFFF',
            boxShadow: '0px 20px 24px rgb(0 0 0 / 6%)',
            padding: '20px',
            margin: '30px auto 0px',
            width: '598px'
        },
        '.person-parts':{
            display:'flex'
        },
        '.person-details': {
            paddingLeft: '0px',
    paddingTop: '30px',
    width:'64%'
        },
        '.main-details':{
            fontSize: '16px',
    marginBottom: '16px',
    fontFamily: 'ProximaNovaA-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px',
    color: '#080B0E'
        },
        '.person-position':{
            fontSize: '16px',
            lineHeight: '20px',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '300',
            marginBottom: '4px'
        },
        '.person-name':{
            fontFamily: 'ProximaNovaA-Regular',
            fontSize: '16px',
            lineHeight: '24px',
            fontStyle: 'normal',
            fontWeight: '400',
            textTransform: 'uppercase',
            marginBottom: '8px'
        },
        '.btn':{
            fontSize: '16px',
            lineHeight: '19px',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
            marginTop: '16px',
            width: '162px',
    display: 'block',
    border: '0.694469px solid #080B0E',
    padding: '12px',
    textAlign: 'center',
    borderRadius : '1px',
    color:'black',
    background: 'none',
    // textTransform:'lowercase'
        },
        '.img':{
            width: '100% !important',
            height: '261px',
            marginLeft: '15px'
        },
        '.InfiniteCarouselDotActiveIcon ':{
            backgroundColor:'black'
        },
        '.InfiniteCarouselDots':{
            top:'100%'
        }
    //     '.InfiniteCarouselSlide img':{
    //         width: '100% !important',
    // height: '261px',
    // marginLeft: '40px'
    //     }
    }))
    return(
        <React.Fragment>
            <BoxWrapper>
        <Box className='main-box'>
            <Box>
            <Typography className="title">Corporate bookings</Typography>
            </Box>
            <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    arrows={false}
    // swipe={true}
    enableMouseSwipe={true}
    dots={true}
    showSides={true}
    sidesOpacity={0.5}
    sideSize={0.1}
    slidesToScroll={1}
    slidesToShow={1}
    scrollOnDevice={true}
  >
    
    
    <Box className='carousel-box'>
        <Box className='person-parts'>
            <Box className='person-details' >
                <Typography className="main-details">I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!</Typography>
                <Typography className="person-position">CEO, Accenture</Typography>
                <Typography className="person-name">Pratyush Shah</Typography>
                <Button className="btn">Know More</Button>
            </Box>
            <Box>
 <img className="img"
        src={cop1}
      />
            </Box>
        </Box>
        </Box>
        <Box className='carousel-box'>
        <Box className='person-parts'>
            <Box className='person-details' >
                <Typography className="main-details">I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!</Typography>
                <Typography className="person-position">CEO, Accenture</Typography>
                <Typography className="person-name">Pratyush Shah</Typography>
                <Button className="btn">Know More</Button>
            </Box>
            <Box>
 <img className="img"
        src={cop1}
      />
            </Box>
        </Box>
        </Box>
        <Box className='carousel-box'>
        <Box className='person-parts'>
            <Box className='person-details' >
                <Typography className="main-details">I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!</Typography>
                <Typography className="person-position">CEO, Accenture</Typography>
                <Typography className="person-name">Pratyush Shah</Typography>
                <Button className="btn">Know More</Button>
            </Box>
            <Box>
 <img className="img"
        src={cop1}
      />
            </Box>
        </Box>
        </Box>
        <Box className='carousel-box'>
        <Box className='person-parts'>
            <Box className='person-details' >
                <Typography className="main-details">I had chef Mako over to host a few business partners. The dinner experience was absolutely amazing and he makes amazing Sushi!</Typography>
                <Typography className="person-position">CEO, Accenture</Typography>
                <Typography className="person-name">Pratyush Shah</Typography>
                <Button className="btn">Know More</Button>
            </Box>
            <Box>
 <img className="img"
        src={cop1}
      />
            </Box>
        </Box>
        </Box>
  </InfiniteCarousel>
            </Box>
            </BoxWrapper>
            </React.Fragment>
    )
}
export default CorporateBooking;