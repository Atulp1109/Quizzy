import React, { useEffect, useState } from 'react'
import { StyleSheet,Image,Text,View,TouchableOpacity } from 'react-native';

const  shuffleArray=(array)=> {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}



const Quiz = ({navigation}) => {
  
  const [questions,setQuestions]=useState();
  const [quesNo,setQuesNo]=useState(0);
  const [options,setOptions]= useState([]);
  const [score,setScore]=useState(0);
  const [isLoading,setIsLoading]=useState(false);
 
  const getQuiz=async()=>{
    setIsLoading(true);
    const url='https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res=await fetch(url);
    const data=await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false);
   
    
  };
  
  useEffect(()=>{
    getQuiz();
  },[]);

  const handelNext=()=>{
    setQuesNo(quesNo+1);
    setOptions(generateOptionsAndShuffle(questions[quesNo+1]))
    
  }

  const generateOptionsAndShuffle=(_question)=>{
    const options=[..._question.incorrect_answers];
    options.push(_question.correct_answer);
    
    shuffleArray(options);
    return options
    
  }

  const handelSelectedOption=(_option)=>{
    if(_option===questions[quesNo].correct_answer){
      setScore(score+10);
    }
    if(quesNo!==9){

      setQuesNo(quesNo+1);
      setOptions(generateOptionsAndShuffle(questions[quesNo+1]));
    }
    else if(quesNo==9){
      navigation.navigate('Result',{score})
    }

  }
  const handelSubmit=()=>{
    navigation.navigate('Result',{score})
  }

  return (
    <View style={styles.Container}>
      {isLoading?<View style={styles.bannerContainer}>
        <Image source={require('./loading.gif')} style={styles.Loading}/>
      </View>: questions && (
        <View style={styles.parent}>
       <View style={styles.Top}>
        <Text style={styles.Question}>Q.{quesNo+1} { decodeURIComponent(questions[quesNo].question) }</Text>
      </View>
      <View style={styles.middle}>
        <TouchableOpacity style={styles.OptionButton} onPress={()=>{handelSelectedOption(options[0])}}>
          <Text style={styles.Option}>{ decodeURIComponent(options[0]) }</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OptionButton} onPress={()=>{handelSelectedOption(options[1])}}>
          <Text style={styles.Option}>{ decodeURIComponent(options[1]) }</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OptionButton} onPress={()=>{handelSelectedOption(options[2])}}>
          <Text style={styles.Option}>{ decodeURIComponent(options[2]) }</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OptionButton} onPress={()=>{handelSelectedOption(options[3])}}>
          <Text style={styles.Option}>{ decodeURIComponent(options[3]) }</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.ButtonContainer}>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity> */}
        {quesNo!==9 && 
        <TouchableOpacity style={styles.button} onPress={handelNext}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>}
        {quesNo===9 && <TouchableOpacity  style={styles.button} onPress={handelSubmit}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>}
        
       
      </View>
      </View>
        )
        
}
    </View>
  )
}

export default Quiz

const styles=StyleSheet.create({
  Container:{
    paddingTop:40,
    paddingHorizontal:20,
    height:'100%',
    backgroundColor:'#ffddd2'
  },
  Top:{
    padding:12,
    margin:12,
  },
  middle:{
    marginVertical:16,
    flex:1
   },
  ButtonContainer:{
    marginBottom:12,
    marginVertical:16,
    justifyContent:'space-between',
    flexDirection:'row',
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
  Question:{
    fontSize:24,
  },
  Option:{
        fontSize:18,
        fontWeight:'600',
        color:'#0096c7'
  },
  OptionButton:{
    padding:12,
    marginVertical:6,
    backgroundColor:'#ddbea9',
    borderRadius:12

  },
  parent:{
    height:'100%'
  },
  Loading:{
    height:300,
    width:300,
    borderRadius:12,
    
    
  },
  bannerContainer:{
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:250
    },

  

})
