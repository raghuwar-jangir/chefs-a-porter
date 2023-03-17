import React, {useEffect, useState} from 'react';
import axios from "axios";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const AboutUsContext = React.createContext(defaultState)

const AboutUsProvider = (props) => {

    const [aboutUsData, setaboutUsData] = useState(undefined)
    useEffect(() => {
        axios.get("https://chefv2.hypervergedemo.site/v1/cms/about_us/").then(result => {
            setaboutUsData(result.data.about_us)
        })
    }, [])

    const {children} = props
    return (
        <AboutUsContext.Provider
            value={{
                aboutUsData,
            }}
        >
            {children}
        </AboutUsContext.Provider>
    )
}

export default AboutUsContext

export {AboutUsProvider}