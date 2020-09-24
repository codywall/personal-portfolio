import styled from '@emotion/styled';
/* eslint-disable prettier/prettier */
import React from 'react';
import Line from './common/line';

const Copyright = styled('h6')`
  margin-top: 3rem;
  font-weight: 200;
  text-align: center;
`

const Footer = () => (
  <>
    <Line/>
    <h2>Get in touch with me</h2>
    <p>
      If you would like to learn more about me, feel free to connect with me on
      <a href="https://linkedin.com/in/codycwall"> LinkedIn </a>
      and follow me on <a href="https://github.com/codywall">GitHub</a>.
    </p>
    <Copyright>&#169;2020 Cody Wall</Copyright>
  </>
);

export default Footer;
