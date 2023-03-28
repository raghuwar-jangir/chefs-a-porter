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
    const [otpData, setOtpData] = useState();
    const [otpNumber, setOtpNumber] = useState();
    const [verifyOtp, setVerifyOtp] = useState();


    console.log('otpNumber================', otpNumber)

    useEffect(() => {
        if (otpNumber || verifyOtp) {
            axios.post(baseUrl + `${verifyOtp ? '/util//verifyotp' : '/util//sendotp'}`,{mobile: otpNumber,otp:''}).then(result => {
                setOtpData(result.data)
            })
        }
    }, [otpNumber, verifyOtp])

    // useEffect(() => {
    //     if (otpNumber) {
    //         axios.post(baseUrl + '/util/sendotp', {mobile: otpNumber}).then(result => {
    //             setOtpData(result.data)
    //         })
    //     }
    // }, [otpNumber])

    const {children} = props
    return (
        <OtpContext.Provider
            value={{
                otpData,
                setOtpNumber,
                setVerifyOtp
            }}
        >
            {children}
        </OtpContext.Provider>
    )
}
export default OtpContext

export {OtpProvider}