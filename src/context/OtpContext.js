import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import Cookies from "js-cookie";
import * as _ from "lodash";
import {useLocation} from "@reach/router";
import CmsContext from "./CmsContext";
import UsersContext from "./UsersContext";
import {navigate} from "gatsby";

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
    const {eventId, supperClubDetailId, commonCityData,mealData} = useContext(UsersContext);
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
    const forDinersValue = Cookies?.get('eventDinners')
    const numberOfDinner = parseInt(forDinersValue?.replaceAll('"', ''));
    const forCoursesValue = Cookies?.get('eventCourses')
    const numberOfCourses = parseInt(forCoursesValue?.replaceAll('"', ''));
    const supperClubExperienceSeats = Cookies?.get('supperClubExperienceSeats');
    const experienceNumberOfSeats = parseInt(supperClubExperienceSeats?.replaceAll('"', ''));
    const supperClubExperienceTables = Cookies?.get('supperClubExperienceTables');
    const experienceNumberOfTables = parseInt(supperClubExperienceTables?.replaceAll('"', ''));
    const supperClubExperienceDates = Cookies?.get('supperClubExperienceDates');
    const experienceNumberOfDates = supperClubExperienceDates?.replaceAll('"', '');
    const supperClubExperienceTime = Cookies?.get('supperClubExperienceTime');
    const experienceNumberOfTime = supperClubExperienceTime?.replaceAll('"', '');
    const eventIdCookieValue = Cookies.get('eventIdValue');
    const PaymentEventId = eventIdCookieValue?.replaceAll('"', '')
    const sEventIdCookieValue = Cookies.get('superClubDetailId');
    const sPaymentEventId = sEventIdCookieValue?.replaceAll('"', '')
    const [customerInfo, setCustomerInfo] = useState('')
    const customerInfoCookieValue = Cookies?.get('customerData');
    const [userAddress, setUserAddress] = useState()
    const selectedTab = Cookies.get('tabData');
    const cityName = selectedTab?.replaceAll('"', '');
    const Mapcoords = Cookies.get('coords');
    const coords = Mapcoords?.replaceAll('"', '');
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
        if (customerInfoCookieValue) {
            setCustomerInfo(JSON.parse(customerInfoCookieValue));
        }
        setUserAddress(JSON.parse(localStorage.getItem('userAddress')))
    }, [cookieValue1, cookieValue, cookieValue2, customerInfoCookieValue])

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
                    if (currentPath === 'customer-details') {
                        setIsStatus(true);
                    } else {
                        setSupperClubStatus(true);
                    }
                    // Cookies.remove('bookingId')
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
        } else if (isStatus) {
            axios.post(baseUrl + '/booking', {
                name: eventData.name,
                email: eventData.email,
                mobile: otpNumber,
                type: "chef_table",
                meal: priveeData.time ? priveeData.time : mealData[0].name,
                diner_count: numberOfDinner,
                courses: numberOfCourses,
                city: priveeData.city,
                booking_date: priveeData.date,
                booking_time: eventData.startTime,
                otp: verifyOtp,
                common_menu: PaymentEventId,
                message: customerInfo?.message,
                address1: userAddress?.society ? userAddress?.society : "Wilson Garden",
                address2: userAddress?.location ? userAddress?.location : "Bengaluru",
                landmark: userAddress?.landmark ? userAddress?.landmark : "Rainbow Home School",
                pincode: userAddress?.pincode ? userAddress?.pincode : 560027,
                type: userAddress?.type ? userAddress?.type : "other",
                coordinates: {
                    "lat": coords?.lat,
                    "lng": coords?.lng
                }
            }).then((response) => {
                if (response.status === 200) {
                    // Cookies.remove('eventData');
                    // Cookies.remove('priveeData');
                    Cookies.set('bookingId', JSON.stringify(response.data.id));
                    Cookies.set('summaryBookingId', JSON.stringify(response.data.id));
                }
                const bookingId=response.data.id;
                navigate(`/addons/${bookingId}`);
            })
        } else if (isSupperClubStatus && currentPath === 'personal-details') {
            axios.post(baseUrl + '/booking', {
                name: superClubBookingDetails?.name,
                email: superClubBookingDetails?.email,
                mobile: otpNumber,
                type: "chef_event",
                event: sPaymentEventId,
                meal: experienceNumberOfTime,
                diner_count: experienceNumberOfSeats,
                city: cityName ? cityName : commonCityData[0].name,
                booking_date: experienceNumberOfDates,
                common_menu: supperClubDetailId,
                message: superClubBookingDetails?.AdditionalMessage,
                otp: verifyOtp,
                seats: experienceNumberOfSeats,
                seats_chefs_table: experienceNumberOfTables
            }).then((response) => {
                if (response.status === 200) {
                    Cookies.set('supperClubBookingId', JSON.stringify(response.data.id));
                    Cookies.set('supperClubConfirmBookingId', JSON.stringify(response.data.id));
                }
                const supperClubBookingId=response.data.id;
                navigate(`/ticketed-booking-summary/${supperClubBookingId}`);
            })
        }
    }, [otpNumber, verifyOtp, resendOtp, isStatus, isSupperClubStatus])
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