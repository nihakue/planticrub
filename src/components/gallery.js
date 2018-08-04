import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './gallery.css'

export default function Gallery() {
  return (
    <StaticQuery
      query={graphql`
        {
          allImageSharp {
            edges {
              node {
                fixed(width: 250, height: 250) {
                  originalName
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges } = data.allImageSharp
        return (
          <div className="gallery">
            {edges.map(edge => {
              const { fixed } = edge.node
              return <Img alt={fixed.originalName} fixed={fixed} />
            })}
          </div>
        )
      }}
    />
  )
}
