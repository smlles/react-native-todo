import styled from "styled-components";
import { Text,Button } from "react-native";



const Container = styled.View`
  flex:1;
  align-items:center;
  justify-content:center
`




const DetailScreen=({navigation,route})=>{

  const {item} = route.params;
  console.log(item)

  return(
    <Container>
      <Text>{item.title}</Text>
      <Text>{item.author}</Text>
      <Text>{item.time}</Text>
      <Text>{item.views}</Text>
      <Button title ="title"/>
    </Container>
  )
}

export default DetailScreen;