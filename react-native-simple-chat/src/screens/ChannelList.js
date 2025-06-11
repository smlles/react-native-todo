import styled,{ThemeContext} from "styled-components";
import {Text,Button, Alert} from 'react-native';
import Channel from "./Channel";
import { UserContext } from "../contexts";
import React, { useContext } from "react";
import { logout } from "../utils/firebase";
import { FlatList } from "react-native";
import {MaterialIcons} from '@expo/vector-icons'
import { collection,query,orderBy,onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useState,useEffect } from "react";
import moment from "moment";





const Container =styled.View`
  flex:1;
  background-color:${({theme})=>theme.background};
 
  
`

//각 아이템 (채널)을 감싸는 터치 영역
const ItemContainer=styled.Pressable`
  flex-direction : row;
  align-items : center;
  border-bottom-width : 1px;
  border-color : ${({theme})=>theme.listBorder};
 
  padding : 15px 20px;

`
//텍스트 영역 (제목 + 설명)
const ItemTextContainer=styled.View`
  flex:1;
  flex-direction:column;

`
// 제목 
const ItemTitle=styled.Text`
  font-size:20px;
  font-weight : 600;
`
//설명
const ItemDescription=styled.Text`
  font-size:16px;
  margin-top : 5px;
  color : ${({theme})=>theme.listDescription};
`
//생성시간
const ItemTime= styled.Text`
  font-size:12px;
  color : ${({theme})=>theme.listTime};
`


//더미데이터 (진짜가 아님)
// const channels =[];
// for(let idx=0; idx<100; idx++){
//   channels.push({
//     id:idx,
//     title : `title ${idx}`,
//     description : `description ${idx}`,
//     createAt: idx,
//   })
// }


 const getDataOrTime =ts =>{
    //startOf(unit): 현재 moment 객체를, 지정한 단위의 시작 점으로 변경
    //해당 날짜의 00:00:00초로 설정
    const now = moment().startOf('day');
    // 전달된 ts날짜의 자정을 기준
    const target = moment(ts).startOf('day');
    // diff : 날짜 차이 계산
    return moment(ts).format(now.diff(target,'days')>0?"MM/DD":"HH:mm");    
    //  now와 target의 날짜 차이를 계산
    //같은 날이면  0 
    //ts가 어제면 1 이틀전이면 2....
    // 그래서 지난 날짜면 월/일, 아직 오늘이면 시/분으로 표시
  }

// 개별 채널 아이템 렌더링 하는 컴포넌트
const Item = React.memo(({item : {id,title,description,createAt},onPress})=>{
  const theme =useContext(ThemeContext);
  // console.log(`Item : ${id}`)


  return (
    // 요소 가로배치
    <ItemContainer onPress={()=>onPress({id,title})}> 
      <ItemTextContainer>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemTextContainer>
      <ItemTime>{getDataOrTime(createAt)}</ItemTime>
    <MaterialIcons
      name="keyboard-arrow-right"
      size={24}
      color={theme.listIcon}
    />
    </ItemContainer>
  )
}
)




// 채널 리스트 전체를 렌더링하는 컴포넌트
const ChannelList=({navigation})=>{
  // fireStore에서 받아온 내용 저장하는 state;
  const [channels,setChannels]=useState([]);

  // 채널목록이 렌더링 되면 콜백실행
  useEffect(()=>{
    //1. fireStore의 channels 컬렉션에 대한 쿼리 생성
    // 생성일 내림차순 정렬
    const collectionQuery=query(
      collection(db,'channels'),orderBy('createAt','desc')
    )
    //onSnapShot : 실시간 리스너 등록
    //수신 대기상태에서, db에 문서가추가되거나, 수정될 떄마다 지정된 함수 호출
    //collectionQuery 결과에 변경이 생길 때 마다 snapshot 콜백이 실행
    const unsubscribe=onSnapshot(collectionQuery,snapshot=>{
      const list =[];

      snapshot.forEach(doc=>{
        // 문서의 실제 데이터(객체)를 추출
        list.push(doc.data())
      });
      // state에 저장하기
      setChannels(list);
    })
    //useEffect의 클린업 함수
    //컴포넌트가 언마운트 되거나 리렌더링으로 이펙트가 
    //재실행될 때, 그존의 구독을 해제한다.
    //수신대기 상태를 해제하지 않으면, 다시 채널 목록 화면이
    //마운트 될 때, 수신 대기 이벤트가 추가되면서, 데이터를
    //중복으로 받아오는 문제가 발생 할 수 있다.
    return()=>unsubscribe();
  },[])

 

const _handleItemPress=params=>{
  navigation.navigate('Channel',params);
}



  return(
    <Container>
     <FlatList
        keyExtractor={item=>item['id']} //고유한 키를 id로 지정
        data={channels} //데이터 리스트
        renderItem={({item})=>(
          <Item item={item} onPress={_handleItemPress}
      /> //배열의 각 아이템 렌더링
        )}
        windowSize={3}
      />
    </Container>
  )
}

export default ChannelList;