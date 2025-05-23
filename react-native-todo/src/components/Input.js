import styled from "styled-components";
import { Dimensions } from "react-native";
import { useWindowDimensions } from "react-native";
//스타일드 쓸 때, 굳이 import 안해도 됨

const StyledInput = styled.TextInput.attrs(({theme})=>({
  placeholderTextColor : theme.main,

}))`
  width:${({width})=>width-40}px;
  height:60px;
  margin:3px 0;
  padding:15px 20px;
  border-radius :10px;
  background-color: ${({theme})=>theme.itemBackground};
  font-size:25px;
  color:${({theme})=>theme.text};

`

// Dimensions.get('window') 
// 앱이 실행 될 때, 화면 크기를 반환,
// 이후 회전 및 크기가 바뀌어도 갱신되지 않음
// 화면 크기가 바뀔 때, 이벤트 리스너를 추가해서 수동으로 처리해야함

//useWindowDimensions()
//화면이 회전하거나, 리사이즈 될 때 자동으로 다시 계산함
//반응형 UI를 만들 떄 유용, 매번 최신 크기를 자동 반영

// App컴포넌트에서 Input 컴포넌트에 placeholder를 전달하게 설정
// 색은 타이틀 색과 같은 색으로 설정
// 너무 긴 항목은 제한, 50자
const Input =({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  onBlur
  })=>{
  //화면 너비 구하기
  //둘 중 하나 쓰면 됨
  // const width = Dimensions.get('window').width;
    const {width} = useWindowDimensions();
  return(//TextInput 컴포넌트는, 기본값으로 첫 글자가 대문자로 나타나고
    //오타 입력시 자동으로 수정하는 기능이 켜져있음
    <StyledInput 
      width={width} maxLength={50}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      placeholder={placeholder}
      keyboardAppearance="dark"
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
    />
  )
}
 //입력 취소하기, 항목 추가 혹은 수정 도중 입력을 취소 할 수 없다.
  //입력 중 다른 영역을 클릭해서 Input 컴포넌트가 포커스를 잃으면
  //입력 중인 내용이 없어지고 취소되도록 Input을 수정해보자
export default Input;