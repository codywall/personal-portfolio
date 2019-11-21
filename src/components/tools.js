import React from 'react';
import styled from '@emotion/styled';
import Colors from '../utils/colors';
import device from '../utils/breakpoints';

const ToolsWrapper = styled('div')`
  background-color: #f2f7f8;
  z-index: 4;
  position: relative;
  padding-bottom: 70px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
  }
`;

const ToolCard = styled('div')`
  margin: -10px 2.5vw 50px 2.5vw;
  width: 90vw;
  min-height: 300px;
  background-color: ${Colors.white};
  padding: 30px;
  border-radius: 5px;
  border: none;
  height: 100%;
  z-index: 3;
  box-shadow: 0 35px 50px -30px rgba(0, 0, 0, 0.2);

  @media ${device.tablet} {
    width: 80vw;
  }
  @media ${device.laptop} {
    width: 39vw;
  }
`;

/* <div id="tools__wrapper">
            <div id="tools__dev" class="tools__card">
                <h4 class="card__header">Frontend Development</h4>
                <p class="card__description">Using modern technologies to build fast, functional websites.
                </p>
                <div class="card__tech--wrapper">
                    <p class="card__caption">Responsive design with JavaScript, HTML, CSS, SASS, Wordpress, and Git</p>
                </div>
            </div>
            <div id="tools__design" class="tools__card">
                <h4 class="card__header">User Interface Design</h4>
                <p class="card__description">Solving design problems with the end user and usability in mind.</p>
                <div class="card__tech--wrapper">
                    <p class="card__caption">Wireframes, prototypes, logos, and motion graphics with the Adobe
                        Suite.</p>
                </div>
            </div>
        </div> */
const Tools = () => (
  <ToolsWrapper>
    <ToolCard>
      <h2>Frontend Development</h2>
      <p>Using modern technologies to build fast, functional websites.</p>
      <p> Responsive design with JavaScript, HTML, CSS, SASS, Wordpress, and Git</p>
    </ToolCard>
    <ToolCard>
      <h2>User Interface Design</h2>
      <p>Solving design problems with the end user and usability in mind.</p>
      <p>Wireframes, prototypes, logos, and motion graphics with the Adobe Suite.</p>
    </ToolCard>
  </ToolsWrapper>
);

export default Tools;
