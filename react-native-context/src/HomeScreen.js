import { View,Text,Pressable,StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container:{
   
  },
  button:{
    backgroundColor:'#3498db',
    padding:24,
    borderRadius:8,
  },
  text:{
    textAlign:'center',
    fontSize:24
  },
  loginText:{
    fontSize:33
  }
})


const HomeScreen=({user,loggedIn,login,logout})=>{

//  
     return(
    <View style={styles.container}>
      {loggedIn?
      <>
        <Text style={styles.loginText}>Welcome! {user.name}</Text>
        <Pressable
         style={styles.button}
         onPress={logout}>
            <Text
              style={styles.text}>로그아웃</Text></Pressable>
      </>:
        <Pressable 
        style={styles.button}
        onPress={login}>
          <Text
            style={styles.text}>로그인</Text></Pressable>}
    </View>
  )
  
}

export default HomeScreen;