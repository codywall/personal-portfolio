import styled from 'styled-components';
import React from 'react';
import colors from '../utils/colors';

const ContactForm = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;

  label {
    display: block;
    width: 100%;
    text-transform: uppercase;
    font-size: 13px;
    padding-bottom: 10px;
    color: grey;
  }

  input {
    border: none;
    outline: none;
    background: none;
    display: block;
    width: 100%;
    margin-top: 5px;
    padding-bottom: 5px;
    font-size: 16px;
  }

  textarea {
    display: block;
    width: 100%;
    margin: 0;
    resize: none;
    height: 120px;
    padding: 5px;
  }

  input,
  textarea {
    border: none;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }

  button {
    margin-top: 1rem;
    cursor: pointer;
    width: 40%;
    border: none;
    border-radius: 28px;
    background: ${colors.primary};
    padding: 0.75rem 0;
    color: white;
  }
`;

const Contact = () => (
  <>
    <p>
      If you would like to learn more about me, feel free to connect with me on
      <a href="https://linkedin.com/in/codycwall"> LinkedIn, </a>
      and follow me on <a href="https://github.com/codywall">GitHub</a> to see what I&apos;m working
      on!
    </p>
    <p>
      If you would like to get in touch right away, send me an{' '}
      <a href="mailto:cody.wall@gmail.com">email</a> or fill this form out and I will get back to
      you right away.
    </p>
    <h3>Send me a message</h3>
    <ContactForm name="contact" method="POST" data-netlify="true" action="/success">
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">
        Name <input type="text" id="name" name="name" />
      </label>
      <label htmlFor="email">
        Email <input type="email" id="email" name="email" />
      </label>
      <label htmlFor="message">
        Message <textarea id="message" name="message" />
      </label>
      <button type="submit">Send</button>
    </ContactForm>
  </>
);

export default Contact;
