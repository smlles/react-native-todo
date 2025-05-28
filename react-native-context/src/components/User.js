import styled from "styled-components";
import UserContext from "../contexts/User";
import { UserConsumer } from "../contexts/User";
import { useContext } from "react";

const StyledText= styled.Text`
  font-size : 24px;
  margin : 10px;

`


//Consumer 컴포넌트는 상위 컴포넌트 중 가장 가까운 곳에 있는
//Provider 컴포넌트가 전달하는 데이터를 이용한다.
//Provider 컴포넌트가 없다면, createContext함수의 파라미터로 전달 된 
//기본 값을 사용한다.
const User =()=>{
  const {user,dispatch} = useContext(UserContext);
  return(
    //Provider 컴포넌트를 사용 할 때, 반드시 value를 지정
    //Consumer 컴포넌트는 가장 가까운 Provider의 값을 이용한다. 
 
    // <UserConsumer>
      <StyledText>Name : {user.name}</StyledText>
    // </UserConsumer>
  )
}

export default User;