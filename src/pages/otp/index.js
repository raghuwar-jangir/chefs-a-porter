import {Box} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import Modal from '@mui/material/Modal';
import '../../assets/styles/fontStyle.css';
import OtpInput from "react-otp-input";

const Otp = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [code, setCode] = React.useState("");

    const handleChange = (code) => setCode(code);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 446,
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
        '.house-no': {
            padding: '0px'
        },
        '.position-relative': {
            position: 'relative',
        },
        '.otp-div h6': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '250',
            fontSize: '14px',
            lineHeight: '17px',
            color: '#FBFBFB',
            marginTop: '0px',
            marginBottom: '0.5rem'
        },
        '.otp-div h6 a': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '17px',
            color: '#C6A87D !important',
        },
        '.enter-otp': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
            padding: '0px 16px',
            marginTop: '30px',
            marginBottom: '16px'
        },
        '.btn-val': {
            padding: '0 16px'
        },
        '#otp': {
            padding: '0px 10px',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row'
        },
        '.mt-2': {
            marginTop: '0.5rem'
        },
        '.form-control': {
            backgroundColor: '#080B0E',
            border: '0px',
            width: '66px',
            height: '66px',
            fontFamily: 'ProximaNovaA-Regular',
            fontWeight: '400',
            color: '#FFFFFF',
        },
        '.form-control:focus-visible': {
            outline: 'unset !important'
        },
        '.text-center': {
            textAlign: 'center !important'
        },
        '.otp-div div span': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '17px',
            color: '#FBFBFB',
            padding: '0 16px',
        },
        '.otp-div button': {
            background: '#C6A87D',
            color: '#080B0E',
            fontFamily: 'ProximaNovaA-Regular',
            fontSize: '20px',
            lineHeight: '24px',
            border: '0px',
            padding: '14.5px 10px',
            width: '100%',
            fontWeight: '400',
            margin: '30px 0px',
            borderRadius: '0px',
        },
        '.content': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'italic',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '17px',
            color: 'rgba(251, 251, 251, 0.6)',
        },

        "@media (min-width: 426px) and (max-width:768px)": {
            width: '400px'
        },
        "@media (min-width: 1px) and (max-width:400px)": {
            width: '310px !important',
        },
        "@media (min-width: 400px) and (max-width:425px)": {
            width: '400px !important',
        },
    }
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
                                <CloseIcon sx={{fontSize: "30px"}}/></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid house-no">
                                <div className="position-relative">
                                    <div className="otp-div">
                                        <h6>A 4 digit code has been sent to <b>+91 987324567</b> & your
                                            email <b>kachwallasana@gmail.com</b> <a
                                                href="javascript:void(0);">Change</a></h6>
                                        <h4 className="enter-otp">Enter OTP</h4>
                                        {/*<div id="otp" className="inputs d-flex flex-row justify-content-between mt-2">*/}
                                        {/*    <input className="text-center form-control" type="text" id="first"*/}
                                        {/*           maxLength="1"/>*/}
                                        {/*    <input className="text-center form-control" type="text" id="second"*/}
                                        {/*           maxLength="1"/>*/}
                                        {/*    <input className="text-center form-control" type="text" id="third"*/}
                                        {/*           maxLength="1"/>*/}
                                        {/*    <input className="text-center form-control" type="text" id="fourth"*/}
                                        {/*           maxLength="1"/>*/}
                                        {/*</div>*/}
                                        {/*<div><span>Resend OTP in 00:32 sec</span></div>*/}
                                        <div id="otp" className="inputs d-flex flex-row justify-content-between mt-2">
                                            <OtpInput
                                                value={code}
                                                onChange={handleChange}
                                                numInputs={4}
                                                separator={<span></span>}
                                                isInputNum={true}
                                                shouldAutoFocus={true}
                                                inputStyle={{
                                                    backgroundColor: '#080B0E',
                                                    border: '0px',
                                                    width: '58px',
                                                    height: '58px',
                                                    fontFamily: 'ProximaNovaA-Regular',
                                                    fontWeight: '400',
                                                    color: '#FFFFFF',
                                                }}
                                                focusStyle={{
                                                    outline: "none"
                                                }}
                                            />
                                        </div>
                                        <div><span style={{paddingTop: '5px'}}>Resend OTP in 00:32 sec</span></div>
                                        <div className="btn-val">
                                            <button className="btn validate" disabled type="submit">Verfiy</button>
                                        </div>
                                    </div>
                                    <div className="card-2">
                                        <div className="content"> By continuing you agree to Chefs-à-Porter’s T&C,
                                            Privacy Policy, Terms of Service
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    )
}
export default Otp
