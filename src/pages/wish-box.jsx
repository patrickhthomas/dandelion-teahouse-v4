import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { PrimaryButton } from "../components/primary-button"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { StaticImage } from "gatsby-plugin-image"
import {
  cartButton,
  offerSection,
  aboutContainer,
  container,
  intro,
  tagline,
} from "./wish-box.module.css"

export const query = graphql`
query {
  shopifyCollection(handle: { eq: "the-wish-box" }) {
      products {
        ...ProductCard
      }
      description
      title
    }
  }
`

export default function WishBoxPage({ data }) {
  return (
    <Layout>
          <div className={aboutContainer}>
    <h3>Dandelion Teahouse &#38; Apothecary</h3>
    <h1>{data?.shopifyCollection?.title}</h1>
        <div className={offerSection}>
        
        <p>{data?.shopifyCollection?.description}</p> 
              <StaticImage
              alt='image coming soon'
              src='../images/wishBox.jpg'
              loading="lazy"
            />
        </div>
   <PrimaryButton 
    buttonText='Click here to learn more about our Wish Box' 
    destination='https://dandelion-teahouse-apothecary.myshopify.com/products/the-wish-box-february'
    />
    </div>


    
    </Layout>
    )
  }
  