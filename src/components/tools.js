import React from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import device from '../utils/breakpoints';

const ToolsWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid grey;
    margin: 1em 0;
    padding: 0;
    width: 60vw;
  }
`;

const ToolCard = styled('div')`
  height: 100%;

  @media ${device.tablet} {
    width: 80vw;
  }
  @media ${device.laptop} {
    max-width: 45%;
    padding-top: 20px;
  }
`;

const Tools = () => (
  <ToolsWrapper>
    <hr />
    <ToolCard>
      <h3>Frontend Web Development</h3>
      <p>I use modern technologies to build fast, functional websites.</p>
      <p>
        {' '}
        Responsive websites with JavaScript, ReactJS, HTML, CSS, Styled Components, GatsbyJS and Git
      </p>
    </ToolCard>
    <ToolCard>
      <h3>User Interface Design</h3>
      <p>I solve design problems with usability and accessibility in mind.</p>
      <p>Wireframes, prototypes, logos, and motion graphics with the Adobe Suite.</p>
    </ToolCard>
  </ToolsWrapper>
);

export default Tools;
