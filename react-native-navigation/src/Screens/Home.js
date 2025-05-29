import { Button } from "react-native";
import styled from "styled-components";

const Container =styled.View`
  align-items :center;

`

const StyledText=styled.Text`
  font-size : 30px;
  margin-bottom: 10px;

`
//Stack.Screen.에 등록하면 별도의 props 전달 없이도
//navigation 객체가 주입된다.
const Home = ({navigation})=>{
  return(
    <Container>
      <StyledText>Home</StyledText>
      <Button 
        onPress={()=>{navigation.navigate('List')}}
        title="go to the list screen"/>
    </Container>

  )
}

export default Home;