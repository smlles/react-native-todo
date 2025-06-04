import { Button } from "react-native";
import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";

const Container =styled.View`
  flex:1;
  align-items :center;
  background-color:#333;
  justify-content:center;

`

const StyledText=styled.Text`
  font-size : 30px;
  margin-bottom: 10px;
`
//Stack.Screen.에 등록하면 별도의 props 전달 없이도
//navigation 객체가 주입된다.
//navigation 개체의 navigate()메서드를 통해 이동한다.
//navigate메서드의 첫 인자로 다른 화면의 name 값을 주면 된다.
const Home = ({navigation})=>{
  return(
  <SafeAreaView style={{flex:1}}>
    <Container>
      <StyledText>Home</StyledText>
      <Button 
        
        onPress={()=>{navigation.navigate('List')}}
        title="go to the list screen"/>
    </Container>
  </SafeAreaView>
  )
}

export default Home;