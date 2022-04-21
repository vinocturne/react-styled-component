import styled from "styled-components";

//style.(사용하고자 하는 태그이름)에 백틱(`)을 이용해 css를 적용할 수 있다.
const Father = styled.div`
  display: flex;
`

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`

const Text = styled.span`
  color: white;
`

function App() {
  return (
    //styled component를 사용하면 div의 늪에서 자유로워질 수 있다.
    //요소검사에서 class명은 styled-component에서 임의로 정해져 적용된다.
    <Father>
      <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      <BoxTwo />
    </Father>
    
    //가장 직관적이나 괄호를 각각 열어주어야하고 javascript 코드 방식으로 스타일을 지정해주어야 하는 단점이 있다.
    // <div style={{display: "flex"}}>
    //   <div style={{backgroundColor:"teal", width: 100, height: 100}}></div>
    //   <div style={{backgroundColor:"tomato", width: 100, height: 100}}></div>
    // </div>
  );
}

export default App;
