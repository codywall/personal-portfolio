import React from 'react';
import Hero from '../components/hero';
import Tools from '../components/tools';
import Projects from '../components/projects';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Tools />
    <Projects />
    <Footer />
  </Layout>
);

export default IndexPage;
