import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Service from './service'

export default function Services() {
  const data = useStaticQuery(graphql`
    {
      allServicesJson {
        edges {
          node {
            title
            description
            image {
              childImageSharp {
                fixed(width: 350, height: 250) {
                  originalName
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allServicesJson.edges.map(edge => {
    const { title, description, image } = edge.node
    const { fixed } = image.childImageSharp
    return (
      <Service
        key={title}
        title={title}
        description={description}
        image={fixed}
      />
    )
  })
}
