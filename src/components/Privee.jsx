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
        '.img':{
            height:'629px',
            width:'521px',
            objectFit:'cover'
        },
        '.name-box':{
            bottom:'36%'
        },
        '.rebook':{
            width:'18%',
            padding:'5px 18px'
        }
    },
    '@media(min-width: 1028px)and (max-width: 1440px)': {
        '.img':{
            height:'376px',
            width:'286px',
            objectFit:'cover'
        },
        '.name-box':{
            bottom:'1%'
        },
        '.rebook':{
            width:'16%',
            padding:'5px 23px'
        },
        ".biYdFZ":{
            margin:'0px -52px'
        }
        // '.fAVBsF':{
        //    width:'267px !important'
        // }
    },
    '@media(min-width: 770px)and (max-width: 1024px)': {
        '.img':{
            height:'370px',
            width: '181px',
            objectFit:'cover'
        },
        '.name-box':{
            bottom:'2%'
        },
        ".biYdFZ":{
            margin:'0px -52px'
        },
        '.rebook':{
            width:'13%',
            padding:'5px 27px'
        },
        '.chef-title':{
            fontSize: '17px',
    lineHeight: '25px',
    marginBottom: '6px'
        },
        '.chef-details':{
            textAlign: 'center',
    fontSize: '15px',
    lineHeight: '19px'
        },
        '.view-more':{
            fontSize:'12px'
        },
        '.main-heading':{
            fontSize:'19px'
        }
    },
    '@media(min-width: 430px)and (max-width: 768px)': {
        '.img':{
            height:'396px',
            width: '178px',
            objectFit:'cover'
        },
        '.continue-browsing-box':{
            padding:'80px 45px'
        },
        '.rebook':{
            width:'14%',
            padding:'5px 25px'
        },
        '.chef-title':{
    placeContent:'start',
    fontSize: '17px',
        },
    },
    '@media(min-width: 380px)and (max-width: 425px)': {
        '.img':{
            height:'400px',
            width: '344px',
            objectFit:'cover',
            display:'block'
        },
        '.rebook':{
            width:'79%',
            top:'515px'
        },
        '.view-more':{
            position:'absolute',
            top: '1090px',
            left:'0%',
            border:'0.5px solid #C6A87D',
            width: '100%',
    fontSize: '13px',
    fontWeight: '200',
    color:'white',
    fontFamily: 'ProximaNovaA-Regular',
    height:'65%'
        },
        '.lguFiu':{
            height:'1018.641px !important'
        },
        '.name-box':{
            bottom:'0%'
        },
        '.css-1fu7jd5-MuiButtonBase-root-MuiButton-root:focus':{
            color:'#C6A87D !important'
        },
        // '.view-more':{
        //     visibility: 'hidden',
        //     position: 'relative'
        // },
        // '.view-more:after': {
        //     visibility: 'visible',
        //     position: 'absolute',
        //     // top: '0',
        //     // left: '0',
        //     text: "View More Chefs"
        // }
        
    },
    '@media(min-width: 325px)and (max-width: 375px)': {
        '.img':{
            height:'396px',
            width: '344px',
            objectFit:'cover',
            display:'block'
        },
        '.rebook':{
            width:'88%',
            top:'515px'
        },
        '.view-more':{
            position:'absolute',
            top: '1090px',
            left:'0%',
            border:'0.5px solid #C6A87D',
            width: '100%',
    fontSize: '13px',
    fontWeight: '200',
    color:'white',
    fontFamily: 'ProximaNovaA-Regular',
    height:'65%'
        },
        '.lguFiu':{
            height:'1018.641px !important'
        },
        '.name-box':{
            bottom:'0%'
        },
        '.css-1fu7jd5-MuiButtonBase-root-MuiButton-root:focus':{
            color:'#C6A87D !important'
        },
    },
    '@media(min-width: 1px)and (max-width: 320px)': {
        '.img':{
            height:'396px',
            width: '344px',
            objectFit:'cover',
            display:'block'
        },
        '.rebook':{
            width:'97%',
            top:'515px'
        },
        '.view-more':{
            position:'absolute',
            top: '1090px',
            left:'0%',
            border:'0.5px solid #C6A87D',
            width: '100%',
    fontSize: '13px',
    fontWeight: '200',
    color:'white',
    fontFamily: 'ProximaNovaA-Regular',
    height:'65%'
        },
        '.lguFiu':{
            height:'1018.641px !important'
        },
        '.name-box':{
            bottom:'0%'
        },
        '.css-1fu7jd5-MuiButtonBase-root-MuiButton-root:focus':{
            color:'#C6A87D !important'
        },
    },

}
)

const PriveeMain = ({ title, subTitle, isButtonShow = true,}) => {
    const breakPoints = [ 
        {width:1,itemsToShow:2,showArrows:false,verticalMode:true,enableSwipe:false},
        {width:500,itemsToShow:3},
        {width:768,itemsToShow:4},
        {width:1100,itemsToShow:4}
      ]
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
            {isMobile ?
                        (<Box className='more-button'>
                            <Button
                                fullWidth
                                className='view-more'
                                variant="contained">
                                View More Chefs
                            </Button>
                        </Box>)
             :       
        
           ( <Box className='more-button'>
                            <Button
                                fullWidth
                                className='view-more'
                                variant="contained">
                                 <Link className='link'
                                      to='/our-chefs'>
                                    View All
                                </Link>
                            </Button>
                        </Box>)
}
                  </Box>
                  </Box>
                    {/* <Typography className='heading-details'>
                    Chef’s you’ve checked out previously
                     </Typography> */}
                  
<Carousel  itemsToScroll={1} breakPoints={breakPoints} itemPadding={[10, 30]} pagination={false} enableMouseSwipe={true} preventDefaultTouchmoveEvent={true} enableSwipe={true}>
<Box><img className='img' src={chef}/>
<Box className="name-box" ><Typography className='chef-title'>Madhav Dayal</Typography>
<Box className="chef-details">
<span>Thai <span className='line'>|</span></span>
<span>Japanese <span className='line'>|</span></span>
<span>Parsi</span>
</Box>
</Box>
</Box>
<Box><img className='img' src={chef2}/>
<Box  className='rebook'><img className='rebook-img' src={reebok}/><Typography className='rebook-title'>Rebook</Typography></Box>
<Box className="name-box"><Typography className='chef-title'>Anup Kakati</Typography>
<Box className="chef-details"><span>Persian</span></Box>
</Box>
</Box>
<Box><img className='img' src={chef3}/>
<Box className="name-box"><Typography className='chef-title'>Kyoumars Freeman</Typography>
<Box className="chef-details">
<span>French <span className='line'>|</span></span>
<span>Italian <span className='line'>|</span></span>
<span>Indian </span></Box>
</Box></Box>
<Box><img className='img' src={chef4}/>
<Box  className='rebook'><img className='rebook-img' src={reebok}/><Typography className='rebook-title'>Rebook</Typography></Box>
<Box className="name-box"><Typography className='chef-title'>Mako Ravindran</Typography>
<Box className="chef-details"><span>Persian</span></Box>
</Box></Box>
<Box><img className='img' src={chef2}/>
<Box  className='rebook'><img className='rebook-img' src={reebok}/><Typography className='rebook-title'>Rebook</Typography></Box>
<Box className="name-box"><Typography className='chef-title'>Anup Kakati</Typography>
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