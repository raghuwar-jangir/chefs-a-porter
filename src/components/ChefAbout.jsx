import React, { useState } from 'react'
import { Box, styled } from '@mui/system';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';
import { slide as Menu } from 'react-burger-menu'
import '../assets/styles/bergerMenu.css'
import { Outlet } from 'react-router-dom';
import { Link } from 'gatsby';
import { Button, Collapse, Grid, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppBar from '@mui/material/AppBar';
import vector from './../assets/images/vector.svg'
import chefsPorter from './../assets/images/chefsPorterLight.png'
import aboutHeader from './../assets/images/aboutDining.png'
import MobileViewChef from './../assets/images/chef-mobile.png';
import mobileCap from './../assets/images/CAP_Logo.png';
import Navbar from './Navbar'
import TeamDetails from './TeamDetails';
import teamDemo1 from './../assets/images/teamDemo1.png';
import teamDemo2 from './../assets/images/teamDemo2.png';
import teamDemo3 from './../assets/images/teamDemo3.png';
import teamDemo4 from './../assets/images/teamDemo4.png';
import FooterOurChef from './FooterOurChef';
import ChefProfile from './ChefProfile';


const ChefAbout = () => {

    // const location = useLocation();


    const BoxWrapper = styled(Box)({
        flexGrow: 1,

        '.home-stack': {
            display: 'flex',
            alignItems: 'center',
            // paddingLeft: "16px"
        },
        ".header-club": {
            position: 'absolute',
            padding: '20px 135px',
            backgroundColor: 'transperent',
        },
        '.browser-hamburger-menu': {
            fontSize: '16px',
            lineHeight: '19px',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#ffffff',
        },
        '.food-title': {
            fontSize: 10,
            color: '#080B0E',
        },
        '.browser-menu': {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },
        '.browser-search': {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        '.title-food': {
            position: 'absolute',
            bottom: '10%',
            left: '18%',
            fontSize: 50,
            fontWeight: 700,
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#3e383080',
            padding: '30px'
        },
        '.relative-box': {
            position: 'relative',
        },
        '.about-name': {
            fontSize: '35px', fontStyle: 'italic', color: '#f6f7f7', textAlign: 'center',
        },
        '.vission-name': { color: '#3e3830', fontSize: '34px', fontWeight: 500, textAlign: 'center', fontFamily: 'Playfair Display' },
        '.parent-about': {
            backgroundColor: '#40524f',
            padding: '50px 0px'
        }, '.vission-about': {
            backgroundColor: '#f6f7f7',
            padding: '50px 0px'
        },
        '.about-description': {
            fontSize: '14px',
            color: '#f6f7f7',
            lineHeight: '28px', fontWeight: 'bold',
        }, '.vission-description': {
            fontSize: '14px',
            color: '#3e3830',
            lineHeight: '28px', fontWeight: 'bold',
        },
        '.about-description2': {
            fontSize: '14px',
            color: '#f6f7f7',
            lineHeight: '28px', fontWeight: 'bold', paddingTop: '15px'
        },
        '.parent-description': {
            padding: '0px 27rem 0px 0px'
        }, '.parent-vission-description': {
            padding: '0px 16rem 0px 0px'
        }, '.parent-vission-description2': {
            padding: '25px 16rem 0px 0px'
        },
        '.our-mission': {
            paddingTop: '25px'
        },
        '.team-main-parent': {
            padding: '16px 8rem'
        }, '.team-title': {
            color: "#3e3830",
            fontSize: '32px',
            padding: '50px 16px',
            fontStyle: 'italic',
        },
        '.footer-content': {
            fontSize: '32px',
            color: '#f6f7f7', fontFamily: 'Playfair Display'
        },
        '.parent-footer': {
            padding: '80px 0px',
            background: '#6f7975'
        },
        '.footer-description': {
            color: '#f6f7f799',
            fontSize: '16px', fontFamily: 'Work Sans'
        },
        '.footer-mail': {
            padding: '5px',
            width: '18%',
        }, '.footer-button': {
            background: '#ffffff',
            color: '#000', border: '1px solid black', width: '18%'
        }, '.main-parent-content': {
            paddingTop: '30px'
        },

        "@media (min-width: 1px) and (max-width:425px)": {
            '.title-food': {
                fontSize: '35px', left: '0%',
                fontFamily: 'Playfair Display',
                padding: '30% 10px',
                height: '100%', top: '0px'
            },
            '.parent-description': {
                padding: '10px',
                textAlign: 'center'
            },
            '.parent-vission-description': {
                padding: '10px'
            }, '.parent-vission-description2': {
                padding: '10px'
            },
            '.parent-about': {
                padding: '20px 0px'
            }, '.vission-about': {
                padding: '20px 0px'
            }, '.team-main-parent': {
                padding: '16px'
            },
            '.footer-mail': {
                width: '50%',
            }, '.footer-button': {
                width: '50%'
            },
            '.footer-content': { textAlign: 'center' },
            '.footer-description': { textAlign: 'center' },
            '.parent-footer': {
                padding: '10px',
            }, '.main-parent-content': {
                textAlign: 'center'
            },
        }


    })




    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className='relative-box'>
                    <MobileView>
                        <Navbar />
                        <Box className='header-club'>
                            <img src={mobileCap} alt="privee-logo" className='mobile-chef' />
                        </Box>
                    </MobileView>
                    <BrowserView>
                        <AppBar position="static" elevation={0} sx={{ background: '#3e383059', position: 'absolute', top: '0px' }}>
                            <Grid container direction={'row'} spacing={1} sx={{ padding: '24px 22px' }}>
                                <Grid item md={9}>
                                    <img src={chefsPorter} alt='chefs-header-logo' />
                                </Grid>
                                <Grid className='browser-menu' item md={3}>
                                    <Link className='browser-hamburger-menu'
                                        to='/book'>
                                        Book an Experience
                                    </Link>
                                    <Link className='browser-hamburger-menu'
                                        to='/super-club'>
                                        For Chefs
                                    </Link>
                                    <Link className='browser-hamburger-menu'
                                        to='/our-chefs'>
                                        Our Chefs
                                    </Link>
                                    <Link className='browser-hamburger-menu'
                                        to='/contact'>
                                        About Us
                                    </Link>
                                </Grid>
                            </Grid>
                        </AppBar>
                    </BrowserView>
                    <Box>
                        {isMobile ? (
                            <Box>
                                <img src={MobileViewChef} alt='privee' width={'100%'} style={{ verticalAlign: 'top', height: '500px', objectFit: 'cover' }} />
                            </Box>
                        ) : (
                            <Box>
                                <img src={aboutHeader} alt='test' width={'100%'} style={{ verticalAlign: 'top' }} />
                            </Box>
                        )}
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Typography className='title-food'>
                                We are home to the hottest food tribe in the world
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container spacing={0} className='parent-about'>
                    <Grid item xs={12} md={4}>
                        <Typography className='about-name'>
                            About Chefs-a-Porter
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} className='parent-description'>
                        <Typography className='about-description'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                        <Typography className='about-description2'>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage,
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={0} className='vission-about'>
                    <Grid item xs={12} md={4}>
                        <Typography className='vission-name'>
                            About Chefs-a-Porter
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} className='parent-vission-description'>
                        <Typography className='vission-description'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} className='our-mission'>
                        <Typography className='vission-name'>
                            Our mission
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} className='parent-vission-description2'>
                        <Typography className='vission-description'>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                        </Typography>
                    </Grid>
                </Grid>
                <Box>
                    <ChefProfile />
                </Box>

                <Box className='team-main-parent'>
                    <Grid container spacing={2}>
                        <Typography className='team-title'>Say hello to the rest of our team</Typography>
                        <Grid item xs={12} md={12}>
                            <TeamDetails title='Prashanth Boccasam' profetion='CHAIRMAN' image={teamDemo1} />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TeamDetails title='Shiv Deviah' profetion='CTO' image={teamDemo2} />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TeamDetails title='Mako Ravindran' profetion='COO' image={teamDemo3} />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TeamDetails title='Sharanya Venkatesh' profetion='DIRECTOR OF BRANDING & COMMUNICATION' image={teamDemo4} />
                        </Grid>
                    </Grid>
                </Box>


                <Box className='parent-footer'>
                    <Typography className='footer-content'>
                        Join us to serve conscious experiences to the hottest food tribe
                    </Typography>
                    <Typography className='footer-description'>
                        We welcome chefs, mixologists, venue hosts, stylists — any partner that would help us in our mission to promote conscious dining
                    </Typography>
                    <Box className='main-parent-content'>
                        <input type='text' placeholder='your@gmail.com' className='footer-mail' />
                        <Box>
                            <Button className='footer-button' variant="contained" disableElevation>Collaborate</Button>
                        </Box>
                        <Button variant="contained" className='footer-button' disableElevation >Join</Button>
                    </Box>

                </Box>
                <Box>
                    <FooterOurChef />
                </Box>

            </BoxWrapper >

            {/* <BoxWrapper> */}
            {/* </BoxWrapper> */}

        </React.Fragment >
    )
}

export default ChefAbout;