import * as React from "react"
import { Link } from "gatsby"
import CartIcon from "../icons/cart"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { primaryButton, container, strong } from "./primary-button.module.css"

export function PrimaryButton(props) {
  return (
    <div className={ container }>
    <OutboundLink  href={props.destination}
    ><div className={ primaryButton }><strong className={strong}>{props.buttonText}</strong></div></OutboundLink>
    </div>
  )
}
