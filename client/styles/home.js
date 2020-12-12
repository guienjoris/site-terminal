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
  font-family: Orbitron , sans-serif;
  font-size: 50px;
  text-shadow: 1px 1px 10px white;
  text-align:center;
  outline:none;
  height:100vh;
  width:100%;
`

 export const Title = styled.a`
  position:absolute;
  top:0;
  text-shadow: 1px 1px 10px white;
  font-size: 100px;
`
export const Signature = styled.a`
  text-shadow: 1px 1px 10px white;
  position:absolute;
  bottom:10px;
`
export const Card = styled.div`
    border: 1px solid white;
    width:50%;
    height:50%;
    position:absolute;
    margin-left:50%;
    transform: translate(-50%);
    border-radius: 10px;
    box-shadow: 2px 2px 10px white;
    background-color: rgba(255,255,255,0.5);
    overflow:scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }
`
export const ClassicText = styled.p`
  color:black;
  text-align:center;
`
export const BorderText = styled.div`
    border:1px solid white;
    margin:1%;
    border-radius:10px;
`
