import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

const Background = require("../assets/imgs/background.png");

const InitialScreen = () => {
  const navigation = useNavigation();

  const navigateToRestaurants = () => {
    navigation.navigate("restaurantListScreen");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Background} style={styles.BackgroundImageStyle}>
        <View style={styles.content}>
          <View style={styles.MainScreenTextContainer}>
            <Text style={styles.MainScreenText}> FIND D BEST </Text>
            <Text style={styles.MainScreenSubText}> Restaurant </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToRestaurants}
          >
            <Text style={styles.buttonText}>Acess</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BackgroundImageStyle: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  content: {
    alignItems: "center",
    marginBottom: 40,
    marginHorizontal: 25,
  },
  MainScreenTextContainer: {
    width: 260,
    height: 600,
    alignItems: "center",
    marginBottom: 40,
    marginHorizontal: 25,
    paddingTop: 100,
  },
  MainScreenText: {
    textAlign: "center",
    fontSize: 72,
    fontWeight: "400",
    color: "#fff",
    fontFamily: "Bebas Neue",
  },
  MainScreenSubText: {
    fontSize: 20,
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#E73030",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ff0000",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
});

export default InitialScreen;
