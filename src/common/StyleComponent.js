import styled, {css} from 'styled-components';

export const ButtonCustom = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  /* background-color: ${({primary}) => primary ? "white" : "palevioletred"}; */
  /* background-color: ${props => props.$primary ? "white" : "palevioletred"}; */
  background-color: white;
  ${({primary}) => primary && css`
    background: var(--primary);
  `}
`;
export const BtnLg = styled(ButtonCustom)`
  font-size:2rem
`;
export const CustomDiv = styled.div``
/* export const Column = styled(CustomDiv)`
  background-color:red ;
` */