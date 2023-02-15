import React from 'react'
import { Box, Button, Grid, Hidden, styled, Typography } from '@mui/material';
// import Privee from './Privee';
import Carousel from 'react-elastic-carousel';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import chef from './../assets/images/chef1.png'
import chef2 from './../assets/images/chef2.png'
import chef3 from '../assets/images/chef3.png'
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
        fontFamily: 'Bon Vivant',
        fontWeight: 700,
        fontSize: '32px',
        lineHeight: '40px',
        letterSpacing: '0.06em',
        color: '#FBFBFB'
    },
    '.heading-details': {
        fontFamily:'Proxima Nova Alt',
        fontWeight: 300,
        fontSize: '20px',
        lineHeight: '24px',
        color: '#FBFBFB',
        padding: '16px 0px 30px 0px'
    },
    '.parent-view-button': {
        textAlign: 'center',
        marginTop: '20px',
        marginTop: '40px'
    },
    '.view-more': {
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '29px',
        width: '30%',
        color: '#FBFBFB',
        background: '#080B0E',
        border: '1px solid #DCD7CB',
        padding: '12px'
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
    // ".css-0":{
    //     width:'100% !important'
    // },
    // '.img-size':{
    //     width:'100%'
    // },
    '.Slxdj':{
            fontSize: '16px !important',
            background: 'none !important'
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
                color:'white'
    },
    '.rec-arrow-left':{
        position: 'relative',
        left: '5%',
        zIndex: '1',
        fontSize: '16px',
        background: 'none',
        boxShadow: 'none',
        color:'white'
    },
    '.kXteup:hover:enabled, .kXteup:focus:enabled':{
            color:'white',
            boxShadow:'none'
        },
        '.css-1akftu3 .kXteup:hover:enabled, .css-1akftu3 .kXteup:focus:enabled': {
            color: 'white'
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

const PriveeMain = ({ title, subTitle, isButtonShow = false }) => {
    
    // const responsive = {
    //     superLargeDesktop: {
    //       // the naming can be any, depends on you.
    //       breakpoint: { max: 4000, min: 3000 },
    //       items: 5
    //     },
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 3,
    //     //   slidesToSlide: 1
    //     //   partialVisibilityGutter: 100
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 2
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1
    //     }
    //   };
    return (
        <React.Fragment>
            <MainParent>
                <Box className='continue-browsing-box'>
                    <Typography className='main-heading'>
                    Continue Browsing
                    </Typography>
                    <Typography className='heading-details'>
                    Chef’s you’ve checked out previously
                     </Typography>
                    {/* <Carousel responsive={responsive}
                     partialVisible={true}
                    //  centerMode={true}
                    swipeable={false}
                    draggable={false}
                    // showDots={true}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    sliderClass="slider-class"
                    itemClass="test">         
       <div><img src={chef}/></div>
        <div><img src={chef2}/></div>
        <div><img src={chef}/></div>
        <div><img src={chef2}/></div> 
    </Carousel>    */}
<Carousel itemsToShow={3} itemsToScroll={1} itemPadding={[10, 30]} preventDefaultTouchmoveEvent pagination={false}>
<Box><img className="img-size" src={chef}/>
<Box className="name-box" ><Typography className='chef-title'>Madhav Dayal</Typography>
<Box className="chef-details">
<span>Thai <span className='line'>|</span></span>
<span>Japanese <span className='line'>|</span></span>
<span>Parsi</span>
</Box>
</Box>
</Box>
<Box ><img className="img-size" src={chef2}/>
<Box className="name-box"><Typography className='chef-title'>Kyoumars Freeman</Typography>
<Box className="chef-details"><span>Persian</span></Box>
</Box>
</Box>
<Box><img className="img-size" src={chef}/>
<Box className="name-box"><Typography className='chef-title'>Mako Ravindran</Typography>
<Box className="chef-details">
<span>French <span className='line'>|</span></span>
<span>Italian <span className='line'>|</span></span>
<span>Indian </span></Box>
</Box></Box>
<Box><img className="img-size" src={chef2}/>
<Box className="name-box"><Typography className='chef-title'>Mako Kyoumars Freeman</Typography>
<Box className="chef-details"><span>Persian</span></Box>
</Box></Box>
</Carousel>      
                    {/* <Grid container spacing={2}>
                        <Grid item xl={3} md={3} sm={6} xs={6}>
                            <Privee image={chef} />
                        </Grid>
                        <Grid item xl={3} md={3} sm={6} xs={6}>
                            <Privee image={chef2} />
                        </Grid>
                        <Grid item xl={3} md={3} sm={6} xs={6}>
                            <Privee image={chef} />
                        </Grid>
                        <Grid item xl={3} md={3} sm={6} xs={6}>
                            <Privee image={chef2} />
                        </Grid>
                    </Grid> */}
                    {isButtonShow &&
                        <Box className='parent-view-button'>
                            <Button
                                fullWidth
                                className='view-more'
                                variant="contained">
                                View More Chefs
                            </Button>
                        </Box>
                    }
                </Box>
            </MainParent >
        </React.Fragment >
    )
}

export default PriveeMain;