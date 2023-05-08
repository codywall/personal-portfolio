module.exports = {
  siteMetadata: {
    title: `Cody Wall Portfolio`,
    description: `Hi! I'm Cody Wall. I am a front end web developer based out of California.
    I love building websites using modern frameworks and technologies, and strive to improve the
    web experience for everyone.`,
    author: `Cody Wall`,
    image: `/site-thumbnail.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/content/markdown-pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-projects',
        path: `${__dirname}/src/content/markdown-projects`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`Montserrat:400,700`],
        display: `swap`
      }
    },
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        sharpPlugins: [`gatsby-plugin-sharp`, `gatsby-transformer-sharp`]
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
