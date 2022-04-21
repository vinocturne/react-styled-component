//1. styled-components 내의 keyframes 사용가능
import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
`

//2.keyframes를 활용하여 css애니메이션 설정.
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

const Box = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;

  // 3. 설정한 애니메이션을 적용할 때에는 props로 받아오는 것이 아니기 때문에 $ {}로 받아온다
  animation: ${rotationAnimation} 1s linear infinite;

  // 4. styled-components로 선언하지 않은 태그의 경우 scss와 같이 바로 선언하여 사용 가능하다.
  span {
    font-size: 42px;

    //5. span:hover와 같은 문법
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0.3;
    }
  }

`


function App() {
  return (
    <Wrapper>
      <Box>
        <span>😎</span>
      </Box>
    </Wrapper>
  );
}

export default App;
