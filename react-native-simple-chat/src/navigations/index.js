import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { Spinner } from "../screens";

const Navigation =()=>{
  return(
    <NavigationContainer>
      <AuthStack/>
      <Spinner/>
    </NavigationContainer>
  )
}

export default Navigation;