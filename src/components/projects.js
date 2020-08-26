import React from 'react';
import styled from '@emotion/styled';
import cowells from '../images/cowells-preview.png';
import cody from '../images/cody-preview.png';
import github from '../images/icons/github-logo.svg';
import externalLink from '../images/icons/link.svg';
import colors from '../utils/colors';
import device from '../utils/breakpoints';

const projects = [
  {
    name: "Cowell's Surf Shop",
    projectType: 'Retail store website',
    description:
      'Currently building a website for a surf shop in Santa Cruz, CA. I am using React to pull surf report data from an API, and to pull content from a headless CMS.',
    url: 'https://cowells-prismic.netlify.com/',
    githubUrl: 'https://www.github.com/codywall/cowells-prismic',
    imgUrl: cowells
  },
  {
    name: 'Cody Wall',
    projectType: 'Personal portfolio',
    description:
      'Rebuilt my personal portfolio using React and Gatsby, in order to achieve faster loading times.',
    url: 'https://www.codywall.com',
    githubUrl: 'https://www.github.com/codywall/gatsby-portfolio',
    imgUrl: cody
  }
];

const ProjectsWrapper = styled('div')`
  background-color: ${colors.lightgrey};
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ProjectCard = styled('div')`
  margin: -10px 2.5vw 50px 2.5vw;
  width: 90vw;
  min-height: 300px;
  background-color: ${colors.white};
  padding: 3vw;
  border-radius: 5px;
  border: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  box-shadow: 0 35px 50px -30px rgba(0, 0, 0, 0.2);

  @media ${device.tablet} {
    width: 80vw;
  }
  @media ${device.laptop} {
    width: 39vw;
  }
`;

const ImgWrapper = styled('div')`
  width: 100%;
  min-height: 200px;
  align-self: center;
  overflow: hidden;
  height: 300px;
  border-radius: 5px;
  position: relative;
  margin-bottom: 3vw;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const ProjectImage = styled('img')`
  position: absolute;
  bottom: -60px;
  height: 250%;
  filter: brightness(55%);
  width: auto;
  object-fit: cover;
`;

const ProjectInfo = styled('div')`
  z-index: 198;
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary};
  box-shadow: 0 35px 50px -30px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  padding: 10px;
  width: 100%;
  height: 24%;
  color: ${colors.white};
`;

const ProjectHeadline = styled('h3')`
  z-index: 199;
  margin: 2px 5px 5px 5px;
`;

const ProjectType = styled('h5')`
  z-index: 199;
  margin: 0 5px 5px 5px;
  font-size: 1rem;
`;

const IconWrapper = styled('div')`
  display: flex;
  fill: ${colors.primary};
  justify-content: space-around;
  width: 100%;

  a img {
    height: auto;
    width: 50px;
  }
`;

const Icon = styled('div')`
  display: flex;
  align-items: center;
  top: -10px;
  justify-content: center;
  text-align: center;

  img {
    margin-bottom: 10px;
  }
`;

const displayProjects = projects.map(project => (
  <ProjectCard key={project.name}>
    <ImgWrapper>
      <a href={project.url}>
        <ProjectInfo>
          <ProjectHeadline>{project.name}</ProjectHeadline>
          <ProjectType>{project.projectType}</ProjectType>
        </ProjectInfo>
        <ProjectImage src={`${project.imgUrl}`} alt={`${project.name}`} />
      </a>
    </ImgWrapper>
    <p>{project.description}</p>
    <IconWrapper>
      <Icon>
        <a href={project.githubUrl}>
          <img src={github} alt="" />
          <h5>Github</h5>
        </a>
      </Icon>
      <Icon>
        <a href={project.url}>
          <img src={externalLink} alt="" />
          <h5>Site Link</h5>
        </a>
      </Icon>
    </IconWrapper>
  </ProjectCard>
));

const Projects = () => (
  <ProjectsWrapper>
    {' '}
    <h2 style={{ flex: '0 0 100%', padding: '2vw 10vw', fontSize: '2em' }}>Projects</h2>
    {displayProjects}
  </ProjectsWrapper>
);

export default Projects;
