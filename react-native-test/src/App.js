import { View,Text } from "react-native";
import StackNavi from "./navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
// import styled from "styled-components";

// const Container =styled.View`
//   flex:1;
// `

const App=()=>{
  return(

   <NavigationContainer>
    <StackNavi/>
    </NavigationContainer>
  
   
  )
}
export default App;