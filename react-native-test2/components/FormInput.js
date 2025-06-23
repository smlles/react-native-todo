import { StyleSheet,TextInput,View,Text } from "react-native";




const FormInput=({placeholder,onChangeText,value,errorMessage,onBlur,secureTextEntry})=>{
  
  return(
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
      />
      
      <Text style={styles.error}>{errorMessage}</Text>
    </View>
  )
}


export default FormInput;





const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});