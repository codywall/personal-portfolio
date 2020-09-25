import styled from 'styled-components';
import colors from '../../utils/colors';

const Line = styled('hr')`
  display: block;
  text-align: center;
  border-top: 3px solid ${colors.accent};
  background: none;
  margin: 3rem auto;
  width: 40%;
`;

export default Line;
