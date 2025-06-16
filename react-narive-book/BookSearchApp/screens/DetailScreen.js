import { View,Text,Image } from "react-native";




const DetailScreen=({navigation,route})=>{
  // console.log(route.params)
  const {item} =route.params
  const {author,title,image,description,discount} =item

  return(
    <View style={{flex:1,justifyContent:'center'}}>
      <View style={{alignItems:'center'}}>
        <Image source={{uri:image}} style={{width:200,height:320}} />
      </View>
      <Text>{title}</Text>
      <Text>{author}</Text>
      <Text>{discount}</Text>
      <Text>{description}</Text>
    </View>
  )
}

export default DetailScreen;