import React, {useState} from 'react'
import {Box, styled} from '@mui/system';
import {slide as Menu} from 'react-burger-menu'
import '../assets/styles/bergerMenu.css'
import '../assets/styles/searchBar.css'
import {Collapse, Grid, TextField, ListItemText, List, ListItemButton, Typography, ListItem} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AppBar from '@mui/material/AppBar';
import telLogo from '../assets/images/tel.png';
import searchIcon from '../assets/images/search.png';
import LightThemeIcon from '../assets/images/Logo.png'
import DarkThemeLogo from '../assets/images/Logo.png'
import {Link, navigate} from "gatsby";
import CloseIcon from '@mui/icons-material/Close';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


const Navbar = ({isColor}) => {

    const [isOpen, setOpen] = useState(false);
    const [search, setSearch] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleOpen = () => {
        setSearch(true);
    }
    const handleClick = () => {
        setExpanded(!expanded);
    };
    const handleIsOpen = () => {
        setOpen(!isOpen)
    }
    const closeSideBar = () => {
        setOpen(false)
    }

    const handleOnClick = () => {
        navigate('/');
    }

    const BoxWrapper = styled(Box)({
            // flexGrow: 1,
            position: 'fixed',
            width: '100%',
            maxWidth: '100%',
            height: '82px',
            top: '0px',
            left: '0px',
            right: '0px',
            zIndex: '999',
            display: 'block',
            background: `${isColor ? '#101418' : '#FBFBFB'}`,
            '.main-container': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 120px',
                // width:'100%'
            },
            '.grid-box': {
                width: '48%',
                border: 'none !Important'
            },
            '.browser-hamburger-menu': {
                fontSize: '16px',
                lineHeight: '19px',
                padding: '0 20px',
                textDecoration: 'none',
                position: 'relative',
                color: `${isColor ? '#FBFBFB' : '#080B0E'}`,
                fontFamily: 'Proxima Nova Alt',
            },
            '.browser-hamburger-menu.active:after': {
                content: `''`,
                background: `${isColor ? '#C6A87D' : '#080B0E'}`,
                width: '70px',
                height: '2px',
                display: 'block',
                margin: 'auto',
                bottom: '-12.5px',
                position: 'absolute',
                left: '0',
                right: '0px',
            },
            '.food-title': {
                fontSize: 10,
                color: '#080B0E',
            },
            '.css-tuv69z-MuiGrid-root': {
                justifyContent: 'space-between'
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
            '.telePhoneLogo': {
                height: '24px',
                width: '24px',
                objectFit: 'contain',
                // color: '#000000',
                color: `${isColor ? '#FBFBFB' : '#080B0E'}`,
                filter: `${isColor ? 'invert(1)' : ''}`,
                marginLeft: '20px',
                cursor: 'pointer'
            },
            '.light-theme-logo': {
                cursor: 'pointer',
                height: '64px',
                width: '226.29px',
                objectFit: 'contain',
                filter: `${isColor ? 'invert(1)' : ''}`
            },
            '.dark-theme-logo': {
                height: '64px',
                width: '226.29px',
                cursor: 'pointer',
                objectFit: 'contain',
            },
            '.css-2ehmn7-MuiInputBase-root-MuiOutlinedInput-root': {
                width: '100%',
                height: '40px',
                top: '0',
                borderRadius: '0',
                fontFamily: 'Proxima Nova Alt',
                fontSize: '18px',
                lineHeight: '48px',
                textAlign: 'center',
                cursor: 'pointer',
                color: '#080B0E',
                background: 'transparent',
            },
            '.header-search-box':
                {
                    display: 'flex',
                },
            '.GridContainer': {
                justifyContent: 'space-between'
            },
            '.searchbar-icon': {
                cursor: 'pointer'
            },
            '.search-box': {
                background: 'rgba(189, 189, 189, 0.6)',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
            },
            '.mobile-navbar': {
                display: 'none'
            },
            '@media(min-width: 320px) and (max-width: 1024px)': {
                '.header-search-box': {
                    display: 'none',
                },
                '.browser-menu': {
                    maxWidth: '100%',
                    flexBasis: '100%'
                }
            },
            '@media(min-width: 1000px) and (max-width: 1024px)': {
                '.grid-box': {
                    width: '70% !important'
                },
                '.header-search-box': {
                    display: 'none !important',
                },
            },
            '@media(min-width: 1100px) and (max-width: 1450px)': {
                '.grid-box': {
                    width: '68%'
                },
            },
            '@media(min-width: 1px) and (max-width: 768px)': {
                '.mobile-navbar': {
                    display: 'block'
                },
                '.desktop-navbar': {
                    display: 'none'
                },
            }
        },
    )

    let styles = {
        bmBurgerButton: {
            position: 'absolute',
            width: '2.1rem',
            height: '1.4rem',
            right: '15px',
            top: '15px',
            fontStyle: 'proxima Nova Alt',
            alignItem: 'center',
            color: `${isColor ? '#FBFBFB' : '#080B0E'}`,
        },
        bmBurgerBars: {
            background: `${isColor ? '#FBFBFB' : '#080B0E'}`,
        },
        bmBurgerBarsHover: {
            // background: '#a90000'
            background: `${isColor ? '#FBFBFB' : '#080B0E'}`,
        },
        bmCrossButton: {
            right: '1.1rem',
            top: '0.8rem',
            height:'32px',
            width:'32px'
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
            padding: '16px',
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            // padding: '0.8em'
            paddingTop: '2.2rem',
        },
        bmItem: {
            display: 'inline-block',
            padding: '8px 0px'
        },
        bmOverlay: {
            background: 'transparent',
        },
    }

    return (
        <React.Fragment>

            {/* //! browser view for the navbar component */}

            {/*<BrowserView>*/}
            <BoxWrapper>
                <AppBar position="fixed" elevation={0}
                        sx={{background: `${isColor ? '#101418' : '#FBFBFB'}`}}
                >
                    <Box className="main-container desktop-navbar">
                        <Box sx={{width: 'auto'}} onClick={handleOnClick}>
                            <img src={isColor ? DarkThemeLogo : LightThemeIcon} alt='light-theme-logo'
                                 className=' header light-theme-logo dark-theme-logo'/>
                        </Box>
                        <Box className="grid-box">
                            <Grid container direction={'row'}
                                  className=''>
                                <Grid className='browser-menu' xl={8} md={8}>
                                    <Link
                                        className={`browser-hamburger-menu`}
                                        activeClassName={'browser-hamburger-menu active'}
                                        to='/privee'>
                                        Privee
                                    </Link>
                                    <Link
                                        className={`browser-hamburger-menu`}
                                        activeClassName={'browser-hamburger-menu active'}
                                        to='/supper-club'>
                                        Supper Clubs
                                    </Link>
                                    <Link
                                        className={`browser-hamburger-menu`}
                                        activeClassName={'browser-hamburger-menu active'}
                                        to='/our-chefs'>
                                        Our Chefs
                                    </Link>
                                    <Link
                                        className={`browser-hamburger-menu`}
                                        activeClassName={'browser-hamburger-menu active'}
                                        to='/contact-us'>
                                        Contact
                                    </Link>
                                    <Link
                                        className={`browser-hamburger-menu`}
                                        activeClassName={'browser-hamburger-menu active'}
                                        to='/about-us'>
                                        About Us
                                    </Link>
                                </Grid>
                                <Grid className='header-search-box browser-search' item xl={3.5} md={3.5}
                                      sx={{flex: 'none'}}>
                                    {!search &&
                                        <img src={searchIcon} className='telePhoneLogo' onClick={handleOpen}/>
                                    }
                                    {search &&
                                        <Box className='search-box'>
                                            <TextField
                                                type='search' placeholder='Search'
                                                variant='standard'
                                                InputProps={{
                                                    disableUnderline: true,
                                                    startAdornment: (<InputAdornment position="start">
                                                        <SearchIcon className='searchbar-icon'
                                                                    onClick={() => setSearch(false)}/>
                                                    </InputAdornment>),
                                                    endAdornment: (<InputAdornment position="end">
                                                        <CloseIcon className='searchbar-icon'
                                                                   onClick={() => setSearch(false)}/>
                                                    </InputAdornment>)
                                                }}
                                            />
                                        </Box>
                                    }
                                    <img src={telLogo} className='telePhoneLogo'/>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </AppBar>
                <Box className="mobile-navbar">
                    <AppBar position="fixed" elevation={0} className="mobile-menu">
                        <Menu
                            isOpen={isOpen}
                            onOpen={handleIsOpen}
                            onClose={handleIsOpen}
                            styles={styles} left width={'100%'}>
                            <Link onClick={closeSideBar}
                                  className='hamburger-title' to='/home'> Home </Link>
                            <Link onClick={closeSideBar}
                                  className="hamburger-title" to='/privee'> Privee </Link>
                            <Link onClick={closeSideBar}
                                  className="hamburger-title" to='/super-club'> Supper Clubs </Link>
                            <Link onClick={closeSideBar}
                                  className="hamburger-title" to='/our-chef'> Our Chefs </Link>
                            <Link onClick={closeSideBar}
                                  className="hamburger-title" to='/privee'> Corporate Bookings </Link>
                            <Link onClick={closeSideBar}
                                  className="hamburger-title" to='/patron'> Become a Patron </Link>
                            <Link onClick={closeSideBar}
                                  className="hamburger-title" to='/cards'> Gift Cards </Link>
                            <List
                                sx={{width: '100%', maxWidth: '100%'}}
                                component="nav"
                            >
                                <ListItemButton onClick={handleClick} sx={{
                                    padding: '0px !important'
                                }}>
                                    <ListItemText disableTypography primary="Join Us" className='hamburger-title'
                                                  sx={{fontSize: '18px', padding: '0px !important'}}/>
                                    {expanded ? <ExpandLess/> : <ExpandMore/>}
                                </ListItemButton>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{
                                            padding: '8px 0px !important'
                                        }}>
                                            <Link to={'/our-chef-page'} className="hamburger-subtitle">Chef</Link>
                                        </ListItemButton>
                                        <ListItemButton sx={{
                                            padding: '8px 0px !important'
                                        }}>
                                            <Link to={'/'} className="hamburger-subtitle">Sponsor Partner</Link>
                                        </ListItemButton>
                                        <ListItemButton sx={{
                                            padding: '8px 0px !important'
                                        }}>
                                            <Link to={'/'} className="hamburger-subtitle">Vendor<br/>(decor, venue,
                                                crockery, cultery, produce, etc)</Link>
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </List>
                            <Link onClick={closeSideBar}
                                  className="hamburger-title" to='/about-us/'> About us </Link>
                            <Link onClick={closeSideBar}
                                  className="hamburger-title" to='/contact'> Contact </Link>
                        </Menu>
                    </AppBar>
                </Box>
            </BoxWrapper>
            {/*</BrowserView>*/}

            {/* //! mobile view for the hamburgerMenu. */}


            {/*<Outlet/>*/}
        </React.Fragment>
    )
}

export default Navbar;



