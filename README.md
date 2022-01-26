<p align="center">
  <a href="https://www.dandelionteahouse.com">
    <img alt="Gatsby" src="" width="60" />
  </a>
</p>
<h1 align="center">
  DandelionTeahouse.Com
</h1>



## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

    .
    ├── example
    ├── src
    ├── static
    ├── .env.example
    ├── gatsby-browser.js
    ├── gatsby-config.js
    └── gatsby-node.js

1. **`/example`**: This directory includes a CSV file containing sample data to import into a development store. There are also instructions on generating your own sample data, and a link to a dataset with 30,000 SKUs.

2. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3. **`/static`**: Every file in this directory will be copied over to the `public` folder during the build. Learn more about [using the `static` folder](https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/). In this project it holds the `og:image` and favicons.

4. **`/.env.example`**: Duplicate this file, rename it to `.env`, and fill out the keys. You'll need to define those environment variables to get the source plugin, cart and search working.

5. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser. In this project it wraps the whole application with the context provider of the store/shopping cart.

6. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process. In this project it adds a custom Babel plugin to Gatsby.

### Detailed look into `src`

The whole logic for how the site looks and behaves is inside `src`.

    .
    ├── components
    ├── context
    ├── icons
    ├── images
    ├── pages
    ├── styles
    └── utils

1.  **`/components`**: Contains the React components used for building out the pages.

2.  **`/context`**: Contains the store context (e.g. adding/deleting/updating items in shopping cart, accessing Shopify), and the urql context used for search using Shopify's Storefront API.

3.  **`/icons`**: Contains all custom SVG icons and the logo.

4.  **`/pages`**: Contains the homepage and all automatically generated pages for each product category and individual product pages. The [File System Route API](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/) is used to create those pages from your Shopify data.

5.  **`/styles`**: Contains globals styles. These are `variables.css`, used to define shared CSS custom properties, `reset.css`, which contains a CSS reset based on Chakra, and `global.css`, which includes a tiny set of global styles.

6.  **`/utils`**: Utility functions, e.g. formatting the price correctly, plus custom hooks used for handling search and pagination.

### 🎨 Styling

The site uses [CSS Modules](https://github.com/css-modules/css-modules) for styling, which allows you to use regular CSS, scoped to the individual component. Theme values such as fonts, colors and spacing are set in `src/styles/variables.css`.

### SSR Search Page

The `/search` page uses server-side rendering to show a list of products based on filters and search terms in the URL query parameters.


