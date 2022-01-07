import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

export default function Test({data}) {
const image = getImage(data.markdownRemark.frontmatter.blogImage)
  console.log(data)
  return (
    <div>
     <GatsbyImage image={image} alt="stuff" />
    </div>
  )
}

export const query = graphql`
  {
    markdownRemark {
      frontmatter {
        blogImage {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
        snipImage {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`
