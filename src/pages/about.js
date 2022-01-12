import React from 'react'
import Layout from '../components/Layout'
import { Typography } from '@mui/material'
import { StaticImage } from "gatsby-plugin-image"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {IconButton, Link} from "gatsby-theme-material-ui"
import { Divider } from '@mui/material';
import balance from '../images/balance.svg';
import { useWidth } from '../hooks/useWidth';
import AboutLarge from '../components/desktop/AboutLarge';



const styles ={
 

  container:{

    width:'100%',
    height:'200vh',
    overflow:'hidden',
    
   

    bg:{
     position:'absolute',
     top:'0px',
     left:'0px',
     width:'100vw',
     height:'200vh',
     backgroundImage:`linear-gradient(to right,#58F8FA,#92A6CF,#58F8FA), radial-gradient(ellipse at bottom right,#58F8FA,#92A6CF)`,
     mixBlendMode:'multiply',
     zIndex:'-1'
  },
    
    img:{

    display:'flex',
    flexDirection:'column',
    alignItems:'flex-end',
    position:'absolute',
    top:'10vh',
    right:'0px',
    height:'80vh',
    width:'55vw',
    
    // backgroundColor:'red'
    social:{
      display:'flex',
      backgroundColor:'#fff',
      paddingLeft:'10px',
      marginLeft:'10px'
    }
  },

  victor:{
    position:'absolute',
    top:'10vh',
    left:'10px',
    height:'auto',
    width:'55vw',
    // backgroundColor:'green',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',

   
  },

  website:{

    position:'absolute',
    top:'110vh',
    right:'10px',
    height:'80vh',
    width:'55vw',
    // backgroundColor:'brown',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',

  },

  balance:{
    position:'absolute',
    top:'120vh',
    left:'0px',
    height:'85vh',
    width:'35vw',
    backgroundImage:`url(${balance})`,


  }
  },
 
}

export default function About() {

  // custome hook used to toggle the screen design based on view width improvision
  // should use beter styling solutions
let mobile = useWidth(false) ; 



  return (
    <Layout>       
      { mobile?(<div style={styles.container}>
      <div style={styles.container.bg}></div>
      <div style={styles.container.img}><StaticImage placeholder="tracedSVG" src="../images/victor.png" alt="victor pic" />
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
       </div></div>

        <div style={styles.container.victor}>
        <Typography variant='h4'>About Victor</Typography>
        <Typography variant='body'>Victor is a Web developer and programing language enthusiast. I learnt programming principles using java, learnt About the internet Using Javascript in 2022 I intent to learn some systems programming using Rust and also dabble with web 3.0 technologies like solidity, smart contracts and solana with Rust. </Typography>
        <Divider/>
        <Typography variant='body'>I make my websites Using the Mongo Db , Express , React , Nodejs (MERN).</Typography>
        <Divider/>
        <Typography variant='body'>To be fair programming now takes up an unbelievable amount of my time and it feels like a hobby sometimes.I do however have other interests which i wish i had more time for,Running , Reading non-fiction books , Designing </Typography>
        <Divider/>
         <Typography variant='body'>I hold a Bsc Honors in Mining Engineering from the University of Zimbabwe but my career path is bound to be colourfull.</Typography>

        
      
        </div>      

        <div style={styles.container.website}> 
         <Typography variant='h4'>About this Website</Typography>
        <Typography variant='body'>This website is a place where I write <Link to='/blog'>articles </Link>about life, tech,mining, news and anything that is interesting in society. I also use this site as my <Link to='/portfolio' >portfolio</Link> site, where potential clients and employers can view projects that i have made in the past.
         </Typography>
        <Typography variant='body'>To make this website i used gatsby, contentful cms for the content management,material ui, nodejs, express , jwt and Mongodb for the authentication and used continous deployment with git-gateway</Typography>
        </div>

        <div style={styles.container.balance}></div>
     
      </div>): (
        
        <AboutLarge/>        )  }
      
     
    </Layout>
  )
}
