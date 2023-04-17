import React, {useCallback, useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useLocation} from "@reach/router";
import Cookies from "js-cookie";
import * as _ from "lodash";
import useRazorpay from "react-razorpay";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const UsersContext = React.createContext(defaultState)

const UsersProvider = (props) => {

    const priveeRazorpay = useRazorpay();
    const SupperClubRazorpay = useRazorpay();
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
    const [bookingSuccessOpen, setBookingSuccessOpen] = useState(false);
    const [priveePayment, setPriveePayment] = useState(false)
    const [supperClubPayment, setSupperClubPayment] = useState(false)

    console.log("isCoupon=======", isCoupon)
    console.log("adPaymentData======", adPaymentData)
    console.log("bookingId=======", bookingId)
    console.log("callMobileNumber=======", callMobileNumber)
    console.log("mealData=======", mealData)
    console.log("eventDetailsData============", eventDetailsData)

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
            axios.post(baseUrl + '/booking/calculate/' + bookingId, {}).then((response) => {
                if (response.status === 200) {
                    setAdPaymentData(response.data)
                    Cookies.set('adsPaymentInfo', JSON.stringify(response.data));
                }
            })
        } else if (isConfirm) {
            axios.post(baseUrl + '/booking/confirm/' + bookingId).then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('privateBookingOrderNumber', JSON.stringify(response.data.order_number));
                    const options = {
                        key: response?.data?.razorpay_key,
                        currency: "INR",
                        name: "Chefs-à-Porter",
                        order_id: response?.data?.razorpay_order_id,
                        description: "Test Transaction",
                        image: "https://chefsaporter.com/assets/img/logo_black.svg",
                        theme: {color: "#C6A87D", fontFamily: "ProximaNovaA-Regular"},
                        handler: (response) => {
                            if (response) {
                                localStorage.setItem('privatePaymentNumber', JSON.stringify(response.razorpay_payment_id));
                                setIsConfirm(false);
                                axios.post('https://chefv2.hypervergedemo.site/v1/booking/verifypayment/' + summaryBookingId, {
                                    razorpay_order_id: response.razorpay_order_id,
                                    razorpay_payment_id: response.razorpay_payment_id,
                                    razorpay_signature: response.razorpay_signature,
                                })
                                    .then((response) => {
                                        setBookingSuccessOpen(true)
                                        if (response.status === 200) {
                                            Cookies.set(
                                                "paymentVerificationData",
                                                JSON.stringify(response.data)
                                            );
                                        }
                                    });
                            }
                        },
                    };
                    const rzpay = new priveeRazorpay(options);
                    rzpay.open();
                } else {
                    rzpay.on("payment.failed", function (response) {
                        console.log("fails", response);
                    });
                }
                setIsConfirm(false);
                // localStorage.removeItem('priveePaymentInfo');
            })
        } else if (isCoupon) {
            axios.post(baseUrl + '/booking/calculate/' + summaryBookingId, {
                voucher: voucher
            }).then((response) => {
                if (response.status === 200) {
                    setBsPaymentData(response.data);
                    // localStorage.setItem('priveePaymentInfo', JSON.stringify(response.data));
                    Cookies.set("priveePaymentInfo", JSON.stringify(response.data));
                    setIsCoupon(false);
                }
            })

        } else if (isCoupon !== true && priveePayment) {
            axios.post(baseUrl + '/booking/calculate/' + summaryBookingId).then((response) => {
                if (response.status === 200) {
                    setBsPaymentData(response.data)
                    localStorage.setItem('priveePaymentInfo', JSON.stringify(response.data));
                }
            })
            setPriveePayment(false)
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
        } else if (currentPath === 'ticketed-booking-summary' && supperClubBookingId) {
            axios.post(baseUrl + '/booking/calculate/' + supperClubBookingId, {
                common_menu: eventId,
            }).then((response) => {
                if (response.status === 200) {
                    setSupperClubPaymentData(response.data);
                }
            })
        } else if (isSupperBookingStatus) {
            console.log("supperClubBookingId===========", supperClubBookingId)
            axios.post(baseUrl + '/booking/confirm/' + supperClubBookingId).then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('scBookingOrderNumber', JSON.stringify(response.data.order_number));
                    const options = {
                        key: response?.data?.razorpay_key,
                        currency: "INR",
                        name: "Chefs-à-Porter",
                        order_id: response?.data?.razorpay_order_id,
                        description: "Test Transaction",
                        image: "https://chefsaporter.com/assets/img/logo_black.svg",
                        theme: {color: "#C6A87D", fontFamily: "ProximaNovaA-Regular"},
                        handler: (response) => {
                            if (response) {
                                localStorage.setItem('scPaymentNumber', JSON.stringify(response.razorpay_payment_id));
                                setIsSupperBookingStatus(false);
                                axios.post('https://chefv2.hypervergedemo.site/v1/booking/verifypayment/' + supperClubBookingId, {
                                    razorpay_order_id: response.razorpay_order_id,
                                    razorpay_payment_id: response.razorpay_payment_id,
                                    razorpay_signature: response.razorpay_signature,
                                })
                                    .then((response) => {
                                        if (response.status === 200) {
                                            setBookingSuccessOpen(true)
                                            Cookies.set(
                                                "paymentVerificationData",
                                                JSON.stringify(response.data)
                                            );
                                        }
                                    });
                            }
                        },
                    };
                    const rzpay = new SupperClubRazorpay(options);
                    rzpay.open();
                } else {
                    rzpay.on("payment.failed", function (response) {
                        console.log("fails", response);
                    });
                }
                setIsSupperBookingStatus(false)
                // localStorage.removeItem('sprClubPaymentInfo');
            })
        } else if (isSupperClubCoupon) {
            axios.post(baseUrl + '/booking/calculate/' + supperClubBookingId, {
                voucher: voucher
            }).then((response) => {
                if (response.status === 200) {
                    setSupperClubConfirmPaymentData(response.data)
                    localStorage.setItem('sprClubPaymentInfo', JSON.stringify(response.data));
                    setIsSupperClubCoupon(false)
                }
            })
        } else if (isSupperClubCoupon !== true && supperClubPayment) {
            axios.post(baseUrl + '/booking/calculate/' + supperClubBookingId).then((response) => {
                if (response.status === 200) {
                    setSupperClubConfirmPaymentData(response.data);
                    localStorage.setItem('sprClubPaymentInfo', JSON.stringify(response.data));
                }
            })
            setSupperClubPayment(false);
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
                id: '640b22b691e7236a1d0a264e',
                type: "privee",
                // diner: eventDetailsData?.numberOfDinner,
                // courses: eventDetailsData?.numberOfCourses,
                diner: 10,
                courses: 6,
            }).then((response) => {
                if (response.status === 200) {
                    Cookies.set('CPaymentInfo', JSON.stringify(response.data));
                }
            })
        }
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
    }, [isConfirm, isSupperClubCoupon, isCoupon, userId, eventId, currentPath, supperClubDetailId, bookingId, summaryBookingId, contactUsData, isContactUsData, isJoinChefData, joinChefData, supperClubBookingId, isSupperBookingStatus, paymentVerification])

    const {children} = props;

    return (
        <UsersContext.Provider
            value={{
                userData,
                setUserId,
                setEventId,
                eventId,
                setSupperClubDetailId,
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
                isConfirm,
                bookingSuccessOpen,
                setBookingSuccessOpen,
                setPriveePayment,
                setSupperClubPayment
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}
export default UsersContext

export {UsersProvider}