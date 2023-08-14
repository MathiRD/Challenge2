import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import HeaderRestaurants from '../component/atoms/Header';
import { GlobalStyles } from '../constants/style';
import useFetchRestaurants from '../services';
import LoadingOverlay from '../component/atoms/LoadingOverlay';
import RestaurantCard from '../component/molecules/RestaurantCard';

const RestaurantListScreen = () => {
  const { data, isLoading } = useFetchRestaurants();

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <HeaderRestaurants title={'Restaurantes'} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RestaurantCard restaurant={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary400,
    flex: 1,
  },
});

export default RestaurantListScreen;
