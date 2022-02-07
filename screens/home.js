import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (

      <ScrollView style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <ImageBackground
          source={require('../assets/bg_image.png')}
          style={styles.backgroundImage}
        >

          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Space App</Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Sun')}>
            <Text style={styles.routeText}> Sun </Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Text style={styles.bgDigit}>Boss</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate("Mercury") }>
            <Text style={styles.routeText}>Mercury</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Text style={styles.bgDigit}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate("Venus")}>
            <Text style={styles.routeText}>Venus</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Text style={styles.bgDigit}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() =>   this.props.navigation.navigate("Earth")}>
            <Text style={styles.routeText}>Earth</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Text style={styles.bgDigit}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Mars')}>
            <Text style={styles.routeText}>Mars</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Text style={styles.bgDigit}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Jupiter')}>
            <Text style={styles.routeText}>Jupiter</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Text style={styles.bgDigit}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Saturn')}>
            <Text style={styles.routeText}>Saturn</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Text style={styles.bgDigit}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Uranus')}>
            <Text style={styles.routeText}>Uranus</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Text style={styles.bgDigit}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Neptune')}>
            <Text style={styles.routeText}>Neptune</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Text style={styles.bgDigit}>8</Text>
          </TouchableOpacity>

        </ImageBackground>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
  },
  routeCard: {
      flex: 0.25,
      marginLeft: 50,
      marginRight: 50,
      marginTop: 50,
      borderRadius: 30,
      backgroundColor: 'white'
  },
  titleBar: {
      flex: 0.15,
      justifyContent: "center",
      alignItems: "center"
  },
  titleText: {
      fontSize: 40,
      fontWeight: "bold",
      color: "white"
  },
  routeText: {
      fontSize: 35,
      fontWeight: "bold",
      color: "black",
      marginTop: 75,
      paddingLeft: 30
  },
  knowMore: {
      paddingLeft: 30,
      color: "red",
      fontSize: 15
  },
  bgDigit: {
      position: "absolute",
      color: "rgba(183, 183, 183, 0.5)",
      fontSize: 150,
      right: 20,
      bottom: -15,
      zIndex: -1
  },
  iconImage: {
      position: "absolute",
      height: 200,
      width: 200,
      resizeMode: "contain",
      right: 20,
      top: -80
  }
});