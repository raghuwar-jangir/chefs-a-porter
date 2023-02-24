import React, { useState } from 'react'
import { Box, styled } from '@mui/system';
import { BrowserView, MobileView } from 'react-device-detect';
import { slide as Menu } from 'react-burger-menu'
import '../assets/styles/bergerMenu.css'
import { Outlet, useLocation } from 'react-router-dom';
import {Link} from 'gatsby';
import { Collapse, Grid } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppBar from '@mui/material/AppBar';
import vector from './../assets/images/vector.svg'
import priveeLogo from './../assets/images/priveeHeaderLogo.png'
import LightThemeIcon from './../assets/images/lightThemeIcon.png'


const NavbarDemo = () => {

    const [isOpen, setOpen] = useState(false);
    const [search, setSearch] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const location = useLocation();

    const handleOpen = () => {
        setSearch(true);
    }

    const handleIsOpen = () => {
        setOpen(!isOpen)
    }

    const closeSideBar = () => {
        setOpen(false)
    }

    // console.log("navbar", location.pathname);
    // const dark = 
    // console.log("--->  dark", dark)

    const BoxWrapper = styled(Box)({
        flexGrow: 1,
        '.home-stack': {
            display: 'flex',
            alignItems: 'center',
            // paddingLeft: "16px"
        },
        '.browser-hamburger-menu': {
            fontSize: '16px',
            lineHeight: '19px',
            fontWeight: 300,
            textDecoration: 'none',
            color: `${location.pathname === '/privee' ? '#FBFBFB' : '#080B0E'}`,
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
        }
    })
    const JoinCollapse = styled(Collapse)({
        width: '100%',
        fontSize: '20px',
        color: '#FBFBFB',
        padding: '14px 16px',
        fontWeight: '250',
        lineHeight: '24px',
    })

    let styles = {
        bmBurgerButton: {
            position: 'absolute',
            width: '2.1rem',
            height: '1.4rem',
            right: '15px',
            top: '1.35rem'
        },

        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            // background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px',
            right: '1.1rem',
            top: '0.8rem'
        },
        bmCross: {
            background: '#C6A87D'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            // background: '#373a47',
            // padding: '2.5em 1.5em 0',
            fontSize: '1em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            // padding: '0.8em'
            paddingTop: '2.2rem'
        },
        bmItem: {
            display: 'inline-block'
        },
        bmOverlay: {
            background: 'transparent',
        }
    }

    return (
        <React.Fragment>

            {/* //! browser view for the navbar component */}

            <BrowserView>
                <BoxWrapper>
                    <AppBar position="static" elevation={0}
                        sx={{ background: `${location.pathname === '/privee' ? '#101418' : '#FBFBFB'}` }}
                    >
                        <Grid container direction={'row'} columnSpacing={1} sx={{ padding: '10px 10rem' }}>
                            <Grid item md={4}>
                                {
                                    (location.pathname === '/privee') ?
                                        <img src={priveeLogo} alt='Privee-header-logo' /> :
                                        <img src={LightThemeIcon} alt='light-theme-logo' />
                                }
                            </Grid>
                            <Grid className='browser-menu' item md={5}>
                                <Link className='browser-hamburger-menu'
                                    to='/privee'>
                                    Privee
                                </Link>
                                <Link className='browser-hamburger-menu'
                                    to='/super-club'>
                                    Supper Clubs
                                </Link>
                                <Link className='browser-hamburger-menu'
                                    to='/our-chef'>
                                    Our Chefs
                                </Link>
                                <Link className='browser-hamburger-menu'
                                    to='/contact'>
                                    Contact
                                </Link>
                                <Link className='browser-hamburger-menu'
                                         to='/contact'>
                                    Contact
                                </Link>
                                <Link className='browser-hamburger-menu'
                                         to='/about-us'>
                                    About Us
                                </Link>
                            </Grid>
                            <Grid className='browser-search' item md={3}>
                                {!search &&
                                    <img src={vector} alt="vector" onClick={handleOpen} />
                                }
                                {search &&
                                    <Box className='search-box'>
                                        <input type='search' placeholder='Search supper club, city...' className='browser-supper-search' />
                                    </Box>
                                }

                            </Grid>
                        </Grid>
                        {/* <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search> */}
                    </AppBar>
                </BoxWrapper>

                {/* <BoxWrapper> */}
                {/* </BoxWrapper> */}
            </BrowserView>

            {/* //! mobile view for the hamburgerMenu. */}

            <MobileView>
                <Menu
                    isOpen={isOpen}
                    onOpen={handleIsOpen}
                    onClose={handleIsOpen}
                    styles={styles} left width={'100%'}>
                    <Link onClick={closeSideBar}
                        className='hamburger-title' to='/home'> Home </Link>
                    <Link onClick={closeSideBar}
                        className="hamburger-title" to='/super-club'> Supper Clubs </Link>
                    <Link onClick={closeSideBar}
                        className="hamburger-title" to='/privee'> Privee </Link>
                    <Link onClick={closeSideBar}
                        className="hamburger-title" to='/our-chef'> Our  Chefs </Link>
                    <Link onClick={closeSideBar}
                        className="hamburger-title" to='/patron'> Become a Patron </Link>
                    <Link onClick={closeSideBar}
                        className="hamburger-title" to='/cards'> Gift Cards </Link>
                    {/* <Link onClick={closeSideBar}
                        className="hamburger-title" to='/join-us'> Join Us </Link> */}
                    <Link onClick={closeSideBar}
                        className="hamburger-title" to='/about-us'> About us </Link>
                    <Link onClick={closeSideBar}
                        className="hamburger-title" to='/contact'> Contact </Link>
                    <div className='berger-menu-down'>
                        <Link
                            onClick={() => setExpanded(!expanded)}
                            className="hamburger-title" > Join Us </Link>
                        <Box>
                            {expanded ? <KeyboardArrowUpIcon /> : < KeyboardArrowDownIcon />}
                        </Box>
                    </div>
                    <div className='burger-collapse'>
                        <JoinCollapse orientation={"horizontal"} in={expanded}>
                            Chef
                        </JoinCollapse>
                        <JoinCollapse orientation={"horizontal"} in={expanded}>
                            Sponser Partner
                        </JoinCollapse>
                        <JoinCollapse orientation={"horizontal"} in={expanded}>
                            Vendor
                        </JoinCollapse>
                    </div>
                </Menu>
            </MobileView>
            <Outlet />

        </React.Fragment >
    )
}

export default NavbarDemo;



