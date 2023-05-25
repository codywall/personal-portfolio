import React from 'react';
import { graphql } from 'gatsby';
import { Container, Text, Title } from '@mantine/core';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../utils/SEO';

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const dateString = frontmatter.date;
  const date = new Date(dateString);

  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Container size="sm" mt={50}>
        <GatsbyImage
          image={frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={frontmatter.title}
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
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default Template;
