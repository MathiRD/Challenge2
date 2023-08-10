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

const RestaurantListScreen = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate("DetailsScreen");
  };

  useEffect(() => {
    axios
      .get("https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev")
      .then((response) => {
        setRestaurants(response.data.body.restaurants);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  });

  if (loading) {
    return < ActivityIndicator />
  }

  return (
    <View style={styles.container}>
      <View style={styles.textProvisory}>
        {/* <Text style={styles.RestaurantCardText}>Hello</Text> */}
        <TouchableOpacity onPress={navigateToDetails}>
          <Text style={styles.RestaurantCardText}></Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={restaurants}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigateToDetails(item)}>
            <Image source={{ uri: item.coverImageUrl }} style={styles.cardImage} resizeMode="cover" />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{item.name}</Text>
            </View>
            <FlatList
              data={item.menu}
              keyExtractor={(menuItem, index) => `${item.id}-${index}`}
              horizontal
              renderItem={({ item: menuItem }) => (
                <Image source={{ uri: menuItem.imageUrl }} style={styles.menuImage} />
              )}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c2c2e",
    flex: 1,
  },
  textProvisory: {
    marginTop: 100,
    alignItems: "center",
  },
  RestaurantCardText: {
    color: "#fff",
  },
  card: {
    width: 370,
    height: 150,
    flexShrink: 0,
    marginVertical: 10,
    marginHorizontal: 22,
    borderRadius: 12,
    backgroundColor: '#43ff64d9',
    overflow: 'hidden',
    elevation: 5
  },  
  cardImage: {
    width: '100%',
    height: '100%'
  },
  cardInfo: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  cardTitle: {
    color: '#fff',
    elevation: 5,
    lineHeight: 32

  },
  menuImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginHorizontal: 5
  }
});

export default RestaurantListScreen;
