import React from 'react';
import { Container, Title } from '@mantine/core';
import ContactForm from '../components/contact-form';
import Layout from '../components/layout';

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Title order={1} align="center" mt={30}>
          Contact
        </Title>
        <ContactForm />
      </Container>
    </Layout>
  );
};

export default Contact;
