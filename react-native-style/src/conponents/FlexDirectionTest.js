import { View,Text,Button, StyleSheet, Pressable } from "react-native";
import {box_styles, viewStyles} from'../Styles'
import { useState } from "react";

const FlexDirectionTest=()=>{
  const [direction,setDirection]=useState('row');
  


  return(
    <View style={box_styles.container}>
      <Text style={box_styles.title}>FlextDirection:{direction}</Text>
      <View style={[box_styles.boxContainer,{flexDirection:direction}]}>
        <View style={box_styles.box}><Text style={box_styles.boxText}>1</Text></View>
        <View style={box_styles.box}><Text style={box_styles.boxText}>2</Text></View>
        <View style={box_styles.box}><Text style={box_styles.boxText}>3</Text></View>
      </View>
      <View Style={box_styles.buttons}>
        <Pressable>
        <Button 
          title='row'
          onPress={()=>setDirection('row')}
        >row</Button>
        <Button 
          title='column'
          onPress={()=>setDirection('column')}
        >column</Button>
        <Button 
          title='row reverse'
          onPress={()=>setDirection('row-reverse')}
        >row reverse</Button>
        <Button 
          title='column reverse'
          onPress={()=>setDirection('column-reverse')}
        >column reverse</Button>
        </Pressable>
        {/* 버튼 4개. title: row,column,row reverse, column reverse */}
      </View>
    </View>
  )
}



export default FlexDirectionTest;