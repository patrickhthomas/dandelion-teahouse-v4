
import * as React from "react"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"
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
  aboutContainer,
  aboutSection,
  offerSection,
  homePageHeader2,
  logo as logoCss,
  searchButton,
  nav,
} from "./home-page.module.css"




export function HomePage({ data }) {
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
      <p className={heroBlurb}>* Online ordering is currently unavailable. If you'd like to place an order online, please email us at kat@dandelionteahouse.com! </br></br>We are a modern apothecary and teahouse located in downtown Vancouver, WA. Our shop features unique teas from all over the world, tea lattes, handcrafted herbal tisane blends, loose herbs, natural small batch skincare products made on-site by Gifts From the Earth, a rotating selection of art by local artists, and so much more. We are proud to be a women owned, inclusive company!</p>
      <div className={iconContainer}>
        <WomanOwned className={iconB}/> <InclusiveCompany className={iconC}/>
      </div>
      </div>
      <div className={locationHoursContainer}>
        <h2 className={homePageHeader2}>Hours &#38; Location</h2>
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
      <div className={aboutContainer}>
        <h2 className={homePageHeader2}>What we offer</h2>
        <div className={offerSection}>
        <h3>The Teahouse</h3>
        
        <p>Made to order teas, specialty tea drinks, loose teas and herbs, treats from Chandelier Bakery, ReTreat, Nomad, and more!</p> 
              <StaticImage
              alt='image coming soon'
              src='../images/Teahouse.jpg'
              loading="lazy"
            />
        </div>
        <div className={offerSection}>
          <h3>The Apothecary</h3>
        
        <p>Loose leaf teas, dry herbs, and skincare solutions produced in-house.</p> 
              <StaticImage
              alt='image coming soon'
              src='../images/Apothecary.jpg'
              loading="lazy"
            />
        </div>
      </div>
      <div className={aboutContainer}>
        <h2 className={homePageHeader2}>Our Story</h2>
        <h3>How it started</h3>
        <div className={aboutSection}>
        <p>Dandelion Teahouse owner Marianne Wilson Stein was born and raised in the Pacific Northwest and moved to Vancouver with her husband Steve in 1991 to start their family. Marianne became interested in all things holistic after her first daughter, Kat (the teahouse manager!) was born in 1992 - she wanted to give her daughter a good, healthy start in life. She began immersing herself in books about gardening, herbal remedies, and holistic medicine, and one year decided to make a few skincare goodies as Christmas gifts with her naturopath friend, Peggy. She enjoyed it so much that she dove into the art of skincare even more! As time went on, Marianne learned that she had a knack for making lotions and “potions,” and Gifts From the Earth was born.</p> 
              
              <StaticImage
              alt='image coming soon'
              src='../images/storefront.jpg'
              loading="lazy"
            />
        </div>

        <div className={aboutSection}>
        <p>Marianne realized early on that creating these products was her meditation, her zen time, and a time to be grateful that she has an opportunity to help others care for themselves. As the company grew, she began creating with all kinds of new products; everything from teas to facial scrubs, CBD creams to body lotion, all while raising a family and working another full time job in the construction industry. Even still, since the inception of Gifts From the Earth, every single product sold has been handmade by Marianne. When Marianne’s younger daughter was born in 1998, life was full of fun. Lots of arts and craft, music, theatre - you name it, we did it. This fun, artistic environment instilled her love of creating and caring for others in Kat and Addy at a very young age. Growing up with the company, both daughters have helped dream up ideas for new products, worked the booth at the farmers market, run the social media and website, and helped the company blossom.</p> 
              <StaticImage
              alt='image coming soon'
              src='../images/scrub.jpg'
              loading="lazy"
            />
        </div>
        <div className={aboutSection}>
<p>In 2018, Addy had the idea of opening a tea shop in Vancouver with a friend. Unfortunately, the plan never came to fruition, but the thought stuck and ruminated in the family’s minds until December of 2019 when Marianne learned about the Vancouver Downtown Association’s Launchpad Competition. The competition had a prize of $40,000, which would be awarded to a local business to help open a brick and mortar shop in the downtown area. Marianne immediately called Kat, who was living in Philadelphia, to ask if they should enter and open a teahouse/apothecary. Of course Kat and Addy were both on board!</p>
              <StaticImage
              alt='image coming soon'
              src='../images/fam.jpg'
              loading="lazy"
            />
        </div>
        <div className={aboutSection}>
<p>Marianne got right to work on the application and business plan, emailing draft after draft to Kat to revise and edit, and they sent it in. A few weeks later they learned that they were semi-finalists, and before they knew it, they were 1 of 3 businesses in the final round! At this stage, all 3 contestants were asked to present their business plan and make a pitch to a panel of judges, consisting of local business owners and community members from downtown Vancouver. Marianne and Kat worked tirelessly on the powerpoint presentation, making sure everything was perfect, and come the day of the presentation - it was! Marianne knew that she knocked it out of the park as soon as it was over, and it was at this time that she decided that whether or not they won the grant, she would find a way to make this project happen. In July of 2020, the VDA made the announcement: Dandelion Teahouse & Apothecary won the first annual launchpad competition. Marianne and Addy got right to work on the new space, knocking down walls and getting construction underway. Kat worked remotely from the east coast, prepping operations, social media, and working with Dandelion’s designer (her boyfriend) Patrick Thomas on building the brand. Kat and Patrick moved back to Vancouver in January of 2021, which Marianne is over the moon excited about. The rest, as they say, is history!</p>
              <StaticImage
              alt='image coming soon'
              src='../images/vda.jpg'
              loading="lazy"
            />
        </div>
        <h3>How it's going</h3>
        <div className={aboutSection}>
        <p>As of May 22, 2021, Dandelion is officially open! We invite anyone and everyone to come enjoy some tea and check out our new space. Once it is safe to do so, we will be holding a wide variety of events - yoga classes, art workshops, spa nights, you name it!</p> 
              <StaticImage
              alt='image coming soon'
              src='../images/tea-collage.jpg'
              loading="lazy"
            />
        </div>
      </div>
    </div>
    
    )
  }
  
