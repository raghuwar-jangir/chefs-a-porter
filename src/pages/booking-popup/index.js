import React from "react";
import "../../assets/styles/fontStyle.css";
import "../../assets/styles/searchBar.css";
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
import {Box, Grid, styled} from "@mui/material";


const CustomerDetails = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const BoxWrapper = styled(Box)(() => ({}))

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '841px',
        height: '800px',
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
            marginBottom: '30px',
            borderBottom: 'none',
            display: 'flex',
            position: 'relative',
            justifyContent: 'flex-end',
        },
        '.booking-details': {
            textAlign: 'center'
        },
        '.booking-details h3': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '25px',
            color: '#FBFBFB',
            marginBottom: '16px',
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
        '.booking-sum h4': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            marginBottom: '16px',
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
            <BoxWrapper>
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
                                            <Grid xl={6}>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <h4>Booking Summary</h4>
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
                                                        <hr/>
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
                                            <Grid xl={6}>
                                                <div className="per-dinner">
                                                    <div className="experience-breakup">
                                                        <div className="ex-details">
                                                            <h5>Payment Summary</h5>
                                                            <i className="bi bi-chevron-down"/>
                                                        </div>
                                                        <table className="table table-borderless">
                                                            <tbody>
                                                            <tr>
                                                                <th scope="row">Food</th>
                                                                <td>₹ 2,500</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Service Charge</th>
                                                                <td>₹ 2,500</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Tax</th>
                                                                <td>₹ 2,500</td>
                                                            </tr>
                                                            <tr className="grand-total">
                                                                <th scope="row">Grand Total</th>
                                                                <td>₹ 2,5000</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="experience-breakup">
                                                        <table className="table table-borderless">
                                                            <tbody>
                                                            <tr>
                                                                <th scope="row">State Bank of India</th>
                                                                <td>₹ 2,500</td>
                                                            </tr>
                                                            <tr className="tax tax1">
                                                                <td>04 Nov 11:14 AM</td>
                                                            </tr>
                                                            <tr className="tax">
                                                                <td>Transaction ID 12434454689</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
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
            </BoxWrapper>
        </React.Fragment>
    )
}
export default CustomerDetails;