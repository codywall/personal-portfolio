import React from 'react';
import { graphql, Link } from 'gatsby';
import { Container, Title } from '@mantine/core';
import Layout from '../components/layout';

// E-commerce Website: A full-stack e-commerce website can demonstrate your front-end, back-end, and database skills.

// Data Visualization Dashboard: Show off your database and UI/UX skills by creating a data visualization tool that uses real or simulated data.

// Cryptocurrency Tracker: This project would highlight your knowledge of decentralized technologies and APIs.

// Personal Blog: A self-hosted blog can demonstrate your full-stack capabilities, writing skills, and your ability to create a cohesive user experience.

const ProjectsPage = ({ data }) => (
  <Layout>
    <Container>
      <Title order={1} align="center" mt={30}>
        Projects
      </Title>
      {data.allMarkdownRemark.edges.map((project) => (
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
