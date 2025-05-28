import styled from "styled-components";
import Counter from "./Counter";

const Container = styled.Pressable`
  background-color: #3498db;
  border-radius : 15px;
  padding :15px 30px;
  margin : 10px 0px;
  justify-content : center;
  align-items:center;
`

const Title =styled.Text`
  font-size : 24px;
  font-weight : 600;
  color : #fff;
`

//함수형 컴포넌트
//함수 안에서 해결 할 수 없는 내용을 매개 변수로 받아서 해결
//공통적인 틀만 만드는 것
const Button = ({title,onPress})=>{
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  )
}

export default Button;