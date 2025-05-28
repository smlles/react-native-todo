import { Children, createContext, useState } from "react";

//1. createContext 함수를 호출해 새로운 Context를 생성한다.
const UserContext = createContext({
  user : {name :''}, //기본 사용자 이름 빈 문자열
  dispatch : ()=>{},//기본 dispatch는 빈 함수

});

const UserProvider =({children})=>{
  const [name, setName] = useState('Beomjun kim');
  //얘가 전역적으로 관리할 데이터
  const value = {user : {name}, dispatch:setName};

  return(
    //Provider 컴포넌트의 value 속성으로 전역적으로
    // 관리할 데이터를 전달
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
//Context의 값을 수정해 context를 사용하는 컴포넌트에
//변경된 내용을 반영해보기
const UserConsumer = UserContext.Consumer;

export {UserProvider,UserConsumer};
export default UserContext;

