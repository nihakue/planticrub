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
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
