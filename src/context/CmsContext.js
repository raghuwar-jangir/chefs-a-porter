import React, {useEffect, useState, useLayoutEffect} from 'react';
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
    const pathInfo = {
        'about-us': 'about_us',
        'become-a-patron': 'become_patron',
        'contact-us': 'contact_us',
        'gift-cards': 'gift_card',
        '/': 'home',
        'join-chef': 'join_us',
        'our-chefs': 'our_chefs',
        'private': 'privee',
        'ticketed': 'supper_club',
        'corporate-booking': 'corporate_booking'
    }

    const path = useLocation();

    const currentPath = path.pathname.split("/")?.[1];

    const baseUrl = `https://chefv2.hypervergedemo.site/v1/cms`;

    const emptyUrl = currentPath.startsWith(null) ? currentPath : currentPath + "/";

    const [data, setData] = useState();
    const [masterData,setMasterData]=useState();

    useEffect(() => {
        if (pathInfo[currentPath] || path.pathname === '/') {
            axios.get(baseUrl + `/${pathInfo[!currentPath ? emptyUrl : currentPath]}/`).then(result => {
                setData(result.data)
            })
        }
        if (currentPath === 'become-a-patron') {
            axios.get('https://chefv2.hypervergedemo.site/v1/patron_master/all').then(result => {
                setMasterData(result.data)
            })
        }
    }, [path, currentPath])

    const {children} = props
    return (
        <CmsContext.Provider
            value={{
                data,
                masterData
            }}
        >
            {children}
        </CmsContext.Provider>
    )
}
export default CmsContext

export {CmsProvider}