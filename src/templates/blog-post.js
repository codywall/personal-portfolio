import React from 'react';
import { graphql } from 'gatsby';
import { Container, Title } from '@mantine/core';

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Container>
      <Title order={1}>{frontmatter.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

export default Template;
