import { createStackNavigator } from "@react-navigation/stack";
import BoardScreen from "../screens/BoardScreen";
import WriteScreen from "../screens/WriteScreen";
import DetailScreen from "../screens/DetailScreen";
import {MaterialIcons} from "@expo/vector-icons"



const Stack = createStackNavigator();


const StackNavigation=()=>{


  return(
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign:'center',
      }}>
      <Stack.Screen
        options={{
          headerTitle:'카페',
          
        }}
        name='BoardScreen'
        component={BoardScreen}
      />
      <Stack.Screen
        name='DetailScreen'
        component={DetailScreen}
      />
      <Stack.Screen
        name='WriteScreen'
        component={WriteScreen}
      />
    </Stack.Navigator>
  )
}

export default StackNavigation;