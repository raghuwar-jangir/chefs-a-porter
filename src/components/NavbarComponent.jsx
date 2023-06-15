import React, {useState, useContext} from 'react'
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
import {makeStyles} from '@material-ui/core/styles';
import {Drawer, IconButton, Toolbar} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import CmsContext from "../context/CmsContext"
import Cookies from "js-cookie";


const Navbar = ({isColor, isShareIcon, isIcon, isImage, heading, to, supperClubLink}) => {

    const props = {
        heading
    }
    const callMobileNumberCookieValue = Cookies?.get('callMobileNumber');
    const callMobileNumber = callMobileNumberCookieValue?.replaceAll('"', '')

    //calling button
    const handlePhoneCall = () => {
        window.location.href = `tel:${callMobileNumber}`;
    };

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

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1
        },
        menuButton: {
            // marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            textAlign: "center",
            // color: '#000000 !important',
            color: `${isColor ? '#FBFBFB' : '#000000'}`,
        },
        list: {
            width: "310px",
            height: '100%',
            backgroundColor: '#080B0E',
            paddingRight: '8px'
        },
        '.MuiButtonBase-root-MuiListItem-root': {
            padding: '8px 16px',
        },
        '@media(min-width: 1px) and (max-width: 320px)': {
            list: {
                width: "319px",
            },
        },
        '@media(min-width: 321px) and (max-width: 375px)': {
            list: {
                width: "374px",
            },
        },
        '@media(min-width: 376px) and (max-width: 768px)': {
            list: {
                width: "399px",
            },
        },
        '@media(min-width: 426px) and (max-width: 767px)': {
            title: {
                textAlign: 'left'
            },
        },

    }));

    const classes = useStyles();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setIsDrawerOpen(open);
    };

    const BoxWrapper = styled(Box)({
            // flexGrow: 1,
            position: 'fixed',
            width: '100%',
            height: '80px',
            top: '0px',
            left: '0px',
            right: '0px',
            zIndex: '999',
            display: 'block',
            // background: `${isColor ? '#101418' : '#FBFBFB'}`,
            '.main-container': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 120px',
                // width:'100%'
            },
            '.grid-box': {
                width: '54%',
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
                whiteSpace: 'nowrap'
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
                // height: '20px'
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
                filter: `${isColor ? 'invert(1)' : ''}`,
                paddingLeft: '10px'
            },
            '.dark-theme-logo': {
                height: '64px',
                width: '226.29px',
                cursor: 'pointer',
                objectFit: 'contain',
                paddingLeft: '12px'
            },
            '.mobile-navbar-img': {
                display: 'flex',
                justifyContent: 'center !important',
                cursor: 'pointer',
                height: '35px',
                width: '172px',
                objectFit: 'contain',
                paddingLeft: '60px'
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
                padding: "0 10px"
            },
            '.mobile-navbar': {
                display: 'none'
            },
            '.MuiPaper-root .MuiAppBar-root': {
                background: `${isColor ? '#101418' : '#FBFBFB'}`,
                height: '80px'
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
            '@media(min-width: 375px) and (max-width: 400px)': {
                '.mobile-navbar-img': {
                    paddingLeft: '90px'
                },
            },
            '@media(min-width: 400px) and (max-width: 425px)': {
                '.mobile-navbar-img': {
                    paddingLeft: '120px'
                },
            },
            '@media(min-width: 426px) and (max-width: 768px)': {
                '.mobile-navbar-img': {
                    paddingLeft: '10px'
                },
            },
            '@media(min-width: 769px) and (max-width: 1024px)': {
                '.grid-box': {
                    width: '70% !important'
                },
                '.header-search-box': {
                    display: 'none !important',
                },
                '.main-container': {
                    padding: '8px 30px'
                },
            },
            '@media(min-width: 1100px) and (max-width: 1450px)': {
                '.grid-box': {
                    width: '74%'
                },
            },
            '@media(min-width: 1px) and (max-width: 768px)': {
                height: '56px',
                display: 'unset',
                '.mobile-navbar': {
                    display: 'block'
                },
                '.desktop-navbar': {
                    display: 'none'
                },
            },

            //mobile navbar
            // '.css-hip9hq-MuiPaper-root-MuiAppBar-root': {
            //     backgroundColor: `${isColor ? '#080B0E' : '#dcd7cb'}`
            // },
            '.MuiToolbar-gutters': {
                padding: '0px 8px !important'
            },
            '.MuiIconButton-root': {
                padding: '8px 8px 8px 0px',
                fontWeight: 'unset'
            },
            '.css-fpvc7o-MuiList-root': {
                paddingBottom: '0px !important',
                paddingTop: '0px !important'
            },
            '.MuiToolbar-regular': {
                height: '56px !important',
                minHeight: '56px !important'
            },
            '.appbar': {
                backgroundColor: `${isColor ? '#080B0E' : '#dcd7cb'}`
            },
            '.css-1shabyr-MuiPaper-root-MuiAppBar-root': {
                background: '#FBFBFB',
                height: '56px !important',
                minHeight: '56px !important'
            },
        },
    )
    return (
        <React.Fragment>

            {/* //! browser view for the navbar component */}
            <BoxWrapper>
                <AppBar position="fixed" elevation={0}
                        sx={{
                            background: `${isColor ? '#101418' : '#FBFBFB'}`,
                            height: '80px',
                            '@media(min-width: 1px) and (max-width: 768px)': {
                                height: '56px',
                            },
                        }}
                >
                    <Box className="main-container desktop-navbar">
                        <Box sx={{width: 'auto'}} onClick={handleOnClick}>
                            <img src={isColor ? DarkThemeLogo : LightThemeIcon} alt='light-theme-logo'
                                 className=' header light-theme-logo dark-theme-logo'/>
                        </Box>
                        <Box className="grid-box">
                            <Grid container direction={'row'} xl={12}
                                  className=''>
                                <Grid className='browser-menu' xl={8} md={8} sx={{marginRight: '9px'}}>
                                    <Link
                                        className={`browser-hamburger-menu`}
                                        activeClassName={'browser-hamburger-menu active'}
                                        activeStyle={{color: '#C6A87D'}}
                                        to='/private'
                                        // to={to ? to : '/private'}
                                    >
                                        Private
                                    </Link>
                                    <Link
                                        className={`browser-hamburger-menu`}
                                        activeClassName={'browser-hamburger-menu active'}
                                        to='/ticketed'>
                                        Ticketed
                                    </Link>
                                    <Link
                                        className={`browser-hamburger-menu`}
                                        activeClassName={'browser-hamburger-menu active'}
                                        to='/join-chef'>
                                        Join As Chef
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
                                </Grid>
                                <Grid className='header-search-box browser-search' item xl={3.7} md={3.7}
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
                                    <a href={`callto:${callMobileNumber}`}>
                                        <img src={telLogo} onClick={handlePhoneCall} className='telePhoneLogo'/>
                                    </a>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </AppBar>
                <Box className="mobile-navbar">
                    <Box className={classes.root}>
                        <AppBar position="fixed" className="appbar">
                            <Toolbar>
                                {isShareIcon && <ShareIcon sx={{color: `${isColor ? '#FBFBFB' : '#000000'}`}}/>}
                                {isIcon && <ArrowBackIcon onClick={() => navigate(-1)} sx={{color: `${isColor ? '#FBFBFB' : '#000000'}`}}/>}
                                {isImage &&
                                    <img src={LightThemeIcon} className='mobile-navbar-img'/>}
                                <Typography variant="h6" className={classes.title}
                                            sx={{
                                                color: `${isColor ? '#FBFBFB' : '#000000'}`,
                                                fontFamily: 'ProximaNovaA-Regular',
                                                fontStyle: 'normal',
                                                fontWeight: '400',
                                                fontSize: '24px',
                                                lineHeight: '30px',
                                            }}>
                                    {props.heading}
                                </Typography>
                                <IconButton
                                    edge="end"
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={toggleDrawer(true)}
                                >
                                    <MenuIcon sx={{color: `${isColor ? '#FBFBFB' : '#000000'}`, fontSize: '40px'}}/>
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)} transitionDuration={50}>
                            <div
                                className={classes.list}
                                role="presentation"
                                // onClick={toggleDrawer(false)}
                                // onKeyDown={toggleDrawer(false)}
                            >
                                <List>
                                    <ListItem button sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <CloseIcon sx={{color: '#c6a87d'}}
                                                   onClick={toggleDrawer(false)}/>
                                    </ListItem>
                                    <ListItem button>
                                        <Link className='hamburger-title' to='/'> Home </Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link
                                            className="hamburger-title" to='/private'> Private </Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link
                                            className="hamburger-title" to='/ticketed'> Ticketed </Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link
                                            className="hamburger-title" to='/join-chef'> Join As Chef </Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link
                                            className="hamburger-title" to='/our-chefs'> Our Chefs </Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link
                                            className="hamburger-title" to='/contact-us'> Contact </Link>
                                    </ListItem>
                                </List>
                            </div>
                        </Drawer>
                    </Box>
                </Box>
            </BoxWrapper>
            {/*</BrowserView>*/}

            {/* //! mobile view for the hamburgerMenu. */}


            {/*<Outlet/>*/}
        </React.Fragment>
    )
}

export default Navbar;



