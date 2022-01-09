import React from 'react'
import Footer from './desktop/Footer'
import Nav from './desktop/Nav'
import MobileFooter from './mobile/MobileFooter'
import MobileNav from './mobile/MobileNav'
import { useWidth } from '../hooks/useWidth'


export default function Layout({children}) {

    let mobile = useWidth(true)

  return (
    <div>

    {mobile ? <MobileNav/>:<Nav/>}
    
    {children}
    
    {mobile? <MobileFooter/>:<Footer/>}
      
    </div>
  )
}
