import React from 'react';
import styled from '@emotion/styled';

const HeroWrapper = styled('div')`
  background-color: #0471a6;
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
  color: #fdfdfd;
  font-size: 1.6em;
  font-weight: 800;
  line-height: 1.4em;
`;

const Accent = styled('span')`
  color: #f0c564;
`;

const HeroBody = styled('h3')`
  font-family: 'Montserrat', sans-serif;
  color: #fdfdfd;
  font-weight: 300;
  font-size: 1.3em;
  line-height: 1.4em;
  padding-top: 1vw;
  max-width: 85vw;
`;

const HeroOverlay = styled('div')`
  background-color: #0471a6;
  opacity: 0.43;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

const HeroImage = styled('img')`
  position: absolute;
  bottom: -10vh;
  width: 100vw;
  height: auto;
  margin-left: 10vw;
  opacity: 0.66;
`;

/* <div id="landing__wrapper">
<div id="landing__text--wrapper">
    <h1 id="landing__headline">Hi, I’m <span class="accent">Cody Wall</span>.<br>
        I am a web <span class="accent">developer</span> <br>& user interface
        <span class="accent">designer</span>. </h1>
    <h3 id="landing__body">I am a Communication Design senior at CSUMB.<br></h3>
</div>
<div id="landing__overlay">
    <img id="landing__image" src="img/cody-headshot_transparent.png" alt="headshot of cody">
</div>
</div> */

const Hero = () => (
  <HeroWrapper>
    <HeroTextWrapper>
      <HeroHeadline>
        Hi, I&apos;m
        <Accent> Cody Wall</Accent>. I am a web
        <Accent> developer</Accent>
        <br />& user interface
        <Accent> designer</Accent>.
      </HeroHeadline>
      <HeroBody>I am a Communication Design senior at CSUMB.</HeroBody>
    </HeroTextWrapper>
    <HeroOverlay>
      <HeroImage />
    </HeroOverlay>
  </HeroWrapper>
);

export default Hero;
