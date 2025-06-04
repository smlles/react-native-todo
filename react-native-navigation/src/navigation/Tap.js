import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Mail,Meet,Settings } from "../Screens/TapScreens";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const Tab =createBottomTabNavigator();

const TabIcon = ({name,size,color})=>{
  return <MaterialCommunityIcons name={name} size={size} color={color}/>
}

const TabNavigation=()=>{


   return(
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={({route})=>({
        tabBarIcon : props=>{
          let name="";
          if(route.name==='Mail') name='email';
          else if(route.name==='Meet') name='video';
          else name = 'cog';
          return TabIcon ({...props,name}) 
          
        },
        tabBarLabelPosition : 'beside-icon', //라벨이 표시되는 위치
        tabBarShowLabel:false,//라벨 숨김
        tabBarStyle:{ //탭 바 스타일 변경
          backgroundColor: '#54b7f9',
          borderTopColor:"#fff",
          borderTopWidth:2,
        },
        tabBarActiveTintColor:'#fff',
        tabBarInactiveTintColor:"#0b92e9",
        headerStyle:{
          backgroundColor:'#95a5a6',
          height:110,
          borderBottomWidth:2,
          borderBottomColor:"#34495e"
        }
      })}
      >
      <Tab.Screen 
        name="Mail" 
        component={Mail}
        options={{
          tabBarLabel:'Inbox',
          tabBarIcon : props=>TabIcon({...props,name:props.focused?'email':'email-outline'})
        }}
      />
      <Tab.Screen 
        name="Meet" 
        component={Meet}
        options={{
            tabBarLabel:'Inbox',
           tabBarIcon : props=>TabIcon({...props,name:props.focused?'video':'video-outline'})
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={Settings}
        options={{
            tabBarLabel:'Inbox',
           tabBarIcon : props=>TabIcon({...props,name:props.focused?'cog':'cog-outline'})
        }}  
      />
    </Tab.Navigator>
  )
}

export default TabNavigation;