import styled from "styled-components/";


const StyledInput =styled.TextInput`
 width: 80%;
 padding: 12px;
 margin: 10px 0;
 border: 1px solid #ccc;
 border-radius: 8px;
`

const CustomInput=(props)=>{
  return(
    <StyledInput 
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
    />
  )
}

export default CustomInput;