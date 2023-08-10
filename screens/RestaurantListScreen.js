import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
// import HeaderRestaurants from "../Components/Header";
import HeaderRestaurants from "../components/Header";
import { GlobalStyles } from "../constants/style";
import useFetchRestaurants from "../services";
// import { isLoading, data } from "../services";
import LoadingOverlay from "../components/atoms/LoadingOverlay";

const RestaurantListScreen = () => {
  const { data, isLoading } = useFetchRestaurants();
  const navigation = useNavigation();

  // const [restaurants, setRestaurants] = useState([])
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   axios
  //   .get('https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev')
  //   .then(response => {
  //     setRestaurants(response.data.body.restaurants)
  //     setLoading(false)
  //   })
  //   .catch(error => {
  //     console.error(error)
  //       setLoading(false)
  //     })
  //   })

  //   if (loading) {
  //     return <ActivityIndicator />
  //   }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  const navigateToDetails = () => {
    navigation.navigate("DetailsScreen");
  };

  return (
    <View style={styles.container}>
      <HeaderRestaurants title={"Restaurantes"} />
      {/* <View style={styles.containerRestaurants}> */}
      {/* <TouchableOpacity onPress={navigateToDetails}>
          <Text style={styles.RestaurantCardText}></Text>
        </TouchableOpacity> */}
      {/* </View> */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigateToDetails(item)}
            >
              <Image
                source={{ uri: item.coverImageUrl }}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.name}</Text>
              </View>
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
    // marginTop: 10,
    // alignItems: "center",
    // flex: 1,
  },
  RestaurantCardText: {
    color: GlobalStyles.colors.primary0,
  },
  card: {
    width: 370,
    height: 150,
    flexShrink: 0,
    marginVertical: 10,
    marginHorizontal: 22,
    borderRadius: 12,
    backgroundColor: GlobalStyles.colors.primary100,
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
    elevation: 5,
    lineHeight: 32,
  },
  menuImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginHorizontal: 5,
  },
});

export default RestaurantListScreen;
