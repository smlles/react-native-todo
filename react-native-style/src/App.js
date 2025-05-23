import { StyleSheet, Text,View,Platform,Switch } from "react-native";
import { textStyles,viewStyles } from "./Styles";
import styled,{ThemeProvider} from "styled-components";
import { Header,Content, Footer } from "./conponents/Layout";
import FlexDirectionTest from "./conponents/FlexDirectionTest";
import JustifyContentTest from "./conponents/JustifyContentTest";
import { Profiler } from "react";
import ShadowBox from "./conponents/ShadowBox";
import MyButton from "./conponents/Buttons";
import Input from "./conponents/Inputs";
import { Theme } from "./Theme";
import { useState } from "react";
import { lightTheme,darkTheme } from "./Theme";


const Container = styled.View`
  flex:1;
  background-color:${props=>props.theme.background};
  align-items : center;
  justify-content:center;
`

export default function App(){
  const [isDark,setIsDark]=useState(false);
  
  const _toggleSwitch=()=>setIsDark(!isDark);

  return(
  <ThemeProvider theme={isDark? darkTheme : lightTheme}>
    <Container>
    

        
      
    {/* <JustifyContentTest/> */}
    {/* <FlexDirectionTest/> */}
      {/* <Header/>
      <Content/>
      <Footer/> */}
    {/* <Text
      style ={[textStyles.text,{color:"green"}]}>InLine Styling - Text</Text>
      여러개의 스타일을 적용해야한다면,
      배열을 이용해 style 속성에 여러개의 속성을 적용하면 된다. 
      단, 뒤에 있는 스타일이, 앞의 스타일을 덮어쓴다.
      여러개 스타일을 적용해야할 때 반드시 클래스 스타일만 
      적용해야 하는 것은 아니다, 인라인, 클래스를 혼용 할 수 있다.
      <Text
      style ={[textStyles.text,textStyles.error]}>InLine Styling - Error</Text> */}
      {/* {Platform.OS==='ios'?(
        <Text>Ios에서 실행중</Text>
      ):(
        <Text>안드로이드에서 실행중</Text>
      )} */}
      {/* <Text>현재 플랫폼 버전 : {Platform.Version}</Text>
      {Platform.OS ==="android"&&Platform.Version<30?(
        <Text>이 기능은 Android 30 이상 버전만 지원 됩니다.</Text>
      ) : (
        <Text>현재 플랫폼에서 지원되는 기능입니다.</Text>
      )} */}
      {/* <ShadowBox /> */}\

      <Switch value={isDark} onValueChange={_toggleSwitch}/>
      <MyButton title='Hanbit'/>
      <MyButton title="React Native"/>
      <Input borderColor="#3498db"/>
      <Input borderColor="#9b59b6"/>
    
    </Container> 
  </ThemeProvider>
  )
}

//인라인 식으로 작성 할 때는, color:'red'인 이유를
//코드만으로는 알기 어렵다.
//StyleSheet를 사용하면, error라는 이름으로
//오류가 있는 상황에서 사용하기 위한 것이라는
//의도 파악을 할 수 있다.
//글자 색 변경을 위해서, 클래스 스타일 방식에서는
//error객체에서 색깔을 변경하면 되지만
//인라인 방식에서는, 파일을 찾아다니면서,
//전부 변경해야한다.
// const styles =StyleSheet.create({
//   container:{
//     flex :1,
//     backgroundColor:"#fff",
//     alignItems:"center",
//     justifyContent:"center",
//   },
//   text:{
//     padding:10,
//     fontSize:26,
//     fontWeight:"600",
//     color:"black"
//   },
//   error:{
//     // padding:10,
//     // fontSize:26,
//     fontWeight:'400',
//     color:'red'
//   }
// })

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center',
//     color:'#fff',
//     backgroundColor:Platform.select({
//       ios:"#34f34f",
//       android:'#4213ff'
//     })
//   }
// })