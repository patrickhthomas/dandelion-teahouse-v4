import React from 'react'

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
  divider,
  location,
  sectionH2,
  address,
  hours,
  day,
} from "./hours-and-location.module.css"




export function HoursLocation(props)  {
  return (
    
    <div className={wrapper}>
    <h2 className="sectionH2">Location & Hours</h2>
    <div className='divider'>
    <div className='location'>
    <a target="_blank" rel="noopener noreferrer" href='https://goo.gl/maps/biekmuwE3pK9kq4o7'>
    <h3 className={address}>109 W. 7th Street<br></br>Vancouver, WA</h3><p className="mapsLink">open with google maps &gt;</p>
    </a>
    
    </div>
    <div className='hours'>
    <ul className={hours}>
    <li className={day}>
    <p>Monday</p>
    <p>CLOSED</p>
    </li>
    <li className={day}>
    <p>Tuesday</p>
    <p>CLOSED</p>
    </li>
    <li className={day}>
    <p>Wednesday</p>
    <p>10AM–4PM</p>
    </li>
    <li className={day}>
    <p>Thursday</p>
    <p>10AM–4PM</p>
    </li>
    <li className={day}>
    <p>Friday</p>
    <p>10AM–6PM</p>
    </li>
    <li className={day}>
    <p>Saturday</p>
    <p>10AM–6PM</p>
    </li>
    <li className={day}>
    <p>Sunday</p>
    <p>10AM–4PM</p>
    </li>
    
    </ul>
    </div>
    </div>
    </div>
    )
  }
  