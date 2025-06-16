import { FlatList } from "react-native";
import { Pressable,Image,Text,View } from "react-native";




const BookItem=({_goDetailScreen,books})=>{
  return(
    <FlatList 
      data={books}
      keyExtractor={(item)=>item.link}
      renderItem={({item})=>(
        <View style={{marginBottom:5,borderBottomWidth:1}}>
          <Pressable style ={{flexDirection:'row'}} onPress={()=>_goDetailScreen(item)}>
            <Image source={{uri:item.image}} style={{width:100,height:120,marginLeft:10}}/>
            <View style={{flexDirection:'column' ,width:'65%'}}>
              <Text style={{fontSize:15}}>{item.title} </Text>
              <Text style={{fontSize:10}}>{item.author}</Text>
            </View>
          </Pressable>
        </View>
      )}
      
      />
  )
}

export default BookItem;