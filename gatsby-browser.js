import React from 'react'
import config from 'react-reveal/globals'
import smoothscroll from 'smoothscroll-polyfill'

import "normalize.css"
import {HomeProvider} from "./src/context/HomeContext";
import {AboutUsProvider} from "./src/context/AboutUsContext";
import {PriveeProvider} from "./src/context/PriveeContext";
import {ContactUsProvider} from "./src/context/ContactUsContext";
import {JoinChefProvider} from "./src/context/JoinChefContext";
import {BecomePatronProvider} from "./src/context/BecomePatronContext";
import {CorporateBookingProvider} from "./src/context/CorporateBookingContext";
import {GiftCardProvider} from "./src/context/GiftCardContext";
import {SupperClubProvider} from "./src/context/SupperClubContext";

export const onClientEntry = () => {
    config({ssrFadeout: true})
    smoothscroll.polyfill()
}

// highlight-start
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element}) =>
    <HomeProvider><AboutUsProvider><PriveeProvider><ContactUsProvider><JoinChefProvider><BecomePatronProvider><CorporateBookingProvider><GiftCardProvider><SupperClubProvider>{element}</SupperClubProvider></GiftCardProvider></CorporateBookingProvider>
    </BecomePatronProvider></JoinChefProvider></ContactUsProvider></PriveeProvider></AboutUsProvider></HomeProvider>
// highlight-end