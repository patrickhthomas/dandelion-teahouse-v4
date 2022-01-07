
import * as React from "react"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"
import Logo from "../icons/logo"
import { Navigation } from "./navigation"
import Wordmark from "../images/dandelion-wordmark"
import { CartButton } from "./cart-button"
import {
  hero,
  intro,
  title,
  tagline,
  container,
  wordmark,
  wordmarkContainer,
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
      <Wordmark className={wordmark}/>
      <div className={wordmarkContainer}>
      
      </div>
      <h1 className={title}> Teahouse & Apothecary</h1>
      <h3 className={tagline}>Where all your wishes come true!</h3>
      <p>We are a modern apothecary and teahouse located in downtown Vancouver, WA. Our shop features unique teas from all over the world, tea lattes, handcrafted herbal tisane blends, loose herbs, natural small batch skincare products made on-site by Gifts From the Earth, a rotating selection of art by local artists, and so much more. We are proud to be a women owned, inclusive company!</p>
      <caption>caption text</caption>
    </div>

  )
}
