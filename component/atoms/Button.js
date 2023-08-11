import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { GlobalStyles } from '../../constants/style'

const Button = () => {
  const navigation = useNavigation()

  const navegarParaRestaurantes = () => {
    navigation.navigate('restaurantListScreen')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={navegarParaRestaurantes}>
        <Text style={[styles.textoBotao, { fontFamily: 'Poppins-Regular' }]}>
          Acessar
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  botao: {
    backgroundColor: GlobalStyles.colors.buttonPrincipal,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.buttonBorder,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '90%',
    marginBottom: 20,
    paddingHorizontal: 120,
    height: 50,
    alignItems: 'center',
    marginTop: 250
  },
  textoBotao: {
    fontSize: 20,
    color: GlobalStyles.colors.primary0,
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: 0.3,
    fontFamily: GlobalStyles.fonts.poppins
  }
})

export default Button
