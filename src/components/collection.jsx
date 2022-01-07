import * as React from "react"
import { CollectionCard } from "./collection-card"
import { collectionContainerStyle } from "./collection.module.css"

// To optimize LCP we mark the first product card as eager so the image gets loaded faster
export function Collection ({ collections = [] }) {
  return (
    <div className={collectionContainerStyle}>
      {collections.map((p, index) => (
        <CollectionCard collection={p} key={p.id} eager={index === 0} />
      ))}
    </div>
  )
}