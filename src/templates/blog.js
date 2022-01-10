import React from 'react'
import {graphql} from 'gatsby';
import Layout from '../components/Layout';

const styles = {

  bg:{
     position:'absolute',
     top:'0px',
     left:'0px',
     width:'100vw',
     height:'200vh', //bug needs fixing
     backgroundColor:'#1F0318',
     mixBlendMode:'multiply',
     zIndex:'-1'
  },
   wrapper:{

    margin:"10vh auto 0 auto",   
    height:'190vh',
    width:'80vw',
    overflowY:'scroll',
    textAlign:'center',
   display:'flex',
   flexDirection:'column',
   alignitems:'center',
   color:'#fff'
    
    // card:{

    // width:'80vw',

    // actionArea:{
    //   width:'100%',
      

    
    // }
  // }
  
  }


}

export default function Blog({data}) {
  return (
    <Layout>
      
      <div style={styles.bg}></div>
      <div style={styles.wrapper}>
        <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}/>
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
