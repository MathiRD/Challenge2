import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
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
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <RestaurantCard restaurant={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary400,
    flex: 1,
  },
  listContainer: {
    marginTop: 15
  },
});

export default RestaurantListScreen;
