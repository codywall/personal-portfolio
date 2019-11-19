import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';

const Logo = styled(Link)`
  text-decoration: none;
  font-family: 'HouseSlant', 'Mrs Sheppards', cursive;
  font-weight: 400;
  font-style: 'normal';
  color: #f0c564;
  font-size: 1.6em;
  margin: 0;
  line-height: 0.85em;
`;

const HeaderWrapper = styled('div')`
  display: 'flex';
  justify-content: 'space-between';
  align-content: 'center';
  overflow: 'hidden';
  position: 'fixed';
  top: 0;
  width: 100vw;
  z-index: 499;
  background-color: #0471a6;
  padding: 8px;
  height: 68px;
  transition: 0.3s;
`;

const Header = () => (
  <HeaderWrapper>
    <Logo to="/">
      Cody
      <br />
      Wall
    </Logo>
  </HeaderWrapper>
);

export default Header;
