import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { ProductListing } from "./product-listing"
import { menuStyle, navLink, activeLink } from "./navigation.module.css"

export function MenuListOuter({ products }) {
  const {
    allShopifyCollection: { collectionTypes },
  } = useStaticQuery(graphql`
    query {
      allShopifyCollection {
        collectionTypes: distinct(field: title)
      }
    }
  `)

  const product = {products}

  return (
    <div className={menuStyle}>
      {collectionTypes.map((collection) => (
        <Link
          key={collection}
          className={navLink}
          to={`/collections/${slugify(collection)}`}
          activeClassName={activeLink}
        >
          {collection}
                <ProductListing products={product} />
        </Link>
      ))}
    </div>
  )
}
