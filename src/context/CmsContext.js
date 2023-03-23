import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useLocation} from "@reach/router"
import * as _ from "lodash";


const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const CmsContext = React.createContext(defaultState)

const CmsProvider = (props) => {

    const path = useLocation()

    const pathInfo = {
        'about-us': 'about_us',
        'become-a-patron': 'become_patron',
        'contact-us': 'contact_us',
        'gift-cards': 'gift_card',
        '/': 'home',
        'join-chef': 'join_us',
        'our-chefs': 'our_chefs',
        'privee': 'privee',
        'supper-club': 'supper_club',
        'corporate-booking': 'corporate_booking'
    }

    const currentPath = path.pathname.split("/")[1];
    const baseUrl = `https://chefv2.hypervergedemo.site/v1/cms`;

    const emptyUrl = currentPath.startsWith(null) ? currentPath : currentPath + "/"

    const [data, setData] = useState()


    useEffect(() => {
        axios.get(baseUrl + `/${pathInfo[!currentPath ? emptyUrl : currentPath]}/`).then(result => {
            setData(result.data)
        })
    }, [currentPath])

    console.log("data====>", data)
    console.log("currentPath====>", currentPath)


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