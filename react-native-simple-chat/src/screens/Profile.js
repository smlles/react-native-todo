import styled, { ThemeContext } from "styled-components";
import {  Alert, Text } from "react-native";
import { logout,getCurrentUser,updateUserPhoto } from "../utils/firebase";
import { UserContext,ProgressContext } from "../contexts";
import { useContext,useState } from "react";
import { Image,Input,Button } from "../components";
import { theme } from "../theme";
import Spinner from "../components/Spinner";

const Container = styled.View`
  flex :1;
  justify-content:center;
  align-items:center;
  background-color:${({theme})=>theme.background};
  padding : 0 10px;
`
const Profile=()=>{
  const {dispatch}=useContext(UserContext);
  const user = getCurrentUser();
  const [photoUrl, setPhotoUrl]=useState();
  //테마 불러오기, 유저 정보 화면에 출력
  const theme=useContext(ThemeContext)
  const {spinner} =useContext(ProgressContext)

  const _handleLogoutButtonPress =async()=>{
    try {
      spinner.start()
      await logout();
      Alert.alert("logout success")
    } catch (error) {
      console.log(`[profile] logout :, ${error.message}`)
    }finally{
      dispatch({})
      spinner.stop();
    }
  }
  
  const _handlePhotoChange=async url=>{
    try {
      spinner.start();
      const updateUser =await updateUserPhoto(url);
      setPhotoUrl(updateUser.photoUrl);
    } catch (error) {
      Alert.alert("photo Error",error.message)
    }finally{
      spinner.stop()
    }
  }

  return(
    <Container>
      <Text style={{fontSize:24}}>Profile</Text>
      <Image 
        url={photoUrl} 
        rounded={true}
        showButton
        onChangeImage={_handlePhotoChange}
        style={{background:theme.imageButtonBackground}}
    />
     <Input
        label='name'
        value={user.name}
        disabled
      />
       <Input
        label='email'
        value={user.email}
        disabled
      />
      <Button 
        title='logout' 
        onPress={_handleLogoutButtonPress}
        containerStyle={{marginTop:30,backgroundColor:theme.buttonLogout}}
      />
    </Container>
  )
}

export default Profile;