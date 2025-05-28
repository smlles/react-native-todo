import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Text } from "react-native";
import { View } from "react-native";

const StyledText= styled.Text`
  font-size:24px;
  margin : 10px;
`


const Counter =()=>{
  const [count,setCount]=useState(0);


  
  return(
    <View>
      <StyledText>Counter : {count}</StyledText>
      {/* onPress 이벤트 실행 전 함수가 실행 될 수 있음 */}
      {/* <Button onPress={setCount(count+1)} title='+'/> */}
      <Button onPress={()=>setCount(count+1)} title='+'/>
      <Button onPress={()=>setCount(count-1)} title='-'/>
    </View>
  )
}

export default Counter;