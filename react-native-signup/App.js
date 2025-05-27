import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
// import { Alert } from './src/Alert';
import { Alert } from 'react-native';

export default function App() {

  const [id,setId]=useState('');
  const [pw,setPw]=useState('');
  const [email,setEmail]=useState('');

  // const _handleChangeText=(text)=>{
  //   setId(text);
  //   setEmail(text);
  // }

 const _signUp =()=>{
  // console.log(id)
  // console.log(email)
  if(id.trim()===''||email.trim()===''||pw.trim()===''){
    Alert.alert('빈 칸은 불가능.') 
    return
  }
  Alert.alert(`입력된 id는 ${id}, 이메일은 ${email}`)
 }



  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <Text style={styles.headerText}>SmartAppDev</Text>
     </View>
     <View>
      <Text style={styles.title}>회원가입</Text>
     </View>
     <View style={styles.inputContainer}>
      <Text style={styles.inputText} >아이디 </Text><TextInput style={styles.input} name={id} value={id} onChangeText={(text)=>setId(text)} />     </View>
     <View style={styles.inputContainer}>
      <Text style={styles.inputText}>비밀번호 </Text><TextInput value={pw} onChangeText={(text)=>setPw(text)} style={styles.input} />
     </View>
     <View style={styles.inputContainer}>
      <Text style={styles.inputText} >이메일 </Text><TextInput  value={email} onChangeText={(text)=>setEmail(text)} style={styles.input} />
     </View>
     <Pressable style={styles.buttonContainer}>
      <Text style={styles.button} onPress={_signUp}>가입하기</Text>
     </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header:{
    backgroundColor:'purple',
    width:'100%',
    height:'10%',
    alignItems:'flex-start',
    justifyContent:'center'
  },
  headerText:{
    fontSize:25,
    color:'white',
    padding : 8
  },
  title:{
    fontSize:50,
    color:'gray',
    marginTop:20,
    marginBottom:100,
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    marginBottom:30,

  }
  ,
  input:{
    width:'50%',
    borderBottomColor:'gray',
    borderBottomWidth:1,
  },
  inputText:{
    color:'gray',
    fontSize:30,
    marginRight:20
  },
  buttonContainer:{
      width:'40%',
  }
  ,
  button:{
    backgroundColor:'#3498db',
    padding:15,
    borderRadius:10,
    height:50,
    textAlign:'center'
  }
});
