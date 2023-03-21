import React from "react";
import { Typography,styled } from "@mui/material";
import img1 from '../assets/images/supper-1.png';
import img2 from '../assets/images/testImage2.png';
import cap from '../assets/images/chef-cap.png';
import date from '../assets/images/date.png';
import tag from '../assets/images/tag-chef.png';
import trending from '../assets/images/trending.png'
import { Box } from "@mui/system";
import '../assets/styles/fontStyle.css';
import { Link } from "gatsby";

const UpcomingSupperClubCard = () => {
    const cardDetails = [
        {
            potImg:img1,
            title:'The Big Fat Parsi Blowout',
            chef:cap,
            chefDetails:'Chef Anna Miocher',
            cal:date,
            calDetails:'April 9 | 7.30 PM - 10 PM',
            price:tag,
            priceDetails:'₹2500/per diner',
            tend:trending,
            trendDetails:'Trending'
        },
        {
            potImg:img2,
            title:'The Big Fat Parsi Blowout',
            chef:cap,
            chefDetails:'Chef Anna Miocher',
            cal:date,
            calDetails:'April 9 | 7.30 PM - 10 PM',
            price:tag,
            priceDetails:'₹2500/per diner',
            tend:trending,
            trendDetails:'Trending'
        },
        {
            potImg:img1,
            title:'The Big Fat Parsi Blowout',
            chef:cap,
            chefDetails:'Chef Anna Miocher',
            cal:date,
            calDetails:'April 9 | 7.30 PM - 10 PM',
            price:tag,
            priceDetails:'₹2500/per diner',
            tend:trending,
            trendDetails:'Trending'
        },
        {
            potImg:img2,
            title:'The Big Fat Parsi Blowout',
            chef:cap,
            chefDetails:'Chef Anna Miocher',
            cal:date,
            calDetails:'April 9 | 7.30 PM - 10 PM',
            price:tag,
            priceDetails:'₹2500/per diner',
            tend:trending,
            trendDetails:'Trending'
        }
    ]
    const MainBox = styled(Box)({
        display: 'grid',
        gridTemplate: 'repeat(1,1fr) / repeat(4,1fr)',
        gap: '24px',
        marginTop: '30px',
        '.test-img':{
            height:'284px',
            width:'100%',
            objectFit:'cover'
        },
        '.trending':{
            position: 'absolute',
            background: '#101418',
            display: 'flex',
            placeContent: 'flex-end',
            top: '0px',
            width:'100%',
        },
        '.trending-img':{
            objectFit: 'contain',
            marginRight: '4px',
            width:'12px',
            height:'16px',
            paddingTop:'5px'
        },
        '.trending-title':{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: '19px',
            textAlign: 'right',
            letterSpacing: '0.02em',
            color: '#C6A87D',
            padding:'5px 20px 5px 0px'
        },
        '.supper-info':{
            padding: '20px 16px 10px 16px',
            background: '#FFFFFF',
            boxShadow: '0px 16.3378px 20.4223px rgb(0 0 0 / 6%)',
            position: 'relative',
            bottom: '4px'
        },
        '.super-title': {
            fontFamily: 'Proxima Nova Alt Bold',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '24px',
            color: '#050405',
            marginBottom: '0px',
            letterSpacing:'0.01em'
        },
        '.super-chef-details': {
            paddingTop: '20px'
        },
        '.chef-tag': {
            display: 'flex',
            paddingBottom: '13px',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#222222'
        },
        '.img-tag': {
            width: '18px !important',
            height: '18px',
            objectFit: 'contain',
            marginRight: '20px'
        },
        '.tag-detail': {
            margin: '0',
            fontFamily: 'ProximaNovaA-Regular',
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: '19px',
            letterSpacing: '0.00938em',
        },
        '.link':{
            textDecoration:'none'
        }
    })
    return(
        <React.Fragment>
            <MainBox>
            {cardDetails.map((item,index)=>(
                <Box key={index}>
                    <Box sx={{position:'relative'}}>
                    <Link className="link" href='/supper-club-main-page'>
            <img className='test-img' src={item.potImg}/>
            {index === 0 &&  (
        <div>
          <Box  className='trending'><img className='trending-img' src={item.tend}/><Typography className='trending-title'>{item.trendDetails}</Typography></Box>
        </div>
      )}
      {index === cardDetails.length - 1 && (
        <div>
          <Box  className='trending'><img className='trending-img' src={item.tend}/><Typography className='trending-title'>{item.trendDetails}</Typography></Box>
        </div>
      )}
                        <Box className='supper-info' >
                            <Typography className='super-title'>{item.title}</Typography>
                            <Box className='super-chef-details'>
                                <span className='chef-tag'><img className='img-tag' src={item.chef}
                                                                alt="chef cap"/><Typography className='tag-detail'>{item.chefDetails}</Typography></span>
                                        <span className='chef-tag'><img className='img-tag' src={item.cal} alt="date"/><Typography
                                            className='tag-detail'>{item.calDetails}</Typography></span>
                                        <span className='chef-tag'><img className='img-tag' src={item.price} alt="Rates"/><Typography
                                            className='tag-detail'>{item.priceDetails}</Typography></span>
                                    </Box>
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                ))}
            </MainBox>
        </React.Fragment>
    )
}

export default UpcomingSupperClubCard;

