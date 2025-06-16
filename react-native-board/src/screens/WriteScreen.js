import styled from "styled-components";
import {Ionicons} from '@expo/vector-icons'
import { useLayoutEffect, useState } from "react";
import { View,TextInput,StyleSheet,Pressable,Text, Alert } from "react-native";



const Container = styled.View`
  flex:1;
  align-items:center;
  justify-content:center
`




const WriteScreen=({navigation})=>{
  const [title ,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [author,setAuthor]=useState('');

  const handleSubmit=()=>{
    console.log("title",title)
    console.log("des",description)
    if(!title.trim()||!description.trim()||!author.trim()){
      Alert.alert('빈칸은 안된다')
      return;
    }
    fetch("http://192.168.3.5:10000/api/posts",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        title,
        description,
        author,
        time: new Date().toISOString(),
        views:0,        
      })
    }).then((res)=>{
      if(!res.ok){
        throw new Error("실패한듯?",res.status);
      }
      return res.json();
    })
    .then((json)=>{
      Alert.alert("성공!","했지롱!");
      navigation.goBack();
    })
    .catch((error)=>{
      Alert.alert("문제생김",error.message);
    })
    
  }
  
  useLayoutEffect(()=>{
    navigation.setOptions({
          headerRight:()=>(
            <Pressable style ={{ marginRight:12}} onPress={handleSubmit}>
              <View style={{
                backgroundColor: ' #2eec71',
                paddingHorizontal:14,
                paddingVertical:6,
                borderRadius:6,
              }}>
                <Text style={{color:"white",fontWeight:'bold'}}>
                  등록
                </Text>
              </View>
            </Pressable>
          ),
  })
},[title,description,handleSubmit])

  return(
    <View style={styles.container}>
      <TextInput
        placeholder="제목"
        placeholderTextColor="#fff"
        style={styles.titleInput}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="작성자"
        placeholderTextColor="#fff"
        style={styles.titleInput}
        value={author}
        onChangeText={setAuthor}
      />
      <TextInput
        placeholder="내용"
        placeholderTextColor="#fff"
        style={styles.descriptionInput}
        value={description}
        onChangeText={setDescription}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:"#121212",
    paddingHorizontal:16,
    paddingTop:8,
  },
  titleInput : {
    fontSize:18,
    fontWeight:'bold',
    color : '#fff',
    borderBottomWidth:1,
    borderBottomColor:"#333",
    marginBottom:12,
    paddingVertical:8,
  },
  descriptionInput : {
    flex:1,
    fontSize:16,
    color:'#fff',
    textAlignVertical:"top",
  }
});

export default WriteScreen;