import React from 'react'
import {graphql} from 'gatsby' ;
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  BottomNavigationAction,
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui";
import {Typography} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


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

    marginTop:"10vh",
    height:'190vh',
    overflowY:'scroll',
    
    card:{

    width:'80vw',

    actionArea:{
      width:'100%',
      

    
    }
  }
  
  }




}

export default function Blogs({data, pageContext}) {
  
  const previousPage = pageContext.currentPage === 2 ? '/blog': `/blog/${pageContext.currentPage-1}`;
  const nextPage = `/blog/${pageContext.currentPage + 1}`;
  const blogs = data.allMarkdownRemark.edges;


  return (
    <Layout>
      <div style={styles.bg}></div>
      <div  style={styles.wrapper}>       
      <ul>
        {
          blogs.map(blog=>{            
            const image = getImage(blog.node.frontmatter.snipImage)
            return     <Card sx={styles.wrapper.card} key={blog.node.id}>
                          <CardActionArea sx={styles.wrapper.card.actionArea} to={blog.node.fields.slug}>
                          <GatsbyImage sx={styles.wrapper.card.actionArea.img} image={image} alt="blog image" />
                          <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                            {blog.node.frontmatter.title}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                            {blog.node.frontmatter.date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {blog.node.excerpt}
                            </Typography>
                             </CardContent>
                            </CardActionArea>
                        </Card>  }

          )
        }
      </ul>

      <div>
        {pageContext.currentPage > 1 && (
          <Link to={previousPage}>{"<< Previous Page"}</Link>  
        )}

        {pageContext.currentPage < pageContext.pageCount &&(
          <Link to={nextPage}>
            {"Next Page >>"}
          </Link>
        )}
      </div>
      </div>
     
      
    </Layout>
  )
}

export const query = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: {contentKey: {eq: "blog"}}}
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          snipImage {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG)
            }
          }
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}

`
