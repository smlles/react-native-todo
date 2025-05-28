import { useState,useMemo } from "react";
import styled from "styled-components";
import Button from "./Button";
import { View,Text } from "react-native";

const StyledText = styled.Text`
  font-size:24px;

`
const list =['JavaScript','Expo','Expo','React Native'];

const getLength=(word)=>{
  console.log({word})
  return word.length;
}

const Length = ()=>{
  const [index, setIndex]=useState(0);
  const [word,setWord]=useState('');
  const [wordLength,setWordLength]=useState(0);

  // let idx=0;
  const searchWord=()=>{
    // idx++;
    // console.log({word})
   const current=list[index];
   setWord(current);
  //  getLength(word);
   setWordLength(current.length);
  //  setIndex((prev)=>(prev+1)) 
   setIndex((prev)=>(prev+1)%list.length)
  }

  const length = useMemo(()=>getLength(word),[word])

  return(
    //문자열
    //해당  문자열의 길이
    //버튼(을 누를 때 마다 배열을 순환하면서 
    // 문자열의 길이를 구하는 기능)
    <View>
      <StyledText>{word}</StyledText>
      <StyledText>{length}</StyledText>
      <Button title="다음!" onPress={searchWord}/>
    </View>
  )
}

export default Length;