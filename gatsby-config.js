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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#0471a6`,
        theme_color: `#0471a6`,
        display: `fullscreen`,
        icon: `src/images/favicon-cody.png`
      }
    }
  ]
};
