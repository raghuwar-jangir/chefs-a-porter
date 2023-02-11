import React from 'react'
import { Box, Button, Grid, Hidden, styled, Typography } from '@mui/material';
// import Privee from './Privee';
import Carousel from 'react-elastic-carousel';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import chef from './../assets/images/chef1.png'
import chef2 from './../assets/images/chef2.png'
import chef3 from '../assets/images/chef3.png'
import chef4 from '../assets/images/chef4.png'
import zIndex from '@mui/material/styles/zIndex';


const MainParent = styled(Box)({
    // '.slider-class':{
    //     margin:'30px'
    // },
    // '.carousel-container':{
    //     // display: 'block',
    //     // width: '100%',
    // // zIndex: '1',
    // // position: 'relative',
    // marginTop: '20px',
    // // boxSizing:'border-box',
    // width: '1255px'
    // },
    // '.test':{
    //     width: '293.667px',
    // marginRight: '20px',
    // // position: 'relative',
    // // display: 'block',
    // width: '100%',
    // height: '426px',
    // Object: 'top'
    // },
    // // '.test': {
    // //     paddingLeft:'2%'
    // // },
    '.continue-browsing-box': {
        background: '#080B0E',
        padding: '80px 120px',
        color: '#fff'
       
    },
    '.main-heading': {
      fontSize: '24px',
      lineHeight: '24px',
      marginBottom: '16px',
      fontFamily: 'Bon Vivant',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '30px',
    letterSpacing: '0.06em',
    color: '#FBFBFB',
    marginBottom: '0px!important',
    },
    // '.heading-details': {
    //     fontFamily:'Proxima Nova Alt',
    //     fontWeight: 300,
    //     fontSize: '20px',
    //     lineHeight: '24px',
    //     color: '#FBFBFB',
    //     padding: '16px 0px 30px 0px'
    // },
    '.parent-view-button': {
      width: '16.66666667%',
        textAlign: 'end',
        marginTop: '20px',
        marginTop: 'none',
        display: 'contents'
    },
    '.view-more': {
      fontFamily: 'ProximaNovaA-Regular',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '19px',
      textAlign: 'right',
      color: '#C6A87D',
      width: '100%',
      padding: '0px',
      border: '0px',
      marginTop: '0px',
      background:'none',
      right: '76px'
    },
    '.btn-view':{
      display:"flex", 
      justifyContent:'space-between', 
      marginBottom:"30px"
    },
    '.css-1fu7jd5-MuiButtonBase-root-MuiButton-root:hover':{
      background:'none'
    },
    ".name-box":{
        padding: '16px 20px',
        background: '#101418'
    },
    '.chef-title':{
        display: 'flex',
        placeContent: 'center',
        fontSize: '20px',
    lineHeight: '25px',
    marginBottom: '6px',
    fontFamily:'Bon Vivant ',
  
    },
    '.chef-details':{
        textAlign: 'center',
    fontSize: '16px',
    lineHeight: '19px',
    // fontFamily: 'Proxima Nova Alt !important',
    fontFamily:'Proxima Nova Alt',
    fontStyle: 'normal',
    fontWeight: '250',
    // fontSize: '12px',
    // lineHeight: '15px',
    letterSpacing: '0.02em',
    color: 'rgba(198, 168, 125, 0.8)',
    position: 'relative',
    paddingTop: '6px',
    // content: "|",
    // position: 'relative',
    // width: '1px',
    // height: '100%',
    // margin: '0 5px'
    },
    '.line':{
        // content: "|",
    position: 'relative',
    width: '1px',
    height: '100%',
    margin: '0 5px'
    },
    '.Slxdj':{
            fontSize: '16px !important',
            background: 'none !important'
    },
    '.kXteup':{
        fontSize: '16px !important',
        background: 'none !important'
    },
    '.jtKTCe':{
        display:'none'
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

const PriveeMain = ({ title, subTitle, isButtonShow = true }) => {
    return (
        <React.Fragment>
            <MainParent>
                <Box className='continue-browsing-box'>
                  <Box className="btn-view">
            <Box>
            <Typography className='main-heading'>
                    Chefs available for private dining this month
                    </Typography>
            </Box>
            <Box>
            {isButtonShow &&
                        <Box className='parent-view-button'>
                            <Button
                                fullWidth
                                className='view-more'
                                variant="contained">
                                View All
                            </Button>
                        </Box>
                    }
            </Box>
                  </Box>
                    
                    {/* <Typography className='heading-details'>
                    Chef’s you’ve checked out previously
                     </Typography> */}
                  
<Carousel itemsToShow={4} itemsToScroll={1} itemPadding={[10, 30]}>
<Box><img src={chef}/>
<Box className="name-box" ><Typography className='chef-title'>Madhav Dayal</Typography>
<Box className="chef-details">
<span>Thai <span className='line'>|</span></span>
<span>Japanese <span className='line'>|</span></span>
<span>Parsi</span>
</Box>
</Box>
</Box>
<Box><img src={chef2}/>
<Box className="name-box"><Typography className='chef-title'>Kyoumars Freeman</Typography>
<Box className="chef-details"><span>Persian</span></Box>
</Box>
</Box>
<Box><img src={chef3}/>
<Box className="name-box"><Typography className='chef-title'>Mako Ravindran</Typography>
<Box className="chef-details">
<span>French <span className='line'>|</span></span>
<span>Italian <span className='line'>|</span></span>
<span>Indian </span></Box>
</Box></Box>
<Box><img src={chef4}/>
<Box className="name-box"><Typography className='chef-title'>Mako Kyoumars Freeman</Typography>
<Box className="chef-details"><span>Persian</span></Box>
</Box></Box>
<Box><img src={chef2}/>
<Box className="name-box"><Typography className='chef-title'>Kyoumars Freeman</Typography>
<Box className="chef-details"><span>Persian</span></Box>
</Box>
</Box>
</Carousel>  
                </Box>
            </MainParent >
        </React.Fragment >
    )
}

export default PriveeMain;