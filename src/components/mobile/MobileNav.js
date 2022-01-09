import React from 'react'
import { Link } from 'gatsby'

export default function MobileNav() {
  return (
    <div >
      mobile nav
      <Link to="/about">about</Link>
      <Link to="/portfolio">portfolio</Link>
      <Link to="/blog">blogs</Link>
      <Link to="/contact">contact</Link>
      <Link to="/login">login</Link>
      <Link to="/joinus">joinus</Link>
    </div>
  )
}
