import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

import './nav.css'

const BLACK_LIST = ['/404/', '/']

const upper = lower => lower.replace(/^\w/, c => c.toUpperCase())

function formatPath(path) {
  return upper(path.replace(/\//g, ''))
}

function Nav({ pages }) {
  return (
    <nav>
      <ul>
        {pages.map(({ path }) => (
          <li key={path}>
            <Link to={path}>{formatPath(path)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function NavQuery() {
  return (
    <StaticQuery
      query={graphql`
        {
          allSitePage {
            edges {
              node {
                path
                pluginCreator {
                  name
                }
              }
            }
          }
        }
      `}
      render={data => {
        console.log(data)
        const navPages = data.allSitePage.edges
          .filter(it => {
            const { pluginCreator, path } = it.node
            return (
              pluginCreator &&
              pluginCreator.name === 'gatsby-plugin-page-creator' &&
              !BLACK_LIST.includes(path)
            )
          })
          .map(it => ({
            path: it.node.path,
          }))
        return <Nav pages={navPages} />
      }}
    />
  )
}
