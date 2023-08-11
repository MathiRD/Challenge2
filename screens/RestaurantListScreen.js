import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import HeaderRestaurants from "../component/atoms/Header";
import { GlobalStyles } from "../constants/style";
import useFetchRestaurants from "../services";

import LoadingOverlay from "../component/atoms/LoadingOverlay";

const RestaurantListScreen = () => {
  const { data, isLoading } = useFetchRestaurants();
  const navigation = useNavigation();

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <HeaderRestaurants title={"Restaurantes"} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                navigation.navigate("DetailsScreen", {
                  restaurantId: item.id,
                });
              }}
            >
              <Image
                source={{ uri: item.coverImageUrl }}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary400,
    flex: 1,
  },
  cardContainer: {
    alignItems: "center",
  },
  RestaurantCardText: {
    color: GlobalStyles.colors.primary0,
  },
  card: {
    width: "93%",
    height: 150,
    flexShrink: 0,
    marginVertical: 10,
    marginHorizontal: 22,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  cardInfo: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cardTitle: {
    color: GlobalStyles.colors.primary0,
    fontFamily: "Poppins-Bold",
    fontSize: 32,
  },
  menuImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginHorizontal: 5,
  },
});

export default RestaurantListScreen;
