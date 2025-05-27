import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Pressable, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
 
  const [num1,setNum1]= useState('');
  const [num2,setNum2]= useState('');
  const [result,setResult] =useState('Enter Number and select operation');


  const calculator =(operation)=>{
    const p_num1 = parseFloat(num1)
    const p_num2 = parseFloat(num2)

    //값이 입력이 안되어 있다면 값을 입력하기 경고
    if(num1.trim()===''||num2.trim()===''){
      alert('값을 입력하세요')
      return
    }else if(isNaN(p_num1)||isNaN(p_num2)){
        alert("숫자가 맞는지 확인 필요")
        return
    }
    
    let res = 0;
    switch(operation){
      case '+':
        setResult(p_num1+p_num2)
        break;
      case '-':
        setResult(p_num1-p_num2)
        break;
       case '*':
         setResult(p_num1*p_num2)
        break;
       case '/':
         if(p_num2==0){
        return setResult('0으로 나눌 수는 없습니다.')
       
       }
         setResult(p_num1/p_num2)
        break;
    }
    
    // else if(operation==='+'){
    //   return setResult(p_num1+p_num2);
    // }else if(operation==='-'){
    //   return setResult(p_num1-p_num2);
    // }else if (operation==='*'){
    //  return setResult(p_num1*p_num2);
    // }else if (operation==='/'){
    //   if(p_num2==0){
    //     return setResult('0으로 나눌 수는 없습니다.')
    //   }
    // return setResult(p_num1/p_num2);
    // }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput 
      style={styles.inputbox} 
      keyboardType='numric'
      onChangeText={setNum1} 
      placeholder='Enter first number'/>
      <TextInput 
      style={styles.inputbox} 
      onChangeText={setNum2} 
       keyboardType='numric'
      placeholder='Enter second number'/>
      <Text style ={styles.result}>{result}</Text>
      <View>
      <Pressable style={styles.button_container}>
        {/* <Text style ={styles.button} onPress={add_number}>+</Text>
        <Text style ={styles.button} onPress={minus_number}>-</Text>
        <Text style ={styles.button} onPress={multi_number}>*</Text>
        <Text style ={styles.button} onPress={div_number}>/</Text> */}
        {['+','-','*','/'].map((op)=>(
          <Pressable key={op} style={styles.button} onPress={()=>calculator(op)}>
            <Text style={styles.buttonText}>{op}</Text>
          </Pressable>

        ))}
        
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputbox:{
    width:'80%',
    backgroundColor:'#fff',
    marginBottom: '20',
    fontSize: 16,
    textAlign:'center',
    borderRadius:10

  },
  notice:{
    fontSize : 35,
    // alignItems:'center',
    // justifyContent:'center',
    textAlign:'center',
     marginBottom:20,
  },
  button_container:{
    flexDirection:'row',
    gap:10,
    // justifyContent: 'space-around',
    // width:'100%',
     marginBottom:20,
  },
  button:{
    backgroundColor:'aqua',
    margin:15,
    padding:15,  
    borderRadius:8,
  },
  result:{
    width:'99%',
    backgroundColor:'#fff',
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold'
  },
  buttonText:{
    fontSize:20,
    color:'white'
  }
});

