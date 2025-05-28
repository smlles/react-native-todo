import ThemeProvider from "../contexts/ThemeContext";
import { useContext,useState } from "react";
import { View,Pressable,Text,StyleSheet } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";


const styles = StyleSheet.create({
  containerDark:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#333',
  },
  containerLight:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
  },
  textDark:{
    color: '#fff',
    fontSize:24,
    textAlign:'center',
  },
  textLight:{
    color: '#333', 
    fontSize:24,
    textAlign:'center',
  },
  button:{
    backgroundColor:'#3498db',
    padding:11,
    borderRadius:10,
    width:'66%',
  }
})

const Theme =()=>{
  const {theme,dispatch}=useContext(ThemeContext);
// const{isDark,toggleTheme}=useContext(ThemeContext);
//  dispatch = toggleTheme
//  theme.isDark = isDark
  return(
    <View style={theme.isDark?styles.containerLight:styles.containerDark}>
      <Pressable style={styles.button} onPress={()=>dispatch(prev=>!prev)}>
        <Text style={theme.isDark?styles.textLight:styles.textDark}>
          지금 상태 : {theme.isDark?'라이트':'다크'}
        </Text>
      </Pressable>

    </View>

  )
}

export default Theme;