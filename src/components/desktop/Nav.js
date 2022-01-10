import React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
  return (
    <div>    
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/portfolio">portfolio</Link>
      <Link to="/blog">blogs</Link>
      <Link to="/login">login</Link>
      <Link to="/joinus">joinus</Link>
    </div>
  )
}
