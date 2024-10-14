const path = require('path')
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `k-projekt`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "SyC42GkurfcdaeFOIDBbCWGVQLRceIHQ-h6AsxdB7zE",
      "spaceId": "46t6ogndhnak"
    }
  }, 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-plugin-styled-components", 
  {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: ['G-4ERQ56KEGQ'],
    }
  },
  "gatsby-plugin-sitemap", 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  },
  {
    resolve: "gatsby-plugin-root-import",
    options: {
      resolveModules: [path.join(__dirname, "libs")],
      assets: path.join(__dirname, 'src', 'assets'),
      components: path.join(__dirname, 'src', 'components'),
    },
  }, 
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `montserrat\:400,600,700`
      ],
      display: 'swap'
    }
  },
  ]
};