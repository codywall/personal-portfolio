import React from 'react';
import styled from '@emotion/styled';
import Colors from '../utils/colors';
import device from '../utils/breakpoints';

const ToolsWrapper = styled('div')`
  background-color: #f2f7f8;
  z-index: 4;
  position: relative;
  padding-bottom: 70px;

  @media ${device.tablet} {
    display: flex;
    flex: 1 1 0;
  }
`;

const ToolCard = styled('div')`
  margin: 0 5vw 0 5vw;
  background-color: ${Colors.white};
  padding: 40px;
  border-radius: 5px;
  border: none;
  height: 100%;

  @media ${device.tablet} {
    margin: 0;
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
    <ToolCard
      style={{
        position: 'relative',
        top: '-3 vw'
      }}
    >
      <h2>Frontend Development</h2>
      <p>dasfsdf sdafsd fsd fsdf safdawdsf da sd asdf df d sddfdas f</p>
    </ToolCard>
    <ToolCard>
      <h2>User Interface Design</h2>
      <p>asdf ksjafljslkfjs saf;lsdjjsdajfjsk djflkssdjafks sj jss j j</p>
    </ToolCard>
  </ToolsWrapper>
);

export default Tools;
