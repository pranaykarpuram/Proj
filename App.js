import  React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'

import MercuryScreen from './screens/mercury';
import VenusScreen from './screens/venus';
import EarthScreen from './screens/earth';
import MarsScreen from './screens/mars';
import JupiterScreen from './screens/jupiter';
import SaturnScreen from './screens/saturn';
import UranusScreen from './screens/uranus';
import NeptuneScreen from './screens/neptune';
import SunScreen from './screens/sun';

export default class App extends Component{
  render(){
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({

  Home : HomeScreen,
  Mercury : MercuryScreen,
  Venus : VenusScreen,
  Earth : EarthScreen,
  Mars : MarsScreen,
  Jupiter : JupiterScreen,
  Saturn : SaturnScreen,
  Uranus : UranusScreen,
  Neptune : NeptuneScreen,
  Sun : SunScreen
  
})

const AppContainer = createAppContainer(AppNavigator)