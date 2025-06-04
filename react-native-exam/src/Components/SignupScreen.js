import { Alert,TextInput,Pressable,Text, View,StyleSheet } from "react-native"
import { useState,useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context";

const style =StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  },
  textInput:{
    width:'80%',
    height:55,
    borderColor:'gray',
    borderWidth:1,
    borderRadius:8,
    margin:13
  },
  signUpButtonOn:{
    backgroundColor:'aqua',
    width:'80%',
    alignItems:'center',
    padding:10,
    margin:5,
    borderRadius:8
  },
  signUpButtonOff:{
    backgroundColor:'gray',
    width:'80%',
    alignItems:'center',
    padding:10,
    margin:5,
    borderRadius:8
  }
})


const SignupScreen =()=>{
  // 입력하는거 3개
  const [email,setEmail]=useState('');
  const [pw,setPw]=useState('');
  const [name,setName]=useState('');
  // 버튼 활성화 비활성화 검증용
  const [signUpOk,setSignUpOk]=useState(false);
  // 정규식
 const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
 // 버튼 활성화 조건 및 렌더링 조건
 useEffect(()=>{
   if(validateEmail(email)&&pw.length>5){
     setSignUpOk(true);
    }else{setSignUpOk(false)}
 },[email,pw])
   
  
 //버튼 눌러졌을때 (어차피, 조건 맞아야 버튼 켜지니까
 //별다른 조건 필요 없음)
  const handlerSignUp =()=>{
      Alert.alert('회원 가입 완료')
  }
 
  // 확인용
  // const handleEmail=(text)=>{
    // if(email==validateEmail){
    //   console.log("됨")
    // }else{
    //   console.log('안됨')
    // }
    // 
    // if(validateEmail(text)){
    //   console.log("됨")
    // }else{
    //   console.log('안됨')
    // }
    // console.log(email)
  //   setEmail(text)
  // }

  return(
    <SafeAreaView style={style.container}>
      <Text 
        style={{fontSize:44,marginBottom:30}}
      >회원가입
      </Text>
      <TextInput
        value={email}
        placeholder="이메일"
        style={style.textInput}
        onChangeText={setEmail}/>
      <TextInput
        value={pw}
        placeholder="비밀번호 (최소 6자)"
        style={style.textInput}
        secureTextEntry={true}
        onChangeText={setPw}
      />
      <TextInput
        value={name} 
        placeholder="이름"
        style={style.textInput}
        onChangeText={setName}
      />
      {signUpOk?<Pressable //signUpOK = true : 버튼 활성화
        style={style.signUpButtonOn}
        hitSlop={{ top: 30, bottom: 30, left: 50, right: 50 }}
        onPress={handlerSignUp}
      >
        <Text style={{color:'white'}}>가입하기</Text>
      </Pressable> 
      :
      <Pressable //signUpOK = false : 버튼비활
        style={[style.signUpButtonOff]}
        // hitSlop={{ top: 30, bottom: 30, left: 50, right: 50 }}
        // onPress={handlerSignUp}
      >
        <Text>가입하기</Text>
      </Pressable>}
    </SafeAreaView>
  )
}

export default SignupScreen;