import React, {useEffect, useState} from 'react';
import axios from "axios";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const CmsContext = React.createContext(defaultState)

const CmsProvider = (props) => {

    const [data, setData] = useState(undefined)
    useEffect(() => {
        axios.get("https://chefv2.hypervergedemo.site/v1/cms/home/").then(result => {
            setData(result.data.home)
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