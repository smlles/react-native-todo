import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { View,Pressable,Text } from "react-native";
import HomeScreen from "../HomeScreen";

const UserComponent =()=>{
  //받아옴
  const {user,loggedIn,login,logout} = useContext(UserContext);

  return(
    <HomeScreen
      user={user}
      loggedIn={loggedIn}
      login={login}
      logout={logout}
    />
  )



 


}

export default UserComponent;