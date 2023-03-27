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
        'privee-viewmore': 'menu'

    }

    const path = useLocation()
    const currentPath = path.pathname.split("/")[1];
    const [userData, setUserData] = useState()
    const [userId, setUserId] = useState()
    const [eventId, setEventId] = useState()
    const baseUrl = `https://chefv2.hypervergedemo.site/v1`;

    useEffect(() => {
        if (userId || eventId) {
            axios.get(baseUrl + `/${pathInfo[currentPath]}/` + `${currentPath === 'chef-details' ? userId : eventId}`).then(result => {
                setUserData(result.data)
            })
        } else if (currentPath === 'privee-viewmore') {
            axios.get(baseUrl + '/menu').then(result => {
                setUserData(result.data)
            })
        }
    }, [userId, eventId, currentPath])

    const {children} = props
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