import React from 'react'
import {Typography} from '@mui/material';
import{ Button} from "gatsby-theme-material-ui"

const styles ={

  wrapper:{
    minHeight:'90vh',
    
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
    // marginBottom:'20px',

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

export default function Home() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.wrapper.txt}>
      <Typography variant='h1'>Welcome to Victor’s Blog and Potfolio site</Typography>

      <Button size='large' to={`/blog`} variant='contained' sx={styles.wrapper.txt.btn1}> Blogs</Button>
      <Button size='large' to={`/portfolio`} variant='contained' sx={styles.wrapper.txt.btn2}>Portfolio</Button>
    </div>
   
    </div>
  )
}
