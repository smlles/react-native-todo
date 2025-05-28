import { UserProvider } from "../contexts/User";
import { useState,useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/User";
//UserProvider 컴포넌트의 value로 전달되는 함수를 이용해
//입력되는 값으로 Context의 값을 변경해보자

const SyledInput=styled.TextInput`
  border:1px solid #606060;
  width: 250px;
  margin : 10px;
  padding : 10px 15px;
  font-size:24px;
`

const Input =()=>{
  const [name,setName] = useState('');
  const {dispatch} = useContext(UserContext);

  return(
    <SyledInput 
      value={name}
      onChangeText={text=>setName(text)}
      onSubmitEditing={()=>{
        dispatch(name);
        setName('');
      }}
      placeholder = "Enter a name..."
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
    />
  )
}
export default Input;