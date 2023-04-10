import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import Cookies from "js-cookie";
import * as _ from "lodash";
import {useLocation} from "@reach/router";
import CmsContext from "./CmsContext";
import UsersContext from "./UsersContext";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const OtpContext = React.createContext(defaultState)
const OtpProvider = (props) => {
    const path = useLocation();
    const currentPath = path.pathname.split("/")[1];
    const {data} = useContext(CmsContext);
    const {eventId,supperClubDetailId} = useContext(UsersContext);
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
    const [isSupperClubStatus, setSupperClubStatus] = useState(false);
    const [eventData, setEventData] = useState()
    const [priveeData, setPriveeData] = useState()
    const [superClubBookingDetails, setsuperClubBookingDetails] = useState()
    const cookieValue = Cookies.get('eventData');
    const cookieValue1 = Cookies.get('priveeData');
    const cookieValue2 = Cookies.get('supperClubBookingPersonalDetail');
    const supperClubBookingIdCookieValue = Cookies?.get('supperClubBookingId');
    const supperClubBookingId = supperClubBookingIdCookieValue?.replaceAll('"', '')
    console.log("supperClubBookingId===>",supperClubBookingId);

    useEffect(() => {
        if (cookieValue1) {
            setPriveeData(JSON.parse(cookieValue1));
        }
        if (cookieValue) {
            setEventData(JSON.parse(cookieValue));
        }
        if (cookieValue2) {
            setsuperClubBookingDetails(JSON.parse(cookieValue2));
        }
    }, [cookieValue1, cookieValue, cookieValue2])
    console.log("eventData=====", eventData)
    console.log("priveeData=====", priveeData)
    console.log("superClubBookingDetails=====", superClubBookingDetails)

    useEffect(() => {
        if (isSendOtpApiCall) {
            axios.post(baseUrl + `/util/sendotp`, {
                mobile: otpNumber,
                email: eventData.email,
            })
            setIsSendOtpApiCall(false)
        } else if (isVerifiedOtpApiCall) {
            axios.post(baseUrl + '/util/verifyotp', {
                mobile: otpNumber,
                otp: verifyOtp,
            }).then((response) => {
                if (response.status === 200) {
                    setIsStatus(true);
                    setSupperClubStatus(true);
                    // Cookies.remove('BookingId')
                }
            })
            setIsVerifiedOtpApiCall(false)
        } else if (isReSendOtpApiCall) {
            setCountOfResendOtp(countOfResendOtp + 1)
            axios.post(baseUrl + '/util/resendotp', {
                mobile: otpNumber,
                email: eventData.email,
            })
            setResendOtp(null)
            setIsReSendOtpApiCall(false)
        } else if (isStatus && currentPath === 'customer-details') {
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
                // menu_selection: "host",
                common_menu: eventId,
                message:"Addition info"
            }).then((response) => {
                if (response.status === 200) {
                    // Cookies.remove('eventData');
                    // Cookies.remove('priveeData');
                    console.log("reponse=====", response.data)
                    Cookies.set('BookingId', JSON.stringify(response.data.id));
                    Cookies.set('summaryBookingId', JSON.stringify(response.data.id));
                }
            })
        } else if (isSupperClubStatus && currentPath === 'personal-details1') {
            axios.post(baseUrl + '/booking', {
                name: superClubBookingDetails.name,
                email: superClubBookingDetails.email,
                mobile: otpNumber,
                type: "chef_event",
                // event: supperClubBookingId,
                // event: "642d5567086e9b0e5f84e65c",
                event: "632d4509d85b82aae968dc88",
                meal: priveeData.experience,
                diner_count: priveeData.numberOfDiner,
                courses: eventData.numberOfCourses,
                // city: superClubBookingDetails.foodPreference,
                city: "Banglore",
                booking_date: priveeData.date,
                common_menu: supperClubDetailId,
                message:"Addition info",
                otp: verifyOtp,
            }).then((response) => {
                if (response.status === 200) {
                    console.log("reponse=====", response.data)
                    Cookies.set('supperClubBookingId', JSON.stringify(response.data.id));
                    Cookies.set('supperClubConfirmBookingId', JSON.stringify(response.data.id));
                }
            })
        }
    }, [otpNumber, verifyOtp, resendOtp, isStatus,isSupperClubStatus])
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