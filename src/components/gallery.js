import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import './gallery.css'

export default function Gallery() {
  return (
    <StaticQuery
      query={graphql`
        {
          allImageSharp {
            edges {
              node {
                ... on ImageSharp {
                  resize(width: 200, height: 200, rotate: 180) {
                    src
                    originalName
                  }
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
              const { src, originalName } = edge.node.resize
              return <img alt={originalName} src={src} />
            })}
          </div>
        )
      }}
    />
  )
}
