import React, {Component} from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default class MercuryScreen extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>Mercury Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignSelf:"center"
    }
})