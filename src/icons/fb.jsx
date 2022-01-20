import React from 'react'
import styled from '@emotion/styled'

import fbSrc from '../images/facebook.svg'

const FbContainer = styled.img`
max-width: 2.5em;
padding-right: 1em;
`

function FbIcon(){
  return (
    <FbContainer src={fbSrc} alt="Facebook Icon, links to Dandelion's Facebook page"/>
  )
}

export default FbIcon