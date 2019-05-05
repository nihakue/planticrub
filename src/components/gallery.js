import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import './gallery.css'

export default function Gallery() {
  const data = useStaticQuery(graphql`
  {
    file(name: {eq: "gallery"}) {
      childMarkdownRemark {
        frontmatter {
          images {
            title
            image {
              childImageSharp{
                fluid(maxWidth: 250, maxHeight: 250, quality: 100) {
                  originalName
                  ...GatsbyImageSharpFluid
                }
              }
            }
          } 
        }
      }
  }
}
  `)
  const { images } = data.file.childMarkdownRemark.frontmatter
  return (
    <div className="gallery">
      {images.map(node => {
        const { image, title } = node;
        const { fluid } = image.childImageSharp
        return (
          <Img
            key={fluid.originalName}
            alt={title}
            fluid={fluid}
          />
        )
      })}
    </div>
  )
}