
import { useState,forwardRef } from "react";
import styled from "styled-components";

//기본적으로 ref는 직접DOM 요소에만 사용 할 수 있다.
//컴포넌트로 한번 감싸면 ref가 전달이 되지 않음

const Container = styled.View`
    flex-direction : column;
    width : 90%;
    margin : 10px 0;
`

const Label = styled.Text`
    font-size : 14px;
    font-weight : 600;
    margin-bottom : 6px;
    color : ${({theme,isFocused}) => (isFocused ? theme.text : theme.label)};
`

const StyledTextInput= styled.TextInput.attrs(({theme})=>({
  placeholderTextColor:theme.inputPlaceholder,

}))`
  background-color:${({theme})=>theme.background};
  color : ${({theme})=>theme.text};
  padding:20px 10px;
  font-size:16px;
  border : 1px solid
    ${({theme,isFocused})=>(isFocused?theme.text:theme.inputBorder)};
  border-radius : 4px;
`

const Input =forwardRef(
  ({
  label,
  value,
  onChangeText,
  onSubmitEditing,
  onBlur=()=>{},//onblur를 전달하지 않으면 아무것도 없음
  placeholder,
  isPassword,
  returnKeyType,
  maxLength
  },ref)=>{
  const [isFocused,setIsFocused]=useState(false);
  return(
    <Container>
      <Label isFocused={isFocused}>{label}</Label>
      <StyledTextInput
        ref={ref}
        isFocused={isFocused}
        value={value} //input에 적히는 값
        onChangeText={onChangeText} //텍스트 입력할 때 마다 호출되는 함수
        onSubmitEditing={onSubmitEditing} //키보드에서 '완료','Enter'를 눌렀을 때, 호출되는 함수
        onFocus={()=>setIsFocused(true)} //input에 포커스가 맞춰질 때 호출
        onBlur={()=>{ //input에서 포커스가 나갔을 때.
          setIsFocused(false);
          onBlur;
        }}
        placeholder={placeholder}//아무것도 입력 안 했을 때 나오는 값
        secureTextEntry={isPassword} //ture면 글자가 ㅇㅇㅇㅇ 
        returnKeyType={returnKeyType} // 키보드에서 return의 모양
        maxLength={maxLength} //글자의 길이
        autoCapitalize='none'  //자동 대문자 변환 (끄기)
        autoCorrect={false} //자동 맞춤법 수정 (끄기)
        textContentType='none' //ios전용 속성 : 입력 데이터 자동완성, 자동 채우기 같은 제안 컨트롤
        underLineColorAndroid="transparent" //Android 전용 속성 : 기본적으로 TextInput에 밑줄이 생기는 것을 투명화
      />
    </Container>
  )
})

export default Input;