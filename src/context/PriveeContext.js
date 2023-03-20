import React, {useEffect, useState} from 'react';
import axios from "axios";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const PriveeContext = React.createContext(defaultState)

const PriveeProvider = (props) => {

    const [priveeData, setPriveeData] = useState(undefined)
    useEffect(() => {
        axios.get("https://chefv2.hypervergedemo.site/v1/cms/privee/").then(result => {
            setPriveeData(result.data.privee)
        })
    }, [])

    const {children} = props
    return (
        <PriveeContext.Provider
            value={{
                priveeData,
            }}
        >
            {children}
        </PriveeContext.Provider>
    )
}

export default PriveeContext

export {PriveeProvider}