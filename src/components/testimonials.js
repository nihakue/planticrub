import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default function Services() {
  const data = useStaticQuery(graphql`
  {
    allTestimonialsJson {
      edges {
        node {
          author
            quote
            city
            year
        }
      }
    }
  }
  `)
  const testimonials = data.allTestimonialsJson.edges
    .map(it => it.node)
    .sort((a, b) => b.year - a.year)
    .map(frontmatter => {
      const { author, quote, city, year } = frontmatter
      return (
        <>
          <blockquote>
            {quote}
            <footer>{`— ${author}, ${city}, ${year}`}</footer>
          </blockquote>
        </>
      )
    })
  return testimonials
}
