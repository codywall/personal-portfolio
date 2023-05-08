import React from 'react';
import { graphql, Link } from 'gatsby';
import { Container, Title } from '@mantine/core';
import Layout from '../components/layout';

const ProjectsPage = ({ data }) => (
  <Layout>
    <Container>
      <Title order={1} align="center" mt={30}>
        Projects
      </Title>
      {data.allMarkdownRemark.edges.map(project => (
        <div key={project.node.id}>
          <h3>{project.node.frontmatter.title}</h3>
          <small>{project.node.frontmatter.date}</small>
          <Link to={project.node.frontmatter.path}>Read More</Link>
        </div>
      ))}
    </Container>
  </Layout>
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
