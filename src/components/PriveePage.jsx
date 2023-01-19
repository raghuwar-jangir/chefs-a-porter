import React, { useState } from "react";
import { Box, Grid, Link, Stack, styled, Typography } from "@mui/material";
import vector from './../assets/images/priveeSerch.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import priveeDashboardImg from './../assets/images/priveeDashboardImg.png';
import MobileViewPriveeImg from './../assets/images/MobileViewPriveeImg.png';
import ExperienceFormImg from './../assets/images/ExperienceFormImg.png'
import { isMobile, MobileView } from "react-device-detect";
import StepsComponent from "./StepsComponent";
import ExperienceForm from "./ExperienceForm";
import PriveeDining from "./PriveeDining";
import RatingCarousel from "./RatingCarousel";
import Questions from "./Questions";
import PriveeLogo from './../assets/images/priveeLogo.png';
import Footer from "./Footer";

const MainBoxContent = styled(Box)({
    position: 'relative',
    ".header-club": {
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#080B0E',
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
    },
    ".supper-club-image": {
        display: 'block'
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


const BoxWrapper = styled(Box)(() => ({
    ".available-experiences": {
        padding: "40px 120px",
        background: "#080B0E"
    },
    ".experience-form-box": {
        padding: "85px 120px",
        background: "#DCD7CB",
        height: '100%'
    },
    ".display-text": {
        fontWeight: 700,
        fontSize: "36px",
        lineHeight: "36px"
    },
    '.chef-header': {
        fontSize: '36px',
        lineHeight: '45px',
        fontWeight: 700,
        color: '#FBFBFB',
        textAlign: 'center',
        paddingBottom: '40px'
    },

    "@media(width = 1440px)": {
        ".experience-form-box": {
            padding: '38px 120px'
        }
    },

    "@media (min-width: 1px) and (max-width:425px)": {
        ".experience-form-box": {
            padding: "0px",
            background: "#DCD7CB"
        },
        ".available-experiences": {
            padding: "40px 16px",
            background: "#080B0E"
        },
        ".frequently-questions-box": {
            padding: '0px'
        },
        ".display-text": {
            fontSize: "24px",
        },
        '.chef-header': {
            fontSize: '24px',
            lineHeight: '30px',
            paddingBottom: '20px'
        },
    }

}))
const PriveePage = () => {
    const [search, setSearch] = useState(false);

    const handleChange = () => {
        setSearch(true);
    }

    return (
        <React.Fragment>
            <BoxWrapper>
                <MainBoxContent>
                    {/* //! privee header section for title */}
                    <MobileView>
                        <Box className='header-club'>
                            {!search &&
                                <img src={vector} alt="vector" onClick={handleChange} />
                            }
                            <img src={PriveeLogo} alt="privee-logo" className='privee-image' />
                        </Box>
                    </MobileView>
                    {search &&
                        <Box className='search-box'>
                            <input type='search' placeholder='Search supper club, city...' className='supper-search' />
                        </Box>
                    }
                    {isMobile ? (
                        <Box>
                            <img src={MobileViewPriveeImg} alt='privee' width={'100%'} style={{ verticalAlign: 'top' }} />
                        </Box>
                    ) : (
                        <Box>
                            <img src={priveeDashboardImg} alt='privee' width={'100%'} style={{ verticalAlign: 'top' }} />
                        </Box>

                    )}
                    <Box className='super-club-text'>
                        <Typography className="display-text">
                            Let’s Elevate Your Dining.
                        </Typography>
                        <KeyboardArrowDownIcon style={{ fontSize: '40px' }} />
                    </Box>
                </MainBoxContent>
                <StepsComponent />
                <Box>
                    <Grid container spacing={0}>
                        <Grid
                            // className="chef-maco"
                            item md={6} xs={12}>
                            <img src={ExperienceFormImg} alt="img" width={'100%'} style={{ verticalAlign: 'top' }} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box className="experience-form-box" >
                                <ExperienceForm />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box className="available-experiences">
                    <Typography className="chef-header">Available Experiences</Typography>
                    <Grid container spacing={2}>
                        <Grid item xl={3} md={3} sm={6} xs={12}>
                            <PriveeDining />
                        </Grid>
                        <Grid item xl={3} md={3} sm={6} xs={12}>
                            <PriveeDining />
                        </Grid>
                        <Grid item xl={3} md={3} sm={6} xs={12}>
                            <PriveeDining />
                        </Grid>
                        <Grid item xl={3} md={3} sm={6} xs={12}>
                            <PriveeDining />
                        </Grid>
                    </Grid>
                </Box>
                <RatingCarousel backgroundColor="#DCD7CB" />
                <Box className="frequently-questions-box">
                    <Questions />
                </Box>
                <Footer />
                <MobileView>
                    <FooterMobile>
                        <Stack className='footer-text' direction="row" spacing={2}>
                            <Link className='footer-item' to='/'> FAQs </Link>
                            <Link className='footer-item' to='/'> Privacy Policy </Link>
                            <Link className='footer-item' to='/'> T&C </Link>
                        </Stack>
                    </FooterMobile>
                </MobileView>
            </BoxWrapper>
        </React.Fragment >
    )
}
export default PriveePage;