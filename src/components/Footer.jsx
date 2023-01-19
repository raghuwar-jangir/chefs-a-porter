import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import footerLogo from './../assets/images/footerLogo.png';
import { BrowserView } from 'react-device-detect';


const Footer = () => {
    const BoxWrapper = styled(Box)(() => ({
        display: 'flex',
        justifyContent: 'space-between',
        padding: '30px 120px',
        background: '#101418',
        color: '#fff',
        '.main-heading': {
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '30px',
            color: '#FBFBFB',
            textAlign: 'left',
            padding: '10px 0px'
        },
        '.details': {
            fontWeight: 250,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#FBFBFB',
            padding: '10px 0px'
        },
        '.sub-div': {
            display: 'flex',
            justifyContent: 'space-between',
            width: '50%'
        },
        // '@media (max-width:1280px)': {
        //     '.sub-div': {
        //         width: '52.5%'
        //     },
        // }
    }))
    return (
        <React.Fragment>
            <BrowserView>
                <BoxWrapper>
                    <Box>
                        <img src={footerLogo} alt='footer-Logo' className='footerLogo' style={{ padding: '10px 0px 20px 0px' }} />
                        <Typography className='details'>About Us</Typography>
                        <Typography className='details'>Contact Us</Typography>
                    </Box>
                    <Box className='sub-div'>
                        <Box>
                            <Typography className='main-heading'>Experiences</Typography>
                            <Typography className='details'>Privee</Typography>
                            <Typography className='details'>Supper Clubs</Typography>
                        </Box>
                        <Box>
                            <Typography className='main-heading'>Join Us</Typography>
                            <Typography className='details'>as Chef</Typography>
                            <Typography className='details'>as Sponsor Partner</Typography>
                            <Typography className='details'>as Vendor</Typography>
                        </Box >
                        <Box>
                            <Typography className='main-heading'>Bookings</Typography>
                            <Typography className='details'>Corporate Bookings</Typography>
                            <Typography className='details'>Become a Patron</Typography>
                            <Typography className='details'>as Vendor</Typography>
                        </Box >
                    </Box >
                </BoxWrapper >
            </BrowserView >
        </React.Fragment >
    )
}
export default Footer;