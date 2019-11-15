import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import graphql from 'gatsby';
import device from '../utils/breakpoints';

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

  @media ${device.tablet} {
    margin-top: 50px;
    font-size: 2.5em;
  }
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

const HeroImage = styled(Img)`
  position: absolute;
  bottom: -10vh;
  width: 100vw;
  height: auto;
  margin-left: 10vw;
  opacity: 0.66;

  @media ${device.mobileL} {
    width: auto;
    max-height: 800px;
    right: -10px;
  }
`;

const Hero = props => (
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
      <HeroImage fluid={props.data.childImageSharp.fluid} alt="headshot" />
    </HeroOverlay>
  </HeroWrapper>
);

export default Hero;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
query {
  headshot: file(relativePath: { eq: "headshot.png" }) {
    ...fluidImage
  }
`;
