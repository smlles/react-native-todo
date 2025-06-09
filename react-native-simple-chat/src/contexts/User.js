import {useState, createContext} from 'react';

const UserContext = createContext({
  user:{email:null,uid:null},
  dispatch : ()=>{

  }
})

//UserProvider를 만들고
//useState를 하나 만들고, 빈 배열로 초기화 [user,setUser]
//dispatch 함수 정의 (매개변수 email,uid)
//인자의 email과 uid를 state에 세팅
//user와 dispatch를 전역에 내보내기

const UserProvider = ({children}) => {

  const [user,setUser]=useState({});

  const dispatch =({email,uid})=>{

    const newUser = {
      email : email,
      uid : uid,
    };

    setUser(newUser);
  }
    
  const value ={user,dispatch}
  return(
    // 여기 value에 그냥 user,dispatch를 담아도 됨
    <UserContext.Provider value ={value}>
          {children}
    </UserContext.Provider>
  )

}

export { UserProvider,UserContext};