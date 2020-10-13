import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Colors from '../utils/colors';
import LinkedInLogo from '../images/icons/linkedin.svg';
import GithubLogo from '../images/icons/github-logo.svg';
import MailLogo from '../images/icons/mail-icon.svg';

const HeaderWrapper = styled('div')`
  top: 0;
  max-width: 100vw;
  min-height: 68px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-wrapper {
    margin-top: 10px;
  }

  .contact-wrapper {
    img {
      width: 35px;
      margin: 0.65rem;
    }
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-family: 'HouseSlant', 'Mrs Sheppards', cursive;
  font-weight: 400;
  color: ${Colors.accent};
  font-size: 1.6em;
  line-height: 0.85em;
`;

const Header = () => (
  <HeaderWrapper>
    <div className="logo-wrapper">
      <Logo to="/">
        Cody
        <br />
        Wall
      </Logo>
    </div>
    <div className="contact-wrapper">
      <a href="https://github.com/codywall">
        <img src={GithubLogo} alt="" />
      </a>
      <a href="https://linkedin.com/in/codycwall">
        <img src={LinkedInLogo} alt="" />
      </a>
      <a href="mailto:cody.wall@gmail.com">
        <img src={MailLogo} alt="" />
      </a>
    </div>
  </HeaderWrapper>
);

export default Header;
