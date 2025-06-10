import styled from "styled-components";
import { Text } from "react-native";

const Container =styled.View`
  flex:1;
  background-color :${({theme})=>theme.background}
`
// 넘겨받은 채널 id와 제목을 화면에 <Text>로 출력하기
const Channel =({navigation,route})=>{
  console.log(route.params.title)
  return(
    <Container>
      <Text style={{fontsize:24}}>{route.params?.id}, {route.params?.title}</Text>
    </Container>
  )
}

export default Channel