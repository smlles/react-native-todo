import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createNativeStackNavigator();



const StackNavi=()=>{


  return(
    <Stack.Navigator
      initialRouteName="LoginScreen">
      <Stack.Screen 
        name='LoginScreen'
        component={LoginScreen}
        options={{
          headerShown:false,
        }}
      />
      <Stack.Screen 
        name='SignupScreen'
        component={SignupScreen}
        options={{
          headerShown:false,
        }}
      />
    </Stack.Navigator>

  )
}

export default StackNavi;