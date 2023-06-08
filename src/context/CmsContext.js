import React, {useEffect, useState, useLayoutEffect} from 'react';
import axios from "axios";
import {useLocation} from "@reach/router"
import * as _ from "lodash";
import configuration from '../configuration';


const defaultState = {
    data: {},
    footerData: {},
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

    const baseUrl = `${configuration.API_BASEURL}/cms`;

    const emptyUrl = currentPath.startsWith(null) ? currentPath : currentPath + "/";

    const [data, setData] = useState();
    const [masterData,setMasterData]=useState();
    const [isFooter,setIsFooter]=useState(false);
    const [footerData,setFooterData]=useState();

    useEffect(() => {
        if (pathInfo[currentPath] || path.pathname === '/') {
            axios.get(baseUrl + `/${pathInfo[!currentPath ? emptyUrl : currentPath]}/`).then(result => {
                setData(result.data)
            })
        }
        if (currentPath === 'become-a-patron') {
            axios.get(`${configuration.API_BASEURL}/patron_master/all`).then(result => {
                setMasterData(result.data)
            })
        }
    }, [path, currentPath])

    useEffect(() => {
        axios.get(baseUrl + `/footer/`).then(result => {
            setFooterData(result.data)
        })
    }, [])
    

    const {children} = props
    return (
        <CmsContext.Provider
            value={{
                data,
                masterData,
                footerData
            }}
        >
            {children}
        </CmsContext.Provider>
    )
}
export default CmsContext

export {CmsProvider}