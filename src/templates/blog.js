import React from 'react'
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import { useWidth } from '../hooks/useWidth';
import {Typography} from '@mui/material';


export default function Blog({data}) {

  let mobile = useWidth(true) ; 
  
  const styles = {

  bg:{
     position:'absolute',
     top:'0px',
     left:'0px',
     width:'98.5vw',
     height: mobile?'300vh': '210vh', //bug needs fixing
     backgroundColor: mobile? '#1F0318' : '#ffff' ,
     mixBlendMode:'multiply',
     zIndex:'-1'
  },
   wrapper:{
   margin:"10vh auto 0 auto",   
   width:mobile? '80vw':'900px',
   textAlign:'center',
   display:'flex',
   flexDirection:'column',
   alignitems:'center',
  //  color: mobile? '#fff':'#505050',
   overflowY:'hidden',
    
    // card:{

    // width:'80vw',

    // actionArea:{
    //   width:'100%',   
    // }
  // }
  
  txt:{

    fontFamily:'sans-serif',
    fontSize:'24px',
    // letterSpacing:'4px'
  }
  }


}
  return (
    <Layout>      
      {/* <div style={styles.bg}></div> */}
      <div style={styles.wrapper}>
        <div>
        <Typography variant={mobile?'h6':'h2'}>{data.markdownRemark.frontmatter.title}</Typography>
        <div  style={styles.wrapper.txt} dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}/>
        </div>                
      </div>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!){
  markdownRemark(fields: { slug:{eq: $slug}}){
    html
    frontmatter{
      title
    }
  }
}`
