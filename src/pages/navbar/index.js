import React, {useState} from 'react'
import {Box, styled} from '@mui/system';
import {BrowserView, MobileView} from 'react-device-detect';
import {slide as Menu} from 'react-burger-menu'
import '../../assets/styles/bergerMenu.css'
import '../../assets/styles/searchBar.css'
import {Outlet} from 'react-router-dom';
import {Collapse, Grid, TextField, ListItemText, List, ListItemButton, Typography, ListItem} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AppBar from '@mui/material/AppBar';
import vector from '../../assets/images/vector.svg'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LightThemeIcon from '../../assets/images/lightThemeIcon.png'
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

    // console.log("navbar", location.pathname);
    // const dark =
    // console.log("--->  dark", dark)

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
            '.home-stack': {
                display: 'flex',
                alignItems: 'center',
                background: '#FBFBFB',
                paddingLeft: "16px"
            },
            '.browser-hamburger-menu': {
                fontSize: '16px',
                lineHeight: '19px',
                fontWeight: 300,
                textDecoration: 'none',
                color: `${isColor ? '#FBFBFB' : '#080B0E'}`,
                fontFamily: 'Proxima Nova',
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
                    paddingLeft: '20px',
                    display: 'flex'
                },
            '.GridContainer': {
                padding: '10px 120px'
            },
        '.searchbar-icon':{
                cursor:'pointer'
        },
            '@media(min-width: 320px) and (max-width: 1024px)': {
                '.header-search-box': {
                    display: 'none',
                },
                '.browser-menu': {
                    maxWidth: '65%',
                    flexBasis: '70%'
                }
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
            alignItem:'center'
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
                    <AppBar position="fixed" elevation={0}
                            sx={{  background: `${isColor ? '#101418' : '#FBFBFB'}`}}
                    >
                        <Grid container direction={'row'} columnSpacing={1} sx={{padding: '10px 120px'}}
                              className='GridContainer'>
                            <Grid item md={2}>
                                <img src={LightThemeIcon} alt='light-theme-logo' className='light-theme-logo'/>
                            </Grid>
                            <Grid className='browser-menu' item xs={8} md={8}>
                                <Link className='browser-hamburger-menu'
                                      to='/privee'>
                                    Privee
                                </Link>
                                <Link className='browser-hamburger-menu'
                                      to='/super-club'>
                                    Supper Clubs
                                </Link>
                                <Link className='browser-hamburger-menu'
                                      to='/our-chefs'>
                                    Our Chefs
                                </Link>
                                <Link className='browser-hamburger-menu'
                                      to='/contact'>
                                    Contact
                                </Link>
                                <Link className='browser-hamburger-menu'
                                      to='/about-us'>
                                    About Us
                                </Link>
                                {/*</Grid>*/}
                                {/*<Grid className='browser-search' item md={3}>*/}
                                <Box className='header-search-box browser-search'>
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
                                                        <SearchIcon className='searchbar-icon' onClick={() => setSearch(false)}/>
                                                    </InputAdornment>),
                                                    endAdornment: (<InputAdornment position="end">
                                                        <CloseIcon className='searchbar-icon' onClick={() => setSearch(false)}/>
                                                    </InputAdornment>)
                                                }}
                                            />
                                        </Box>
                                    }
                                    <LocalPhoneOutlinedIcon className='telePhoneLogo'/>
                                </Box>
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



