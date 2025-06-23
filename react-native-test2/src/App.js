import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable,Button, Alert } from 'react-native';
import FormInput from '../components/FormInput';
import { useState,useEffect } from 'react';

export default function App() {
  const [email,setEmail]=useState('');
  const [id,setId]=useState('');
  const [pw,setPw]=useState('');
  const [name,setName]=useState('');

  const [emailErrorMessage,setEmailErrorMessage]=useState('');
  const [idErrorMessage,setIdErrorMessage]=useState('');
  const [pwErrorMessage,setPwErrorMessage]=useState('');
  const [nameErrorMessage,setNameErrorMessage]=useState('');

  
  
  

  
  
  useEffect(()=>{
    //이메일췤
    const emailValid=/^[a-zA-Z0-9]+@[a-zA-Z]+\.com$/
    if(!email){
      setEmailErrorMessage("필수 입력 항목입니다.")
    }else if(!emailValid.test(email)){
      setEmailErrorMessage("올바른 형식의 이메일을 사용하세요")
    }else{
      setEmailErrorMessage("")
    }
    //아이디췤
    const idValid=/^[a-z0-9]{4,20}$/
    if(!id){
      setIdErrorMessage("필수 입력 항목입니다.")
    }else if(!idValid.test(id)){
      setIdErrorMessage("아이디는 소문자,숫자만 조합 가능하며 4~20자여야 합니다.")
    }else{
      setIdErrorMessage("")
    }
    //비번췤
    const pwValid=/^([a-zA-Z]|[0-9]|[!@#$%^&*]){6,20}$/
    // 1. [a-zA-Z0-9!@$%^&*]{6,20} -> 영어만 도배하거나 숫자만 도배해도 심지어 특문만 도배해도 통과해서 탈락
    // 2. [a-zA-Z]+[0-9]{6,20} -> 다른건 그렇다치고 순서 따지던데?
    // 3.[a-zA-Z]|[0-9]{6,20} ->뭐야 왜 하나만 쳐도 통과해요
    // 4.^([a-zA-Z]|[0-9]){6,20} -> 1번이랑 결과가 같음
    console.log(pwValid.test(pw))
    if(!pw){
      setPwErrorMessage("필수 입력 항목입니다.")
    }else if(!pwValid.test(pw)){
      setPwErrorMessage("비밀번호는 6~20자이며, 영문,숫자, 특수문자 중 2가지 이상을 포함해야 합니다.")
    }else{
      setPwErrorMessage("")
    }

    //이름췤
    const nameValid=/^[ㄱ-힣a-zA-Z]{1,30}$/
    if(!name){
      setNameErrorMessage("필수 입력 항목입니다.")
    }else if(!nameValid.test(name)){
      setNameErrorMessage("이름은 한글,영문 1~30자여야 합니다.")
    }else{
      setNameErrorMessage("")
    }


  },[email,id,pw,name])

  const signInHandler=()=>{
    // const newUser = {email:email,id:id,pw:pw,name:name}
    !idErrorMessage&&!pwErrorMessage&&!emailErrorMessage&&!nameErrorMessage?
    Alert.alert("가입 성공",`이메일 : ${email}\n아이디 : ${id}\n비밀번호 : ${pw}\n이름 : ${name}`)
    :
    Alert.alert("뭔가 잘못 되어도 단단히 잘못된듯","빨간 글씨 확인 필요")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>회원가입</Text>
      <StatusBar style="auto" />
      <FormInput 
        placeholder="이메일"
        value={email}
        onChangeText={(text)=>setEmail(text)}
        errorMessage={emailErrorMessage}
      />

      <FormInput 
        placeholder="아이디"
        value={id}
        onChangeText={(text)=>setId(text)}
        errorMessage={idErrorMessage}
      />

      <FormInput 
        placeholder="비밀번호"
        value={pw}
        onChangeText={(text)=>setPw(text)}
        errorMessage={pwErrorMessage}
        secureTextEntry
        // 비번 가리기
      />

      <FormInput 
        placeholder="이름"
        value={name}
        onChangeText={(text)=>setName(text)}
        errorMessage={nameErrorMessage}
      />
     
      
      <Button 
        style={styles.buttonContainer} 
        title="가입하기" 
        onPress={signInHandler}
      />
      
     
    </View>
  );
}


const styles = StyleSheet.create({

  container: {

    padding: 24,

    paddingTop: 60,

    backgroundColor: '#fff',

    flexGrow: 1,

  },

  header: {

    fontSize: 28,

    fontWeight: 'bold',

    marginBottom: 30,

    textAlign: 'center',

  },

  buttonContainer: {

    marginTop: 30,

    marginBottom: 50,

  },

});