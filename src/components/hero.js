import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const Accent = styled('span')`
  color: ${colors.accent};
`;

const Hero = () => (
  <div>
    <h1>
      Hi!{' '}
      <span role="img" aria-label="Wave emoji">
        👋
      </span>{' '}
      I&apos;m
      <Accent> Cody Wall</Accent>. I am a front end
      <Accent> web developer</Accent> based out of Monterey, California.
    </h1>
    <p>
      I love building websites using modern frameworks and technologies, and strive to improve the
      web experience for everyone. I am always looking for exciting projects!
    </p>
  </div>
);

export default Hero;
