import React, {useEffect, useState} from 'react';
import axios from "axios";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const SupperClubContext = React.createContext(defaultState)

const SupperClubProvider = (props) => {

    const [supperClubData, setSupperClubData] = useState(undefined)
    useEffect(() => {
        axios.get("https://chefv2.hypervergedemo.site/v1/cms/supper_club/").then(result => {
            setSupperClubData(result.data.supper_club)
        })
    }, [])

    const {children} = props
    return (
        <SupperClubContext.Provider
            value={{
                supperClubData,
            }}
        >
            {children}
        </SupperClubContext.Provider>
    )
}

export default SupperClubContext

export {SupperClubProvider}