import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity,Modal} from 'react-native';
import Slider from '@react-native-community/slider';
import { useState } from 'react';


import ModalPassword from './src/components/modal/ModalPassword';
export default function App() {


  const[value,setValue] = useState(6)

  
  const [senha,setSenha] = useState("")
  const [modalVisible , setModalVisible] = useState(false);
  const handleClose = () =>{
         if(modalVisible == true){
          setModalVisible((prevBoolean)=>false)

       }
  }
  const onChangeSliderValue = (value) =>{
       setValue((prevState)=>value.toFixed(0))
  }
   let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+"
   
     function generatePassord(){
         let password = ""
         for(let i = 0 ,n = charset.length; i <  value;i++){
              password += charset.charAt(Math.floor(Math.random() * n ))
         }
          setSenha((prevPassword)=>password)
          console.log(password)
         console.log(password.length)
          setModalVisible((prevBoolean)=>true)
     }
  return (

    <View style={styles.container}>
      
      <Image 
        source  = {require ( "./src/assets/logo.png")}
        style={styles.logo}
       />
        <Text style= {{textAlign:"center",fontWeight:"bold"}}>{value} caracteres</Text>
       <View style={styles.area}>
       <Slider
        style={{height:50}}

        minimumValue={6}
        maximumValue={25}
        minimumTrackTintColor='#0ac200'
        maximumTrackTintColor='#ff0000'
        onValueChange={onChangeSliderValue}
       />
       </View>
        <TouchableOpacity style={styles.btnGerar} onPress={generatePassord}>
          <Text style ={{textAlign:"center",color:"white"}}>Gerar Senha</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible} animationType='fade' >
          
          <ModalPassword senhaGerada = { senha } handleCloseModal={ handleClose}/>

          </Modal>            
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom:60,
  },
  area:{
    marginTop:14,
    marginBottom:14,
    width:"80%",
    backgroundColor:"#f1f1f1",
    borderRadius:10,
    padding:8,

  },btnGerar:{
    marginTop:14,
    width:"80%",
    alignItems:"center",
    justifyContent:"center",
    height:50,
    backgroundColor:"#0345ff",
    borderRadius:24,
    padding:10,
  }
});
