import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import {
  container,
  intro,
  tagline,
} from "./index.module.css"

export const query = graphql`
query {
  shopifyCollection(handle: { eq: "the-wish-box" }) {
      products {
        ...ProductCard
      }
      description
      title
    }
  }
`

export default function WishBoxPage({ data }) {
  return (
    <Layout>
          <div className={container}>
    <h3>Dandelion Teahouse &#38; Apothecary</h3>
    <h1 className={intro}>{data?.shopifyCollection?.title}</h1>
    <p>{data?.shopifyCollection?.description}</p>
    </div>
    <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
    )
  }
  