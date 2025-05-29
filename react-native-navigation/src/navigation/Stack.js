import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import List from "../Screens/List";
import Item from "../Screens/Item";

//스택 네비게이션 객체 생성
// Stack 개체에 Stack.Navigator, Stack.Screen등의
// 컴포넌트가 포함이 되어있다.
const Stack = createStackNavigator();

const StackNavigation =()=>{
  return (
    // 여러 스크린을 관리하는 컨테이너
    //내부에 <Stack.Screen 컴포넌트를 정의하여\
    // 사용할 화면들을 등록 한다.
    // 스타일 공통 적용 : Navigator에 screenOption
    // 스타일 개별 적용 : Screen에 options
    <Stack.Navigator 
      initialRouteName="Home"
      //cardStyle을 이용해서, 각 화면의 배경색 설정
      screenOptions={{
        cardStyle:{
          backgroundColor:'#3498db'},
          headerStyle:{
            height:110,
            backgroundColor:"#95a5a6",
            borderBottomWidth:5,
            borderBottomColor:'#34495e'
          },
          headerTitleStyle:{color:'#fff',fontSize:30}
          }}>
      {/* name에는 화면 이름을 작성하는데, 
      Screen컴포넌트의 name은
      반드시 서로 다른 값을 가져야한다. */}
      {/* name : 화면 고유의 이름
      component : 연결된 실제 컴포넌트, 해당 name 호출시
      실제 컴포넌트가 렌더링 */}
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen 
        name="List"
        options={{headerTitle:"List Screen"}}
        component={List}/>
      <Stack.Screen name="Item" component={Item}/>
    </Stack.Navigator>
  )
}

export default StackNavigation

