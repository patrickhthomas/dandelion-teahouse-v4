
import * as React from "react"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"
import Logo from "../icons/logo"
import { Navigation } from "./navigation"
import { CartButton } from "./cart-button"
import {
  hero,
  intro,
  title,
  tagline,
  container,
  logo as logoCss,
  searchButton,
  nav,
} from "./home-page.module.css"

export function HomePage() {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <div className={container}>
      <img></img>
      <h1 className={title}>Dandelion</h1>
      <h2 className={tagline}> Teahouse & Apothecary</h2>
      <h3>Where all your wishes come true!</h3>
      <p>Paragraphs text</p>
      <caption>captionsdfg</caption>
    </div>

  )
}
