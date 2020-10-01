import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from './header';
import './layout.css';

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
      <Main>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </Main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
