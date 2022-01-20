import * as React from "react"
import { graphql } from "gatsby"
import { Hero } from "../components/hero"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import {
  container,
  intro,
  tagline,
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "1tea-drinks" }) {
      title
      description
      products {
        ...ProductCard
      }
    }
  }
`


export default function TeaDrinksPage({ data }) {

  return (
    <Layout>
      <Hero title={data.shopifyCollection.title} description={data.shopifyCollection.description}/>
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}
