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
    const pathInfo = {
        'chef-details': 'users',
        'event-details': 'menu',
        'privee-viewmore': 'menu',
        'supper-club-details': 'event',
    }
    const path = useLocation()
    const currentPath = path.pathname.split("/")[1];
    const baseUrl = `https://chefv2.hypervergedemo.site/v1`;
    const [userData, setUserData] = useState()
    const [userId, setUserId] = useState()
    const [eventId, setEventId] = useState()
    const [supperClubDetailId, setSupperClubDetailId] = useState();
    const cookieValue = Cookies.get('BookingId');
    const summaryCookieValue = Cookies?.get('BookingId');

    useEffect(() => {
        if (userId) {
            axios.get(baseUrl + `/${pathInfo[currentPath]}/` + userId).then(result => {
                setUserData(result.data)
            })
        } else if (eventId) {
            axios.get(baseUrl + `/${pathInfo[currentPath]}/` + eventId).then(result => {
                setUserData(result.data)
            })
        } else if (supperClubDetailId) {
            axios.get(baseUrl + '/event/' + supperClubDetailId).then(result => {
                setUserData(result.data)
            })
        } else if (currentPath === 'privee-viewmore') {
            axios.get(baseUrl + '/menu').then(result => {
                setUserData(result.data)
            })
        } else if (currentPath === 'addons' && JSON.parse(cookieValue)) {
            axios.get(baseUrl + '/addon_category_master/all',).then(result => {
                setUserData(result.data)
            })
            axios.post(baseUrl + '/booking/calculate/' + JSON.parse(cookieValue)).then((response) => {
                if (response.status === 200) {
                    Cookies.set('paymentCalculation', JSON.stringify(response.data));
                }
            })
        } else if (currentPath === 'booking-summary') {
            axios.post(baseUrl + '/booking/calculate/' + JSON.parse(summaryCookieValue)).then((response) => {
                if (response.status === 200) {
                    Cookies.set('paymentCalculation', JSON.stringify(response.data));
                }
            })
        }
    }, [userId, eventId, currentPath, supperClubDetailId])

    const {children} = props;

    return (
        <UsersContext.Provider
            value={{
                userData,
                setUserId,
                setEventId,
                setSupperClubDetailId,
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}
export default UsersContext

export {UsersProvider}