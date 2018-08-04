import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default function MarkdownLayout({ data }) {
  const { html } = data.markdownRemark
  return (
    <Layout>
      <div
        className="md-page-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`
