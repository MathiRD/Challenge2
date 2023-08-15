import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { GlobalStyles } from '../constants/style';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import Button from '../component/atoms/Button';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import { InitialScreenNavigationProp } from '../types/types';
import BackGround from '../component/atoms/LinearGradient';

SplashScreen.preventAutoHideAsync();

const InitialScreen = () => {
  const navigation = useNavigation<InitialScreenNavigationProp>();

  const [fontsLoaded] = useFonts({
    'BebasNeue-Regular': require('../assets/fonts/BebasNeue-Regular.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  const navegarParaRestaurantes = () => {
    navigation.navigate('restaurantListScreen');
  };
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  };



  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground source={require('../assets/imgs/background.png')} style={styles.BackgroundImageStyle}>
          <BackGround>
            <View style={styles.content}>
              <View style={styles.MainScreenTextContainer}>
                <View style={styles.MSContainer}>
                  <Text style={[styles.MainScreenText]}>FIND D BEST</Text>
                </View>
                <View>
                  <Text style={[styles.MainScreenSubText]}>Restaurant</Text>
                </View>
              </View>
              <Button
                onClick={navegarParaRestaurantes}
                style={styles.buttonInicial}
              >
                Access
              </Button>
            </View>
          </BackGround>
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
    alignItems: 'center',
    flex: 1,
  },
  MSContainer: {
    borderCollor: 'red',
    borderRadius: 1,
  },
  MSSubContainer: {},
  MainScreenTextContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
  },
  MainScreenText: {
    fontFamily: 'BebasNeue-Regular',
    textAlign: 'center',
    fontSize: 72,
    fontWeight: '400',
    color: GlobalStyles.colors.primary0,
  },
  MainScreenSubText: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
    color: GlobalStyles.colors.primary0,
    textAlign: 'center',
    fontWeight: '400',
  },
  buttonInicial: {
    backgroundColor: GlobalStyles.colors.buttonPrincipal,
    marginBottom: 25,
    borderRadius: 8,
    marginVertical: 25,
  },
});

export default InitialScreen;
