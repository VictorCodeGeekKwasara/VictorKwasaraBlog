import React from 'react'
import Footer from './desktop/Footer'
import Nav from './desktop/Nav'
import MobileFooter from './mobile/MobileFooter'
import MobileNav from './mobile/MobileNav'
import { useWidth } from '../hooks/useWidth'


const styles= {

  wrapper:{

    
    // display:'flex',
    // flexDirection:'column',
    // minHeight:'100vh',
  }
}

export default function Layout({children}) {

    let mobile = useWidth(true)

  return (
    <>

    {mobile ? <MobileNav/>:<Nav/>}
    
    {children}
    
    {mobile? <MobileFooter/>:<Footer/>}
      
    </>
  )
}
