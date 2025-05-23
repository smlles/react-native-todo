import { View,Text,Button, StyleSheet, Pressable } from "react-native";
import {box_styles, viewStyles} from'../Styles'
import { useState } from "react";

//justifyContent 
//주 축을 따라, 요소를 어떻게 배치할지 방식을 결정하는 속성
const JustifyContentTest=()=>{
  const [justifyContent,setJustifyContent]=useState('row');
  


  return(
    <View style={box_styles.container}>
      <Text style={box_styles.title}>justifyContent:{justifyContent}</Text>
      <View style={[box_styles.boxContainer,{justifyContent:justifyContent}]}>
        <View style={box_styles.box}><Text style={box_styles.boxText}>1</Text></View>
        <View style={box_styles.box}><Text style={box_styles.boxText}>2</Text></View>
        <View style={box_styles.box}><Text style={box_styles.boxText}>3</Text></View>
      </View>
      <View Style={box_styles.buttons}>
        <Pressable>
        <Button title='flex-start' onPress={()=>setJustifyContent('flex-start')}>flex-start</Button>
        <Button title='center' onPress={()=>setJustifyContent('center')}>center</Button>
        <Button title='flex-end' onPress={()=>setJustifyContent('flex-end')}>flex-end</Button>
        <Button title='space-between' onPress={()=>setJustifyContent('space-between')}></Button>
        <Button title='space-around' onPress={()=>setJustifyContent('space-around')}>row</Button>
        <Button title='space-evenly' onPress={()=>setJustifyContent('space-evenly')}>row</Button>
        
        </Pressable>
        {/* 버튼 4개. title: row,column,row reverse, column reverse */}
      </View>
    </View>
  )
}



export default JustifyContentTest;