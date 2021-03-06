import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { HomePage } from "../components/home-page"
import { ProductListing } from "../components/product-listing"
import {
  container,
  intro,
  tagline,
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "1tea-drinks" }) {
      products {
        ...ProductCard
      }
    }
  }
`


export default function IndexPage({ data }) {
  return (
    <Layout>
      <HomePage />
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}
