import styled from "styled-components";
import IconButton from "./IconButton";
import { images } from "../Image";
import { useState } from "react";
import Input from "./Input";

const Container = styled.View`
  flex-direction : row;
  align-items :center;
  background-color : ${({theme})=>theme.itemBackground};
  border-radius : 10px;
  padding : 5px;
  margin : 3px 0;

`


const Contents = styled.Text`
  flex:1;
  font-size:24px;
  color:${({theme,completed})=>(completed ? theme.done :theme.text)};
  text-decoration-line :${({completed})=>completed?'line-through':'none'}
`
const Task = ({item,deleteTask,toggleTask,editTask})=>{
  const [isEditing,setIsEditing]=useState(false);
  const [text,setText] =useState (item.text);

  const _onSubmitEditing=()=>{
    if(isEditing){
      const editedTask= Object.assign({},item,{text});
      setIsEditing(false);
      editTask(editedTask)
    }
  }

  const _onBlur=()=>{
    setIsEditing(false);
    setText(item.text);
  }

  return (
    <Container>
      {/* 넘어온 item의 completed 여부에 따라
      체크 된, 안된 박스 보여주기 */}
      <IconButton 
        type={item.completed ? images.complete : images.uncomplete}
        onPressOut={()=>toggleTask(item.id)}/>
      {isEditing ? 
        <Input value={text} 
              onChangeText={setText} 
              onSubmitEditing={_onSubmitEditing} 
              onBlur={_onBlur}/> :
        <Contents 
          completed={item.completed}>
            {item.text}
        </Contents>}
      {/* 완료 상태면 안보이게 */}
      {/* 수정하기 : 수정을 클릭해 ㅎ ㅐ당 항목이 Input 컴포넌트로변경되면서
      내용을 수정 할 수 있게 해보자 */}
      {item.completed ||<IconButton 
                          type={images.edit} 
                          id={item.id} 
                          onPressOut={()=>{setIsEditing(true);
                                          setText(item.text)}}/>}
      <IconButton 
        type={images.delete} 
        id={item.id} 
        onPressOut={deleteTask}/>
    </Container>
  )
}

export default Task;