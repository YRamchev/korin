/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Inter`,
            variants: [`400`, `500`, `600`],
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
