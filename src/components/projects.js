import React from 'react';
import styled from '@emotion/styled';
import lindsey from '../images/lindsey-preview.jpg';
import cody from '../images/cody-preview.png';
import Colors from '../utils/colors';

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
  background-color: ${Colors.white};
  padding: 3vw;
  border-radius: 5px;
  border: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
`;

const ProjectHeadline = styled('h2')`
  position: absolute;
  top: 20px;
  right: 16px;
  z-index: 199;
  color: ${Colors.accent};
  width: 60%;
  font-size: 2.5em;
  width: auto;
`;

const ProjectType = styled('h3')`
  position: absolute;
  top: 70px;
  right: 16px;
  z-index: 199;
  color: ${Colors.accent};
  font-size: 1.5em;
`;

const displayProjects = projects.map(project => (
  <ProjectCard key={project.name}>
    <ImgWrapper>
      <ProjectHeadline>{project.name}</ProjectHeadline>
      <ProjectType>{project.projectType}</ProjectType>
    <ProjectImage src={`${project.imgUrl}`} alt={`${project.name}`} />
    </ImgWrapper>
    <p>{project.description}</p>
    <a href={project.url}>{project.url}</a>
    <a href={project.githubUrl}>{project.githubUrl}</a>
  </ProjectCard>
));

const Projects = () => <ProjectsWrapper>{displayProjects}</ProjectsWrapper>;

export default Projects;
