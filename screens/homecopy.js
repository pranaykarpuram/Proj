/*import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen </Text>

        <View style={{ marginTop: 50 }}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Mercury")
            }}
            title="Mercury"
          />
        </View>

        <View style={{ marginTop: 50 }}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Venus")
            }}
            title="Venus"
          />
        </View>

        <View style={{ marginTop: 50 }}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Earth")
            }}
            title="Earth"
          />
        </View>

        <View style={{ marginTop: 50 }}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Mars")
            }}
            title="Mars"
          />
        </View>

        <View style={{ marginTop: 50 }}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Jupiter")
            }}
            title="Jupiter"
          />
        </View>

        <View style={{ marginTop: 50 }}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Saturn")
            }}
            title="Saturn"
          />
        </View>

        <View style={{ marginTop: 50 }}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Uranus")
            }}
            title="Uranus"
          />
        </View>

        <View style={{ marginTop: 50 }}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Neptune")
            }}
            title="Neptune"
          />
        </View>


        <View style={{ marginTop: 50 }}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Sun")
            }}
            title="Sun"
          />
        </View>

      </View>
    );
  }
}
*/

import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Alert,
    FlatList,
    Image,
    ImageBackground,
    Dimensions
} from "react-native";

const planets = {
  id:"a1",
  name : EarthScreen
}

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: []
        };
    }


    renderItem = ({ item }) => {
        let meteor = item
        let bg_img, speed, size;
        if (meteor.threat_score <= 30) {
            bg_img = require("../assets/meteor_bg1.png")
            speed = require("../assets/meteor_speed3.gif")
            size = 100
        } else if (meteor.threat_score <= 75) {
            bg_img = require("../assets/meteor_bg2.png")
            speed = require("../assets/meteor_speed3.gif")
            size = 150
        } else {
            bg_img = require("../assets/meteor_bg3.png")
            speed = require("../assets/meteor_speed3.gif")
            size = 200
        }
        return (
            <View>
                <ImageBackground source={bg_img} style={styles.backgroundImage}>
                    <View styles={styles.gifContainer}>
                        <Image source={speed} style={{ width: size, height: size, alignSelf: "center" }}></Image>
                        <View>
                            <Text style={[styles.cardTitle, { marginTop: 400, marginLeft: 50 }]}>{item.name}</Text>
                            <Text style={[styles.cardText, { marginTop: 20, marginLeft: 50 }]}>Closest to Earth - {item.close_approach_data[0].close_approach_date_full}</Text>
                            <Text style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}>Minimum Diameter (KM) - {item.estimated_diameter.kilometers.estimated_diameter_min}</Text>
                            <Text style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}>Maximum Diameter (KM) - {item.estimated_diameter.kilometers.estimated_diameter_max}</Text>
                            <Text style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}>Velocity (KM/H) - {item.close_approach_data[0].relative_velocity.kilometers_per_hour}</Text>
                            <Text style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}>Missing Earth by (KM) - {item.close_approach_data[0].miss_distance.kilometers}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    };

    keyExtractor = (item, index) => index.toString();

    render() {
        
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <FlatList
                        keyExtractor={(item)=>item.id}
                        data={planets}
                        renderItem={this.renderItem}
                        horizontal={true}
                    />
                </View >
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    meteorContainer: {
        flex: 0.85
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        padding: 10
    },
    cardTitle: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "bold",
        color: "white"
    },
    cardText: {
        color: "white"
    },
    threatDetector: {
        height: 10,
        marginBottom: 10
    },
    gifContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    meteorDataContainer: {
        justifyContent: "center",
        alignItems: "center",

    }
});