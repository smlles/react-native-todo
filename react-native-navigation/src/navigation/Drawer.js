import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen,ProfileScreen,CustomDrawer } from "../Screens/DrawerScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation=()=>{
  return(
    <Drawer.Navigator
      // Drawer에 들어갈 커스텀 컴포넌트
      // props로 넘어가는 내용들
      // 스크린 이름, 드로어 조작 함수들, 스크린 정보
      drawerContent={(props)=><CustomDrawer {...props}/>}
      screenOptions={{
        
        drawerStyle:{//드로어의 스타일 
          backgroundColor:'#123456', width :240,
          borderWidth:3,
        },//드로어 라벨의 텍스트 스타일(글자크기 두께 색깔)
        drawerLabelStyle:{fontSize:24},
        //선택된 드로어의 색상
        drawerActiveTintColor:'#4caf50',
        //선택 안된 드로어의 색상
        drawerInactiveTintColor : '#757575',
        //모든 스크린의 헤더가 사라짐
        // headerShown:false,
        drawerPosition:'right',
      }}>
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Profile" component={ProfileScreen}/>
    </Drawer.Navigator>
  )
}
export default DrawerNavigation;