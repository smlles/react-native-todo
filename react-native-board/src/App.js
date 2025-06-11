import { Text } from "react-native";
import styled from "styled-components";
import BoardScreen from "./screens/BoardScreen";
import StackNavigation from "./navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";

const Container = styled.View`
  flex:1;
  align-items:center;
  justify-content:center
`
const App=()=> {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}
export default App;
