import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ChannelList,Profile } from "../screens"
import {MaterialIcons} from '@expo/vector-icons'
import { ThemeContext } from "styled-components";
import { useContext } from "react";
//bottomTab 네비게이터 생성


 const Tab = createBottomTabNavigator();

  const TabBarIcon = ({focused,name})=>{
    const theme = useContext(ThemeContext);
      return (
      <MaterialIcons 
          name={name}
          size={26} 
          color={focused? theme.tabActiveColor:theme.tabInactiveColor}
      />
      )
  }
 
 
const MainTab =({navigation,route})=>{


  //모든 탭에 대해 선택되면 tabActiveColor로 
  // 선택이 안되면tabInactiveColor 설정
  //TabBarIcon 함수를 만들고, 매개변수로 {focused,name}을 받는다.
  //<MaterialIcons>를 반환한다. 속성은 name size는 26 color
  // 1아이콘 name chat-buble,chat-buble-outline
  // 2아이콘 name person,person-outline

  return(
    //ChannelList
    //Profile을 screen으로 받게 설정
    <Tab.Navigator
      screenOptions={{
        // headerShown:false,
        headerTitleAlign:'center',
      }}
      >
      <Tab.Screen
        name="ChannelList"
        component={ChannelList}
        options={{
          
          tabBarIcon:({focused})=>(
            <TabBarIcon focused={focused}
            name={focused?"chat-bubble":"chat-bubble-outline"}/>
          ),
          headerRight:()=>(
            <MaterialIcons
              name="add"
              size={26}
              style={{margin:10}}
              onPress={()=>navigation.navigate("ChannelCreation")}
            />
          )

          
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown:false,
           tabBarIcon:({focused})=>(
            <TabBarIcon focused={focused}
            name={focused?"person":"person-outline"}/>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTab;