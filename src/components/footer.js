/* eslint-disable prettier/prettier */
import React from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';

const FooterWrapper = styled('div')`
  background-color: ${colors.lightgrey};
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const FooterCard = styled('div')`
  margin: -10px 2.5vw 50px 2.5vw;
  width: 90vw;
  min-height: 300px;
  background-color: ${colors.white};
  padding: 3vw;
  border-radius: 5px;
  border: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  box-shadow: 0 35px 50px -30px rgba(0, 0, 0, 0.2);
`;

const ContactLink = styled('a')`
  border: 2px solid #0471a6;
  padding: 15px;
  width: 70%;
  font-size: 1.3em;
  text-align: center;
  align-self: center;
`;

const Footer = () => (
  <div>
    <FooterWrapper>
      <h2 style={{ flex: '0 0 100%', padding: '2vw 10vw', fontSize: '2em' }}>Contact Me</h2>
      <FooterCard>
        <ContactLink
          target="_blank"
          href="https://docs.google.com/document/d/1vrW6vmf0XC2tll5VKizhi4xFpwTtFgKXe1d8wJBCdO4/edit?usp=sharing"
          class=" contact__link button__link"
        >
          View My Resume
        </ContactLink>
        <ContactLink class="contact__link button__link" href="mailto:cwall@csumb.edu">
          Send Me an Email
        </ContactLink>
      </FooterCard>
    </FooterWrapper>
  </div>
);

export default Footer;
