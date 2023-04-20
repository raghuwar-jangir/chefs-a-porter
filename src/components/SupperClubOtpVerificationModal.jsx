import {Box} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import OTPInput from "react-otp-input";
import Modal from "@mui/material/Modal";
import React, {useContext, useState, useEffect} from "react";
import UsersContext from "../context/UsersContext";
import OtpContext from "../context/OtpContext";
import * as _ from "lodash";
import {navigate} from "gatsby";
import Cookies from "js-cookie";

const SupperClubOtpVerificationModal = (props) => {
    const {
        openOtp,
        handleCloseOtp,
        contactNumber,
    } = props;
    const {
        countOfResendOtp, setVerifyOtp,
        setOtpNumber,
        setResendOtp,
        setIsVerifiedOtpApiCall,
        setIsReSendOtpApiCall,
        setIsBookingAPiCall,
    } = useContext(OtpContext);
    const [otp, setOtp] = useState('')
    const [seconds, setSeconds] = useState(10);
    const [eventData, setEventData] = useState()
    const cookieValue = Cookies.get('eventData');
    const supperClubBookingIdCookieValue = Cookies?.get('supperClubBookingId');
    const supperClubBookingId = supperClubBookingIdCookieValue?.replaceAll('"', '')

    useEffect(() => {
        if (cookieValue) {
            setEventData(JSON.parse(cookieValue));
        }
    }, [cookieValue])

    //otp timer
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                clearInterval(interval);
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    const handleClick = () => {
        if (!_.isEmpty(otp)) {
            setVerifyOtp(otp);
            setIsVerifiedOtpApiCall(true);
            setIsBookingAPiCall(true);
            navigate(`/ticketed-booking-summary/${supperClubBookingId}`);
        }
    }

    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const otpRegex = /^[0-9]{6}$/; // 6 digits OTP regex
        if (_.isEmpty(otp)) {
            setError('Please Enter OTP');
        } else if (!otpRegex.test(otp)) {
            setError('Please Enter Valid OTP');
        } else {
            setError('Invalid Otp');
        }
    };

    const styleOtp = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        boxShadow: 24,
        '.modal-content': {
            backgroundColor: '#DCD7CB!important',
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
            color: "#080B0E",
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
            color: '#080B0E',
            marginTop: '0px',
            marginBottom: '0.5rem'
        },
        '.otp-div h6 a': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '17px',
            color: '#080B0E !important',
        },
        '.enter-otp': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
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
            justifyContent: 'space-evenly',
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
            color: '#080B0E',
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
            color: '#080B0E',
            padding: '0 16px',
        },
        '.otp-div button': {
            cursor: 'pointer',
            background: '#080B0E',
            color: '#FBFBFB',
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
            textAlign: 'center',
            color: '#080B0E',
        },
        '.term': {
            fontWeight: '400',
            fontFamily: 'ProximaNovaA-Regular',
            textDecoration: 'underline'
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
        <Modal
            open={openOtp}
            onClose={handleCloseOtp}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={styleOtp}>
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="close"
                                onClick={handleCloseOtp}>
                            <CloseIcon sx={{fontSize: "30px"}}/></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid house-no">
                            <div className="position-relative">
                                <div className="otp-div">
                                    <h6>A 6 digit code has been sent to <b>+91 {contactNumber}</b> & your
                                        email
                                        <b> {eventData?.email} </b>
                                        <a
                                            href="javascript:void(0);">Change</a></h6>
                                    <h4 className="enter-otp">Enter OTP</h4>
                                    <form onSubmit={handleSubmit}>
                                        <div id="otp"
                                             className="">
                                            <OTPInput
                                                value={otp}
                                                onChange={(number) => {
                                                    setOtp(number)
                                                }}
                                                numInputs={6}
                                                separator={<span style={{padding: '0px', width: '1rem'}}></span>}
                                                isInputNum={true}
                                                shouldAutoFocus={true}
                                                inputStyle={{
                                                    backgroundColor: '#FBFBFB',
                                                    border: '0px',
                                                    width: '37px',
                                                    height: '38px',
                                                    fontFamily: 'ProximaNovaA-Regular',
                                                    fontWeight: '400',
                                                    color: '#080B0E',
                                                }}
                                                focusStyle={{
                                                    outline: "none"
                                                }}
                                            />
                                        </div>
                                        {error && <div className="error"><span>{error}</span></div>}
                                        {seconds > 0 ? (
                                            <div><span>Resend OTP in : {seconds} sec</span></div>
                                        ) : (<div><span>
                                            {countOfResendOtp < 2 && (
                                                <a onClick={() => {
                                                    setIsReSendOtpApiCall(true);
                                                    setResendOtp(contactNumber);
                                                }}
                                                   style={{
                                                       textDecoration: 'underline',
                                                       cursor: 'pointer'
                                                   }}>Resend OTP</a>
                                            )}
                                                {countOfResendOtp >= 2 &&
                                                    <div><span>you can resend otp maximum 2 times!</span></div>}
                                            </span></div>
                                        )}
                                        <div className="btn-val">
                                            <button className="btn validate" type="submit"
                                                    onClick={handleClick}>Verify
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-2">
                                    <div className="content"> By continuing you agree to Chefs-à-Porter’s<span
                                        className="term">T&amp;C</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}
export default SupperClubOtpVerificationModal
