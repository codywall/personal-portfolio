const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blog-post.js');
  const projectTemplate = path.resolve('src/templates/project.js');

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              category
            }
            fileAbsolutePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.fileAbsolutePath.includes('/content/markdown-pages/')) {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          slug: node.frontmatter.path
        } // additional data can be passed via context
      });
    } else if (node.fileAbsolutePath.includes('/content/markdown-projects/')) {
      createPage({
        path: node.frontmatter.path,
        component: projectTemplate,
        context: {
          slug: node.frontmatter.path
        } // additional data can be passed via context
      });
    }
  });
};
