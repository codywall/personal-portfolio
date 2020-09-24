import React from 'react';
import styled from '@emotion/styled';
import Line from './common/line';
import cowells from '../images/cowells-preview.png';
import cody from '../images/cody-preview.png';
import github from '../images/icons/github-logo.svg';
import externalLink from '../images/icons/link.svg';
import device from '../utils/breakpoints';
import colors from '../utils/colors';

const projects = [
  {
    name: "Cowell's Surf Shop",
    description:
      'Currently building a website for a surf shop in Santa Cruz, CA. I am using React to pull surf report data from an API, and to pull content from a headless CMS.',
    url: 'https://cowells-prismic.netlify.com/',
    githubUrl: 'https://www.github.com/codywall/cowells-prismic',
    imgUrl: cowells
  },
  {
    name: 'Personal Portfolio',
    description:
      'Rebuilt my personal portfolio using React and Gatsby, in order to achieve faster loading times.',
    url: 'https://www.codywall.com',
    githubUrl: 'https://www.github.com/codywall/gatsby-portfolio',
    imgUrl: cody
  }
];

const ProjectCard = styled('div')`
  border-radius: 5px;
  border: 1.5px solid ${colors.lightgrey};
  box-shadow: 0 15px 20px -20px rgba(0, 0, 0, 0.2);
  margin: 2rem 0;
  padding: 1rem;

  .icons-wrapper {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    width: 80%;

    @media only screen and (${device.tablet}) {
      width: 50%;
    }

    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    a img {
      height: auto;
      width: 50px;
      margin-bottom: 0.5rem;
    }
  }
`;

const Projects = () => (
  <>
    <Line />
    <h2>Recent projects</h2>
    {projects.map(project => (
      <ProjectCard key={project.name}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="icons-wrapper">
          <a href={project.githubUrl}>
            <div className="icon">
              <img src={github} alt="" />
              <h5>Source</h5>
            </div>
          </a>
          <a href={project.url}>
            <div className="icon">
              <img src={externalLink} alt="" />
              <h5>Site Link</h5>
            </div>
          </a>
        </div>
      </ProjectCard>
    ))}
  </>
);

export default Projects;
