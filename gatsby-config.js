require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

module.exports = {
  siteMetadata: {
    siteTitle: "dandelion-teahouse-apothecary",
    siteTitleDefault: "Dandelion Teahouse and Apothecary online store by Product Pat Design",
    siteUrl: "https://dandelionteahouse.com",
    hrefLang: "en",
    siteDescription:
      "A Gatsby starter using the latest Shopify plugin showcasing a store with product overview, individual product pages, and a cart.",
    siteImage: "/default-og-image.jpg",
    twitter: "@gatsbyjs",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: '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',
        storeUrl: "dandelion-teahouse-apothecary.myshopify.com",
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}
