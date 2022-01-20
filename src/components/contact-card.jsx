import React from 'react'
import styled from '@emotion/styled'
import useIsInViewport from 'use-is-in-viewport'
import FbIcon from '../icons/fb'
import IgIcon from '../icons/insta'


const Wrapper = styled.section`
padding-bottom: 3em;
display: grid;
grid-gap: 1.5em;
flex-direction: column;
@media (min-width: 640px) {
  max-width: 640px; 
  height: auto;
}
.email {
  font-size: 1em;
}
`


const Subtitle = styled.h2`
z-index: 1;
`
const ContactLine = styled.h3`
display: flex;
padding-bottom: .5em;
flex-flow: row nowrap;
z-index: 1;
`

const Social = styled.div`
display: flex;
flex-flow: row nowrap;
`

export function ContactCard(props) {
  return (
    
    <Wrapper
    >
    <Subtitle>Contact us</Subtitle>
    <div className="grid">
    <ContactLine className="email"><a href={"mailto:" + 'info@dandelionteahouse.com'}>info@dandelionteahouse.com</a></ContactLine>
    <ContactLine>(360) 718-7642</ContactLine>
    <ContactLine>
    
    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/dandelion.teahouse/?hl=en">
    <Social>
    <IgIcon/><p>Instagram</p>
    </Social>
    </a>
    </ContactLine>
    <ContactLine>
    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/dandelionteahouseapothecary/">
    <Social>
    <FbIcon/>
    <p>Facebook</p>
    </Social>
    </a>
    </ContactLine>
    </div>
    </Wrapper>
    )}
    
    export default ContactCard