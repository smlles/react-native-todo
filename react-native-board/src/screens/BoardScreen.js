import styled from "styled-components";
import { Text,Button,FlatList } from "react-native";
import mokdata from "../data/mokdata";
import {MaterialIcons} from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";



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
 const _goDetailScreen=(item)=>{
  navigation.navigate("DetailScreen",{item})
  console.log('go!')
}
  return(
    <Container>
      <FlatList
        data={mokdata}
        keyExtractor={(item)=>item['id']}
        renderItem={({item})=>(
        <ItemContainer onPress ={_goDetailScreen(item)}>
          <Item item={item}>
            <Text style={{fontSize:24}}>{item.title}</Text>
          </Item>
            <ItemSubContainer>
              <ItemText>{item.author}</ItemText>
              <ItemText>{item.time}</ItemText>
              <ItemText>조회 : {item.views}</ItemText>
            </ItemSubContainer>
        </ItemContainer>
        )}
      />
      <GoWriteScreen>
        <MaterialIcons name='add' size={30} color='white'
        onPress={()=> navigation.navigate("WriteScreen")}/>
      </GoWriteScreen>
    </Container>
  )
}

export default BoardScreen;