import styled from "styled-components";
import { Text,Button,StyleSheet,View, } from "react-native";
import { useFocusEffect,} from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
const styles=StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:"#121212",
    paddingHorizontal:16,
    paddingTop:8,
  },
  title : {
    fontSize:30,
    fontWeight:'bold',
    color : '#fff',
    // borderBottomWidth:1,
    // borderBottomColor:"#333",
    marginBottom:1,
    paddingVertical:8,
  },
  description : {
    flex:1,
    fontSize:16,
    color:'#fff',
    lineHeight:16,
    textAlignVertical:"top",
  }
});






const DetailScreen=({navigation,route})=>{
  const [post,setPost]=useState();
  const {item} = route.params;
  const {id} =route.params;
  

  // useEffect(()=>{
  //    console.log(route.params)
  //     fetch(`http://192.168.3.5:10000/api/posts/${id}`)
  //     .then((res)=>res.json())
  //     .then((json)=>{
  //       console.log("가져온 것",json.data);
  //       if(Array.isArray(json.data)){
  //         setPost(json.data);
  //       }
  //       const ids = json.data.map(item=>item.id)
  //       console.log(post)
        
  //       // console.log("post",post);
        
  //     })
  //     .catch((error)=>{
  //       Alert.alert("오류",error.message);
  //     })
  //   },[id])
    
  

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={{flexDirection:'row',borderBottomWidth:2,borderBottomColor:'grey',marginBottom:12,padding:5}}>
        <Text style={{color:'#999'}}>작성자 : {item.author}  {item.time}  조회수 : {item.views} </Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  )
}

export default DetailScreen;