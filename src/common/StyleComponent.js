import styled, {css} from 'styled-components';

export const theme = {
  color:{
    mainColor:'#f91942',
    yellow:'#ffa900',
    white:'#fff',
    success: '#41d888',
    danger:'#f94416',
    primary:'#0087d7',
    secondary:'#ccc',
    warning:'#ffbc00',
    black:'#000',
  }
}

export const Button = styled.button`
  /* background-color: ${({primary}) => primary ? "white" : "palevioletred"}; */
  /* background-color: ${props => props.$primary ? "white" : "palevioletred"}; */
  background-color: ${theme.color.secondary};
  color:${theme.color.black} ;
  ${({primary}) => primary && css`
    background: var(--primary);
    color:${theme.color.white} ;
  `}
`;
export const ButtonLg = styled(Button)`
  font-size:2rem;
  color:${({theme}) => theme.color} ;
`;
export const Row = styled.div.attrs(() => ({
  className:'row',
}))`
// can write custome css
`
export const Column = styled.div``
export const Heading = styled.h2.attrs(() => ({
  className: 'display-4',
}))`
  font-weight: bold,
  color: #968c8c,
`;