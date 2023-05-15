import styled from 'styled-components';

export const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  className: ${props => props.$primary ? "white" : "palevioletred"};
`;