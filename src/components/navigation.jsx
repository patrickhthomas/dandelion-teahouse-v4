import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink } from "./navigation.module.css"

export function Navigation({ className }) {
  const data= useStaticQuery(graphql`
  query {
    allShopifyCollection(sort: {fields: handle, order: ASC}) {
        nodes {
          title
          handle
        }
    }
  }
  `)
  const collections = data.allShopifyCollection.nodes.map(node => node.title)
  return (
  
    <nav className={[navStyle, className].join(" ")}>
    <Link
    key="All"
    className={navLink}
    to="/"
    activeClassName={activeLink}
    >
    Home
    </Link>
    <Link
    key="All"
    className={navLink}
    to="/products/"
    activeClassName={activeLink}
    >
    All products
    </Link>
    {collections.map((title) => (
      <Link
      key={title}
      className={navLink}
      to={`/${slugify(title)}`}
      activeClassName={activeLink}
      >
      {title}
      </Link>
      ))}
      </nav>
      )
    }
    