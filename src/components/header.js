import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Nav from './nav'

import './header.css'

const Header = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const { title } = data.site.siteMetadata
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
    }}
  />
)

export default Header
