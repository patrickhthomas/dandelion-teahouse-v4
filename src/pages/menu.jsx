import * as React from "react"
import { MenuListOuter } from "../components/menu-list-outer"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "2-tea-drinks" }) {
      products {
        ...ProductCard
      }
    }
  }
`

export default function MenuPage({data}) {
  return (
    <MenuListOuter products={data?.shopifyCollection?.products}/>
  )
}

