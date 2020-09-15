/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from '@emotion/styled';
import device from '../utils/breakpoints';
import colors from '../utils/colors';

const HeroWrapper = styled('div')`
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 0 2vw;

  @media ${device.tablet} {
    margin: 50px 0;
    flex-direction: column;
  }

  @media ${device.mobile} {
    margin: 50px 0;
    flex-direction: column;
  }
`;

const HeroTextWrapper = styled('div')`
  padding-top: 11vh;
  z-index: 1;
  @media ${device.tablet} {
    width: 600px;
  }
  @media ${device.laptop} {
    width: 800px;
  }
  @media ${device.mobile} {
    padding: 20px 10px;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: 1.6em;
    font-weight: 800;
    line-height: 1.4em;

    @media ${device.tablet} {
      font-size: 2.5em;
    }
    @media ${device.mobile} {
      margin-bottom: 10px;
    }
  }

  p {
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.5em;
    padding-top: 1vw;
    max-width: 85vw;

    @media ${device.tablet} {
      font-size: 1.3rem;
    }

    @media ${device.laptop} {
      padding-top: 0;
      font-size: 1.3rem;
    }

    .accent {
      color: ${colors.primary};
    }
  }
`;

const Hero = () => (
  <HeroWrapper>
    <HeroTextWrapper>
      <h1>
        Hi!{' '}
        <span role="img" aria-label="Wave emoji">
          👋
        </span>{' '}
        I&apos;m
        <span className="accent"> Cody Wall</span>. I am a front end
        <span className="accent"> web developer</span> based out of Monterey, California.
      </h1>
      <p>
        I love building websites using modern frameworks and technologies, and strive to improve the
        web experience for everyone. I am always looking for exciting projects!
      </p>
    </HeroTextWrapper>
  </HeroWrapper>
);

export default Hero;
