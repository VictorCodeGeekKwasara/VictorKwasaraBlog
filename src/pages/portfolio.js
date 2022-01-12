import React from 'react'
import {graphql} from 'gatsby' ;
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image"
import { Box } from '@mui/system';
import {CardActionArea,Link} from "gatsby-theme-material-ui";
import {Typography} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import img1 from '../images/smallA.jpeg'
import img2 from '../images/handsome.jpg'
import { useWidth } from '../hooks/useWidth';




export default function Portfolio({data, pageContext}) {
  
let mobile = useWidth(true) ; //hook used to toggle screen components based on width
const styles = {

  bg:{
     position:'absolute',
     top:'0px',
     left:'0px',
     width: mobile? '98.5vw':'100vw',
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
  const sites = [{ src:img1, link:'https://professorcodegeekblogsitesample1.netlify.app',name:'Blog sample', description:'A blog and portfolio site using react, mui'},{ src:img2,link:'https://nortongymv1.netlify.app',name:'Gym landing Page', description:'A responsive Landing Page using Gatsby'}]
  return (
    <Layout>
      <div style={styles.bg}></div>
      <div  style={styles.wrapper}>       
      <ul  sx={styles.wrapper.box}>
        {
          sites.map((site,i)=>{            
           
            return     <Card sx={styles.wrapper.box.card} key={i+Date.now()}>
                          <CardActionArea sx={styles.wrapper.box.card.actionArea} to={site.link}>
                          {/* <GatsbyImage sx={styles.wrapper.card.actionArea.img} image={image} alt="blog image" /> */}

                           {/* <StaticImage sx={styles.wrapper.card.actionArea.img} src={site.src}   alt="site display image" placeholder="blurred"      layout="fixed"    width={200} height={200}
                           /> */}
                          <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                              {site.name}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                            {site.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              
                            </Typography>
                             </CardContent>
                            </CardActionArea>
                        </Card>  }

          )
        }
       </ul>
      </div>
     
      
    </Layout>
  )
}