import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

export default function Blogs({data}) {

  const blogs = data.allMarkdownRemark.edges

  console.log(blogs)
  return (
    <Layout>
      <ul>
      {blogs.map((blog, id)=>(
      <li key={blog.node.id}> 
      <Link to={blog.node.fields.slug}>
      <h1>{blog.node.frontmatter.title}</h1>
      <h3>{blog.node.frontmatter.date}</h3>
      <p>{blog.node.excerpt}</p>
      </Link>     
      </li>
      
      ))}</ul>
     
    </Layout>
  )
}

export const query =  graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          id
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
