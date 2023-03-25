import React, {useEffect, useState} from 'react';
import axios from "axios";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const UsersContext = React.createContext(defaultState)

const UsersProvider = (props) => {
    const [userData, setUserData] = useState()
    const [userId, setUserId] = useState()
    const baseUrl = `https://chefv2.hypervergedemo.site/v1/users/${userId}`;

    useEffect(() => {
        if (userId) {
            axios.get(baseUrl).then(result => {
                setUserData(result.data)
            })
        }
    }, [userId])

    const {children} = props
    return (
        <UsersContext.Provider
            value={{
                userData,
                setUserId,
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}
export default UsersContext

export {UsersProvider}