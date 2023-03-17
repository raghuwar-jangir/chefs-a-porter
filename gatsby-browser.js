import React from 'react'
import config from 'react-reveal/globals'
import smoothscroll from 'smoothscroll-polyfill'

import "normalize.css"
import {HomeProvider} from "./src/context/HomeContext";
import {AboutUsProvider} from "./src/context/AboutUsContext";

export const onClientEntry = () => {
    config({ssrFadeout: true})
    smoothscroll.polyfill()
}

// highlight-start
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element}) => <HomeProvider><AboutUsProvider>{element}</AboutUsProvider></HomeProvider>
// highlight-end
