import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Colors from '../utils/colors';

const HeaderWrapper = styled('div')`
  top: 0;
  max-width: 100vw;
  min-height: 68px;
  margin: 0;

  .logo-wrapper {
    margin-top: 10px;
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
  </HeaderWrapper>
);

export default Header;
