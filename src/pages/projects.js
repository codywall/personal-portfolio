import React from 'react';
import { graphql, Link } from 'gatsby';

const ProjectsPage = ({ data }) => (
  <div>
    <Link to="/">Back to Home</Link>
    <h1>Projects</h1>
    {data.allMarkdownRemark.edges.map(project => (
      <div key={project.node.id}>
        <h3>{project.node.frontmatter.title}</h3>
        <small>{project.node.frontmatter.date}</small>
        <br />
        <br />
        <Link to={project.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </div>
);

export const pageQuery = graphql`
  query ProjectsIndexQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(markdown-projects)/" } }) {
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

export default ProjectsPage;
