import React from "react";
import {Box, Stack, styled, TextField, Typography} from "@mui/material";
import contacts1 from "../../assets/images/contacts1.png"
import contacts2 from "../../assets/images/contacts2.png"
import contacts3 from "../../assets/images/contacts3.png"
import contacts4 from "../../assets/images/contacts4.png"
import contacts5 from "../../assets/images/contacts5.png"
import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarComponent";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {Link} from "gatsby";
import {isMobile} from "react-device-detect";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FooterEnd from "../../components/FooterEndSection";

const personDetails1 = [
    {
        name: "Cody Fisher",
        mobileNo: "+91234567890",
        img: contacts1
    }, {
        name: "Jane Cooper",
        mobileNo: "+91234567890",
        img: contacts2
    }, {
        name: "Jane Cooper",
        mobileNo: "+91234567890",
        img: contacts3
    },
];
const personDetails2 = [
    {
        name: "Cody Fisher",
        mobileNo: "+91234567890",
        img: contacts4
    }, {
        name: "Jane Cooper",
        mobileNo: "+91234567890",
        img: contacts5
    },
]


const MobileContact = () => {
    const BoxWrapper = styled(Box)(() => ({
        backgroundColor: 'rgba(220, 215, 203, 1)!important',
        paddingTop: '80px',
        '.contacts': {
            padding: '0px 12px'
        },
        '.contacts-detail': {
            background: '#FBFBFB',
            boxShadow: '0px 8px 10px rgb(0 0 0 / 6%)',
            display: 'flex',
            alignItem: 'center',
            padding: '12px 16px',
            marginBottom: '8px'
        },
        '.heading': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '19px',
            margin: '20px 0px'
        },
        '.contacts-img': {
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            borderRadius: '100px',
        },
        '.sub-details': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#222222',
            display: 'block',
            paddingBottom: '8px'
        },
        '.form-inline': {
            display: 'none'
        },

        '@media(min-width: 320px) and (max-width: 375px)': {
            '.mobile-heading': {
                paddingRight: '110px'
            },
        },

        '@media(min-width: 320px) and (max-width: 768px)': {
            padding: "0px 0px",
            backgroundColor: '#FBFBFB !important',
            '.joinaschef': {
                backgroundColor: '#FBFBFB'
            },
            '.mobile-header': {
                display: "flex",
                alignItems: 'center',
                padding: '12px',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(220, 215, 203, 1)!important',
            },
            '.back-arw': {
                textDecoration: 'none',
                color: 'rgba(0, 0, 0, 0.9)',
            },
            '.mobile-heading': {
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '20px',
                lineHeight: '24px',
                textDecoration: 'none',
                color: 'rgba(0, 0, 0, 0.9)',
            },
            '.form-inline': {
                width: 'auto',
                display: 'block',
                padding: '20px 12px 0px'
            },
            '.form-group': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            },
            '.form-label': {
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '19px',
                color: '#222222',
            },
            '.css-nz481w-MuiInputBase-input-MuiInput-input': {
                padding: '0px',
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '19px',
                color: '#222222',
            },
        },
        '@media(min-width: 769px) and (max-width: 2560px)': {
            '.mobile-header': {
                display: 'none'
            }
        }
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                {/*{isMobile ? (*/}
                {/*    <Box className="mobile-header">*/}
                {/*        <a href="/gift-cards" className="back-arw"><ArrowBackIcon/></a>*/}
                {/*        <Typography><a className="mobile-heading" style={{textAlign: 'center !important'}}>Contacts</a></Typography>*/}
                {/*    </Box>*/}
                {/*) : <Navbar/>}*/}
                <Navbar heading="Contacts" isIcon={true}/>
                <Box className="joinaschef">
                    <form className="form-inline">
                        <Box className="form-group">
                            <Typography className='form-label'>To</Typography>
                            <TextField className='form-control' sx={{width: '100%', paddingLeft: '12px'}}
                                       size='small'
                                       placeholder='Search by name or number' variant="standard"
                                       InputProps={{
                                           disableUnderline: true,
                                       }}/>
                        </Box>
                    </form>
                    <Box className="contacts">
                        <Typography className="heading">Recently Activity</Typography>
                        {personDetails1.map((item, index) => (
                            <Box key={index} className="contacts-detail">
                                <img src={item.img} className="contacts-img"/>
                                <Box style={{marginLeft: '10px'}}>
                                    <Typography className='sub-details'>{item.name}</Typography>
                                    <Typography className='sub-details'>{item.mobileNo}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Box className="col-lg-12 contacts">
                        <Typography className="heading">Other Contacts</Typography>
                        {personDetails2.map((item, index) => (
                            <Box key={index} className="contacts-detail">
                                <img src={item.img} alt="" className="contacts-img"/>
                                <Box style={{marginLeft: '10px'}}>
                                    <Typography className='sub-details'>{item.name}</Typography>
                                    <Typography className='sub-details'>{item.mobileNo}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Footer/>
                <FooterEnd/>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default MobileContact