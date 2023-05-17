import React, { useState } from "react";
import { styled, Box } from "@mui/material";
import OtpInput from "react-otp-input";



const OtpComponent = () => {
    const [code, setCode] = React.useState("");
    const handleChange = (code) => setCode(code);
    const MainBox = styled(Box)({
        '.modal-body':{
            padding:'0px',
            position:'relative',
            flex:'1 1 auto'
        },
        '.modal-position':{
            position:'relative !important'
        },
        '.title':{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#080B0E',
            marginBottom:'0.5rem'
        },
        '.number':{
            fontFamily: 'ProximaNovaA-Regular',
            fontWeight: 400
        },
        '.change-link':{
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#080B0E',
            textDecoration:'underline'
        },
        '.enter-otp':{
            marginTop: '30px',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
            padding: '0 10px',
            marginBottom: '16px'
        },
        '.otp': {
            padding: '0px 10px',
            display: 'flex',
            justifyContent: 'space-between !important',
            flexDirection: 'row'
        },
        '.btn-val': {
            padding: '0 10px',
            opacity:0.65
        },
        '.resend':{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#080B0E',
            padding: '0 10px',
        },
        '.btn':{
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
        '.content':{
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#080B0E',
            textAlign: 'center',
        },
        '.term':{
            fontWeight: 400,
            fontFamily: 'ProximaNovaA-Regular',
            textDecoration:'underline'
        }
    })
    return (
        <React.Fragment>
            <MainBox>
                <div className="modal-body">
                    <div className="modal-position">
                        <div>
                            <div className="title">A 4 digit code has been sent to<span className="number"> +91 987324567</span> & your email <span className="number">kachwallasana@gmail.com</span> <span className="change-link"> Change</span></div>
                            <div className="enter-otp">Enter OTP</div>
                            <div className="input-otp">
                                <OtpInput className="otp"
                                          value={code}
                                          onChange={handleChange}
                                          numInputs={4}
                                          separator={<span></span>}
                                          isInputNum={true}
                                          shouldAutoFocus={true}
                                          inputStyle={{
                                              backgroundColor: '#FBFBFB',
                                              border: '0px',
                                              width: '58px',
                                              height: '58px',
                                              fontFamily: 'ProximaNovaA-Regular',
                                              fontWeight: '400',
                                              color: '#080B0E',
                                          }}
                                          focusStyle={{
                                              outline: "none"
                                          }}
                                /></div>
                            <div><span className="resend">Resend OTP in 00:32 sec</span></div>
                            <div className="btn-val">
                                <button className="btn validate" type="submit">Verfiy</button>
                            </div>
                        </div>
                        <div className="card-2">
                            <div className="content"> By continuing you agree to Chefs-à-Porter’s <span className="term">T&C</span>
                            </div>
                        </div>
                    </div>
                </div>
            </MainBox>
        </React.Fragment>
    )
}
export default OtpComponent;