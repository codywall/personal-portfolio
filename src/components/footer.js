import styled from 'styled-components';
import React from 'react';
import Line from './common/line';
import ContactForm from './contact-form';

const Copyright = styled('h6')`
  margin-top: 3rem;
  font-weight: 200;
  text-align: center;
`;

const Footer = () => (
  <>
    <Line />
    <h2>Get in touch with me</h2>
    <ContactForm />

    <Copyright>&#169;2020 Cody Wall</Copyright>
  </>
);

export default Footer;
