import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useFetchRestaurants from '../services';
import { GlobalStyles } from '../constants/style';
import LoadingOverlay from '../component/atoms/LoadingOverlay';
import RenderingStars from '../component/molecules/RenderingStars';
import Menu from '../component/molecules/MenuCard';

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
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: selectedRestaurant.coverImageUrl }}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>{selectedRestaurant.name}</Text>
        <View style={styles.starsContainer}>
          <RenderingStars rating={selectedRestaurant.rating} />
        </View>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.subtitle}>About the restaurant </Text>
        <Text style={styles.desription}>{selectedRestaurant.description}</Text>
      </View>
      <View style={styles.flatListContainer}>
        <Text style={styles.subtitle}>Menu</Text>
        <FlatList
          data={selectedRestaurant.menu}
          keyExtractor={(item) => item.title.toString()}
          horizontal
          renderItem={({ item }) => <Menu item={item} />}
        />
      </View>
    </View>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary400,
  },
  imageContainer: {
    flex: 0.5,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardTitle: {
    color: GlobalStyles.colors.primary0,
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: '10%',
  },
  starsContainer: {
    bottom: '12%',
  },
  aboutContainer: {
    flex: 0.2,
    paddingTop: 20,
  },
  subtitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: GlobalStyles.colors.primary0,
    paddingHorizontal: 20,
  },
  desription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: GlobalStyles.colors.primary0,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  flatListContainer: {
    flex: 0.5,
  },
});
