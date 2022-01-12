import { Grid } from '@mui/material'
import React from 'react'
import Layout from '../Layout'
import { Typography } from '@mui/material'
import { StaticImage } from "gatsby-plugin-image"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {IconButton, Link} from "gatsby-theme-material-ui"
import { Divider } from '@mui/material';




const styles ={
 

  container:{

  
    marginTop:"-10vh",  
   

    bg:{
    
  },
    
  img:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center', 
    paddingRight:'2vw',
    paddingLeft:'2vw',    
    // backgroundColor:'red'
    social:{
     
    }
  },

  victor:{
   
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',  
     paddingRight:'2vw',
    paddingLeft:'2vw', 
  },

  website:{

    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center', 
    paddingRight:'2vw',
    paddingLeft:'2vw',
    

  },

  balance:{
   

  }
  },
 
}

export default function AboutLarge() {
  return<Grid container style={styles.container}>
       <Grid md={4} style={styles.container.website}> 
         <Typography variant='h2'>About this Website</Typography>
        <Typography variant='h6'>This website is a place where I write <Link to='/blog'>articles </Link>about life, tech,mining, news and anything that is interesting in society. I also use this site as my <Link to='/portfolio' >portfolio</Link> site, where potential clients and employers can view projects that i have made in the past.
         </Typography>
        <Typography variant='h6'>To make this website i used gatsby, contentful cms for the content management,material ui, nodejs, express , jwt and Mongodb for the authentication and used continous deployment with git-gateway</Typography>
        </Grid>
        <Grid item  md={4} style={styles.container.victor}>
        <Typography variant='h2'>About Victor</Typography>
        <Typography variant='h6'>Victor is a Web developer and programing language enthusiast. I learnt programming principles using java, learnt About the internet Using Javascript in 2022 I intent to learn some systems programming using Rust and also dabble with web 3.0 technologies like solidity, smart contracts and solana with Rust. </Typography>
        <Divider/>
        <Typography variant='h6'>I make my websites Using the Mongo Db , Express , React , Nodejs (MERN).</Typography>
        <Divider/>
        <Typography variant='h6'>To be fair programming now takes up an unbelievable amount of my time and it feels like a hobby sometimes.I do however have other interests which i wish i had more time for,Running , Reading non-fiction books , Designing </Typography>
        <Divider/>
         <Typography variant='h6'>I hold a Bsc Honors in Mining Engineering from the University of Zimbabwe but my career path is bound to be colourfull.</Typography>
        </Grid>     

      <Grid item  md={4} style={styles.container.img}>
      <StaticImage placeholder="tracedSVG" src="../images/victor.png" alt="victor pic"  
      />
      <div style={styles.container.img.social}>
           <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1, color:'#55ACEE'}}
            to='https://twitter.com/vkwasara'
          > <TwitterIcon/></IconButton>
           <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1,color:'#0A66C2' }}
            to='https://www.linkedin.com/in/victor-kwasara-7a1b06229/'
          ><LinkedInIcon/></IconButton>
           <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1,color:'#890101' }}
            to='https://www.instagram.com/professorcodegeek/'
          > <InstagramIcon/></IconButton>       
       </div></Grid>      
      </Grid>            
  }
