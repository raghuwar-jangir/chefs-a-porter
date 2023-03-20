import React, {useEffect, useState} from 'react';
import axios from "axios";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const BecomePatronContext = React.createContext(defaultState)

const BecomePatronProvider = (props) => {

    const [becomePatronData, setBecomePatronData] = useState(undefined)
    useEffect(() => {
        axios.get("https://chefv2.hypervergedemo.site/v1/cms/become_patron").then(result => {
            setBecomePatronData(result.data.become_patron)
        })
    }, [])

    const {children} = props
    return (
        <BecomePatronContext.Provider
            value={{
                becomePatronData,
            }}
        >
            {children}
        </BecomePatronContext.Provider>
    )
}

export default BecomePatronContext

export {BecomePatronProvider}