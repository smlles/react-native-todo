import styled from "styled-components";
import { theme } from "../theme";
import { Image,Input,Button } from "../components";
import { images } from "../utils/images";
import { useState,useRef,useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { removeWhiteSpace, validateEmail } from "../utils/common";
import { TouchableOpacity, Text, Alert } from 'react-native';
import { login } from "../utils/firebase";
import { useContext } from "react";
import { ProgressContext,ProgressProvider,UserContext } from "../contexts";
import Spinner from "../components/Spinner";


const Container = styled.View`
  flex:1;
  justify-content : center;
  align-items : center;
  background-color : ${({theme})=>theme.background};
`

const ErrorText = styled.Text`
  align-items : flex-start;
  width : 90%;
  height:20px;
  margin:10px;
  line-height:20px;
  color : ${({theme})=>theme.errorText};
`

const Login=({navigation})=>{
  const {spinner} = useContext(ProgressContext)

  const [email,setEmail]=useState('');
  //이메일(위),비밀번호(아래)
  const [password,setPassword]=useState('');
  //에러메세지
  const [errorMessage,setErrorMessage]=useState('');
  //버튼 활성화 상태
  const [disabled,setIsDisabled]=useState(true);
  const passwordRef=useRef();

  const {dispatch}=useContext(UserContext);
  //email,password,errorMessage의 state값이 변할 때 마다
  //조건에 맞게 disabled의 state 값을 세팅한다.
  useEffect(()=>{
    //로그인 버튼은 이메일과 비밀번호가 입력되어있고
    //오류 메세지가 없어야 활성화된다.
    setIsDisabled(!(email&&password&&!errorMessage));
  },[email,password,errorMessage])

  const _handleEmailChange=(email)=>{
    //이메일에 공백이 있으면 먼저 지운다.
    const changedEmail = removeWhiteSpace(email);
    setEmail(changedEmail)
    setErrorMessage(
      validateEmail(changedEmail)?'':"please verifay your email"
    )
  }

  const _handlePasswordChange =(password)=>{
    setPassword(removeWhiteSpace(password));
  }

  // 로그인 버튼 눌렀을 때, inProgress 상태를 변경하여 Spinner 렌더링 하기
// 로그인 끝나면 spinner 종료

//로그인 한 후, Context에 email과 uid 전달하기

  const _handleLoginButtonPress= async () => {
    try {
      spinner.start();
      
      const user = await login({email,password});
      //userContext의 dispatch를 통해 user의 상태가 
      //인증된 사용자 정보로 변경됨
      // dispatch(user.email,user.uid)= 구조분해 아닐 때
      dispatch(user)
      // = dispatch에서 구조분해해야함
      Alert.alert('Login Success',user.email);
    } catch (error) {
      alert('Login Error',error.message)
    } finally{
      spinner.stop();
    }
      
    
  }




  return(
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow:1}}
      // 스크롤 뷰 안의 자식들을 감싸는 View 스타일
      // flex:1을 주면, 컨텐츠 영역이 화면 전체를 채운다.
      extraScrollHeight={50}
      enableOnAndroid={true}
      // 키보드가 올라 올 때, 추가로 스크롤 할 높이
      // 기본값 0, 20을주면 키보드 위에 살짝 여유공간이 생겨, 
      // 입력창이 키보드에 딱 붙지않아 여유가생김
       keyboardShouldPersistTaps="handled"
    >
      <Container>
        <Image url={images.logo} imageStyle ={{borderRadius:10}}/>
        <Input 
          label='Email'
          value={email}
          onChangeText={_handleEmailChange}
          onSubmitEditing={()=>passwordRef.current.focus()}
          placeholder={"Email"}
          returnKeyType='next'
        />
        <Input
          ref={passwordRef}
          label="Password"
          placeholder={'Password'}
          isPassword  
          value={password}
          onChangeText={_handlePasswordChange}
          onSubmitEditing={()=>{}}
          returnKeyType='done'
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button 
          title ="Login"
          onPress={_handleLoginButtonPress}
          disabled={disabled}
        />
        <Button 
          title="Sign up with email"
          onPress={()=>navigation.navigate('Signup')}
          isFilled={false}
        /> 
      </Container>
    </KeyboardAwareScrollView>
  )
}
export default Login;