import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { Spinner } from "../screens";
import { ProgressContext,UserContext  } from "../contexts";
import { useContext } from "react";
import MainStack from "./MainStack";

//Spinner.js = 로딩화면 (히오스 도는거)
//로딩 화면을 띄우는 여부를 Progress.js에 만든 상태
//전역 사용을 위해 context를 사용

//inProgress의 값에 따라 
// <Spinner /> 컴포넌트를 호출하는 코드 작성하기
//user의 uid와 email의 값이 존재하면 인증된 것으로 판단
//mainStack네비겨이션 렌더링하기
//존재하지 않으면? AuthStack 렌더링하기
const Navigation =()=>{

  const {inProgress}  = useContext(ProgressContext);
  const {user} =useContext(UserContext);
  //옵셔널 체이닝
  //    객체 속성이나 메서드에 접근할 때, null이나 undefined여도
  //    에러가 나지 않고 undefined를 반환하는 문법
  console.log('user:email',user.email)
  console.log('user:uid',user.uid)
  return(
    <NavigationContainer>
      
      {user?.email && user?.uid ? <MainStack/>:<AuthStack/>}
      
      {inProgress && <Spinner/>}
    </NavigationContainer>
  )
}

export default Navigation;