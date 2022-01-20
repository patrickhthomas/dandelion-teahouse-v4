exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ShopifyProduct implements Node {
      gatsbyPath: String
    }
  `
  createTypes(typeDefs)
}