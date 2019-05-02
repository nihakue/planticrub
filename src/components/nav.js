import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

import './nav.css'

const BLACK_LIST = ['/404/']

const PLUGIN_WHITELIST = ['default-site-plugin', 'gatsby-plugin-page-creator']

const upper = lower => lower.replace(/^\w/, c => c.toUpperCase())

function formatPath(path) {
  if (path === '/') {
    return 'Home'
  }
  return upper(path.replace(/\//g, ''))
}

function Nav({ pages }) {
  return (
    <nav>
      <ul>
        {pages.map(({ path }) => (
          <li key={path}>
            <Link exact to={path} activeClassName="active">
              {formatPath(path)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function NavQuery() {
  const data = useStaticQuery(graphql`
    {
      allSitePage(sort: { fields: path, order: ASC }) {
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
  `)
  const navPages = data.allSitePage.edges
    .filter(it => {
      const { pluginCreator, path } = it.node
      return (
        pluginCreator &&
        PLUGIN_WHITELIST.includes(pluginCreator.name) &&
        !BLACK_LIST.includes(path)
      )
    })
    .map(it => ({
      path: it.node.path,
    }))
  return <Nav pages={navPages} />
}
