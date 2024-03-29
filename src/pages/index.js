import React from 'react';
import { graphql, Link } from 'gatsby';

import {
  Container,
  Text,
  Col,
  Grid,
  TextInput,
  Textarea,
  Button,
  Flex,
  Title,
  SimpleGrid,
} from '@mantine/core';

import jobs from '../data/jobs.json';
import Layout from '../components/layout';
import ArticleCard from '../components/article-card';
import Contact from '../components/contact-form';
import SEO from '../utils/SEO';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map((edge) => edge.node.frontmatter);

  return (
    <Layout>
      <SEO title="Home" />
      <Container size="xl">
        <Container id="hero" py={50}>
          <header>
            <Title order={1} align="center">
              Cody Wall
            </Title>
            <Text align="center" size="lg">
              Full-Stack Software Engineer | Data Systems Architect | Decentralization Advocate
            </Text>
          </header>
        </Container>

        <Container id="about" pb={50}>
          <Title order={2}>About</Title>
          <Text>
            As a versatile Full-Stack Software Engineer, I've built a diverse portfolio across
            various sectors. I manage all aspects of a project, from concept to deployment, with a
            focus on creating powerful yet user-friendly software.
          </Text>
          <Text mt={10}>
            I champion collaboration, appreciating the unique insights from each team member and
            fostering open communication to achieve our goals.
          </Text>
          <Text mt={10}>
            {' '}
            Driven by curiosity, I'm always learning, pushing the boundaries of technology to solve
            complex problems and embrace new challenges. There's no task too great, and no detail
            too small.
          </Text>
        </Container>

        {/* <Container id="portfolio" pb={50}>
          <Title order={2}>Portfolio</Title>
          <Grid gutter="md">
            <Col span={4}>
              <Text weight={500}>Responsive Web App</Text>
              <Text>
                Designed and developed a responsive web application that streamlined user workflows.
              </Text>
            </Col>
            <Col span={4}>
              <Text weight={500}>Database Optimization</Text>
              <Text>
                Implemented performance enhancements and security measures for a large-scale
                database system.
              </Text>
            </Col>
            <Col span={4}>
              <Text weight={500}>Web3 Platform</Text>
              <Text>
                Built a decentralized application harnessing the power of blockchain technology.
              </Text>
            </Col>
          </Grid>
          <Flex justify="center" pt={10}>
            <Link href="/projects">More projects</Link>
          </Flex>
        </Container> */}

        <Container id="blog" pb={50}>
          <Title order={2}>Blog</Title>
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            {posts.map((post) => (
              <ArticleCard
                title={post.title}
                image={post.featuredImage.childImageSharp.gatsbyImageData} //this doesn't work
                date={post.date}
                key={post.title}
                link={post.path}
              />
            ))}
          </SimpleGrid>
          <Flex justify="center" pt={10}>
            <Link to="/blog">View all blog posts</Link>
          </Flex>
        </Container>

        <Container pb={50}>
          <Title order={2}>Work Experience</Title>
          {jobs.map((job) => (
            <Grid gutter="sm" pb={20}>
              <Col span={12}>
                <Text weight={700}>{job.title}</Text>
                <Text>{job.company}</Text>
                <Text>{job.dates}</Text>
              </Col>
              <Col span={12}>
                <Text>{job.description}</Text>
              </Col>
            </Grid>
          ))}
        </Container>

        <Container id="contact" pb={50}>
          <Title order={2}>Contact</Title>
          <Text pb={30}>
            I welcome the opportunity to collaborate, explore new challenges, or simply chat about
            the latest industry trends. Feel free to connect.
          </Text>
          <Contact />
        </Container>
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/markdown-pages/" } }
      limit: 10
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            date
            category
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.77)
              }
            }
          }
        }
      }
    }
  }
`;
