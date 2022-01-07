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
    shopifyCollection(handle: { eq: "1tea-drinks" }) {
      products {
        ...ProductCard
      }
    }
  }
`
function Hero (props) {
  return (
    <div className={container}>
      <h1 className={intro}>Dandelion Teahouse & Apothecary</h1>
      <h2 className={tagline}>Where all your wishes come true!</h2>
      <h3>headline 3 baby</h3>
      <p>Paragraphs text</p>
      <caption>captionsdfg</caption>
    </div>
  )
}

export default function TeaDrinksPage({ data }) {
  return (
    <Layout>
      <Hero />
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}
