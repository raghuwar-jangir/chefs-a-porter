import React from 'react'
import { Box, Divider, Stack, styled, Typography } from '@mui/material';
import Rebook from './../assets/images/rebook.png'


const Privee = (props) => {
    const MainContentBox = styled(Box)({
        position: 'relative',
        '.saff-title': {
            fontSize: '24px',
            // fontWeight: '700',
            lineHeight: '30px',
            textAlign: 'center',
            color: '#FBFBFB',
            fontFamily: 'Bon Vivant',
            letterSpacing: '0.06em',
            fontStyle:'normal'
        },
        '.saff-parent': {
            padding: '16px',
            width:'488px',
            height:'88px',
            backgroundColor: '#101418',
        },
        '.sub-description': {
            color: '#C6A87D',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '250',
            padding:'0px 5px'
        },
        '.sub-stack': {
            display: 'flex',
            justifyContent: 'center',
            padding: '12px 0px 0px 0px',
        },
        '.main-chaf-image': {
            height: '426px',
            objectPosition:'top',
            objectFit: 'cover',
            width:'520px'
        },
        '.sub-box': {
            position: 'absolute',
            backgroundColor: '#101418',
            width:'520px',
            top: '0px', left: '0px'
        },
        '.top-box': {
            fontWeight: 300,
            fontSize: '16px',
            padding: '5px 20px',
            textAlign: 'right',
            letterSpacing: '0.02em',
            color: '#C6A87D',
        },

        "@media (min-width: 1px) and (max-width:1024px)": {
            '.saff-title': {
                fontSize: '14px',
            },
            '.sub-description': {
                fontSize: '12px',
            },
            '.saff-parent': {
                padding: '14px 8px'
            },
        },
        "@media (min-width: 320px) and (max-width:1024px)": {
            '.main-chaf-image': {
                height: '220px',
                objectPosition:'top',
                objectFit: 'cover',
                width:'100%'
            },
            '.saff-parent': {
                padding: '16px',
                width:'auto',
                height:'88px',
                backgroundColor: '#101418',
            },
            '.sub-box':{
                width:'100%',
            },
            '.top-box':{
                fontWeight: 300,
                fontSize: '12px',
                padding: '1px 12px',
                textAlign: 'right',
                letterSpacing: '0.02em',
                color: '#C6A87D',
            }
        }

    })


    return (
        <React.Fragment >
            {/* <div style={{ border: '2px solid green' }}> */}
            <MainContentBox >
                <img src={props.image} alt="saffImage" style={{ verticalAlign: 'top' }} width={'100%'} className='main-chaf-image' />
                <Box className='saff-parent'>
                    <Typography className='saff-title'>
                        Madhav Dayal
                    </Typography>
                    <Stack className='sub-stack' direction="row"
                        divider={<Divider orientation="vertical" flexItem color="#C6A87D" />}
                        spacing={0}>
                        <Typography className="sub-description"> Thai </Typography>
                        <Typography className='sub-description'> Japanese </Typography>
                        <Typography className='sub-description'> Parsi </Typography>
                    </Stack>
                    {
                        props.isLabelShow &&
                        <Box className='sub-box'>
                            <Box className='top-box'>
                                <img src={Rebook} alt='RebookImg' width={"12px"} height={"16px"} /> Rebook
                            </Box>
                        </Box>
                    }
                </Box>
            </MainContentBox >
            {/* </div> */}
        </React.Fragment >
    )
}

export default Privee;