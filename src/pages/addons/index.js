import React from "react";
import {Box, Grid, ImageListItem, styled, Typography,} from "@mui/material";
import Navbar from "../../components/NavbarComponent";
import add1 from "../../assets/images/add1.png";
import add2 from "../../assets/images/add2.png";
import add3 from "../../assets/images/add3.png";
import add4 from "../../assets/images/add4.png";
import add5 from "../../assets/images/add5.png";
import add6 from "../../assets/images/add6.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddonsCard from "../../components/AddonsCard";
import sGallery from "../../assets/images/sc-gallery.png";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Addons = () => {
    const addonsCardDetail = [
        {
            image: add1,
            title: 'Table',
        },
        {
            image: add2,
            title: 'Flowers',
        },
        {
            image: add3,
            title: 'Cake',
        },
        {
            image: add4,
            title: 'Artisanal Cheese',
        },
        {
            image: add5,
            title: 'Gluten free bread',
        },
        {
            image: add6,
            title: 'Sauces',
        },

    ];

    const BoxWrapper = styled(Box)(() => ({
        background: '#101418',

        '.supper-gallery': {
            marginTop: '40px',
        },
        '.supper-gallery .container-fluid': {
            padding: '80px 120px'
        },
        '.book-trad': {
            display: 'flex',
            placeItems: 'center',
            marginBottom: '40px',
            paddingLeft: '0px !important',
        },
        '.addons-title': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '32px',
            lineHeight: '39px',
            color: '#FBFBFB',
            marginBottom: '0px',
            marginLeft: '16px',
        },
        '.arrow-left': {
            color: '#FBFBFB',
            // fontSize: '20px',
        },
        '.partner': {
            border: '0px',
            background: '#DCD7CB',
            padding: '40px 20px',
        },
        '.addons-heading': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontSize: '18px',
            lineHeight: '20px',
            marginBottom: '16px',
        },
        '.cust-details': {
            padding: '0px 15px'
        },
        '.per-dinner': {
            background: '#101418',
            padding: '40px 20px',
            boxShadow: '0px 20px 24px rgb(0 0 0 / 6%)',
        },
        '.event-div': {
            display: 'flex'
        },
        '.per-dinner-img': {
            width: '116px',
            height: '116px',
            objectFit: 'cover',
        },
        '.rating-star': {
            fontStyle: 'Proxima Nova',
            display: 'flex',
            alignItems: 'center',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB'
        },
        '.event-title': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: '700',
            fontSize: '20px',
            lineHeight: '25px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
        },
        '.event-title': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: '700',
            fontSize: '20px',
            lineHeight: '25px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
            marginBottom: '8px'
        },
        '.event-subtitle': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            // fontWeight: '400',
            fontSize: '12px',
            lineHeight: '15px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
            marginBottom: '11px',
        },
        '.event-link': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            // fontWeight: '700',
            fontSize: '16px',
            lineHeight: '19px',
            textDecoration: 'none',
            color: '#FBFBFB !important',
        },
        '.experience-breakup': {
            border: '0.5px solid #DCD7CB',
            padding: '16px 16px 0px',
            marginTop: '30px',
        },
        '.ex-details': {
            position: 'relative',
        },
        '.ex-heading': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: '700',
            fontSize: '20px',
            lineHeight: '25px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
            marginBottom: '10px'
        },
        '.ex-detail': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            // fontWeight: '400',
            fontSize: '14px',
            lineHeight: '17px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
            marginBottom: '0px',
        },
        '.ex-icon': {
            position: 'absolute',
            right: '0px',
            top: '0px',
            height: '24px',
            width: '24px',
            color: '#FBFBFB',
            ' -webkit-text-stroke': '1px',
        },
        '.submit-req': {
            background: '#C6A87D',
            color: '#080B0E',
            fontFamily: 'Proxima Nova',
            fontSize: '20px',
            lineHeight: '24px',
            border: '0px',
            marginBottom: '30px',
            marginTop: '30px',
            width: '100%',
            cursor: 'pointer',
            padding: '18px 10px'
        },
        '.contact-text': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '17px',
            textAlign: 'center',
            color: 'rgba(251, 251, 251, 0.6)',
        },
        'table': {
            marginTop: '20px',
            marginBottom: '0px'
        }
    }))

    return (
        <React.Fragment>
            <BoxWrapper>
                <Navbar/>
                <Box className="supper-gallery cust-details">
                    <Box className="container-fluid">
                        <Box className="row supper-chef-details">
                            <Box className="book-trad">
                                <ArrowBackIcon className="arrow-left"/>
                                <Typography className="addons-title">Add-on Services</Typography>
                            </Box>
                            <Box className="row customer-details addons-div">
                                <Grid container>
                                    <Grid xs={7} className="partner">
                                        <Box className="addons">
                                            <Typography className="addons-heading">Our partners help you get set up with
                                                the perfect custom experience</Typography>
                                            <Grid container className="addon-grid" rowSpacing={2} columnSpacing={2}>
                                                {addonsCardDetail.map((item, index) => (
                                                    <Grid item xl={4} md={4} sm={6} xs={6} key={index}>
                                                        <AddonsCard image={item.image} title={item.title}/>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Box>
                                    </Grid>
                                    <Grid xs={5} className="cust-details">
                                        <div className="per-dinner adsss">
                                            <div className="event-div">
                                                <img src={sGallery} alt="" className="per-dinner-img"/>
                                                <Box sx={{marginLeft: '12px'}}>
                                                    <Typography className="event-title">The Big Fat Parsi
                                                        Blowout</Typography>
                                                    <Typography className="event-subtitle">Curated by <a href="#"
                                                                                                         className="event-link">Chef
                                                        Mako</a></Typography>
                                                    <Typography className='rating-star'>
                                                        <StarIcon
                                                            sx={{color: '#C6A87D', height: '20px', width: '20px'}}/> 4.7
                                                    </Typography>
                                                </Box>
                                            </div>
                                            <div className="experience-breakup">
                                                <div className="ex-details">
                                                    <Typography className="ex-heading">Experience Breakup</Typography>
                                                    <Typography className="ex-detail">This is an estimate, final price
                                                        will be <br/>communicated on
                                                        call
                                                    </Typography>
                                                    <ExpandMoreIcon className="ex-icon"/>
                                                </div>
                                                <table className="table table-borderless">
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row">Food</th>
                                                        <td>₹ 2,500</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Service Charge</th>
                                                        <td>₹ 2,500</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Tax</th>
                                                        <td>₹ 2,500</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Venue</th>
                                                        <td>₹ 2,500</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Additional Courses +2</th>
                                                        <td>₹ 2,500</td>
                                                    </tr>
                                                    <tr className="grand-total">
                                                        <th scope="row">Grand Total</th>
                                                        <td>₹ 2,5000</td>
                                                    </tr>
                                                    <tr className="tax tax1">
                                                        <td>+Incl Of GST</td>
                                                    </tr>
                                                    <tr className="tax">
                                                        <td>++1.95% + GST</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="row viewbreak">
                                                <div className="col-lg-12">
                                                    <button type="submit" className="submit-req">Next</button>
                                                </div>
                                                <Typography className="contact-text">Our team will contact you regarding
                                                    your protein and allergeen
                                                    Information after booking is confirmed</Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default Addons;