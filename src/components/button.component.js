import styled, {css}  from "styled-components"

export const Button = styled.button`
background: #eeeeee;
border-radius: 3px;
border: 2px solid #CCCCCC;
color: #000000;
margin: 0 1em;
padding: 0.25em 1em;


${props =>
  props.$primary &&
  css`
    background: #1d8d30;
    color: white;
  `};

${props => 
props.$danger && 
css`
    background: #bf2e23;
    color: white;
`}
`