const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const markdownPage = path.resolve('./src/components/markdownPage.js')
  const result = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw Error(result.errors)
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { path } = node.frontmatter
    if (!path) {
      return;
    }
    createPage({
      path,
      component: markdownPage,
      context: {}, // additional data can be passed via context
    })
  })
}
