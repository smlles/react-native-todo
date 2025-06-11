import styled, { ThemeContext } from "styled-components";
import { Text,FlatList, Alert } from "react-native";
import { useState,useEffect,useLayoutEffect, use, useCallback, useContext } from "react";
import { createMessage, db } from "../utils/firebase";
import { Input } from "../components";
import {
  collection,
  onSnapshot,
  query,
  doc,
  orderBy,
} from 'firebase/firestore'
import { GiftedChat,Send } from "react-native-gifted-chat";
import {MaterialIcon, MaterialIcons} from "@expo/vector-icons"
import { getCurrentUser } from "../utils/firebase";


const Container =styled.View`
  flex:1;
  background-color :${({theme})=>theme.background}
`

//send 버튼 컴포넌트
const SendButton =props=>{
  const theme=useContext(ThemeContext);

  return(
    <Send
      {...props}
      disabled={!props.text}
      containerStyle={{
        width:44,
        height:44,
        alignItems:'center',
        justifyContent:'center',
        margin:4,
      }}>
        <MaterialIcons 
          name="send"
          size={24}
          color={
            props.text ? theme.sendButtonActive : theme.sendButtonInactive}
        />
      </Send>
  )

}




// 넘겨받은 채널 id와 제목을 화면에 <Text>로 출력하기
const Channel =({navigation,route})=>{
  const {params}=route;
  const [messages,setMessages]=useState([]);
  const [text,setText]=useState('');

  const theme=useContext(ThemeContext);
  const {uid,name,photoUrl} = getCurrentUser();

  useEffect(()=>{
    //params.id가 없으면 아래 실행 방지
    if(!params.id)return;
    //channels 컬렉션에서 문서 ID를 통해 데이터 참조
    const docRef=doc(db,"channels",params.id);
    const collectionQuery =query(
      collection(db,`${docRef.path}/messages`),
      orderBy('createdAt','desc')
    );

    const unsubscribe=onSnapshot(collectionQuery,snapshot=>{
      const list =snapshot.docs.map(
        doc=>({
        id:doc.id,
        ...doc.data()
        }));
      setMessages(list);
      console.log("messages:", messages);
    })
    return()=>unsubscribe();
  },[params.id]) //params의 id가 변경될 때 마다 실행하기

  useLayoutEffect(()=>{
    navigation.setOptions({headerTitle:params.title||'Channel'})
  },[params.title])



  const _handleMessageSend=async messageList=>{
    //giftedChat에서 전달받은 배열의 첫 메세지 추출
    const newMessage = messageList[0];
    console.log(newMessage);
    try {
      await createMessage({channelId:params.id,text:newMessage});
    } catch (error) {
      Alert.alert("Send message Error".error.message)
    }
}

  return(
    <Container>
      {/* <GiftedChat
        listViewProps={{//리스트 뷰의 스타일을 테마의 background 색상으로 지정
          style:{backgroundColor:theme.background},
        }}
        placeholder="Enter a message..." //입력창에 표시할 홀더
        message={messages}
        user={{_id:uid,name,avatar:photoUrl}}
        onSend={_handleMessageSend} //메세지 전송 함수
        alwaysShowSend={true}//전송버튼 항상 표시
        textInputProps={{
          autoCapitalize:'none',
          autoCorrect:false,
          textContentType:'none',
          underlineColorAndroid:'transparent',
        }}
        multiLine={false}
        renderUsernameOnMessage={true}//메세지에 사용자이름 표시
        scrollToBottom={true}
        renderSend={props=><SendButton {...props}/>}
      /> */}
     <FlatList
      keyExtractor={item=>item['id']}
      data={messages}
      renderItem={({item})=>(
        <Text style={{fontSize:24}}>{item.text}</Text>
      )}
    />
    <Input
      value={text}
      onChangeText={text=>setText(text)}
      onSubmitEditing={()=>createMessage({
        channelId:params.id,
        text
      })}
    />
    </Container>
  )
}

export default Channel