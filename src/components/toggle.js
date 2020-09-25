// Toggle.js
import { React, useContext } from 'react';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import styled from 'styled-components';
import SunIcon from '../images/icons/sun.png';
import MoonIcon from '../images/icons/moon.png';

const ToggleContainer = styled('button')`
  background: ${props => props.theme.body};  
  border: 2px solid ${props => props.theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    /* // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
    } */
  }
`;

// const Toggle = () => {
//   // const themeContext = useContext(ThemeManagerContext);
//   // const theme = themeContext.isDark === true ? 'dark' : 'light';
//   // console.log(themeContext);
//   //   const isLight = (isDark = false);
//   return (

//   );
// };

// export default Toggle;

const Toggle = () => {
  const themeContext = useContext(ThemeManagerContext);
  console.log(themeContext);

  return (
    <ToggleContainer onClick={() => themeContext.toggleDark()}>
      <img src={SunIcon} alt="" />
      <img src={MoonIcon} alt="" />
    </ToggleContainer>
  );
};

export default Toggle;
