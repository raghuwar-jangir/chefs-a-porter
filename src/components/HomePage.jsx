import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { MobileView } from 'react-device-detect';
import sampleText from './../assets/images/sampleText1.png'
import DiningPage from './DiningPage';
import FrontFood from './FrontFood';
import PrivateProfile from './PrivateProfile';
import PriveeMain from './PriveeMain';
import PriveeImg from './../assets/images/priveeImg.png';
import SupperClubImg from './../assets/images/SupperClubImg.png';
import FoodDetailing from './FoodDetailing';
import RatingCarousel from './RatingCarousel';
import Questions from './Questions';
import Footer from './Footer';
import MainFoodDetailng from './MainFoodDetailng';
import NeedHelp from "./NeedHelp";


const MainBoxContent = styled(Box)({
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#DCD7CB'
})

const BoxWrapper = styled(Box)({
    '.main-container': {
        position: 'relative'
    },
    '.overlay': {
        position: 'absolute', bottom: 0, right: 0, background: '#080B0E', overflow: 'hidden', height: 0, transition: '0.25s ease', color: '#FBFBFB',
    },
    '.supper-overlay': {
        position: 'absolute', bottom: 0, right: 0, background: '#DCD7CB', overflow: 'hidden', height: 0, transition: '0.25s ease', fontSize: '60px', color: '#080B0E'
    },
    '.main-container:hover .overlay': {
        bottom: 0,
        height: '100%',
        padding: '40px 16px'
    },
    '.main-container:hover .supper-overlay': {
        bottom: 0,
        height: '100%',
        padding: '40px 16px'
    },
    '.container': {
        // border: '1px solid red',
        justifyContent: 'center',
        padding: '80px 0px',
        backgroundColor: '#101418'
    },
    '.privee-container': {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    '.supper-container': {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    '.img-box': {
        display: 'flex',
        justifyContent: 'center',
        background: '#101418', padding: '80px 0px',
    },
    '.privee-title-hover': {
        fontSize: '32px',
        textAlign: 'center',
        color: '#FBFBFB',
        paddingTop: '15px'
    },
    '.privee-sub-title': {
        fontSize: '16px',
        textAlign: 'center',
        color: '#FBFBFB',
        padding: '20px',
    },
    '.supper-title-hover': {
        fontSize: '32px',
        textAlign: 'center',
        color: '#080B0E',
        paddingTop: '15px'
    },
    '.supper-sub-title': {
        fontSize: '16px',
        textAlign: 'center',
        color: '#080B0E',
        padding: '20px',
    },
    '.view-btn': {
        fontSize: '16px',
        lineHeight: '19px',
        fontWeight: '600',
        borderRadius: '0',
        backgroundColor: '#C6A87D',
        color: '#080B0E',
        padding: '12px',
        textTransform: 'capitalize',
    },
    '.book-btn': {
        fontSize: '16px',
        lineHeight: '19px',
        fontWeight: '600',
        borderRadius: '0',
        backgroundColor: '#080B0E',
        color: '#FFFFFF',
        padding: '15px',
        textTransform: 'capitalize',
        marginBottom: '20px'

    },

    // !media query for mobile device demo component(Privee and supperClub)

    '@media(min-width: 1px) and (max-width: 425px)': {
        '.img-box': {
            padding: '40px 0px'
        },
        '.privee-demo': {
            width: '100%',
        },
        '.supper-demo': {
            width: '100%',
        },
        '.supperClub-demo': {
            width: '45%',
        },
        '.container': {
            padding: '40px 16px'
        },
        '.supper-title-hover': {
            fontSize: '16px',
        },
        '.supper-sub-title': {
            fontSize: '12px',
            padding: '5px',
        },
        '.main-container:hover .supper-overlay': {
            padding: '10px 16px',
            width: "100%"
        },
        '.book-btn': {
            fontSize: '12px',
            fontWeight: 300,
            padding: '5px',
            marginBottom: '20px'
        },
        '.privee-title-hover': {
            fontSize: '16px',
        },
        '.privee-sub-title': {
            fontSize: '12px',
            padding: '5px',
        },
        '.main-container:hover .overlay': {
            padding: '10px 16px',
            width: "100%"
        },
        '.view-btn': {
            fontSize: '12px',
            fontWeight: 300,
            padding: '5px',
            marginBottom: '16px'
        },
    }
})

const HomePage = () => {
    return (
        <React.Fragment>
            <BoxWrapper>

                {/* //! Header for home Screen with title (Mobile-screen)  */}

                <MobileView>
                    <MainBoxContent>
                        <img src={sampleText} alt="title-text" />
                    </MainBoxContent>
                </MobileView>
                {/* //! Browser view for main-home screen */}

                <FrontFood />
                {/* <Box className='img-box'>
                    <img src={PriveeImg} className="privee-demo" alt="privee" />
                    <img src={SupperClubImg} className="supperClub-demo" alt="supperClub" />
                </Box> */}
                <Grid className='container' container spacing={5}>
                    <Grid className='privee-container' item xs={6}>
                        <Box className='main-container'>
                            <img src={PriveeImg} alt="privee" className="privee-demo" />
                            <Box className='overlay'>
                                <Typography className='privee-title-hover'>Privee </Typography>
                                <Typography className='privee-sub-title'> Dine in the comfort of your home with friends and family
                                </Typography>
                                <Button
                                    fullWidth
                                    className='view-btn'
                                    disableElevation
                                    disableRipple={false}
                                    type="submit"
                                    color="primary"
                                >
                                    View Experiences
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid className='supper-container' item xs={6}>
                        <Box className='main-container'>
                            <img src={SupperClubImg} alt="privee" className="supper-demo" />
                            <Box className='supper-overlay'>
                                <Typography className='supper-title-hover'> Supper Club </Typography>
                                <Typography className='supper-sub-title'> Experience a shared meal at bespoke locations </Typography>
                                <Button
                                    fullWidth
                                    className='book-btn'
                                    disableElevation
                                    disableRipple={false}
                                    type="submit"
                                    color="primary"
                                >
                                    Book a Supper Club
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <PriveeMain title='Continue Browsing' subTitle='Chef s you ve checked out previously' />
                {/* <FoodDetailing /> */}
                <MainFoodDetailng />
                <PriveeMain title='Chefs available for private dining this month' isButtonShow={true} />
                <RatingCarousel />
                <Questions />
                <NeedHelp/>
                <Footer />

                {/* <PrivateProfile /> */}
                {/* <DiningPage /> */}
            </BoxWrapper >

        </React.Fragment >
    )
}

export default HomePage;