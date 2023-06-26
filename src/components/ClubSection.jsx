import {styled} from "@mui/system";
import {Box, Button, Grid, Typography} from "@mui/material";
import React, { useContext } from "react";
import CmsContext from "../context/CmsContext";
import { isImageOrVideo } from "../helpers";


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
        '.main-container': {
            width:'100%',
        },
        '.privee-demo': {
            width: '100%',
            height:'100%',
            objectFit: 'cover',
        },
        '.supper-demo': {
            width: '100%',
            height:'100%',
            objectFit: 'cover',
        },
        '.supperClub-demo': {
            width: '45%',
        },
        '.container': {
            padding: '25px',
            display: 'flex',
        },
        '.privee-container': {
            height:'156px'
        },
        '.supper-container': {
            height:'156px'
        },
        '.supper-title-hover': {
            fontSize: '16px',
            paddingTop:'5px'
        },
        '.supper-sub-title': {
            fontSize: '12px',
            padding: '3px',
            '-webkit-line-clamp': '3',
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
            display: '-webkit-box'
        },
        '.main-container:hover .supper-overlay': {
            padding: '1px 10px',
            // height: 'auto',
            width:'auto',
            bottom: '-1px'
        },
        '.book-btn': {
            fontSize: '12px',
            fontWeight: 300,
            padding: '5px',
            marginBottom: '0px',
            marginTop: '-30px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            textTransform: 'none'
        },
        '.privee-title-hover': {
            fontSize: '16px',
            paddingTop:'5px'
        },
        '.privee-sub-title': {
            fontSize: '12px',
            padding: '3px',
            '-webkit-line-clamp': '3',
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
            display: '-webkit-box'
        },
        '.main-container:hover .overlay': {
            padding: '1px 10px',
            // height: 'auto',
            width:'auto',
            bottom: '-1px'
        },
        '.view-btn': {
            fontSize: '12px',
            fontWeight: 300,
            padding: '5px',
            marginBottom: '0px',
            marginTop: '10px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis', 
            textTransform: 'none'
        },
    },
})

const ClubSection = () => {
    const { data } = useContext(CmsContext);
    
    return (
        <React.Fragment>
            <BoxWrapper>
                <Grid className='container' container spacing={2} sx={{width:'auto'}}>
                    <Grid className='privee-container' item xs={6}>
                        <Box className='main-container'>
                            {isImageOrVideo(data.home.booking_types.privee.image) === "video" ? (
                                <video className="privee-demo" autoPlay muted loop>
                                    <source
                                    src={data.home.booking_types.privee.image}
                                    type="video/mp4"
                                    />
                                </video>
                                ) : (
                                <img
                                    src={data.home.booking_types.privee.image}
                                    className="privee-demo"
                                />
                                )}
                            <Box className='overlay'>
                                <Typography className='privee-title-hover'>{data.home.booking_types.privee.title.split(" ")[0]} </Typography>
                                <Typography className='privee-sub-title'>  {data.home.booking_types.privee.description}
                                </Typography>
                                <Button
                                    fullWidth
                                    className='view-btn'
                                    disableElevation
                                    disableRipple={false}
                                    type="button"
                                    color="primary"
                                    href="/private"
                                >
                                    {data.home.booking_types.privee.button_text}
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid className='supper-container' item xs={6}>
                        <Box className='main-container'>
                        {isImageOrVideo(data.home.booking_types.supper_club.image) ===
                            "video" ? (
                                <video className="supper-demo" autoPlay muted loop>
                                <source
                                src={data.home.booking_types.supper_club.image}
                                type="video/mp4"
                                />
                                </video>
                                ) : (
                                    <img
                                    src={data.home.booking_types.supper_club.image}
                                    className="supper-demo"
                                    />
                                    )}
                            <Box className='supper-overlay'>
                                <Typography className='supper-title-hover'> {data.home.booking_types.supper_club.title.split(" ")[0]} </Typography>
                                <Typography className='supper-sub-title'>  {data.home.booking_types.supper_club.description} </Typography>
                                <Button
                                    fullWidth
                                    className='book-btn'
                                    disableElevation
                                    disableRipple={false}
                                    type="button"
                                    color="primary"
                                    href="/ticketed"
                                >
                                   {data.home.booking_types.supper_club.button_text}
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