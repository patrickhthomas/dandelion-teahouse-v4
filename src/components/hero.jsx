import * as React from "react"
import {
  container,
  intro,
  tagline,
} from "./hero.module.css"

export function Hero ({title, description}) {
  return (
    <div className={container}>
      <h1>Dandelion Teahouse & Apothecary</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}