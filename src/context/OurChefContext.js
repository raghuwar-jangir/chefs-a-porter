import React, {useEffect, useState} from 'react';
import axios from "axios";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const OurChefContext = React.createContext(defaultState)

const OurChefProvider = (props) => {

    const [ourChefData, setOurChefData] = useState(undefined)
    useEffect(() => {
        axios.get("https://chefv2.hypervergedemo.site/v1/cms/our_chefs/").then(result => {
            setOurChefData(result.data)
        })
    }, [])

    const {children} = props
    return (
        <OurChefContext.Provider
            value={{
                ourChefData,
            }}
        >
            {children}
        </OurChefContext.Provider>
    )
}

export default OurChefContext

export {OurChefProvider}