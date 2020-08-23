import React from 'react';
import { graphql } from 'gatsby';
import Hero from '../components/hero';
import Tools from '../components/tools';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';
import Projects from '../components/Projects';

const IndexPage = props => {
  const { data } = props;
  const allProjects = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Tools />
      <Projects projects={allProjects} />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            slug
            summary
            title
          }
        }
      }
    }
  }
`;
