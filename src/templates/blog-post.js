import React from 'react';
import { graphql } from 'gatsby';
import { Container, Image, Text, Title } from '@mantine/core';
import Layout from '../components/layout';

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const dateString = frontmatter.date;
  const date = new Date(dateString);

  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <Layout>
      <Container size="sm" mt={50}>
        <Image
          src={frontmatter.featuredImage.childImageSharp.fluid.src}
          alt={frontmatter.title}
          radius="md"
          align="center"
          height={300}
        />
        <Title order={2} mb={10}>
          {frontmatter.title}
        </Title>
        <Text c="dimmed" mb={30}>
          Published {formattedDate}
        </Text>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        path
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Template;
