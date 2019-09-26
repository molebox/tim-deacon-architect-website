let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
    siteMetadata: {
        title: 'Tim Deacon Architect',
        description: `
        Tim Deacon is a Chartered Architect based in Shoreham-by-Sea, West Sussex, and working in Sussex and the South-East of England. Experienced in residential architecture, recent projects include new build, domestic extensions, loft conversions, office to residential conversions and listed buildings.`,
        siteUrl: 'https://timdeaconarchitect.com',
      },
    plugins: [
        `gatsby-plugin-emotion`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
        {
          resolve: 'gatsby-plugin-google-fonts',
          options: {
            fonts: [
              `Comfortaa`,
              `Open Sans`,
              `source sans pro\:300,400,400i,700` 
            ]
          }
      },
      {
        resolve: "@horacioh/gatsby-theme-instagram",
        options: {
          username: "timdeaconarchitect", 
        },
      },
      {
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: process.env.SANITY_PROJECT_ID,
          dataset: process.env.SANITY_PROJECT_DATASET,
          watchMode: false
          // a token with read permissions is required
          // if you have a private dataset
          // token: process.env.MY_SANITY_TOKEN
        }
      },
      {
        resolve: 'gatsby-theme-seo', 
        options: {
            title: 'tim deacon architect',
            description: 'Professional architectural services, tailored to suit your aspirations.',
            author: 'Tim Deacon',
            siteUrl: 'https://timdeaconarchitect.com',
            social: {
                twitter: 'studio_hungry'
            }
        }
    },
      'gatsby-plugin-typescript',
      'gatsby-theme-overreacted-toggle',
      'gatsby-plugin-theme-ui',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Tim Deacon Architect Chartered Architect`,
          short_name: `Tim Deacon Architect`,
          start_url: `/`,
          background_color: `#000`,
          theme_color: `#000`,
          display: `standalone`,
          icon: 'src/assets/T_Icon.png'
        },
      },
      'gatsby-plugin-offline'
    ],
  }