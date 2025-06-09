import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ChannelList,Profile } from "../screens"
//bottomTab 네비게이터 생성


 const Tab = createBottomTabNavigator();
 
const MainTab =()=>{

 
  return(
    //ChannelList
    //Profile을 screen으로 받게 설정
    <Tab.Navigator>
      <Tab.Screen
        name="ChannelList"
        component={ChannelList}
        options={{
          headerShown:false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown:false
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTab;