import React, {useEffect, useState} from 'react';
import axios from "axios";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const JoinChefContext = React.createContext(defaultState)

const JoinChefProvider = (props) => {

    const [joinChefData, setJoinChefData] = useState(undefined)
    useEffect(() => {
        axios.get("https://chefv2.hypervergedemo.site/v1/cms/join_us").then(result => {
            setJoinChefData(result.data.join_us)
        })
    }, [])

    const {children} = props
    return (
        <JoinChefContext.Provider
            value={{
                joinChefData,
            }}
        >
            {children}
        </JoinChefContext.Provider>
    )
}

export default JoinChefContext

export {JoinChefProvider}