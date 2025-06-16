import styled from "styled-components";
import { Text,Button,FlatList, StyleSheet, Alert,View } from "react-native";
import posts from "../data/data";
import {MaterialIcons} from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";
import PostItem from "../components/PostItem";
import FloatingButton from "../components/FloatingButton";
import { useState,useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";


const Container = styled.View`
  flex:1;
`

const ItemContainer=styled.Pressable`
  height:100px;
  flex-direction:column;
  margin: 5px;
  border-bottom-width:1px;
  padding:5px;
`
const ItemSubContainer=styled.View`
  flex-direction:row;
  
`
const Item = styled.View`
  flex :1;
`
const ItemText=styled.Text`
  color : #888;
  padding : 10px;
`
const GoWriteScreen=styled(TouchableOpacity)`
  position: absolute;
  bottom : 30px;
  right : 20px;
  background-color: #1da1f2;
  width:50px;
  height:50px;
  align-items:center;
  justify-content:center;
  border-radius:50px;
`



const BoardScreen=({navigation})=>{
  const [posts,setPosts]=useState([]);
  // fetch나 axios를 통해 읽은 데이터를 
  // state에 담아서 FlatList에 출력

  useFocusEffect(
    useCallback(()=>{
    fetch("http://192.168.3.5:10000/api/posts")
    .then((res)=>res.json())
    .then((json)=>{
      // console.log("가져온 것",json);
      setPosts(json.data);
    })
    .catch((error)=>{
      Alert.alert("오류",error.message);
    })
  },[posts,navigation])
  )
  
 const _goDetailScreen=(item)=>{
  navigation.navigate("DetailScreen",{ item})
  console.log('go!')
}
  return(
    // view style=styles.container
    <Container>
      {posts&&posts.length>0?<FlatList
        data={posts}
        keyExtractor={(item)=>item['id']}
        // (item)=>item.id.toString()
        renderItem={({item})=>(
          //({item})=><PostItem post={item}/>
        <ItemContainer onPress ={()=>_goDetailScreen(item)}>
          <Item item={item}>
            <Text style={{fontSize:24}}
            numberOfLines={1}
            ellipsizeMode="tail">
              {item.title}
            </Text>
          </Item>
            <ItemSubContainer>
              <ItemText>{item.author}</ItemText>
              <ItemText>{item.time}</ItemText>
              <ItemText>조회 : {item.views}</ItemText>
            </ItemSubContainer>
        </ItemContainer>
        )}
      />:<View style={styles.container}>
          <Text style={{fontSize:35}}>게시글이 없는데요?</Text>
        </View>}
      <FloatingButton onPress={()=>navigation.navigate("WriteScreen")}/>
      {/* <GoWriteScreen>
        <MaterialIcons name='add' size={30} color='white'
        onPress={()=> navigation.navigate("WriteScreen")}/>
      </GoWriteScreen> */}
    </Container>
  )
}

const styles =StyleSheet.create({
  container :{
    flex :1,
    
    color:"#000",
    alignItems:'center',
    justifyContent:'center'
  }
})

export default BoardScreen;