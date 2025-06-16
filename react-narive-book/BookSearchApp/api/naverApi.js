import { Alert } from "react-native";
import { ClientId,ClientSecret } from "../constants/apiConfig";


const SearchBooks=async(query)=>{

  try {
    const result = await fetch(`https://openapi.naver.com/v1/search/book.json?query=${encodeURIComponent(query)}`,{
      method:'GET',
      headers:{
        'X-Naver-Client-Id' : ClientId,
        'X-Naver-Client-Secret':ClientSecret,
      }
    })
    const json = await result.json();
    
      // console.log("뭘 가져왔니?",json)
      return(json.items)
  
  } catch (error) {
    Alert.alert("안된거같아",error.message)
      
  }
   
   
}

  export default SearchBooks