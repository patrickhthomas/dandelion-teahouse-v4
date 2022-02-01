import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink, wishBox, activeWishBox } from "./navigation.module.css"


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
    {collections.map((title) => (
    title == 'Teas' || title == 'Skincare' || title == 'Tea Lattes and Specials' || title == 'Herbs' || title == 'Gifts' ?
      <Link
      key={title}
      className={navLink}
      to={`/${slugify(title)}`}
      activeClassName={activeLink}
      >
      {title}
      </Link>
      : 
      title == 'Wish Box' ?
      <Link
      key={title}
      className={wishBox}
      to={`/${slugify(title)}`}
      activeClassName={activeWishBox}
      >
      {title}
      </Link>
      :
      <></>
      ))}
      </nav>
      )
    }
    