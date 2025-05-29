import { useReducer } from "react";
import { View,Text,TextInput,StyleSheet,Button } from "react-native";
//로그인을 하고 싶은데, 다음 상태가 필요해
//email(문자열) , PW(문자열) , errorMessage(문자열)
//isSubmitting(논리형) , isLoggedIn(논리형)
//상태가 많아지면, 관리가 복잡해지고 로직이 흩어진다.

const initialValue={
  email:'',
  password:'',
  isSubmitting:false,
  isLoggedIn:false,
  errorMessage:'',
}

const loginReducer=(state,action)=>{
  switch(action.type){
    case 'SET_EMAIL':
      return {...state,email : action.payload}
    case 'SET_PASSWORD':
      return {...state,password : action.payload}
    case 'LOGIN_START':
      return { ...state, isSubmitting: true };
    case 'LOGIN_SUCCESS':
      return { ...state, isLoggedIn: true, isSubmitting: false, errorMessage: '' };
    case 'LOGIN_FAILURE':
      return { ...state, isSubmitting: false, errorMessage: action.payload };
    case "LOGOUT":
      return {...state,errorMessage:'로그인하셈',isLoggedIn : false}
    default : return state;
  }
}

export const LoginForm =()=>{
  const [state, dispatch]= useReducer(loginReducer,initialValue);


   const handleLogin = () => {
        dispatch({type: 'LOGIN_START'});
        setTimeout(() => {
            if(state.email === 'test@example.com' && state.password === '1234'){
                dispatch({type:'LOGIN_SUCCESS'});
            } else {
                dispatch({type:'LOGIN_FAILURE', payload: '이메일 또는 비밀번호가 틀렸습니다.'})
            }
        },1000)
    }

  return(
    <View style={styles.container}>
      {/* isLoggedIn이 true면 로그인 성공! 문자열 출력하기 */}
      {state.isLoggedIn?
      <View>
        <Text style={styles.successText}>
          로그인 성공!
        </Text>
        <Button
          title='logout'
          onPress={()=>dispatch({type:'LOGOUT'})}/>
      </View>:
        <View>
        {/* // 아이디:test@example.com, 비밀번호 :1234 */}
        <TextInput
          style={styles.input}
          placeholder="이메일"
          value={state.email}
          onChangeText={(text)=>dispatch({type:"SET_EMAIL",payload:text})}
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          value={state.password}
          onChangeText={(text)=>dispatch({type:"SET_PASSWORD",payload:text})}
        />
        {state.errorMessage && <Text style={styles.errorText}>{state.errorMessage}</Text>}
        <Button
          title={state.isSubmitting?'로그인 중...':'로그인'}
          onPress={handleLogin}/>
        </View>}
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    padding:20,
    marginTop:100,
  },
  input:{
    borderWidth:1,
    borderColor:"#aaa",
    padding:10,
    marginBottom:10,
    borderRadius:8,
  },
  errorText:{
    color:'red',
    marginBottom:10,

    },
    successText:{
      fontSize:18,
      color:'green',
    }
})