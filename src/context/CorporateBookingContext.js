import React, {useEffect, useState} from 'react';
import axios from "axios";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const CorporateBookingContext = React.createContext(defaultState)

const CorporateBookingProvider = (props) => {

    const [corporateBookingData, setCorporateBookingData] = useState(undefined)

    useEffect(() => {
        axios.get("https://chefv2.hypervergedemo.site/v1/cms/corporate_booking").then(result => {
            setCorporateBookingData(result.data.corporate_booking)
        })
    }, [])

    const {children} = props
    return (
        <CorporateBookingContext.Provider
            value={{
                corporateBookingData,
            }}
        >
            {children}
        </CorporateBookingContext.Provider>
    )
}

export default CorporateBookingContext

export {CorporateBookingProvider}