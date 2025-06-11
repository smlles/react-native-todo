import styled from "styled-components";
import { Text,Button } from "react-native";



const Container = styled.View`
  flex:1;
  align-items:center;
  justify-content:center
`




const WriteScreen=({navigation})=>{



  return(
    <Container>
      <Text>WriteScreen</Text>
      <Button title ="title"/>
    </Container>
  )
}

export default WriteScreen;