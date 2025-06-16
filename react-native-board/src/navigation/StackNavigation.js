import { createStackNavigator } from "@react-navigation/stack";
import BoardScreen from "../screens/BoardScreen";
import WriteScreen from "../screens/WriteScreen";
import DetailScreen from "../screens/DetailScreen";
import {Ionicons,MaterialIcons} from "@expo/vector-icons"
import { Pressable, View,Text} from "react-native";



const Stack = createStackNavigator();


const StackNavigation=()=>{


  return(
    <Stack.Navigator
      initialRouteName='BoardScreen'
      screenOptions={{
        headerTitleAlign:'center',
        headerStyle:{backgroundColor:'#989898'},
        headerTintColor:'white',
        headerTitleStyle:{color:'#fff',fontSize:30}
      }}>
      <Stack.Screen
        options={{
          headerTitle:'카페',
          headerRight:()=>(
            <View style={{flexDirection:'row',gap:16,marginRight:16}}>
              <Pressable onPress={()=>alert("준비중인 기능입니다.")}>
                <Ionicons name="search" size={22} color='white'/>
              </Pressable>
              <Pressable onPress={()=>alert("준비중인 기능입니다.")}>
                <Ionicons name="menu" size={22} color='white'/>
              </Pressable>
            </View>
          )
        }}
        name='BoardScreen'
        component={BoardScreen}
      />
      <Stack.Screen
        name='DetailScreen'
        component={DetailScreen}
        options={{
          headerTitle:'게시글 상세보기'
        }}
      />
      <Stack.Screen
        name='WriteScreen'
        component={WriteScreen}
        options={({navigation})=>({
          title:'글 쓰기',
          headerLeft:()=>(
            <Pressable onPress={()=>navigation.goBack()}>
              <Ionicons style={{marginLeft:10}} name="close" size={28} color='white'/>
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  )
}

export default StackNavigation;