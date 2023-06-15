import {styled} from "@mui/system";
import {Box, Button, Grid, Typography} from "@mui/material";
import PriveeImg from "../assets/images/priveeImg.png";
import SupperClubImg from "../assets/images/SupperClubImg.png";
import React from "react";


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
        width:'auto',
        padding: '20px 16px'
    },
    '.main-container:hover .supper-overlay': {
        bottom: 0,
        height: '100%',
        width:'auto',
        padding: '20px 16px'
    },
    '.container': {
        display:'none',
        // border: '1px solid red',
        justifyContent: 'center',
        padding: '20px 10px',
        backgroundColor: '#101418'
    },
    '.privee-container': {
        display: 'flex',
        justifyContent: 'flex-end',
        width:'auto',
    },
    '.supper-container': {
        display: 'flex',
        justifyContent: 'flex-start',
        width:'auto'
    },
    '.img-box': {
        display: 'flex',
        justifyContent: 'center',
        background: '#101418',
        padding: '80px 0px',
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
        width:'100%',
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
        width:'100%',
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
            height:'100%'
        },
        '.supper-demo': {
            width: '100%',
            height:'100%'
        },
        '.supperClub-demo': {
            width: '45%',
        },
        '.container': {
            padding: '25px'
        },
        '.privee-container': {
            height:'156px'
        },
        '.supper-container': {
            height:'156px'
        },
        '.supper-title-hover': {
            fontSize: '16px',
            paddingTop:'0px'
        },
        '.supper-sub-title': {
            fontSize: '12px',
            padding: '0px',
        },
        '.main-container:hover .supper-overlay': {
            padding: '10px',
            // height: 'auto',
            width:'auto',
        },
        '.book-btn': {
            fontSize: '12px',
            fontWeight: 300,
            padding: '5px',
            marginBottom: '0px'
        },
        '.privee-title-hover': {
            fontSize: '16px',
            paddingTop:'0px'
        },
        '.privee-sub-title': {
            fontSize: '12px',
            padding: '5px',
        },
        '.main-container:hover .overlay': {
            padding: '10px',
            // height: 'auto',
            width:'auto',
        },
        '.view-btn': {
            fontSize: '12px',
            fontWeight: 300,
            padding: '5px',
            marginBottom: '0px'
        },
    },

    '@media(min-width: 1px) and (max-width: 768px)': {
        '.container':{
            display:'flex'
        }
    },


})

const ClubSection = () => {

    return (
        <React.Fragment>
            <BoxWrapper>
                <Grid className='container' container spacing={2} sx={{width:'auto'}}>
                    <Grid className='privee-container' item xs={6}>
                        <Box className='main-container'>
                            <img src={PriveeImg} alt="privee" className="privee-demo"/>
                            <Box className='overlay'>
                                <Typography className='privee-title-hover'>Private </Typography>
                                <Typography className='privee-sub-title'> Dine in the comfort of your home with friends
                                    and family
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
                            <img src={SupperClubImg} alt="privee" className="supper-demo"/>
                            <Box className='supper-overlay'>
                                <Typography className='supper-title-hover'> Ticketed Experience </Typography>
                                <Typography className='supper-sub-title'> Experience a shared meal at bespoke
                                    locations </Typography>
                                <Button
                                    fullWidth
                                    className='book-btn'
                                    disableElevation
                                    disableRipple={false}
                                    type="submit"
                                    color="primary"
                                >
                                    Book a Ticketed Experience
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </BoxWrapper>

        </React.Fragment>
    )
}

export default ClubSection