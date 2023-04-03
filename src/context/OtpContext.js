import React, {useEffect, useState} from 'react';
import axios from "axios";
import Cookies from "js-cookie";
import * as _ from "lodash";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const OtpContext = React.createContext(defaultState)
const OtpProvider = (props) => {

    const baseUrl = `https://chefv2.hypervergedemo.site/v1`;
    const [otpNumber, setOtpNumber] = useState('');
    const [verifyOtp, setVerifyOtp] = useState('');
    const [resendOtp, setResendOtp] = useState();
    const [countOfResendOtp, setCountOfResendOtp] = useState(0)
    const [isSendOtpApiCall, setIsSendOtpApiCall] = useState(false);
    const [isReSendOtpApiCall, setIsReSendOtpApiCall] = useState(false);
    const [isVerifiedOtpApiCall, setIsVerifiedOtpApiCall] = useState(false);
    const [isBookingAPiCall, setIsBookingAPiCall] = useState(false);
    const [isStatus, setIsStatus] = useState(false);
    const [eventData, setEventData] = useState()
    const [priveeData, setPriveeData] = useState()
    const cookieValue = Cookies.get('eventData');
    const cookieValue1 = Cookies.get('priveeData');

    useEffect(() => {
        if (cookieValue1) {
            setPriveeData(JSON.parse(cookieValue1));
        }
        if (cookieValue) {
            setEventData(JSON.parse(cookieValue));
        }
    }, [cookieValue1, cookieValue])
    console.log("eventData=====", eventData)
    console.log("priveeData=====", priveeData)

    useEffect(() => {
        if (isSendOtpApiCall) {
            axios.post(baseUrl + `/util/sendotp`, {
                mobile: otpNumber,
            })
            setIsSendOtpApiCall(false)
        } else if (isVerifiedOtpApiCall) {
            axios.post(baseUrl + '/util/verifyotp', {
                mobile: otpNumber,
                otp: verifyOtp,
            }).then((response) => {
                if (response.status === 200) {
                    setIsStatus(true)
                    // Cookies.remove('BookingId')
                }
            })
            setIsVerifiedOtpApiCall(false)
        } else if (isReSendOtpApiCall) {
            setCountOfResendOtp(countOfResendOtp + 1)
            axios.post(baseUrl + '/util/resendotp', {
                mobile: otpNumber,
            })
            setResendOtp(null)
            setIsReSendOtpApiCall(false)
        } else if (isStatus) {
            axios.post(baseUrl + '/booking', {
                name: eventData.name,
                email: eventData.email,
                mobile: otpNumber,
                type: "chef_table",
                meal: priveeData.experience,
                diner_count: priveeData.numberOfDiner,
                courses: eventData.numberOfCourses,
                city: priveeData.city,
                booking_date: priveeData.date,
                booking_time: eventData.startTime,
                otp: verifyOtp,
            }).then((response) => {
                if (response.status === 200) {
                    Cookies.remove('eventData');
                    Cookies.remove('priveeData');
                    console.log("reponse=====", response.data)
                    // alert( JSON.stringify(response.data.id))
                    Cookies.set('BookingId', JSON.stringify(response.data.id));
                    Cookies.set('summaryBookingId', JSON.stringify(response.data.id));
                }
            })
        }
    }, [otpNumber, verifyOtp, resendOtp, isStatus])
    const {children} = props
    return (
        <OtpContext.Provider
            value={{
                setOtpNumber,
                setVerifyOtp,
                setResendOtp,
                countOfResendOtp,
                setIsSendOtpApiCall,
                setIsReSendOtpApiCall,
                setIsVerifiedOtpApiCall,
                setIsBookingAPiCall,
            }}
        >
            {children}
        </OtpContext.Provider>
    )
}
export default OtpContext

export {OtpProvider}