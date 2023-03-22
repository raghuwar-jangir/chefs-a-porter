import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Router, Link, Location} from "@reach/router"

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const CmsContext = React.createContext(defaultState)

const CmsProvider = (props) => {

    const pathInfo = {
        'about-us': 'about_us',
        'become-a-patron': 'become_patron',
        'contact-us': 'contact_us',
        '/': 'home',
        'join-chef': 'join_us',
        'our-chefs': 'our_chefs',
        'privee': 'privee',
        'supper-club': 'supper_club',
    }

    console.log("====>", location.pathname)

    const [data, setData] = useState(undefined)
    useEffect(() => {
        // axios.get(`https://chefv2.hypervergedemo.site/v1/cms/${}/`).then(result => {
        axios.get("https://chefv2.hypervergedemo.site/v1/cms/home/").then(result => {
            setData(result.data)
        })
    }, [])

    const {children} = props
    return (
        <CmsContext.Provider
            value={{
                data,
            }}
        >
            {children}
        </CmsContext.Provider>
    )
}

export default CmsContext

export {CmsProvider}