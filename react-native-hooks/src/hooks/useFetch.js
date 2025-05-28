import { useState,useEffect} from "react";

export const useFetch =url =>{
  //서버에서 받아온 데이터를 저장
  const [data, setData] = useState(null);
  //오류 발생시 에러 객체를 저장
  const [error,setError] = useState(null);
  const [inProgress, setInprogress]=useState(false)

  //useEffect의 콜백 함수는 비동기 함수로 선언 불가능
  //그래서 내부에 비동기 함수를 별도로 정의한 뒤 호출한다.
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        setInprogress(ture);
        //fetch API로 데이터를 요청
        const res= await fetch(url);
        
        //응답 결과를 JSON으로 파싱
        const result =  await res.json();

        //응답이 성공했을 경우 (HTTP 상태코드 : 200~299)
        if(res.ok){
          setData(result);
          setError(null);
        }else{
          throw result ; //응답은 했는데 에러가 있으면 catch로 이동
        }
      } catch (error) {
        setError(error); 
      }finally{
        setInprogress(false);
      }
    }
    fetchData();
  },[url])
  return{data,error,inProgress};
}