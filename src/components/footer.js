/* eslint-disable prettier/prettier */
import React from 'react';
import { withPrefix } from 'gatsby';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import device from '../utils/breakpoints';

const FooterWrapper = styled('div')`
  display: 'flex';
  justify-content: 'space-between';
  align-content: 'center';
  position: 'fixed';
  top: 0;
  width: 100vw;
  z-index: 499;
  padding: 8px;
  height: 68px;
  transition: 0.3s;
`;

const FooterCard = styled('div')`
  margin: -10px 2.5vw 50px 2.5vw;
  width: 90vw;
  min-height: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;

  @media ${device.laptop} {
    width: 800px;
  }

  @media ${device.mobile} {
    min-height: 150px;
  }
`;

const ContactLink = styled('a')`
  padding: 15px;
  text-decoration: underline;
  width: 70%;
  font-size: 1.3em;
  align-self: center;
  color: black;

  @media ${device.mobile} {
    width: 100%;
    font-size: 1.1rem;
  }
`;

const Footer = () => (
  <div>
    <FooterWrapper>
      <h2 style={{ flex: '0 0 100%', padding: '2vw 10vw', fontSize: '2em', color: 'white' }}>
        Contact me
      </h2>
      <FooterCard>
        <ContactLink href="mailto:cwall@csumb.edu">Email me at cody.wall@gmail.com</ContactLink>
        <ContactLink href="https://github.com/codywall">Check out my GitHub profile</ContactLink>
        <ContactLink href={withPrefix('/resume_codywall.pdf')} rel="noreferrer">
          View my resume
        </ContactLink>
      </FooterCard>
    </FooterWrapper>
  </div>
);

export default Footer;
