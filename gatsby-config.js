module.exports = {
  siteMetadata: {
    title: `Autonomous Vehicle Conference`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
}