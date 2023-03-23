import React from 'react';
import {
    Box, styled, TextField, Typography, List, ListItemIcon, Grid, Link
} from '@mui/material';
import footerLogo from './../assets/images/logo-gold.png';
import footerArrow from './../assets/images/footer-arrow.png';
import {BrowserView} from 'react-device-detect';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Button from "@mui/material/Button";
import '../assets/styles/fontStyle.css'


const Footer = () => {
    const BoxWrapper = styled(Box)(() => ({
        // display: 'flex',
        // justifyContent: 'space-between',
        padding: '30px 120px',
        background: '#101418',
        color: '#fff',
        '.main-heading': {
            fontWeight: '700 !important',
            fontSize: '20px !important',
            fontStyle: 'normal !important',
            lineHeight: '24px !important',
            color: '#FBFBFB !important',
            textAlign: 'left !important',
            marginBottom: '20px !important',
            marginTop: '0px !important',
            padding: '0px !important',
            fontFamily: 'ProximaNovaA-Regular !important',
        },
        '.footerLogo': {
            height: '50px',
            width: '226.29px',
            objectFit: 'contain',
        },
        '.sub-div': {
            display: 'flex',
            justifyContent: 'space-between',
            // width: '50%',
            paddingTop: '40px',
        },
        '.social-heading': {
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '0.25px solid white',
            paddingBottom: '16px'
        },
        '.social-icon': {
            display: 'flex',
            alignItems: 'center',
            placeContent: 'flex-end',
            cursor: 'pointer'
        },
        '.icon': {
            display: 'flex',
            placeContent: 'flex-end',
            color: 'black',
            background: '#fff',
            padding: '4px',
            borderRadius: '100%',
            marginRight: ' 6px',
        },
        '.input-group': {
            position: 'relative',
        },
        '.input-field': {
            borderRadius: '0px',
            background: '#FBFBFB',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '25px',
            color: '#BDBDBD',
            width: '190px !important',
            height: "36px !important",
            marginBottom: '20px',
        },
        '.btn': {
            fontFamily: 'ProximaNovaA-Regular',
            background: "#C6A87D",
            fontSize: '14px !important',
            lineHeight: "25px",
            borderRadius: "0px",
            color: "#080B0E",
            height: "36px !important",
            width: '50px !important',
            borderColor: '#C6A87D',
            margin: '0px !important',
            textTransform: "capitalize !important"
        },
        ".btn:hover": {color: "#080B0E", background: "#C6A87D",},
        '.listItem': {
            minWidth: '18px',
            height: '14px'
        },
        '.MuiList-root': {
            marginBottom: '24px',
            padding: '0px'
        },
        '.listItem-subheading': {
            cursor: 'pointer',
            fontStyle: 'normal',
            fontFamily: 'Proxima Nova Alt',
            fontSize: '14px',
            lineHeight: '17px',
            textAlign: 'left',
            color: '#FBFBFB',
            fontWeight: '250px',
            textDecoration: 'none',
        },
        '.listItem-subheading:hover': {
            color: "#C6A87D"
        },
        '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
            borderRadius: '0px',
            fontSize: '14px'
        },
        // '@media (max-width:1280px)': {
        //     '.sub-div': {
        //         width: '52.5%'
        //     },
        // },
        '@media (max-width: 1024px)': {
            padding: '30px 40px',
        },
        '@media (min-width: 320px) and (max-width:1023px)': {
            display: 'none !important'
        }

    }));
    return (
        <React.Fragment>
            <BrowserView>
                <BoxWrapper className='box-heading'>
                    <Box className='social-heading'>
                        <Box>
                            <img src={footerLogo} alt='footer-Logo' className='footerLogo' style={{
                                // width: '226.29px',
                                height: '50px',
                            }}/>
                        </Box>
                        <Box className='social-icon'>
                            <InstagramIcon className='icon'/>
                            <LinkedInIcon className='icon'/>
                            <FacebookIcon className='icon'/>
                            <TwitterIcon className='icon'/>
                        </Box>
                    </Box>
                    <Box className='sub-div'>
                        <Grid container sx={{padding: '0px 12px'}}>
                            <Grid item xs={2} sm={2}>
                                <Box>
                                    <Typography className='main-heading'>Chef a porter</Typography>
                                    <List>
                                        <ListItemIcon className="listItem">
                                            <img src={footerArrow}/>
                                        </ListItemIcon>
                                        <Link href="/become-a-patron" className="listItem-subheading">Became a
                                            Patron</Link>
                                    </List>
                                    <List>
                                        <ListItemIcon className="listItem">
                                            <img src={footerArrow}/>
                                        </ListItemIcon>
                                        <Link className="listItem-subheading" href="/corporate-booking">Corporate
                                            Bookings</Link>
                                    </List>
                                    <List>
                                        <ListItemIcon className="listItem">
                                            <img src={footerArrow}/>
                                        </ListItemIcon>
                                        <Link href="/gift-cards" className="listItem-subheading">Gift Cards</Link>
                                    </List>
                                </Box>
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <Box>
                                    <Typography className='main-heading'>Experiences</Typography>
                                    <List>
                                        <ListItemIcon className="listItem">
                                            <img src={footerArrow}/>
                                        </ListItemIcon>
                                        <Link href="/privee" className="listItem-subheading">Privee</Link>
                                    </List>
                                    <List>
                                        <ListItemIcon className="listItem">
                                            <img src={footerArrow}/>
                                        </ListItemIcon>
                                        <Link href="/supper-club" className="listItem-subheading">Supper Clubs</Link>
                                    </List>
                                </Box>
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <Box>
                                    <Typography className='main-heading'>Company</Typography>
                                    <List>
                                        <ListItemIcon className="listItem">
                                            <img src={footerArrow}/>
                                        </ListItemIcon>
                                        <Link href="/about-us" className="listItem-subheading">About us</Link>
                                    </List>
                                    <List>
                                        <ListItemIcon className="listItem">
                                            <img src={footerArrow}/>
                                        </ListItemIcon>
                                        <Link href="" className="listItem-subheading">Blogs</Link>
                                    </List>
                                </Box>
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <Box>
                                    <Typography className='main-heading'>Join Us</Typography>
                                    <List>
                                        <ListItemIcon className="listItem">
                                            <img src={footerArrow}/>
                                        </ListItemIcon>
                                        <Link href="/join-chef" className="listItem-subheading">As Chef</Link>
                                    </List>
                                    <List>
                                        <ListItemIcon className="listItem">
                                            <img src={footerArrow}/>
                                        </ListItemIcon>
                                        <Link href="/become-partner" className="listItem-subheading">As Sponsor
                                            Partner</Link>
                                    </List>
                                    <List>
                                        <ListItemIcon className="listItem">
                                            <img src={footerArrow}/>
                                        </ListItemIcon>
                                        <Link className="listItem-subheading">As Vendor</Link>
                                    </List>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={4} style={{display: 'flex', justifyContent: 'end'}}>
                                <Box className='input-group'>
                                    <Typography className='main-heading'>Reach out to us</Typography>
                                    <Box style={{width: '100%'}}>
                                        <TextField className='input-field' id='email-address' size='small'
                                                   placeholder='Your email address' variant='outlined'
                                                   sx={{
                                                       '.MuiOutlinedInput-notchedOutline': {
                                                           border: 'none',
                                                           outline: 'none'
                                                       },
                                                       '.MuiInputBase-input': {
                                                           borderRadius: '0px',
                                                           background: '#FBFBFB',
                                                           fontFamily: 'Proxima Nova Alt',
                                                           fontStyle: 'normal',
                                                           fontWeight: '300',
                                                           fontSize: '14px',
                                                           lineHeight: '25px',
                                                           color: '#BDBDBD',
                                                           padding: '8px 14px'
                                                       }
                                                   }}
                                        />
                                        <Button className='btn'>Submit</Button>
                                    </Box>
                                    <List>
                                        <ListItemIcon className="listItem">
                                            <img src={footerArrow}/>
                                        </ListItemIcon>
                                        <Link href="/contact-us" className='listItem-subheading'>Contact Us</Link>
                                    </List>
                                    <List>
                                        <ListItemIcon className="listItem">
                                            <img src={footerArrow}/>
                                        </ListItemIcon>
                                        <Link href="mailto:reservations@chefsaporter.com."
                                              className='listItem-subheading'>reservations@chefsaporter.com.</Link>
                                    </List>
                                    <List>
                                        <ListItemIcon className="listItem">
                                            <img src={footerArrow}/>
                                        </ListItemIcon>
                                        <Link href="/" className='listItem-subheading'>Join as Community</Link>
                                    </List>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </BoxWrapper>
            </BrowserView>
        </React.Fragment>
    )
}
export default Footer;