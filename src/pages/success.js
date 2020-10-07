import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const SuccessPage = () => (
  <Layout>
    <h1>Message sent successfully!</h1>
    <p>
      I got your message, and will get back to you as soon as possible. Go{' '}
      <Link to="/">back home</Link>
    </p>
  </Layout>
);

export default SuccessPage;
