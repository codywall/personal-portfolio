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
  SimpleGrid
} from '@mantine/core';

import jobs from '../data/jobs.json';
import Layout from '../components/layout';
import ArticleCard from '../components/article-card';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter);

  console.log(posts);
  return (
    <Layout>
      <Container size="xl">
        <Container id="hero" py={50}>
          <header>
            <Title order={1} align="center">
              Cody Wall
            </Title>
            <Text align="center" size="lg">
              Versatile Developer & Decentralization Enthusiast
            </Text>
          </header>
        </Container>

        <Container id="about" pb={50}>
          <Title order={2}>About</Title>
          <Text>
            I am a versatile developer with a diverse skillset that includes frontend, backend,
            UI/UX design, database administration, and web3 development. My experience spans various
            industries and clients, from startups to established companies, and I&apos;ve
            consistently delivered tailored solutions that address unique challenges.
          </Text>
          <Text pt={10}>
            My passion for decentralized technology has led me to explore the potential of
            blockchain and its transformative impact on various sectors. I pride myself on my strong
            work ethic, problem-solving abilities, and commitment to continuous learning and growth.
          </Text>
        </Container>

        <Container id="portfolio" pb={50}>
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
        </Container>

        <Container id="blog" pb={50}>
          <Title order={2}>Blog</Title>
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            {posts.map(post => (
              <ArticleCard
                title={post.title}
                image={post.featuredImage.childImageSharp.gatsbyImageData.src} //this doesn't work
                date={post.date}
                key={post.title}
              />
            ))}
          </SimpleGrid>
          <Flex justify="center" pt={10}>
            <Link to="/blog">View all blog posts</Link>
          </Flex>
        </Container>

        <Container pb={50}>
          <Title order={2}>Work Experience</Title>
          {jobs.map(job => (
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

        <Container id="contact">
          <Title order={2}>Contact</Title>
          <Text pb={30}>
            I&apos;d love to hear from you. If you&apos;re interested in discussing potential
            collaborations, exploring new opportunities, or just want to chat about the latest
            industry trends, feel free to get in touch.
          </Text>
          <form>
            <TextInput label="Name" placeholder="Name" required />
            <TextInput label="Email" placeholder="Email" required />
            <Textarea label="Message" placeholder="Message" required />
            <Button my={20} type="submit">
              Send Message
            </Button>
          </form>
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
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;
