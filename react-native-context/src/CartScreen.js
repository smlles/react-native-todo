import { View,Text,Pressable,ScrollView } from "react-native"
//상품 추가버튼 
//상품이 추가 될 때마다, 버튼 아래에 나열
//상품 이름 문자열 옆에 삭제버튼



export const CartScreen=({cart,dispatch})=>{


const handleAddItem=()=>{
  const newItem= {
        id : Date.now().toString() ,
        name: 'New Item'
      }
  dispatch({type:"ADD_ITEM",payload:newItem})
}

  return(
    <View
      style={{
        width:'66%',
        justifyContent:'center',
        alignItems:'center'
      }}>
      <Pressable onPress={handleAddItem}>
        <Text
          style={{
          
          }}>상품추가</Text>
      </Pressable>
      {cart.map((item)=>
        <View style={{
          width:"100%",
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          margin:5,
          padding:10,
          borderWidth:1,
          borderColor:'#ccc',
          borderRadius:5,
        }}>
        <Text>{item.name}</Text>
        <Pressable 
          onPress={()=>dispatch({type:"REMOVE_ITEM",payload:item.id})}>
            <Text style={{
              borderWidth:1,
              padding:5,
            }}>삭제</Text>
        </Pressable>
        </View>
      )}
    </View>
  )
}