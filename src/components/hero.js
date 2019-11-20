/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from '@emotion/styled';
import headshot from '../images/headshot.png';
import device from '../utils/breakpoints';
import Colors from '../utils/colors';

const HeroWrapper = styled('div')`
  background-color: ${Colors.primary};
  max-width: 100vw;
  height: 78.5vh;
  z-index: 1;
  position: relative;
  overflow: hidden;
`;

const HeroTextWrapper = styled('div')`
  margin-left: 2vw;
  padding: 11vh 0 0 4vw;
  z-index: 1;
`;

const HeroHeadline = styled('h1')`
  font-family: 'Montserrat', sans-serif;
  color: ${Colors.white};
  font-size: 1.6em;
  font-weight: 800;
  line-height: 1.4em;

  @media ${device.tablet} {
    margin-top: 50px;
    font-size: 2.5em;
  }
`;

const Accent = styled('span')`
  color: ${Colors.accent};
`;

const HeroBody = styled('h3')`
  font-family: 'Montserrat', sans-serif;
  color: ${Colors.white};
  font-weight: 300;
  font-size: 1.3em;
  line-height: 1.4em;
  padding-top: 1vw;
  max-width: 85vw;
`;

const HeroImageWrapper = styled('div')`
  background-color: ${Colors.primary};
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
`;

const Hero = () => (
  <HeroWrapper>
    <HeroTextWrapper>
      <HeroHeadline>
        Hi, I&apos;m
        <Accent> Cody</Accent>. This is a<Accent> test</Accent>
        <br />
        website built with
        <Accent> React</Accent>.
      </HeroHeadline>
      <HeroBody>Wish me luck.</HeroBody>
    </HeroTextWrapper>
    <HeroImageWrapper>
      <HeroImage src={headshot} alt="headshot" />
    </HeroImageWrapper>
  </HeroWrapper>
);

export default Hero;
