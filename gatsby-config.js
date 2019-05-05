module.exports = {
  siteMetadata: {
    title: 'Planticrub Garden Design',
    author: 'Robyn Westmarwick',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    `gatsby-plugin-netlify-cms-paths`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-netlify-cms-paths`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              quality: 75,
              withWebp: true,
            },
          },
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Planticrub Garden Design',
        short_name: 'Planticrub',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: 'static/img/logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/style/typography`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline', // should always follow manifest
    'gatsby-plugin-netlify-cms', // should always be last I guess?
  ],
}
