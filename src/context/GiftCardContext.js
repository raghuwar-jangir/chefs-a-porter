import React, {useEffect, useState} from 'react';
import axios from "axios";

const defaultState = {
    data: {},
    toggleDark: () => {
    },
}

const GiftCardContext = React.createContext(defaultState)

const GiftCardProvider = (props) => {

    const [giftCardData, setGiftCardData] = useState(undefined)
    useEffect(() => {
        axios.get("https://chefv2.hypervergedemo.site/v1/cms/gift_card").then(result => {
            setGiftCardData(result.data.gift_card)
        })
    }, [])

    const {children} = props
    return (
        <GiftCardContext.Provider
            value={{
                giftCardData,
            }}
        >
            {children}
        </GiftCardContext.Provider>
    )
}

export default GiftCardContext

export {GiftCardProvider}