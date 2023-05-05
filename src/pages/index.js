import React from 'react';
import { graphql, Link } from 'gatsby';

import { Container, Text, Paper, Col, Grid, TextInput, Textarea, Button } from '@mantine/core';

const IndexPage = () => {
  // const { data } = props;
  // const allProjects = data.allMarkdownRemark.edges;

  return (
    <Container>
      <Paper padding="xl" shadow="xs" className="main-container">
        <header>
          <Text align="center" size="xl" weight={700}>
            Hello, Im [Your Name]
          </Text>
          <Text align="center" size="lg">
            Versatile Developer & Decentralization Enthusiast
          </Text>
        </header>

        <section id="about">
          <Text size="lg" weight={700}>
            About
          </Text>
          <Text>
            Ive been working in the tech industry for over 3 years, with experience in frontend,
            backend, UI/UX design, and database administration. Im passionate about the potential of
            decentralized technology to transform industries and make a lasting impact. As a
            versatile developer, I always strive to expand my knowledge and skills, staying
            up-to-date with the latest trends and advancements in technology.
          </Text>
        </section>

        <section id="portfolio">
          <Text size="lg" weight={700}>
            Portfolio
          </Text>
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
          <Link href="#more-projects">More projects</Link>
        </section>

        <section id="blog">
          <Text size="lg" weight={700}>
            Blog
          </Text>
          <ul>
            <li>
              <Text weight={500}>Exploring the Future of Decentralization</Text>
              <Text>
                A deep dive into the potential impact of blockchain technology on various
                industries.
              </Text>
            </li>
            <li>
              <Text weight={500}>Mastering Frontend Development</Text>
              <Text>
                Essential tips and tricks for creating stunning, user-friendly web interfaces.
              </Text>
            </li>
          </ul>
          <nav>
            <Link href="#frontend">Frontend</Link>
            <Link href="#backend">Backend</Link>
            <Link href="#ui-ux">UI/UX Design</Link>
            <Link href="#database">Database Management</Link>
            <Link href="#decentralization">Decentralization</Link>
          </nav>
        </section>

        <section id="contact">
          <Text size="lg" weight={700}>
            Contact
          </Text>
          <form>
            <TextInput label="Name" placeholder="Name" required />
            <TextInput label="Email" placeholder="Email" required />
            <Textarea label="Message" placeholder="Message" required />
            <Button type="submit">Send Message</Button>
          </form>
          <Text>Get in touch: [Your Email Address]</Text>
          <nav>
            <Link href="https://www.linkedin.com/in/your-linkedin-profile">LinkedIn</Link>
            <Link href="https://twitter.com/your-twitter-handle">Twitter</Link>
          </nav>
        </section>
      </Paper>
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
