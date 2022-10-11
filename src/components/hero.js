import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const Intro = styled('h1')`
  margin-top: 3rem;

  .accent {
    color: ${colors.accent};
  }
`;

const Hero = () => (
  <>
    <Intro>
      Hi!{' '}
      <span role="img" aria-label="Wave emoji">
        👋
      </span>{' '}
      I&apos;m
      <span className="accent"> Cody Wall</span>. I am a senior front end
      <span className="accent"> web developer</span> based out of Grass Valley, California.
    </Intro>
    <p>
      I am currently a Senior Frontend Developer at Titan.io. I have industry experience designing and building websites and web 
applications. I specialize in Javascript and have extensive professional experience working with React and Node.js. I also have professional experience with smart contracts and dApp development.
    </p>
  </>
);

export default Hero;
