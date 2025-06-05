import styled from "styled-components";
import { Image,Input,Button } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail,removeWhiteSpace } from "../utils/common";
import { useEffect, useRef, useState } from "react";
import { images } from "../utils/images";
import { signup } from "../utils/firebase";
import { Alert } from "react-native";

const Container = styled.View`
  flex :1;
  justify-content:center;
  align-items:center;
  background-color:${({theme})=>theme.background};
  padding : 20px 10px;
`
const ErrorText =styled.Text`

  
  align-items:flex-start;
  width:90%;
  height:20px;
  margin-bottom:10px;
  line-height:20px;
  color:${({theme})=>theme.errorText}
  
`

const Signup =()=>{
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[passwordConfirm,setPasswordConfirm]=useState('');
  const[errorMessage,setErrorMessage]=useState('');
  const[disabled,setIsDisabled]=useState(true);
  const [photoUrl, setPhotoUrl] = useState(images.photo);

  const emailRef=useRef();
  const passwordRef=useRef();
  const passwordConfirmRef=useRef();
// 이름 비었을떄 please enter your name
// 이메일이 다를떄 please verify your email
//  비밀번호의 길이가 6보다 작을 때 the password Must contain 6charactoers at least
// 비밀번호와 confirm이 다를 때 password need to match
// 다 맞으면 ''

 useEffect(()=>{
  // let _errorMessage="";
  // if(!name){
  //   _errorMessage='please enter your name'
  // }else if(!validateEmail(email)){
  //   _errorMessage='please verify your email';
  // }else if (password.length<6){
  //   _errorMessage="password must contain 6 charactors at least"
  // }else if (password!==passwordConfirm){
  //   _errorMessage="Passwords need to match";
  // }else {
  //   _errorMessage=''
  // } setErrorMessage(_errorMessage);
  
if(removeWhiteSpace(name).trim()===''){
    setErrorMessage('please enter your name')
  }else if (!validateEmail(removeWhiteSpace(email))){
    setErrorMessage('please verify your Email')
  }else if (password.length <6){
    setErrorMessage('the password Must contain 6 charactoers at least')
  }else if (password!==passwordConfirm){
    setErrorMessage('password need to match');
  }else {
    setErrorMessage('')
    // setIsDisabled(false);
  }

 },[name,email,password,passwordConfirm])

 useEffect(()=>{
  setIsDisabled(
    !(name&&password&&passwordConfirm&&email&&!errorMessage
    )
  )
 },[name,email,password,passwordConfirm,errorMessage])
  
  
  const _handleSignupButtonPress=async()=>{
    try {
      const user = await signup({email,password,name,photoUrl});
      console.log(user);
      Alert.alert("Signup Success",user.email);
    } catch (error) {
      Alert.alert('Signup Error',error.message);
    }
  }

  return(
  <KeyboardAwareScrollView
    // contentContainerStyle={{flex:1}}
    extraHeight={100}
    enableOnAndroid={true}  
  >
    <Container>
      <Image url={photoUrl} 
      rounded={true}
      showButton
      onChangeImage={(uri) => {
    console.log('📷 이미지 선택됨:', uri);
    setPhotoUrl(uri);}}/>
      <Input
        label='name'
        value={name}
        onChangeText={text=>setName(text)}
        onSubmitEditing={()=>{
          setName(name.trim());
          emailRef.current.focus();
        }}
        onBlur = {()=>setName(name.trim())}
        placeholder="Name"
        returnKeyType="next"
      />
      <Input
        ref={emailRef}
        label="Email"
        value={email}
        onChangeText={text=>setEmail(removeWhiteSpace(text))}
        onSubmitEditing={()=>passwordRef.current.focus()}
        placeholder="Email"
        returnKeyType="next"
      />
      <Input
        ref={passwordRef}
        label="Password"
        value={password}
        onChangeText={text=>setPassword(removeWhiteSpace(text))}
        onSubmitEditing={()=>passwordConfirmRef.current.focus()}
        placeholder="Password"
        returnKeyType="done"
        isPassword
      />
      <Input
        ref={passwordConfirmRef}
        label="Password Confirm"
        value={passwordConfirm}
        onChangeText={text=>setPasswordConfirm(text)}
        onSubmitEditing={_handleSignupButtonPress}
        returnKeyType="done"
        placeholder="Password Confirm"
        isPassword
      />
      <ErrorText>{errorMessage}</ErrorText>
      <Button
        title="Signup"
        onPress={_handleSignupButtonPress}
        disabled={disabled}
        />
    </Container>

  </KeyboardAwareScrollView>  
  )
  
}

export default Signup;