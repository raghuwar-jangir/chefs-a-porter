import React, {useEffect, useState} from 'react';
import axios from "axios";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const ContactUsContext = React.createContext(defaultState)

const ContactUsProvider = (props) => {

    const [contactUsData, setContactUsData] = useState(undefined)

    useEffect(() => {
        axios.get("https://chefv2.hypervergedemo.site/v1/cms/contact_us").then(result => {
            setContactUsData(result.data.contact_us)
        })
    }, [])

    const {children} = props
    return (
        <ContactUsContext.Provider
            value={{
                contactUsData,
            }}
        >
            {children}
        </ContactUsContext.Provider>
    )
}

export default ContactUsContext

export {ContactUsProvider}