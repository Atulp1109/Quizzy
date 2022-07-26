import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const Title = ({titleText}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>{titleText}</Text>
    </View>
  )
}

export default Title

const styles=StyleSheet.create({
  Container:{
    paddingVertical:16,
    alignItems:'center',
  },
  title:{
    fontSize:40,
    fontWeight:'600',
  }
})