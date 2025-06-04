import { Button } from "react-native";
import styled from "styled-components";

const Container =styled.View`
  align-items :center;
  flex:1;
  justify-content:center;

`

const StyledText=styled.Text`
  font-size : 30px;
  margin-bottom: 10px;

`

const items=[
  {_id :1,name : 'React Native'},
  {_id :2,name : 'React Navigation'},
  {_id :3,name : 'Hanbit'}
]

const List=({navigation})=>{
  return (
    <Container>
      <StyledText>List</StyledText>
      {items.map(item=>(
        <Button
          key={item.id}
          title={item.name}
          // Item이 여러개라면 Item 위치로 가면서 받을 값(id,name)을 같이 줘야함
          onPress={()=>navigation.navigate('Item',{id:item._id,name:item.name})}
        />
      ))}
    </Container>
  )
}

export default List;