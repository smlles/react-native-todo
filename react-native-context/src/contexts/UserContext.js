import { createContext,useState } from "react";

//유저의 상태를 담아주는 useState
//provider에서 제공해야 하는 것
//유저의 state, login 함수(state에 유저 세팅)
// logout 함수 (state의 값을 null)
//유저 상태 state는 기본 null
//{name:'John Doe'}

//HomeScreen 로그인 된 상태 : welcome 이름,로그아웃 버튼
//로그인 안된 상태 : 로그인 버튼

export const UserContext =createContext({
  loggedIn : false,
  dispatch:()=>{}
})

const userData = {name :'John Doe'};


export const UserProvider =({children})=>{
  //유저의 데이터 
  const [user,setUser] =useState(null);
  //기본 로그아웃 상태
  const [loggedIn,setLoggedIn]=useState(false);

  const login=()=>{
    
    setUser(userData);
    setLoggedIn(true);
    console.log(user)
  }
  const logout =()=>{
    setUser(null);
    setLoggedIn(false);
    console.log(user)
  }
  return (
    <UserContext.Provider value={{user,loggedIn,login,logout}}>
      {children}
    </UserContext.Provider>

  )

}

