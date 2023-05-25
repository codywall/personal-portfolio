import React from 'react';
import PropTypes from 'prop-types';
import { MantineProvider } from '@mantine/core';
import styled from 'styled-components';
import './layout.css';
import theme from '../utils/theme';
import Navigation from './navigation';

const Main = styled('main')`
  max-width: 950px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const links = [
  { label: 'Home', link: '/' },
  // { label: 'Projects', link: '/projects' },
  { label: 'Blog', link: '/blog' },
  { label: 'Contact', link: '/contact' },
];

const Layout = ({ children }) => {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Navigation links={links} />
        <Main>{children}</Main>
      </MantineProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
