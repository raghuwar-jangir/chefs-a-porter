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

require("dotenv").config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: "Chefs á Porter",
        description: "Chef's Tables™ : Immersive, intimate, & conscious fine-dining experiences for the epicurious.",
        author: "Chefs á Porter",
        og: {
            title: "Best Curated Dining experience in Bangalore - Chefs á Porter",
            description: "Chef's Tables™ : Immersive, intimate, & conscious fine-dining experiences for the epicurious.",
        }
    },
    flags: {
        DEV_SSR: true
    },
    plugins: [
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                title: "Chefs á Porter",
                short_name: "Chefs á Porter",
                description: "Chef's Tables™ : Immersive, intimate, & conscious fine-dining experiences for the epicurious.",
                start_url: "/",
                background_color: "#ffffff",
                theme_color: "#663399",
                display: "standalone",
                icon: "src/assets/images/Logo.png",
            },
        },
    ],
}