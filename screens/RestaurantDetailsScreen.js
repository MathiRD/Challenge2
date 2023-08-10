import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RestaurantDetailsScreen = () => {
  // const { data, isLoading } = useFetchRestaurants();

  // const selectedRestaurantId = route.params?.restaurantId;

  return (
    <View>
      {/* <FlatList
              data={item.menu}
              keyExtractor={(menuItem, index) => `${item.id}-${index}`}
              horizontal
              renderItem={({ item: menuItem }) => (
                <Image
                  source={{ uri: menuItem.imageUrl }}
                  style={styles.menuImage}
                />
              )}
            /> */}
      <Text>RestaurantDetailsScreen</Text>
    </View>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({});
