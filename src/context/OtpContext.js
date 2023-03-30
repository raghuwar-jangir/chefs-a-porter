import React, {useEffect, useState} from 'react';
import axios from "axios";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const OtpContext = React.createContext(defaultState)
const OtpProvider = (props) => {

    const baseUrl = `https://chefv2.hypervergedemo.site/v1`;
    const [otpNumber, setOtpNumber] = useState();
    const [verifyOtp, setVerifyOtp] = useState();
    const [resendOtp, setResendOtp] = useState();
    const [countOfResendOtp, setCountOfResendOtp] = useState(0)

    useEffect(() => {
        if (otpNumber) {
            axios.post(baseUrl + `/util/sendotp`, {
                mobile: '',
            })
            setOtpNumber(null)
        } else if (verifyOtp) {
            axios.post(baseUrl + '/util/verifyotp', {
                mobile: '',
                otp: '',
            })
            setVerifyOtp(null)
        } else if (resendOtp) {
            setCountOfResendOtp(countOfResendOtp + 1)
            axios.post(baseUrl + '/util/resendotp', {
                mobile: '',
            })
            setResendOtp(null)
        }
    }, [otpNumber, verifyOtp, resendOtp])

    const {children} = props
    return (
        <OtpContext.Provider
            value={{
                setOtpNumber,
                setVerifyOtp,
                setResendOtp,
                countOfResendOtp
            }}
        >
            {children}
        </OtpContext.Provider>
    )
}
export default OtpContext

export {OtpProvider}