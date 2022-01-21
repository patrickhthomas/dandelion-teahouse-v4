import React from 'react'
import styled from '@emotion/styled'


import {
  wrapper,
  intro,
  title,
  tagline,
  wordmark,
  heroBlurb,
  wordmarkContainer,
  heroContainer,
  container,
  logo as logoCss,
  searchButton,
  nav,
  hours,
  day,
  address,
} from "./hours-and-location.module.css"




const HoursLocation = (props) =>  {
  return (
    
<div className={wrapper}>
    <h2 className="sectionH2">Location</h2>
    <div className='divider'>
    <div className='location'>
    <a target="_blank" rel="noopener noreferrer" href='https://goo.gl/maps/biekmuwE3pK9kq4o7'>
    <h3 className={address}>109 W. 7th Street<br></br>Vancouver, WA</h3><p className="mapsLink">open with google maps &gt;</p>
    </a>

    </div>
    <div className='hours'>
    <h3 className="hoursTitle">Store Hours</h3>
    <ul className={hours}>
      <li className={day}>

        <p>Monday</p>
        <p>CLOSED</p>

          </li>
          <li className={day}>

        <p>Tuesday</p>
        <p>CLOSED</p>

          </li>

          </ul>
          </div>
          </div>
          </div>
          )
        }
        
        export default HoursLocation