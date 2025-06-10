//채널 화면으로 이동 할 수 있는 버튼을 가진
//간단한 채널 생성 화면
import styled from "styled-components";
import { Alert, Text} from "react-native";
import { useState,useRef,useEffect, useContext } from "react";
import { Input,Button } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createChannel } from "../utils/firebase";
import { ProgressContext, UserContext } from "../contexts";

const Container = styled.View`
  flex:1;
  background-color:${({theme})=>theme.background};
  align-items:center;
  justify-content:center;
  padding : 0 20px;
`
// 에러메세지 표시 텍스트
const ErrorText= styled.Text`
  align-items : flex-start;
  width : 90%;
  height: 20px;
  margin-bottom : 10px;
  line-height:20px;
  color : ${({theme})=>theme.errorText}
`

const ChannelCreation = ({navigation})=>{

  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [disabled,setDisabled] =useState(true);
  const [errorMessage,setErrorMessage]=useState('');

  const {spinner} = useContext(ProgressContext);

  const descriptionRef=useRef();

  useEffect(()=>{
    if(title.trim()===""){
      setErrorMessage("please enter the title")
    }else{
      setErrorMessage('');
    }

    setDisabled(!(!errorMessage&&title))
  },[title,description,errorMessage])

 
// 제목, 설명(옵션)을 입력하고 생성을 눌렀을 때
// firestore에 채널을 생성하기
  const _handleCreateChat=async()=>{
    try {
      spinner.start()
      const id = await createChannel({title,description});
      console.log(`Channel create with :  ${title} , ${description}`)
      //생성된 채널로 바로 이동하며, id와 title 정보를 함께 전달
      //replace를 사용해 현재 스택을 교체
      navigation.replace("Channel",{id,title})
    } catch (error) {
      Alert.alert("Creatin Error",error.message)
    }finally{
      spinner.stop();
    }
    
  }

  return(
    <Container>
      {/* 채팅방 제목을 작성할 Input */}
      <Input 
        label='제목'
        placeholder='Title'
        value={title}
        onChangeText={(title)=>setTitle(title)}
        maxLength={20}
        onSubmitEditing={()=>{
          setTitle(title.trim());
          descriptionRef.current.focus();
        }}
        returnKeyType='next'/>
      {/* 채팅방 설명을 작성할 Input */}
      <Input 
        ref={descriptionRef}
        label='설명'
        placeholder='Description'
        value={description}
        onChangeText={(description)=>setDescription(description)}
        onSubmitEditing={()=>{
          setDescription(description.trim());
          _handleCreateChat()
        }}
        onBlur={()=>setDescription(description.trim())}
        maxLength={40}
        returnKeyType='done'/>
      {/* 에러 메시지 표시 영역 */}
      <ErrorText>{errorMessage}</ErrorText>
      {/* 채널 생성 버튼,비활성 여부는 disabled state제어 
      버튼을 눌렀을 때, 콘솔에 제목과 설명 띄우기*/}
      <Button 
        disabled={disabled} 
        title="Create!" 
        onPress={_handleCreateChat}/>
      
      
      {/* <Button title="Channel" onPress={()=>navigation.navigate('Channel')}/> */}
    </Container>
  )
}

export default ChannelCreation