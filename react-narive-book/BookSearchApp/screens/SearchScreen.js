import { View,Text,Button,TextInput,FlatList, Alert,Pressable,Image } from "react-native";
import { useState,useEffect } from "react";
import { ClientId,ClientSecret } from "../constants/apiConfig";
import BookItem from "../components/BookItem";
import SearchBooks from "../api/naverApi";

const SearchScreen=({navigation})=>{
  const [searchBook,setSearchBook]=useState('');
  const [books,setBooks]=useState([]);

  // 불러와
const Search=async()=>{
  if(searchBook.trim()===""){
    Alert.alert('뭐든 써주세요.')
  }
  console.log("반응해주세요?")
  try {
    const result = await SearchBooks(searchBook)
    if(!result.items){
      Alert.alert("없는 검색어입니다")
    }
    setBooks(result);
  } catch (error) {
    Alert.alert("불러오는데 실패",error.message)
  }
}

//  상세화면으로
  const goToDetail=(item)=>{
    navigation.navigate("DetailScreen",{item})
  }


  return(
    <View style={{flex:1,alignItems:'center'}}>
      <View style={{flexDirection:'row'}}>
      <TextInput 
        placeholder="검색어를 입력하세요."
        style={{width:'75%',borderWidth:1,margin:10}}
        value={searchBook}
        onChangeText={(text)=>setSearchBook(text)}
      />
      <Button title='검색' onPress={Search}/>
      </View>
      {/* FlatList자리 */}
      <BookItem books={books} _goDetailScreen={goToDetail}/>
    </View>
  )
}

export default SearchScreen;