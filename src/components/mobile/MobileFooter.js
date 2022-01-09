import { CopyAll } from '@mui/icons-material'
import React from 'react'


const styles={
 wrapper:{
   backgroundImage:`linear-gradient(to right, #fff,#58F8FA,#fff)`,
  
 
   height:'10vh',
   width:'100%',
   marginTop:'auto',
   textAlign:'center'
  
  
   
 }
  
}
export default function MobileFooter() {
  return (
    <div style={styles.wrapper}>
      &copy; professorCodeGeek { new Date().getFullYear()}
    </div>
  )
}
