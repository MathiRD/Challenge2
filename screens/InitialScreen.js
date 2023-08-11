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
import { GlobalStyles } from "../constants/style";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import Background from "../assets/imgs/background.png";

// const Background = require("../assets/imgs/background.png");

SplashScreen.preventAutoHideAsync();

const InitialScreen = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "BebasNeue-Regular": require("../assets/fonts/BebasNeue-Regular.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const navigateToRestaurants = () => {
    navigation.navigate("restaurantListScreen");
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground source={Background} style={styles.BackgroundImageStyle}>
        <View style={styles.content}>
          <View style={styles.MainScreenTextContainer}>
            <View style={styles.MSContainer}>
              <Text
                style={[
                  styles.MainScreenText,
                  { fontFamily: "BebasNeue-Regular" },
                ]}
              >
                FIND D BEST
              </Text>
            </View>
            <View>
              <Text
                style={[
                  styles.MainScreenSubText,
                  { fontFamily: "Poppins-Regular" },
                ]}
              >
                Restaurant
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToRestaurants}
          >
            <Text
              style={[styles.buttonText, { fontFamily: "Poppins-Regular" }]}
            >
              Acessar
            </Text>
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
  },
  content: {
    alignItems: "center",
    flex: 1,
  },
  MSContainer: {
    borderCollor: "red",
    borderRadius: 1,
  },
  MSSubContainer: {},
  MainScreenTextContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 70,
  },
  MainScreenText: {
    textAlign: "center",
    fontSize: 72,
    fontWeight: "400",
    color: GlobalStyles.colors.primary0,
  },
  MainScreenSubText: {
    fontSize: 24,
    color: "#FFF",
    textAlign: "center",
    fontWeight: "400",
    marginTop: -10
  },
  button: {
    backgroundColor: "#E73030",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ff0000",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "90%",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
    fontWeight: "400",
    letterSpacing: 0.3,
  },
});

export default InitialScreen;
