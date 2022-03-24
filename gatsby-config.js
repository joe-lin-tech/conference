require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Autonomous Vehicle Expo`,
    description:
      "A unique experience to learn about the engineering, ethics, and policymaking of emerging autonomous vehicle technology.",
    url: "https://avexpo.org", // No trailing slash allowed!
    image: "/logos/logo.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        ]
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}