import { View,Text,StatusBar } from "react-native";
import StackNavigator from "./navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";


export default function App(){
return (
    <NavigationContainer>
      <StackNavigator/>


    </NavigationContainer>
  );
}