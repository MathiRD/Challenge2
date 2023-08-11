import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/style'

const HeaderRestaurants = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: GlobalStyles.colors.primary600,
    padding: 16,
    height: 90,
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default HeaderRestaurants
