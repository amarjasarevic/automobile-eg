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
        short_name: 'AutomobileEG',
        start_url: '/',
        background_color: '#04091e',
        theme_color: '#04091e',
        display: 'standalone',
        legacy: true,
        icons: [
          {
            src: '/favicons/icon-48x48.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
        ],
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
