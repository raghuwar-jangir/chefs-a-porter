import React, {useEffect, useState} from 'react';
import axios from "axios";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const HomeContext = React.createContext(defaultState)

const HomeProvider = (props) => {

    const [data, setData] = useState(undefined)
    useEffect(() => {
        axios.get("https://chefv2.hypervergedemo.site/v1/cms/home/").then(result => {
            setData(result.data.home)
        })
    }, [])

    const {children} = props
    return (
        <HomeContext.Provider
            value={{
                data,
            }}
        >
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContext

export {HomeProvider}