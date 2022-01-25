import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import {
  container,
  intro,
  tagline,
  herbProduct,
} from "./herbs.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "3-herbs" }) {
      products {
        ...ProductCard
      }
      description
      title
    }
  }
`


export default function HerbsPage({ data }) {
  return (
    <Layout>
                      <div className={container}>
    <h3>Dandelion Teahouse &#38; Apothecary</h3>
    <h1 className={intro}>{data?.shopifyCollection?.title}</h1>
    <p>{data?.shopifyCollection?.description}</p>
    </div>
      <ProductListing className={herbProduct} products={data?.shopifyCollection?.products} />
    </Layout>
  )
}
