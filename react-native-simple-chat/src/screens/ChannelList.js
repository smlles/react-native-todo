import styled from "styled-components";
import {Text,Button, Alert} from 'react-native';
import Channel from "./Channel";
import { UserContext } from "../contexts";
import { useContext } from "react";
import { logout } from "../utils/firebase";


const Container =styled.View`
  flex:1;
  background-color:${({theme})=>theme.background};
  align-items:center;
  justify-content:center;

`



const ChannelList=({navigation})=>{
  


  return(
    <Container>
      <Text style ={{fontSize:24}}>ChannelList</Text>
      <Button 
        title="ChannelCreation" 
        onPress={()=>navigation.navigate("ChannelCreation")}/>
     
    </Container>
  )
}

export default ChannelList;