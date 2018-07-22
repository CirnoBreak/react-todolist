import React from 'react'
import {
  Link as RouterLink
} from 'react-router-dom'
const Link = ({ filter, children }) => (
  <React.Fragment>
    <RouterLink style={{marginRight: '5px'}} className="link" to={"/" + filter}>{children}</RouterLink>
  </React.Fragment>
)

export default Link