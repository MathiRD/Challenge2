<<<<<<< HEAD
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import useFetchRestaurants from "../services";
import { GlobalStyles } from "../constants/style";
import LoadingOverlay from "../Components/atoms/LoadingOverlay";
=======
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useFetchRestaurants from '../services'
import { GlobalStyles } from '../constants/style'
import LoadingOverlay from '../components/atoms/LoadingOverlay'
>>>>>>> 690b8f1bcf0fd4660b3e98e1cf43c918763b304c

const RestaurantDetailsScreen = ({ route }) => {
  const { data, isLoading } = useFetchRestaurants()

  const selectedRestaurantId = route.params?.restaurantId
  const selectedRestaurant = data.find(
    restaurant => restaurant.id === selectedRestaurantId
  )

  if (isLoading) {
    return <LoadingOverlay />
  }

  return (
    <View style={styles.outerContainer}>
      <FlatList
        data={selectedRestaurant.menu}
        keyExtractor={item => item.title.toString()}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.menuCard}>
            <Image source={{ uri: item.imageUrl }} style={styles.menuImage} />
            <Text style={styles.cardText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default RestaurantDetailsScreen

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary400
  },
  menuImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginHorizontal: 5
  },
  menuCard: {},
  cardText: {
    color: 'white'
  }
})
