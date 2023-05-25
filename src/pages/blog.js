import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { Container, Title, Text, Flex, Button } from '@mantine/core';
import Layout from '../components/layout';
import SEO from '../utils/SEO';

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map((edge) => edge.node.frontmatter);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...data.allMarkdownRemark.categories.map((cat) => cat.fieldValue)];

  return (
    <Layout>
      <SEO title="Blog" />
      <Container size="md">
        <Title order={1} align="center" mt={30}>
          Blog
        </Title>
        <Flex justify="center" pb={20}>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'filled' : 'outline'}
              mx={5}
            >
              {category}
            </Button>
          ))}
        </Flex>
        <ul>
          {posts
            .filter((post) => selectedCategory === 'All' || post.category === selectedCategory)
            .map((post) => (
              <li key={post.path}>
                <Link to={post.path}>
                  <Text weight={500}>{post.title}</Text>
                </Link>
              </li>
            ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/markdown-pages/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            date
            category
          }
        }
      }
      categories: group(field: { frontmatter: { category: SELECT } }) {
        fieldValue
      }
    }
  }
`;
