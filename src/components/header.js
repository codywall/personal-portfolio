import { React, useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import Colors from '../utils/colors';

const LogoWrapper = styled('div')`
  margin: 10px;
`;

const Logo = styled('button')`
  outline: none;
  cursor: pointer;
  font-family: 'HouseSlant', 'Mrs Sheppards', cursive;
  font-weight: 400;
  font-style: 'normal';
  color: ${Colors.accent};
  background: none;
  border: none;
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

const Header = () => {
  const themeContext = useContext(ThemeManagerContext);

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo onClick={() => themeContext.toggleDark()}>
          Cody
          <br />
          Wall
        </Logo>
      </LogoWrapper>
    </HeaderWrapper>
  );
};

export default Header;
