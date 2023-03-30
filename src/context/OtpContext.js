import React, {useEffect, useState, useLayoutEffect} from 'react';
import axios from "axios";


const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const OtpContext = React.createContext(defaultState)
const OtpProvider = (props) => {

    const baseUrl = `https://chefv2.hypervergedemo.site/v1`;
    // const [otpData, setOtpData] = useState();
    const [otpNumber, setOtpNumber] = useState();
    const [verifyOtp, setVerifyOtp] = useState();
    const [resendOtp, setResendOtp] = useState();

    useEffect(() => {
        if (otpNumber) {
            axios.post(baseUrl + `/util/sendotp`, {
                mobile: otpNumber,
                otp: '',
            })
            setOtpNumber(null)
        } else if (verifyOtp) {
            axios.post(baseUrl + '/util/verifyotp', {
                mobile: otpNumber,
                otp: '',
            })
            setVerifyOtp(null)
        } else if (resendOtp) {
            axios.post(baseUrl + '/util/resendotp', {
                mobile: otpNumber,
                otp: '',
            })
            setResendOtp(null)
        }
    }, [otpNumber, verifyOtp, resendOtp])

    const {children} = props
    return (
        <OtpContext.Provider
            value={{
                // otpData,
                setOtpNumber,
                setVerifyOtp,
                setResendOtp
            }}
        >
            {children}
        </OtpContext.Provider>
    )
}
export default OtpContext

export {OtpProvider}