import React, {useState} from 'react'
import {Box, styled} from '@mui/system';
import {BrowserView, MobileView} from 'react-device-detect';
import {slide as Menu} from 'react-burger-menu'
import '../assets/styles/bergerMenu.css'
import '../assets/styles/searchBar.css'
import {Outlet} from 'react-router-dom';
import {Collapse, Grid, TextField, ListItemText, List, ListItemButton, Typography, ListItem} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AppBar from '@mui/material/AppBar';
import vector from '../assets/images/vector.svg'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LightThemeIcon from '../assets/images/lightThemeIcon.png'
import DarkThemeLogo from '../assets/images/priveeHeaderLogo.png'
import {Link} from "gatsby";
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

    const BoxWrapper = styled(Box)({
            flexGrow: 1,
            position: 'fixed',
            width: '100%',
            height: '80px',
            top: '0px',
            left: '0px',
            right: '0px',
            zIndex: '999',
            display: 'block',
            background: `${isColor ? '#101418' : '#FBFBFB'}`,
            '.home-stack': {
                display: 'flex',
                alignItems: 'center',
                color: `${isColor ? '#080B0E' : '#FBFBFB'}`,
                paddingLeft: "16px"
            },
            '.main-container': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 120px'
            },
            '.grid-box': {
                width: '50%'
            },
            '.browser-hamburger-menu': {
                fontSize: '16px',
                lineHeight: '19px',
                padding: '0 1rem',
                textDecoration: 'none',
                position: 'relative',
                color: `${isColor ? '#FBFBFB' : '#080B0E'}`,
                fontFamily: 'Proxima Nova',
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
                height: '48px',
                width: '30px',
                // color: '#000000',
                color: `${isColor ? '#FBFBFB' : '#080B0E'}`,
                marginLeft: '10px',
                cursor: 'pointer'
            },
            '.light-theme-logo': {
                cursor: 'pointer'
            },
            '.dark-theme-logo': {
                cursor: 'pointer'
            },
            '.css-2ehmn7-MuiInputBase-root-MuiOutlinedInput-root': {
                width: '100%',
                height: '40px',
                top: '0',
                borderRadius: '0',
                fontFamily: 'Proxima Nova',
                fontSize: '18px',
                lineHeight: '48px',
                textAlign: 'center',
                cursor: 'pointer',
                color: '#080B0E',
                background: 'transparent',
            },
            '.header-search-box':
                {
                    // paddingLeft: '20px',
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
            '@media(min-width: 320px) and (max-width: 1024px)': {
                '.header-search-box': {
                    display: 'none',
                },
                '.browser-menu': {
                    maxWidth: '80%',
                    flexBasis: '80%'
                }
            },
            '@media(min-width: 1000px) and (max-width: 1024px)': {
                '.GridContainer': {
                    justifyContent: 'end'
                },
                '.grid-box': {
                    width: '70% !important'
                },
                '.header-search-box': {
                    display: 'none !important',
                },
                '.main-container': {
                    padding: '10px 70px'
                },
            },
            '@media(min-width: 1100px) and (max-width: 1450px)': {
                '.grid-box': {
                    width: '65%'
                },
            }
        },
    )
    // const JoinCollapse = styled(Collapse)({
    //     width: '100%',
    //     fontSize: '20px',
    //     color: '#FBFBFB',
    //     padding: '14px 16px',
    //     fontWeight: '250',
    //     lineHeight: '24px',
    // })

    let styles = {
        bmBurgerButton: {
            position: 'absolute',
            width: '2.1rem',
            height: '1.4rem',
            right: '15px',
            top: '15px',
            fontStyle: 'proxima Nova',
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
                    <AppBar position="fixed" elevation={0}
                            sx={{background: `${isColor ? '#101418' : '#FBFBFB'}`}}
                    >
                        <Box className="main-container">
                            <Box style={{width: '20%'}}>
                                <img src={isColor ? DarkThemeLogo : LightThemeIcon} alt='light-theme-logo'
                                     className='light-theme-logo dark-theme-logo'/>
                            </Box>
                            <Box className="grid-box">
                                <Grid container direction={'row'} columnSpacing={1}
                                      className=''>
                                    <Grid className='browser-menu' item xs={8} md={8}>
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
                                        {/*</Grid>*/}
                                        {/*<Grid className='browser-search' item md={3}>*/}
                                    </Grid>
                                    <Grid xs={4} className='header-search-box browser-search'>
                                        {!search &&
                                            <SearchIcon className='telePhoneLogo' onClick={handleOpen}/>
                                            // <img src={vector} alt="vector" className='telePhoneLogo' onClick={handleOpen}/>
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
                                        <LocalPhoneOutlinedIcon className='telePhoneLogo'/>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </AppBar>
                </BoxWrapper>
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
                        <ListItemButton onClick={handleClick}>
                            <ListItemText disableTypography primary="Join Us" className='hamburger-title'
                                          sx={{fontSize: '24px', padding: '0px !important'}}/>
                            {expanded ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemButton>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton>
                                    <Link to={'/our-chef-page'} className="hamburger-subtitle">Chef</Link>
                                </ListItemButton>
                                <ListItemButton>
                                    <Link to={'/'} className="hamburger-subtitle">Sponsor Partner</Link>
                                </ListItemButton>
                                <ListItemButton>
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
            </MobileView>
            <Outlet/>
        </React.Fragment>
    )
}

export default Navbar;



