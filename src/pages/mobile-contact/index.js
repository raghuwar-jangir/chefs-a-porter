import React from "react";
import {Box, Stack, styled,Typography} from "@mui/material";
import contacts1 from "../../assets/images/contacts1.png"
import contacts2 from "../../assets/images/contacts2.png"
import contacts3 from "../../assets/images/contacts3.png"
import contacts4 from "../../assets/images/contacts4.png"
import contacts5 from "../../assets/images/contacts5.png"
import Footer from "../../components/Footer";
import Navbar from "../navbar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {Link} from "gatsby";
import {isMobile} from "react-device-detect";


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
        paddingTop:'80px',
        '.contacts':{
            padding:'0px 12px'
        },
        '.contacts-detail': {
            background: '#FBFBFB',
            boxShadow: '0px 8px 10px rgb(0 0 0 / 6%)',
            display: 'flex',
            alignItem: 'center',
            padding: '12px 16px',
            marginBottom:'8px'
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
            paddingBottom:'8px'
        },
        '.footer-text': {
            display: 'flex',
            justifyContent: 'space-evenly',
            backgroundColor: "#222222",
            padding: '18px',
        }, '.footer-item': {
            color: '#DCD7CB',
        },
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                {isMobile ? (
                    <Box className='header-club'>
                        <Typography className="chef-mobile-heading">Contacts</Typography>
                    </Box>
                ) : ''}
                <Navbar/>
                <Box className="joinaschef">
                    <Box className="container-fluid">
                        <Box className="contacts">
                            <Typography className="heading">Recently Activity</Typography>
                                {personDetails1.map((item, index) => (
                                    <Box key={index} className="contacts-detail">
                                        <img src={item.img} className="contacts-img"/>
                                        <Box style={{marginLeft:'10px'}}>
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
                                        <Box style={{marginLeft:'10px'}}>
                                            <Typography className='sub-details'>{item.name}</Typography>
                                            <Typography className='sub-details'>{item.mobileNo}</Typography>
                                        </Box>
                                    </Box>
                                ))}
                        </Box>
                    </Box>
                </Box>
                <Footer/>
                <Box className="footer-end">
                    <Stack className='footer-text'
                           Boxider={<FiberManualRecordIcon sx={{fontSize: '6px', color: '#C6A87D'}}/>}
                           direction="row" spacing={2}>
                        <Link className='footer-item' to='/'> FAQs </Link>
                        <Link className='footer-item' to='/'> Privacy Policy </Link>
                        <Link className='footer-item' to='/'> T&C </Link>
                    </Stack>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default MobileContact