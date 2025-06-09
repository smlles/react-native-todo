import styled from "styled-components/"
import { Text } from "react-native"
import CustomButton from "../components/CustomButton"
import CustomInput from "../components/CustomInput"
import { useState } from "react"

const Container=styled.View`
  flex:1;
  align-items:center;
  justify-content:center;
`


const SignupScreen=({navigation})=>{
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [pw,setPw]=useState('');

  return(
    <Container>
     <Text style={{fontSize:24,marginBottom:50}}>회원가입</Text>
     <CustomInput
      placeholder='이름'
      value={name}
      onChangeText={(name)=>setName(name)}
    />
    <CustomInput
      placeholder='이메일'
      value={email}
      onChangeText={(email)=>setEmail(email)}
    />
    <CustomInput
      placeholder='비밀번호'
      value={pw}
      onChangeText={(pw)=>setPw(pw)}
      secureTextEntry={true}
    />
    <CustomButton
      title="회원가입"
      
      onPress={()=>console.log('회원가입 버튼 누름')}
    />
    <CustomButton
      title="로그인"
      color='orange'
      onPress={()=>navigation.navigate("LoginScreen")}
    />
    </Container>

  )
}

export default SignupScreen