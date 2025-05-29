import { useReducer } from "react";
import { View,Text,Button } from "react-native";

const initialState={count:0}
// dispatch함수를 통해 전달된 action에 따라 state값 처리할 로직
const reducer = (state,action)=>{
    switch(action.type){
      case 'INCREMENT':
        return {count : state.count+1}; //새 객체 반환
        // state.count +=1, state.count++; 이건 안됨, 불변성 위반
      case 'DECREMENT':
        return {count : state.count-1};
      default:
        return state;
    }
  }
export default Counter2=()=>{
  const [state,dispatch]=useReducer(reducer,initialState);

  // dispatch 함수는 인자로 전달 된 action값을 reducer 함수에 전달하고 역할 끝
  return (
    <View style={{alignItems : 'center', justifyContent:'center',flex:1}}>
      <Text style={{fontSize:30}}> Count : {state.count}</Text>
      <Button title="+" onPress={()=>dispatch({type:'INCREMENT'})}/>
      <Button title="-" onPress={()=>dispatch({type:'DECREMENT'})}/>
    </View>
  )
  
}
