import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { HomePage } from "../components/home-page"
import { ProductListingLimit } from "../components/product-listing"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import {
  dateTimeContainer,
  listItem,
  summaryContainer,
  linkContainer,
  eventsContainer,
  list,
  container,
  intro,
  tagline,
} from "./events.module.css"

export const query = graphql`
query MyCalendarQuery {
  calendar {
    id
    description
    summary
    children {
      ... on CalendarEvent {
        id
        end {
          dateTime
          timeZone
        }
        start {
          dateTime
          timeZone
        }
        summary
        description
      }
    }
  }
}
`
const toDateString = Date();

export default function EventsPage({ data }) {
  
  return (
    <Layout>
      <div className={eventsContainer}>
        <h1>Upcoming events</h1>
    <ul className={list}>
    {data.calendar.children.map((event, index) => (
      <li
      key={index} className={listItem}>
      
      <div className={dateTimeContainer}>

      <h2>{event.start.dateTime.slice(5,7)}/{event.start.dateTime.slice(8, 10)}</h2>

      {(parseInt(event.start.dateTime.slice(11,13))) > 12 ? 
        <h3>
        {(parseInt(event.start.dateTime.slice(11,13)) - 12)}{event.start.dateTime.slice(13,16)}PM
        </h3> : 
        <h3>
        {parseInt(event.start.dateTime.slice(11,13))}{event.start.dateTime.slice(13,16)}AM
        </h3>
      }

            
      </div>
      <h3 className={summaryContainer}>{event.summary}</h3>
      <OutboundLink className={linkContainer} href={event.description}
      >More Details/Tickets</OutboundLink>
      
      </li>
      ))}
      </ul>
      </div>
      </Layout>
      )
    }
    