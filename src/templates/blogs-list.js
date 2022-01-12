import React from 'react'
import {graphql} from 'gatsby' ;
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {CardActionArea,Link} from "gatsby-theme-material-ui";
import {Typography} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useWidth } from '../hooks/useWidth';
import { Box } from '@mui/system';



export default function Blogs({data, pageContext}) {
  
  const previousPage = pageContext.currentPage === 2 ? '/blog': `/blog/${pageContext.currentPage-1}`;
  const nextPage = `/blog/${pageContext.currentPage + 1}`;
  const blogs = data.allMarkdownRemark.edges;

  let mobile = useWidth(true) ; //hook used to toggle screen components based on width
  
const styles = {

  bg:{
     position:'absolute',
     top:'0px',
     left:'0px',
     width:'98.5vw',
     height:'200vh', //bug needs fixing
     backgroundColor: mobile? '#1F0318' : '#D3D3D3' ,
     mixBlendMode:'multiply',
     zIndex:'-1'
  },

  wrapper:{

    marginTop:"10vh",
    height:'190vh',
    overflow:'hidden',
    width:'100%',

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
        {
          blogs.map(blog=>{            
            const image = getImage(blog.node.frontmatter.snipImage)
            return     <Card sx={styles.wrapper.box.card} key={blog.node.id}>
                          <CardActionArea sx={styles.wrapper.box.card.actionArea} to={blog.node.fields.slug}>
                          <GatsbyImage sx={styles.wrapper.box.card.actionArea.img} image={image} alt="blog image" />
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
