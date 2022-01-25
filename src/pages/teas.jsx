import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import Collapsible from 'react-collapsible';
import {
  container,
  intro,
  tagline,
  closed,
  lineBreak,
  collapsible,
  internalTrigger,
  minus,
  contentInner,
  collapseContainer,
} from "./teas.module.css"

export const query = graphql`
query {
  teas: shopifyCollection(handle: { eq: "2teas" }) {
    products {
      ...ProductCard
      productType
    }
    description
    title
  }
  black: shopifyCollection(handle: { eq: "black-tea" }) {
    products {
      ...ProductCard
      productType
    }
    description
    title
  }
  tisane: shopifyCollection(handle: { eq: "tisane-herbal-teas" }) {
    products {
      ...ProductCard
      productType
    }
    description
    title
  }
  oolong: shopifyCollection(handle: { eq: "oolong-tea" }) {
    products {
      ...ProductCard
      productType
    }
    description
    title
  }
  dandelion: shopifyCollection(handle: { eq: "dandelion-teahouse-herbal-blends" }) {
    products {
      ...ProductCard
      productType
    }
    description
    title
  }
  yerba: shopifyCollection(handle: { eq: "yerba-mate-guayasa-yaupon" }) {
    products {
      ...ProductCard
      productType
    }
    description
    title
  }
  white: shopifyCollection(handle: { eq: "white-tea" }) {
    products {
      ...ProductCard
      productType
    }
    description
    title
  }
  green: shopifyCollection(handle: { eq: "green-tea" }) {
    products {
      ...ProductCard
      productType
    }
    description
    title
  }
}
`


export default function TeasPage({ data }) {
  return (
    <Layout>
    <div className={container}>
    <h3>Dandelion Teahouse &#38; Apothecary</h3>
    <h1 className={intro}>{data?.teas?.title}</h1>
    <p>{data?.teas?.description}</p>
    <div className={collapseContainer}>
    <Collapsible 
   className={collapsible}
   contentInnerClassName={contentInner}
    triggerOpenedClassName="triggerOpen" 
    trigger={<div className={internalTrigger}><h2>{data?.dandelion?.title}</h2><h2 className={minus} aria-label="expand list">&#43;</h2></div>}
    triggerWhenOpen={<div className={internalTrigger}><h2>{data?.dandelion?.title}</h2><h2 className={minus} aria-label="collapse list">&#8722;</h2></div>}>
    <div>{data?.dandelion?.description}</div>
    <ProductListing products={data?.dandelion?.products} />
    </Collapsible>

    <hr className={lineBreak}></hr>

    <Collapsible
   className={collapsible}
   contentInnerClassName={contentInner}
    triggerOpenedClassName="triggerOpen" 
    trigger={<div className={internalTrigger}><h2>{data?.black?.title}</h2><h2 className={minus} aria-label="expand list">&#43;</h2></div>}
    triggerWhenOpen={<div className={internalTrigger}><h2>{data?.black?.title}</h2><h2 className={minus} aria-label="collapse list">&#8722;</h2></div>}>
    <div>{data?.black?.description}</div>
    <ProductListing products={data?.black?.products} />
    </Collapsible>

<hr className={lineBreak}></hr>

    <Collapsible
   className={collapsible}
   contentInnerClassName={contentInner}
    triggerOpenedClassName="triggerOpen" 
    trigger={<div className={internalTrigger}><h2>{data?.green?.title}</h2><h2 className={minus} aria-label="expand list">&#43;</h2></div>}
    triggerWhenOpen={<div className={internalTrigger}><h2>{data?.green?.title}</h2><h2 className={minus} aria-label="collapse list">&#8722;</h2></div>}>
    <div>{data?.green?.description}</div>
    <ProductListing products={data?.green?.products} />
    </Collapsible>

<hr className={lineBreak}></hr>

    <Collapsible   
    className={collapsible}
    contentInnerClassName={contentInner}
    triggerOpenedClassName="triggerOpen" 
    trigger={<div className={internalTrigger}><h2>{data?.tisane?.title}</h2><h2 className={minus} aria-label="expand list">&#43;</h2></div>}
    triggerWhenOpen={<div className={internalTrigger}><h2>{data?.tisane?.title}</h2><h2 className={minus} aria-label="collapse list">&#8722;</h2></div>}>
    <div>{data?.tisane?.description}</div>
    <ProductListing products={data?.tisane?.products} />
    </Collapsible>

<hr className={lineBreak}></hr>

    <Collapsible   
    className={collapsible}
    contentInnerClassName={contentInner}
    triggerOpenedClassName="triggerOpen" 
    trigger={<div className={internalTrigger}><h2>{data?.yerba?.title}</h2><h2 className={minus} aria-label="expand list">&#43;</h2></div>}
    triggerWhenOpen={<div className={internalTrigger}><h2>{data?.yerba?.title}</h2><h2 className={minus} aria-label="collapse list">&#8722;</h2></div>}>
    <div>{data?.yerba?.description}</div>
    <ProductListing products={data?.yerba?.products} />
    </Collapsible>

<hr className={lineBreak}></hr>

    <Collapsible
    className={collapsible}
    contentInnerClassName={contentInner}
    triggerOpenedClassName="triggerOpen" 
    trigger={<div className={internalTrigger}><h2>{data?.oolong?.title}</h2><h2 className={minus} aria-label="expand list">&#43;</h2></div>}
    triggerWhenOpen={<div className={internalTrigger}><h2>{data?.oolong?.title}</h2><h2 className={minus} aria-label="collapse list">&#8722;</h2></div>}>
    <div>{data?.oolong?.description}</div>
    <ProductListing products={data?.oolong?.products} />
    </Collapsible>

<hr className={lineBreak}></hr>

    <Collapsible
    className={collapsible}
    contentInnerClassName={contentInner}
    triggerOpenedClassName="triggerOpen" 
    trigger={<div className={internalTrigger}><h2>{data?.white?.title}</h2><h2 className={minus} aria-label="expand list">&#43;</h2></div>}
    triggerWhenOpen={<div className={internalTrigger}><h2>{data?.white?.title}</h2><h2 className={minus} aria-label="collapse list">&#8722;</h2></div>}>
    <div>{data?.white?.description}</div>
    <ProductListing products={data?.white?.products} />
    </Collapsible>
</div>
    </div>
    
    
    
    </Layout>
    )
  }
  