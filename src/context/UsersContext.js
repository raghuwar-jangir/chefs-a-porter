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
        'addons': 'addon_category_master'
    }

    const path = useLocation()
    const currentPath = path.pathname.split("/")[1];
    const baseUrl = `https://chefv2.hypervergedemo.site/v1`;
    const [userData, setUserData] = useState()
    const [userId, setUserId] = useState()
    const [eventId, setEventId] = useState()
    const [bookingId, setBookingId] = useState()
    const cookieValue = Cookies.get('BookingId');

    useEffect(() => {
        if (cookieValue) {
            setBookingId(JSON.parse(cookieValue));
        }
    }, [cookieValue])

    console.log("bookingId=======", bookingId)

    useEffect(() => {
        if (userId) {
            axios.get(baseUrl + `/${pathInfo[currentPath]}/` + userId).then(result => {
                setUserData(result.data)
            })
        } else if (eventId) {
            axios.get(baseUrl + `/${pathInfo[currentPath]}/` + eventId).then(result => {
                setUserData(result.data)
            })
        } else if (currentPath === 'privee-viewmore') {
            axios.get(baseUrl + '/menu').then(result => {
                setUserData(result.data)
            })
        } else if (currentPath === 'addons') {
            axios.get(baseUrl + '/addon_category_master/all',).then(result => {
                setUserData(result.data)
            })
        } else if (currentPath === 'addons') {
            axios.post(baseUrl + '/booking/calculate/' + bookingId).then((response) => {
                if (response.status === 200) {
                    console.log("response.data.id=====", response.data)
                    Cookies.set('calcuklationData', JSON.stringify(response.data));
                }
            })
        }
    }, [userId, eventId, currentPath])

    const {children} = props;

    return (
        <UsersContext.Provider
            value={{
                userData,
                setUserId,
                setEventId,
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}
export default UsersContext

export {UsersProvider}