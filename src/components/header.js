import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Nav from './nav'

import './header.css'

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  const { fixed } = data.logo.childImageSharp
  return (
    <>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div className="header">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          <Img fixed={fixed} alt="logo" />
        </Link>
        <div className="logo">
          <h1>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
              }}
            >
              {title}
            </Link>
          </h1>
        </div>
        <Nav />
      </div>
    </>
  )
}

export default Header
