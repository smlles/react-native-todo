import { View,Text,Button,StyleSheet, Pressable,Image } from "react-native";
import { DrawerContentScrollView,DrawerItem,DrawerItemList } from "@react-navigation/drawer";

const HomeScreen =({navigation})=>{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
    </View>
  )
}

const ProfileScreen=({navigation})=>{
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#f9f9f9',
  
  },
  title:{
    fontSize:24,
    marginBottom:20,
  },
  profileContainer:{
    flex:1,
    padding:20,
    alignItems:'center',
  },
  profileImage:{
    width:80,
    height:80,
    borderRadius:40,
    marginBottom:10,
  },
  profileName : {
    color:'#fff',
    fontSize:24,
    fontWeight:'bold',

  },
  profileEmail:{
    color:'#fff',
    fontSize:14,
  },
  logoutContainer:{
    padding:20,
    borderTopWidth:1,
    borderTopColor:'#ccc',
  },
  logoutText:{
    fontsize:16,
    fontWeight:'bold',
    color:'#e65343',
  }
})

const CustomDrawer=(props)=>{
  return(
    <View style={{flex:1}}>
      <DrawerContentScrollView 
        // 드로어 메뉴 스크롤 영역
        {...props} 
        contentContainerStyle={{backgroundColor:'#4caf50'}}>
          {/* 프로필 영역 */}
        <View style = {styles.profileContainer}>
          <Image 
            source={{uri:'https://i.namu.wiki/i/1B_DF9JzwwkRu7SWkzdtP0zcaOHnRg65yNGACbtVk93cCJTJ7eUGJfdHUOd1Y20hg-vROkB18EiUPPDdVCJt4OY_LcVwgBHXVXuFOfu3Wbnyza444514aVF7vAai_UZaoDSE5qT25WEbcUvHhEE5-A.webp'}}
            style ={styles.profileImage}/>
          <Text style={styles.profileName}>홍길동</Text>  
          <Text style={styles.profileEmail}>one@korea.com</Text>  
        </View>
        {/* 기본 제공 드로어 메뉴 */}
        <View style={{flex:1,backgroundColor:'#fff',paddingTop:10}}>
          <DrawerItemList {...props}/>
        </View>
        {/* 하단 고정 로그아웃 버튼 */}
        <View style={styles.logoutContainer}>
        <Pressable
          onPress={()=>alert('로그아웃')}
        >
          <Text style ={styles.logoutText}>로그아웃</Text>
        </Pressable>
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

export {HomeScreen,ProfileScreen,CustomDrawer};