import React from 'react'
import {graphql, Link} from 'gatsby' ;
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function Blogs({data, pageContext}) {
  
   console.log(data)
  const previousPage = pageContext.currentPage === 2 ? '/blog': `/blog/${pageContext.currentPage-1}`;
  const nextPage = `/blog/${pageContext.currentPage + 1}`;
  return (
    <Layout>
      <div >
        <h1>Blog</h1>
      </div>

      <ul>

        {
          data.allMarkdownRemark.edges.map(blog=>{
            
            const image = getImage(blog.node.frontmatter.snipImage)
            return   <li key={blog.node.id}> 
                  <Link to={blog.node.fields.slug}>
                     <GatsbyImage image={image} alt="stuff" />
                      <h1>{blog.node.frontmatter.title}</h1>
                      <h3>{blog.node.frontmatter.date}</h3>
                      <p>{blog.node.excerpt}</p>
                   </Link> 
                   </li>    }
            
           

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
