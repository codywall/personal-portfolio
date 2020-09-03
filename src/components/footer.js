/* eslint-disable prettier/prettier */
import React from 'react';
import { withPrefix } from 'gatsby';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import device from '../utils/breakpoints';

const FooterWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100vw;
  padding: 8px;
  min-height: 68px;
  text-align: center;

  h2 {
    flex: 0 0 100%;
    padding-top: 2rem;
    font-size: 2rem;
    color: white;
  }

  a {
    text-decoration: underline;
    padding-bottom: 2rem;
    font-size: 1.3em;
    font-weight: 600;
    color: ${colors.accent};

    @media ${device.mobile} {
      font-size: 1.1rem;
    }
  }
`;

const Footer = () => (
<<<<<<< HEAD
  <FooterWrapper>
    <h2>Let&apos;s work together!</h2>
    <a href="mailto:cwall@csumb.edu">cody.wall@gmail.com</a>
    <a href="https://github.com/codywall">github.com/codywall</a>
    <a href={withPrefix('/resume_codywall.pdf')} rel="noreferrer">
      View my resume
    </a>
  </FooterWrapper>
=======
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
>>>>>>> 2fed3819ea129239b5096953bf5c766e1dad5deb
);

export default Footer;
