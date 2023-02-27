import React from "react";
import Modal from "@mui/material/Modal";
import {Box, Grid, TextareaAutosize, TextField, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Occasion from "../../assets/images/occasion.png";
import ChefsLogo from "../../assets/images/logo-gold.png";
import ShareIcon from "@mui/icons-material/Share";
import {Link} from "gatsby";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 406,
    boxShadow: 24,
    background: '#FBFBFB',
    '.patron-submitted': {
        padding: '25px 20px'
    },
    '.logo': {
        height: '50px',
        position: 'relative',
        width: '226px',
        objectFit: 'contain',
    },
    '.occasion-cards': {
        backgroundColor: '#101418',
        boxShadow: '0px 12.0863px 18.1295px rgb(0 0 0 / 20%)',
        // marginTop: '20px',
        padding: '30px 10px',
        backgroundImage: `url(${Occasion})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    },
    '.modal-header': {
        display: 'flex',
        justifyContent: 'end'
    },
    '.close': {
        padding: '0px',
        border: '0px',
        background: 'transparent',
        cursor: 'pointer',
    },
    '.occasion-heading': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        // fontWeight: '700',
        fontSize: '20px',
        lineHeight: '25px',
        color: '#FBFBFB',
        marginBottom: '8px'
    },
    '.occasion-title-message': {
        width: '100%',
        background: 'transparent',
        border: '0px',
        // borderBottom: '0.377697px solid #FBFBFB',
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '14px',
        lineHeight: '17px',
        color: '#FBFBFB',
        paddingBottom: '8px',
        outline: 'none',
        borderRadius: '0px',
        paddingLeft: '0px',
    },
    '.personalize': {
        marginBottom: '40px',
    },
    '.char-count': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        // fontWeight: '400',
        fontSize: '24px',
        lineHeight: '17px',
        color: '#FBFBFB',
        textAlign: 'right',
        marginTop: '5px',
        marginBottom: '0px',
    },
    '.receiver-title': {
        marginTop: '20px',
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        // fontWeight: '700',
        fontSize: '20px',
        lineHeight: '30px',
        letterSpacing: '0.06em',
        color: '#080B0E',
    },
    '.r-details': {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#080B0E',
        padding: '16px 0px',
    },
    '.down-invoice': {
        gap: '8px',
        display: 'flex',
    },
    '.down-invoice a': {
        border: '0.5px solid #222222',
        padding: '10px 20px',
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineheight: '19px',
        color: '#080B0E',
        textDecoration: 'none',
    },
    '.down-invoice a:hover': {
        color: '#C6A87D !important',
    },
    '.shareIcon': {
        height: '16px',
        width: '16px'
    },
    '.tell-us': {
        marginTop: '20px',
        display: 'block',
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '19px',
        letterSpacing: '0.06em',
        textDecorationLine: 'underline',
        color: '#080B0E',
    },
    '.tell-us:hover': {
        color: '#C6A87D !important'
    },
    '.rec-name': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        // fontWeight: '700',
        fontSize: '20px',
        lineHeight: '30px',
        letterSpacing: '0.06em',
        color: '#080B0E',
    },
    '.mobile-header': {
        display: "none",
    },
    '.apply_div': {
        marginTop: '50px'
    },
    '.apply_btn': {
        width: 'auto',
        background: '#080B0E',
        border: '0px',
        borderRadius: '0px',
        padding: '19px 10px',
        display: 'block',
        textAlign: 'center',
        textDecoration: 'none',
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#DCD7CB',
    },
    '.apply_btn:hover': {
        color: '#C6A87D !important'
    },
    '.need-help': {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '16px',
        lineHeight: '19px',
        textAlign: 'center',
        color: ' #080B0E',
        marginTop: '16px',
        marginBottom: '0px',
    },
    '.need-help-link': {
        fontWeight: '400',
        fontFamily: 'Proxima Nova',
        color: '#080B0E',
        textAlign: 'center'
    },
    '.need-help-link:hover': {
        color: '#C6A87D !important'
    },
}
const GiftCardModel = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <a href="javascript:void(0);" className="all-photos" data-bs-toggle="modal"
               data-bs-target="#exampleModal" onClick={handleOpen}>Show All Photos</a>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Box className="modal-content">
                        <Box className="patron-submitted">
                            <Box className="modal-header">
                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="close"
                                        onClick={handleClose}>
                                    <CloseIcon/>
                                </button>
                            </Box>
                            <Grid container>
                                <Grid item xs={12} md={12} className="occasion-cards">
                                    <Box className="personalize">
                                        <img src={ChefsLogo} alt="Logo" className="logo footer-logo"/>
                                    </Box>
                                    <Box className="row occasion-title">
                                        <Box className="col-lg-12">
                                            <Typography className="occasion-heading">Happy Wedding</Typography>
                                            <Typography className="occasion-title-message">Wishing you the best of a
                                                lifetime of
                                                memories|</Typography>
                                            <p className="char-count"><span id="rchars1">₹</span>2,500</p>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={12} className="receiver-details">
                                    <Typography className="receiver-title">Gift card sent successfully<br/> to <span
                                        className="rec_name">Sana</span></Typography>
                                    <Typography className="r-details">We’ll let them know you sent it</Typography>
                                    <Box className="down-invoice">
                                        <a href="">Download Invoice</a>
                                        <a href="" style={{padding: '10px'}}><ShareIcon className="shareIcon"/></a>
                                    </Box>
                                    <a href="" className="tell-us">Tell us how this transaction went</a>
                                </Grid>
                            </Grid>
                            <Box className="apply_div">
                                <a href="" className="apply_btn">Browse upcoming experiences</a>
                                <Typography className="need-help">Need Help? <Link href="/contact-us"
                                                                                   className="need-help-link">Contact
                                    Us</Link></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </React.Fragment>
    );
}
export default GiftCardModel;
