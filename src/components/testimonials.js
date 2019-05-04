import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default function Services() {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark(limit:1000) {
      edges {
        node {
          frontmatter {
            author
            quote
            city
            year
          }
        }
      }
    }
  }
  `)
  const testimonials = data.allMarkdownRemark.edges.map(it => it.node.frontmatter).filter(it => !!it.author).map(frontmatter => {
    const { author, quote, city, year } = frontmatter
    return (
      <>
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      <p>{`—${author}, ${city}, ${year}`}</p>
      </>
    )
  })
  return testimonials;
}
