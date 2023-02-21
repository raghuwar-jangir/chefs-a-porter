import React , { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper";
// import "./styles.css";
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import Carousel from 'react-elastic-carousel'
import FoodDetail from './FoodDetail';
import testImage from './../assets/images/testImage.png';
import testImage2 from './../assets/images/testImage2.png';
import cap from '../assets/images/chef-cap.png';
import date from '../assets/images/date.png';
import tag from '../assets/images/tag-chef.png';


const MainParent = styled(Box)({
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
    '.parent-grid': {
        paddingTop: "30px"
    },
    '.supper-info':{
        padding: '8px 16px',
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
'@media(min-width: 2500px) and (max-width: 2700px)':{
    '.test-img':{
    height: '351px',
    width: '525.25px',
    objectFit:'cover'
    }
},
'@media(min-width: 2370px) and (max-width: 2500px)':{
    '.test-img':{
        height: '351px',
        width: '490.25px',
        objectFit:'cover'
        }
},
'@media(min-width: 2100px) and (max-width: 2370px)':{
    '.test-img':{
        height: '351px',
        width: '425.25px',
        objectFit:'cover'
        }
},
'@media(min-width: 1620px) and (max-width: 1850px)':{
    '.test-img':{
        height: '351px',
        width: '300.25px',
        objectFit:'cover'
        }
},
'@media(min-width: 1400px) and (max-width: 1620px)':{
    '.test-img':{
        height: '351px',
        width: '251.25px',
        objectFit:'cover'
        }
},
'@media(min-width: 1265px) and (max-width: 1400px)':{
    '.test-img':{
        height: '435px',
        width: '215.25px',
        objectFit:'cover'
        }
},
'@media(min-width: 1120px) and (max-width: 1265px)':{
    '.test-img':{
        height: '435px',
        width: '179.25px',
        objectFit:'cover'
        },
        '.supper-info':{
            padding:'16px 26px'
        }
},
'@media(min-width: 1024px) and (max-width: 1120px)':{
    '.test-img':{
        height: '435px',
        width: '156.25px',
        objectFit:'cover'
        },
        '.supper-info':{
            padding:'16px 16px'
        }
    },
    '@media(min-width: 877px) and (max-width: 1024px)':{
        '.test-img':{
            height: '435px',
            width: '200.25px',
            objectFit:'cover'
            },
            '.lguFiu':{
                width:'980px'
            }
        },
        '@media(min-width: 730px) and (max-width: 877px)':{
            '.test-img':{
                height: '435px',
                width: '202.25px',
                objectFit:'cover'
                },
                '.lguFiu':{
                    width:'820px'
                }
        },
        '@media(min-width: 550px) and (max-width: 730px)':{
            '.test-img':{
                height: '435px',
                width: '505.25px',
                objectFit:'cover'
                },
                '.lguFiu':{
                    width:'820px'
                }
        },
        '@media(min-width: 320px) and (max-width: 550px)':{
            '.test-img':{
                height: '435px',
                width: '310.25px',
                objectFit:'cover'
                },
                '.lguFiu':{
                    width:'600px'
                },
                '.css-1fu7jd5-MuiButtonBase-root-MuiButton-root:focus':{
                    color:'#C6A87D !important'
                },
                '.view-more':{
                    // position:'absolute',
                    // top: '1090px',
                    // left:'0%',
                    border:'0.5px solid black',
                    width: '100%',
            fontSize: '13px',
            fontWeight: '200',
            color:'white',
            fontFamily: 'ProximaNovaA-Regular',
            height:'65%',
            background:'none'
           
           
                },
                '.css-1fu7jd5-MuiButtonBase-root-MuiButton-root:hover':{
                    background:'none '
                }
        }
// '@media(min-width: 1024px)':{
//     '.test-img':{
//         height: '334px',
//         width: '186px',
//         objectFit:'cover'
//         },
//         '.lguFiu':{
//             width:'946px'
//         }
        // '.biYdFZ':{
        //     margin: '0px 87px'
        // }
        // '.super-title':{
        //     fontSize:'19px'
        // },
        // '.supper-info':{
        //     bottom:'6px'
        // },
        // '.rec-arrow-right':{
        //     right:'60px'
        // },
        // '.rec-arrow-left':{
        //     left:'60px'
        // },
        // '.parent-body':{
        //    marginLeft:'-14%'
        // }
// },
// '@media(max-width: 768px)':{
//     '.test-img':{
//         height: '351px',
//         width: '238.25px',
//         objectFit:'cover'
//         },
//         '.lguFiu':{
//             width:'850px'
//         }
// },
// '@media(max-width: 425px)':{
//     '.test-img':{
//         height: '351px',
//         width: '376.25px',
//         objectFit:'cover'
//         },
//         // '.lguFiu':{
//         //     width:'550px'
//         // }
// },
// '@media(max-width: 375px)':{
//     '.test-img':{
//         height: '351px',
//         width: '352.25px',
//         objectFit:'cover'
//         }
//     },
//     '@media(max-width: 320px)':{
//         '.test-img':{
//             height: '351px',
//             width: '300.25px',
//             objectFit:'cover'
//             }
//         }
// '@media(min-width: 768px) and (max-width: 1024px)':{
//     '.test-img':{
//         height: '280px',
//         width: '230px',
//         objectFit:'cover'
//         },
//         '.supper-info':{
//             bottom:'11px'
//         },
//         '.super-chef-details':{
//             paddingTop:'4px'
//         },
//         '.chef-tag':{
//             paddingBottom:"2px"
//         },
//         '.rec-arrow-right':{
//             right:'57px'
//         },
//         '.rec-arrow-left':{
//             left:'58px'
//         },
//         '.lguFiu':{
//             width:'165%'
//         }
// },
// '@media(min-width: 1px) and (max-width: 768px)':{
//     '.test-img':{
//         width: '393px',
//         objectFit:'cover'
//         },
//         '.biYdFZ':{
//             margin: '0px -54px'
//         }
// }
})

const FoodDetailing = (isButtonShow) =>{
    const breakPoints = [ 
        {width:1,itemsToShow:1,verticalMode:true,enableSwipe:false},
        {width:500,itemsToShow:3},
        {width:768,itemsToShow:4},
        {width:1100,itemsToShow:4}
      ]
        // this.breakPoints = [
        //     // {width:290 , itemsToShow:3}
        //     { width: 664, itemsToShow: 3 },
        //     { width: 425, itemsToShow: 3 },
        //     { width: 425, itemsToShow: 3, itemsToScroll: 1, pagination: false },
        //     {width:575, itemsToShow: 4},
        //     {width:1024, itemsToScroll:3},
        //     // { width: 768, itemsToShow: 3 },
        //     { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
        //     { width: 1450, itemsToShow: 4 },
        //     { width: 1750, itemsToShow: 4 },
        //   ]
   
   return (
        <React.Fragment>
            <MainParent>
            <Carousel breakPoints={breakPoints} itemsToShow={1} itemsToScroll={1} itemPadding={[21, 30]} pagination={false}>
            <Box><img className='test-img' src={testImage}/>
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
            <Box><img className='test-img' src={testImage2}/>
            <Box className='supper-info' >
            <Typography className='super-title'>The Big Fat Parsi Blowout</Typography> 
            <Box className='super-chef-details'>
            <span className='chef-tag'><img className='img-tag' src={cap} alt="chef cap"/><Typography className='tag-detail'>Chef Anna Miocher</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={date} alt="date"/><Typography className='tag-detail'>April 9 | 7.30 PM - 10 PM</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={tag} alt="Rates"/><Typography className='tag-detail'>₹2500/per diner</Typography></span>
            {/* <b>₹2500</b>/per diner */}
            </Box>
            </Box></Box>
            <Box><img className='test-img' src={testImage}/>
            <Box className='supper-info' >
            <Typography className='super-title'>The Big Fat Parsi Blowout</Typography> 
            <Box className='super-chef-details'>
            <span className='chef-tag'><img className='img-tag' src={cap} alt="chef cap"/><Typography className='tag-detail'>Chef Anna Miocher</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={date} alt="date"/><Typography className='tag-detail'>April 9 | 7.30 PM - 10 PM</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={tag} alt="Rates"/><Typography className='tag-detail'>₹2500/per diner</Typography></span>
            {/* <b>₹2500</b>/per diner */}
            </Box>
            </Box></Box>
            <Box><img className='test-img' src={testImage2}/>
            <Box className='supper-info' >
            <Typography className='super-title'>The Big Fat Parsi Blowout</Typography> 
            <Box className='super-chef-details'>
            <span className='chef-tag'><img className='img-tag' src={cap} alt="chef cap"/><Typography className='tag-detail'>Chef Anna Miocher</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={date} alt="date"/><Typography className='tag-detail'>April 9 | 7.30 PM - 10 PM</Typography></span>
            <span className='chef-tag'><img className='img-tag' src={tag} alt="Rates"/><Typography className='tag-detail'>₹2500/per diner</Typography></span>
            {/* <b>₹2500</b>/per diner */}
            </Box>
            </Box></Box>
            <Box><img className='test-img' src={testImage2}/>
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
{/* {isButtonShow &&
                        <Box className='parent-view-button'>
                            <Button
                                fullWidth
                                className='view-more'
                                variant="contained">
                                View More
                            </Button>
                        </Box> */}
{/* } */}
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

// const FoodDetailing = () => {
//     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//         <SwiperSlide><img src={testImage} /></SwiperSlide>
//         <SwiperSlide><img src={testImage2} /></SwiperSlide>
//         <SwiperSlide><img src={testImage} /></SwiperSlide>
//         <SwiperSlide><img src={testImage2} /></SwiperSlide>
//         <SwiperSlide><img src={testImage2} /></SwiperSlide>
//       </Swiper>
// }
// export default FoodDetailing;