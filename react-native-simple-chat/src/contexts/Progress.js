import { useState,createContext } from "react";

//데이터 전역 관리를 위해 conText생성

const ProgressContext= createContext({
  inProgress : false,
  spinner:()=>{

  }
})

//Provider 컴포넌트는 하위 컴포너트에게 
// '진행 상태' 및 Spinner를 제어할 수 있는 함수를 제공
const ProgressProvider =({children})=>{
  //inProgress state와 이를 업데이트 할 setInProgress함수
  const [inProgress,setInProgress]=useState(false);

  //spinner 객체를 생성해서 start와 stop을 정의
  const spinner = {
    start:()=>setInProgress(true), //진행 중을 나타냄
    stop:()=>setInProgress(false), // 진행중이 아님
  }

  const value = {inProgress,spinner}
  //전역 관리 데이터

  return(
    <ProgressContext.Provider value ={value}>
      {children}
    </ProgressContext.Provider>

  )
}

export {ProgressContext, ProgressProvider}