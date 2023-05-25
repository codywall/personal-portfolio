module.exports = {
  siteMetadata: {
    title: `Cody Wall`,
    description: `Discover the portfolio of Cody Wall, a Full Stack Software Engineer specializing in front-end to back-end development, UI/UX design, database administration, and decentralized technology. Explore projects that demonstrate a passion for creating accessible, robust, and cutting-edge solutions.`,
    author: `Cody Wall`,
    image: `/site-thumbnail.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/content/markdown-pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-projects',
        path: `${__dirname}/src/content/markdown-projects`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`Montserrat:400,700`],
        display: `swap`,
      },
    },
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        sharpPlugins: [`gatsby-plugin-sharp`, `gatsby-transformer-sharp`],
      },
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
        icon: `src/images/favicon-cody.png`,
      },
    },
  ],
};
