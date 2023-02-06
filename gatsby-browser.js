import React from 'react'
import config from 'react-reveal/globals'
import smoothscroll from 'smoothscroll-polyfill'

// import "normalize.css"
// import './src/styles/base.scss'

export const onClientEntry = () => {
    config({ ssrFadeout: true })
    smoothscroll.polyfill()
}

// highlight-start
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element}) => {element}
// highlight-end
