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
      <span className="accent"> Cody Wall</span>. I am a front end
      <span className="accent"> web developer</span> based out of California.
    </Intro>
    <p>
      I am currently a frontend developer for <a href="https://titan.io">titan.io</a>. I love
      building websites using modern frameworks and technologies, and strive to improve the web
      experience for everyone. I am always looking for exciting projects!
    </p>
  </>
);

export default Hero;
