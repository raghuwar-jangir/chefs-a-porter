import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useLocation} from "@reach/router";
import Cookies from "js-cookie";
import * as _ from "lodash";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const UsersContext = React.createContext(defaultState)

const UsersProvider = (props) => {
    const path = useLocation();
    const currentPath = path.pathname.split("/")[1];
    const baseUrl = `https://chefv2.hypervergedemo.site/v1`;
    const [userData, setUserData] = useState();
    const [addOnsData, setAddOnsData] = useState();
    const [userId, setUserId] = useState();
    const [eventId, setEventId] = useState();
    const [supperClubDetailId, setSupperClubDetailId] = useState();
    const cookieValue = Cookies?.get('BookingId');
    const bookingId = cookieValue?.replaceAll('"', '');
    const summaryBookingId = cookieValue?.replaceAll('"', '');
    const [isBookingStatus, setIsBookingStatus] = useState(false);
    const supperClubBookingIdCookieValue = Cookies?.get('supperClubBookingId');
    const supperClubBookingId = supperClubBookingIdCookieValue?.replaceAll('"', '')
    const [isSupperBookingStatus, setIsSupperBookingStatus] = useState(false);
    const [paymentVerification, setPaymentVerification] = useState(false);
    const [supperClubRazorpay, setSupperClubRazorpay] = useState();
    const [isConfirm, setIsConfirm] = useState(false);
    // const [supperClubBookingBookingConfirm, setSupperClubBookingBookingConfirm] = useState();
    // const cookieValueSupper = Cookies?.get('supperClubBookingBookingConfirm');

    //for submitting forms
    const [contactUsData, setContactUsData] = useState({})
    const [isContactUsData, setIsContactUsData] = useState(false)
    const [joinChefData, setJoinChefData] = useState({})
    const [isJoinChefData, setIsJoinChefData] = useState(false)

    const [callMobileNumber, setCallMobileNumber] = useState();
    const [mealData, setMealData] = useState();
    const [mealTypeData, setMealTypeData] = useState();
    const eventIdCookieValue = Cookies.get('eventIdValue');
    const PaymentEventId = eventIdCookieValue?.replaceAll('"', '')
    const superClubDetailIdCookieValue = Cookies.get('superClubDetailId');
    const superClubDetailId = superClubDetailIdCookieValue?.replaceAll('"', '')
    const eventDataCookieValue = Cookies?.get('eventData');
    const [eventDetailsData, setEventDetailsData] = useState();
    const [adPaymentData, setAdPaymentData] = useState()
    const [bsPaymentData, setBsPaymentData] = useState();
    const [supperClubPaymentData, setSupperClubPaymentData] = useState()
    const [supperClubConfirmPaymentData, setSupperClubConfirmPaymentData] = useState();
    const [isCoupon, setIsCoupon] = useState(false);
    const [isSupperClubCoupon, setIsSupperClubCoupon] = useState(false);
    const [voucher, setVoucher] = useState('');

    console.log("isCoupon=======", isCoupon)
    console.log("adPaymentData======", adPaymentData)
    console.log("bookingId=======", bookingId)
    console.log("callMobileNumber=======", callMobileNumber)
    console.log("mealData=======", mealData)
    useEffect(() => {
        // if (cookieValueSupper) {
        //     setSupperClubBookingBookingConfirm(JSON.parse(cookieValueSupper));
        // }
        if (eventDataCookieValue) {
            setEventDetailsData(JSON.parse(eventDataCookieValue))
        }
    }, [eventDataCookieValue])
    console.log("eventDetailsData======>", eventDetailsData);

    useEffect(() => {
        if (userId && currentPath === 'chef-details') {
            axios.get(baseUrl + '/users/' + userId).then(result => {
                setUserData(result.data)
            })
        } else if (eventId && currentPath === 'event-details') {
            axios.get(baseUrl + `/menu/` + eventId).then(result => {
                setUserData(result.data)
            })
        } else if (supperClubDetailId && currentPath === 'ticketed-detail') {
            axios.get(baseUrl + '/event/' + supperClubDetailId).then(result => {
                setUserData(result.data)
            })
        } else if (currentPath === 'private-viewmore') {
            axios.get(baseUrl + '/menu').then(result => {
                setUserData(result.data)
            })
        } else if (currentPath === 'addons' && bookingId) {
            axios.get(baseUrl + '/addon_category_master/all').then(result => {
                setAddOnsData(result.data)
            })
            axios.post(baseUrl + '/booking/calculate/' + bookingId).then((response) => {
                if (response.status === 200) {
                    console.log("adsPaymentInfo=========", response.data)
                    setAdPaymentData(response.data)
                    Cookies.set('adsPaymentInfo', JSON.stringify(response.data));
                }
            })
        } else if (isBookingStatus) {
            axios.post(baseUrl + '/booking/confirm/' + bookingId).then((response) => {
                if (response.status === 200) {
                    Cookies.set('bookingConfirm', JSON.stringify(response.data));
                    Cookies.set(
                        "razorpayOrderId",
                        JSON.stringify(response.data.razorpay_order_id)
                    );
                    Cookies.set(
                        "rzKey",
                        JSON.stringify(response.data.key)
                    );
                    console.log("bookingConfirm response======", response.data)
                }
                setIsBookingStatus(false)
            })
        } else if (isConfirm) {
            axios.post(baseUrl + '/booking/confirm/' + bookingId).then((response) => {
                if (response.status === 200) {
                    Cookies.set('bookingConfirm', JSON.stringify(response.data));
                    Cookies.set(
                        "razorpayOrderId",
                        JSON.stringify(response.data.razorpay_order_id)
                    );
                    Cookies.set(
                        "razorpayKey",
                        JSON.stringify(response.data.razorpay_key)
                    );
                    console.log("bookingConfirm response======", response.data)
                }
                setIsBookingStatus(false)
            })
        } else if (isCoupon) {
            axios.post(baseUrl + '/booking/calculate/' + summaryBookingId, {
                voucher: voucher
            }).then((response) => {
                if (response.status === 200) {
                    setBsPaymentData(response.data)
                    Cookies.set('bSPaymentInfo', JSON.stringify(response.data));
                    console.log("paymentCalculation ===============", response.data)
                }
            })
        } else if (isCoupon !== true && currentPath === 'booking-summary') {
            axios.post(baseUrl + '/booking/calculate/' + summaryBookingId).then((response) => {
                if (response.status === 200) {
                    setBsPaymentData(response.data)
                    Cookies.set('bSPaymentInfo', JSON.stringify(response.data));
                    console.log("paymentCalculation ===============", response.data)
                }
            })
        } else if (isContactUsData) {
            axios.post(baseUrl + '/contact_us', {
                name: contactUsData.name,
                email: contactUsData.email,
                mobile: contactUsData.contactNumber,
                cover_letter: contactUsData.coverLetterMessage,
            })
            setIsContactUsData(false)
        } else if (isJoinChefData) {
            axios.post(baseUrl + '/users/requestjoin', {
                name: joinChefData.name,
                email: joinChefData.email,
                mobile: joinChefData.contactNumber,
                resume: joinChefData.resume,
                cover_letter: joinChefData.coverLetterMessage,
            })
            setIsJoinChefData(false)
        } else if (currentPath === 'ticketed-booking-summary' && supperClubBookingId) {
            console.log("supperClubBookingId==========--", supperClubBookingId)
            axios.post(baseUrl + '/booking/calculate/' + supperClubBookingId, {
                common_menu: eventId
            }).then((response) => {
                if (response.status === 200) {
                    setSupperClubPaymentData(response.data);
                    Cookies.set('supperClubBookingData', JSON.stringify(response.data));
                }
            })
        } else if (isSupperBookingStatus) {
            axios.post(baseUrl + '/booking/confirm/' + supperClubBookingId).then((response) => {
                if (response.status === 200) {
                    setSupperClubRazorpay(response.data)
                    Cookies.set('scbDetails', response.data);
                    Cookies.set('ScbData', JSON.stringify(response?.data?.razorpay_order_id));
                    console.log("supperClubBookingBookingConfirm response======", response.data.razorpay_order_id)
                }
                setIsSupperBookingStatus(false)
            })
        } else if (isSupperClubCoupon && supperClubBookingId && voucher) {
            axios.post(baseUrl + '/booking/calculate/' + supperClubBookingId, {
                voucher: voucher
            }).then((response) => {
                if (response.status === 200) {
                    setSupperClubConfirmPaymentData(response.data)
                    Cookies.set('supperClubBookingData', JSON.stringify(response.data));
                }
            })
        } else if (isSupperClubCoupon !== true && currentPath === 'ticketed-booking-confirm' && supperClubBookingId) {
            axios.post(baseUrl + '/booking/calculate/' + supperClubBookingId).then((response) => {
                if (response.status === 200) {
                    setSupperClubConfirmPaymentData(response.data)
                    Cookies.set('supperClubBookingData', JSON.stringify(response.data));
                }
            })
        } else if (currentPath === 'personal-details') {
            axios.post(baseUrl + '/booking/calculatepayment/', {
                id: superClubDetailId,
                type: 'supper_club',
                seats: 1,
                seats_chefs_table: 3
            }).then((response) => {
                if (response.status === 200) {
                    Cookies.set('PersonalDetailsPaymentCalculation', JSON.stringify(response.data));
                }
            })
        } else if (currentPath === 'customer-details') {
            axios.post(baseUrl + '/booking/calculatepayment/', {
                id: PaymentEventId,
                type: "privee",
                diner: eventDetailsData?.numberOfDinner,
                courses: eventDetailsData?.numberOfCourses,
            }).then((response) => {
                if (response.status === 200) {
                    Cookies.set('CPaymentInfo', JSON.stringify(response.data));
                }
            })
        }
        // else if (paymentVerification) {
        //     axios
        //         .post(baseUrl + "booking/verifypayment/" + supperClubBookingId, {
        //             razorpay_order_id: supperClubBookingBookingConfirm.razorpay_order_id,
        //             razorpay_payment_id:
        //             supperClubBookingBookingConfirm.razorpay_payment_id,
        //             razorpay_signature:
        //             supperClubBookingBookingConfirm.razorpay_signature,
        //         })
        //         .then((response) => {
        //             if (response.status === 200) {
        //                 Cookies.set(
        //                     "paymentVerificationData",
        //                     JSON.stringify(response.data)
        //                 );
        //             }
        //         });
        //     setPaymentVerification(false);
        // }

        if (path.pathname === "/") {
            axios.get(baseUrl + '/cms/footer').then(result => {
                setCallMobileNumber(result.data.footer.footer.mobile)
                Cookies.set('callMobileNumber', JSON.stringify(result.data.footer.footer.mobile));
            })
        }
        if (path.pathname === '/' || currentPath === "private" || currentPath === "private-viewmore") {
            axios.get('https://chefv2.hypervergedemo.site/v1/meal_times/all').then(result => {
                setMealData(result.data)
            })
        }
        if (currentPath === "personal-details") {
            axios.get('https://chefv2.hypervergedemo.site/v1/meal_types/all').then(result => {
                setMealTypeData(result.data)
            })
        }
    }, [isConfirm,isSupperClubCoupon, isCoupon, userId, eventId, currentPath, supperClubDetailId, bookingId, summaryBookingId, isBookingStatus, contactUsData, isContactUsData, isJoinChefData, joinChefData, supperClubBookingId, isSupperBookingStatus, paymentVerification])

    const {children} = props;

    return (
        <UsersContext.Provider
            value={{
                userData,
                setUserId,
                setEventId,
                eventId,
                setSupperClubDetailId,
                setIsBookingStatus,
                setContactUsData,
                setIsContactUsData,
                setJoinChefData,
                setIsJoinChefData,
                setIsSupperBookingStatus,
                supperClubDetailId,
                setPaymentVerification,
                callMobileNumber,
                mealData,
                mealTypeData,
                addOnsData,
                adPaymentData,
                bsPaymentData,
                supperClubPaymentData,
                supperClubConfirmPaymentData,
                voucher,
                setVoucher,
                setIsCoupon,
                setIsSupperClubCoupon,
                supperClubRazorpay,
                setIsConfirm,
                isConfirm
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}
export default UsersContext

export {UsersProvider}