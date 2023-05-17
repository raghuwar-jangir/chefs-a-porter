// module.exports = {
//     siteMetadata: {
//         title: `Getting Started with Gatsby`,
//         description: `A tutorial that goes over Gatsby development`,
//         author: `@digitalocean`,
//         siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
//     },
//     plugins: [
//         `gatsby-plugin-react-helmet`,
//         `gatsby-plugin-image`,
//         {
//             resolve: `gatsby-source-filesystem`,
//             options: {
//                 name: `images`,
//                 path: `${__dirname}/src/assets/images`,
//             },
//         },
//         {
//             resolve: `gatsby-transformer-sharp`,
//             options: {
//                 // The option defaults to true
//                 checkSupportedExtensions: false,
//             },
//         },
//         `gatsby-plugin-sharp`,
//         {
//             resolve: `gatsby-plugin-manifest`,
//             options: {
//                 name: `gatsby-starter-default`,
//                 short_name: `starter`,
//                 start_url: `/`,
//                 background_color: `#663399`,
//                 // This will impact how browsers show your PWA/website
//                 // https://css-tricks.com/meta-theme-color-and-trickery/
//                 // theme_color: `#663399`,
//                 display: `minimal-ui`,
//                 icon: `src/assets/images/1.png`,
//                 html: { useGatsbyImage: false }// This path is relative to the root of the site.
//             },
//         },
//         // this (optional) plugin enables Progressive Web App + Offline functionality
//         // To learn more, visit: https://gatsby.dev/offline
//         // `gatsby-plugin-offline`,
//
//     ],
// }

module.exports = {
    siteMetadata: {
        title: "My Gatsby Site",
        description: "This is a demo site built with Gatsby",
        author: "John Doe",
    },
    flags: {
        DEV_SSR: true
      },
    plugins: [
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "My Gatsby Site",
                short_name: "My Site",
                start_url: "/",
                background_color: "#ffffff",
                theme_color: "#663399",
                display: "standalone",
                icon: "src/assets/images/Logo.png",
            },
        },
    ],
}