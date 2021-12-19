module.exports = {
  siteMetadata: {
    siteTitle: `famcarenow`,
    defaultTitle: `famcarenow`,
    siteTitleShort: `famcarenow`,
    siteDescription: `famcarenow`,
    siteUrl: `https://github.com/JosephDrazen/famcarenow`,
    siteAuthor: `@josephdrazen`,
    siteImage: ``,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/jpedroschmitz/rocketdocs`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocket Docs`,
        short_name: `Rocket Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
