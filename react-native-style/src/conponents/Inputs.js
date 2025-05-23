import styled from "styled-components";
//스타일드 컴포넌트의 attrs를 이용해 props로 전달된
//borderColor 값에 따라, Input 컴포넌트의 디자인이 바뀌도록 해보기
//attrs : 컴포넌트에 기본 속성을
//설정 할 수 있게 해주는 메서드
//attrs를 이용하면 , 스타일을 설정하는 곳에서 props의 값에 따라
//컴포넌트 속성을 다르게 적용 할 수 있고
//항상 일정한 속성을 미리 정의 할 수 있다.
const StyledInput =styled.TextInput.attrs(props=>({
  placeholder : "Enter a text...",
  placeholderTextColor :props.borderColor,


}))`
  width:200px;
  height:60px;
  margin :5px;
  padding:10px;
  border-radius:10px;
  border:2px;
  border-color:${props =>props.borderColor};
  font-size:24px;
`


const Input=props=>{
  return <StyledInput
  borderColor = {props.borderColor}
  />
}

export default Input;