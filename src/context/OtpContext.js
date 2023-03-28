import React, {useEffect, useState, useLayoutEffect} from 'react';
import axios from "axios";


const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const OtpContext = React.createContext(defaultState)

const OtpProvider = (props) => {

    const baseUrl = `https://chefv2.hypervergedemo.site/v1`
    const [otpData, setOtpData] = useState()

    useEffect(() => {
        axios.post(baseUrl + `/util/sendotp`).then(result => {
            setOtpData(result.data)
        })
    }, [])

    console.log("otpData===", otpData)

    const {children} = props
    return (
        <OtpContext.Provider
            value={{
                otpData,
            }}
        >
            {children}
        </OtpContext.Provider>
    )
}
export default OtpContext

export {OtpProvider}