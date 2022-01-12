import React from 'react'
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image"
import {CardActionArea} from "gatsby-theme-material-ui";
import {Typography} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useWidth } from '../hooks/useWidth';

export default function Portfolio({data, pageContext}) {
  
let mobile = useWidth(true) ; //hook used to toggle screen components based on width
const styles = {

  bg:{
     position:'absolute',
     top:'0px',
     left:'0px',
     width: mobile?'100vw':'98.5vw',
     height:'200vh', //bug needs fixing
     backgroundColor: mobile? '#1F0318' : '#D3D3D3' ,
     mixBlendMode:'multiply',
     zIndex:'-1'
  },

  wrapper:{

    marginTop:"10vh",
    height:'190vh',
    overflowY:'hidden',
    
      box:{

      marginBottom:'5vh',
      

    card:{

    width:'80vw',
    marginBottom:'5vh',

    actionArea:{
      width:'100%', 
    }
  }
    }
  
  }

}
  
  return (
    <Layout>
      <div style={styles.bg}></div>
      <div  style={styles.wrapper}>       
      <ul  sx={styles.wrapper.box}>              
             
       <Card sx={styles.wrapper.box.card} >
          <CardActionArea sx={styles.wrapper.box.card.actionArea} to='https://nortongymv1.netlify.app/'>
         
            <StaticImage sx={styles.wrapper.box.card.actionArea.img} src='../images/smallA.jpeg'   alt="site display image" placeholder="tracedSvg" 
            />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Blog Site sample
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              The first iteration of this site using react and mui 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              
            </Typography>
           </CardContent>
          </CardActionArea>
          </Card>
        <Card sx={styles.wrapper.box.card} >
          <CardActionArea sx={styles.wrapper.box.card.actionArea} to='https://professorcodegeekblogsitesample1.netlify.app/'>
             <StaticImage sx={styles.wrapper.box.card.actionArea.img} src='../images/smallH.jpg'  alt="site display image" placeholder="tracedSvg" 
            />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
             Norton Gym
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            A fully Responsive gym landing page design for a hypothetical Gym in my home town.
            </Typography>
            </CardContent>
          </CardActionArea>
        </Card>     
       </ul>
     </div>    
      
    </Layout>
  )
}