import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useLocation} from "@reach/router";

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
    console.log("currentPath",currentPath);
    const [userData, setUserData] = useState()
    console.log("userData",userData);
    const [userId, setUserId] = useState()
    const [eventId, setEventId] = useState()
    const baseUrl = `https://chefv2.hypervergedemo.site/v1`;

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