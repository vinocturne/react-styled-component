import styled from "styled-components";

const Father = styled.div`
  display: flex;
`

//속성을 동적으로 받아오고 싶을 때에는 해당 컴포넌트안에 속성명을 짓고
//styled를 설정해줄 때 ${(props) => props.속성명}을 통해 해당 값을 가져올 수 있다.
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`

//box가 가진 속성에 border-radius를 추가하고 싶을 때 복사, 
//붙여넣기가 아닌 styled(가져오고 싶은 컴포넌트 이름)을 통해 모든 css를 받아올 수 있다.

// const Circle = styled.div`
const Circle = styled(Box)`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  border-radius: 50px;
`

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato"/>
    </Father>
  );
}

export default App;
