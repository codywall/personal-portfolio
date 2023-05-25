import React from 'react';
import { Container, Text, Title } from '@mantine/core';
import ContactForm from '../components/contact-form';
import Layout from '../components/layout';

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Title order={1} align="center" mt={30}>
          Contact
        </Title>
        <Text mt={10} mb={30}>
          Hello there! Whether you've got a challenging problem that needs solving, a fascinating
          idea to discuss, or simply want to chat about the latest in technology, I'd love to hear
          from you. I'm always open to exploring new opportunities and collaborations, and I believe
          that the best work comes from diverse partnerships and innovative thinking.
        </Text>
        <Text mt={10} mb={30}>
          So go ahead, don't be a stranger. Reach out and let's start a conversation. Looking
          forward to connecting with you!
        </Text>
        <ContactForm />
      </Container>
    </Layout>
  );
};

export default Contact;
