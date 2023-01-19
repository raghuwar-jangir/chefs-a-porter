import React, { useState } from 'react';
import { Box, Link, Stack, styled, Typography } from '@mui/material';
import { MobileView, isMobile } from 'react-device-detect';
import sampleText from './../assets/images/SupperClub.png'
import vector from './../assets/images/vector.svg'
import supperClubHome from './../assets/images/supperClubHome.png';
import SupperStepper from './SupperStepper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RatingCarousel from './RatingCarousel';
import GalleryCarousel from './GalleryCarousel';
import ExpectactionSection from './ExpectationSection';
import supperBrowser from './../assets/images/supperBrowser.png';
import SupperClubChefCarousel from './SupperClubChefCarousel';
import Questions from './Questions';
import Footer from './Footer';

const MainBoxContent = styled(Box)({
    position: 'relative',
    ".header-club": {
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#DCD7CB',
    },
    '.super-club-text': {
        fontSize: '24px',
        lineHeight: '36px',
        fontWeight: '700',
        padding: '0px 31px',
        position: 'absolute',
        color: '#FBFBFB',
        width: '100%',
        bottom: '47px',
        textAlign: 'center',
    }
})

const FooterMobile = styled(Box)({
    '.footer-text': {
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: "#222222",
        padding: '18px',

        '.footer-item': {
            color: '#DCD7CB',
        }
    }
})

const SupperClub = () => {

    const [search, setSearch] = useState(false);

    const handleChange = () => {
        setSearch(true);
    }

    return (
        <React.Fragment>
            <MainBoxContent>

                {/* //! header for supper-club component with search (mobileView)  */}

                <MobileView>
                    <Box className='header-club'>
                        {!search &&
                            <img src={vector} alt="vector" onClick={handleChange} />
                        }
                        <img src={sampleText} alt="title" className='supper-club-image' />
                    </Box>
                </MobileView>

                {search &&
                    <Box className='search-box'>
                        <input type='search' placeholder='Search supper club, city...' className='supper-search' />
                    </Box>
                }

                {
                    (isMobile) ?
                        (<Box>
                            <img src={supperClubHome} alt='supper-club' width={'100%'} />
                        </Box>
                        ) :
                        (
                            <Box>
                                <img src={supperBrowser} width={'100%'} alt='supper-' style={{ verticalAlign: 'top' }} />
                            </Box>
                        )
                }

                <Typography className='super-club-text'>
                    We believe in good food for all!
                    <KeyboardArrowDownIcon fontSize='medium' />
                </Typography>
            </MainBoxContent>

            <SupperStepper />
            <ExpectactionSection />
            <RatingCarousel />
            <GalleryCarousel />
            <SupperClubChefCarousel />
            <Questions isLightTheme={true} />

            <Footer />

            {/* <ChefCarousel /> */}
            {/* <PriveeDining /> */}
            {/* <ExperienceForm /> */}
            {/* <NavigationPopUp /> */}

            {/* //! mobileView footer for supperClub */}

            <MobileView>
                <FooterMobile>
                    <Stack className='footer-text' direction="row" spacing={2}>
                        <Link className='footer-item' to='/'> FAQs </Link>
                        <Link className='footer-item' to='/'> Privacy Policy </Link>
                        <Link className='footer-item' to='/'> T&C </Link>
                    </Stack>
                </FooterMobile>
            </MobileView>
            {/* </MobileView> */}
        </React.Fragment >
    )
}

export default SupperClub;