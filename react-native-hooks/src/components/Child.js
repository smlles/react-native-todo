import { Button,View } from "react-native";

//자식 컴포넌트가 setState를 props로 받아서 호출하면
//그 함수는부모 컴포넌트의 state를 변경한다
const Child=({changeCount})=>{
  return(
  <View>
    <Button 
      title="+1"
      onPress={()=>changeCount(prev=>prev+1)}/>
  </View>
  )
}

export default Child;