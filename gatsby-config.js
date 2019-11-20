import Colors from './src/utils/colors';

module.exports = {
  siteMetadata: {
    title: `Cody Wall`,
    description: `Cody Wall's personal portfolio, built with React using Gatsby.`,
    author: `@codywall`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: Colors.primary,
        theme_color: Colors.primary,
        display: `fullscreen`,
        icon: `src/images/favicon-cody.png`
      }
    }
  ]
};
