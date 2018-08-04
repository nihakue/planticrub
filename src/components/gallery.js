import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './gallery.css'

export default function Gallery() {
  return (
    <StaticQuery
      query={graphql`
        {
          gallery: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 250, maxHeight: 250, quality: 100) {
                    originalName
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges } = data.gallery
        return (
          <div className="gallery">
            {edges.map(edge => {
              const { fluid } = edge.node.childImageSharp
              return (
                <Img
                  key={fluid.originalName}
                  alt={fluid.originalName}
                  fluid={fluid}
                />
              )
            })}
          </div>
        )
      }}
    />
  )
}
