import React from 'react';
import styled from '@emotion/styled';
import lindsey from '../images/lindsey-preview.jpg';
import cody from '../images/cody-preview.png';
import github from '../images/icons/github-logo.svg';
import externalLink from '../images/icons/link.svg';
import colors from '../utils/colors';
import device from '../utils/breakpoints';

const projects = [
  {
    name: 'Lindsey Wall',
    projectType: 'Musician Site',
    description:
      'Designed and developed a website for a local musician from scratch using HTML, CSS, SASS, and Javascript.',
    url: 'https://www.lindseywallmusic.com',
    githubUrl: 'https://www.github.com/codywall/lindseywall-site',
    imgUrl: lindsey
  },
  {
    name: 'Cody Wall',
    projectType: 'Personal Portfolio',
    description:
      'Rebuilt my personal portfolio using React and Gatsby. Used styled components etc.',
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
  filter: blur(1px) brightness(75%);
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
  color: ${colors.accent};
`;

const ProjectHeadline = styled('h3')`
  z-index: 199;
  margin: 2px 5px 5px 5px;
`;

const ProjectType = styled('h5')`
  z-index: 199;
  margin: 0 5px 5px 5px;
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
      <ProjectInfo>
        <ProjectHeadline>{project.name}</ProjectHeadline>
        <ProjectType>{project.projectType}</ProjectType>
      </ProjectInfo>
      <ProjectImage src={`${project.imgUrl}`} alt={`${project.name}`} />
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
