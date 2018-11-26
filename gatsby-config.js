const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: 'https://automobile-eg.de',
    title: '· Automobile EG ·',
    titleTemplate: '%s · Automobile EG',
    description:
      'WIR KAUFEN IHR AUTO GEGEN BARZAHLUNG',
    url: 'https://automobile-eg.de', // no trailing slash!
    image: '/img/automobile-eg-logo.png',
    owner: 'automobile EG',
    twitterUsername: '',
    facebookAppID: '',
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Automobile EG',
        short_name: 'Automobile EG',
        start_url: '/',
        background_color: '#04091e',
        theme_color: '#04091e',
        display: 'standalone',
        icon: 'src/images/automobile-eg-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `data`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`work sans\:600`, `quattrocento sans\:400`],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
