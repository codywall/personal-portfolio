import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';
import Colors from '../utils/colors';

const LogoWrapper = styled('div')`
  margin: 10px;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-family: 'HouseSlant', 'Mrs Sheppards', cursive;
  font-weight: 400;
  font-style: 'normal';
  color: ${Colors.accent};
  font-size: 1.6em;
  line-height: 0.85em;
`;

const HeaderWrapper = styled('div')`
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

const Header = () => (
  <HeaderWrapper>
    <LogoWrapper>
      <Logo to="/">
        Cody
        <br />
        Wall
      </Logo>
    </LogoWrapper>
  </HeaderWrapper>
);

export default Header;
