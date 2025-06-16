import { Pressable,StyleSheet,Text } from "react-native";

const FloatingButton=({onPress})=>{
  return(
  <Pressable onPress={onPress} style={styles.button}>
    <Text style={styles.plus}>+</Text>
  </Pressable>
  )
}

const styles= StyleSheet.create({
  button : {
    position : 'absolute',
    right:40,
    bottom:60,
    backgroundColor:'#3498db',
    width:66,
    height:66,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
  },
  plus : {
    color:'white',
    fontSize:30,
    lineHeight:34,

  }
})

export default FloatingButton;