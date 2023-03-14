import React from "react";
import Modal from "@mui/material/Modal";
import output from "../../assets/images/output.png";
import dateGold from "../../assets/images/date-gold.png";
import download from "../../assets/images/download.png";
import chefImg from "../../assets/images/chef-img.png";
import location from "../../assets/images/location.png";
import people from "../../assets/images/people.png";
import done from "../../assets/images/done.png";
import support from "../../assets/images/support.png";
import CloseIcon from '@mui/icons-material/Close';
import {Box, Grid} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../../assets/styles/fontStyle.css";
import "../../assets/styles/searchBar.css";


const CustomerDetails = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 841,
        boxShadow: 24,
        '.modal-content': {
            backgroundColor: '#101418!important',
            boxShadow: '0px 8px 12px rgb(0 0 0 / 16%)',
            padding: '40px 20px',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'auto',
            backgroundClip: 'paddingBox',
            outline: '0'
        },
        ".close": {
            border: 'none !important',
            background: "transparent",
            borderRadius: "0px",
            color: "#FBFBFB",
            cursor: 'pointer'
        },
        '.modal-header': {
            padding: '0px',
            // marginBottom: '30px',
            borderBottom: 'none',
            display: 'flex',
            position: 'relative',
            justifyContent: 'flex-end',
        },
        '.booking-details': {
            textAlign: 'center'
        },
        '.hr': {
            color: 'rgba(255, 255, 255, 0.6)',
            opacity: '1',
            borderTop: '1px solid'
        },
        '.booking-details h3': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '25px',
            color: '#FBFBFB',
            marginBottom: '16px',
            marginTop: '0px',
        },
        '.booking-details span': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            marginBottom: '16px',
            display: 'block'
        },
        '.booking-details p': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#FBFBFB',
            textAlign: 'center',
            marginBottom: '16px',
            marginTop: '0px',
        },
        '.booking-details a': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#C6A87D',
            textAlign: 'center',
            display: 'block',
            marginBottom: '16px',
        },
        '.booking-details a img': {
            width: '18px',
            height: '18px',
            objectFit: 'contain',
            marginRight: '8px',
            verticalAlign: 'text-top',
        },
        '.booking-details button': {
            border: '0.5px solid #C6A87D',
            padding: '16px',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '17px',
            color: '#FBFBFB',
            background: 'transparent',
            cursor: 'pointer'
        },
        '.booking-details button img': {
            width: '16px',
            height: '16px',
            marginRight: '8px',
            filter: 'brightness(100)',
            verticalAlign: 'text-top',
        },
        '.output': {
            width: '56px',
            height: '56px',
            objectFit: 'contain',
            marginBottom: '16px',
        },
        '.bookingBox': {
            marginTop: '40px',
        },
        '.booking-summary': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            marginBottom: '16px',
            marginTop: '0px'
        },
        '.chef-edit': {
            display: 'flex',
            placeItems: 'center',
            position: 'relative',
            marginBottom: '20px',
        },
        '.chef-edit img': {
            width: '48px',
            height: '48px',
            objectFit: 'cover',
            borderRadius: '43px',
        },
        '.chef-edit h5': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            marginLeft: '10px',
        },
        '.chef-profile div': {
            marginBottom: '16px',
            display: 'flex',
        },
        '.grid-box': {
            borderLeft: '10px solid #101418',
            background: '#080B0E',
            padding: '16px',
        },
        '.chef-profile img': {
            height: '16px',
            width: '16px',
            objectFit: 'contain',
            marginRight: '10px',
        },
        '.chef-profile span': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
        },
        '.experience-breakup': {
            border: '0.5px solid #DCD7CB',
            padding: '16px 16px 0px',
        },
        '.experience-breakup:last-child': {
            marginTop: '16px',
        },
        '.ex-details': {
            position: 'relative'
        },
        '.ex-details h5': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '25px',
            color: '#FBFBFB',
            marginBottom: '10px',
            marginTop: '0px'
        },
        '.i': {
            position: 'absolute',
            right: '0px',
            top: '0px',
            color: '#FBFBFB',
            '-webkit-text-stroke': '1px',
        },
        '.table-box span': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
            padding: '0px 0px 16px'
        },
        '.price': {
            fontFamily: 'ProximaNovaA-Regular !important',
            fontStyle: 'normal !important',
            fontWeight: '600 !important',
            fontSize: '14px !important',
            lineHeight: '17px !important',
            color: '#FBFBFB',
            textAlign: 'right !important',
            padding: '0px 0px 16px'
        },
        ".table": {
            marginTop: "20px",
            marginBottom: "0px",
        },
        ".table:last-child": {
            marginTop: "0px",
            marginBottom: "0px",
        },
        ".table-box": {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
        },
        ".border": {
            borderTop: "1px solid rgba(255, 255, 255, 0.6)",
        },
        '.grand-total': {
            padding: '16px 0px !important'
        },
        '.tax': {
            textAlign: 'left !important',
            fontFamily: 'Proxima Nova Alt !important',
            fontStyle: 'normal !important ',
            fontWeight: '300 !important',
            fontSize: '14px !important',
            lineHeight: '17px !important',
            color: '#FBFBFB',
        },


        "@media (min-width: 426px) and (max-width:768px)": {
            width: '500px'
        },
        "@media (min-width: 1px) and (max-width:400px)": {
            width: '320px !important',
        },
        "@media (min-width: 400px) and (max-width:425px)": {
            width: '400px !important',
        },
    };

    return (
        <React.Fragment>
            <button onClick={handleOpen}>Booking success</button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="close"
                                    onClick={handleClose}>
                                <CloseIcon sx={{fontSize: "25px"}}/></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="booking-details">
                                    <img src={output} alt="" className="output"/>
                                    <h3>Booking Successful</h3>
                                    <span>Booking ID - 123456</span>
                                    <p>We look forward to serving you a conscious <br/>dining experience!</p>
                                    <a href="javascript:void(0);"><img src={download} alt=""/>Download
                                        Invoice</a>
                                    <button className="add-cal"><img src={dateGold} alt=""/>Add to
                                        calender
                                    </button>
                                </div>
                                <div className="bookingBox">
                                    <Grid container className="row booking-sum">
                                        <Grid item xl={6} lg={6} xs={6} md={6} sm={12} xs={12} className="grid-box">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h4 className="booking-summary">Booking Summary</h4>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="chef-edit">
                                                        <img src={chefImg} alt=""/>
                                                        <h5>Chef Mako Ravindran</h5>
                                                    </div>
                                                    <div className="chef-profile">
                                                        <div>
                                                            <img src={dateGold} alt=""/>
                                                            <span>April 9 | 7:30 PM - 10 PM</span>
                                                        </div>
                                                        <div>
                                                            <img src={location} alt=""/>
                                                            <span>Silver bar, Downtown</span>
                                                        </div>
                                                        <div>
                                                            <img src={people} alt=""/>
                                                            <span>6 Diners</span>
                                                        </div>
                                                    </div>
                                                    <hr className="hr"/>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="chef-profile done-div">
                                                        <div>
                                                            <img src={done} alt=""/>
                                                            <span>An email confirmation has been sent to kachwallsana@gmail.com <br/>and SMS sent to 23456745</span>
                                                        </div>
                                                        <div>
                                                            <img src={support} alt=""/>
                                                            <span>Our team and Chef will get in touch with you to discuss menu <br/>(allergen+protein info), venue, set up and pricing</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xl={6} lg={6} xs={6} md={6} sm={12} xs={12} className="grid-box">
                                            <div className="per-dinner">
                                                <div className="experience-breakup">
                                                    <div className="ex-details">
                                                        <h5>Payment Summary</h5>
                                                        <KeyboardArrowDownIcon className="i"/>
                                                    </div>
                                                    <div className="table table-borderless">
                                                        <div className="table-box">
                                                                <span>
                                                                    Food
                                                                </span>
                                                            <span className="price">
                                                                    ₹ 2,500
                                                                </span>
                                                        </div>
                                                        <div className="table-box">
                                                                <span>
                                                                    Service Charge
                                                                </span>
                                                            <span className="price">
                                                                    ₹ 2,500
                                                                </span>
                                                        </div>
                                                        <div className="table-box">
                                                                <span>
                                                                   Tax
                                                                </span>
                                                            <span className="price">
                                                                    ₹ 2,500
                                                                </span>
                                                        </div>
                                                        <div className="table-box border">
                                                                <span className="grand-total">
                                                                    Grand Total
                                                                </span>
                                                            <span className="grand-total">
                                                                    ₹ 2,5000
                                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="experience-breakup">
                                                    <div className="table table-borderless">
                                                        <div className="table-box">
                                                                <span>
                                                                    State Bank of India
                                                                </span>
                                                            <span className="price">
                                                                    ₹ 2,500
                                                                </span>
                                                        </div>
                                                        <div className="table-box">
                                                                <span className="tax">
                                                                    04 Nov 11:14 AM
                                                                </span>
                                                        </div>
                                                        <div className="table-box">
                                                                <span className="tax">
                                                                   Transaction ID 12434454689
                                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    )
}
export default CustomerDetails;