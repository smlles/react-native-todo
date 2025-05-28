import { useState,useEffect,useRef } from "react";
import styled from "styled-components";



const StyledTextInput = styled.TextInput.attrs({
  autoCapittalize: 'none',
  autoCorrect :false,
})`
  border : 1px solid #757575;
  padding :10px;
  margin : 10px 0;
  width : 200px;
  font-size: 20px;
`

const StyledText=styled.Text`
  font-size :  24px;
  margin : 10px;
  
`

const Form =()=>{
  const [name,setName]=useState('');
  const [email,setEmail]= useState('');

  // refName={current:<TextInput.../>}
  const refName = useRef(null);
  const refEmail = useRef(null);

  //useEffect()
  //컴포넌트가 렌더링 될 떄마다 원하는 작업이 실행되도록
  //설정 할 수 있는 훅
  //useEffect(()=>{},[]);
  //첫번째 파라미터로 전달되는 함수는 조건을 만족 할 떄마다 호출
  //두번째 파라미터로 전달되는 배열을 이용해, 함수가 호출되는 조건 설정
  //없으면, 모든 렌더링 후마다 실행
  //빈 배열이면, 마운트 시 한번만 실행
  //[state] 특정 값이 변경 될 때 실행

  //클린업 함수
  //컴포넌트가 언마운트 될 때 실행되는 함수

  useEffect(()=>{
    console.log(`\n======form Component Mount=======\n`);
    refName.current.focus();
    //Form이 렌더링 될 때, 이름 적는 칸에 포커스가 잡힌다
    return ()=>console.log(`\n======form Component UnMount=======\n`)
  },[])

  return(
    <>
      <StyledText>Name : {name}</StyledText>
      <StyledText>Email : {email}</StyledText>
      <StyledTextInput
        value={name}
        onChangeText={text=>setName(text)}
        placeholder='name'
        ref={refName}
        returnKeyType="next"
        onSubmitEditing={()=>refEmail.current.focus()}
      />
      <StyledTextInput
        value={email}
        onChangeText={text=>setEmail(text)}
        placeholder='email'
        ref={refEmail}
        returnKeyType="done"
      />
    </>


  )
}

export default Form;