import styled from "styled-components";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Parent from "./components/Parent";
import Form from "./components/Form";
import { Pressable, Text,StyleSheet } from "react-native";
import { useState } from "react";
import ScrollEnd from "./components/ScrollEnd";
import Length from "./components/Length";
import AverageCalculator from "./components/Average";
import Dog from "./components/Dog";
import Signup from "./components/Signup";
import { ChangeTheme } from "./components/ChangeTheme";


const Container = styled.View`
  flex:1;
  background-color:#fff;
  justify-content:center;
  align-items:center;
`
const styles = StyleSheet.create({
  button:{
    backgroundColor:'#3498db',
    padding:15,
    borderRadius:10,
    fontSize:24,
    color:'white'
  }
})

const App =()=>{

const [isHide,setIsHide]=useState('hide');
//혹은 true false로 
const toggleHide =()=>{
  if(isHide==='hide'){
    setIsHide('show')
  }else{
    setIsHide('hide')
  }
}

  return <Container>
    {/* <Counter/> */}
    {/* <Parent/> */}
    {/* <Pressable>
      <Text 
        style={styles.button}
        onPress={toggleHide}>{isHide}</Text>
        true false라면 ()=>setIsHIde(prev=>!prev)
    </Pressable>
    true false 라면 && 아니면 || 가능
    {isHide==='hide'?<Form/> :null} */}
    {/* 버튼을 하나 만들어서 
    title은 Hide, form이 안 보이면 show
    버튼을 눌렀을 때, form을 숨기거나 보이게*/}
    {/* <ScrollEnd/> */}
    {/* <Length/> */}
    {/* <AverageCalculator/> */}
    {/* <Dog/> */}
    {/* <Signup/> */}
    <ChangeTheme/>
  </Container>
    
  
}

export default App;