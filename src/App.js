import styled from "styled-components";

const Father = styled.div`
  display: flex;
`

//1. 해당 Btn에서 button 즉, 태그만 변경하고 싶은 경우
// const Btn = styled.button`
//   color:white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `
//2. 아래처럼 변경하게 되면 확장하게 되는 것임으로 이 방법을 사용하지는 않는다.
// const Link = styled(Btn)``


//4. 각 태그가 제공하는 기능들을 미리 설정할 수 있다.
//.attrs({지정하고 싶은 attrs 설정 값})을 통해 하나하나 입력해주지 않아도 통일적으로 설정을 넣을 수 있다.
const Input = styled.input.attrs({required:true, minLength: "10"})`
  background-color: tomato;
`


function App() {
  return (
    <Father as="header">
      {/* <Btn>Log in</Btn> */}
      {/* 3. 확장 대신 사용할수 있는 방법은 as로써 변경하고 싶은 태그를 as를 통해 입력 후
             필요한 속성들은 그대로 컴포넌트에서 작성하여 사용할 수 있다. */}
      {/* <Btn as="a" href="/">Log in</Btn> */}
      <Input />
    </Father>
  );
}

export default App;
