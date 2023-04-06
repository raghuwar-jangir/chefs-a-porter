import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useLocation} from "@reach/router";
import Cookies from "js-cookie";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const UsersContext = React.createContext(defaultState)

const UsersProvider = (props) => {
    // const pathInfo = {
    //     'chef-details': 'users',
    //     'event-details': 'menu',
    //     'privee-viewmore': 'menu',
    //     'supper-club-details': 'event',
    // }
    const path = useLocation();
    const currentPath = path.pathname.split("/")[1];
    const baseUrl = `https://chefv2.hypervergedemo.site/v1`;
    const [userData, setUserData] = useState();
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

    //for submitting forms
    const [contactUsData, setContactUsData] = useState({})
    const [isContactUsData, setIsContactUsData] = useState(false)
    const [joinChefData, setJoinChefData] = useState({})
    const [isJoinChefData, setIsJoinChefData] = useState(false)

    useEffect(() => {
        if (userId && currentPath === 'chef-details') {
            axios.get(baseUrl + '/users/' + userId).then(result => {
                setUserData(result.data)
            })
        } else if (eventId && currentPath === 'event-details') {
            axios.get(baseUrl + `/menu/` + eventId).then(result => {
                setUserData(result.data)
            })
        } else if (supperClubDetailId && currentPath === 'supper-club-detail') {
            axios.get(baseUrl + '/event/' + supperClubDetailId).then(result => {
                setUserData(result.data)
            })
        } else if (currentPath === 'privee-viewmore') {
            axios.get(baseUrl + '/menu').then(result => {
                setUserData(result.data)
            })
        } else if (currentPath === 'addons' && bookingId) {
            axios.get(baseUrl + '/addon_category_master/all',).then(result => {
                setUserData(result.data)
            })
            axios.post(baseUrl + '/booking/calculate/' + bookingId).then((response) => {
                if (response.status === 200) {
                    Cookies.set('paymentCalculation', JSON.stringify(response.data));
                }
            })
        } else if (isBookingStatus) {
            axios.post(baseUrl + '/booking/confirm/' + bookingId).then((response) => {
                if (response.status === 200) {
                    Cookies.set('bookingConfirm', JSON.stringify(response.data));
                    console.log("bookingConfirm response======", response.data)
                }
                setIsBookingStatus(false)
            })
        } else if (currentPath === 'booking-summary') {
            axios.post(baseUrl + '/booking/calculate/' + summaryBookingId).then((response) => {
                if (response.status === 200) {
                    Cookies.set('paymentCalculation', JSON.stringify(response.data));
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
        } else if (currentPath === 'sc-booking-summary' && supperClubBookingId) {
            axios.post(baseUrl + '/booking/calculate/' + supperClubBookingId).then((response) => {
                if (response.status === 200) {
                    Cookies.set('supperClubBookingData', JSON.stringify(response.data));
                }
            })
        } else if (isSupperBookingStatus) {
            axios.post(baseUrl + '/booking/confirm/' + supperClubBookingId).then((response) => {
                if (response.status === 200) {
                    Cookies.set('supperClubBookingBookingConfirm', JSON.stringify(response.data));
                    console.log("supperClubBookingBookingConfirm response======", response.data)
                }
                setIsSupperBookingStatus(false)
            })
        } else if (currentPath === 'sc-booking-confirm' && supperClubBookingId) {
            axios.post(baseUrl + '/booking/calculate/' + supperClubBookingId).then((response) => {
                if (response.status === 200) {
                    Cookies.set('supperClubBookingData', JSON.stringify(response.data));
                }
            })
        }
    }, [userId, eventId, currentPath, supperClubDetailId, bookingId, summaryBookingId, isBookingStatus, contactUsData, isContactUsData, isJoinChefData, joinChefData, supperClubBookingId, isSupperBookingStatus])

    const {children} = props;

    return (
        <UsersContext.Provider
            value={{
                userData,
                setUserId,
                setEventId,
                setSupperClubDetailId,
                setIsBookingStatus,
                setContactUsData,
                setIsContactUsData,
                setJoinChefData,
                setIsJoinChefData,
                setIsSupperBookingStatus

            }}
        >
            {children}
        </UsersContext.Provider>
    )
}
export default UsersContext

export {UsersProvider}