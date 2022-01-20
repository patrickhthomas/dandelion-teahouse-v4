import * as React from "react"
import Logo from "../icons/logo"
import { Link } from "gatsby"
import patLogo from '../images/productPatLogo.png'
import {
  footerStyle,
  copyright,
  links,
  blurb,
  logos,
  footerNavList,
  footerNavListItem,
  item,
  list,
  wrapper,
} from "./footer.module.css"

export function Footer() {
  return (
  <div className={wrapper}>
    <ul className={list}>
      <li className={item}>
      <Link to='/'>Home</Link>
      </li>
      <li className={item}>
      <Link to='/menu/'>Menu</Link>
      </li>
      <li className={item}>
      <Link to='/gallery/'>Gallery</Link>
      </li>
      <li className={item}>
        <a
          href="https://www.giftsfromtheearth.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
          style={{ padding: '0em', fontSize: '.6em' }}
        >
          Gifts from the Earth
        </a>
      </li>
      <li className={item}>
        <a
          href="https://www.patrickthomas.design/"
          rel="nofollow noopener noreferrer"
          target="_blank"
          style={{ padding: '0em', fontSize: '.6em' }}
        >

          Copyright &copy; 2022 Patrick Thomas Design All Rights Reserved
          <img
            src={patLogo}
            style={{ width: '2em' }}
            alt="Product Pat Logo"
          />
        </a>
      </li>
    </ul>
  </div>
)}
