import styled, {keyframes} from 'styled-components';


export const blink = keyframes`
  from {
    background-image: none;
  }

  to {
    background-image: url(caret.png);
  }
`;
export const Input = styled.input`
  background-color: transparent;
  caret-color: transparent;
  caret-shape:underscore;
  animation: ${blink} 1s linear infinite;
  background-repeat:no-repeat;
  background-position: ${props => props.caretPosition};
  border-style:none;
  border-color:transparent;
  color:white;
  font-family: Orbitron, sans-serif;
  font-size: 50px;
  text-shadow: 1px 1px 10px white;
  text-align:center;
  outline:none;
  height:100vh;
  width:100%;
`

 export const Title = styled.h1`
  color:white;
  position:absolute;
  top:0;
  font-family: Orbitron, sans-serif;
  text-shadow: 1px 1px 10px white;
  font-size: 100px;
`
export const Signature = styled.a`
  font-family: Orbitron, sans-serif;
  color:white;
  text-shadow: 1px 1px 10px white;
  position:absolute;
  bottom:10px;
`
