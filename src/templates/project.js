import React from 'react';
import { graphql } from 'gatsby';
import { Container, Title } from '@mantine/core';
import Layout from '../components/layout';

const ProjectTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Container size="sm" mt={50}>
        <Title order={1} mb={10}>
          {frontmatter.title}
        </Title>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
};

export const projectQuery = graphql`
  query ProjectByPath($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

export default ProjectTemplate;
