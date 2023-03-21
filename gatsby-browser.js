import React from 'react'
import config from 'react-reveal/globals'
import smoothscroll from 'smoothscroll-polyfill'

import "normalize.css"
import {HomeProvider} from "./src/context/HomeContext";


export const onClientEntry = () => {
    config({ssrFadeout: true})
    smoothscroll.polyfill()
}

export const wrapRootElement = ({element}) =>
    <HomeProvider>{element}</HomeProvider>
