import React from 'react'
import "./SocialLink.scss"

const SocialLink = (props) => {
  return (
    <a className="SocialLink" href="#" title={props.socialName}>
        {props.children}      
    </a>
  )
}

export default SocialLink
