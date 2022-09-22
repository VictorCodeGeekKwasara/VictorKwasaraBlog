import React, {useEffect, useState} from 'react'
import bgsmall from '../../images/MobileHomePage.svg'
import bgtall from '../../images/tallscreen.svg'
import {Typography} from '@mui/material';
import{ Button} from "gatsby-theme-material-ui"

export default function MobileHome() {  


const styles = {

  wrapper:{
    position:'absolute',
    top:'0px',
    left:'0px',
    backgroundImage:`url(${image}), linear-gradient(to right, #fff,#58F8FA,#fff)`,
    backgroundRepeat:'no-repeat',
    height:'100vh',
    width:'100vw',
    backgroundSize:'cover',

    txt:{
    position:'absolute',
    top:'50vh',
    left:'50vw',
    transform:'translate(-50%,-50%)',
    backgroundImage:'linear-gradient(to top right,#1F0318,#07393C,#1F0318)',
    width:'75vw',
    height:'40vh',
    textAlign:'center',
    color:'#fff',
    marginBottom:'20px',

    btn1:{
      backgroundColor:'#58F8FA',
      marginTop:'4vh',
      '&:hover':{

        backgroundColor:'#47BDBE',
        
      },
      color:'black'
    },
    btn2:{

      marginLeft:'2.5vw',
      marginTop:'4vh',
      backgroundColor:'#fff',
       '&:hover':{

        backgroundColor:'white',
        
      },
      color:'black'
    }

    }
  }
}

  return (
  
  <div style={{height:"100vh"}}>
  <div style={styles.wrapper}> 

    <div style={styles.wrapper.txt}>
      <Typography variant='h3'>Welcome to Victor’s Blog and Potfolio site</Typography>

      <Button to={`/blog`} variant='contained' sx={styles.wrapper.txt.btn1}> Blogs</Button>
      <Button to={`/portfolio`} variant='contained' sx={styles.wrapper.txt.btn2}>Portfolio</Button>
    </div>
   

    </div>
  
 </div>

    
 
  )
}
