import React from 'react'
import { Image, StyleSheet,Text,TouchableOpacity,View } from 'react-native'
import Title from '../componets/Title'

const Home = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Title titleText='QUIZZY'/>
      <View style={styles.bannerContainer}>
        <Image source={require('./homeImage.jpg')} 
        style={styles.banner}
        />
      </View>
     <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
        <Text style={styles.buttonText}>start</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Home

const styles=StyleSheet.create({
    banner:{
        height:300,
        width:300,
        borderRadius:30,
    },
    bannerContainer:{
      justifyContent:'center',
      alignItems:'center',
      flex:1

    },
    Container:{
      paddingTop:40,
      paddingHorizontal:20,
      height:'100%',
      backgroundColor:'#ffddd2'
    },
    button:{
      width:'100%',
      backgroundColor:'#48cae4',
      padding:16,
      borderRadius:16,
      marginBottom:30
      
    },
    buttonText:{
      fontSize:24,
      textAlign:'center'
    }
})
