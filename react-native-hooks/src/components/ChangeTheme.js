import { useToggle } from "../hooks/useToggle";
import { View,Text,Pressable,StyleSheet } from "react-native";


export const ChangeTheme=()=>{
  const theme=useToggle();
  // const {value,toggle} = useToggle(false);
  return(
    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#fff'
    }}>
      <Text style={{fontSize:24,marginBottom:20}}>현재 상태 : {theme.value?'on':'off'}</Text>
      <View>
        <Pressable 
          style={{
            backgroundColor:theme.value? '#f1c40f':'#95a5a6',
            padding:12,
            borderRadius:8,
          }}
          onPress={theme.toggle}>
          <Text>배경 바꾸기</Text>
        </Pressable>
      </View>
    </View>
  )
}
