require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby e-Commerce Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
      {
        resolve: `gatsby-source-datocms`,
        options: {
          apiToken: `38bb65310de2f9f863521ad5f733e3`,
          preview: false,
          disableLiveReload: false,
        },
      },
      {
        resolve: 'gatsby-plugin-snipcart',
        options: {
          apiKey: 'ODA4NGY1OWYtZDU5Yi00YWVjLWFjNWYtNzNlMjY0ZTE2ODFlNjM3MTg1MDAxMTc2MjI5MjQ4',
          autopop: true
        }
      },
      
  ],
}
