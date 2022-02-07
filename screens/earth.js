import React, {Component} from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default class EarthScreen extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>Earth Screen Screen </Text>
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