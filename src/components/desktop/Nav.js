import React from 'react'
import { AppBar } from '@mui/material'
import {IconButton, Link} from "gatsby-theme-material-ui"
const styles = {

appbar:{

  display:'flex',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  backgroundImage:`linear-gradient(to right, #fff,#58F8FA,#fff)`,
  height:'10vh',
  

  lnk:{
    // textDecoration:'none'
   color:'#1F0318',
  }
}

// (theme)=>({
//   [theme.breakpoints.up]:{

//   }
// })



}

export default function Nav() {
  return (
    <AppBar  sxposition="static" sx={styles.appbar}>    
      <Link sx={styles.appbar.lnk} underline="hover" variant='h4' to="/">Home</Link>
      <Link sx={styles.appbar.lnk} underline="hover" variant='h4' to="/about">about</Link>
      <Link sx={styles.appbar.lnk} underline="hover" variant='h4' to="/portfolio">portfolio</Link>
      <Link sx={styles.appbar.lnk} underline="hover" variant='h4' to="/blog">blogs</Link>
      <Link sx={styles.appbar.lnk} underline="hover" variant='h4' to="/login">login</Link>
      <Link sx={styles.appbar.lnk} underline="hover" variant='h4' to="/joinus">joinus</Link>
    </AppBar>
  )
}
