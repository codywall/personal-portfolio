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
  Anchor,
  Flex,
  Title
} from '@mantine/core';

const IndexPage = () => {
  // const { data } = props;
  // const allProjects = data.allMarkdownRemark.edges;
  const jobs = [
    {
      id: '1',
      title: 'Database Administrator',
      company: 'California State University, Monterey Bay',
      dates: 'March 2023 - Present',
      description:
        "As a key member of the IT department, I play a critical role in managing and maintaining the university's Oracle databases and servers. I ensure data integrity, security, and optimal performance by implementing effective monitoring tools and applying best practices. My proactive approach to database management has helped the university improve efficiency and make data-driven decisions."
    },
    {
      id: '2',
      title: 'Senior Frontend Engineer',
      company: 'Titan.io',
      dates: 'February 2022 - March 2023',
      description:
        "At Titan.io, I've been instrumental in driving the company's success through multiple high-impact projects. I led the development of marketing pages for Lumerin Hashpower Marketplace's beta launch, resulting in an impressive 12,000+ signups within the first week. By revamping the Lumerin Wallet UI, I significantly enhanced the user experience. Additionally, I played a pivotal role in unifying the Titan and Lumerin brands, creating a stronger visual identity across platforms."
    },
    {
      id: '3',
      title: 'Software Developer',
      company: 'California State University, Monterey Bay',
      dates: 'October 2019 - February 2022',
      description:
        "During my tenure as a Software Developer, I made substantial contributions to the university's digital infrastructure. I implemented a user-friendly dashboard for potential students, leveraging Salesforce to streamline the application process and enhance applicant satisfaction. Collaborating with UX designers, I improved the campus website's functionality by adding features and integrating APIs and headless content management systems, enriching the overall user experience."
    }
  ];

  const posts = [
    {
      title: 'Exploring the Future of Decentralization',
      description:
        'A deep dive into the potential impact of blockchain technology on various industries.'
    },
    {
      title: 'Mastering Frontend Development',
      description: 'Essential tips and tricks for creating stunning, user-friendly web interfaces.'
    }
  ];

  return (
    <Container size="sm" px="lg">
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
        <Title order={2} align="center">
          About
        </Title>
        <Text>
          I am a versatile developer with a diverse skillset that includes frontend, backend, UI/UX
          design, database administration, and web3 development. My experience spans various
          industries and clients, from startups to established companies, and I&apos;ve consistently
          delivered tailored solutions that address unique challenges.
        </Text>
        <Text pt={10}>
          My passion for decentralized technology has led me to explore the potential of blockchain
          and its transformative impact on various sectors. I pride myself on my strong work ethic,
          problem-solving abilities, and commitment to continuous learning and growth.
        </Text>
      </Container>

      <Container id="portfolio" pb={50}>
        <Title order={2} align="center">
          Portfolio
        </Title>
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
              Implemented performance enhancements and security measures for a large-scale database
              system.
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
          <Link href="#more-projects">More projects</Link>
        </Flex>
      </Container>

      <Container pb={50}>
        <Title order={2} align="center">
          Work Experience
        </Title>
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

      <Container id="blog" pb={50}>
        <Title order={2} align="center">
          Blog
        </Title>
        <ul>
          {posts.map(post => (
            <li key={post.title}>
              <Text weight={500}>{post.title}</Text>
              <Text>{post.description}</Text>
            </li>
          ))}
        </ul>
      </Container>

      <Container id="contact">
        <Title order={2} align="center">
          Contact
        </Title>
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
            githubURL
            url
          }
        }
      }
    }
  }
`;
