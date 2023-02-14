import React from 'react'
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import Carousel from 'react-elastic-carousel'
import FoodDetail from './FoodDetail';
import testImage from './../assets/images/testImage.png';
import testImage2 from './../assets/images/testImage2.png';
import cap from '../assets/images/chef-cap.png';
import date from '../assets/images/date.png';
import tag from '../assets/images/tag-chef.png';


const MainParent = styled(Box)({
    '.parent-grid': {
        paddingTop: "30px"
    },
    '.supper-info':{
        padding: '20px 16px',
    background: '#FFFFFF',
    boxShadow: '0px 16.3378px 20.4223px rgb(0 0 0 / 6%)',
    position: 'relative',
    bottom: '23px'
    },
    '.super-title':{
        fontFamily: 'Proxima Nova Alt Bold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#050405',
    marginBottom: '0px',
    },
    '.super-chef-details':{
        paddingTop: '20px'
    },
    '.chef-tag':{
        display: 'flex',
    paddingBottom: '13px',
    fontFamily: 'ProximaNovaA-Regular',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#222222'
    },
    '.img-tag':{
        width: '18px !important',
    height: '18px',
    objectFit: 'contain',
    marginRight: '20px'
    },
    '.tag-detail':{
        margin: '0',
    fontFamily: "Roboto , Helvetica , Arial , sans-serif",
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
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
    '..css-1akftu3 .kXteup:hover:enabled, .css-1akftu3 .kXteup:focus:enabled': {
        color: 'white'
    },
    // '.css-1dv2hf8 .kXteup:hover:enabled, .css-1dv2hf8 .kXteup:focus:enabled': {
    //     color: 'black'
    // }
//     '.Slxdj:disabled': {
//         position: 'relative',
//         left: '5%',
//         zIndex: '1',
//         fontSize: '16px',
//         background: 'none',
//         boxShadow: 'none'
//     },
//     '.rec.rec-arrow:disabled': {
//         visibility: 'hidden'
//     },
// //     '.Slxdj':{
// //         fontSize: '16px !important',
// //         background: 'none !important',
// //         position: 'absolute',
// //     left: '158px',
// //     zIndex: '1',
// //     boxShadow:'none'
// // },
// '.kXteup':{
//     fontSize: '16px !important',
//     background: 'none !important',
//     position: 'relative',
//     left: '5%',
//     boxShadow:'none',
//     color:'white',
//     zIndex:'1'
// },
// '.Slxdj':{
//     fontSize: '16px !important',
//     background: 'none !important',
//     position: 'relative',
//     left: '83px',
//     boxShadow:'none',
//     zIndex: '1'
// },
})

const FoodDetailing = () => {
    return (
        <React.Fragment>
            <MainParent>
            <Carousel itemsToShow={4} itemsToScroll={1} itemPadding={[10, 30]} pagination={false}>
            <Box><img src={testImage}/>
            <Box className='supper-info' >
            <Typography className='super-title'>The Big Fat Parsi Blowout</Typography> 
            <Box className='super-chef-details'>
            <span className='chef-tag'><img className='img-tag' src={cap} alt="chef cap"/><Typography className='tag-detail'>Chef Anna Miocher</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={date} alt="date"/><Typography className='tag-detail'>April 9 | 7.30 PM - 10 PM</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={tag} alt="Rates"/><Typography className='tag-detail'>₹2500/per diner</Typography></span>
            {/* <b>₹2500</b>/per diner */}
            </Box>
            </Box>
            </Box>
            <Box><img src={testImage2}/>
            <Box className='supper-info' >
            <Typography className='super-title'>The Big Fat Parsi Blowout</Typography> 
            <Box className='super-chef-details'>
            <span className='chef-tag'><img className='img-tag' src={cap} alt="chef cap"/><Typography className='tag-detail'>Chef Anna Miocher</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={date} alt="date"/><Typography className='tag-detail'>April 9 | 7.30 PM - 10 PM</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={tag} alt="Rates"/><Typography className='tag-detail'>₹2500/per diner</Typography></span>
            {/* <b>₹2500</b>/per diner */}
            </Box>
            </Box></Box>
            <Box><img src={testImage}/>
            <Box className='supper-info' >
            <Typography className='super-title'>The Big Fat Parsi Blowout</Typography> 
            <Box className='super-chef-details'>
            <span className='chef-tag'><img className='img-tag' src={cap} alt="chef cap"/><Typography className='tag-detail'>Chef Anna Miocher</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={date} alt="date"/><Typography className='tag-detail'>April 9 | 7.30 PM - 10 PM</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={tag} alt="Rates"/><Typography className='tag-detail'>₹2500/per diner</Typography></span>
            {/* <b>₹2500</b>/per diner */}
            </Box>
            </Box></Box>
            <Box><img src={testImage2}/>
            <Box className='supper-info' >
            <Typography className='super-title'>The Big Fat Parsi Blowout</Typography> 
            <Box className='super-chef-details'>
            <span className='chef-tag'><img className='img-tag' src={cap} alt="chef cap"/><Typography className='tag-detail'>Chef Anna Miocher</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={date} alt="date"/><Typography className='tag-detail'>April 9 | 7.30 PM - 10 PM</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={tag} alt="Rates"/><Typography className='tag-detail'>₹2500/per diner</Typography></span>
            {/* <b>₹2500</b>/per diner */}
            </Box>
            </Box></Box>
            <Box><img src={testImage2}/>
            <Box className='supper-info' >
            <Typography className='super-title'>The Big Fat Parsi Blowout</Typography> 
            <Box className='super-chef-details'>
            <span className='chef-tag'><img className='img-tag' src={cap} alt="chef cap"/><Typography className='tag-detail'>Chef Anna Miocher</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={date} alt="date"/><Typography className='tag-detail'>April 9 | 7.30 PM - 10 PM</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={tag} alt="Rates"/><Typography className='tag-detail'>₹2500/per diner</Typography></span>
            {/* <b>₹2500</b>/per diner */}
            </Box>
            </Box></Box>
</Carousel>
                {/* <Grid className='parent-grid' container spacing={2}>
                    <Grid item xs={12} md={3} xl={3}>
                        <FoodDetail image={testImage} />
                    </Grid>
                    <Grid item xs={12} md={3} xl={3}>
                        <FoodDetail image={testImage2} />
                    </Grid>
                    <Grid item xs={12} md={3} xl={3}>
                        <FoodDetail image={testImage} />
                    </Grid>
                    <Grid item xs={12} md={3} xl={3}>
                        <FoodDetail image={testImage2} />
                    </Grid>
                </Grid> */}
            </MainParent>
        </React.Fragment >
    )
}

export default FoodDetailing;