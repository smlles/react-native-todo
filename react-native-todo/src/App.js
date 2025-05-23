import styled,{ThemeProvider} from "styled-components";
import { theme } from "./Theme";
import { StatusBar, TextInput, useWindowDimensions } from "react-native";
import Input from "./components/Input";
import { useState } from "react";
import { images } from "./Image";
import IconButton from "./components/IconButton";
import Task from "./components/Task";

const Container = styled.SafeAreaView`
  flex:1;
  background-color:${({theme})=>theme.background};
  align-items:center;
  justify-content:flex-start;
`
const Title = styled.Text`
  font-size:40px;
  font-weight:600;
  color : ${({theme})=>theme.main};
  align-self : flex-start;
  margin:20px;
`

const List = styled.ScrollView`
  flex : 1;
  width : ${({width})=>width-40}px;
  
`
 

export default App =()=>{
  const {width} = useWindowDimensions();
  // 새 할일이 담긴 state
  const [newTask,setNewTask] = useState('');
  // 
  const [tasks,setTasks]=useState(
    {
        '1':{id:'1',text:'Hanbit',completed:false},
        '2':{id:'2',text:'React Native',completed:true},
        '3':{id:'3',text:'Study',completed:false},
        '4':{id:'4',text:'Game',completed:false},
    }
  )

  const _handleTextChange=(text)=>{
    setNewTask(text);
  }
  const _addTask=()=>{
    //_addTask가 호출되면 task에 새로운 할일이 추가되도록
    // 기능을 만들어보기
    // id값은 Date.now().toStirng();
    if(newTask.trim() === '')return

    const id =Date.now().toString();
    const saveTask = 
    {id : id,
     text: newTask,
      completed:false,
    }

    setTasks((prev)=>({...prev,[id]:saveTask}));
    alert(`Add: ${newTask}`);
    setNewTask('');
  }
  const _deleteTask=(id)=>{
    console.log('삭제하고 싶어요',id)
    // Object.assign9target,...source)
    //target : 속성을 복사할 객체
    //source : 속성을 복사할 하나 이상의 원본 객체들
    const currentTasks = Object.assign({},tasks);
    delete currentTasks[id];
    setTasks(currentTasks);

  }

  const _toggleTask = id =>{
    const currentTasks=Object.assign({},tasks);
    currentTasks[id]['completed']=!currentTasks[id]['completed'];
    setTasks(currentTasks);
  }

  const _editTask =item=>{
    //현재 배열 복사해서 가져오고
    //그 중 변경된 내용을 넣고 다시 state에 반영하기
    const currentTasks=Object.assign({},tasks);
    currentTasks[item.id]=item;
    setTasks(currentTasks)
  }

  //포커스를 잃었을 떄 발생하는 이벤트
  const _onBlur =()=>{
    setNewTask('');
  }

  return(
  <ThemeProvider theme={theme}>
    <Container>
      <Title>오늘의 할 일</Title>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.background}
      />
      <Input
        placeholder="+ Add a Task"
        value={newTask}
        onChangeText={_handleTextChange}
        onSubmitEditing={_addTask}
        onBlur={_onBlur}
      />
      {/* 할 일의 수 만큼, task 컴포넌트가 만들어져야 한다. */}
      {/*  {Object.values(tasks)} : 인자로 전달된 값이, 객체인 경우
      내부 값들만 배열로 추출함 */}
      <List width={width}>
        {/* 할 일의 개수만큼 task 출력하기 
        단, id가 클수록 맨 위로*/}
        {Object.values(tasks)
        .reverse()
        .map(item=>(
          <Task key={item.id}
            item ={item}
            deleteTask={_deleteTask}
            toggleTask={_toggleTask}
            editTask={_editTask}
          />
        ))}
      </List>
    </Container>
  </ThemeProvider>
  )
}