import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"
import { formatPrice } from "../utils/format-price"
import {
    collectionCardStyle,
    collectionHeadingStyle,
    collectionImageStyle,
    collectionDetailsStyle,
    collectionVendorStyle,
    collectionPrice,
} from "./collection-card.module.css"

export function CollectionCard({ collection, eager }) {
    const {
        title,
        images,
    } = collection
    

        
        
        return (
            <div
            className={collectionCardStyle}
            to='/'
            aria-label={`View EHH collection page`}
            >

                    <div className={collectionImageStyle} data-name="collection-image-box">

                    </div>
                    <div className={collectionDetailsStyle}>
                    <h2 as="h2" className={collectionHeadingStyle}>
                    {title}
                    </h2>
                    </div>
                    </div>
                    )
                }
                
                export const query = graphql`
                fragment CollectionCard on ShopifyCollection {
                    id
                    title
                    products {
                        images {
                            id
                            altText
                            gatsbyImageData(aspectRatio: 1, width: 640)
                        }
                        priceRangeV2 {
                            minVariantPrice {
                                amount
                                currencyCode
                            }
                        }
                        vendor 
                    }  
                }
                `
                