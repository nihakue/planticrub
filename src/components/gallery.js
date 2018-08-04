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
                  fixed(width: 250, height: 250) {
                    originalName
                    ...GatsbyImageSharpFixed
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
              const { fixed } = edge.node.childImageSharp
              return <Img alt={fixed.originalName} fixed={fixed} />
            })}
          </div>
        )
      }}
    />
  )
}
