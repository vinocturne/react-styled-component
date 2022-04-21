import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`

const Emoji = styled.span`
  font-size: 36px;
`

const Box = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  
  //Emoji 컴포넌트를 생성해주고 선언하게 되면 as를 통해 태그가 바뀌더라도 속성들이 그대로 유지된다.
  ${Emoji} {
    font-size: 42px;
    &:hover {
      font-size: 98px;
    }
    
  }

`


function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😎</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
