/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from '@emotion/styled';
import headshot from '../images/headshot.png';
import device from '../utils/breakpoints';
import colors from '../utils/colors';

const HeroWrapper = styled('div')`
  background-color: ${colors.primary};
  max-width: 100vw;
  height: 88.5vh;
  z-index: 1;
  position: sticky;
  overflow: hidden;
`;

const HeroTextWrapper = styled('div')`
  margin-left: 2vw;
  padding: 11vh 0 0 4vw;
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
`;

const HeroHeadline = styled('h1')`
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white};
  font-size: 1.6em;
  font-weight: 800;
  line-height: 1.4em;

  @media ${device.tablet} {
    margin-top: 50px;
    font-size: 2.5em;
  }
  @media ${device.mobile} {
    margin-bottom: 10px;
  }
`;

const Accent = styled('span')`
  color: ${colors.accent};
`;

const HeroBody = styled('h3')`
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white};
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
`;

const HeroImageWrapper = styled('div')`
  background-color: ${colors.primary};
  opacity: 0.4;
  z-index: 3;
`;

const HeroImage = styled('img')`
  position: absolute;
  padding: 0;
  opacity: 0.66;
  margin: 0;
  max-height: 70vh;
  bottom: 0;

  @media ${device.tablet} {
    max-height: 750px;
    margin-left: 50vw;
  }
  @media ${device.mobile} {
    bottom: -70px;
  }
`;

const Hero = () => (
  <HeroWrapper>
    <HeroTextWrapper>
      <HeroHeadline>
        Hi, I&apos;m
        <Accent> Cody Wall</Accent>. I am a front end
        <Accent> web developer</Accent> based out of Monterey, California.
        <br />
      </HeroHeadline>
      <HeroBody>
        I love building websites using modern frameworks and technologies, and strive to improve the
        web experience for everyone. I am always looking for exciting projects!
      </HeroBody>
    </HeroTextWrapper>
    <HeroImageWrapper>
      <HeroImage src={headshot} alt="headshot" />
    </HeroImageWrapper>
  </HeroWrapper>
);

export default Hero;
