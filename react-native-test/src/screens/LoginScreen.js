import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import styled from "styled-components/";
import { Text } from "react-native";
import { useState } from "react";

const Container=styled.View`
  flex:1;
  align-items:center;
  justify-content:center;
`


const LoginScreen=({navigation})=>{
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  return(
    <Container>
      <Text style={{fontSize:24,marginBottom:50}}>로그인</Text>
      <CustomInput
        placeholder='이메일'
        value={email}
        onChangeText={(email)=>setEmail(email)}
      />
      <CustomInput
        placeholder='비밀번호'
        value={password}
        onChangeText={(pw)=>setPassword(pw)}
        secureTextEntry={true}
      />
      <CustomButton
        title="로그인"
        onPress={()=>console.log('로그인 버튼 누름')}
      />
      <CustomButton
        title="회원가입"
        color='green'
        onPress={()=>navigation.navigate("SignupScreen")}
      />
    </Container>

  )
}

export default LoginScreen;