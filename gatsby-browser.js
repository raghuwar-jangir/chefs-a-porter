import React from 'react'
import config from 'react-reveal/globals'
import smoothscroll from 'smoothscroll-polyfill'
import "normalize.css"
import {CmsProvider} from "./src/context/CmsContext";
import {Location} from '@reach/router';
import {UsersProvider} from "./src/context/UsersContext";
import {OtpProvider} from "./src/context/OtpContext";

export const onClientEntry = () => {
    config({ssrFadeout: true})
    smoothscroll.polyfill()
}

// highlight-start
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element}) =>
    <Location>{locationProps =>
        <CmsProvider {...locationProps}><UsersProvider>
            <OtpProvider>
                {element}
            </OtpProvider>
        </UsersProvider></CmsProvider>}</Location>
// highlight-end
