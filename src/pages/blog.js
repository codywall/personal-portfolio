import React from 'react';
import { graphql, Link } from 'gatsby';

const BlogPage = ({ data }) => (
  <div>
    <Link to="/">Back to Home</Link>
    <h1>Blog</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>{post.node.frontmatter.date}</small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </div>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(markdown-pages)/" } }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`;

export default BlogPage;
