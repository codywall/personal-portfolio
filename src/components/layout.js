import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { createGlobalStyle } from 'styled-components';
import Header from './header';
import './layout.css';

const GlobalStyle = createGlobalStyle`
body {
  color: ${props => (props.theme.isDark ? '#ffffff' : '#262626')};
  background: ${props => (props.theme.isDark ? '#262626' : '#ffffff')};
}
`;

const Main = styled('main')`
  max-width: 750px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
