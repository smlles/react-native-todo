import styled from "styled-components/";

const StyledButton =styled.Pressable`
  width: 80%;
 padding: 14px;
 background-color:${(props)=>props.color?props.color:`#3498db`};
 margin: 10px 0;
 border-radius: 8px;
 align-items: center;

 
`

////  → props로 넘겨받은 색깔이 있으면 적용한다, 없으면 를 기본색으로 한다.
const StyledText=styled.Text`
  font-size:24px;
  color : #fff;
`
const CustomButton =(props)=>{
  return (
    <StyledButton
      color={props.color}
      onPress={props.onPress}
    >
      <StyledText>{props.title}</StyledText>
    </StyledButton>
  )
}

export default CustomButton; 