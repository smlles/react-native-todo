import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import List from "../Screens/List";
import Item from "../Screens/Item";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Platform, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
      // 처음으로 띄울 화면 지정
      //cardStyle을 이용해서, 각 화면의 배경색 설정
      screenOptions={{
        cardStyle:{
          // 각 화면을 카드처럼 관리
          //배경색, 패딩, 마진 지정가능
          backgroundColor:'#fff'
        },
        headerStyle:{
          height:110,
          // 헤더 높이
          backgroundColor:"#95a5a6",
          borderBottomWidth:5,
          //하단의 테두리 두께
          borderBottomColor:'#34495e'
        },
        headerTitleStyle:{
          //헤더 타이틀 글자
          color:'#fff',
          fontSize:30,
        },
        headerTitleAlign:'center',
        //헤더 타이틀 중앙 정렬
        headerTitle : ({style})=>(
          // 모든 화면 기본 타이틀을 아이콘으로 교체
          <MaterialCommunityIcons name="react" style={style} />
        )
      }}>
      {/* name에는 화면 이름을 작성하는데, 
      Screen컴포넌트의 name은
      반드시 서로 다른 값을 가져야한다. */}
      {/* name : 화면 고유의 이름
      component : 연결된 실제 컴포넌트, 해당 name 호출시
      실제 컴포넌트가 렌더링 */}
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen 
        name="List"
        options={{
          headerTitle:"List Screen", 
          headerBackTitleVisible:true,
          headerLeft:()=>{ 
//안드로이드는 화면 왼쪽에 처리를 하기 위해서 headerLeft가 필요하다.
            const navigation = useNavigation();
            // 함수형 컴포넌트 안에서 스크린 이동, 뒤로가기,
            // 파라미터 전달 등 네비게이션 기능을 사용 할 수 있다
            return(
              // 상단 왼쪽 버튼 구현
              <Pressable
                style={({pressed})=>({
                  marginLeft:10,
                  opacity:pressed? 0.5 : 1,
                })}
                // 뒤로 가세요
                onPress={()=>navigation.goBack()}
              >
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <MaterialCommunityIcons name="arrow-left" size={28} color="#000" /> 
                <Text>뒤로</Text>
                </View>
              </Pressable>
            )
          }
        }}
        component={List}/>
      <Stack.Screen name="Item" component={Item}/>
    </Stack.Navigator>
  )
}

export default StackNavigation

