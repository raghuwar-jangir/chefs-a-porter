import React from 'react'
import { Box, Button, Grid, Hidden, styled, Typography } from '@mui/material';
// import Privee from './Privee';
import Carousel from 'react-elastic-carousel';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import chef from './../assets/images/chef1.png'
import chef2 from './../assets/images/chef2.png'
import chef3 from '../assets/images/chef3.png'
import chef4 from '../assets/images/chef4.png';
import reebok from '../assets/images/rebook.png'
import zIndex from '@mui/material/styles/zIndex';
import { isMobile } from 'react-device-detect';
import {Link} from "gatsby";


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
        // marginTop: '20px',
        marginTop: 'none',
        display: 'contents'
    },
    '.view-more': {
      fontFamily: 'ProximaNovaA-Regular',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '14px',
      lineHeight: '19px',
      textAlign: 'right',
      color: '#C6A87D',
      width: '100%',
      padding: '0px',
      border: '0px',
      marginTop: '10px',
      background:'none',
      right: '76px'
    },
    '.btn-view':{
      display:"flex",
      justifyContent:'space-between',
      marginBottom:"30px",
      position:'relative'
    },
    '.css-1fu7jd5-MuiButtonBase-root-MuiButton-root:hover':{
      background:'none'
    },
    ".name-box":{
        padding: '16px 20px',
        background: '#101418',
     position: 'relative',
    bottom: '12%'
    },
    '.lguFiu':{
        height:'466.641px !important'
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
            background: 'none !important',
    },
    '.kXteup':{
        fontSize: '16px !important',
        background: 'none !important'
    },
    '.rec.rec-arrow:disabled': {
    visibility: 'hidden'
},
'.rec-arrow-right':{
    position: 'relative',
            right: '5%',
            zIndex: '1',
            fontSize: '16px',
            background: 'none',
            boxShadow: 'none',
            color:"white"
},
'.rec-arrow-left':{
    position: 'relative',
    left: '5%',
    zIndex: '1',
    fontSize: '16px',
    background: 'none',
    boxShadow: 'none',
    color:"white"
},
'.kXteup:hover:enabled, .kXteup:focus:enabled':{
        color:'white',
        boxShadow:'none'
    },
    '..css-1akftu3 .kXteup:hover:enabled, .css-1akftu3 .kXteup:focus:enabled': {
        color: 'white'
    },
    // '.rebook':{
    //     position: 'absolute',
    //     background: '#101418',
    //     display: 'flex',
    //     placeContent: 'flex-end',
    //     top: '11px',
    //     width:'22%',
    //     padding:'5px 24px'
    // },
    '.rebook-title':{
        fontFamily: 'Proxima Nova Alt',
        fontStyle: 'normal',
fontWeight: '150',
fontSize: '16px',
lineHeight: '19px',
textAlign: 'right',
letterSpacing: '0.02em',
color: '#C6A87D',
    },
    '.rebook-img':{
        objectFit: 'contain',
        marginRight: '4px',
        width:'12px',
        height:'16px'
    },
    '.rebook':{
        position: 'absolute',
        background: '#101418',
        display: 'flex',
        placeContent: 'flex-end',
        top: '10px',
        width:'16%',
        padding:'5px 24px'
    },
    '.link':{
        textDecoration: 'none',
        color: '#C6A87D',
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
    },
    '@media(min-width: 2000px) and (max-width: 2560px)': {
        '.img': {
            height: '629px',
            width: '521px',
            objectFit: 'cover'
        },
        '.name-box': {
            bottom: '36%'
        },
        "@media (min-width: 320px) and (max-width:1024px)": {
            '.main-chaf-image': {
                height: '220px',
                objectPosition: 'top',
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
    }
    })

    const handleClick = () =>{
        navigate('/chef-details');
    }

const PriveeMain = ({ title, subTitle, isButtonShow = true,}) => {
    const breakPoints = [
        {width:1,itemsToShow:2,showArrows:false,verticalMode:true,enableSwipe:false},
        {width:500,itemsToShow:3},
        {width:768,itemsToShow:4},
        {width:1100,itemsToShow:4}
      ]
    return (
        <React.Fragment>
            {/* <div style={{ border: '2px solid green' }}> */}
            <MainContentBox onClick={handleClick}>
                <img src={props.image} alt="saffImage" style={{ verticalAlign: 'top' }} width={'100%'} className='main-chaf-image' />
                <Box className='saff-parent'>
                    <Typography className='saff-title'>
                        Madhav Dayal
                    </Typography>
                    <Stack className='sub-stack' direction="row"
                        divider={<Divider orientation="vertical" flexItem color="#C6A87D" />}
                        spacing={0}>
                        <Typography className="sub-description"> Thai </Typography>
                        <Typography className='sub-description'> Japanese </Typography>
                        <Typography className='sub-description'> Parsi </Typography>
                    </Stack>
                    {
                        props.isLabelShow &&
                        <Box className='sub-box'>
                            <Box className='top-box'>
                                <img src={Rebook} alt='RebookImg' width={"12px"} height={"16px"} /> Rebook
                            </Box>
                        </Box>
                    }
                </Box>
            </MainContentBox>
            {/* </div> */}
        </React.Fragment >
    )
}

export default PriveeMain;
