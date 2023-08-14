import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useFetchRestaurants from '../services';
import { GlobalStyles } from '../constants/style';
import LoadingOverlay from '../component/atoms/LoadingOverlay';

const RestaurantDetailsScreen = ({ route }) => {
  const { data, isLoading } = useFetchRestaurants();

  const selectedRestaurantId = route.params?.restaurantId;
  const selectedRestaurant = data.find(
    (restaurant) => restaurant.id === selectedRestaurantId
  );

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.outerContainer}>
      <View>
        <Image
          source={{ uri: selectedRestaurant.coverImageUrl }}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>{selectedRestaurant.name}</Text>
        <Text style={styles.rank}>{selectedRestaurant.rating}</Text>
      </View>
      <FlatList
        data={selectedRestaurant.menu}
        keyExtractor={(item) => item.title.toString()}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.menuCard}>
            <Image source={{ uri: item.imageUrl }} style={styles.menuImage} />
            <Text style={styles.cardText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary400,
  },
  cardImage: {
    width: 414,
    height: 361,
  },
  cardTitle: {
    color: GlobalStyles.colors.primary0,
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    position: 'absolute',
    bottom: '10%',
  },
  rank: {
    color: GlobalStyles.colors.primary0,
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    position: 'absolute',
    bottom: '0%',
  },
  menuImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  menuCard: {},
  cardText: {
    color: 'white',
  },
});
