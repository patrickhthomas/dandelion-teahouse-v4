
import * as React from "react"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"
import Logo from "../icons/logo"
import { Navigation } from "./navigation"
import Wordmark from "../images/dandelion-wordmark"
import InclusiveCompany from "../images/inclusive-company"
import WomanOwned from "../images/woman-owned"
import DandelionMap from "../images/dandelion-map"
import { StaticImage } from "gatsby-plugin-image"

import {
  hero,
  iconB,
  iconC,
  title,
  tagline,
  wordmark,
  heroBlurb,
  wordmarkContainer,
  heroContainer,
  hoursContainer,
  locationContainer,
  container,
  hoursRow,
  locationHoursContainer,
  locationHoursFlexbox,
  dandelionMap,
  blurbContainer,
  iconContainer,
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
      <div className={heroContainer}>
        <div className={wordmarkContainer}>
          <Wordmark className={wordmark}/>
        </div>
        <h1 className={title}> Teahouse &#38; Apothecary</h1>
        <h3 className={tagline}>Where all your wishes come true!</h3>
        
      </div>
      <div className={blurbContainer}>
      <p className={heroBlurb}>We are a modern apothecary and teahouse located in downtown Vancouver, WA. Our shop features unique teas from all over the world, tea lattes, handcrafted herbal tisane blends, loose herbs, natural small batch skincare products made on-site by Gifts From the Earth, a rotating selection of art by local artists, and so much more. We are proud to be a women owned, inclusive company!</p>
      <div className={iconContainer}>
        <WomanOwned className={iconB}/> <InclusiveCompany className={iconC}/>
      </div>
      </div>
      <div className={locationHoursContainer}>
        <h2>Hours &#38; Location</h2>
      <div className={locationHoursFlexbox}>
        <div className={locationContainer}>
          <a target="_blank" rel="noopener noreferrer" href='https://goo.gl/maps/biekmuwE3pK9kq4o7'>
          <h3>109 w 7th street<br></br>Vancouver, WA 98660</h3>
          <DandelionMap className={dandelionMap}/>
          </a>
        </div>
        <div className={hoursContainer}>
          <h3>Store hours</h3>
          <div className={hoursRow}>
            <p>Monday</p>
            <p>CLOSED</p>
          </div>
          <div className={hoursRow}>
            <p>Tuesday</p>
            <p>CLOSED</p>
          </div>
          <div className={hoursRow}>
            <p>Wednesday</p>
            <p>10:00am to 4:00pm</p>
          </div>
          <div className={hoursRow}>
            <p>Thursday</p>
            <p>10:00am to 4:00pm</p>
          </div>
          <div className={hoursRow}>
            <p>Friday</p>
            <p>10:00am to 6:00pm</p>
          </div>
          <div className={hoursRow}>
            <p>Saturday</p>
            <p>10:00am to 6:00pm</p>
          </div>
          <div className={hoursRow}>
            <p>Sunday</p>
            <p>10:00am to 4:00pm</p>
          </div>
        </div>
      </div>
      </div>
      <div className={container}>
      </div>
    </div>
    
    )
  }
  