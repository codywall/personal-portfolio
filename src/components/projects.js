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
    url: 'www.lindseywallmusic.com',
    githubUrl: 'www.github.com/codywall/lindseywall-site',
    imgUrl: lindsey
  },
  {
    name: 'This website',
    projectType: 'Personal Portfolio',
    description:
      'Rebuilt my personal portfolio using React and Gatsby. Used styled components etc.',
    url: 'www.codywall.com',
    githubUrl: 'www.github.com/codywall/gatsby-portfolio',
    imgUrl: cody
  }
];

const ProjectsWrapper = styled('div')`
  background-color: #e8e8e8;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const ProjectCard = styled('div')`
  margin: 40px 5vw;
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

  @media ${device.tablet} {
    max-width: 800px;
  }
`;

const ImgWrapper = styled('div')`
  width: 85vw;
  height: 45vw;
  align-self: center;
  overflow: hidden;
  height: 300px;
  border-radius: 5px;
  position: relative;
  margin-bottom: 3vw;
`;

const ProjectImage = styled('img')`
  position: absolute;
  bottom: -60px;
  height: 250%;
  filter: blur(5px);
  width: auto;
  object-fit: cover;
`;

const ProjectHeadline = styled('h2')`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 199;
  color: ${colors.accent};
  width: 60%;
  font-size: 2.5em;
  width: auto;
`;

const ProjectType = styled('h3')`
  position: absolute;
  top: 80px;
  right: 30px;
  z-index: 199;
  color: ${colors.accent};
  font-size: 1.5em;
`;

const IconWrapper = styled('div')`
  display: flex;
  fill: ${colors.primary};

  a img {
    fill: ${colors.primary};
    height: auto;
    width: 50px;
  }
`;

const displayProjects = projects.map(project => (
  <ProjectCard key={project.name}>
    <ProjectHeadline>{project.name}</ProjectHeadline>
    <ProjectType>{project.projectType}</ProjectType>
    <ImgWrapper>
      <ProjectImage src={`${project.imgUrl}`} alt={`${project.name}`} />
    </ImgWrapper>
    <p>{project.description}</p>
    <IconWrapper>
      <a href={project.url}>
        <img src={externalLink} alt="" />
      </a>
      <a href={project.githubUrl}>
        <img src={github} alt="" />
      </a>
    </IconWrapper>
  </ProjectCard>
));

const Projects = () => <ProjectsWrapper>{displayProjects}</ProjectsWrapper>;

export default Projects;
