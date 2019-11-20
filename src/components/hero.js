import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
// import headshot from '../images/headshot.png';
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

const HeroImage = styled(Img)`
  background-color: ${Colors.primary};
  opacity: 0.4;
  height: auto;
  z-index: 3;
  position: static !important;

  picture img {
    max-width: 700px;
    bottom: -20vh;
    height: auto;
    margin-left: 40vw;
    opacity: 0.66;
  }
  @media ${device.mobileL} {
    width: auto;
    max-height: 800px;
    margin-left: 0;
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "headshot.png" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

  return (
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
      <HeroImage fluid={data.file.childImageSharp.fluid} alt="headshot" />
    </HeroWrapper>
  );
};
