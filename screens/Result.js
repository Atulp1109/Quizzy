import React from 'react';
import Title from '../componets/Title';
import { StyleSheet,Text,View,Image,TouchableOpacity } from 'react-native'

const Result = ({navigation,route}) => {
  const {score}=route.params;

  const resultImage=score>=40?require('./passed.png'):require('./failed.jpg'  )
  return (
    <View style={styles.Container}>
      <View>
      <Title titleText='RESULT'/>
      <Text style={styles.ScoreText}>SCORE</Text>
      <Text style={styles.score}>{score}</Text>
      </View>
      <View style={styles.BannerContainer}>
      <Image  source={resultImage} 
        style={styles.banner}
        resizeMode='contain'
        />
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
          <Text style={styles.buttonText}>Go To Home</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Result

const styles=StyleSheet.create({
  Container:{
    paddingTop:40,
    paddingHorizontal:20,
    height:'100%',
    backgroundColor:'#ffddd2'
  },
  BannerContainer:{
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    flex:1
  },
  banner:{
    height:300,
    width:300,
    borderRadius:30,
  },
  button:{
    backgroundColor:'#48cae4',
      padding:12,
      borderRadius:16,
      marginBottom:30,
      width:'100%'

  },
  buttonText:{
    fontSize:20,
    textAlign:'center',
    padding:4,

  },
  score:{
    fontSize:24,
    fontWeight:'800',
    alignSelf:'center'
  },
  ScoreText:{
    fontSize:24,
    fontWeight:'800',
    alignSelf:'center'
  }
})
